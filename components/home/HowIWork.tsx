"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  "Understand the business problem",
  "Validate available data",
  "Design the analytical workflow",
  "Prototype the solution",
  "Automate repetitive tasks",
  "Validate outputs",
  "Document the process",
  "Deliver reliable results",
];

const accents = ["var(--accent-blue)", "var(--accent-red)", "var(--accent-amber)"];

function StepMark({ index }: { index: number }) {
  const color = accents[index % accents.length];
  return (
    <motion.span
      className="relative flex size-7 items-center justify-center rounded-[var(--radius-sm)] border"
      style={{ borderColor: color }}
      whileHover={{ scale: 1.12, rotate: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <span className="size-1.5 rounded-full" style={{ background: color }} />
    </motion.span>
  );
}

export function HowIWork() {
  return (
    <section id="how-i-work" className="container-page py-24 md:py-32 border-t border-border">
      <SectionHeading
        eyebrow="Methodology"
        title="How I work"
        description="Systems thinking applied consistently, from a single report to a full platform."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3">
              <StepMark index={i} />
              <span className="font-mono text-xs text-text-tertiary">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-sm font-medium leading-snug">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
