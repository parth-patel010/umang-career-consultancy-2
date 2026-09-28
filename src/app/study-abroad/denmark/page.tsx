import type { Metadata } from "next";
import DenmarkStudyAbroadContent from "@/components/DenmarkStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Denmark | Top Universities, CPR & 3-Year Post Study | Umang Career Consultancy",
  description:
    "Comprehensive guide to studying in Denmark with Umang Career Consultancy. Explore top Danish universities (DTU, University of Copenhagen, Aarhus, Aalborg), tuition fees, monthly living costs, ST1 residence permit, CPR number, and post-study establishment card.",
  keywords: [
    "Study in Denmark",
    "Study Abroad Denmark",
    "Universities in Denmark",
    "Technical University of Denmark DTU",
    "University of Copenhagen",
    "Aarhus University",
    "Aalborg University PBL",
    "Denmark ST1 Student Visa",
    "Denmark CPR Number",
    "Establishment Card Denmark",
    "Umang Career Consultancy Denmark",
  ],
};

export default function DenmarkStudyAbroadPage() {
  return <DenmarkStudyAbroadContent />;
}
