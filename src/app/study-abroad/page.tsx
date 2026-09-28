import type { Metadata } from "next";
import StudyAbroadContent from "@/components/StudyAbroadContent";

export const metadata: Metadata = {
  title: "Study Abroad in Canada, USA, UK, Australia & Europe | Umang Career Consultancy",
  description:
    "Start your study abroad journey with Umang Career Consultancy. Expert university selection, scholarships, test preparation, SOP/LOR drafting, and visa assistance for Canada, USA, UK, Australia, Germany, France & 25+ global destinations.",
  keywords: [
    "Study Abroad",
    "Study in Canada",
    "Study in USA",
    "Study in UK",
    "Study in Australia",
    "Study in Germany",
    "Study in Europe",
    "Umang Career Consultancy",
    "Student Visa Consultants",
    "Study Abroad Guidance",
    "Overseas Education",
  ],
};

export default function StudyAbroadPage() {
  return <StudyAbroadContent />;
}
