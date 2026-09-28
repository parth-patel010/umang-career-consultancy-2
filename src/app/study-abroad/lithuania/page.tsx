import type { Metadata } from "next";
import LithuaniaStudyAbroadContent from "@/components/LithuaniaStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Lithuania | Vilnius University, Laser Tech, Visas & Fees | Umang Career Consultancy",
  description:
    "Comprehensive guide to studying in Lithuania with Umang Career Consultancy. Discover top universities (Vilnius University, VILNIUS TECH, KTU, LSMU), tuition fees from €2,200/year, 40 hrs/week student work rights, 12-month post-study TRP, and living costs.",
  keywords: [
    "Study in Lithuania",
    "Study Abroad Lithuania",
    "Vilnius University",
    "Vilnius Gediminas Technical University",
    "Kaunas University of Technology KTU",
    "Lithuanian University of Health Sciences LSMU",
    "Lithuania Student Visa",
    "Lithuania TRP for Students",
    "Umang Career Consultancy Lithuania",
  ],
};

export default function LithuaniaStudyAbroadPage() {
  return <LithuaniaStudyAbroadContent />;
}
