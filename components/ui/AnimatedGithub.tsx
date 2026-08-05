"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/BrandIcons";

export function AnimatedGithub() {
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
            scale: 10,
            x: 200,
            y: 100,
            opacity: 0.2,
          },
        }}
        transition={{
          duration: 0.25,
        }}
        className="relative z-10"
      >
        <GithubIcon className="size-8 text-accent-blue" />
      </motion.div>

      <svg
        className="absolute inset-0"
        viewBox="0 0 50 50"
      >
        
      </svg>
    </motion.div>
  );
}