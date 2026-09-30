import type { Metadata } from "next";
import ContactUsContent from "@/components/ContactUsContent";
import { contactContent, siteContent, type ContactContent, type SiteContent } from "@/content/cmsDefaults";
import { getMergedPageData } from "@/lib/cms/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Us | Meet Career Advisors & Head Office Vadodara | Umang Career Consultancy",
  description:
    "Get in touch with Umang Career Consultancy (DEC Abroad). Visit our Head Office at 301-305 Pinnacle Business Park, Manjalpur, Vadodara or speak directly with our certified career advisors for Canada, UK, Europe, MBBS Abroad, and Test Coaching.",
  keywords: [
    "Contact Umang Career Consultancy",
    "DEC Abroad Vadodara",
    "Overseas Education Consultant Vadodara",
    "Pinnacle Business Park Manjalpur",
    "Study Abroad Advisors Gujarat",
  ],
};

export default async function ContactPage() {
  const content = ((await getMergedPageData("contact")) ?? contactContent) as ContactContent;
  const site = ((await getMergedPageData("site")) ?? siteContent) as SiteContent;
  return <ContactUsContent content={content} site={site} />;
}
