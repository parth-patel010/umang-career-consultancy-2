import type { Metadata } from "next";
import ContactUsContent from "@/components/ContactUsContent";
import { contactContent, siteContent, type ContactContent, type SiteContent } from "@/content/cmsDefaults";
import { getMergedPageData } from "@/lib/cms/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Us | Head Office Vadodara | Umang Career Consultancy",
  description:
    "Get in touch with Umang Career Consultancy. Visit our Head Office at First Floor 25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP Road, Vadodara, Gujarat 390019, or speak directly with our certified career advisors for Student Visas, Visitor Visas, and Travel Logistics.",
  keywords: [
    "Contact Umang Career Consultancy",
    "Umang Career Vadodara",
    "Overseas Education Consultant Vadodara",
    "Shree Siddeshwar Plaza New VIP Road",
    "Study Abroad Advisors Gujarat",
    "Student Visa Consultant Vadodara",
    "Visitor Visa Vadodara",
    "Canada Visa Consultant Vadodara",
    "Australia Visa Consultant Vadodara",
    "USA Student Visa Vadodara",
  ],
  alternates: {
    canonical: "https://umangcareer.in/contact-us",
  },
};

export default async function ContactUsPage() {
  const content = ((await getMergedPageData("contact")) ?? contactContent) as ContactContent;
  const site = ((await getMergedPageData("site")) ?? siteContent) as SiteContent;
  return <ContactUsContent content={content} site={site} />;
}
