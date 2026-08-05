import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedMail } from "@/components/ui/AnimatedMail";
import { profile } from "@/data/profile";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { AnimatedLinkedIn } from "@/components/ui/AnimatedLinkedIn";
import { AnimatedGithub } from "../ui/AnimatedGithub";

const methods = [
  {
    icon: Mail,
    title: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: "Preferred for recruitment and professional communication.",
    envelope: true,
  },
  {
    icon: AnimatedLinkedIn,
    title: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
    description: "Career updates and professional profile.",
    envelope: false,
  },
  {
    icon: AnimatedGithub,
    title: "GitHub",
    value: profile.github,
    href: profile.githubUrl,
    description: "Technical projects and source code.",
    envelope: false,
  },
];

export function Contact() {
  return (
    
    <section id="contact" className="container-page py-24 md:py-32 border-t border-border">
      <SectionHeading
        eyebrow="Connect"
        title="Let's start a conversation"
        description="If you're hiring for Investment Analytics, Business Intelligence, or Analytics Engineering roles, I'd be happy to discuss how my experience aligns with your team."
      />

      <div className="mt-14 grid sm:grid-cols-3 gap-px bg-border rounded-[var(--radius-lg)] overflow-hidden border border-border">
        {methods.map((m) => (
          <a
            key={m.title}
            href={m.href}
            target={m.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="glow-card border border-transparent bg-bg p-6 md:p-7 group"
          >
            {m.envelope ? (
              <AnimatedMail />
            ) : (
              <m.icon className="size-3 text-accent-blue" />
            )}
            <p className="mt-4 font-medium">{m.title}</p>
            <p className="text-sm text-text-secondary mt-1 font-mono">{m.value}</p>
            <p className="text-xs text-text-tertiary mt-3 leading-relaxed">{m.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {profile.preferredLocations.map((loc) => (
          <span
            key={loc}
            className="font-mono text-[11px] px-2.5 py-1 rounded-[var(--radius-sm)] border border-border text-text-secondary"
          >
            {loc}
          </span>
        ))}
      </div>
    </section>
  );
}
