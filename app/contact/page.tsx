import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui/PageHeader";
export const metadata = { title: "Contact | Asif Iqbal" };

export default function ContactPage() {
  return (
<>
 <PageHeader
        eyebrow="Connect"
        title="Let's start a conversation"
        description="If you're hiring for Investment Analytics, Business Intelligence, or Analytics Engineering roles, I'd be happy to discuss how my experience aligns with your team."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Contact />
    </>
  );
}
