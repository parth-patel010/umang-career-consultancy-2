import type { Metadata } from "next";
import UKStudyAbroadContent from "@/components/UKStudyAbroadContent";

export const metadata: Metadata = {
  title: "UK London Student Visa | Umang Career Consultancy",
  description:
    "Shape Your Future: Study in London with Umang Career Consultancy. Expert visa processing, official CAS verification, updated UKVI £558 maintenance rules, and trusted London university partnerships.",
  keywords: [
    "UK Student Visa",
    "Study in London",
    "UK London Student Visa Page",
    "UKVI CAS Verification",
    "Graduate Route Visa UK",
    "Umang Career Consultancy UK",
  ],
};

export default function UKStudentVisaPage() {
  return <UKStudyAbroadContent />;
}
