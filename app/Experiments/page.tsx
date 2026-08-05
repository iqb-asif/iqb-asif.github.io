import { PageHeader } from "@/components/ui/PageHeader";
import { ExpCards } from "@/components/ui/ExpCards";
import { experiments } from "@/data/experiments";

export const metadata = {
  title: "Experiments | Asif Iqbal",
};

export default function ExperimentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiments"
        title="Exploring ideas before they become products"
        description="Concepts, prototypes and architectural explorations that may evolve into future analytics platforms."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Experiments" },
        ]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => (
            <ExpCards
              key={experiment.slug}
              experiment={experiment}
              index={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}