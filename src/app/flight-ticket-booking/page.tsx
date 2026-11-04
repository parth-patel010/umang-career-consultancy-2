import type { Metadata } from "next";
import AirTicketInsuranceContent from "@/components/AirTicketInsuranceContent";

export const metadata: Metadata = {
  title: "Flight Ticket Booking Services | Seamless Travel Support | Umang Career Consultancy",
  description:
    "Seamless Flight Bookings & End-to-End Travel Support at Umang Career Consultancy. Highly competitive domestic & international airfares, free automated web check-in, WhatsApp boarding passes delivered 2h prior, corporate travel management, and secure payments.",
  keywords: [
    "flight ticket booking",
    "flight ticket booking services",
    "air ticket booking vadodara",
    "student flight tickets",
    "corporate flight booking",
    "automated web check-in",
    "WhatsApp boarding pass",
    "Umang Career Consultancy",
  ],
};

export default function FlightTicketBookingPage() {
  return <AirTicketInsuranceContent />;
}
