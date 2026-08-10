import { PageHeader } from "@/components/ui/PageHeader";
import CertificationGallery from "@/components/ui/CertificationGallery";

export const metadata = {
  title: "Certifications | Asif Iqbal",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Professional certifications"
        description="A collection of professional certifications supporting my investment analytics, technology, automation, and business intelligence expertise."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Certifications" },
        ]}
      />

      <CertificationGallery />
    </>
  );
}