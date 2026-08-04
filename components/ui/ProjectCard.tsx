"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectEntry } from "@/types/content";

const accents = ["var(--accent-blue)", "var(--accent-red)", "var(--accent-amber)"];

export function ProjectCard({
  project,
  index,
  delay = 0,
}: {
  project: ProjectEntry;
  index: number;
  delay?: number;
}) {
  const color = accents[index % accents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className="card-outer block">
        <div className="card-top">
          <span className="dot" style={{ background: color }} />
          <h3 className="title">{project.title}</h3>
          <p className="summary">{project.summary}</p>
        </div>

        <div className="card-reveal">
          <div className="reveal-inner">
            <div className="tags">
              {project.technologies.slice(0, 4).map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <span className="cta" style={{ color }}>
              View project <ArrowUpRight size={13} />
            </span>
          </div>
        </div>

        <style jsx>{`
          .card-outer {
            display: block;
            position: relative;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: var(--bg);
            overflow: hidden;
            transition: border-color 0.25s ease, transform 0.25s ease;
          }
          .card-outer:hover {
            border-color: ${color};
            transform: translateY(-2px);
          }
          .card-top {
            padding: 1.5rem;
          }
          .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
          .title {
            margin-top: 0.85rem;
            font-weight: 600;
            font-size: 1.05rem;
          }
          .summary {
            margin-top: 0.5rem;
            font-size: 0.85rem;
            color: var(--text-secondary);
            line-height: 1.55;
          }
          .card-reveal {
            max-height: 0;
            transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            border-top: 1px solid transparent;
          }
          .card-outer:hover .card-reveal {
            max-height: 90px;
            border-top-color: var(--border);
          }
          .reveal-inner {
            padding: 1rem 1.5rem 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          }
          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
          }
          .tag {
            font-family: var(--font-mono);
            font-size: 10px;
            padding: 2px 6px;
            border-radius: var(--radius-sm);
            background: var(--surface);
            color: var(--text-secondary);
          }
          .cta {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 0.75rem;
            font-weight: 500;
          }
        `}</style>
      </Link>
    </motion.div>
  );
}
