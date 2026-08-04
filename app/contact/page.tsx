import { Contact } from "@/components/home/Contact";
import { RevealOnLoad } from "@/components/ui/RevealOnLoad";

export const metadata = { title: "Contact | Asif Iqbal" };

export default function ContactPage() {
  return (
    <div className="pt-14 md:pt-20">
      <div className="container-page">
        <RevealOnLoad y={-14}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-blue mb-3">
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Contact</h1>
        </RevealOnLoad>
      </div>
      <Contact />
    </div>
  );
}
