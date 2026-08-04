"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectEntry } from "@/types/content";

const accents = ["var(--accent-blue)", "var(--accent-red)", "var(--accent-amber)"];

export function FlipProjectCard({
  project,
  index,
}: {
  project: ProjectEntry;
  index: number;
}) {
  const color = accents[index % accents.length];
  const [flipped, setFlipped] = useState(false);
  const progress = project.progress ?? (project.status === "Complete" ? 100 : 60);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="project-card-outer"
        tabIndex={0}
        role="group"
        aria-label={`${project.title} — hover or focus to see progress details`}
        data-flipped={flipped}
        onClick={() => setFlipped((v) => !v)}
      >
        <div className="project-card-inner">
          {/* FRONT */}
          <div className="project-card-face">
            <div className="flex items-start justify-between gap-3">
              <span className="size-2 rounded-full shrink-0" style={{ background: color }} />
              {project.featured && (
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent-blue">
                  Flagship
                </span>
              )}
            </div>
            <p className="mt-auto pt-6 font-semibold text-[1.05rem] leading-snug">{project.title}</p>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
              {project.summary}
            </p>
            <p className="mt-3 font-mono text-[11px] text-text-tertiary">
              Hover for progress →
            </p>
          </div>

          {/* BACK */}
          <div className="project-card-face project-card-face--back" style={{ borderColor: color }}>
            <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color }}>
              Current Progress
            </p>

            <div className="mt-3 flex items-center gap-3">
              <div className="h-1.5 flex-1 rounded-full bg-surface overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${progress}%`, background: color }}
                />
              </div>
              <span className="font-mono text-[11px] text-text-secondary shrink-0">{progress}%</span>
            </div>
            <p className="mt-1.5 text-xs text-text-tertiary">{project.status}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {project.hasCaseStudy && (
              <Link
                href={`/projects/${project.slug}`}
                className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium"
                style={{ color }}
                onClick={(e) => e.stopPropagation()}
              >
                View case study <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tag {
          font-family: var(--font-mono);
          font-size: 10px;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          background: var(--surface);
          color: var(--text-secondary);
        }
      `}</style>
    </motion.div>
  );
}
