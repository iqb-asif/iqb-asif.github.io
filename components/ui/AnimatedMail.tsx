"use client";

import { motion } from "framer-motion";
import { MailIcon } from "@/components/icons/BrandIcons";

export function AnimatedMail({ hovered = false }: { hovered?: boolean }) {
  return (
    <div className="relative inline-flex items-center justify-center w-12 h-12">
      <motion.div
        animate={{ scale: hovered ? 22 : 1 , x: hovered ? -35 : 0, y: hovered ? 100 : 0}}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <MailIcon className="size-8 text-accent-blue" />
      </motion.div>
      <motion.div
        animate={{ opacity: hovered ? 0.25 : 0, scale: hovered ? 10 : 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full bg-accent-blue blur-md -z-10"
      />
    </div>
  );
}