"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
} from "framer-motion";

import {
  X,
  ArrowRight,
} from "lucide-react";

import { ExperimentEntry } from "@/types/experiments";
import { ExperimentVisual } from "./ExperimentVisual";


const accents = {
  blue: "var(--accent-blue)",
  red: "var(--accent-red)",
  amber: "var(--accent-amber)",
};

export function ExpCards({
  experiment,
  index,
}: {
  experiment: ExperimentEntry;
  index: number;
}) {
  const accent =
    accents[experiment.accent ?? "blue"];

  const [open, setOpen] = useState(false);

  const cardRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      esc
    );

    return () =>
      window.removeEventListener(
        "keydown",
        esc
      );
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const outside = (e: MouseEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(
          e.target as Node
        )
      ) {
        setOpen(false);
      }
    };

    window.addEventListener(
      "mousedown",
      outside
    );

    return () =>
      window.removeEventListener(
        "mousedown",
        outside
      );
  }, [open]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <LayoutGroup>

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.45,
          delay: index * 0.06,
        }}
      >
       <motion.div
  ref={cardRef}
  layoutId={`card-${experiment.slug}`}
  layout
  transition={{
    layout: {
      duration: 0.05,
      ease: [0.32, 0.72, 0, 1],
    },
  }}
          onClick={() => setOpen(true)}
          className="
            relative
            overflow-hidden
            cursor-pointer
            rounded-[8px]
            border
            border-border
            bg-bg
            min-h-[240px]
            p-6
            glow-card
            group
          "
        >
          <div
            className="
              flex
              h-full
              flex-col
            "
          >
            <div className="flex items-start justify-between">
              <span
                className="size-2 rounded-full"
                style={{
                  background: accent,
                }}
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-text-tertiary
                "
              >
                Experiment
              </span>
            </div>

            <div className="flex-1" />

            <motion.h3
              layoutId={`title-${experiment.slug}`}
              className="
                text-[1.08rem]
                font-semibold
                leading-snug
              "
            >
              {experiment.title}
            </motion.h3>

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileHover={{
                opacity: 1,
                y: 0,
              }}
              className="
                mt-3
              "
            >
              <p
                className="
                  text-sm
                  text-text-secondary
                  leading-relaxed
                "
              >
                {experiment.teaser}
              </p>

              <div
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                "
                style={{
                  color: accent,
                }}
              >
                Explore

                <ArrowRight
                  size={15}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>

        {open && (

          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                fixed
                inset-0
                z-40
                bg-black/35
                backdrop-blur-md
              "
            />

            <motion.div
              className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                p-6
              "
            >
              <motion.div
                ref={cardRef}
                layoutId={`card-${experiment.slug}`}
                transition={{
  type: "spring",
  stiffness: 200,
  damping: 18,
  mass: 0.5,
}}
                className="
                  relative
                  overflow-hidden
                  rounded-[8px]
                  border
                  border-border
                  bg-bg
                  w-full
                  max-w-6xl
                  min-h-[650px]
                "
              >
                                <div
                  className="
                    grid
                    h-full
                    min-h-[650px]
                    lg:grid-cols-[42%_58%]
                  "
                >
                  {/* LEFT VISUAL */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      border-r
                      border-border
                      bg-surface
                    "
                  >
                    <ExperimentVisual
                      type={experiment.visual}
                      accent={accent}
                    />

                    <div
                      className="
                        absolute
                        bottom-8
                        left-8
                        right-8
                      "
                    >
                      <p
                        className="
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-wider
                        "
                        style={{
                          color: accent,
                        }}
                      >
                        Current Stage
                      </p>

                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-semibold
                        "
                      >
                        {experiment.status}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-relaxed
                          text-text-secondary
                        "
                      >
                        Every experiment starts as a question.
                        This section captures ideas before they
                        become production-ready projects.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}

                  <div
                    className="
                      relative
                      overflow-y-auto
                      p-10
                    "
                  >
                    <button
                      onClick={() => setOpen(false)}
                      className="
                        absolute
                        right-6
                        top-6
                        rounded-md
                        border
                        border-border
                        p-2
                        transition
                        hover:bg-surface
                      "
                    >
                      <X size={18} />
                    </button>

                    <motion.h2
                      layoutId={`title-${experiment.slug}`}
                      className="
                        text-4xl
                        font-semibold
                      "
                    >
                      {experiment.title}
                    </motion.h2>

                    <p
                      className="
                        mt-4
                        text-lg
                        leading-relaxed
                        text-text-secondary
                      "
                    >
                      {experiment.overview}
                    </p>

                    <section className="mt-10">
                      <h3
                        className="
                          font-semibold
                          text-lg
                        "
                      >
                        The Problem
                      </h3>

                      <p
                        className="
                          mt-3
                          leading-8
                          text-text-secondary
                        "
                      >
                        {experiment.problem}
                      </p>
                    </section>

                    <section className="mt-10">
                      <h3
                        className="
                          font-semibold
                          text-lg
                        "
                      >
                        The Idea
                      </h3>

                      <p
                        className="
                          mt-3
                          leading-8
                          text-text-secondary
                        "
                      >
                        {experiment.idea}
                      </p>
                    </section>

                    <section className="mt-10">
                      <h3
                        className="
                          font-semibold
                          text-lg
                        "
                      >
                        Expected Outcome
                      </h3>

                      <p
                        className="
                          mt-3
                          leading-8
                          text-text-secondary
                        "
                      >
                        {experiment.expectedOutcome}
                      </p>
                    </section>

                    <section className="mt-10">
                      <h3
                        className="
                          font-semibold
                          text-lg
                        "
                      >
                        Technologies
                      </h3>

                      <div
                        className="
                          mt-4
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {experiment.technologies.map(
                          (tech) => (
                            <span
                              key={tech}
                              className="
                                rounded-md
                                border
                                border-border
                                bg-surface
                                px-3
                                py-1.5
                                font-mono
                                text-[11px]
                              "
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </section>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}

      </AnimatePresence>

    </LayoutGroup>
  );
}