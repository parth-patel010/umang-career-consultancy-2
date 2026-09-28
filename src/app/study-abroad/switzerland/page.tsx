import type { Metadata } from "next";
import SwitzerlandStudyAbroadContent from "@/components/SwitzerlandStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Switzerland | Hospitality, Business Schools, Visas & Living Costs | Umang Career Consultancy",
  description:
    "Comprehensive guide to studying in Switzerland with Umang Career Consultancy. Discover top institutions (EU Business School, GLION, SHMS, Geneva Business School, BHMS, HTMi), Swiss National Visa D guidance, tuition fees, paid internships, and living costs.",
  keywords: [
    "Study in Switzerland",
    "Study Abroad Switzerland",
    "Swiss Hotel Management School SHMS",
    "GLION Institute of Higher Education",
    "EU Business School Switzerland",
    "Geneva Business School",
    "Business and Hotel Management School BHMS",
    "Swiss National Visa D",
    "Study in Bern Geneva Zurich",
    "Umang Career Consultancy Switzerland",
  ],
};

export default function SwitzerlandStudyAbroadPage() {
  return <SwitzerlandStudyAbroadContent />;
}
