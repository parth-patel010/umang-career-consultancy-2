import type { Metadata } from "next";
import SingaporeStudyAbroadContent from "@/components/SingaporeStudyAbroadContent";

export const metadata: Metadata = {
  title: "Singapore Student Visa (Student's Pass STP) | Umang Career Consultancy",
  description:
    "Study in Singapore: Your Gateway to World-Class Asian Education with Umang Career Consultancy. Complete breakdown of ICA Student's Pass (STP), SOLAR application, official ICA fees (SGD 45/60), HTM, IT, SCM courses, and 1-year LTVP post-study stay.",
  keywords: [
    "Singapore Student Visa",
    "Study in Singapore",
    "Singapore Students Pass STP",
    "ICA Singapore SOLAR",
    "SOLAR Student Visa Singapore",
    "Singapore Work Rights LTVP",
    "Umang Career Consultancy Singapore",
    "Sudip Parikh Singapore Visa",
  ],
};

export default function SingaporeStudentVisaPage() {
  return <SingaporeStudyAbroadContent />;
}
