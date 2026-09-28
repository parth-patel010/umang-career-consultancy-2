import { Metadata } from "next";
import VisitorVisaContent from "@/components/VisitorVisaContent";

export const metadata: Metadata = {
  title: "Visitor Visa & Tourist Visa Guidance | Umang Career Consultancy",
  description:
    "Expert visitor visa and tourist visa guidance at Umang Career Consultancy. Complete assistance with itinerary planning, documentation, financial proofs, and visa interviews for USA, UK, Schengen, Canada, and Australia.",
  keywords: [
    "visitor visa",
    "tourist visa",
    "USA B1 B2 visa",
    "Schengen visa",
    "UK visitor visa",
    "Canada tourist visa",
    "Australia visitor visa",
    "Umang Career Consultancy",
  ],
};

export default function VisitorVisaPage() {
  return <VisitorVisaContent />;
}
