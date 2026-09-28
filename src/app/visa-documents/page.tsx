import type { Metadata } from "next";
import VisaDocumentContent from "@/components/VisaDocumentContent";

export const metadata: Metadata = {
  title: "Visa Documents Guidance | Umang Career Consultancy",
  description:
    "Expert visa document checklist, verification, financial guidance, and application review for Student, Spouse, Visitor, and PR visas at Umang Career Consultancy.",
};

export default function DirectVisaDocumentsPage() {
  return <VisaDocumentContent />;
}
