import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";

export const metadata = { title: "Resume | Asif Iqbal" };

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title={profile.name}
        description={profile.headline}
        crumbs={[{ label: "Home", href: "/" }, { label: "Resume" }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="flex flex-wrap gap-3 mb-16">
          <DownloadButton href="/resume.pdf">Download PDF</DownloadButton>
          <Button href="/recruiter" variant="secondary">Recruiter Mode</Button>
        </div>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16">
          <div className="space-y-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Contact</p>
              <p className="text-sm text-text-secondary">{profile.email}</p>
              <p className="text-sm text-text-secondary">{profile.location}</p>
              <p className="text-sm text-text-secondary">{profile.linkedin}</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Education</p>
              {profile.education.map((e) => (
                <div key={e.institution} className="mb-3">
                  <p className="text-sm font-medium">{e.degree}</p>
                  {e.specialization && <p className="text-sm text-text-secondary">{e.specialization}</p>}
                  <p className="text-xs text-text-tertiary font-mono">{e.institution} · {e.period}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Certifications</p>
              <ul className="space-y-1.5">
                {profile.certifications.map((c) => (
                  <li key={c} className="text-sm text-text-secondary">{c}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Target Roles</p>
              <div className="flex flex-wrap gap-2">
                {profile.targetRoles.map((r) => (
                  <span key={r} className="text-xs px-2.5 py-1 rounded-[var(--radius-sm)] border border-border text-text-secondary">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">Profile</p>
            <p className="text-text-secondary leading-relaxed">{profile.summary}</p>

            <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mt-12 mb-6">
              Experience
            </p>
            <div>
              {experience.map((role) => (
                <div key={`${role.company}-${role.period}`} className="py-6 border-t border-border first:border-t-0">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <p className="font-medium">
                      {role.role} <span className="text-text-secondary font-normal">· {role.company}</span>
                    </p>
                    <p className="font-mono text-xs text-text-tertiary">{role.period}</p>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent-blue" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
