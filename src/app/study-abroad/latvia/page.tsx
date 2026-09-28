import type { Metadata } from "next";
import LatviaStudyAbroadContent from "@/components/LatviaStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Latvia | Top Universities, Affordable Tuition & Visas | Umang Career Consultancy",
  description:
    "Study in Latvia with Umang Career Consultancy. Complete information on English-taught Bachelor's, Master's & Medical programs at Riga Technical University, University of Latvia, Rīga Stradiņš University, tuition fees, cost of living & student residence permits.",
  keywords: [
    "Study in Latvia",
    "Study in Latvia in English",
    "Riga Technical University",
    "Riga Stradins University MBBS",
    "Latvia Student Visa",
    "Latvia Tuition Fees",
    "Umang Career Consultancy Latvia",
    "Study Abroad Latvia",
  ],
};

export default function LatviaStudyAbroadPage() {
  return <LatviaStudyAbroadContent />;
}
