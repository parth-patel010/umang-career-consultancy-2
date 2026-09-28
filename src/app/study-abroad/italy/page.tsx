import type { Metadata } from "next";
import ItalyStudyAbroadContent from "@/components/ItalyStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Italy | Bologna, Sapienza, PoliMi, DSU Scholarships & Visas | Umang Career Consultancy",
  description:
    "Comprehensive guide to studying in Italy with Umang Career Consultancy. Explore top universities (University of Bologna, Sapienza Rome, Politecnico di Milano, Padua, Pisa), 100% tuition DSU scholarships, Universitaly pre-enrolment, living costs, and job search residence permits.",
  keywords: [
    "Study in Italy",
    "Study Abroad Italy",
    "University of Bologna",
    "Sapienza University of Rome",
    "Politecnico di Milano PoliMi",
    "University of Padua",
    "DSU Scholarship Italy",
    "Universitaly Pre-enrolment",
    "Italy Student Visa",
    "Umang Career Consultancy Italy",
  ],
};

export default function ItalyStudyAbroadPage() {
  return <ItalyStudyAbroadContent />;
}
