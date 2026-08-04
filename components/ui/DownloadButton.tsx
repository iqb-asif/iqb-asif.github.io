"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function DownloadButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [burstKey, setBurstKey] = useState(0);
  const particles = Array.from({ length: 6 });

  return (
    <motion.a
      href={href}
      onClick={() => setBurstKey((k) => k + 1)}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-5 py-2.5 text-sm font-medium",
        "bg-text text-bg hover:opacity-90 transition-opacity duration-200"
      )}
    >
      {children}
      <AnimatePresence>
        {burstKey > 0 && (
          <span className="pointer-events-none absolute left-1/2 top-1/2">
            {particles.map((_, i) => {
              const angle = (i / particles.length) * Math.PI * 2;
              const dist = 20;
              return (
                <motion.span
                  key={`${burstKey}-${i}`}
                  className="absolute size-1 rounded-full"
                  style={{ background: "var(--accent-blue)" }}
                  initial={{ x: 0, y: 0, opacity: 0.9, scale: 1 }}
                  animate={{
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    opacity: 0,
                    scale: 0.4,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                />
              );
            })}
          </span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
