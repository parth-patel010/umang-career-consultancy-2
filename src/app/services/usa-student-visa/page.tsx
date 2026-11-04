import type { Metadata } from "next";
import USAStudyAbroadContent from "@/components/USAStudyAbroadContent";

export const metadata: Metadata = {
  title: "USA Student Visa Services | Umang Career Consultancy",
  description:
    "Achieve Your American Dream: Study in the USA with Umang Career Consultancy. Expert F-1 visa coaching, meticulous financial mapping, dedicated SEVIS compliance, Form I-20, and 3-Year STEM OPT guidance.",
};

export default function ServicesUSAStudentVisaPage() {
  return <USAStudyAbroadContent />;
}
