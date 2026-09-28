import { Metadata } from "next";
import PreDepartureContent from "@/components/PreDepartureContent";

export const metadata: Metadata = {
  title: "Pre-Departure Guidance & Briefing | Umang Career Consultancy",
  description:
    "Comprehensive pre-departure guidance at Umang Career Consultancy. Expert orientation on foreign currency, travel checklists, customs regulations, airport pickup, accommodation, and cultural adaptation.",
  keywords: [
    "pre-departure guidance",
    "study abroad briefing",
    "student forex card",
    "airport immigration tips",
    "international student packing list",
    "Umang Career Consultancy",
  ],
};

export default function PreDeparturePage() {
  return <PreDepartureContent />;
}
