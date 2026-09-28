import type { Metadata } from "next";
import MalaysiaStudyAbroadContent from "@/components/MalaysiaStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Malaysia | University of Malaya (#60), Monash & EMGS Visas | Umang Career Consultancy",
  description:
    "Comprehensive guide to studying in Malaysia with Umang Career Consultancy. Explore top universities (University of Malaya, Monash, Sunway, UCSI, UKM), affordable tuition from $1,630/yr, EMGS eVAL visa process, living costs, and foreign twinning degrees.",
  keywords: [
    "Study in Malaysia",
    "Study Abroad Malaysia",
    "University of Malaya UM",
    "Monash University Malaysia",
    "Sunway University",
    "Taylor's University Malaysia",
    "Malaysia Student Visa EMGS",
    "Twinning Programs Malaysia",
    "Affordable Education in Asia",
    "Umang Career Consultancy Malaysia",
  ],
};

export default function MalaysiaStudyAbroadPage() {
  return <MalaysiaStudyAbroadContent />;
}
