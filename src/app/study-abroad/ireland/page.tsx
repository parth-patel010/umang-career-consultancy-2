import type { Metadata } from "next";
import IrelandStudyAbroadContent from "@/components/IrelandStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Ireland | Silicon Docks, 2-Year Stamp 1G PSW & Visa | Umang Career Consultancy",
  description:
    "Study in Ireland with Umang Career Consultancy. Comprehensive guidance on English-taught degrees at Trinity College Dublin, UCD, and Galway, 2-year Stamp 1G post-study work visas, Stamp 2 part-time work rights, tuition fees, and Ireland Student Visa (AVATS) processing.",
  keywords: [
    "Study in Ireland",
    "Study Abroad Ireland",
    "Trinity College Dublin",
    "University College Dublin",
    "Stamp 1G Visa Ireland",
    "Ireland Student Visa",
    "Silicon Docks Dublin",
    "Study in Dublin",
    "Study in Cork",
    "Study in Galway",
    "Umang Career Consultancy Ireland",
  ],
};

export default function IrelandStudyAbroadPage() {
  return <IrelandStudyAbroadContent />;
}
