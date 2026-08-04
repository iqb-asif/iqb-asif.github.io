"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "import", x: 60, y: 40, label: "Import" },
  { id: "validate", x: 220, y: 40, label: "Validate" },
  { id: "db", x: 380, y: 40, label: "Database" },
  { id: "analytics", x: 380, y: 160, label: "Analytics" },
  { id: "risk", x: 220, y: 160, label: "Risk" },
  { id: "report", x: 60, y: 160, label: "Report" },
  { id: "dashboard", x: 60, y: 280, label: "Dashboard" },
  { id: "export", x: 220, y: 280, label: "Export" },
];

const edges: [string, string][] = [
  ["import", "validate"],
  ["validate", "db"],
  ["db", "analytics"],
  ["analytics", "risk"],
  ["risk", "report"],
  ["report", "dashboard"],
  ["dashboard", "export"],
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function PipelineVisual() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
      <svg
        viewBox="0 0 460 340"
        className="w-full h-full"
        role="img"
        aria-label="Diagram of the Mizan Analytics data pipeline: import, validate, database, analytics, risk, report, dashboard, export."
      >
        {/* faint grid */}
        <defs>
          <pattern id="grid" width="23" height="23" patternUnits="userSpaceOnUse">
            <path d="M 23 0 L 0 0 0 23" fill="none" stroke="var(--border)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="460" height="340" fill="url(#grid)" opacity={0.5} />

        {/* edges */}
        {edges.map(([from, to], i) => {
          const a = findNode(from);
          const b = findNode(to);
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x + 24}
              y1={a.y + 12}
              x2={b.x + 24}
              y2={b.y + 12}
              stroke="var(--accent-blue)"
              strokeWidth="1.5"
              strokeOpacity={0.4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: "easeInOut" }}
            />
          );
        })}

        {/* traveling pulse along the whole chain */}
        {edges.map(([from, to], i) => {
          const a = findNode(from);
          const b = findNode(to);
          return (
            <motion.circle
              key={`pulse-${from}-${to}`}
              r={3}
              fill="var(--accent-red)"
              initial={{ cx: a.x + 24, cy: a.y + 12, opacity: 0 }}
              animate={{ cx: [a.x + 24, b.x + 24], cy: [a.y + 12, b.y + 12], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.2,
                delay: 1.8 + i * 1.2,
                repeat: Infinity,
                repeatDelay: edges.length * 1.2 - 1.2,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* nodes */}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <rect
              x={n.x}
              y={n.y}
              width={48}
              height={24}
              rx={4}
              fill="var(--surface)"
              stroke="var(--accent-blue)"
              strokeWidth="1"
            />
            <text
              x={n.x + 24}
              y={n.y + 12}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="7"
              fontFamily="var(--font-mono)"
              fill="var(--text-secondary)"
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
