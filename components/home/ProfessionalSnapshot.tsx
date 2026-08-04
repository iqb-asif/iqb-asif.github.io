"use client";

import { motion } from "framer-motion";
import { snapshotCards } from "@/data/profile";

const accents = ["var(--accent-blue)", "var(--accent-red)", "var(--accent-amber)"];

export function ProfessionalSnapshot() {
  return (
    <section className="container-page pb-24 md:pb-32">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-[var(--radius-lg)] overflow-hidden border border-border">
        {snapshotCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="glow-card border border-transparent bg-bg p-5 md:p-6"
          >
            <p
              className="font-mono text-xs uppercase tracking-wider mb-2"
              style={{ color: accents[i % accents.length] }}
            >
              {card.label}
            </p>
            <p className="text-lg md:text-xl font-semibold">{card.value}</p>
            <p className="text-sm text-text-secondary mt-1">{card.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
