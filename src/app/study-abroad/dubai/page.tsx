import type { Metadata } from "next";
import UAEStudyAbroadContent from "@/components/UAEStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Dubai | Umang Career Consultancy",
  description:
    "Shape Your Destiny: Study in Dubai with Umang Career Consultancy. World-renowned UK & Australian branch campuses, University-sponsored visas, English MOI pathways, and international transfer options.",
};

export default function DubaiStudyAbroadPage() {
  return <UAEStudyAbroadContent />;
}
