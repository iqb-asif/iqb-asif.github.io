import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="container-page py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
        <SectionHeading eyebrow="Why" title="Why build analytical systems?" />
        <div className="max-w-xl">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            {profile.summary}
          </p>
          <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed">
            Six years across wealth management and institutional reporting made one thing clear:
            investment decisions depend on accurate, well-structured data. Automation removes the
            repetitive work — not the analytical thinking.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:opacity-80 transition-opacity"
          >
            Read full story <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
