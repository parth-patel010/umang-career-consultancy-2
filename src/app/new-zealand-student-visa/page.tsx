import type { Metadata } from "next";
import NewZealandStudyAbroadContent from "@/components/NewZealandStudyAbroadContent";

export const metadata: Metadata = {
  title: "New Zealand Student Visa | Umang Career Consultancy",
  description:
    "Build Your Global Future: Study in New Zealand with Umang Career Consultancy. Expert guidance on latest INZ rules, 25h/week Master's work hours, Green List career mapping, India-NZ FTA post-study visas (3–4 years), and FTS setup.",
  keywords: [
    "New Zealand Student Visa",
    "New Zealand Student Visa Page",
    "Study in New Zealand",
    "INZ Student Visa",
    "Funds Transfer Scheme FTS",
    "India-NZ FTA Work Rights",
    "Green List New Zealand",
    "Umang Career Consultancy New Zealand",
    "Vadodara New Zealand Visa Consultant",
  ],
};

export default function NewZealandStudentVisaPage() {
  return <NewZealandStudyAbroadContent />;
}
