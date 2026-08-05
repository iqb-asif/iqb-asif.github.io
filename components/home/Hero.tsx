"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SkillsWeb } from "@/components/home/SkillsWeb";
import { FlipWords } from "@/components/ui/FlipWords";
import { HoverFillText } from "@/components/ui/HoverFillText";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const headlineParts = profile.headline.split("|").map((s) => s.trim());

export function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden">
      <div className="container-page relative pt-24 pb-28 md:pt-32 md:pb-36 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent-blue mb-5"
          >
            {profile.location} | {profile.profile}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.98] text-balance"
          >
            <HoverFillText text={profile.name} />
          </motion.h1>

         <motion.div 
  initial={{ opacity: 0, y: 14 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }} // Fixed here
  className="mt-4 font-mono text-sm md:text-base text-text-secondary" 
> 
<FlipWords 
  words={headlineParts} 
  // 👈 Add an explicit color mapping value for each of your 4 headline items
  colors={[
    "var(--accent-blue)",   // For Investment Analytics
    "#b5c1d3",              // For Python (or a hex code)
    "var(--accent-amber)",  // For SQL
    "#d54f22"               // For Power BI
  ]} 
  underline={false} 
  lineEm={1.4} 
  durationSec={16} 
  className="font-mono text-sm md:text-base" 
/>
</motion.div>


          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed max-w-lg"
          >
            {profile.valueProposition}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/projects/mizan-analytics" variant="primary">
              Explore My Work
            </Button>
            <Button href="/resume" variant="secondary">
              View Resume
            </Button>
            <a
              href="/recruiter"
              className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent-blue transition-colors"
            >
              Recruiter Mode <ArrowUpRight className="size-3.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative aspect-square w-full max-w-[760px] mx-auto "
        >
          <SkillsWeb className="block h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}
