import { PageHeader } from "@/components/ui/PageHeader";
import { mizan } from "@/data/projects";
import { PipelineVisual } from "@/components/home/PipelineVisual";

export const metadata = { title: "Mizan Analytics | Asif Iqbal" };

export default function MizanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Flagship Project"
        title={mizan.name}
        description={mizan.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Mizan Analytics" },
        ]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16">
          <div>
            <h2 className="text-2xl font-semibold">Problem statement</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Institutional investment reporting depends on consistent, accurate data moving
              through validation, storage, analytics, and presentation layers. Manual, spreadsheet-driven
              workflows make that consistency hard to guarantee as the number of clients and
              portfolios grows. Mizan Analytics is a modular, database-driven platform that
              treats reporting as a pipeline rather than a set of disconnected files — built
              directly from the reporting challenges encountered in institutional and UK pension
              client work.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Core objectives</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Build reusable architecture across validation, storage, analytics, and reporting.",
                "Automate reporting workflows currently handled manually.",
                "Improve data quality through systematic validation.",
                "Support multi-client portfolio analytics.",
                "Enable future dashboard and platform enhancements.",
              ].map((o) => (
                <li key={o} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-blue" />
                  {o}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Technology decisions</h2>
            <div className="mt-4 space-y-4">
              {mizan.techRationale.map((t) => (
                <div key={t.tech} className="flex gap-4">
                  <span className="font-mono text-sm text-accent-blue w-28 shrink-0">{t.tech}</span>
                  <span className="text-sm text-text-secondary leading-relaxed">{t.reason}</span>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-semibold">What it does</h2>
            <ul className="mt-4 space-y-3">
              {mizan.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-blue" />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Lessons learned</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Planning the architecture before writing analytics code made the biggest difference —
              a modular, database-first design meant new analytics modules (Sharpe ratio, drawdown,
              attribution) could be added without touching ingestion or reporting layers. Documentation
              and validation turned out to matter as much as the calculations themselves.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Future roadmap</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Risk analytics expansion", "Performance attribution depth", "Cloud deployment", "REST API", "Automated scheduling"].map((r) => (
                <span key={r} className="text-sm px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-text-secondary">
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* architecture sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-6">
                Architecture
              </p>
              <PipelineVisual />
              <div>
                {mizan.pipeline.map((stage, i) => (
                  <div key={stage.label}>
                    <div className="flex items-center justify-between py-3 border-t border-border first:border-t-0">
                      <span className="text-sm font-medium">{stage.label}</span>
                      <span className="text-xs text-text-tertiary">{stage.detail}</span>
                    </div>
                    {i < mizan.pipeline.length - 1 && (
                      <div className="flex justify-center">
                        <div className="h-4 w-px bg-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[var(--radius-lg)] border border-border p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-4">
                Technology Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {mizan.technologies.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-[var(--radius-sm)] bg-surface text-text-secondary">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-mono text-xs text-text-tertiary">{mizan.status}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
