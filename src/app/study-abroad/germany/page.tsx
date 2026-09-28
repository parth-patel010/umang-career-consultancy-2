import type { Metadata } from "next";
import GermanyStudyAbroadContent from "@/components/GermanyStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Germany | Free Tuition Public Unis, APS & Visa | Umang Career Consultancy",
  description:
    "Study in Germany with Umang Career Consultancy. Comprehensive guidance on €0 tuition public universities, TU9 institutions, APS certification for Indian applicants, €11,904 blocked accounts, 18-month job-seeking visas, and EU Blue Card pathways.",
  keywords: [
    "Study in Germany",
    "Study Abroad Germany",
    "Free Education in Germany",
    "TU9 Universities",
    "Technical University of Munich",
    "RWTH Aachen",
    "APS Certificate India",
    "Germany Blocked Account",
    "Germany Student Visa",
    "EU Blue Card Germany",
    "Umang Career Consultancy Germany",
  ],
};

export default function GermanyStudyAbroadPage() {
  return <GermanyStudyAbroadContent />;
}
