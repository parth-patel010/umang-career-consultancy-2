import type { Metadata } from "next";
import UAEStudyAbroadContent from "@/components/UAEStudyAbroadContent";

export const metadata: Metadata = {
  title: "UAE & Dubai Student Visa | Umang Career Consultancy",
  description:
    "Shape Your Destiny: Study in Dubai with Umang Career Consultancy. University-sponsored student visas, UK & Australian branch campuses, English MOI pathways, and international transfers.",
};

export default function UAEStudentVisaPage() {
  return <UAEStudyAbroadContent />;
}
