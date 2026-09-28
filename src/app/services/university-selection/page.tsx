import type { Metadata } from "next";
import UniversitySelectionContent from "@/components/UniversitySelectionContent";

export const metadata: Metadata = {
  title: "University Selection | Umang Career Consultancy",
  description:
    "Explore, compare, and select from world-class accredited universities tailored to your academic profile, budget, and global career ambitions with Umang Career Consultancy.",
};

export default function UniversitySelectionPage() {
  return <UniversitySelectionContent />;
}
