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
