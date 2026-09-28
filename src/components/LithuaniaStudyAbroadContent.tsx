"use client";

import React, { useState } from "react";
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

/* Lithuanian Flag Badge (Yellow, Green, Red) */
function LithuaniaFlagBadge() {
  return (
    <svg className="w-10 h-7 rounded shadow-md border border-white/60 flex-shrink-0" viewBox="0 0 60 42">
      <rect width="60" height="14" fill="#fdb913" />
      <rect y="14" width="60" height="14" fill="#006a44" />
      <rect y="28" width="60" height="14" fill="#c1272d" />
    </svg>
  );
}

/* Section Header */

function LithuaniaCardIcon({ type }: { type: string }) {
  switch (type) {
    case "location":
      return <svg className="w-6 h-6 text-[#006a44]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>;
    case "eu":
      return <span className="font-black text-xs text-[#006a44] tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">EU</span>;
    case "laser":
    case "tech":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case "fintech":
    case "career":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
    case "sustainability":
    case "nature":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
    case "digital":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    case "living":
    case "scholarship":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
    case "affordable":
    case "tuition":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case "english":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
    case "climate":
      return <svg className="w-6 h-6 text-[#006a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m10-10H2m17.07-7.07L4.93 19.07m0-14.14l14.14 14.14" /></svg>;
    case "degree":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;
    case "science":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    case "globe":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.8} /><path strokeWidth={1.6} d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>;
    case "work":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    case "society":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    case "safety":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    default:
      return <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.8} /></svg>;
  }
}

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
  {
    name: "Business Studies",
    category: "Commerce, Fintech & Entrepreneurship",
    tag: "Fintech Leader in EU",
    desc: "Study international business, fintech enterprise, venture management, supply chain operations, and e-commerce across top Baltic universities.",
  },
  {
    name: "Healthcare",
    category: "Medicine, Dentistry & Public Health",
    tag: "LSMU Global Medical Hub",
    desc: "Internationally renowned 6-year General Medicine (MBBS) and 5-year Dentistry programs at Lithuanian University of Health Sciences, fully WHO and NMC recognized.",
  },
  {
    name: "Tourism & Hospitality",
    category: "Hospitality, Events & Sustainable Tourism",
    tag: "Baltic Coastal & Eco-Resorts",
    desc: "Hospitality operations, eco-tourism development, leisure event design, and international travel management along the Curonian Spit and historic Vilnius.",
  },
  {
    name: "Management Studies",
    category: "Corporate, Logistics & Strategic Governance",
    tag: "European Supply Chain",
    desc: "Strategic leadership, project management, international trade compliance, human resources, and organizational governance tailored to modern enterprise.",
  },
  {
    name: "Technology Studies",
    category: "Laser Science, Photonics, IT & AI",
    tag: "World's #1 Scientific Lasers",
    desc: "Lithuania produces over 10% of the world's scientific lasers. Study photonics, cybersecurity, robotics, software engineering, and AI at VILNIUS TECH & KTU.",
  },
];

const WHY_LITHUANIA = [
  {
    title: "Globally Recognised Degrees",
    desc: "Lithuanian university degrees strictly comply with the European Higher Education Area (EHEA) Bologna Process, ensuring seamless recognition across Europe, the US, and India.",
    icon: "degree",
  },
  {
    title: "Strong STEM & Business Programs",
    desc: "Global leader in laser technology, photonics, cybersecurity, and Europe's second-largest fintech ecosystem with dedicated digital sandbox environments.",
    icon: "science",
  },
  {
    title: "Competitive Tuition Fees",
    desc: "European-standard education starting from only €2,200 to €2,500 per year, making it one of the most cost-effective study destinations in the European Union.",
    icon: "tuition",
  },
  {
    title: "International Student Environment",
    desc: "More than 9,000 international students from over 100 countries create an open, dynamic, multilingual student culture across Vilnius and Kaunas campuses.",
    icon: "globe",
  },
  {
    title: "Work Opportunities (Up to 40 Hrs/Wk)",
    desc: "Full-time international degree students are permitted to work up to 40 hours per week during their studies, subject to applicable student residence conditions.",
    icon: "work",
  },
  {
    title: "Post-Study Opportunities",
    desc: "Graduates are eligible to receive a 12-month Temporary Residence Permit (TRP) extension specifically to search for employment or launch a business startup in Lithuania.",
    icon: "career",
  },
  {
    title: "Scholarship Opportunities",
    desc: "State scholarships from the Education Exchanges Support Foundation (SMPF) and university merit-based fee waivers awarded to talented international applicants.",
    icon: "scholarship",
  },
  {
    title: "Multicultural & Inclusive Society",
    desc: "A warm, welcoming, and progressive society that celebrates global talent with over 85% of young professionals speaking fluent English.",
    icon: "society",
  },
  {
    title: "Safe & Modern Living Environment",
    desc: "Consistently ranked among the safest countries in Europe with peaceful streets, low crime rates, pristine cleanliness, and responsive public governance.",
    icon: "safety",
  },
  {
    title: "Outdoor-Oriented Lifestyle",
    desc: "Over 33% of Lithuania is covered by lush green pine forests, alongside thousands of tranquil freshwater lakes and the UNESCO-listed Curonian Spit dunes.",
    icon: "nature",
  },
  {
    title: "Technology-Focused Campuses",
    desc: "Equipped with state-of-the-art research laboratories, high-speed public fibre/5G internet, digital incubators, and modern student recreational centers.",
    icon: "tech",
  },
];

const ABOUT_CARDS = [
  {
    title: "Located in Northern Europe",
    desc: "The largest and southernmost of the three Baltic states, bordered by Latvia, Poland, and the scenic Baltic Sea coast.",
    badge: "Baltic Hub",
    icon: "location",
  },
  {
    title: "Member of the European Union",
    desc: "Full member of the EU, Eurozone (€), NATO, OECD, and the Schengen Area, providing border-free travel across 29 European nations.",
    badge: "EU & Schengen",
    icon: "eu",
  },
  {
    title: "Strong in Laser Science & Tech",
    desc: "World champion in scientific lasers, supplying CERN, NASA, and 90 of the world's top 100 universities with ultra-precise laser systems.",
    badge: "World Laser Power",
    icon: "tech",
  },
  {
    title: "Strong in: Fintech, Biotech & IT",
    desc: "Ranked #1 in the EU for licensed fintech institutions, alongside a booming life sciences sector growing at double-digit annual rates.",
    badge: "Fintech & Biotech",
    icon: "fintech",
  },
  {
    title: "Strong Focus on Sustainability",
    desc: "Pioneer in circular economy, renewable wind energy, smart grid innovations, and clean municipal transport across Baltic cities.",
    badge: "Green Innovation",
    icon: "sustainability",
  },
  {
    title: "Excellent Digital Infrastructure",
    desc: "Ranked among the fastest public Wi-Fi networks in the world, with 100% digital public services and widespread 5G coverage.",
    badge: "Digital Pioneer",
    icon: "digital",
  },
  {
    title: "High Standard of Living",
    desc: "A prosperous European nation offering pristine air quality, unpolluted water, rich cultural festivals, and modern infrastructure.",
    badge: "High Standard",
    icon: "living",
  },
  {
    title: "Safe & Affordable Living Options",
    desc: "Monthly living costs starting from just €400 to €700 per month, with student dormitory rooms available from €100/month.",
    badge: "Highly Affordable",
    icon: "affordable",
  },
  {
    title: "English is Widely Spoken",
    desc: "Over 85% of young Lithuanians speak fluent English, making university studies, daily shopping, and social networking seamless.",
    badge: "English Friendly",
    icon: "english",
  },
  {
    title: "Cold Snowy Winters & Warm Summers",
    desc: "Experience idyllic snowy European winters (-5°C to 0°C) and sun-drenched, lake-swimming summers (16°C to 25°C).",
    badge: "Balanced Seasons",
    icon: "climate",
  },
];

const UNIVERSITIES = [
  {
    name: "Vilnius University (VU)",
    location: "Vilnius (Old Town)",
    est: "Est. 1579 (One of Europe's Oldest)",
    speciality: "Medicine, International Business, Physics, AI, Law & Social Sciences",
    tag: "QS World Top 400 • Flagship University",
  },
  {
    name: "Vilnius Gediminas Technical University (VILNIUS TECH)",
    location: "Vilnius (Saulėtekis Tech Valley)",
    est: "Premier Engineering & Technology Leader",
    speciality: "Laser Tech, Civil Engineering, Computer Science, Architecture & Robotics",
    tag: "Top Baltic Engineering University",
  },
  {
    name: "Kaunas University of Technology (KTU)",
    location: "Kaunas (Santaka Valley)",
    est: "Innovation & Technology Powerhouse",
    speciality: "Informatics, Biomedical Engineering, Materials Science & Industrial Tech",
    tag: "High Graduate Employability",
  },
  {
    name: "Lithuanian University of Health Sciences (LSMU)",
    location: "Kaunas",
    est: "Largest Medical University in the Baltics",
    speciality: "6-Year General Medicine (MD), 5-Year Dentistry (DMD), Pharmacy & Veterinary",
    tag: "WHO, NMC & ECFMG Approved",
  },
  {
    name: "Vytautas Magnus University (VMU)",
    location: "Kaunas & Vilnius",
    est: "Comprehensive Liberal Arts Institution",
    speciality: "International Politics, Economics, Computer Informatics & Media Arts",
    tag: "Flexible Dual Degree Programs",
  },
  {
    name: "Mykolas Romeris University (MRU)",
    location: "Vilnius",
    est: "Social Sciences & Cybersecurity Leader",
    speciality: "Cybersecurity Management, European Law, Psychology & Public Governance",
    tag: "Strong International Partnerships",
  },
  {
    name: "Klaipėda University (KU)",
    location: "Klaipėda (Baltic Coast)",
    est: "Maritime & Coastal Research Hub",
    speciality: "Marine Engineering, Port Logistics, Marine Biotechnology & Nursing",
    tag: "Coastal Campus Experience",
  },
  {
    name: "LCC International University",
    location: "Klaipėda",
    est: "North American Liberal Arts Style",
    speciality: "International Business, Communication, Psychology & English Studies",
    tag: "100% US-Style English Campus",
  },
];

const TUITION_TABLE = [
  {
    course: "Bachelor's Degree",
    minAnnual: "€2,500",
    maxAnnual: "€8,000",
    inrRange: "₹2.25 Lakh – ₹7.2 Lakh / year",
    notes: "3 to 4 years. Highly subsidized public universities. Business, IT, Humanities, and Engineering disciplines.",
  },
  {
    course: "Master's Degree (MSc / MA / MBA)",
    minAnnual: "€2,200",
    maxAnnual: "€9,000",
    inrRange: "₹1.98 Lakh – ₹8.1 Lakh / year",
    notes: "1.5 to 2 years. Includes advanced fintech, data science, European law, management, and technology programs.",
  },
  {
    course: "Diploma & Vocational Studies",
    minAnnual: "€1,400",
    maxAnnual: "€35,000",
    inrRange: "₹1.26 Lakh – ₹31.5 Lakh / year",
    notes: "1 to 3 years professional diplomas and specialized flight training / advanced clinical diplomas.",
  },
  {
    course: "Ph.D. / Doctoral Programs",
    minAnnual: "€5,000",
    maxAnnual: "€8,500",
    inrRange: "₹4.5 Lakh – ₹7.65 Lakh / year",
    notes: "3 to 4 years research. State-funded doctoral grants and university stipends frequently available for qualified scholars.",
  },
];

const LIVING_COSTS = [
  { item: "Accommodation", eur: "€100 – €700", inr: "₹9,000 – ₹63,000", note: "University dorms (€100–€220) or private flatshares (€300–€700)" },
  { item: "Food & Groceries", eur: "€150 – €300", inr: "₹13,500 – ₹27,000", note: "Supermarkets (Maxima, Lidl, Iki, Rimi) and campus canteens" },
  { item: "Transportation", eur: "€5.80 – €36", inr: "₹520 – ₹3,240", note: "Heavily subsidised student city public transport pass (80% discount!)" },
  { item: "Internet & Mobile", eur: "€20 – €30", inr: "₹1,800 – ₹2,700", note: "Unlimited high-speed 5G mobile data and home fibre connection" },
  { item: "Utilities", eur: "€100 – €218", inr: "₹9,000 – ₹19,620", note: "Central heating, electricity, water, and waste services" },
  { item: "Personal / Leisure", eur: "€100 – €300", inr: "₹9,000 – ₹27,000", note: "Sports facilities, cinema, travel to Baltic beaches, and dining out" },
];

const FAQS = [
  {
    question: "Can I work while studying in Lithuania?",
    answer:
      "International students may have work opportunities during their studies, subject to the conditions of their residence permit and applicable Lithuanian regulations. Non-EU/EEA international students enrolled in full-time Bachelor's, Master's, or Ph.D. degree programs can work up to 40 hours per week throughout the academic year. No separate work permit is required if you hold a valid Lithuanian Temporary Residence Permit (TRP) for studies.",
  },
  {
    question: "Is there a post-study work visa in Lithuania?",
    answer:
      "Post-study options depend on your qualification, employment situation, and the residence rules applicable to your circumstances. Upon successful graduation from a Lithuanian higher education institution, non-EU graduates can apply for a 12-month Temporary Residence Permit (TRP) extension specifically for job search or starting a business. Once you secure a qualified employment contract, your employer can assist in transitioning you to an EU Blue Card or standard work residence permit.",
  },
  {
    question: "Can I bring my family while studying in Lithuania?",
    answer:
      "Family members may be able to accompany or join an international student depending on the student's residence status and applicable requirements. Typically, Master's and Ph.D. students have established rights to sponsor their spouse and minor children for family reunification under Lithuanian migration regulations. Bachelor's students can generally sponsor family members after transitioning to employment or post-study residency.",
  },
  {
    question: "How long does it take to get a Lithuanian student visa?",
    answer:
      "Processing times vary depending on the application, documentation, appointment availability, and the relevant immigration authorities. Once your Lithuanian university issues the Mediation Letter (tarpininkavimo raštas) via the electronic MIGRIS system, you book an appointment with VFS Global. The Lithuanian Migration Department typically processes the National Visa D / TRP within 2 to 4 weeks (urgent processing in 10-15 business days).",
  },
  {
    question: "Is English widely spoken in Lithuanian universities and daily life?",
    answer:
      "Yes, English is the primary language of instruction for hundreds of international undergraduate and postgraduate degree courses. Outside campus, over 85% of Lithuanian youth and professionals speak fluent English. Cities like Vilnius and Kaunas are vibrant, cosmopolitan tech hubs where banking, shopping, public transit, and customer services are readily available in English.",
  },
  {
    question: "Are Lithuanian medical degrees (MBBS / Dentistry) recognized in India and globally?",
    answer:
      "Yes, medical and dental degrees from institutions like Lithuanian University of Health Sciences (LSMU) and Vilnius University Faculty of Medicine are listed in the World Directory of Medical Schools (WDOMS), accredited across the European Union, and fully comply with National Medical Commission (NMC) guidelines for Indian medical graduates (including 54+ months of continuous English curriculum and a 12-month integrated clinical internship).",
  },
];

const VISA_STEPS = [
  {
    step: "01",
    title: "Course Selection & Document Review",
    desc: "Umang Career Consultancy evaluates your academic history, test scores, and career ambitions to pinpoint the right Lithuanian university.",
  },
  {
    step: "02",
    title: "University Admission & SKVC Recognition",
    desc: "We submit your application and facilitate center for quality assessment (SKVC) academic recognition of your previous qualifications.",
  },
  {
    step: "03",
    title: "Tuition Deposit & MIGRIS Mediation Letter",
    desc: "Upon receiving your conditional offer, pay your first-year tuition deposit to have the university issue your official MIGRIS mediation number.",
  },
  {
    step: "04",
    title: "Financial & Solvency Preparation",
    desc: "Assemble required financial proof (bank statement showing min. €4,500 living funds in student's name), apostilled police clearance, and health insurance.",
  },
  {
    step: "05",
    title: "National Visa D / TRP Application at VFS",
    desc: "Submit your biometric application at the nearest VFS Global Lithuanian Visa Application Centre in India for processing by the Migration Department.",
  },
  {
    step: "06",
    title: "Arrival in Lithuania & Biometric TRP Card",
    desc: "Fly to Vilnius or Kaunas, settle into your university student residence, and collect your 2-year biometric Temporary Residence Permit (TRP) card.",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function LithuaniaStudyAbroadContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [calcBudget, setCalcBudget] = useState<number>(650);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "Business Studies",
    intake: "September (Fall) 2026",
    notes: "",
  });

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#006a44] selection:text-white">
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

      {/* -------------------------------------------------------------
          1. HERO SECTION
      ------------------------------------------------------------- */}
      <section className="relative bg-gradient-to-br from-[#0a1e38] via-[#0d274c] to-[#122b54] text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,106,68,0.22),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(253,185,19,0.15),transparent_40%)] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#c1272d]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6 animate-fade-in-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide">
                <LithuaniaFlagBadge />
                <span className="text-white">Northern Europe • European Union • Schengen Area • European Tech & Laser Hub</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-rose-300">Lithuania</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl text-slate-200 font-bold block mt-2">
                  Europe&apos;s Fintech & Laser Technology Powerhouse
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Lithuania offers international students the ultimate European advantage: world-class degrees starting from just €2,200/year, up to 40 hours per week student work rights, 12-month post-study search permits, and vibrant campuses in Vilnius and Kaunas.
              </p>

              {/* Quick Metrics Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15 text-center card-hover-elevate">
                  <div className="text-xl sm:text-2xl font-black text-amber-300">€2,200+</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Starting Annual Tuition</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15 text-center card-hover-elevate">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">40 Hrs/Wk</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Full-Time Work Rights</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15 text-center card-hover-elevate">
                  <div className="text-xl sm:text-2xl font-black text-white">12 Mo</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Post-Study TRP</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15 text-center card-hover-elevate">
                  <div className="text-xl sm:text-2xl font-black text-rose-300">29</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Schengen Countries</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#counseling-form"
                  className="px-8 py-4 rounded-xl bg-[#006a44] hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-900/40 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Free Lithuania Counselling</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm sm:text-base border border-white/25 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5 relative animate-fade-in-right">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Visual Frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-gradient-to-b from-slate-800 to-[#0a1e38] anim-gentle-float">
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                    <Image
                      src="/destinations/lithuania.jpg"
                      alt="Historic Vilnius Old Town and university architecture in Lithuania"
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e38] via-transparent to-black/30" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white flex items-center gap-2">
                      <LithuaniaFlagBadge />
                      <span>Vilnius, Kaunas & Klaipėda</span>
                    </div>
                  </div>

                  {/* Student Inset Visual & Key Accreditations */}
                  <div className="p-6 bg-[#0c2444] border-t border-white/15">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#fdb913] flex-shrink-0 bg-slate-800">
                        <Image
                          src="/lithuania-hero.png"
                          alt="Student studying in Lithuania"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-black text-white">European Union Bologna Standards</div>
                        <div className="text-xs text-slate-300 mt-0.5">
                          ECTS Accredited • WHO/NMC Recognized • 100% English Taught
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Applications Open for 2026/2027
                      </span>
                      <span className="text-amber-300 font-semibold">September & February Intakes</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-5 bg-white text-[#0a1e38] p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center font-black text-xs text-[#006a44] border border-emerald-200 tracking-wider">
                    LT
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">Affordable EU Living</div>
                    <div className="text-[11px] text-slate-600">Student Transit Only €5.80 / Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. QUICK METRICS STRIP
      ------------------------------------------------------------- */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#006a44]">€2,200+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Starting Annual Tuition</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0a1e38]">40 Hrs/Wk</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Student Work Permitted</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">€5.80 / Mo</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Subsidized Student Transit</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#c1272d]">12 Months</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Post-Study Work Search TRP</div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. ABOUT LITHUANIA (10 PILLARS)
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Lithuania"
            subtitle="Northern Europe's Fast-Growing Innovation Economy, Laser Science Capital & Vibrant Baltic Culture"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {ABOUT_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#006a44]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-2.5 rounded-xl bg-slate-100 group-hover:bg-emerald-50 transition-colors">
                      {card.icon}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#006a44] group-hover:text-white transition-colors">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#0a1e38] mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. TOP COURSES IN LITHUANIA
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Courses in Lithuania"
            subtitle="Specialised English-Taught Disciplines Excelling in Technology, Medicine & Global Commerce"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TOP_COURSES.map((course, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-6 sm:p-7 hover:border-[#006a44] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {course.category}
                    </span>
                    <span className="text-[11px] font-semibold text-[#006a44] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {course.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1e38] group-hover:text-[#006a44] transition-colors mb-3">
                    {course.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{course.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Bachelor & Master Degrees</span>
                  <a
                    href="#counseling-form"
                    className="text-xs font-bold text-[#006a44] hover:text-emerald-800 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Check Eligibility</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. WHY STUDY IN LITHUANIA? (11 PILLARS)
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#0a1e38] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,106,68,0.22),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Why is Lithuania an Ideal Study Abroad Destination?"
            subtitle="Exceptional Quality of Education, Europe's Lowest Tuition Fees & Flourishing Career Pathways"
            variant="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {WHY_LITHUANIA.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-[#fdb913]/80 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 p-3 rounded-xl bg-white/10 w-fit flex items-center justify-center"><LithuaniaCardIcon type={item.icon} /></div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold">
                  <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg><span>European Advantage</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. TOP UNIVERSITIES IN LITHUANIA
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Universities in Lithuania"
            subtitle="Centuries-Old Academic Heritage Combined with Modern Scientific Research Powerhouses"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {UNIVERSITIES.map((uni, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#006a44] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5 inline mr-1 text-[#006a44] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>{uni.location}
                    </span>
                    <span className="text-[11px] font-bold text-[#006a44] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                      {uni.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0a1e38] mb-1">{uni.name}</h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3">{uni.est}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Core Programs:</span> {uni.speciality}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Bologna ECTS & English Taught</span>
                  <a
                    href="#counseling-form"
                    className="text-xs font-extrabold text-[#006a44] hover:text-emerald-800 inline-flex items-center gap-1.5"
                  >
                    <span>Apply via Umang</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. TUITION FEES & ACADEMIC INTAKES
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Lithuania Tuition Fees & Academic Intakes"
            subtitle="Affordable European Education with Standard Fall and Spring Semesters"
          />

          {/* Intakes Spotlight Bar */}
          <div className="bg-[#0a1e38] text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-lg border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left items-center">
              <div>
                <span className="text-xs font-bold tracking-wider text-amber-300 uppercase block mb-1">
                  Primary Entry Term
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">September (Fall) Intake</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Primary intake for all Bachelor&apos;s, Master&apos;s, Medicine (MBBS), and Engineering faculties. Apply between March and June.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase block mb-1">
                  Secondary Entry Term
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">February (Spring) Intake</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Available for popular Business, Management, IT, and select Master&apos;s programs. Applications open from October to December.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-300 text-center">
              *Tuition fees and intake periods vary depending on the institution, faculty, and program structure.
            </div>
          </div>

          {/* Tuition Table */}
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-900 border-b border-slate-200">
                  <th className="py-4 px-6 text-sm font-extrabold">Course Level</th>
                  <th className="py-4 px-6 text-sm font-extrabold">Minimum Annual</th>
                  <th className="py-4 px-6 text-sm font-extrabold">Maximum Annual</th>
                  <th className="py-4 px-6 text-sm font-extrabold">Approx. INR Range</th>
                  <th className="py-4 px-6 text-sm font-extrabold">Program Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {TUITION_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0a1e38]">{row.course}</td>
                    <td className="py-4 px-6 font-semibold text-emerald-600">{row.minAnnual}</td>
                    <td className="py-4 px-6 font-semibold text-[#c1272d]">{row.maxAnnual}</td>
                    <td className="py-4 px-6 text-slate-600 font-medium">{row.inrRange}</td>
                    <td className="py-4 px-6 text-xs text-slate-500 leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          8. MONTHLY COST OF LIVING IN LITHUANIA
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Monthly Cost of Living in Lithuania"
            subtitle="One of the Most Affordable Living Environments in the European Union"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Itemized Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LIVING_COSTS.map((cost, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#006a44] hover:shadow-sm transition-all"
                  >
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      {cost.item}
                    </div>
                    <div className="text-lg font-black text-[#0a1e38] mt-1">{cost.eur}</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">({cost.inr})</div>
                    <div className="text-[11px] text-slate-500 mt-2 pt-2 border-t border-slate-200/60">
                      {cost.note}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-950 leading-relaxed">
                <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-bold">Student Advantage:</span> International students in Lithuania receive an official Lithuanian Student Identity Card (LSIC / ISIC) providing an **80% discount** on urban public transportation (monthly pass is just €5.80 in Vilnius) and 50% discount on long-distance trains and intercity buses!
              </div>
            </div>

            {/* Right Column: Live Calculator Widget */}
            <div className="lg:col-span-5 bg-[#0a1e38] text-white p-7 sm:p-8 rounded-3xl shadow-xl border border-slate-700">
              <h3 className="text-xl font-extrabold mb-1">Monthly Budget Calculator</h3>
              <p className="text-xs text-slate-300 mb-6">Estimate your total monthly expense in Lithuania in Euros (€) and INR.</p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-slate-300">Estimated Monthly Expense</span>
                    <span className="text-amber-300 font-bold text-base">€{calcBudget}</span>
                  </div>
                  <input
                    type="range"
                    min="450"
                    max="1200"
                    step="25"
                    value={calcBudget}
                    onChange={(e) => setCalcBudget(Number(e.target.value))}
                    className="w-full accent-[#006a44] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Student Dorm (€450)</span>
                    <span>Comfortable Flatshare (€650)</span>
                    <span>Private Studio (€1,200)</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300">INR Equivalent (approx):</span>
                    <span className="font-bold text-amber-300">₹{Math.round(calcBudget * 90).toLocaleString("en-IN")} / mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300">Annual Estimated Living:</span>
                    <span className="font-bold text-emerald-400">€{calcBudget * 12} / year</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-white/10">
                    <span className="text-slate-300">Student Part-Time Income Potential:</span>
                    <span className="font-bold text-white">€800 – €1,200 / mo</span>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="#counseling-form"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#006a44] hover:bg-emerald-800 text-white font-extrabold text-sm block shadow-lg shadow-emerald-950/40 transition-all"
                  >
                    Plan Your Financial Roadmap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          9. WEATHER IN LITHUANIA (4 SEASONS)
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Weather in Lithuania"
            subtitle="Moderate Northern European Climate with Snowy Winters and Mild, Sunny Summers"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-50 flex items-center justify-center">
                <SunIcon />
              </div>
              <h3 className="text-lg font-black text-slate-900">Summer</h3>
              <div className="text-2xl font-black text-amber-500 my-2">16℃ – 25℃</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pleasantly warm and sunny with long daylight hours. Perfect for exploring Curonian Spit sand dunes, lake kayaking in Trakai, and music festivals.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-50 flex items-center justify-center">
                <LeafIcon />
              </div>
              <h3 className="text-lg font-black text-slate-900">Autumn</h3>
              <div className="text-2xl font-black text-orange-500 my-2">5℃ – 15℃</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Colorful golden foliage across national parks, mild weather for settling into campus life, and welcoming orientation activities for freshmen.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-sky-50 flex items-center justify-center">
                <SnowflakeIcon />
              </div>
              <h3 className="text-lg font-black text-slate-900">Winter</h3>
              <div className="text-2xl font-black text-sky-500 my-2">-5℃ – 0℃</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Snowy Baltic winter landscapes, ice skating in Cathedral Square, cozy central-heated cafes and dorms, and festive Christmas markets.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <BlossomIcon />
              </div>
              <h3 className="text-lg font-black text-slate-900">Spring</h3>
              <div className="text-2xl font-black text-emerald-500 my-2">2℃ – 15℃</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fresh blooming parks, thawing rivers, pleasant temperatures for cycling around Vilnius Old Town, and renewed academic term momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          10. LITHUANIAN STUDENT VISA & TRP ROADMAP (6 STEPS)
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Lithuania Student Visa & TRP Roadmap"
            subtitle="Straightforward 6-Step Application Process Guided by Umang Career Consultancy"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VISA_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#006a44] hover:shadow-lg transition-all duration-300 relative group"
              >
                <div className="text-3xl font-black text-[#006a44]/25 group-hover:text-[#006a44] transition-colors mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-extrabold text-[#0a1e38] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          11. FREQUENTLY ASKED QUESTIONS (FAQS)
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Essential Information Regarding Working, Post-Study Visas, Family & Processing Times"
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-[#0a1e38] hover:text-[#006a44] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDownIcon isOpen={isOpen} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          12. TO MAKE YOUR STUDY IN LITHUANIA HASSLE-FREE (CTA & FORM)
      ------------------------------------------------------------- */}
      <section
        id="counseling-form"
        className="py-16 sm:py-24 bg-gradient-to-br from-[#0a1e38] via-[#0d274c] to-[#122b54] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,106,68,0.25),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold tracking-wider text-amber-300">
                <span>HASSLE-FREE STUDY IN LITHUANIA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                To Make Your Study in Lithuania <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-rose-300">Hassle-Free</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Plan your Lithuania study journey with Umang Career Consultancy. From shortlisting accredited Lithuanian universities to SKVC document recognition, MIGRIS mediation tracking, VFS visa filing, and student dormitory allocation — our experienced European advisors guide you every step of the way.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Partnerships with Top Lithuanian Universities</h4>
                    <p className="text-xs text-slate-300">Applications to Vilnius University, VILNIUS TECH, KTU, LSMU, VMU, and MRU.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Complete MIGRIS & National Visa D Assistance</h4>
                    <p className="text-xs text-slate-300">End-to-end guidance with electronic mediation numbers, apostilled documents, and VFS booking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Pre-Departure & Dormitory Accommodation Booking</h4>
                    <p className="text-xs text-slate-300">Assistance in reserving low-cost university student halls from €100/month.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center gap-2 text-white font-bold text-base hover:text-amber-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#006a44] flex items-center justify-center shadow-lg">
                    <PhoneIcon />
                  </div>
                  <span>Call Counselors: +91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100">
                <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] mb-1">
                  Book Free Lithuania Profile Evaluation
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Get a comprehensive eligibility, scholarship, and visa feasibility assessment within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                    <h4 className="text-lg font-bold text-emerald-900">Thank You!</h4>
                    <p className="text-xs text-emerald-700">
                      Your inquiry has been received. Our senior European education consultant will connect with you shortly at {formData.phone || "+91 91731 86109"}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g. Ananya Patel"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006a44]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006a44]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="e.g. ananya@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006a44]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your City / State *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                          placeholder="e.g. Vadodara, Gujarat"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006a44]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Course</label>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData((prev) => ({ ...prev, course: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006a44] bg-white"
                        >
                          <option value="Business Studies">Business Studies & Management</option>
                          <option value="Technology Studies">Technology & Laser Studies</option>
                          <option value="Healthcare">Healthcare & Medicine (MBBS / Dentistry)</option>
                          <option value="Tourism & Hospitality">Tourism & Hospitality</option>
                          <option value="Management Studies">Management Studies & Logistics</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Target Intake</label>
                        <select
                          value={formData.intake}
                          onChange={(e) => setFormData((prev) => ({ ...prev, intake: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006a44] bg-white"
                        >
                          <option value="September (Fall) 2026">September (Fall) 2026</option>
                          <option value="February (Spring) 2027">February (Spring) 2027</option>
                          <option value="September (Fall) 2027">September (Fall) 2027</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred University or Major?</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder="e.g. Interested in Vilnius University, VILNIUS TECH, or LSMU Medicine"
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006a44]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#006a44] hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-emerald-950/40 transition-all duration-300"
                    >
                      Book Free Profile Evaluation
                    </button>
                    <p className="text-center text-[11px] text-slate-400">
                      <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Official European university counseling.
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
