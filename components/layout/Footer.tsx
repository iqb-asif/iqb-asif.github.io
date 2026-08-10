import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container-page py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-medium">{profile.name}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
          <a href="/experience" className="hover:text-text transition-colors">Experience</a>
          <a href="/projects/mizan-analytics" className="hover:text-text transition-colors">Mizan Analytics</a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">GitHub</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">LinkedIn</a>
          <a href="/contact" className="hover:text-text transition-colors">Contact</a>
        </nav>

        <p className="text-xs text-text-tertiary font-mono">
          © {year} · Last updated {new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
        </p>
      </div>
    </footer>
  );
}
