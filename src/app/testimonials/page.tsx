import type { Metadata } from "next";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";

export const metadata: Metadata = {
  title: "Testimonials & Google Reviews | Umang Career Consultancy Vadodara",
  description:
    "Read verified 5.0-star Google reviews from students, parents, and travelers who secured their overseas visas and tours with Umang Career Consultancy in Vadodara.",
  alternates: {
    canonical: "https://umangcareer.in/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GoogleReviewsSection />
    </main>
  );
}
