import type { Metadata } from "next";
import FounderMessageContent from "@/components/FounderMessageContent";

export const metadata: Metadata = {
  title: "Founder’s Message | Sudip Parikh | Umang Career Consultancy",
  description:
    "Read the personal message from Sudip Parikh, Founder & Principal Consultant of Umang Career Consultancy. Discover our uncompromising foundation of honest, transparent, and empathetic global education and immigration guidance since 2020.",
  keywords: [
    "Sudip Parikh",
    "Founder Message Umang Career Consultancy",
    "Sudip Parikh Vadodara",
    "Umang Career Consultancy Founder",
    "Australia New Zealand Alumnus",
    "Visa Consultant Vadodara",
  ],
};

export default function FounderMessagePage() {
  return <FounderMessageContent />;
}
