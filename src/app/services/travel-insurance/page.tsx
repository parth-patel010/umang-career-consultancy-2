import { Metadata } from "next";
import AirTicketInsuranceContent from "@/components/AirTicketInsuranceContent";

export const metadata: Metadata = {
  title: "Flight Ticket Booking Services & Travel Support | Umang Career Consultancy",
  description:
    "Seamless Flight Bookings & End-to-End Travel Support at Umang Career Consultancy. Highly competitive airfares for domestic & international travel, automated web check-in, boarding passes directly to WhatsApp, corporate travel management, and flexible payment options.",
  keywords: [
    "flight ticket booking",
    "flight ticket booking services",
    "air ticket booking vadodara",
    "student flight tickets",
    "corporate travel management",
    "automated web check-in",
    "WhatsApp boarding pass",
    "international flight tickets",
    "Umang Career Consultancy flight booking",
  ],
};

export default function TravelInsurancePage() {
  return <AirTicketInsuranceContent />;
}
