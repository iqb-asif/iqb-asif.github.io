import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SpiderWebCanvas } from "@/components/home/SpiderWebCanvas";
import { HoverFillText } from "@/components/ui/HoverFillText";
import { RevealOnLoad } from "@/components/ui/RevealOnLoad";
import { Button } from "./Button";

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  // deterministic per-page variation so each page's entrance feels distinct
  const hash = title.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const dir = hash % 2 === 0 ? 1 : -1;

  return (
    <div className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-60">
        <SpiderWebCanvas density={22} className="block h-full w-full" />
      </div>
      <div className="container-page relative pt-12 pb-16 md:pt-16 md:pb-20">
        {crumbs && (
          <RevealOnLoad y={dir * 10} delay={0}>
            <nav className="flex items-center gap-1.5 text-xs text-text-tertiary mb-8">
              {crumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-text transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-text-secondary">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="size-3" />}
                </span>
              ))}
            </nav>
          </RevealOnLoad>
        )}
        <RevealOnLoad y={dir * 14} delay={0.08}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-blue mb-3">
            {eyebrow}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance max-w-full">
            <HoverFillText text={title} />
          </h1>
        </RevealOnLoad>
        {description && (
          <RevealOnLoad y={dir * 14} delay={0.16}>
            <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-full">
              {description}
            </p>
          </RevealOnLoad>
        )}
      </div>
    </div>
  );
}
