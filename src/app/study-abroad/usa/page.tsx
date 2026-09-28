import type { Metadata } from "next";
import USAStudyAbroadContent from "@/components/USAStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in the USA | 3-Year STEM OPT, Top Universities & F-1 Visa | Umang Career Consultancy",
  description:
    "Comprehensive guide to studying in the United States with Umang Career Consultancy. Explore top universities (Stanford, Duke, BU, Purdue, USC), 36-month STEM OPT, F-1 visa interview prep, tuition fees, monthly living costs, and scholarships.",
  keywords: [
    "Study in USA",
    "Study in the United States",
    "Study Abroad USA",
    "STEM OPT USA",
    "F-1 Student Visa",
    "US Universities for Indian Students",
    "Stanford University",
    "Purdue University",
    "US Higher Education System",
    "Umang Career Consultancy USA",
  ],
};

export default function USAStudyAbroadPage() {
  return <USAStudyAbroadContent />;
}
