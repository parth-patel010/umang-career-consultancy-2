import type { Metadata } from "next";
import CanadaStudyAbroadContent from "@/components/CanadaStudyAbroadContent";

export const metadata: Metadata = {
  title: "Canada Student Visa Guidance | Umang Career Consultancy",
  description:
    "Achieve Your Canadian Dream: Study in Canada with Umang Career Consultancy. Expert guidance on Regular Stream filing, PAL & Master's/Doctoral exemptions, CAD 22,895 living funds (GIC), top DLI universities, 24-hr work rights & PGWP.",
};

export default function ServicesCanadaStudentVisaPage() {
  return <CanadaStudyAbroadContent />;
}
