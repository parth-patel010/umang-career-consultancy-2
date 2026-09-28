import type { Metadata } from "next";
import CzechRepublicStudyAbroadContent from "@/components/CzechRepublicStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Czech Republic (Czechia) | 1,000+ English Degrees & Admissions | Umang Career Consultancy",
  description:
    "Study in the Czech Republic (Czechia) with Umang Career Consultancy. Comprehensive guidance on 1,000+ English-taught programs at Charles University, CTU, and Masaryk, tuition fees from €0 to €6,000, nostrification, cost of living, and Czech Long-Term Student Visa support.",
  keywords: [
    "Study in Czech Republic",
    "Study in Czechia",
    "Study in Prague",
    "Charles University",
    "Czech Technical University",
    "Masaryk University",
    "Study Medicine in Czech Republic",
    "Czech Republic Student Visa",
    "Czechia Tuition Fees",
    "Nostrification Czech Republic",
    "Umang Career Consultancy Czech Republic",
  ],
};

export default function CzechRepublicStudyAbroadPage() {
  return <CzechRepublicStudyAbroadContent />;
}
