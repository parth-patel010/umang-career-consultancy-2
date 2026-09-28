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

/* Swiss Flag Badge */
function SwissFlagBadge() {
  return (
    <svg className="w-9 h-7 rounded shadow-md border border-white/60 flex-shrink-0" viewBox="0 0 32 32">
      <rect width="32" height="32" fill="#da291c" />
      <rect x="13" y="6" width="6" height="20" fill="#ffffff" />
      <rect x="6" y="13" width="20" height="6" fill="#ffffff" />
    </svg>
  );
}

/* Section Header */

function SwissCardIcon({ type }: { type: string }) {
  switch (type) {
    case "location":
      return <svg className="w-6 h-6 text-[#da291c]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>;
    case "mountain":
    case "scenery":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
    case "passport":
    case "safety":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    case "economy":
    case "career":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
    case "languages":
    case "english":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
    case "corporate":
    case "industry":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
    case "lifestyle":
    case "scholarship":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
    case "climate":
      return <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth={1.8} /><path strokeWidth={1.8} strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>;
    case "degree":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;
    case "globe":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.8} /><path strokeWidth={1.6} d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>;
    case "quality":
      return <svg className="w-6 h-6 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
    case "finance":
      return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
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
    name: "Business & Management",
    category: "Corporate & Finance",
    tag: "Global Banking Hub",
    desc: "Renowned Swiss executive education, private banking, international business strategies, wealth asset management, and multinational corporate leadership.",
  },
  {
    name: "Law & International Law",
    category: "Diplomacy & Global Governance",
    tag: "Geneva UN Capital",
    desc: "Study international arbitration, humanitarian law, intellectual property, and diplomatic relations in Geneva alongside the UN, WTO, and Red Cross.",
  },
  {
    name: "Tourism & Hospitality",
    category: "World's #1 Hospitality Standard",
    tag: "Swiss Hospitality Heritage",
    desc: "The gold standard of world hotel management, luxury brand experiences, culinary arts, resort management, and global hospitality leadership.",
  },
  {
    name: "Environmental Science",
    category: "Sustainability & Alpine Ecology",
    tag: "Green Pioneer",
    desc: "Alpine conservation, renewable clean energy, glacier climate research, circular resource systems, and environmental risk governance.",
  },
  {
    name: "Engineering",
    category: "Precision & Advanced Technology",
    tag: "Swiss Precision",
    desc: "Precision mechanics, micro-engineering, robotics, biomedical instruments, sustainable civil infrastructure, and nanotechnology.",
  },
  {
    name: "Biotechnology",
    category: "Pharma & Life Sciences",
    tag: "Basel Pharma Valley",
    desc: "Leading international life science research with proximity to pharmaceutical giants Novartis and Roche in the Basel innovation cluster.",
  },
];

const WHY_SWITZERLAND = [
  {
    title: "Globally Recognised Degrees",
    desc: "Swiss university and institute qualifications are universally respected across multinational corporations, elite institutions, and global industry bodies under the Bologna framework.",
    icon: "degree",
  },
  {
    title: "International Student Environment",
    desc: "Study alongside exceptional students from over 120+ nations, fostering cross-cultural collaboration, multilingual fluency, and lifelong professional networks.",
    icon: "globe",
  },
  {
    title: "English-Taught Study Options",
    desc: "Wide spectrum of Bachelor's, Master's, MBA, and Diploma programs delivered entirely in English with no German or French prerequisites for admission.",
    icon: "english",
  },
  {
    title: "Quality Education",
    desc: "Swiss academic institutions are world-renowned for rigorous pedagogical standards, world-class laboratory equipment, and faculty comprised of industry veterans.",
    icon: "quality",
  },
  {
    title: "A Range of Tuition Fee Options",
    desc: "From cost-effective public cantonal university tuition to elite private hospitality institutes offering comprehensive all-inclusive boarding packages.",
    icon: "finance",
  },
  {
    title: "Strong Industry Exposure",
    desc: "Mandatory paid internships built directly into hospitality and business programs, providing guaranteed hands-on experience at premier global hotels and firms.",
    icon: "industry",
  },
  {
    title: "Post-Study Opportunities",
    desc: "Non-EU/EFTA graduates can apply for a 6-month residence permit post-graduation to seek permanent employment aligned with their academic specialisation.",
    icon: "career",
  },
  {
    title: "Scholarship Opportunities",
    desc: "Merit-based scholarships, early-bird tuition fee reductions, and institutional grants available for qualified international applicants with strong academic records.",
    icon: "scholarship",
  },
];

const ABOUT_CARDS = [
  {
    title: "Located in Central Europe",
    desc: "Perfect geographical heart of Western Europe, seamlessly connected by high-speed rail to France, Germany, Italy, and Austria.",
    badge: "Heart of Europe",
    icon: "location",
  },
  {
    title: "Landlocked Country",
    desc: "Protected alpine sanctuary bordered by 5 nations, featuring breathtaking pristine lakes, alpine valleys, and crystalline rivers.",
    badge: "Alpine Sanctuary",
    icon: "mountain",
  },
  {
    title: "Schengen Country",
    desc: "Full member of the Schengen Area, allowing students border-free travel across 29 European countries during weekends and study breaks.",
    badge: "29 Nations Access",
    icon: "passport",
  },
  {
    title: "Rich and Stable Economy",
    desc: "One of the most competitive, resilient, and wealthy economies worldwide, characterized by the strong Swiss Franc (CHF) and zero currency volatility.",
    badge: "Economic Powerhouse",
    icon: "economy",
  },
  {
    title: "Stunning Alpine Scenery",
    desc: "Home to the Matterhorn, Jungfrau, Lake Geneva, and Lake Lucerne, offering world-class skiing, hiking, and outdoor adventures year-round.",
    badge: "Natural Wonder",
    icon: "scenery",
  },
  {
    title: "4 Official Languages",
    desc: "A rich plurilingual society communicating across German (62%), French (23%), Italian (8%), and Romansh (0.5%), with English universally spoken.",
    badge: "Multilingual Culture",
    icon: "languages",
  },
  {
    title: "Home to Multinational Organisations",
    desc: "Global headquarters for the United Nations (UN), WTO, WHO, FIFA, UEFA, Red Cross, Nestlé, Novartis, Roche, and UBS.",
    badge: "Global Diplomacy & Business",
    icon: "corporate",
  },
  {
    title: "Safe, Clean and Well-Governed",
    desc: "Consistently ranked #1 globally for safety, pristine public sanitation, low crime rates, punctual public transport, and direct civic democracy.",
    badge: "#1 Global Safety",
    icon: "safety",
  },
  {
    title: "High Standard of Living",
    desc: "Swiss cities (Zurich, Geneva, Bern, Basel) consistently rank at the very top of Mercer's global Quality of Living indices.",
    badge: "Top Quality of Life",
    icon: "lifestyle",
  },
  {
    title: "Cold Winters & Warm Summers",
    desc: "Four distinct seasons with snowy alpine winter sports (-5°C to 5°C) and sun-drenched, vibrant lake-swimming summers (18°C to 30°C).",
    badge: "Four Balanced Seasons",
    icon: "climate",
  },
];

const UNIVERSITIES = [
  {
    name: "EU Business School",
    campuses: "Geneva & Montreux",
    speciality: "International Business, Entrepreneurship & Digital Media",
    type: "Top Ranked European Business School",
    tag: "Global Faculty & Fast-Track BBA/MBA",
  },
  {
    name: "GLION Institute of Higher Education",
    campuses: "Glion-sur-Montreux & Bulle",
    speciality: "Luxury Hospitality Management & Finance",
    type: "QS World Top 5 Hospitality Institution",
    tag: "Elite Global Luxury Placement",
  },
  {
    name: "Geneva Business School",
    campuses: "Geneva (Palais des Nations District)",
    speciality: "International Finance, Geopolitics & DBA",
    type: "Accredited Swiss Business School",
    tag: "UN & Diplomatic Proximity",
  },
  {
    name: "Swiss Hotel Management School (SHMS)",
    campuses: "Caux & Leysin",
    speciality: "Hospitality Management, Event Design & Luxury Services",
    type: "Historic Swiss Palace Campuses",
    tag: "QS #2 Worldwide for Hospitality",
  },
  {
    name: "Business & Hotel Management School (BHMS)",
    campuses: "Lucerne",
    speciality: "Culinary Arts, Hospitality & Global Business",
    type: "Downtown City-Center Campus",
    tag: "Guaranteed Paid Swiss Internships",
  },
  {
    name: "César Ritz Colleges Switzerland",
    campuses: "Le Bouveret & Brig",
    speciality: "Hospitality, Tourism & Entrepreneurship",
    type: "Legacy of King of Hoteliers",
    tag: "Sustainability & Innovation",
  },
  {
    name: "American Institute of Applied Sciences in Switzerland",
    campuses: "La Tour-de-Peilz (Lake Geneva)",
    speciality: "Applied Business Administration & IT Management",
    type: "US-Accredited Curriculum in Switzerland",
    tag: "Dual Degree Options",
  },
  {
    name: "Swiss School of Business and Management (SSBM)",
    campuses: "Geneva",
    speciality: "Global MBA, Executive DBA & Data Management",
    type: "Premier Research & Business Institute",
    tag: "Flexible & Blended Pathways",
  },
  {
    name: "Hotel & Tourism Management Institute Switzerland (HTMi)",
    campuses: "Sörenberg (Canton of Lucerne)",
    speciality: "Hotel Operations, Event Planning & Culinary Arts",
    type: "Traditional Swiss Alpine Campus",
    tag: "International Hotel Brand Partners",
  },
  {
    name: "Culinary Arts Academy Switzerland",
    campuses: "Le Bouveret & Lucerne",
    speciality: "Fine Dining, Pastry & Chocolate Arts, Kitchen Management",
    type: "World's Foremost Culinary Institute",
    tag: "Chef Mentorship by Culinary Legends",
  },
];

const STUDY_DESTINATIONS = [
  {
    city: "BERN",
    canton: "Federal Capital",
    desc: "Explore study opportunities in Bern — Switzerland's UNESCO-protected federal capital, home to federal departments, diplomacy, and premier research institutions.",
    highlight: "Federal Governance & Research",
  },
  {
    city: "BASEL",
    canton: "Northwest Switzerland",
    desc: "Explore universities and study options in Basel — the world capital of pharmaceutical innovation, life sciences, and world-renowned contemporary art museums.",
    highlight: "Pharma Capital (Novartis & Roche)",
  },
  {
    city: "GENEVA",
    canton: "Lake Geneva Region",
    desc: "Explore study opportunities in Geneva — the global hub for diplomacy, private banking, the United Nations, WHO, WTO, and international humanitarian organisations.",
    highlight: "Global Diplomacy & Private Banking",
  },
  {
    city: "LAUSANNE",
    canton: "Vaud (Olympic Capital)",
    desc: "Explore universities and study options in Lausanne — picturesque Lake Geneva city housing the International Olympic Committee (IOC), tech parks, and elite colleges.",
    highlight: "Olympic Headquarters & Innovation",
  },
  {
    city: "FRIBOURG",
    canton: "Bilingual Canton",
    desc: "Explore study opportunities in Fribourg — a vibrant medieval university town with a unique bilingual French-German academic tradition and youthful student life.",
    highlight: "Bilingual French-German Culture",
  },
  {
    city: "NEUCHÂTEL",
    canton: "Watchmaking Valley",
    desc: "Explore universities and study options in Neuchâtel — nestled along Lake Neuchâtel, celebrated worldwide for luxury horology, micro-technology, and innovation.",
    highlight: "Micro-Engineering & Watchmaking",
  },
  {
    city: "TICINO",
    canton: "Italian-Speaking Switzerland",
    desc: "Explore study opportunities in Ticino (Lugano & Bellinzona) — offering Mediterranean warmth, Swiss efficiency, Italian culture, and thriving finance and AI hubs.",
    highlight: "Mediterranean Climate & Swiss Quality",
  },
  {
    city: "ST. GALLEN",
    canton: "Eastern Switzerland",
    desc: "Explore universities and study options in St. Gallen — world-famous for prestigious business management, economics, and historic UNESCO Abbey library heritage.",
    highlight: "Top European Business & Economics",
  },
];

const TUITION_TABLE = [
  {
    course: "Bachelor's Degree",
    minAnnual: "CHF 5,700",
    maxAnnual: "CHF 45,600",
    inrRange: "₹5.4 Lakh – ₹43.5 Lakh / year",
    notes: "3 to 4 years duration. Public cantonal universities start at lower rates; private business and hospitality institutes include immersive training.",
  },
  {
    course: "Master's Degree (MSc / MA / MBA)",
    minAnnual: "CHF 12,900",
    maxAnnual: "CHF 62,500",
    inrRange: "₹12.3 Lakh – ₹59.5 Lakh / year",
    notes: "1 to 2 years duration. Includes executive MBAs, hospitality management, and advanced international business degrees.",
  },
  {
    course: "Diploma & Advanced Certificate",
    minAnnual: "CHF 15,000",
    maxAnnual: "CHF 55,380",
    inrRange: "₹14.3 Lakh – ₹52.8 Lakh / year",
    notes: "1 to 2 years specialized hospitality, culinary arts, or business diplomas with built-in paid industry internship placements.",
  },
  {
    course: "Ph.D. / Doctoral Programs",
    minAnnual: "Funded / Varies",
    maxAnnual: "Institutional Stipend",
    inrRange: "Often includes research stipend",
    notes: "Ph.D. candidates at Swiss research universities frequently receive paid research assistantships or institutional funding.",
  },
];

const LIVING_COSTS = [
  { item: "Accommodation", chf: "CHF 700 – CHF 1,200", inr: "₹66,500 – ₹1,14,000", note: "Student residences, flatshares (WG), or campus dorms" },
  { item: "Food & Groceries", chf: "CHF 250 – CHF 450", inr: "₹23,750 – ₹42,750", note: "Supermarkets (Migros, Coop, Denner) and university mensa" },
  { item: "Transportation", chf: "CHF 70 – CHF 100", inr: "₹6,650 – ₹9,500", note: "SBB Half-Fare travelcard & local canton city transit passes" },
  { item: "Internet & Mobile", chf: "CHF 60 – CHF 100", inr: "₹5,700 – ₹9,500", note: "High-speed 5G mobile plan and home fibre connection" },
  { item: "Utilities", chf: "CHF 100 – CHF 150", inr: "₹9,500 – ₹14,250", note: "Electricity, heating, water, and building maintenance" },
  { item: "Personal / Leisure", chf: "CHF 150 – CHF 300", inr: "₹14,250 – ₹28,500", note: "Sports, skiing, cinema, cultural events, and dining out" },
];

const FAQS = [
  {
    question: "Can I work while studying in Switzerland?",
    answer:
      "International students may have limited work opportunities subject to their residence permit, canton, and applicable Swiss regulations. Non-EU/EFTA students are generally allowed to work up to 15 hours per week during term time after completing their first 6 months of study, and up to full-time (40 hours/week) during scheduled university vacations. In addition, students in Swiss hospitality management and culinary programs benefit from formal, curriculum-integrated paid internships (earning a mandated minimum Swiss gross stipend of approximately CHF 2,200 to CHF 2,500 per month).",
  },
  {
    question: "Is it easy to get a post-study work visa in Switzerland?",
    answer:
      "Post-study options depend on your qualification, employment situation, nationality, and applicable residence regulations. Under Swiss Federal Act on Foreign Nationals, non-EU/EFTA graduates holding a recognised Bachelor's or Master's degree from a Swiss university can apply for a 6-month residence permit extension specifically to find employment. If you secure a job where your prospective Swiss employer demonstrates that your employment serves high economic or scientific interest, they can sponsor your Swiss work permit (Permit L or B).",
  },
  {
    question: "Is a Swiss degree recognised worldwide?",
    answer:
      "Recognition depends on the institution, qualification, and the requirements of the country or organisation where you intend to use the degree. Degrees and diplomas issued by Swiss cantonal universities, federal institutes of technology, and accredited private colleges/hotel schools are globally respected for high educational quality. Switzerland is a signatory of the European Bologna Process, meaning qualifications use the European Credit Transfer and Accumulation System (ECTS) for universal credit transfer across Europe, the UK, the USA, and India.",
  },
  {
    question: "Can I stay permanently after studying in Switzerland?",
    answer:
      "Permanent residence is not automatic after graduation. Eligibility depends on factors such as residence history, nationality, employment, and applicable Swiss regulations. Typically, non-EU citizens who maintain continuous lawful residence on long-term employment permits (Permit B) for 10 years (or 5 years in cases of successful integration and official language proficiency) may apply for a Swiss Permanent Residence Permit (Permit C).",
  },
  {
    question: "What is the language of instruction in Swiss universities?",
    answer:
      "The language depends on the institution and program. English is commonly used in many international and postgraduate programs, especially in MBA, hospitality management, international business, computer science, and life sciences. Other public university undergraduate programs may be taught in German, French, or Italian depending on the canton. International students applying for English-taught programs do not need proficiency in German or French for admission, though learning basic conversational skills locally enhances daily life and internship networking.",
  },
  {
    question: "What is the duration of degree programs in Switzerland?",
    answer:
      "Program duration varies by institution and qualification. Bachelor's programs typically last 3 to 4 years (180 to 240 ECTS credits). Master's programs usually require 1.5 to 2 years (90 to 120 ECTS credits), with intensive one-year Master's and MBA programs also available. Specialized hospitality diplomas range from 1 to 2 years including paid internships, while Doctoral (Ph.D.) programs typically span 3 to 5 years depending on the research area.",
  },
  {
    question: "Do I need IELTS or TOEFL to study in Switzerland?",
    answer:
      "Most English-taught Swiss universities and private institutes require proof of English proficiency, such as an IELTS score of 6.0–6.5 overall, or TOEFL iBT 80–90. However, many partner hospitality colleges and private universities accept Medium of Instruction (MOI) certificates if your previous degree was completed entirely in English, or administer an internal English assessment test.",
  },
  {
    question: "How does the Swiss National Visa D application work for Indian students?",
    answer:
      "Indian students admitted to a Swiss educational institution apply for a National Visa D (long-stay study visa) through VFS Global / the Embassy of Switzerland in New Delhi or Consulate General in Mumbai. The application requires your unconditional offer letter, proof of paid tuition deposit, proof of sufficient financial funds (approx. CHF 21,000 for one academic year), valid passport, academic certificates, and a written commitment to depart Switzerland upon course completion. Processing typically takes 8 to 12 weeks as the dossier is reviewed by the cantonal migration office.",
  },
];

const VISA_STEPS = [
  {
    step: "01",
    title: "Course & University Selection",
    desc: "Umang Career Consultancy evaluates your academic background, language skills, and budget to select the ideal Swiss institution and canton.",
  },
  {
    step: "02",
    title: "Application & Offer Letter",
    desc: "We curate your Statement of Purpose (SOP), CV, academic transcripts, and letters of recommendation to secure your official Letter of Acceptance.",
  },
  {
    step: "03",
    title: "Tuition Deposit & Confirmation",
    desc: "Pay the initial tuition deposit to your Swiss institution to receive your official proof of registration and immigration certificate.",
  },
  {
    step: "04",
    title: "Financial & Document Assembly",
    desc: "Prepare required financial proof (bank statement showing min. CHF 21,000 in student's name or parental solvency), CV, motivational letter, and study plan.",
  },
  {
    step: "05",
    title: "Visa D Submission at VFS / Embassy",
    desc: "Submit your Swiss National Visa D application with biometric appointment at VFS Global for Swiss cantonal migration office verification (8–12 weeks).",
  },
  {
    step: "06",
    title: "Arrival & Swiss Residence Permit (Permit B)",
    desc: "Travel to Switzerland, register at the local Residents' Registration Office (Einwohnerkontrolle / Contrôle des Habitants) within 14 days to receive your biometric Permit B card.",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function SwitzerlandStudyAbroadContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [calcBudget, setCalcBudget] = useState<number>(1800);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "Business & Management",
    intake: "Fall (September)",
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
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#da291c] selection:text-white">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(218,41,28,0.18),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.12),transparent_40%)] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#da291c]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6 animate-fade-in-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide">
                <SwissFlagBadge />
                <span className="text-white">Schengen Area • Central Europe • World Capital of Hospitality & Precision</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-200">Switzerland</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl text-slate-200 font-bold block mt-2">
                  Build Your Global Future with Swiss Excellence
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Switzerland offers international students the gold standard in higher education — globally acclaimed business schools, the world&apos;s #1 luxury hospitality institutes, multilingual culture, high standards of living, and access to 29 Schengen countries.
              </p>

              {/* Quick Metrics Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15 text-center card-hover-elevate">
                  <div className="text-xl sm:text-2xl font-black text-white">4</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Official Languages</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15 text-center card-hover-elevate">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">#1</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">World Hospitality</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15 text-center card-hover-elevate">
                  <div className="text-xl sm:text-2xl font-black text-amber-300">29</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Schengen Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15 text-center card-hover-elevate">
                  <div className="text-xl sm:text-2xl font-black text-rose-400">6 Mo</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Post-Study Search</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#counseling-form"
                  className="px-8 py-4 rounded-xl bg-[#da291c] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Free Switzerland Counselling</span>
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
                {/* Main Visual Frame: Landmark & Student */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-gradient-to-b from-slate-800 to-[#0a1e38] anim-gentle-float">
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                    <Image
                      src="/destinations/switzerland.jpg"
                      alt="Swiss Alps and scenic lake landscape in Switzerland"
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e38] via-transparent to-black/30" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white flex items-center gap-2">
                      <SwissFlagBadge />
                      <span>Bern, Geneva & Zurich</span>
                    </div>
                  </div>

                  {/* Student Inset Visual & Key Accreditations */}
                  <div className="p-6 bg-[#0c2444] border-t border-white/15">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#da291c] flex-shrink-0 bg-slate-800">
                        <Image
                          src="/switzerland-hero.png"
                          alt="Student studying in Switzerland"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-black text-white">Swiss Higher Education Standards</div>
                        <div className="text-xs text-slate-300 mt-0.5">
                          EduQua Certified • Bologna Process ECTS • Paid Hospitality Internships
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Applications Open for 2026/2027
                      </span>
                      <span className="text-amber-300 font-semibold">Fall & Spring Intakes</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-5 bg-white text-[#0a1e38] p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center font-black text-xs text-[#da291c] border border-red-200">CH</div>
                  <div>
                    <div className="text-xs font-black text-slate-900">100% English Programs</div>
                    <div className="text-[11px] text-slate-600">No German / French Required for Admission</div>
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
              <div className="text-2xl sm:text-3xl font-extrabold text-[#da291c]">CHF 5,700+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Starting Annual Tuition</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0a1e38]">29 Countries</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Schengen Free Travel</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">CHF 2,200+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Mandatory Monthly Internship Pay</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0a1e38]">15 Hrs/Wk</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Part-Time Student Work Allowed</div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. ABOUT SWITZERLAND (10 PILLARS)
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Switzerland"
            subtitle="Central Europe's Alpine Sanctuary of Stability, Innovation and World-Class Governance"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {ABOUT_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#da291c]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-red-50 transition-colors flex items-center justify-center shrink-0 w-11 h-11"><SwissCardIcon type={card.icon} /></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#da291c] group-hover:text-white transition-colors">
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
          4. TOP COURSES IN SWITZERLAND
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Courses in Switzerland"
            subtitle="World-Renowned Specialisations Shaping Leaders in Hospitality, Finance, Law & Sciences"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TOP_COURSES.map((course, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-6 sm:p-7 hover:border-[#da291c] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {course.category}
                    </span>
                    <span className="text-[11px] font-semibold text-[#da291c] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                      {course.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1e38] group-hover:text-[#da291c] transition-colors mb-3">
                    {course.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{course.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Degree & Master Pathways</span>
                  <a
                    href="#counseling-form"
                    className="text-xs font-bold text-[#da291c] hover:text-red-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
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
          5. WHY STUDY IN SWITZERLAND?
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#0a1e38] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(218,41,28,0.18),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Why is Switzerland an Ideal Study Abroad Destination?"
            subtitle="The Ultimate Balance of World-Class Academic Prestige, Global Industry Connections & Quality of Life"
            variant="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_SWITZERLAND.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-[#da291c]/80 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 p-3 rounded-xl bg-white/10 w-fit flex items-center justify-center"><SwissCardIcon type={item.icon} /></div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold">
                  <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg><span>Swiss Standard Advantage</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. UNIVERSITIES IN SWITZERLAND
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Universities in Switzerland"
            subtitle="Top Business Schools, Elite Hospitality Institutes & Acclaimed Management Academies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {UNIVERSITIES.map((uni, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#da291c] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5 inline mr-1 text-[#da291c] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>{uni.campuses}
                    </span>
                    <span className="text-[11px] font-bold text-[#da291c] bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                      {uni.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0a1e38] mb-2">{uni.name}</h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3">{uni.type}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Key Focus Areas:</span> {uni.speciality}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Bologna & International Accreditations</span>
                  <a
                    href="#counseling-form"
                    className="text-xs font-extrabold text-[#da291c] hover:text-red-700 inline-flex items-center gap-1.5"
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
          7. STUDY DESTINATIONS IN SWITZERLAND (CANTONS & CITIES)
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Study Destinations in Switzerland"
            subtitle="Explore Distinct Cantonal Study Hubs — from French Lake Geneva to German Capitals and Italian Ticino"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDY_DESTINATIONS.map((dest, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 hover:bg-white hover:border-[#da291c] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#da291c] uppercase tracking-wider">
                      {dest.canton}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700 font-bold">
                      Canton
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#0a1e38] mb-2 group-hover:text-[#da291c] transition-colors">
                    {dest.city}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{dest.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-500">
                  <span className="text-slate-900 font-bold">Highlight:</span> {dest.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          8. TUITION FEES & ACADEMIC INTAKES
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Switzerland Tuition Fees & Academic Intakes"
            subtitle="Transparent Annual Breakdown Across Degree, Master, Diploma & Doctoral Pathways"
          />

          {/* Intakes Spotlight Bar */}
          <div className="bg-[#0a1e38] text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-lg border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
              <div>
                <span className="text-xs font-bold tracking-wider text-rose-300 uppercase block mb-1">
                  Primary Entry Term
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">Fall Intake (September)</h4>
                <p className="text-xs text-slate-300 mt-1">Largest intake across all Swiss cantonal & private institutions.</p>
              </div>

              <div>
                <span className="text-xs font-bold tracking-wider text-amber-300 uppercase block mb-1">
                  Secondary Entry Term
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">Spring Intake (February / March)</h4>
                <p className="text-xs text-slate-300 mt-1">Ideal for business, hospitality & postgraduate degree intakes.</p>
              </div>

              <div>
                <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase block mb-1">
                  Flexible Enrollment
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">Rolling / Quarterly Terms</h4>
                <p className="text-xs text-slate-300 mt-1">Ph.D. research & select hospitality culinary modules admit year-round.</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-300 text-center">
              *Tuition fees and intake periods vary by institution, canton, and program curriculum structure.
            </div>
          </div>

          {/* Tuition Table */}
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-900 border-b border-slate-200">
                  <th className="py-4 px-6 text-sm font-extrabold">Program Level</th>
                  <th className="py-4 px-6 text-sm font-extrabold">Minimum Annual</th>
                  <th className="py-4 px-6 text-sm font-extrabold">Maximum Annual</th>
                  <th className="py-4 px-6 text-sm font-extrabold">Approx. INR Range</th>
                  <th className="py-4 px-6 text-sm font-extrabold">Program Structure & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {TUITION_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0a1e38]">{row.course}</td>
                    <td className="py-4 px-6 font-semibold text-emerald-600">{row.minAnnual}</td>
                    <td className="py-4 px-6 font-semibold text-[#da291c]">{row.maxAnnual}</td>
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
          9. MONTHLY COST OF LIVING IN SWITZERLAND
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Monthly Cost of Living in Switzerland"
            subtitle="Realistic Itemized Budget Estimations for International Students"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Itemized Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LIVING_COSTS.map((cost, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#da291c] hover:shadow-sm transition-all"
                  >
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      {cost.item}
                    </div>
                    <div className="text-lg font-black text-[#0a1e38] mt-1">{cost.chf}</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">({cost.inr})</div>
                    <div className="text-[11px] text-slate-500 mt-2 pt-2 border-t border-slate-200/60">
                      {cost.note}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-bold">Student Cost Saving Tip:</span> Enrolling in student flatshares (WG - Wohngemeinschaft), using student canteen (mensa) subsidised meal plans, and holding an SBB Half-Fare travelcard cuts living expenses by 30% to 40%.
              </div>
            </div>

            {/* Right Column: Live Calculator Widget */}
            <div className="lg:col-span-5 bg-[#0a1e38] text-white p-7 sm:p-8 rounded-3xl shadow-xl border border-slate-700">
              <h3 className="text-xl font-extrabold mb-1">Monthly Expense Calculator</h3>
              <p className="text-xs text-slate-300 mb-6">Estimate your total monthly budget in Swiss Francs (CHF) and INR.</p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-slate-300">Target Monthly Budget</span>
                    <span className="text-rose-400 font-bold text-base">CHF {calcBudget}</span>
                  </div>
                  <input
                    type="range"
                    min="1330"
                    max="2400"
                    step="50"
                    value={calcBudget}
                    onChange={(e) => setCalcBudget(Number(e.target.value))}
                    className="w-full accent-[#da291c] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Frugal (CHF 1,330)</span>
                    <span>Average (CHF 1,800)</span>
                    <span>Comfortable (CHF 2,400)</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300">Equivalent in INR (approx):</span>
                    <span className="font-bold text-amber-300">₹{Math.round(calcBudget * 95).toLocaleString("en-IN")} / mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300">Annual Estimated Living:</span>
                    <span className="font-bold text-emerald-400">CHF {calcBudget * 12} / year</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-white/10">
                    <span className="text-slate-300">Paid Internship Income Offset:</span>
                    <span className="font-bold text-white">Up to CHF 2,500 / mo</span>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="#counseling-form"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#da291c] hover:bg-red-700 text-white font-extrabold text-sm block shadow-lg shadow-red-600/30 transition-all"
                  >
                    Get Personalised Financial Planning
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          10. SWITZERLAND 4-SEASON WEATHER
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Weather in Switzerland"
            subtitle="A Moderate Central European Alpine Climate with Four Glorious Seasons"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-50 flex items-center justify-center">
                <SunIcon />
              </div>
              <h3 className="text-lg font-black text-slate-900">Summer</h3>
              <div className="text-2xl font-black text-amber-500 my-2">18℃ – 30℃</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Warm, sunny days ideal for swimming in Lake Zurich & Lake Geneva, mountain trekking, open-air festivals, and outdoor restaurant terraces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-50 flex items-center justify-center">
                <LeafIcon />
              </div>
              <h3 className="text-lg font-black text-slate-900">Autumn</h3>
              <div className="text-2xl font-black text-orange-500 my-2">8℃ – 20℃</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Golden alpine foliage, crisp mountain air, grape harvests in Lavaux vineyards, and mild temperatures perfect for university campus orientation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-sky-50 flex items-center justify-center">
                <SnowflakeIcon />
              </div>
              <h3 className="text-lg font-black text-slate-900">Winter</h3>
              <div className="text-2xl font-black text-sky-500 my-2">-5℃ – 5℃</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Snow-capped peaks, magical Christmas markets, world-class skiing and snowboarding in Zermatt, St. Moritz, and Verbier with cozy heated indoors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <BlossomIcon />
              </div>
              <h3 className="text-lg font-black text-slate-900">Spring</h3>
              <div className="text-2xl font-black text-emerald-500 my-2">8℃ – 18℃</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Blooming alpine wildflowers, melting mountain streams, pleasant weather for weekend city cycling, and renewed academic term momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          11. SWISS VISA ROADMAP (6 STEPS)
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Swiss Student Visa (National Visa D) Roadmap"
            subtitle="Step-by-Step Guidance from Umang Career Consultancy for a Hassle-Free Visa Approval"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VISA_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#da291c] hover:shadow-lg transition-all duration-300 relative group"
              >
                <div className="text-3xl font-black text-[#da291c]/25 group-hover:text-[#da291c] transition-colors mb-3">
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
          12. FREQUENTLY ASKED QUESTIONS (FAQS)
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions (FAQs)"
            subtitle="Essential Clarifications on Working, Post-Study Visas, Degree Recognition & Life in Switzerland"
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-[#0a1e38] hover:text-[#da291c] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDownIcon isOpen={isOpen} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
          13. TO MAKE YOUR STUDY IN SWITZERLAND HASSLE-FREE (CTA & FORM)
      ------------------------------------------------------------- */}
      <section
        id="counseling-form"
        className="py-16 sm:py-24 bg-gradient-to-br from-[#0a1e38] via-[#0d274c] to-[#122b54] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,41,28,0.2),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold tracking-wider text-rose-300">
                <span>HASSLE-FREE STUDY IN SWITZERLAND</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                To Make Your Study in Switzerland <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-200">Hassle-Free</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Plan your Switzerland study journey with Umang Career Consultancy. From selecting accredited Swiss universities and luxury hotel schools to SOP review, cantonal migration visa file prep, and accommodation booking — our experienced European education counselors guide you at every step.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Partnerships with Top Swiss Institutions</h4>
                    <p className="text-xs text-slate-300">Specialist admissions with EU Business School, GLION, SHMS, BHMS, HTMi, and more.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">End-to-End Swiss National Visa D Dossier Prep</h4>
                    <p className="text-xs text-slate-300">Comprehensive assistance with cantonal financial proof, motivation letters, and VFS appointments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Paid Internship & Accommodation Guidance</h4>
                    <p className="text-xs text-slate-300">Advice on campus residence packages, Swiss health insurance, and pre-departure checklists.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center gap-2 text-white font-bold text-base hover:text-rose-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#da291c] flex items-center justify-center shadow-lg">
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
                  Book Free Switzerland Profile Evaluation
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Get a comprehensive university eligibility, scholarship & visa feasibility assessment within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                    <h4 className="text-lg font-bold text-emerald-900">Thank You!</h4>
                    <p className="text-xs text-emerald-700">
                      Your Switzerland study inquiry has been received. Our senior European education consultant will connect with you shortly at {formData.phone || "+91 91731 86109"}.
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
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#da291c]"
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
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#da291c]"
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
                          placeholder="e.g. rahul@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#da291c]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your City / State *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                          placeholder="e.g. Ahmedabad, Gujarat"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#da291c]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Program</label>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData((prev) => ({ ...prev, course: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#da291c] bg-white"
                        >
                          <option value="Business & Management">Business & Management (BBA/MBA)</option>
                          <option value="Tourism & Hospitality">Tourism & Hospitality Management</option>
                          <option value="Culinary Arts">Culinary Arts & Fine Dining</option>
                          <option value="Law & International Law">Law & International Law</option>
                          <option value="Engineering & Precision Tech">Engineering & Precision Tech</option>
                          <option value="Biotechnology & Life Sciences">Biotechnology & Life Sciences</option>
                          <option value="Environmental Science">Environmental Science & Ecology</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Target Intake</label>
                        <select
                          value={formData.intake}
                          onChange={(e) => setFormData((prev) => ({ ...prev, intake: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#da291c] bg-white"
                        >
                          <option value="Fall (September) 2026">Fall (September) 2026</option>
                          <option value="Spring (February) 2027">Spring (February) 2027</option>
                          <option value="Fall (September) 2027">Fall (September) 2027</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred University or Questions?</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder="e.g. Interested in GLION / SHMS Hospitality or EU Business School MBA"
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#da291c]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#da291c] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-red-600/30 transition-all duration-300"
                    >
                      Book Free Profile Evaluation
                    </button>
                    <p className="text-center text-[11px] text-slate-400">
                      <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Official Swiss university and visa guidance.
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
