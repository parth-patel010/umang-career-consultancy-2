import type { Metadata } from "next";
import UAEStudyAbroadContent from "@/components/UAEStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in UAE | Dubai Campuses, 10-Year Golden Visa, Top Universities & Admissions | Umang Career Consultancy",
  description:
    "Explore higher education opportunities in the United Arab Emirates (UAE). Discover top branch campuses like University of Birmingham Dubai, Heriot-Watt, Middlesex, De Montfort, BITS Pilani, 0% personal income tax, and 10-year Golden Visa with Umang Career Consultancy.",
  keywords: [
    "Study in UAE",
    "Study Abroad Dubai",
    "Study in United Arab Emirates",
    "Universities in Dubai",
    "University of Birmingham Dubai",
    "Heriot-Watt University Dubai",
    "Middlesex University Dubai",
    "UAE Student Visa",
    "UAE Golden Visa Students",
    "Umang Career Consultancy UAE",
  ],
};

export default function UAEStudyAbroadPage() {
  return <UAEStudyAbroadContent />;
}
