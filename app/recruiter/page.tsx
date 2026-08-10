import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { RevealOnLoad } from "@/components/ui/RevealOnLoad";
import { profile } from "@/data/profile";
import { mizan } from "@/data/projects";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export const metadata = { title: "Recruiter Mode | Asif Iqbal" };

const quickFacts = [
  { label: "Current Role", value: profile.currentRole.title },
  { label: "Years of Experience", value: profile.yearsExperience },
  { label: "Core Domain", value: "Investment Analytics" },
  { label: "Primary Technologies", value: "Python · SQL · Power BI" },
  { label: "Flagship Project", value: mizan.name },
  { label: "Work Preference", value: "Full-time, open to relocation" },
];

const skillsMatrix = [
  { capability: "Python", evidence: "Mizan Analytics" },
  { capability: "SQL", evidence: "Database Layer" },
  { capability: "Power BI", evidence: "Dashboard Projects" },
  { capability: "Reporting", evidence: "Professional Experience" },
  { capability: "Automation", evidence: "Python & VBA Projects" },
];

export default function RecruiterPage() {
  return (
    <div className="container-page py-12 md:py-20" >
      <RevealOnLoad className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-blue mb-3">
          Recruiter Mode
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-lg text-text-secondary">{profile.recruiterheadline}</p>
        <p className="mt-4 max-w-10xl text-text-secondary leading-relaxed">{profile.recsummary}</p>
      </RevealOnLoad>

      {/* quick facts */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border rounded-[var(--radius-lg)] overflow-hidden mb-16">
        {quickFacts.map((f) => (
          <div key={f.label} className="bg-bg p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-1.5">{f.label}</p>
            <p className="text-sm font-medium">{f.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-lg font-semibold mb-4">Target roles</h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {profile.targetRoles.map((r) => (
              <span key={r} className="text-xs px-2.5 py-1.5 rounded-[var(--radius-sm)] border border-border text-text-secondary">
                {r}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-4">Preferred locations</h2>
          <ol className="space-y-1.5 mb-12">
            {profile.preferredLocations.map((l, i) => (
              <li key={l} className="text-sm text-text-secondary flex gap-3">
                <span className="font-mono text-text-tertiary">{String(i + 1).padStart(2, "0")}</span>
                {l}
              </li>
            ))}
          </ol>

          <h2 className="text-lg font-semibold mb-4">Skills matrix</h2>
          <div className="border border-border rounded-[var(--radius-lg)] overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {skillsMatrix.map((row, i) => (
                  <tr key={row.capability} className={i % 2 === 1 ? "bg-surface/50" : undefined}>
                    <td className="px-4 py-2.5 border-t border-border first:border-t-0 font-medium">{row.capability}</td>
                    <td className="px-4 py-2.5 border-t border-border first:border-t-0 text-text-secondary">{row.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Flagship project</h2>
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 mb-12">
            <p className="font-medium">{mizan.name}</p>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{mizan.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {mizan.technologies.map((t) => (
                <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-[var(--radius-sm)] bg-bg text-text-secondary">
                  {t}
                </span>
              ))}
            </div>
            <Button href="/projects/mizan-analytics" variant="secondary" className="mt-5">
              Explore Project
            </Button>
          </div>

          <h2 className="text-lg font-semibold mb-4">Resume</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            <Button href="/resume" variant="secondary">View Online</Button>
            <DownloadButton href="/resume.pdf">Download PDF</DownloadButton>
          </div>

          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <div className="space-y-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-text transition-colors">
              {profile.email}
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-text-secondary hover:text-text transition-colors">
              <LinkedinIcon className="size-4" /> {profile.linkedin}
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-text-secondary hover:text-text transition-colors">
              <GithubIcon className="size-4" /> {profile.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
