import type { Metadata } from "next";
import HungaryStudyAbroadContent from "@/components/HungaryStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Hungary | Medicine, Low Tuition Fees & Stipendium | Umang Career Consultancy",
  description:
    "Study in Hungary with Umang Career Consultancy. Comprehensive guidance on English-taught Medical, Engineering, IT & Business degrees, Stipendium Hungaricum scholarships, affordable tuition from €1,500, cost of living & student visa support.",
  keywords: [
    "Study in Hungary",
    "Study Medicine in Hungary",
    "Semmelweis University",
    "University of Debrecen",
    "Stipendium Hungaricum",
    "Hungary Student Visa",
    "Hungary Tuition Fees",
    "Umang Career Consultancy Hungary",
    "Study Abroad Hungary",
  ],
};

export default function HungaryStudyAbroadPage() {
  return <HungaryStudyAbroadContent />;
}
