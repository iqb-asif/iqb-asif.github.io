"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function SpiderWebCanvas({
  density = 55,
  className = "",
}: {
  density?: number;
  className?: string;
}) {
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

    const styles = getComputedStyle(document.documentElement);
    const getColor = (v: string) => styles.getPropertyValue(v).trim() || "#3355e0";

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

      const count = Math.round((width * height) / (18000 / (density / 55)));
      nodes.current = Array.from({ length: Math.max(18, Math.min(count, 90)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    }
    function onLeave() {
      mouse.current.active = false;
    }

    const LINK_DIST = 130;
    const MOUSE_DIST = 170;
    const blue = getColor("--accent-blue");
    const red = getColor("--accent-red");

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const pts = nodes.current;

      // drift nodes
      if (!reduceMotion) {
        for (const n of pts) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      // node-to-node web
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            const o = (1 - d / LINK_DIST) * 0.35;
            ctx!.strokeStyle = blue;
            ctx!.globalAlpha = o;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // mouse web — the interactive "spider" focal point
      if (mouse.current.active) {
        for (const n of pts) {
          const d = Math.hypot(n.x - mouse.current.x, n.y - mouse.current.y);
          if (d < MOUSE_DIST) {
            const o = (1 - d / MOUSE_DIST) * 0.75;
            ctx!.strokeStyle = red;
            ctx!.globalAlpha = o;
            ctx!.lineWidth = 1.2;
            ctx!.beginPath();
            ctx!.moveTo(n.x, n.y);
            ctx!.lineTo(mouse.current.x, mouse.current.y);
            ctx!.stroke();
          }
        }
        ctx!.globalAlpha = 0.9;
        ctx!.fillStyle = red;
        ctx!.beginPath();
        ctx!.arc(mouse.current.x, mouse.current.y, 2.5, 0, Math.PI * 2);
        ctx!.fill();
      }

      // node dots
      ctx!.globalAlpha = 0.9;
      ctx!.fillStyle = blue;
      for (const n of pts) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

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
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
