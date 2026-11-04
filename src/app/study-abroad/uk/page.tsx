import type { Metadata } from "next";
import UKStudyAbroadContent from "@/components/UKStudyAbroadContent";

export const metadata: Metadata = {
  title: "UK Student Visa & Study in London | Umang Career Consultancy",
  description:
    "Shape Your Future: Study in London with Umang Career Consultancy. Expert visa processing, official CAS verification, updated UKVI £558 maintenance rules, and trusted London university partnerships.",
  keywords: [
    "UK Student Visa",
    "Study in London",
    "Study in the UK",
    "London Student Visa",
    "UKVI CAS Verification",
    "UK Graduate Route Visa",
    "University of Greenwich",
    "Queen Mary University of London",
    "Umang Career Consultancy UK",
    "Study Abroad UK",
  ],
};

export default function UKStudyAbroadPage() {
  return <UKStudyAbroadContent />;
}
