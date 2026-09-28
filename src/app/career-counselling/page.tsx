import type { Metadata } from "next";
import CareerCounsellingContent from "@/components/CareerCounsellingContent";

export const metadata: Metadata = {
  title: "Career Counselling | Umang Career Consultancy",
  description:
    "Explore courses, universities, and career pathways abroad with personalized one-to-one career counselling sessions at Umang Career Consultancy.",
};

export default function DirectCareerCounsellingPage() {
  return <CareerCounsellingContent />;
}
