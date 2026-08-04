"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { mizan } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

export function FeaturedProject() {
  return (
    <section id="mizan" className="container-page py-24 md:py-32 border-t border-border">
      <SectionHeading eyebrow="Flagship Project" title={mizan.name} description={mizan.tagline} />

      <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-12">
        <div>
          <p className="text-text-secondary leading-relaxed">{mizan.description}</p>

          <ul className="mt-6 space-y-3">
            {mizan.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-blue" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {mizan.technologies.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded-[var(--radius-sm)] border border-border text-text-secondary"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button href="/projects/mizan-analytics" variant="primary">
              View Full Case Study
            </Button>
            <span className="font-mono text-xs text-text-tertiary">{mizan.status}</span>
          </div>
        </div>

        {/* architecture preview */}
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-6">
            Architecture
          </p>
          <div className="space-y-0">
            {mizan.pipeline.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
              >
                <div className="flex items-center justify-between py-3 border-t border-border first:border-t-0">
                  <span className="text-sm font-medium">{stage.label}</span>
                  <span className="text-xs text-text-tertiary">{stage.detail}</span>
                </div>
                {i < mizan.pipeline.length - 1 && (
                  <div className="flex justify-center">
                    <div className="h-4 w-px bg-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
