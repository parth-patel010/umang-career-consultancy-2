import type { Metadata } from "next";
import USAStudyAbroadContent from "@/components/USAStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in the USA & F-1 Student Visa | Umang Career Consultancy",
  description:
    "Achieve Your American Dream: Study in the USA with Umang Career Consultancy. Expert F-1 visa coaching, meticulous financial mapping, dedicated SEVIS compliance, Form I-20, and 3-Year STEM OPT guidance.",
  keywords: [
    "Study in USA",
    "USA Student Visa",
    "F-1 Student Visa",
    "Form I-20",
    "SEVIS Fee",
    "STEM OPT USA",
    "US Universities for Indian Students",
    "Four-Year Authorized Cap USCIS",
    "F-1 Visa Interview Questions",
    "Umang Career Consultancy USA",
    "Vadodara USA Visa Consultant",
  ],
};

export default function USAStudyAbroadPage() {
  return <USAStudyAbroadContent />;
}
