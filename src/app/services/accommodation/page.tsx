import { Metadata } from "next";
import AccommodationContent from "@/components/AccommodationContent";

export const metadata: Metadata = {
  title: "Student Accommodation Assistance | Umang Career Consultancy",
  description:
    "Explore verified student accommodation abroad with Umang Career Consultancy. On-campus dorms, private studios & en-suites (PBSA), and shared apartments in UK, Canada, USA, and Australia.",
  keywords: [
    "student accommodation",
    "study abroad housing",
    "student dorms",
    "PBSA student flats",
    "UK student housing",
    "Canada student apartments",
    "Umang Career Consultancy",
  ],
};

export default function AccommodationPage() {
  return <AccommodationContent />;
}
