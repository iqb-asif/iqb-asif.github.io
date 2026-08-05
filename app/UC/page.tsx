"use client";

import { motion } from "framer-motion";
import { SkillsWeb } from "@/components/home/SkillsWeb";
import { HoverFillText } from "@/components/ui/HoverFillText";
import { profile } from "@/data/profile";


const ease = [0.16, 1, 0.3, 1] as const;

export default function UnderConstructionPage() {
  return (
    <div className="relative h-screen w-screen bg-bg text-text">

      {/* Skills Network */}
      <motion.div
        initial={{ opacity: 0, scale: 0.01 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="absolute inset-0"
      >
        <SkillsWeb className="h-full w-full" />
      </motion.div>

      {/* Center Text */}

<div className="min-h-screen flex items-center">
  <div className="container-page relative w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">

         <center> <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="text-5xl "
          >
            <HoverFillText text={"Coming Soon!"} />
          </motion.h1>

         <motion.div 
  initial={{ opacity: 0, y: 14 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }} // Fixed here
  className="mt-4 font-mono text-sm md:text-base text-text-secondary" 
> 
</motion.div>
    </center>
        </div>
      </div>
    </div>

  );
}
