import { Metadata } from "next";
import AirTicketInsuranceContent from "@/components/AirTicketInsuranceContent";

export const metadata: Metadata = {
  title: "Air Ticket Booking & Travel Insurance | Umang Career Consultancy",
  description:
    "Expert flight booking and travel insurance guidance at Umang Career Consultancy. Student baggage discounts, flexible cancellation tickets, worldwide cashless medical insurance, and airport transfer support.",
  keywords: [
    "air ticket booking",
    "student flight tickets",
    "travel insurance",
    "student travel insurance",
    "overseas medical cover",
    "Allianz travel insurance",
    "TATA AIG travel insurance",
    "Umang Career Consultancy",
  ],
};

export default function TravelInsurancePage() {
  return <AirTicketInsuranceContent />;
}
