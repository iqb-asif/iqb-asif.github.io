"use client";

import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/icons/BrandIcons";

export function AnimatedLinkedIn() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="relative inline-flex items-center justify-center w-12 h-12"
    >
      <motion.div
        variants={{
          rest: {
            scale: 1.4,
          },
          hover: {
            scale: 1.7,
          },
        }}
        transition={{
          duration: 0.25,
        }}
        className="relative z-10"
      >
        <LinkedinIcon className="size-8 text-accent-blue" />
      </motion.div>

      <svg
        className="absolute inset-0"
        viewBox="0 0 50 50"
      >
        <motion.circle
          cx="32"
          cy="32"
          r="18"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={{
            rest: {
              pathLength: 0,
              opacity: 0,
            },
            hover: {
              pathLength: 1,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </svg>
    </motion.div>
  );
}