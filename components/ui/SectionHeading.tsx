"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-full"}
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-blue mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
