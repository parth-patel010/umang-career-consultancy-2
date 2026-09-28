import type { Metadata } from "next";
import CanadaStudyAbroadContent from "@/components/CanadaStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Canada | Top Universities, PGWP & Visas | Umang Career Consultancy",
  description:
    "Study in Canada with Umang Career Consultancy. Expert guidance on top DLI universities, 24-hour work rights, post-graduation work permits (PGWP up to 3 years), tuition fees, cost of living, scholarships & Canada study permit processing.",
  keywords: [
    "Study in Canada",
    "Study in Canada DLI",
    "Canada Student Visa",
    "Canada Study Permit",
    "PGWP Canada",
    "Canada Tuition Fees",
    "University of Toronto admissions",
    "Umang Career Consultancy Canada",
    "Study Abroad Canada",
  ],
};

export default function CanadaStudyAbroadPage() {
  return <CanadaStudyAbroadContent />;
}
