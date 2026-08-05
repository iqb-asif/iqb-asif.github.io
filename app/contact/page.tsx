import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui/PageHeader";
export const metadata = { title: "Contact | Asif Iqbal" };

export default function ContactPage() {
  return (
<>
     <PageHeader
        eyebrow=""
        title="Contact"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Contact />
    </>
  );
}
