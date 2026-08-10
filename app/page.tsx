import { Hero } from "@/components/home/Hero";
import { ProfessionalSnapshot } from "@/components/home/ProfessionalSnapshot";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ExperienceHighlights } from "@/components/home/ExperienceHighlights";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { HowIWork } from "@/components/home/HowIWork";
import { RecruiterPreview } from "@/components/home/RecruiterPreview";
import { Contact } from "@/components/home/Contact";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
      <section
        id="contact"
        className="container-page py-5 md:py-5 border-t border-border"
      >
              <SectionHeading 
                eyebrow="Connect"
                title="Let's start a conversation"
                description="If you're hiring for Investment Analytics, Business Intelligence, or Analytics Engineering roles, I'd be happy to discuss how my experience aligns with your team."
              />
              </section>
      <Contact />
    </>
  );
}
