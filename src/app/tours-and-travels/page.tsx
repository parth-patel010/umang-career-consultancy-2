import type { Metadata } from "next";
import ToursAndTravelsContent from "@/components/ToursAndTravelsContent";

export const metadata: Metadata = {
  title: "Bespoke Tours & Travels | Domestic & International Holidays | Umang Career Consultancy",
  description:
    "Bespoke Tours & Travels: Seamless Journeys, Unforgettable Memories with Umang Career Consultancy. Incredible domestic holiday packages (Rajasthan, Kerala, Himachal, Goa, Andaman) and premium international tours (Dubai, Maldives, Sri Lanka, Vietnam, Southeast Asia, European Schengen). Tailor-made itineraries, flights with auto check-in, luxury stays, tourist visas, and zero hidden costs.",
  keywords: [
    "tours and travels",
    "bespoke tours and travels",
    "domestic tour packages india",
    "international holiday packages",
    "rajasthan tour package",
    "kerala tour package",
    "dubai tour package",
    "maldives tour package",
    "europe tour package",
    "Umang Career Consultancy tours",
    "Vadodara tour operator",
  ],
};

export default function ToursAndTravelsPage() {
  return <ToursAndTravelsContent />;
}
