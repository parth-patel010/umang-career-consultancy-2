import type { Metadata } from "next";
import SuccessStoriesContent from "@/components/SuccessStoriesContent";

export const metadata: Metadata = {
  title: "Success Stories | Umang Career Consultancy Vadodara",
  description:
    "Read real success stories of students and families who achieved their visa approvals with Umang Career Consultancy. France, Australia, UK, Canada and more.",
  keywords: [
    "visa success stories",
    "student visa approved",
    "Umang Career Consultancy reviews",
    "France student visa success",
    "Australia visitor visa approved",
    "visa consultant Vadodara",
  ],
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesContent />;
}
