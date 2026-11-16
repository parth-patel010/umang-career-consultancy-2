import type { Metadata } from "next";
import SuccessStoriesContent from "@/components/SuccessStoriesContent";

export const metadata: Metadata = {
  title: "Gallery | Success Stories | Umang Career Consultancy Vadodara",
  description:
    "Browse our gallery of success stories — real students and families who achieved their visa approvals with Umang Career Consultancy. France, Australia, UK, Canada and more.",
  keywords: [
    "visa success stories",
    "student visa approved",
    "Umang Career Consultancy gallery",
    "France student visa success",
    "Australia visitor visa approved",
    "visa consultant Vadodara",
  ],
};

export default function GalleryPage() {
  return <SuccessStoriesContent />;
}
