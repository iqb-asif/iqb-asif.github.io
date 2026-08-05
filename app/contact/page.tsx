import { Contact } from "@/components/home/Contact";
import { SpiderWebCanvas } from "@/components/home/SpiderWebCanvas";
import { RevealOnLoad } from "@/components/ui/RevealOnLoad";

export const metadata = { title: "Contact | Asif Iqbal" };

export default function ContactPage() {
  return (
<>
    <div className="fixed inset-0 -z-10">
      <SpiderWebCanvas density={55} className="absolute inset-0" />
    </div>
    <div className="pt-1 md:pt-20 pb-20 md:pb-32 flex flex-col gap-2 md:gap-1">
      <div className="container-page">
        <RevealOnLoad y={50} delay={0.1} className="flex flex-col gap-2 md:gap-1">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent-blue mb-1">
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Contact</h1>
  
        </RevealOnLoad>
      </div>
      
      <Contact />
    </div>
    </>
  );
}
