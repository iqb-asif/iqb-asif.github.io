"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedMail } from "@/components/ui/AnimatedMail";
import { AnimatedLinkedIn } from "@/components/ui/AnimatedLinkedIn";
import { AnimatedGithub } from "@/components/ui/AnimatedGithub";
import { PhoneQR } from "@/components/ui/PhoneQR";
import { profile } from "@/data/profile";

const methods = [
  {
    title: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: "Preferred for recruitment and professional communication.",
  },
  {
    title: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
    description: "Career updates and professional profile.",
  },
  {
    title: "GitHub",
    value: profile.github,
    href: profile.githubUrl,
    description: "Technical projects and source code.",
  },
  {
    title: "Call Me",
    value: "",
    href: "",
    description: "Scan the QR code or call directly.",
  },
];

export function Contact() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [phoneOpen, setPhoneOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPhoneOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section
        id="contact"
        className="container-page py-24 md:py-32 border-t border-border"
      >
        <SectionHeading
          eyebrow="Connect"
          title="Let's start a conversation"
          description="If you're hiring for Investment Analytics, Business Intelligence, or Analytics Engineering roles, I'd be happy to discuss how my experience aligns with your team."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-[var(--radius-lg)] overflow-hidden border border-border">
          {methods.map((m) => {
            const isHovered = hovered === m.title;

            const shared = {
              key: m.title,
              onMouseEnter: () => setHovered(m.title),
              onMouseLeave: () => setHovered(null),
              className:
                "group relative overflow-hidden glow-card border border-transparent bg-bg p-6 md:p-7",
            };

            const icon =
              m.title === "Email" ? (
                <AnimatedMail hovered={isHovered} />
              ) : m.title === "LinkedIn" ? (
                <AnimatedLinkedIn hovered={isHovered} />
              ) : m.title === "GitHub" ? (
                <AnimatedGithub hovered={isHovered} />
              ) : (
                <PhoneQR hovered={isHovered} />
              );

            const content = (
              <>
                <div className="relative z-20 flex h-12 items-center">
                  {icon}
                </div>

                <p className="relative z-20 mt-4 font-medium">
                  {m.title}
                </p>

                <p className="relative z-20 mt-1 font-mono text-sm text-text-secondary break-all">
                  {m.value}
                </p>

                <p className="relative z-20 mt-3 text-xs leading-relaxed text-text-tertiary">
                  {m.description}
                </p>
              </>
            );

            if (m.title === "Call Me") {
              return (
                <button
                  {...shared}
                  type="button"
                  onClick={() => setPhoneOpen(true)}
                >
                  {content}
                </button>
              );
            }

            return (
              <a
                {...shared}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {content}
              </a>
            );
          })}
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

      <AnimatePresence>
        {phoneOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setPhoneOpen(false)}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-[var(--radius-lg)] bg-bg border border-border p-8 text-center max-w-sm w-full"
            >
              <img
                src="/PhoneQR.png"
                alt="Phone QR"
                className="w-72 h-72 mx-auto rounded bg-white p-3 object-contain"
              />

             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}