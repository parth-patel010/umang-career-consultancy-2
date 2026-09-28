import type { Metadata } from "next";
import SopContent from "@/components/SopContent";

export const metadata: Metadata = {
  title: "Statement of Purpose (SOP) Guidance | Umang Career Consultancy",
  description:
    "Expert Statement of Purpose (SOP) and resume preparation support for global universities and visa applications at Umang Career Consultancy.",
};

export default function DirectSopPage() {
  return <SopContent />;
}
