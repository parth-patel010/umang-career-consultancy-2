import type { Metadata } from "next";
import NewZealandStudyAbroadContent from "@/components/NewZealandStudyAbroadContent";

export const metadata: Metadata = {
  title: "New Zealand Student Visa Guidance | Umang Career Consultancy",
  description:
    "Build Your Global Future: Study in New Zealand with Umang Career Consultancy. Expert guidance on latest INZ rules, 25h/week Master's work hours, Green List career mapping, India-NZ FTA post-study visas (3–4 years), and FTS setup.",
};

export default function ServicesNewZealandStudentVisaPage() {
  return <NewZealandStudyAbroadContent />;
}
