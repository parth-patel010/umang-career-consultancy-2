import type { Metadata } from "next";
import MaltaStudyAbroadContent from "@/components/MaltaStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Malta | English-Taught EU Degrees, Visas & Fees | Umang Career Consultancy",
  description:
    "Study in Malta with Umang Career Consultancy. Discover 100% English-taught Bachelor's, Master's & Diploma programs at top institutions, low tuition fees, part-time work rights, Mediterranean lifestyle & Schengen visa benefits.",
  keywords: [
    "Study in Malta",
    "Study in Malta in English",
    "University of Malta",
    "MCAST Malta",
    "Malta Student Visa",
    "Malta Tuition Fees",
    "Umang Career Consultancy Malta",
    "Study Abroad Malta",
  ],
};

export default function MaltaStudyAbroadPage() {
  return <MaltaStudyAbroadContent />;
}
