"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------
   SVG ICONS
------------------------------------------------------------- */
function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
    </svg>
  );
}

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${
        isOpen ? "transform rotate-180 text-[#e52928]" : "text-slate-400"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* Season Weather Icons */
function SunIcon() {
  return (
    <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
    </svg>
  );
}

function BlossomIcon() {
  return (
    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a4 4 0 00-4 4c0 2 4 6 4 6s4-4 4-6a4 4 0 00-4-4zM6 12a4 4 0 00-4 4c0 2 6 4 6 4s-4-4-2-8zm12 0a4 4 0 014 4c0 2-6 4-6 4s4-4 2-8zM12 22a4 4 0 004-4c0-2-4-6-4-6s-4 4-4 6a4 4 0 004 4z" />
    </svg>
  );
}

/* UAE Flag Badge */
function UAEFlagBadge() {
  return (
    <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
      <rect width="60" height="14" fill="#00732f" />
      <rect y="14" width="60" height="14" fill="#fff" />
      <rect y="28" width="60" height="14" fill="#000" />
      <rect width="18" height="42" fill="#ff0000" />
    </svg>
  );
}

/* Section Header */
function SectionHeader({
  title,
  subtitle,
  variant = "light",
  inView = true,
}: {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
  inView?: boolean;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`text-center mb-10 sm:mb-14 transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="inline-flex items-center justify-center gap-3.5">
        <div className="flex flex-col gap-1 w-6 sm:w-8">
          <span className="h-[2.5px] w-full bg-[#e52928] rounded-full" />
          <span
            className={`h-[2.5px] w-full ${
              isDark ? "bg-white/80" : "bg-[#0a1e38]"
            } rounded-full`}
          />
        </div>

        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-[#22c55e]" : "text-[#0a1e38]"
          }`}
        >
          {title}
        </h2>

        <div className="flex flex-col gap-1 w-6 sm:w-8">
          <span className="h-[2.5px] w-full bg-[#e52928] rounded-full" />
          <span
            className={`h-[2.5px] w-full ${
              isDark ? "bg-white/80" : "bg-[#0a1e38]"
            } rounded-full`}
          />
        </div>
      </div>
      {subtitle && (
        <p
          className={`mt-2.5 text-base sm:text-lg font-semibold max-w-3xl mx-auto ${
            isDark ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------
   DATA STRUCTURES
------------------------------------------------------------- */
const TOP_COURSES = [
  { name: "Business & Management", category: "Global Enterprise", tag: "Dubai Trade Hub" },
  { name: "Banking & Finance", category: "Fintech & Wealth", tag: "DIFC & ADGM" },
  { name: "Information Technology", category: "Software & Cloud", tag: "Smart City Infra" },
  { name: "Digital Technology", category: "Innovation & Media", tag: "Internet City" },
  { name: "Artificial Intelligence", category: "Machine Learning", tag: "World's 1st AI Ministry" },
  { name: "Hospitality Management", category: "Luxury Tourism", tag: "Global Hotel Capital" },
  { name: "Healthcare Management", category: "Clinical Admin", tag: "Dubai Healthcare City" },
  { name: "Construction Management", category: "Megaprojects & Civil", tag: "Architectural Wonders" },
  { name: "Marketing & Entrepreneurship", category: "Startups & E-Commerce", tag: "Venture Friendly" },
  { name: "Data Science & Analytics", category: "Big Data & BI", tag: "High Earning Potential" },
];

const WHY_UAE = [
  {
    title: "Specialised Education Opportunities",
    desc: "Dedicated international education zones like Dubai International Academic City (DIAC) and Dubai Knowledge Park (DKP) hosting top global university branches.",
  },
  {
    title: "International Student Community",
    desc: "Over 200 nationalities live and study together harmoniously, creating a global, multicultural networking environment.",
  },
  {
    title: "Quality Education in English",
    desc: "All international programs and branch campus degrees are taught 100% in English by renowned international faculty.",
  },
  {
    title: "Globally Recognised Degrees",
    desc: "Degrees awarded by UK, Australian, and Indian branch campuses (Birmingham, Heriot-Watt, BITS Pilani) carry the exact same international recognition as their home campuses.",
  },
  {
    title: "Merit-Based Scholarship Opportunities",
    desc: "Generous academic scholarships ranging from 15% to 50%+ tuition fee discounts based on high school and undergraduate marks.",
  },
  {
    title: "Post-Study Work Opportunities",
    desc: "Thriving corporate job market with zero personal income tax, enabling graduates to quickly launch high-earning international careers.",
  },
  {
    title: "Strong Industry Exposure",
    desc: "Proximity to Fortune 500 regional headquarters, leading multinational banks, technology giants, and global logistics leaders.",
  },
  {
    title: "Build Professional Networks",
    desc: "Unmatched global networking with corporate leaders, entrepreneurs, and innovators at worldwide expos and trade summits.",
  },
  {
    title: "UAE Residence & Golden Visa Options",
    desc: "Outstanding university graduates with high academic distinction (GPA 3.8+) can qualify for the prestigious 10-Year UAE Golden Visa.",
  },
];

const EMIRATES = [
  {
    id: "dubai",
    name: "DUBAI",
    title: "Dubai Emirate",
    desc: "Explore universities and study options in Dubai. The global business, tourism, and tech capital. Home to Dubai International Academic City (DIAC), Middlesex University, University of Birmingham, and Heriot-Watt.",
    tag: "Global Business Capital",
  },
  {
    id: "abu-dhabi",
    name: "ABU DHABI",
    title: "Abu Dhabi Emirate",
    desc: "Explore study opportunities in Abu Dhabi. The federal capital and cultural powerhouse of the UAE. Home to NYU Abu Dhabi, Sorbonne University Abu Dhabi, and Khalifa University.",
    tag: "Federal & Energy Capital",
  },
  {
    id: "sharjah",
    name: "SHARJAH",
    title: "Sharjah Emirate",
    desc: "Explore study opportunities in Sharjah. The cultural and educational capital of the Arab world. Renowned for the expansive University City of Sharjah and American University of Sharjah (AUS).",
    tag: "Cultural & University City",
  },
  {
    id: "ras-al-khaimah",
    name: "RAS AL KHAIMAH",
    title: "Ras Al Khaimah (RAK)",
    desc: "Explore universities and study options in Ras Al Khaimah. Rapidly developing northern emirate offering cost-effective higher education, American University of RAK (AURAK), and University of Stirling.",
    tag: "Scenic & Cost-Effective",
  },
];

const UNIVERSITIES = [
  {
    name: "University of Birmingham Dubai",
    location: "Dubai International Academic City",
    type: "UK Russell Group Campus",
    tag: "World Top 100 University",
    features: "The first global top 100 university to open a campus in Dubai, offering identical UK degrees in computer science, business, mechanical engineering, and AI.",
  },
  {
    name: "Heriot-Watt University Dubai",
    location: "Dubai Knowledge Park",
    type: "UK Research Flagship",
    tag: "Pioneering British Campus",
    features: "Scotland's historic university with a cutting-edge Dubai campus, acclaimed for civil engineering, petroleum engineering, robotics, and business.",
  },
  {
    name: "Middlesex University Dubai",
    location: "Dubai Knowledge Park",
    type: "British University Campus",
    tag: "Diverse Degree Spectrum",
    features: "First overseas campus of Middlesex University London, offering 70+ undergraduate and postgraduate programs in law, media, business, and tech.",
  },
  {
    name: "De Montfort University Dubai",
    location: "Dubai International Academic City",
    type: "Innovative UK University",
    tag: "Creative Arts & Technology",
    features: "Award-winning British institution known for architecture, cyber security, international business, and high graduate employability.",
  },
  {
    name: "BITS Pilani Dubai Campus",
    location: "Dubai International Academic City",
    type: "Premier Indian Institute",
    tag: "Top Engineering Excellence",
    features: "Renowned Indian premier engineering institution in Dubai, famous for mechanical, electrical, computer science, and biotechnology degrees.",
  },
  {
    name: "Manipal University Dubai",
    location: "Dubai International Academic City",
    type: "Multi-Disciplinary University",
    tag: "Allied Health, Tech & Media",
    features: "Established academic giant offering specialized degrees in engineering, media and communication, interior design, and biotechnology.",
  },
  {
    name: "Amity University Dubai",
    location: "Dubai International Academic City",
    type: "International Research University",
    tag: "Aerospace, Forensic & Business",
    features: "Huge 700,000 sq ft modern campus offering aerospace engineering, forensic science, fashion design, and business management.",
  },
  {
    name: "Hult International Business School – Dubai",
    location: "Dubai Internet City",
    type: "Triple-Accredited Business School",
    tag: "Global MBA & Entrepreneurship",
    features: "One of the world's most international business schools with campuses in Boston, London, and Dubai, rotating MBA students globally.",
  },
  {
    name: "Global Business Studies (GBS Dubai)",
    location: "Dubai Knowledge Park",
    type: "Higher Education Specialist",
    tag: "Applied Business & Tech",
    features: "Fast-track, industry-focused undergraduate and postgraduate diplomas in entrepreneurship, computing, and financial services.",
  },
  {
    name: "Britts Imperial University College",
    location: "Sharjah / Dubai",
    type: "International Academic Center",
    tag: "Affordable Global Degrees",
    features: "Partnering with top European universities to deliver flexible bachelor's, master's, and doctorates in business and digital technology.",
  },
];

const LIVING_COSTS = [
  { item: "Accommodation (Student Residence / Shared Flat)", range: "AED 1,500 – AED 3,500", inr: "₹34,000 – ₹79,000" },
  { item: "Food & Daily Groceries", range: "AED 800 – AED 1,200", inr: "₹18,000 – ₹27,000" },
  { item: "Transportation (Dubai Metro & Bus Card)", range: "AED 200 – AED 400", inr: "₹4,500 – ₹9,000" },
  { item: "Internet & Mobile Connectivity", range: "AED 150 – AED 300", inr: "₹3,400 – ₹6,800" },
  { item: "Utilities (Air-Conditioning, Water, Electricity)", range: "AED 200 – AED 400", inr: "₹4,500 – ₹9,000" },
  { item: "Personal / Leisure & Social Activities", range: "AED 300 – AED 700", inr: "₹6,800 – ₹15,800" },
];

const SEASONS = [
  {
    name: "Summer",
    months: "June – August",
    temp: "35℃ – 45℃",
    icon: <SunIcon />,
    desc: "Warm desert sunshine. Life moves seamlessly indoors into world-famous air-conditioned campuses, modern malls, and indoor sports complexes.",
  },
  {
    name: "Autumn",
    months: "September – November",
    temp: "28℃ – 36℃",
    icon: <LeafIcon />,
    desc: "Gradual cooling temperatures, pleasant evenings, beginning of the major academic intake, and buzzing outdoor beach clubs.",
  },
  {
    name: "Winter",
    months: "December – February",
    temp: "18℃ – 24℃",
    icon: <SnowflakeIcon />,
    desc: "Peak outdoor season! Spectacular sunny mild days, outdoor festivals, desert safaris, concerts, and vibrant open-air markets.",
  },
  {
    name: "Spring",
    months: "March – May",
    temp: "24℃ – 35℃",
    icon: <BlossomIcon />,
    desc: "Warm breezy weather, ideal beach conditions, water sports, and graduation commencement ceremonies.",
  },
];

const ACADEMIC_SYSTEM = [
  {
    step: "01",
    title: "Student Visa Sponsorship by University",
    desc: "In the UAE, international student visas are directly sponsored and processed by your admitting university, ensuring rapid issuance without bureaucratic delays.",
  },
  {
    step: "02",
    title: "Zero Personal Income Tax",
    desc: "Graduates working in the UAE keep 100% of their earnings. No federal personal income tax, capital gains tax, or salary withholding.",
  },
  {
    step: "03",
    title: "10-Year UAE Golden Visa",
    desc: "High-achieving university graduates with a cumulative GPA of 3.8 or higher can qualify for the self-sponsored 10-year Golden Visa.",
  },
  {
    step: "04",
    title: "Green Visa & Freelance Visas",
    desc: "5-year self-sponsored Green Visas available for skilled professionals, freelancers, and entrepreneurs launching ventures in Dubai and Abu Dhabi.",
  },
  {
    step: "05",
    title: "Emirates ID & Health Insurance",
    desc: "Every student receives an official Emirates ID card and mandatory medical insurance coverage across private clinics and hospitals.",
  },
  {
    step: "06",
    title: "Only 3.5 Hours Flight from India",
    desc: "Direct flights operate daily from over 20 Indian cities to Dubai, Abu Dhabi, and Sharjah with minimal time difference (1.5 hours behind IST).",
  },
];

const FAQS = [
  {
    q: "What is the medium of instruction of international programs?",
    a: "Many international programs at UAE universities are taught in English. The exact language requirements depend on the institution and program. Private universities and foreign branch campuses deliver all lectures, course materials, examinations, and laboratory work entirely in English.",
  },
  {
    q: "What are the intakes for UAE universities?",
    a: "Intakes vary by university and program. Common intake periods include September (the primary academic intake) and January/February, with some institutions offering additional intakes in March, April, or October for executive and postgraduate diplomas.",
  },
  {
    q: "Can I stay in the UAE after graduation?",
    a: "Post-study residence options depend on your employment, visa category, qualification and eligibility under the applicable UAE regulations. Graduates who secure employment transition directly to an employer-sponsored residence visa. Outstanding graduates with a GPA of 3.8+ can apply for the 10-Year Golden Visa, while others can explore 5-Year Green Visas or Jobseeker Visas.",
  },
  {
    q: "What are the cultural and religious norms international students should be aware of?",
    a: "Students should respect UAE laws, local customs and cultural and religious practices. Rules concerning public behaviour, dress and conduct should be understood before travelling. While Dubai and the UAE are cosmopolitan and welcoming to international visitors, modest attire in official government buildings and respectful conduct during holy periods like Ramadan are expected.",
  },
  {
    q: "Can I sponsor my spouse while I am studying in the UAE?",
    a: "Whether a student can sponsor family members depends on the applicable residence rules, visa type and eligibility requirements. Typically, students who hold valid residence permits and meet specified minimum monthly financial and accommodation thresholds can apply to sponsor their legally married spouse and dependent children.",
  },
  {
    q: "Does the UAE offer Permanent Residency (PR)?",
    a: "The UAE does not generally operate a conventional permanent-residency pathway like some immigration destinations. Certain long-term residence options may be available to eligible individuals under applicable UAE programs, such as the 10-Year Golden Visa and 5-Year Green Visa, which can be renewed indefinitely as long as qualifying criteria continue to be met.",
  },
  {
    q: "How does the student visa application work in the UAE?",
    a: "Unlike western destinations where students apply independently at foreign embassies, in the UAE your university acts as your official visa sponsor. The university submits your application to the General Directorate of Residency and Foreigners Affairs (GDRFA) or Federal Authority for Identity and Citizenship (ICP), making the process straightforward and high-success.",
  },
  {
    q: "What are the advantages of studying in the UAE for Indian students?",
    a: "The UAE is only 3.5 hours by flight from India, shares a massive Indian cultural and business diaspora, offers completely tax-free earnings, and allows you to graduate with prestigious UK, Australian, or Indian degrees (like University of Birmingham or BITS Pilani) at substantial cost savings.",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function UAEStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    degree: "Master's / PG",
    intake: "September 2026",
    notes: "",
  });

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Global Embedded Animations matching Services Theme */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gentleFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            .anim-gentle-float {
              animation: gentleFloat 4s ease-in-out infinite;
            }
            @keyframes phoneRing {
              0%, 100% { transform: rotate(0deg); }
              20% { transform: rotate(15deg); }
              40% { transform: rotate(-15deg); }
              60% { transform: rotate(10deg); }
              80% { transform: rotate(-10deg); }
            }
            .anim-phone-ring:hover svg {
              animation: phoneRing 0.8s ease-in-out;
            }
          `,
        }}
      />

      {/* =========================================================
          HERO SECTION
         ========================================================= */}
      <section className="relative w-full pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#e52928] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/study-abroad" className="hover:text-[#e52928] transition-colors">
              Study Abroad
            </Link>
            <span>/</span>
            <span className="text-[#0a1e38] font-bold">United Arab Emirates</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <div
              className={`lg:col-span-7 text-center lg:text-left transition-all duration-700 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-200 shadow-sm mb-6">
                <UAEFlagBadge />
                <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-wide uppercase">
                  Global Business, Innovation & Education Hub
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Study in <span className="text-[#e52928]">UAE</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
                  Build Your Global Career at World-Class Campuses
                </span>
              </h1>

              {/* Sub-tagline */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Located at the crossroads of Europe, Asia, and Africa, the United Arab Emirates offers international students world-class branch campuses, zero personal income tax, smart digital cities, and unparalleled career networking in Dubai and Abu Dhabi.
              </p>

              {/* Bullet Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-left max-w-md mx-auto lg:mx-0 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Zero Personal Income Tax</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>UK, Australian & Indian Campuses</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>10-Year Golden Visa for High Achievers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Only 3.5 Hours Flight from India</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Free UAE Counselling</span>
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md transition-all duration-300"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Hero Graphic Column */}
            <div
              className={`lg:col-span-5 flex justify-center items-center relative transition-all duration-1000 delay-200 ease-out transform ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-[320px] sm:w-[420px] md:w-[460px] aspect-square flex items-center justify-center anim-gentle-float">
                {/* Glowing Outer Rings */}
                <div className="absolute inset-0 rounded-full border border-red-200/60 animate-ping [animation-duration:4s] pointer-events-none" />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-sky-300/80 animate-spin [animation-duration:60s] pointer-events-none" />

                {/* Central High Quality Graphic */}
                <div className="relative w-full h-full p-4 flex items-center justify-center transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/uae-hero.png"
                    alt="Study in UAE Student - Umang Career Consultancy"
                    width={480}
                    height={480}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    priority
                  />
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3.5s]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg">
                    0%
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Income Tax</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">Keep 100% Earnings</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:4.2s]">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-xs tracking-wider">UAE</div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Golden Visa</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">10-Year Residency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT UAE (Matching User Reference)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About UAE"
            subtitle="A futuristic federation uniting seven emirates into a global nexus of commerce, technology, and architectural marvels."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Landmark Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              <Image
                src="/destinations/united-arab-emirates.jpg"
                alt="Burj Khalifa and Dubai Skyline UAE"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#e52928] text-white">
                  Burj Khalifa & Downtown Dubai
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2">The Future is Here</h3>
              </div>
            </div>

            {/* Key Fact Badges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Crossroads of Europe, Asia & Africa</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Strategic global gateway connecting one-third of the world’s population within a 4-hour flight.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Major Business & Education Hub</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Hosts international academic zones (DIAC, DKP) alongside DIFC and ADGM financial districts.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Innovation & Entrepreneurship Hub</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  World leader in AI strategy, fintech sandboxes, blockchain, and tech venture capital.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Smart Cities & Sustainability</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Pioneering zero-carbon smart initiatives (Masdar City) and COP28 net-zero sustainability frameworks.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Modern Infrastructure</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Driverless Dubai Metro, world-leading Dubai International Airport, and ultra-fast 5G connectivity.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="2" /><path strokeWidth="1.6" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Diverse & Multicultural Environment</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Harmonious cosmopolitan community representing over 200 nationalities with zero intolerance.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Strong Economy & Employment</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Booming corporate recruitment in aviation, luxury hospitality, tech, and banking with zero tax.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth={2} /><path strokeWidth={2} strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Warm and Sunny Climate</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Sunny skies year-round with pleasant winter outdoor seasons (18℃–24℃) and air-conditioned campuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOP COURSES IN UAE (10 Courses)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Courses in UAE"
            subtitle="Career-focused degree programs aligned directly with the UAE's knowledge-based economic expansion."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {TOP_COURSES.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-lg hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-[#e52928] border border-red-100">
                    {course.category}
                  </span>
                  <h3 className="text-base font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors mt-3">
                    {course.name}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#e52928]">
                  <span>{course.tag}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-10 bg-gradient-to-r from-[#0a1e38] to-[#122e54] p-8 rounded-3xl shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-red-500/20 text-[#e52928] text-xs font-bold border border-red-500/30">
                UK & Australian Degrees in Dubai
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-2">Study in Dubai at World-Famous Universities</h3>
              <p className="mt-1 text-sm text-slate-300 max-w-xl">
                Graduate with degrees from University of Birmingham, Heriot-Watt, or Middlesex University without high UK living expenses or visa rejections.
              </p>
            </div>
            <a
              href="#counselling-form"
              className="whitespace-nowrap py-3.5 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              Get University Shortlist
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY IS THE UAE AN IDEAL DESTINATION? (9 Pillars)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why is the UAE an Ideal Study Abroad Destination?"
            subtitle="Discover the unparalleled academic, lifestyle, and career incentives of studying in the UAE."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_UAE.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#0a1e38] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#e52928] font-black text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0a1e38] mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          GOLDEN VISA & RESIDENCE SPOTLIGHT
         ========================================================= */}
      <section className="w-full py-12 sm:py-16 bg-[#0a1e38] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-[#22c55e] border border-emerald-500/30">
                UAE Federal Residence Incentive
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3 text-white">
                10-Year Golden Visa & Zero Personal Income Tax
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                The UAE rewards academic excellence: university graduates with a GPA of 3.8+ from recognized UAE universities can apply for the 10-Year Golden Visa for themselves and their families. All corporate and professional salaries in the UAE are 100% tax-free!
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#22c55e]">10 Years</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Self-Sponsored Golden Visa</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#e52928]">0%</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Personal Income Tax on Salaries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMIRATES IN UAE (4 Key Emirates)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Emirates in UAE"
            subtitle="Explore study opportunities and university hubs across the Emirates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EMIRATES.map((em) => (
              <div
                key={em.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-200">
                      {em.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1e38]">{em.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{em.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a1e38]">
                  <span>{em.tag}</span>
                  <span className="text-[#e52928]">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          UNIVERSITIES IN UAE (10 Institutions)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Universities in UAE"
            subtitle="Prestigious international branch campuses and accredited academic centers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UNIVERSITIES.map((uni, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#0a1e38] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800">
                      {uni.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38]">{uni.name}</h3>
                  <div className="text-xs font-bold text-[#e52928] mt-1 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                    <span>{uni.location}</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{uni.features}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-slate-700">
                  <span>Specialty: {uni.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TUITION FEES & LIVING COSTS TABLES
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="UAE Tuition Fees & Cost of Living"
            subtitle="Transparent financial planning in UAE Dirhams (AED) and Indian Rupees (INR)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tuition Fees Table */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#0a1e38]">UAE Tuition Fees</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Annual indicative tuition rates across academic levels
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-200">
                  Multiple Intakes
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200 text-[#0a1e38]">
                      <th className="py-3 px-3 font-extrabold">Courses</th>
                      <th className="py-3 px-3 font-extrabold">Minimum Annual</th>
                      <th className="py-3 px-3 font-extrabold">Maximum Annual</th>
                      <th className="py-3 px-3 font-extrabold text-[#22c55e]">Approx. INR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Bachelor Degree</td>
                      <td className="py-3.5 px-3 font-semibold">AED 15,000</td>
                      <td className="py-3.5 px-3 font-semibold">AED 70,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹3.4L – ₹15.8L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Master Degree</td>
                      <td className="py-3.5 px-3 font-semibold">AED 35,000</td>
                      <td className="py-3.5 px-3 font-semibold">AED 130,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹7.9L – ₹29.3L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Diploma Programs</td>
                      <td className="py-3.5 px-3 font-semibold">AED 15,000</td>
                      <td className="py-3.5 px-3 font-semibold">AED 80,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹3.4L – ₹18.0L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Ph.D. Programs</td>
                      <td className="py-3.5 px-3 font-semibold">AED 80,000</td>
                      <td className="py-3.5 px-3 font-semibold">AED 500,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹18.0L – ₹1.12 Cr*</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-[#0a1e38]">Intakes:</span> January, February, March, April, September, October.
                <br />
                <span className="italic text-slate-500">
                  *Note: Tuition fees and intakes vary depending on the institution and program.
                </span>
              </div>
            </div>

            {/* Monthly Cost of Living Table */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-[#0a1e38]">Monthly Cost of Living</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    In Dirhams (AED)
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Typical monthly student expenditure in the UAE
                </p>

                <div className="space-y-3">
                  {LIVING_COSTS.map((c, i) => (
                    <div key={i} className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">{c.item}</span>
                      <div className="text-right">
                        <span className="font-bold text-[#0a1e38]">{c.range}</span>
                        <span className="text-xs text-slate-400 block">({c.inr})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between text-sm font-extrabold text-[#0a1e38]">
                  <span>Total Estimated Monthly:</span>
                  <span className="text-[#22c55e] text-base font-black">AED 3,150 – 6,500</span>
                </div>
                <div className="text-xs text-slate-500 text-right mt-0.5">Approx. ₹71,000 – ₹1,47,000 / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEATHER IN UAE
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Weather in UAE"
            subtitle="Warm, sunny desert climate with mild outdoor winter months."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEASONS.map((season, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white shadow-sm">{season.icon}</div>
                    <span className="text-lg font-black text-[#0a1e38]">{season.temp}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#0a1e38]">{season.name}</h3>
                  <div className="text-xs font-semibold text-[#e52928] mt-0.5">{season.months}</div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{season.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          UAE ACADEMIC & VISA SYSTEM (6 Cards)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The UAE Academic & Visa System"
            subtitle="Key essentials on university visa sponsorship, Emirates ID, and Golden Visa eligibility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMIC_SYSTEM.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e52928] font-black text-sm flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38]">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP-BY-STEP ADMISSION & VISA ROADMAP
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Step-by-Step UAE Admission & Visa Process"
            subtitle="From university shortlisting to Emirates ID issuance — Umang Career Consultancy guides you at every stage."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Profile Assessment & University Shortlist",
                desc: "Evaluating transcripts, career goals, and matching with accredited branch campuses in Dubai, Abu Dhabi, or Sharjah.",
              },
              {
                step: "02",
                title: "Dossier Submission & Offer Letter",
                desc: "Submitting verified academic transcripts, passport copy, and securing your official unconditional Letter of Admission.",
              },
              {
                step: "03",
                title: "Tuition Deposit & Visa Sponsorship",
                desc: "Paying the initial university seat deposit to initiate institutional student visa sponsorship through GDRFA / ICP.",
              },
              {
                step: "04",
                title: "Entry Permit Issuance (Pink Visa)",
                desc: "Receiving your electronic Student Entry Permit allowing you to board your flight and enter the UAE.",
              },
              {
                step: "05",
                title: "Medical Fitness & Emirates ID Biometrics",
                desc: "Completing mandatory health screening (blood test & chest X-ray) and fingerprint biometrics at a Federal Authority center.",
              },
              {
                step: "06",
                title: "Residency Visa Stamping & Card Collection",
                desc: "Final residence visa endorsement on your passport and receiving your physical digital Emirates ID card.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#22c55e] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0a1e38] text-white font-black text-sm flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38]">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQS SECTION (Matching User Reference + Practical Advice)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Verified answers to vital questions regarding studying and living in the UAE."
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-[#0a1e38] hover:text-[#e52928] transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDownIcon isOpen={openFaq === idx} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FREE COUNSELLING FORM & HASSLE-FREE CTA
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0a1e38] to-[#142d4f] rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 text-white border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-red-500/20 text-[#e52928] border border-red-500/30">
                  Plan Your UAE Study Journey
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  To Make Your Study in UAE <span className="text-[#e52928]">Hassle-Free</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Plan your UAE study journey with Umang Career Consultancy. From securing offer letters at University of Birmingham Dubai, Heriot-Watt, and Middlesex to university visa sponsorship and Emirates ID registration, our expert Middle East advisors make your education dream effortless.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg transition-colors"
                  >
                    <PhoneIcon />
                    <span>Call +91 91731 86109</span>
                  </a>
                  <div className="text-xs text-slate-400 font-medium">
                    Office Hours: Mon–Sat, 9:30 AM – 7:00 PM IST
                  </div>
                </div>
              </div>

              {/* Right Column Form */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-xl border border-slate-100">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                    <h3 className="text-2xl font-black text-[#0a1e38]">Thank You!</h3>
                    <p className="text-sm text-slate-600 mt-2">
                      Your inquiry for studying in the UAE has been received. Our senior Middle East education advisor will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 inline-flex text-xs font-bold text-[#e52928] hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-[#0a1e38] text-center lg:text-left">
                      Book Free UAE Counselling
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Aman Khurana"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#e52928]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#e52928]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="aman@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#e52928]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Intended Degree</label>
                        <select
                          value={formData.degree}
                          onChange={(e) => setFormData((prev) => ({ ...prev, degree: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#e52928]"
                        >
                          <option value="Bachelor's / UG">Bachelor&apos;s Degree / UG</option>
                          <option value="Master's / PG">Master&apos;s Degree / PG</option>
                          <option value="Diploma">Diploma Program</option>
                          <option value="Ph.D.">Ph.D. / Research</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Target Intake</label>
                        <select
                          value={formData.intake}
                          onChange={(e) => setFormData((prev) => ({ ...prev, intake: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#e52928]"
                        >
                          <option value="September 2026">September 2026 Intake</option>
                          <option value="January 2027">January 2027 Intake</option>
                          <option value="March/April 2027">March / April 2027 Intake</option>
                          <option value="September 2027">September 2027 Intake</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred University or Major?</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder="e.g. Interested in Computer Science or Business at Birmingham Dubai or Heriot-Watt"
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#e52928]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-red-500/25 transition-all duration-300"
                    >
                      Book Free Profile Evaluation
                    </button>
                    <p className="text-center text-[11px] text-slate-400">
                      <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Official UAE partner university counseling.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
