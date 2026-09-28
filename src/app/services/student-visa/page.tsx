import type { Metadata } from "next";
import StudentVisaContent from "@/components/StudentVisaContent";

export const metadata: Metadata = {
  title: "Student Visa Guidance & Filing | Umang Career Consultancy",
  description:
    "End-to-end student visa guidance, financial planning, mock interviews, and pre-departure support for top global study destinations at Umang Career Consultancy.",
};

export default function StudentVisaPage() {
  return <StudentVisaContent />;
}
