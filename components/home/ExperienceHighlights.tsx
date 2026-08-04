"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { experience, careerProgression } from "@/data/experience";

export function ExperienceHighlights() {
  return (
    <section id="experience" className="container-page py-24 md:py-32 border-t border-border">
      <SectionHeading
        eyebrow="Career"
        title="Six years, one direction"
        description="From investment operations to analytics engineering — each stage built on the last."
      />

      {/* progression strip */}
      <div className="mt-12 flex flex-wrap items-center gap-3">
        {careerProgression.map((stage, i) => (
          <div key={stage} className="flex items-center gap-3">
            <span className="font-mono text-xs md:text-sm px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-text-secondary">
              {stage}
            </span>
            {i < careerProgression.length - 1 && (
              <span className="text-text-tertiary text-sm">→</span>
            )}
          </div>
        ))}
      </div>

      {/* timeline */}
      <div className="mt-16 space-y-0">
        {experience.map((role, i) => (
          <motion.div
            key={`${role.company}-${role.period}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-6 border-t border-border first:border-t-0"
          >
            <div>
              <p className="font-mono text-xs text-text-tertiary">{role.period}</p>
              <p className="text-sm text-text-secondary mt-1">{role.location}</p>
            </div>
            <div>
              <p className="font-medium">
                {role.role} <span className="text-text-secondary font-normal">· {role.company}</span>
              </p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-2xl">
                {role.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {role.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-1 rounded-[var(--radius-sm)] bg-surface text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <Button href="/experience" variant="secondary">
          View full timeline
        </Button>
      </div>
    </section>
  );
}
