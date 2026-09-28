import { Metadata } from "next";
import PrImmigrationContent from "@/components/PrImmigrationContent";

export const metadata: Metadata = {
  title: "Permanent Residency (PR) & Immigration Guidance | Umang Career Consultancy",
  description:
    "Expert permanent residency and immigration guidance at Umang Career Consultancy. Comprehensive points assessment, country-specific pathways, document verification, and application filing for Canada, Australia, and New Zealand.",
  keywords: [
    "PR visa",
    "Permanent Residency",
    "Canada Express Entry",
    "Australia PR",
    "SkillSelect",
    "PNP immigration",
    "ECA assessment",
    "Umang Career Consultancy",
  ],
};

export default function PrImmigrationPage() {
  return <PrImmigrationContent />;
}
