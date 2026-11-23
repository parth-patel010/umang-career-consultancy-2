"use client";

import React from "react";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import type { HomepageContent } from "@/content/cmsDefaults";

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials?: HomepageContent["testimonials"];
}) {
  return <GoogleReviewsSection />;
}
