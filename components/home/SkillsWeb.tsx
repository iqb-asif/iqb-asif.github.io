"use client";

import { useEffect, useRef } from "react";
import { skillCategories } from "@/data/skills";

const FLAT_SKILLS: { label: string; cat: number }[] = skillCategories.flatMap((c, ci) =>
  c.skills.map((s) => ({ label: s, cat: ci }))
);

interface Node {
  x: number; // 0-1 normalized
  y: number;
  label: string;
  cat: number;
  vx: number;
  vy: number;
}

export function SkillsWeb({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });
  const nodes = useRef<Node[]>([]);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // deterministic layout: place nodes in a loose ring with slight jitter
    function layout() {
      const N = FLAT_SKILLS.length;
      nodes.current = FLAT_SKILLS.map(({ label, cat }, i) => {
        const angle = (i / N) * Math.PI * 2;
        const jitter = ((i * 37) % 10) / 100 - 0.05;
        const radius = 0.34 + ((i % 3) * 0.06);
        return {
          x: 0.5 + Math.cos(angle) * (radius + jitter),
          y: 0.5 + Math.sin(angle) * (radius + jitter) * 0.92,
          label,
          cat,
          vx: (((i * 13) % 7) - 3) * 0.00025,
          vy: (((i * 19) % 7) - 3) * 0.00025,
        };
      });
    }
    layout();

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / width;
      mouse.current.y = (e.clientY - rect.top) / height;
      mouse.current.active = true;
    }
    function onLeave() {
      mouse.current.active = false;
    }

    const styles = getComputedStyle(document.documentElement);
    const getColor = (v: string) => styles.getPropertyValue(v).trim();

    function draw() {
      const border = getColor("--border");
      const blue = getColor("--accent-blue");
      const red = getColor("--accent-red");
      const amber = getColor("--accent-amber");
      const catColors = [blue, red, amber, blue, red];
      const textSecondary = getColor("--text-secondary");
      const text = getColor("--text");

      ctx!.clearRect(0, 0, width, height);

      const pts = nodes.current;

      if (!reduceMotion) {
        for (const n of pts) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0.06 || n.x > 0.94) n.vx *= -1;
          if (n.y < 0.06 || n.y > 0.94) n.vy *= -1;
        }
      }

      const px = (n: Node) => n.x * width;
      const py = (n: Node) => n.y * height;
      const mx = mouse.current.x * width;
      const my = mouse.current.y * height;
      const MOUSE_RADIUS = Math.min(width, height) * 0.42;

      // proximity-based highlight strength per node
      const strength = pts.map((n) => {
        if (!mouse.current.active) return 0;
        const d = Math.hypot(px(n) - mx, py(n) - my);
        return Math.max(0, 1 - d / MOUSE_RADIUS);
      });

      // static web: connect each node to its two nearest neighbors
      for (let i = 0; i < pts.length; i++) {
        const distances = pts
          .map((o, j) => ({ j, d: i === j ? Infinity : Math.hypot(px(pts[i]) - px(o), py(pts[i]) - py(o)) }))
          .sort((a, b) => a.d - b.d)
          .slice(0, 2);
        for (const { j } of distances) {
          const s = Math.max(strength[i], strength[j]);
          const edgeColor = catColors[pts[i].cat % catColors.length];
          ctx!.strokeStyle = s > 0.05 ? edgeColor : border;
          ctx!.globalAlpha = s > 0.05 ? 0.25 + s * 0.5 : 0.35;
          ctx!.lineWidth = s > 0.3 ? 1.4 : 1;
          ctx!.beginPath();
          ctx!.moveTo(px(pts[i]), py(pts[i]));
          ctx!.lineTo(px(pts[j]), py(pts[j]));
          ctx!.stroke();
        }
      }

      // mouse-to-node lines for nearby nodes
      if (mouse.current.active) {
        for (const n of pts) {
          const d = Math.hypot(px(n) - mx, py(n) - my);
          if (d < MOUSE_RADIUS) {
            ctx!.strokeStyle = catColors[n.cat % catColors.length];
            ctx!.globalAlpha = (1 - d / MOUSE_RADIUS) * 0.5;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(px(n), py(n));
            ctx!.lineTo(mx, my);
            ctx!.stroke();
          }
        }
      }

      // nodes + labels
      ctx!.globalAlpha = 1;
      pts.forEach((n, i) => {
        const s = strength[i];
        const r = 2.5 + s * 2;
        const catColor = catColors[n.cat % catColors.length];
        ctx!.fillStyle = s > 0.05 ? catColor : textSecondary;
        ctx!.beginPath();
        ctx!.arc(px(n), py(n), r, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.font = `${s > 0.2 ? "600" : "400"} ${10 + s * 1.5}px var(--font-mono), monospace`;
        ctx!.fillStyle = s > 0.2 ? text : textSecondary;
        ctx!.globalAlpha = 0.55 + s * 0.45;
        ctx!.textBaseline = "middle";
        const labelX = px(n) + (n.x > 0.5 ? 8 : -8);
        ctx!.textAlign = n.x > 0.5 ? "left" : "right";
        ctx!.fillText(n.label, labelX, py(n));
        ctx!.globalAlpha = 1;
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-label="Interactive diagram of skills" />;
}
