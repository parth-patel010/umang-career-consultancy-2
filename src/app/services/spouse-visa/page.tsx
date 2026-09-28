import { Metadata } from "next";
import SpouseVisaContent from "@/components/SpouseVisaContent";

export const metadata: Metadata = {
  title: "Spouse Visa Consultation & Guidance | Umang Career Consultancy",
  description:
    "Expert spouse visa guidance at Umang Career Consultancy. Step-by-step assistance with eligibility, documentation, relationship evidence, and financial requirements for Canada, UK, Australia, USA, and New Zealand.",
  keywords: [
    "spouse visa",
    "partner visa",
    "dependent visa",
    "spouse work permit",
    "Canada spouse visa",
    "UK spouse visa",
    "Australia partner visa",
    "Umang Career Consultancy",
  ],
};

export default function SpouseVisaPage() {
  return <SpouseVisaContent />;
}
