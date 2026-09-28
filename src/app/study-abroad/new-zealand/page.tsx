import type { Metadata } from "next";
import NewZealandStudyAbroadContent from "@/components/NewZealandStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in New Zealand | All 8 Unis in Global Top 2%, Green List & Visas | Umang Career Consultancy",
  description:
    "Comprehensive guide to studying in New Zealand with Umang Career Consultancy. Explore all 8 public universities (The University of Auckland, Otago, Canterbury, AUT, Victoria Wellington), Green List fast-track PR, 3-year Post-Study Work Visas, tuition fees, and living expenses.",
  keywords: [
    "Study in New Zealand",
    "Study Abroad New Zealand",
    "The University of Auckland",
    "University of Otago",
    "University of Canterbury",
    "Auckland University of Technology AUT",
    "New Zealand Student Visa",
    "New Zealand Green List PR",
    "Post Study Work Visa New Zealand",
    "Umang Career Consultancy New Zealand",
  ],
};

export default function NewZealandStudyAbroadPage() {
  return <NewZealandStudyAbroadContent />;
}
