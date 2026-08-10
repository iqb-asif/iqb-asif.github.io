import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { capabilities } from "@/data/capabilities";

export const metadata = { title: "Capabilities | Asif Iqbal" };

const assetClasses = ["Mutual Funds", "Equities", "Fixed Income", "PMS", "Alternative Investments", "Pension Portfolios"];

const matrix = [
  { capability: "Python", application: "Reporting automation and analytics workflows" },
  { capability: "SQL", application: "Financial data retrieval and transformation" },
  { capability: "Power BI", application: "Executive dashboards and reporting" },
  { capability: "PostgreSQL", application: "Structured analytical databases" },
  { capability: "Excel", application: "Advanced financial reporting" },
  { capability: "Power Query", application: "Data transformation and preparation" },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="What I can do, and how it helps"
        description="Technology is most valuable when it simplifies complex financial workflows. These capabilities combine investment domain knowledge with practical automation and business intelligence."
        crumbs={[{ label: "Home", href: "/" }, { label: "Capabilities" }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="flex justify-end mb-8">
  <Button href="/certifications" variant="secondary">
    Explore Certifications
  </Button>
</div>
        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-[var(--radius-lg)] overflow-hidden border border-border">
          {capabilities.map((cap) => (
            <div key={cap.title} className="glow-card border border-transparent bg-bg p-7 md:p-8">
              <h2 className="text-lg font-semibold">{cap.title}</h2>
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
              <p className="mt-5 text-sm text-accent-blue">{cap.businessImpact}</p>
            </div>
          ))}
        </div>

        {/* asset classes */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold">Investment domain expertise</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {assetClasses.map((a) => (
              <span
                key={a}
                className="text-sm px-4 py-2 rounded-[var(--radius-sm)] border border-border text-text-secondary"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* capability matrix */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold">Capability matrix</h2>
          <p className="mt-2 text-text-secondary max-w-xl">
            Instead of proficiency percentages, here is how each technology is actually applied.
          </p>
          <div className="mt-8 border border-border rounded-[var(--radius-lg)] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface text-left">
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-tertiary">
                    Capability
                  </th>
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-tertiary">
                    Business Application
                  </th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={row.capability} className={i % 2 === 1 ? "bg-surface/50" : undefined}>
                    <td className="px-5 py-3 border-t border-border font-medium">{row.capability}</td>
                    <td className="px-5 py-3 border-t border-border text-text-secondary">{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 rounded-[var(--radius-lg)] border border-border bg-surface p-7">
          <p className="text-sm text-text-secondary leading-relaxed">
            I prefer to demonstrate practical experience rather than assign myself proficiency
            percentages, and avoid claiming expertise in technologies I have not applied
            professionally or through substantial personal projects.
          </p>
        </div>
      </section>
    </>
  );
}
