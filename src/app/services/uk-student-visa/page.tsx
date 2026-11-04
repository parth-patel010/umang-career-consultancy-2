import type { Metadata } from "next";
import UKStudyAbroadContent from "@/components/UKStudyAbroadContent";

export const metadata: Metadata = {
  title: "UK London Student Visa Guidance | Umang Career Consultancy",
  description:
    "Shape Your Future: Study in London with Umang Career Consultancy. Expert visa processing, official CAS verification, updated UKVI £558 maintenance rules, and trusted London university partnerships.",
};

export default function ServicesUKStudentVisaPage() {
  return <UKStudyAbroadContent />;
}
