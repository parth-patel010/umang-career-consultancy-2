import type { Metadata } from "next";
import SingaporeStudyAbroadContent from "@/components/SingaporeStudyAbroadContent";

export const metadata: Metadata = {
  title: "Singapore Student Visa Services | Umang Career Consultancy",
  description:
    "Expert Singapore Student's Pass (STP) application and SOLAR processing services with Umang Career Consultancy Vadodara.",
  keywords: [
    "Singapore Student Visa Services",
    "Singapore Students Pass",
    "ICA Singapore SOLAR",
    "Umang Career Consultancy Singapore",
  ],
};

export default function ServicesSingaporeStudentVisaPage() {
  return <SingaporeStudyAbroadContent />;
}
