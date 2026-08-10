"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";

type Certification = {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    title: "Python for Data Analysis",
    issuer: "Professional Certification",
    year: "2026",
    category: "Data Analytics",
  },
  {
    id: 2,
    title: "Advanced SQL & Database Analytics",
    issuer: "Professional Certification",
    year: "2026",
    category: "Data Engineering",
  },
  {
    id: 3,
    title: "Power BI Data Analyst",
    issuer: "Professional Certification",
    year: "2025",
    category: "Business Intelligence",
  },
  {
    id: 4,
    title: "Investment Analysis & Portfolio Management",
    issuer: "Professional Certification",
    year: "2025",
    category: "Investment Analytics",
  },
  {
    id: 5,
    title: "Financial Modeling",
    issuer: "Professional Certification",
    year: "2025",
    category: "Finance",
  },
  {
    id: 6,
    title: "Advanced Excel & VBA",
    issuer: "Professional Certification",
    year: "2024",
    category: "Automation",
  },
  {
    id: 7,
    title: "Python Automation",
    issuer: "Professional Certification",
    year: "2024",
    category: "Automation",
  },
  {
    id: 8,
    title: "Data Visualization & Business Intelligence",
    issuer: "Professional Certification",
    year: "2024",
    category: "Business Intelligence",
  },
  {
    id: 9,
    title: "Portfolio Risk Analytics",
    issuer: "Professional Certification",
    year: "2023",
    category: "Risk Analytics",
  },
  {
    id: 10,
    title: "Investment & Wealth Management",
    issuer: "Professional Certification",
    year: "2023",
    category: "Wealth Management",
  },
];


export default function CertificationsPage() {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <>

      <section className="container-page py-16 md:py-24">
    
        {/* Certification Grid */}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[var(--radius-lg)] overflow-hidden border border-border">
          {certifications.map((certification, index) => (
            <motion.button
              key={certification.id}
              type="button"
              onClick={() => setSelected(certification)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.985 }}
              className="
                group
                relative
                overflow-hidden
                text-left
                bg-bg
                p-5
                md:p-6
                glow-card
                border
                border-transparent
                cursor-pointer
              "
            >
              {/* Dummy certificate preview */}

              <div
                className="
                  relative
                  aspect-[1.414/1]
                  overflow-hidden
                  rounded-[var(--radius-sm)]
                  border
                  border-border
                  bg-surface
                "
              >
                {/* Certificate paper */}

                <div
                  className="
                    absolute
                    inset-[8%]
                    rounded-sm
                    border
                    border-border
                    bg-bg
                    shadow-sm
                    transition-transform
                    duration-500
                    group-hover:scale-[1.025]
                  "
                >
                  <div className="absolute inset-x-[12%] top-[14%] h-1 rounded-full bg-border" />

                  <div className="absolute left-[18%] right-[18%] top-[28%] space-y-2">
                    <div className="mx-auto h-1.5 w-2/3 rounded-full bg-text-tertiary/30" />
                    <div className="mx-auto h-1 w-1/2 rounded-full bg-text-tertiary/20" />
                  </div>

                  <div className="absolute left-[20%] right-[20%] top-[47%] space-y-2">
                    <div className="h-1 rounded-full bg-border" />
                    <div className="h-1 rounded-full bg-border" />
                    <div className="mx-auto h-1 w-3/4 rounded-full bg-border" />
                  </div>

                  <div className="absolute bottom-[16%] left-[15%] right-[15%] flex items-end justify-between">
                    <div className="h-8 w-8 rounded-full border border-border" />

                    <div className="w-1/3 space-y-1">
                      <div className="h-px bg-border" />
                      <div className="h-1 w-2/3 rounded-full bg-text-tertiary/20" />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-tertiary">
                      Certificate
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-bg/60
                    backdrop-blur-[2px]
                  "
                >
                  <span
                    className="
                      rounded-[var(--radius-sm)]
                      border
                      border-border
                      bg-bg/90
                      px-4
                      py-2
                      font-mono
                      text-[11px]
                      uppercase
                      tracking-wider
                      text-text-secondary
                    "
                  >
                    View certificate
                  </span>
                </motion.div>
              </div>

              {/* Certificate information */}

              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent-blue">
                    {certification.category}
                  </span>

                  <span className="font-mono text-[10px] text-text-tertiary">
                    {certification.year}
                  </span>
                </div>

                <h3 className="mt-2 text-base font-semibold">
                  {certification.title}
                </h3>

                <p className="mt-1 text-sm text-text-secondary">
                  {certification.issuer}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer note */}

        <div className="mt-16 rounded-[var(--radius-lg)] border border-border bg-surface p-7">
          <p className="text-sm text-text-secondary leading-relaxed">
            Certifications are presented alongside practical investment
            analytics and technology experience. Select a certification to
            view the full credential.
          </p>
        </div>
      </section>

      {/* Full Certificate Modal */}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/75
              backdrop-blur-sm
              p-4
              md:p-8
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                rotateY: -12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                rotateY: 12,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                w-full
                max-w-5xl
                max-h-[92vh]
                overflow-hidden
                rounded-[var(--radius-lg)]
                border
                border-border
                bg-bg
                shadow-2xl
              "
            >
              {/* Header */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-border
                  bg-bg
                  px-5
                  py-4
                  md:px-7
                "
              >
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-accent-blue">
                    {selected.category}
                  </p>

                  <h2 className="mt-1 truncate text-base font-semibold md:text-lg">
                    {selected.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="
                    flex
                    size-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    text-text-secondary
                    transition-colors
                    hover:bg-surface
                    hover:text-text
                  "
                  aria-label="Close certificate"
                >
                  ×
                </button>
              </div>

              {/* Dummy full certificate */}

              <div className="overflow-auto p-4 md:p-8">
                <div
                  className="
                    mx-auto
                    aspect-[1.414/1]
                    w-full
                    max-w-4xl
                    rounded-sm
                    border
                    border-border
                    bg-surface
                    p-[5%]
                    shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-full
                      flex-col
                      items-center
                      justify-center
                      border
                      border-border
                      bg-bg
                      text-center
                    "
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-tertiary">
                      Certificate of Achievement
                    </p>

                    <div className="mt-8 h-px w-1/3 bg-border" />

                    <h3 className="mt-8 max-w-2xl text-2xl font-semibold md:text-4xl">
                      {selected.title}
                    </h3>

                    <p className="mt-4 text-sm text-text-secondary md:text-base">
                      This is a temporary certificate placeholder.
                    </p>

                    <p className="mt-10 font-mono text-xs text-text-tertiary">
                      {selected.issuer} · {selected.year}
                    </p>

                    <div className="mt-10 size-16 rounded-full border border-border" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}