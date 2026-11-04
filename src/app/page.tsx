import type { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import DestinationCards from "@/components/DestinationCards";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnerUniversities from "@/components/PartnerUniversities";
import WhyChooseUs from "@/components/WhyChooseUs";
import StudentSupportSection from "@/components/StudentSupportSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { homepageContent, type HomepageContent } from "@/content/cmsDefaults";
import { getMergedPageData } from "@/lib/cms/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Best Study Abroad & Student Visa Consultants in Vadodara | Umang Career",
  description:
    "Leading overseas education & visa consultants in Vadodara. Expert counseling for Australia, Canada, USA, UK, Europe, Singapore, Dubai student visas, visitor visas, and flight bookings. Guided directly by Sudip Parikh.",
  alternates: {
    canonical: "https://umangcareer.in",
  },
  openGraph: {
    title: "Best Study Abroad & Student Visa Consultants in Vadodara | Umang Career Consultancy",
    description:
      "Since 2020, guiding thousands toward global universities and overseas visa approvals with 100% transparency. Located on New VIP Road, Vadodara.",
    url: "https://umangcareer.in",
    siteName: "Umang Career Consultancy",
    images: [
      {
        url: "/umang-office-banner-v3.jpg",
        width: 1200,
        height: 630,
        alt: "Umang Career Consultancy Vadodara Office",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default async function Home() {
  const content = ((await getMergedPageData("homepage")) ?? homepageContent) as HomepageContent;

  return (
    <main className="flex-1 min-h-[calc(100vh-80px)] bg-white flex flex-col">
      <HeroSlider hero={content.hero} />
      <DestinationCards destinations={content.destinations} />
      <AboutSection about={content.about} />
      <ServicesSection heading={content.services.heading} items={content.services.items} />
      <PartnerUniversities partners={content.partners} />
      <WhyChooseUs whyChoose={content.whyChoose} />
      <StudentSupportSection support={content.studentSupport} />
      <TestimonialsSection testimonials={content.testimonials} />
    </main>
  );
}
