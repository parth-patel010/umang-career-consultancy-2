import React from "react";
import type { Metadata } from "next";
import AboutUsContent from "@/components/AboutUsContent";

export const metadata: Metadata = {
  title: "About Us | Umang Career Consultancy - Founded by Sudip Parikh",
  description:
    "Welcome to Umang Career Consultancy. Founded in 2020 by Sudip Parikh, your trusted partner in navigating global immigration, study, and travel visas through honest, professional, and crystal-clear guidance.",
  keywords: [
    "About Umang Career Consultancy",
    "Sudip Parikh",
    "Sudip Parikh Vadodara",
    "Umang Career Consultancy Founded 2020",
    "Crystal-Clear Guidance",
    "Visa Consultant Vadodara",
    "Immigration Consultancy Vadodara",
    "Study Abroad Consultant Vadodara",
    "Transparent Profile Evaluation",
  ],
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
