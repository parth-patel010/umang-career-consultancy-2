import type { Metadata } from "next";
import FranceStudyAbroadContent from "@/components/FranceStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in France | Top Universities, Low Tuition & Admissions | Umang Career Consultancy",
  description:
    "Explore higher education opportunities in France with Umang Career Consultancy. Complete guidance on top universities, Grandes Écoles, 1,600+ English-taught programs, tuition fees, cost of living, scholarships & France student visa (VLS-TS).",
  keywords: [
    "Study in France",
    "Study in France in English",
    "Grandes Ecoles France",
    "France Student Visa",
    "France Tuition Fees",
    "Campus France Guidance",
    "Umang Career Consultancy France",
    "Study Abroad France",
  ],
};

export default function FranceStudyAbroadPage() {
  return <FranceStudyAbroadContent />;
}
