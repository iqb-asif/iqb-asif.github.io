import { PageHeader } from "@/components/ui/PageHeader";
import { profile } from "@/data/profile";
import {
  careerChapters,
  careerProgression,
  workingPrinciples,
  strengths,
} from "@/data/experience";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "About | Asif Iqbal" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Why should someone trust me with complex analytical work?"
        description={profile.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="container-page py-16 md:py-24">
        {/* progression graphic */}
        <div className="flex flex-wrap items-center gap-3 mb-20">
          {careerProgression.map((stage, i) => (
            <div key={stage} className="flex items-center gap-3">
              <span className="font-mono text-xs md:text-sm px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-text-secondary">
                {stage}
              </span>
              {i < careerProgression.length - 1 && <span className="text-text-tertiary text-sm">→</span>}
            </div>
          ))}
        </div>

        {/* chapters */}
        <div className="space-y-16 max-w-6xl">
          {careerChapters.map((c) => (
            <div key={c.title} className="grid md:grid-cols-[140px_1fr] gap-6 pb-16 border-b border-border last:border-b-0 last:pb-0">
              <p className="font-mono text-xs text-text-tertiary pt-1">{c.period}</p>
              <div>
                <h2 className="text-xl font-semibold">{c.title}</h2>
                <p className="mt-3 text-text-secondary leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* how I approach work */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold">How I approach work</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
            {workingPrinciples.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-blue" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* strengths */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold">Professional strengths</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(strengths).map(([category, items]) => (
              <div key={category}>
                <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">
                  {category}
                </p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-border flex items-center justify-between flex-wrap gap-6">
          <p className="text-text-secondary max-w-5xl leading-relaxed">
            Every role has expanded my understanding of investment analytics. The projects on this site demonstrate how I apply that experience to design practical, scalable analytical solutions.
          </p>
          <Button href="/projects" variant="primary">
            Explore Projects
          </Button>
        </div>
      </section>
    </>
  );
}
