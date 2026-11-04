import type { Metadata } from "next";
import CanadaStudyAbroadContent from "@/components/CanadaStudyAbroadContent";

export const metadata: Metadata = {
  title: "Canada Student Visa | Umang Career Consultancy",
  description:
    "Achieve Your Canadian Dream: Study in Canada with Umang Career Consultancy. Expert guidance on Regular Stream filing, PAL & Master's/Doctoral exemptions, CAD 22,895 living funds (GIC), top DLI universities, 24-hr work rights & PGWP.",
  keywords: [
    "Canada Student Visa",
    "Canada Student Visa Page",
    "Study in Canada",
    "Canadian Study Permit",
    "Regular Stream Transition",
    "Provincial Attestation Letter PAL",
    "Canada GIC CAD 22895",
    "Umang Career Consultancy Canada",
    "Vadodara Canada Visa Consultant",
  ],
};

export default function CanadaStudentVisaPage() {
  return <CanadaStudyAbroadContent />;
}
