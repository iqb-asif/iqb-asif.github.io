import { Hero } from "@/components/home/Hero";
import { ProfessionalSnapshot } from "@/components/home/ProfessionalSnapshot";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ExperienceHighlights } from "@/components/home/ExperienceHighlights";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { HowIWork } from "@/components/home/HowIWork";
import { RecruiterPreview } from "@/components/home/RecruiterPreview";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfessionalSnapshot />
      <AboutPreview />
      <ExperienceHighlights />
      <CoreCapabilities />
      <FeaturedProject />
      <HowIWork />
      <RecruiterPreview />
      <Contact />
    </>
  );
}
