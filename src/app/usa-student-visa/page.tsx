import type { Metadata } from "next";
import USAStudyAbroadContent from "@/components/USAStudyAbroadContent";

export const metadata: Metadata = {
  title: "USA Student Visa (F-1 Visa) | Umang Career Consultancy",
  description:
    "Achieve Your American Dream: Study in the USA with Umang Career Consultancy. Expert F-1 visa coaching, meticulous financial mapping, dedicated SEVIS compliance, Form I-20, and 3-Year STEM OPT guidance.",
  keywords: [
    "USA Student Visa",
    "F-1 Student Visa",
    "USA Student Visa Page",
    "Study in USA",
    "Form I-20",
    "SEVIS Fee",
    "STEM OPT USA",
    "Umang Career Consultancy USA",
    "Vadodara USA Visa Consultant",
  ],
};

export default function USAStudentVisaPage() {
  return <USAStudyAbroadContent />;
}
