import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteContent, type SiteContent } from "@/content/cmsDefaults";
import { getMergedPageData } from "@/lib/cms/content";

export const dynamic = "force-dynamic";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umangcareer.in"),
  title: {
    default: "Umang Career Consultancy | Best Study Abroad & Visa Consultants in Vadodara",
    template: "%s | Umang Career Consultancy",
  },
  description:
    "Umang Career Consultancy in Vadodara offers expert guidance for Student Visas (Australia, Canada, USA, UK, Europe, New Zealand, Dubai, Singapore), Visitor Visas, PR Immigration, Flight Ticket Booking with automated check-in, and Bespoke Tours & Travels. Founded in 2020 by Sudip Parikh. 100% honest and transparent guidance.",
  keywords: [
    "Umang Career Consultancy",
    "Umang Career",
    "Study Abroad Consultants Vadodara",
    "Student Visa Consultant Vadodara",
    "Best Visa Consultancy in Vadodara",
    "Australia Student Visa Vadodara",
    "Canada Study Permit Vadodara",
    "USA Student Visa Consultant Vadodara",
    "UK Student Visa Vadodara",
    "New Zealand Student Visa",
    "Europe Schengen Student Visa Vadodara",
    "Singapore Student Pass",
    "Dubai Student Visa Vadodara",
    "Visitor Tourist Visa Consultants Vadodara",
    "Permanent Residency PR Immigration Vadodara",
    "Flight Ticket Booking Vadodara",
    "Tours and Travels Vadodara",
    "Sudip Parikh Umang Career",
    "Umang Career New VIP Road Vadodara",
    "Visa Consultancy Shree Siddeshwar Plaza",
  ],
  authors: [
    { name: "Sudip Parikh", url: "https://umangcareer.in/founder-message" },
    { name: "Umang Career Consultancy", url: "https://umangcareer.in" },
  ],
  creator: "Umang Career Consultancy",
  publisher: "Umang Career Consultancy",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: "https://umangcareer.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://umangcareer.in",
    siteName: "Umang Career Consultancy",
    title: "Umang Career Consultancy | Best Study Abroad & Visa Consultants in Vadodara",
    description:
      "Your trusted partner in navigating global immigration, study visas, and travel. Founded in 2020 by Sudip Parikh. Crystal-clear guidance, zero hidden games.",
    images: [
      {
        url: "/umang-office-banner-v3.jpg",
        width: 1200,
        height: 630,
        alt: "Umang Career Consultancy Head Office - Vadodara, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umang Career Consultancy | Study Abroad & Visa Consultants Vadodara",
    description:
      "Expert overseas education and visa guidance for Australia, Canada, USA, UK, Europe, Singapore, and Dubai. 100% transparent counseling.",
    images: ["/umang-office-banner-v3.jpg"],
    creator: "@umangcareer2022",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Education & Immigration Consulting",
};

// Rich JSON-LD Schemas for Schema.org Structured Data
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness", "TravelAgency"],
      "@id": "https://umangcareer.in/#organization",
      name: "Umang Career Consultancy",
      alternateName: [
        "Umang Career",
        "Umang Career Vadodara",
        "Umang Visa Consultancy",
        "Umang Study Abroad Vadodara",
      ],
      url: "https://umangcareer.in",
      logo: {
        "@type": "ImageObject",
        url: "https://umangcareer.in/logo.png",
        width: 384,
        height: 57,
      },
      image: "https://umangcareer.in/umang-office-banner-v3.jpg",
      description:
        "Umang Career Consultancy is Vadodara's leading overseas education, student visa, visitor visa, flight ticket booking, and bespoke travel consultancy. Founded in 2020 by Sudip Parikh.",
      founder: {
        "@type": "Person",
        name: "Sudip Parikh",
        jobTitle: "Founder & Principal Consultant",
        description:
          "Australia and New Zealand educated overseas education consultant with specialized embassy visa training.",
        url: "https://umangcareer.in/founder-message",
      },
      foundingDate: "2020",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "First Floor 25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP Road",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390019",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.315112,
        longitude: 73.232191,
      },
      hasMap: "https://maps.google.com/?q=22.315112,73.232191",
      telephone: ["+919173186109", "+919712610086"],
      email: [
        "umangcareer2022@gmail.com",
        "umangcareer2026@gmail.com",
        "umangcareer2023@gmail.com",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "19:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Bank Transfer, NEFT, RTGS",
      areaServed: [
        { "@type": "City", name: "Vadodara" },
        { "@type": "City", name: "Ahmedabad" },
        { "@type": "City", name: "Surat" },
        { "@type": "AdministrativeArea", name: "Gujarat" },
        { "@type": "Country", name: "India" },
      ],
      sameAs: [
        "https://www.instagram.com/umangcareer2022/",
        "https://www.instagram.com/umangcareer2022/reel/DfKG-0HINd0/",
        "https://facebook.com",
        "https://youtube.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://umangcareer.in/#website",
      url: "https://umangcareer.in",
      name: "Umang Career Consultancy",
      description: "Premier Study Abroad & Visa Consultancy in Vadodara, Gujarat.",
      publisher: {
        "@id": "https://umangcareer.in/#organization",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const isAdmin = (headerList.get("x-pathname") || "").startsWith("/admin");
  const site = ((await getMergedPageData("site")) ?? siteContent) as SiteContent;

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased overflow-x-hidden`}>
      <head>
        {/* Geographic Local SEO Tags for Vadodara, Gujarat */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Vadodara, Gujarat, India" />
        <meta name="geo.position" content="22.315112;73.232191" />
        <meta name="ICBM" content="22.315112, 73.232191" />
        <meta name="theme-color" content="#0a1e38" />

        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans overflow-x-hidden">
        {isAdmin ? (
          children
        ) : (
          <>
            <Navbar site={site} />
            <div className="flex-1 flex flex-col overflow-x-hidden">{children}</div>
            <Footer site={site} />
          </>
        )}
      </body>
    </html>
  );
}
