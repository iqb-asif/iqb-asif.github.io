import { Button } from "@/components/ui/Button";

export function RecruiterPreview() {
  return (
    <section id="recruiter" className="container-page py-24 md:py-32 border-t border-border">
      <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Short on time?</h3>
          <p className="mt-3 text-text-secondary leading-relaxed max-w-xl">
            View a recruiter-focused summary with experience, capabilities, projects, relocation
            preferences, notice period, résumé, and contact information — all in one place.
          </p>
        </div>
        <Button href="/recruiter" variant="primary" className="shrink-0">
          Launch Recruiter Mode
        </Button>
      </div>
    </section>
  );
}
