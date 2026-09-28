import type { Metadata } from "next";
import UKStudyAbroadContent from "@/components/UKStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in the UK | 1-Year Master's, Graduate Visa & Admissions | Umang Career Consultancy",
  description:
    "Study in the United Kingdom with Umang Career Consultancy. Complete guidance on 1-year master's programs, Russell Group universities, CAS letters, 2-year Graduate Route post-study work visas, tuition fees, scholarships, and Student Visa processing.",
  keywords: [
    "Study in the UK",
    "Study Abroad UK",
    "1 Year Masters UK",
    "Russell Group Universities",
    "UK Graduate Route Visa",
    "UK Student Visa",
    "CAS Letter UK",
    "Study in London",
    "Study in Manchester",
    "Umang Career Consultancy UK",
    "UK Universities Admissions",
  ],
};

export default function UKStudyAbroadPage() {
  return <UKStudyAbroadContent />;
}
