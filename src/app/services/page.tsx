import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Our Services | Overseas Education, Visas & Coaching | Umang Career Consultancy",
  description:
    "Explore comprehensive study abroad and immigration services offered by Umang Career Consultancy: Career Counselling, University Selection, Student Visas, SOP Writing, Loan Assistance, Forex, and Pre-Departure.",
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-[#0a1e38]">
      <ServicesSection />
      <WhyChooseUs />
    </main>
  );
}
