import { PageHeader } from "@/components/ui/PageHeader";
import { experience } from "@/data/experience";

import {
  MercerLogo,
  InCredLogo,
  AnandRathiLogo,
  ClovekwealthLogo,
} from "@/components/ui/CompanyLogos";

export const metadata = {
  title: "Experience | Asif Iqbal",
};

const companyLogos = {
  "Mercer Consulting Pvt Ltd": MercerLogo,
  "InCred Wealth": InCredLogo,
  "Anand Rathi Wealth": AnandRathiLogo,
  "ClovekWealth Pvt Ltd": ClovekwealthLogo,
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Professional journey"
        description="Six years across wealth management, portfolio analytics, and institutional reporting for UK pension and institutional clients."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Experience" },
        ]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="space-y-0">
          {experience.map((role) => {
            const Logo =
              companyLogos[
                role.company as keyof typeof companyLogos
              ];

            return (
              <article
                key={`${role.company}-${role.period}`}
                className="
                  relative
                  overflow-hidden
                  grid
                  md:grid-cols-[200px_1fr]
                  gap-6
                  md:gap-10
                  py-10
                  border-t
                  border-border
                  first:border-t-0
                "
              >
                {/* Company logo watermark */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-6
                    top-1/2
                    -translate-y-1/2
                    z-0
                    opacity-[0.8]
                     invert
    dark:invert-0
     dark:brightness-100
    dark:invert
                  "
                >
                  {Logo && (
                    <Logo
                      className="
                        h-52
                        w-52
                      "
                    />
                  )}
                </div>

                {/* Date / Location */}

                <div className="relative z-10">
                  <p className="font-mono text-xs text-text-tertiary">
                    {role.period}
                  </p>

                  <p className="text-sm text-text-secondary mt-1">
                    {role.location}
                  </p>
                </div>

                {/* Experience Content */}

                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-lg font-semibold">
                    {role.role}
                  </h2>

                  <p className="text-text-secondary">
                    {role.company}
                  </p>

                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {role.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {role.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="
                          flex
                          gap-3
                          text-sm
                          text-text-secondary
                          leading-relaxed
                        "
                      >
                        <span
                          className="
                            mt-2
                            size-1
                            shrink-0
                            rounded-full
                            bg-accent-blue
                          "
                        />

                        {r}
                      </li>
                    ))}
                  </ul>
                                    <div className="mt-4 flex flex-wrap gap-2">
                    {role.technologies.map((t) => (
                      <span
                        key={t}
                        className="
                          font-mono
                          text-[11px]
                          px-2
                          py-1
                          rounded-[var(--radius-sm)]
                          bg-surface
                          text-text-secondary
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-text-tertiary italic">
                    What this role taught me — {role.lessonLearned}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}