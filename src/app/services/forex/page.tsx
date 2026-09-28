import { Metadata } from "next";
import ForexContent from "@/components/ForexContent";

export const metadata: Metadata = {
  title: "Forex Services & International Student Remittance | Umang Career Consultancy",
  description:
    "Reliable forex services for study abroad at Umang Career Consultancy. Competitive exchange rates, student smart currency cards, university tuition fee wire transfers, Canada GIC, and German blocked accounts.",
  keywords: [
    "forex services",
    "student forex card",
    "study abroad remittance",
    "university tuition transfer",
    "Canada GIC payment",
    "German blocked account",
    "Umang Career Consultancy",
  ],
};

export default function ForexPage() {
  return <ForexContent />;
}
