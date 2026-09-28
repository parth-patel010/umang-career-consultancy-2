import type { Metadata } from "next";
import AustraliaStudyAbroadContent from "@/components/AustraliaStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Australia | Go8 Universities, ECTA 4-Yr PSW & Visa | Umang Career Consultancy",
  description:
    "Study in Australia with Umang Career Consultancy. Comprehensive guidance on Group of Eight (Go8) universities, Subclass 500 Student Visa, Australia–India ECTA extended post-study work rights, CRICOS courses, AUD $29,710 living fund requirements, and permanent residency pathways.",
  keywords: [
    "Study in Australia",
    "Study Abroad Australia",
    "Group of Eight Universities",
    "University of Melbourne",
    "University of Sydney",
    "UNSW Sydney",
    "Australia Student Visa Subclass 500",
    "Subclass 485 Temporary Graduate Visa",
    "Australia India ECTA Post Study Work",
    "Study in Sydney",
    "Study in Melbourne",
    "Umang Career Consultancy Australia",
  ],
};

export default function AustraliaStudyAbroadPage() {
  return <AustraliaStudyAbroadContent />;
}
