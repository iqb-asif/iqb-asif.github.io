"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";
import { Button } from "../ui/Button";

const accents = ["var(--accent-blue)", "var(--accent-red)", "var(--accent-amber)", "var(--accent-blue)"];

export function CoreCapabilities() {
  return (
    <section id="capabilities" className="container-page py-24 md:py-32 border-t border-border">
      
      <SectionHeading
        eyebrow="Capabilities"
        title="What that experience translates into"
        description="Technology applied to solve investment reporting problems — not tools listed in isolation."
      />

      <div className="mt-14 grid sm:grid-cols-2 gap-px bg-border rounded-[var(--radius-lg)] overflow-hidden border border-border">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glow-card border border-transparent bg-bg p-7 md:p-8"
          >
            <h3 className="text-lg font-semibold">{cap.title}</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{cap.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {cap.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] px-2 py-1 rounded-[var(--radius-sm)] bg-surface text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm font-medium" style={{ color: accents[i % accents.length] }}>
              {cap.businessImpact}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
