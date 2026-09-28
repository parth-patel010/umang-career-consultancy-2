import HeroSlider from "@/components/HeroSlider";
import DestinationCards from "@/components/DestinationCards";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnerUniversities from "@/components/PartnerUniversities";
import WhyChooseUs from "@/components/WhyChooseUs";
import StudentSupportSection from "@/components/StudentSupportSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex-1 min-h-[calc(100vh-80px)] bg-white flex flex-col">
      <HeroSlider />
      <DestinationCards />
      <AboutSection />
      <ServicesSection />
      <PartnerUniversities />
      <WhyChooseUs />
      <StudentSupportSection />
      <TestimonialsSection />
    </main>
  );
}
