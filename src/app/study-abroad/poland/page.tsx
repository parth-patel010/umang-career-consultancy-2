import type { Metadata } from "next";
import PolandStudyAbroadContent from "@/components/PolandStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Poland | Low Tuition Fees, English Degrees & Visa | Umang Career Consultancy",
  description:
    "Study in Poland with Umang Career Consultancy. Comprehensive guidance on English-taught Engineering, Computer Science, Medicine (MD), and Business degrees, tuition from €1,000/yr, Schengen mobility, student work rights, and Poland National D-Type Visa support.",
  keywords: [
    "Study in Poland",
    "Study Abroad Poland",
    "University of Warsaw",
    "Warsaw University of Technology",
    "Jagiellonian University",
    "Poland Student Visa",
    "Poland Tuition Fees",
    "Study Medicine in Poland",
    "Study Engineering in Poland",
    "Karta Pobytu Poland",
    "Umang Career Consultancy Poland",
  ],
};

export default function PolandStudyAbroadPage() {
  return <PolandStudyAbroadContent />;
}
