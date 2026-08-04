import { PageHeader } from "@/components/ui/PageHeader";
import { FlipProjectCard } from "@/components/ui/FlipProjectCard";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects | Asif Iqbal" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Practical explorations, not side projects"
        description="Each project solves a real-world investment analytics or reporting problem. Hover any card to see current progress and technologies."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <FlipProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
