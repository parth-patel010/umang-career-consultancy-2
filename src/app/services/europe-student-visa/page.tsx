import type { Metadata } from "next";
import EuropeStudyAbroadContent from "@/components/EuropeStudyAbroadContent";

export const metadata: Metadata = {
  title: "Europe Student Visa Guidance | Umang Career Consultancy",
  description:
    "Unlock a Continent of Opportunity: Study in Europe with Umang Career Consultancy. Expert Schengen visa processing, tuition-free degrees in Germany, dependent relocation with spouse work rights in Finland, Sweden, Denmark & France, and stay-back job seeker visas.",
};

export default function ServicesEuropeStudentVisaPage() {
  return <EuropeStudyAbroadContent />;
}
