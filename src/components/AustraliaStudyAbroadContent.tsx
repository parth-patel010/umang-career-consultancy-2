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

/* Course Icons (Green stroke design matching agency identity) */
function CivilEngIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function ComputerIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function NursingIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v6m-3-3h6" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function SocialWorkIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function PsychologyIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ArchitectureIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  );
}

function ElectricalIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function SnowIcon() {
  return (
    <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m0-18l3 3m-3-3l-3 3m0 12l3 3m-3-3l-3-3M3 12h18m-18 0l3 3m-3-3l3-3m12 0l3 3m-3-3l-3 3" />
    </svg>
  );
}

function FlowerIcon() {
  return (
    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 2a4 4 0 00-4 4c0 1.5.8 2.8 2 3.5-1.2.7-2 2-2 3.5a4 4 0 008 0c0-1.5-.8-2.8-2-3.5 1.2-.7 2-2 2-3.5a4 4 0 00-4-4z" />
    </svg>
  );
}


/* -------------------------------------------------------------
   REUSABLE SECTION HEADER WITH STACKED DOUBLE DASHES & ANIMATION
------------------------------------------------------------- */
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
      className={`text-center mb-10 sm:mb-12 transition-all duration-700 ease-out transform ${
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

export default function AustraliaStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Computer Science & IT",
    level: "Master's Degree",
    intake: "February 2027 (Semester 1)",
    statePreference: "New South Wales (Sydney)",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  /* -------------------------------------------------------------
     DATA STRUCTURES
  ------------------------------------------------------------- */
  const topCourses = [
    {
      title: "Civil Engineering",
      icon: <CivilEngIcon />,
      desc: "Accredited by Engineers Australia (Washington Accord). High demand in infrastructure, megaprojects, urban railways, and mining projects across Australia.",
      popularSpecializations: ["Structural Engineering", "Geotechnical Engineering", "Transport Systems", "Water & Environmental Eng"],
    },
    {
      title: "Computer Science & IT",
      icon: <ComputerIcon />,
      desc: "World-class computing degrees accredited by the Australian Computer Society (ACS). High employability in Sydney, Melbourne, and Brisbane tech hubs.",
      popularSpecializations: ["Cybersecurity", "Artificial Intelligence & ML", "Software Development", "Cloud Architecture"],
    },
    {
      title: "Nursing & Healthcare",
      icon: <NursingIcon />,
      desc: "Direct path to registration with AHPRA / NMBA. Severe national healthcare workforce shortages offering robust career outcomes and PR pathways.",
      popularSpecializations: ["Registered Nurse (RN)", "Mental Health Nursing", "Critical Care", "Aged Care & Rehabilitation"],
    },
    {
      title: "Business & Management",
      icon: <BusinessIcon />,
      desc: "AACSB and EQUIS accredited MBA and management degrees with direct access to Australia's multi-trillion dollar Asian-Pacific trade economy.",
      popularSpecializations: ["Business Analytics", "Supply Chain Management", "International Management", "Entrepreneurship"],
    },
    {
      title: "Social Work",
      icon: <SocialWorkIcon />,
      desc: "Accredited by AASW (Australian Association of Social Workers). Hands-on field placements with substantial PR sponsorship and community demand.",
      popularSpecializations: ["Community Development", "Child & Family Welfare", "Mental Health Support", "Disability Advocacy"],
    },
    {
      title: "Education & Teaching",
      icon: <EducationIcon />,
      desc: "High priority shortage profession in Australia. Early childhood, primary, and secondary teaching degrees recognized across all Australian states.",
      popularSpecializations: ["Early Childhood Teaching", "Secondary Education (STEM)", "Special Education", "Educational Leadership"],
    },
    {
      title: "Psychology & Behavioral Science",
      icon: <PsychologyIcon />,
      desc: "APAC accredited psychology pathways preparing students for clinical practice, corporate HR consulting, mental health, and neurological research.",
      popularSpecializations: ["Clinical Psychology", "Organizational Psychology", "Cognitive Neuroscience", "Counseling"],
    },
    {
      title: "Accounting & Finance",
      icon: <FinanceIcon />,
      desc: "CPA Australia and CA ANZ accredited curriculum providing strong industry placements in major investment banks, FinTech, and Big Four firms.",
      popularSpecializations: ["Professional Accounting", "FinTech & Financial Modeling", "Investment Banking", "Auditing & Risk"],
    },
    {
      title: "Architecture & Design",
      icon: <ArchitectureIcon />,
      desc: "AACA certified programs focused on sustainable biophilic design, coastal urban planning, computational architecture, and digital BIM modeling.",
      popularSpecializations: ["Sustainable Urban Design", "Architectural Technology", "Interior Architecture", "Landscape Architecture"],
    },
    {
      title: "Electrical & Renewable Engineering",
      icon: <ElectricalIcon />,
      desc: "Pioneering Australia's clean energy transformation with solar grids, wind technology, robotics, smart power grids, and telecommunications.",
      popularSpecializations: ["Renewable Energy Systems", "Power Systems Engineering", "Robotics & Mechatronics", "Telecommunications"],
    },
  ];

  const whyStudyAustralia = [
    {
      title: "Globally Recognised Universities",
      desc: "Home to the world-famous Group of Eight (Go8). 7 Australian universities rank among the global top 100 in QS and THE rankings.",
      badge: "World Top 100",
    },
    {
      title: "Subclass 485 Graduate Work Visa",
      desc: "Eligible graduates gain 2 to 3 years of post-study work rights. Indian graduates under the Australia–India ECTA receive up to 3 to 4 years.",
      badge: "2 – 4 Years PSW",
    },
    {
      title: "Work 48 Hours Per Fortnight",
      desc: "Work up to 48 hours per fortnight during term time and unrestricted full-time hours during university breaks, earning top minimum wages.",
      badge: "48 Hrs / Fortnight",
    },
    {
      title: "Australia–India ECTA Benefits",
      desc: "Special bilateral arrangements providing extended post-study work rights and priority mobility for Indian graduates in STEM & ICT.",
      badge: "ECTA Advantage",
    },
    {
      title: "High Standard of Living & Safety",
      desc: "Melbourne, Sydney, Brisbane, and Adelaide consistently rank among the world's most liveable, safe, and multicultural cities.",
      badge: "World's Most Liveable",
    },
    {
      title: "Generous Scholarships",
      desc: "Billions in funding including Australia Awards, Destination Australia, and university-specific merit discounts of 20% to 50% tuition.",
      badge: "Merit Grants",
    },
    {
      title: "Regional Study Migration Boost",
      desc: "Studying in designated regional cities (Perth, Adelaide, Gold Coast, Wollongong, Hobart) unlocks extra 1-2 years of post-study work visas.",
      badge: "+1-2 Yrs Regional",
    },
    {
      title: "Unrivaled Outdoor & Coastal Lifestyle",
      desc: "World-class public infrastructure, clean pristine beaches, vibrant arts festivals, and year-round outdoor sports and sunshine.",
      badge: "Coastal Lifestyle",
    },
  ];

  const universities = [
    {
      name: "University of Melbourne",
      state: "Victoria (Melbourne)",
      tag: "Group of Eight (Go8) • Ranked #1 in Australia",
      specialty: "Medicine, Business, Law, Computer Science, Engineering",
      ranking: "QS World Top 15",
    },
    {
      name: "University of Sydney",
      state: "New South Wales (Sydney)",
      tag: "Group of Eight (Go8) • Founded 1850",
      specialty: "Nursing, Architecture, Engineering, Finance, Arts",
      ranking: "QS World Top 20",
    },
    {
      name: "University of New South Wales (UNSW Sydney)",
      state: "New South Wales (Sydney)",
      tag: "Group of Eight (Go8) • Engineering Powerhouse",
      specialty: "Civil Engineering, AI, Solar Tech, Accounting, Law",
      ranking: "QS World Top 20",
    },
    {
      name: "Australian National University (ANU)",
      state: "ACT (Canberra)",
      tag: "Group of Eight (Go8) • National Research Leader",
      specialty: "Politics & Public Policy, Philosophy, Physics, International Relations",
      ranking: "QS World Top 35",
    },
    {
      name: "Monash University",
      state: "Victoria (Melbourne)",
      tag: "Group of Eight (Go8) • Global Campus Network",
      specialty: "Pharmacy & Pharmacology (World #2), IT, Business, Education",
      ranking: "QS World Top 40",
    },
    {
      name: "University of Queensland (UQ)",
      state: "Queensland (Brisbane)",
      tag: "Group of Eight (Go8) • Research Pioneer",
      specialty: "Biotechnology, Environmental Science, Mining, Sports Science",
      ranking: "QS World Top 45",
    },
    {
      name: "University of Western Australia (UWA)",
      state: "Western Australia (Perth)",
      tag: "Group of Eight (Go8) • Mining & Energy Hub",
      specialty: "Petroleum & Mining Eng, Agriculture, Oceanography, Data Science",
      ranking: "QS World Top 75",
    },
    {
      name: "University of Adelaide",
      state: "South Australia (Adelaide)",
      tag: "Group of Eight (Go8) • 5 Nobel Laureates",
      specialty: "Wine Science, Dentistry, Computer Science, Aerospace",
      ranking: "QS World Top 90",
    },
    {
      name: "Deakin University",
      state: "Victoria (Melbourne & Geelong)",
      tag: "Top Rated for Student Satisfaction",
      specialty: "Sports Management, Nursing, Cybersecurity, Business Analytics",
      ranking: "World Top 200",
    },
    {
      name: "University of Wollongong (UOW)",
      state: "New South Wales (Wollongong & Sydney)",
      tag: "Regional Study & Tech Innovation Leader",
      specialty: "Materials Engineering, Information Technology, Social Work",
      ranking: "World Top 200",
    },
  ];

  const states = [
    {
      name: "NEW SOUTH WALES",
      capital: "Sydney",
      tagline: "Global Financial Metropolis & Harbour City",
      desc: "Home to Sydney, Australia's largest economy and financial capital. Massive concentration of universities, multinational corporate HQs, tech startups, and Bondi Beach.",
      vibe: "Energetic, Cosmopolitan & Coastal",
      costRange: "AUD $1,800 – $3,200/mo",
    },
    {
      name: "VICTORIA",
      capital: "Melbourne",
      tagline: "Cultural, Arts & Education Capital",
      desc: "Celebrated for Melbourne's iconic laneways, coffee culture, street art, and world-class universities like Unimelb and Monash. Voted the world's most liveable city for consecutive years.",
      vibe: "Artistic, Academic & Multi-Cuisine",
      costRange: "AUD $1,700 – $3,000/mo",
    },
    {
      name: "QUEENSLAND",
      capital: "Brisbane",
      tagline: "Sunshine State & 2032 Olympic Host",
      desc: "Boasts year-round tropical sunshine across Brisbane and the Gold Coast. Booming infrastructure, biotech investments, and close proximity to the Great Barrier Reef.",
      vibe: "Subtropical, Relaxed & Expanding",
      costRange: "AUD $1,500 – $2,600/mo",
    },
    {
      name: "WESTERN AUSTRALIA",
      capital: "Perth",
      tagline: "Resource Powerhouse & Regional Advantage",
      desc: "Perth is Australia's sunniest capital, operating on the same time zone as 60% of the world's population. Strong mining, engineering, and tech economy with regional visa perks.",
      vibe: "Prosperous, Scenic & High-Paying",
      costRange: "AUD $1,500 – $2,500/mo",
    },
    {
      name: "SOUTH AUSTRALIA",
      capital: "Adelaide",
      tagline: "Affordable Heritage, Space & Defense Hub",
      desc: "A planned 20-minute parkland city offering high quality of life, 15% lower living costs than Sydney, premier defense and space industries, and designated regional migration points.",
      vibe: "Compact, Green & High-Value",
      costRange: "AUD $1,350 – $2,200/mo",
    },
    {
      name: "TASMANIA",
      capital: "Hobart",
      tagline: "Island Haven, Pure Nature & Research",
      desc: "An island state renowned for pristine wilderness, clean air, maritime research, and vocational institutes with attractive regional permanent residency pathways.",
      vibe: "Peaceful, Pristine & Close-Knit",
      costRange: "AUD $1,250 – $2,000/mo",
    },
  ];

  const livingCosts = [
    {
      item: "Accommodation (On-Campus, Flatshare or Studio)",
      cost: "AUD $800 – $3,200+",
      desc: "Shared student apartments range from AUD $200–$450/wk; inner-city private studios AUD $500–$800/wk.",
      icon: "home",
    },
    {
      item: "Food & Groceries",
      cost: "AUD $400 – $1,000+",
      desc: "Supermarkets (Woolworths, Coles, Aldi) & local fruit markets like Queen Victoria Market.",
      icon: "groceries",
    },
    {
      item: "Public Transportation",
      cost: "AUD $100 – $250+",
      desc: "Opal (Sydney), myki (Melbourne), and Translink (Brisbane) with tertiary student fare discounts.",
      icon: "transport",
    },
    {
      item: "Internet & Mobile",
      cost: "AUD $30 – $80+",
      desc: "5G mobile SIMs (Telstra, Optus, Vodafone) with generous data allocations.",
      icon: "phone",
    },
    {
      item: "Utilities (Gas, Electricity, Water)",
      cost: "AUD $100 – $200+",
      desc: "Often included in managed student accommodation; split among flatmates in private rentals.",
      icon: "utilities",
    },
    {
      item: "Personal & Leisure",
      cost: "AUD $150 – $500+",
      desc: "Weekend road trips, beach cafes, fitness gym memberships, cinema, and concerts.",
      icon: "leisure",
    },
  ];

  const weatherSeasons = [
    {
      season: "Summer",
      timing: "December – February",
      temp: "25°C – 40°C",
      icon: <SunIcon />,
      desc: "Sunny beach weather across Sydney, Melbourne, Perth, and Brisbane. Ideal for surfing, coastal barbecues, and the Australian Open tennis tournament.",
      bgClass: "from-amber-500/10 to-orange-500/10 border-amber-200",
    },
    {
      season: "Autumn",
      timing: "March – May",
      temp: "17°C – 30°C",
      icon: <LeafIcon />,
      desc: "Mild, sunny days with cool evenings. Golden autumn leaves across Adelaide and Melbourne parks, perfect for outdoor university campus activities.",
      bgClass: "from-orange-500/10 to-amber-600/10 border-orange-200",
    },
    {
      season: "Winter",
      timing: "June – August",
      temp: "5°C – 20°C",
      icon: <SnowIcon />,
      desc: "Mild in the north (Queensland remains warm and sunny), while southern states (Melbourne, Canberra, Hobart) experience crisp chilly days and snow in alpine ranges.",
      bgClass: "from-sky-500/10 to-blue-500/10 border-sky-200",
    },
    {
      season: "Spring",
      timing: "September – November",
      temp: "15°C – 25°C",
      icon: <FlowerIcon />,
      desc: "Vibrant purple Jacaranda blossoms blanket university campuses across Sydney, Brisbane, and Adelaide. Refreshing temperatures and outdoor cultural festivals.",
      bgClass: "from-emerald-500/10 to-teal-500/10 border-emerald-200",
    },
  ];

  const faqs = [
    {
      q: "Is English proficiency required to study in Australia?",
      a: "Yes. Most international students must demonstrate English-language proficiency for both university admission and the Australian Student visa (subclass 500). Commonly accepted exams include IELTS, PTE Academic, and TOEFL iBT. Minimum score bands typically range from 6.0 to 6.5 for Bachelor's and 6.5 to 7.0 for Master's and healthcare/teaching programs.",
    },
    {
      q: "Can international students work while studying in Australia?",
      a: "Yes. Student visa (subclass 500) holders are permitted to work up to 48 hours per fortnight during official university study terms and semesters. During scheduled vacations and holidays, students can work unrestricted full-time hours. Master's by research and Doctoral students have unlimited work rights once their course commences.",
    },
    {
      q: "How long can I stay in Australia after graduation (Subclass 485)?",
      a: "Eligible graduates can apply for the Temporary Graduate visa (subclass 485). Under the Post-Higher Education Work stream: Bachelor's degree: 2 years; Master's coursework: 2 years (extended to 3 years for Indian nationals under the Australia–India ECTA agreement); Master's by research: 3 years; Doctoral degree: 3 years (extended to 4 years for Indian nationals). Studying in designated regional areas grants an extra 1 to 2 years.",
    },
    {
      q: "Can family members accompany me on an Australian Student visa?",
      a: "Yes. You can include immediate family members (spouse/de facto partner and dependent children under 18) in your student visa application or have them join you subsequent to your arrival. Spouses of Master's and PhD students generally enjoy full-time unrestricted work rights.",
    },
    {
      q: "What documents and financial capacity are required for an Australian Student Visa?",
      a: "Key requirements include: a valid passport, an electronic Confirmation of Enrolment (CoE) from a registered CRICOS provider, Overseas Student Health Cover (OSHC) policy, English proficiency test results, Genuine Student (GS) declaration, and proof of financial capacity. Study Australia mandates a minimum living fund requirement of AUD $29,710 plus one year's tuition and travel costs.",
    },
    {
      q: "What is the Australian Student Visa application fee?",
      a: "Effective from 1 July 2026, the Australian Department of Home Affairs increased the Student visa (subclass 500) base application charge to AUD $2,500, subject to specific concessions and updates. Umang Career Consultancy ensures your visa file is rigorously audited prior to submission.",
    },
    {
      q: "Can I apply for permanent residency (PR) after studying in Australia?",
      a: "Studying in Australia does not automatically guarantee permanent residency. However, graduates in priority skills shortage sectors (such as Nursing, Engineering, IT, Teaching, Social Work, and Trades) can accumulate immigration points via qualifications, Australian study in regional areas, professional years, and English scores to apply for Skilled Independent (Subclass 189), Skilled Nominated (Subclass 190), or Employer Sponsored visas.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
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
          1. HERO SECTION (AUSTRALIA GREEN/GOLD RIBBONS + METRICS + HARBOUR)
      ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1e38] via-[#0d284d] to-[#0a1e38] text-white pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Subtle Decorative Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22c55e]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e52928]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <Link href="/study-abroad" className="hover:text-white transition-colors">
              Study Abroad
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-[#22c55e] font-semibold">Australia</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-ping" />
                <span className="text-slate-100 font-semibold tracking-wide">
                  Top Global Destination • Group of Eight (Go8) & CRICOS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#22c55e]">Australia</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#22c55e] mt-2">
                  World-Class Degrees & 2 to 4-Year Graduate Visas
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                Australia is a premier global destination for international students, offering internationally recognised qualifications, seven of the world&apos;s top 100 universities, generous post-study work rights under the Australia–India ECTA, and an enviable outdoor lifestyle.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">Top 100</div>
                  <div className="text-xs text-slate-300 font-medium">7 Go8 Universities</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#22c55e]">48 Hrs</div>
                  <div className="text-xs text-slate-300 font-medium">Fortnight Work</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#e52928]">2–4 Years</div>
                  <div className="text-xs text-slate-300 font-medium">Graduate Visa (PSW)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">ECTA</div>
                  <div className="text-xs text-slate-300 font-medium">India Benefits</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#consultation"
                  className="px-7 py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#c9201f] text-white shadow-lg shadow-red-900/30 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  Apply for Australia 2026/27
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all text-center"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual (Student Portrait with Aussie Credentials Badge) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md group anim-gentle-float">
                <Image
                  src="/australia-hero.png"
                  alt="International Student Studying in Australia with University Folders"
                  fill
                  className="object-cover p-1 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Micro Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 shadow-xl flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00843D] to-[#FFCD00] flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
                    AU
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold flex items-center gap-1.5">
                      <span>CRICOS & TEQSA Accredited</span>
                      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    </div>
                    <p className="text-slate-300 text-[11px] leading-tight mt-0.5">
                      Group of Eight (Go8) & Australian Technology Network
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. ABOUT AUSTRALIA (KEY HIGHLIGHTS & SYDNEY OPERA HOUSE VISUAL)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Landmark Visual */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/destinations/australia.jpg"
                  alt="Sydney Opera House and Harbour Bridge Ferry in Australia"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#00843D] text-[#FFCD00] text-xs font-bold rounded-md uppercase tracking-wider">
                    Sydney, Australia
                  </span>
                  <h3 className="text-xl font-bold mt-2">Sydney Opera House & Harbour</h3>
                  <p className="text-slate-200 text-xs mt-1">
                    Connecting global innovation with an iconic multicultural lifestyle
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
                <span>Official Language: English</span>
                <span>Currency: Australian Dollar (AUD / $)</span>
              </div>
            </div>

            {/* Right Information Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-[#00843D] text-xs font-bold tracking-wider uppercase">
                Land Down Under
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                About Australia & Its Higher Education Ecosystem
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Australia is a country and continent located between the Indian and Pacific Oceans. It has earned an international reputation for academic rigor, groundbreaking research, high-quality student welfare protections (ESOS Act), and modern urban infrastructure across all six states and territories.
              </p>

              {/* 9 Core Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "A nation and continent between the Indian & Pacific Oceans",
                  "Official language: English (immersive global communication)",
                  "Multicultural, welcoming, and safe international environment",
                  "Robust research ecosystem with multi-billion dollar funding",
                  "High-tech infrastructure across biotechnology, engineering & AI",
                  "Diverse economy spanning finance, healthcare, mining & tech",
                  "High-standard international student services & ESOS protection",
                  "Cities offering unique lifestyles from vibrant hubs to regional coastlines",
                  "Subclass 500 visa offering legal part-time work rights",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. TOP COURSES IN AUSTRALIA (10 DISCIPLINES)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Courses in Australia for International Students" subtitle="Australian universities provide cutting-edge curricula aligned with industry skills shortages, professional accreditations, and long-term career pathways." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-[#22c55e]/40 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors mb-2.5">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {course.desc}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Popular Specializations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.popularSpecializations.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. WHY STUDY IN AUSTRALIA?
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Study in Australia?" subtitle="Australia offers international students a broad selection of courses, internationally recognised qualifications, and unmatched opportunities to gain academic and practical experience." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyAustralia.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-[#e52928]/10 text-[#e52928] font-bold text-xs mb-3">
                    {item.badge}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1e38] mb-2 group-hover:text-[#22c55e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Australia-India ECTA Callout Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#0a1e38] via-[#0d2a52] to-[#00843D] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <span className="px-3 py-1 rounded-md bg-[#FFCD00] text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                  Australia–India ECTA Special Arrangement
                </span>
                <h4 className="text-2xl font-bold text-white">
                  Extended Post-Study Work Visas for Indian Graduates
                </h4>
                <p className="text-sm text-slate-200 max-w-3xl leading-relaxed">
                  Under the Australia-India Economic Cooperation and Trade Agreement (ECTA), eligible Indian graduates enjoy extended Temporary Graduate visa (subclass 485) stay periods: up to <strong>3 years for Master&apos;s degrees</strong> and up to <strong>4 years for Doctoral (PhD) degrees</strong>, with additional years available in regional campuses.
                </p>
              </div>
              <a href="tel:+919173186109" className="anim-phone-ring px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#1ea750] text-white font-bold text-sm shadow-md transition-all shrink-0 whitespace-nowrap"
              >
                Check ECTA Eligibility
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. POPULAR STATES & TERRITORIES IN AUSTRALIA
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Popular States & Territories in Australia" subtitle="Each Australian state offers distinct economic specializations, university campuses, climates, and regional post-study migration advantages." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {states.map((state, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 uppercase">
                      Capital: {state.capital}
                    </span>
                    <span className="text-xs font-bold text-[#e52928] bg-red-50 px-2.5 py-1 rounded-md">
                      {state.costRange}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0a1e38] mb-1">{state.name}</h3>
                  <div className="text-xs font-semibold text-[#22c55e] mb-3">
                    {state.tagline}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {state.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Lifestyle & Vibe:</span>
                  <span className="font-semibold text-slate-800">{state.vibe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. TOP UNIVERSITIES & INSTITUTIONS IN AUSTRALIA
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Universities & Institutions in Australia" subtitle="Umang Career Consultancy can help students compare institutions based on their academic profile, preferred course, budget, location and career plans." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {universities.map((uni, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#22c55e] hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a1e38] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#0a1e38] truncate">
                      {uni.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded-full">
                      <svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>{uni.state}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#e52928] mb-1.5">
                    {uni.tag} • {uni.ranking}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-700">Specializations:</span> {uni.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. TUITION FEES, COST OF LIVING & VISA FINANCIAL CAPACITY
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Tuition Fees Table */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold tracking-wider uppercase">
                Annual Course Investments
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Australia Tuition Fees
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tuition varies according to the education provider, study level, course and location. Study Australia notes that fees can differ substantially between programs and providers.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0a1e38] text-white text-xs uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="px-5 py-4">Study Level</th>
                        <th className="px-5 py-4">Indicative Annual Tuition (AUD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Bachelor&apos;s Degree</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">AUD $20,000 – $55,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Master&apos;s Degree</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">AUD $22,000 – $50,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Diploma / VET / TAFE</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">AUD $4,000 – $27,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">PhD / Doctoral Studies</td>
                        <td className="px-5 py-4 text-emerald-600 font-semibold">AUD $20,000 – $45,000+</td>
                      </tr>
                      <tr className="bg-slate-50/80">
                        <td className="px-5 py-3.5 font-bold text-slate-600 text-xs">Main Intakes</td>
                        <td className="px-5 py-3.5 font-bold text-[#0a1e38] text-xs">
                          February (Semester 1) & July (Semester 2); select October/November
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Student Visa Financial Capacity Notice */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-xs text-amber-900 leading-relaxed">
                <div className="font-extrabold text-sm text-amber-950 flex items-center gap-2">
                  <svg className="w-4 h-4 inline mr-1 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> Student Visa (Subclass 500) Financial Capacity Requirement
                </div>
                <p>
                  Study Australia mandates a minimum living fund capacity figure of <strong>AUD $29,710</strong> for the student visa. Applicants must provide evidence of funds covering this living cost plus course tuition and return airfare.
                </p>
                <p className="text-amber-800">
                  Note: The Student visa application charge increased to <strong>AUD $2,500</strong> from 1 July 2026 (subject to applicable concessions).
                </p>
              </div>
            </div>

            {/* Right: Monthly Cost of Living */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-[#e52928] text-xs font-bold tracking-wider uppercase">
                Living Expenses
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Monthly Cost of Living
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Living costs vary significantly between cities, accommodation types and individual lifestyles. Study Australia recommends using its cost-of-living calculator and checking the actual costs of your intended study location.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {livingCosts.map((cost, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-[#e52928] flex items-center justify-center shrink-0"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                      <span className="text-sm font-extrabold text-[#e52928]">{cost.cost}</span>
                    </div>
                    <div className="text-xs font-bold text-[#0a1e38] mb-1">{cost.item}</div>
                    <p className="text-[11px] text-slate-500 leading-snug">{cost.desc}</p>
                  </div>
                ))}
              </div>

              {/* Health Insurance & Minimum Wage Callout */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                    Overseas Student Health Cover (OSHC)
                  </div>
                  <div className="text-xs text-emerald-700 mt-0.5">
                    Mandatory comprehensive medical insurance covering doctor visits, hospital & ambulances.
                  </div>
                </div>
                <div className="text-xs font-black text-emerald-900 bg-white px-3 py-1.5 rounded-lg border border-emerald-300 shrink-0">
                  Min. Wage: AUD $24.10/hr
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          8. WEATHER IN AUSTRALIA (FOUR DISTINCT SEASONS)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Weather in Australia: Four Distinct Seasons" subtitle="Australia&apos;s climate varies significantly between regions, featuring sunny temperate coasts, tropical northern sunshine, and crisp southern winters." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherSeasons.map((season, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-b ${season.bgClass} border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-xs">{season.icon}</div>
                    <span className="text-xs font-bold text-slate-500 uppercase">{season.timing}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0a1e38] mb-1">{season.season}</h3>
                  <div className="text-lg font-black text-[#e52928] mb-3">{season.temp}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{season.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 text-xs text-slate-400">
            * Note: Australia is in the Southern Hemisphere, meaning summer runs from December to February and winter from June to August.
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          9. 6-STEP ADMISSION & AUSTRALIA STUDENT VISA (SUBCLASS 500)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Your 6-Step Admission & Subclass 500 Visa Roadmap" subtitle="Umang Career Consultancy guides you from university selection to electronic Confirmation of Enrolment (CoE) and Department of Home Affairs visa grant." variant="dark" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Course Discovery & Eligibility Assessment",
                desc: "We analyze your academic marks, English test score (IELTS/PTE), budget, and career goals across CRICOS accredited Australian universities.",
              },
              {
                step: "02",
                title: "University Application & Genuine Student (GS)",
                desc: "Submitting your application dossier along with a compelling Genuine Student (GS) statement outlining your academic intent and economic ties.",
              },
              {
                step: "03",
                title: "Letter of Offer & Initial Tuition Deposit",
                desc: "Receiving your conditional or unconditional Letter of Offer from the university and transferring the initial semester tuition deposit.",
              },
              {
                step: "04",
                title: "Electronic Confirmation of Enrolment (eCoE) & OSHC",
                desc: "Securing your official eCoE and activating mandatory Overseas Student Health Cover (OSHC) for the complete duration of your studies.",
              },
              {
                step: "05",
                title: "Student Visa (Subclass 500) Online Filing",
                desc: "Lodging your visa file via ImmiAccount with verified financial evidence (AUD $29,710), medical health examination, and biometrics appointment.",
              },
              {
                step: "06",
                title: "Pre-Departure & Australian Airport Arrival",
                desc: "Forex currency card setup, booking student accommodation, packing guidance, and flight ticketing with Sydney, Melbourne or Brisbane airport pick-up.",
              },
            ].map((stepItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#22c55e]/50 backdrop-blur-sm transition-all duration-300"
              >
                <div className="text-3xl font-black text-[#22c55e] mb-2">{stepItem.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{stepItem.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          10. FREQUENTLY ASKED QUESTIONS (FAQS)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions About Studying in Australia" subtitle="Clear, transparent answers regarding visas, ECTA post-study work rights, family accompaniment, and permanent residency options." />

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base text-[#0a1e38] focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDownIcon isOpen={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          11. CONSULTATION FORM & CONTACT CALLOUT
      ------------------------------------------------------------- */}
      <section id="consultation" className="py-16 md:py-24 bg-slate-100 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left CTA Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0a1e38] to-[#123661] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-md bg-[#e52928] text-white text-xs font-bold uppercase tracking-wider">
                  Start Your Journey
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Start Your Study Journey in Australia
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Get personalized guidance for course selection, university applications, Genuine Student (GS) statements, financial capacity audits, and your Australia Student visa.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Group of Eight (Go8) & ATN University Matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Genuine Student (GS) Statement Assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Financial Evidence & Education Loan Guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Post-Study Work (Subclass 485) Strategy</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-xs text-slate-300">Talk to Umang Career Consultancy Today</div>
                <a href="tel:+919173186109" className="anim-phone-ring text-lg font-bold text-[#22c55e] hover:underline flex items-center gap-2"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-[#22c55e] rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <h4 className="text-2xl font-bold text-[#0a1e38]">Thank You!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Your Australia study abroad inquiry has been received. Our certified Australian education counselor will contact you at {formData.phone || "your number"} shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#0a1e38] text-white text-xs font-bold hover:bg-[#123661] transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-xl font-bold text-[#0a1e38] mb-1">
                    Book Free Australia Consultation
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Fill in your details below and our Australian admissions specialist will contact you within 24 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Varun Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="varun@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Study Level
                      </label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData((prev) => ({ ...prev, level: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                      >
                        <option>Master&apos;s Degree (Coursework)</option>
                        <option>Master&apos;s Degree (Research)</option>
                        <option>Bachelor&apos;s Degree (3-4 Years)</option>
                        <option>Doctoral Degree (PhD)</option>
                        <option>Diploma / VET / TAFE Pathway</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Course Area
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData((prev) => ({ ...prev, course: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                      >
                        <option>Computer Science & IT</option>
                        <option>Civil Engineering</option>
                        <option>Nursing & Healthcare</option>
                        <option>Business & Management</option>
                        <option>Social Work</option>
                        <option>Education & Teaching</option>
                        <option>Psychology</option>
                        <option>Accounting & Finance</option>
                        <option>Architecture & Design</option>
                        <option>Electrical Engineering</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred State / City
                      </label>
                      <select
                        value={formData.statePreference}
                        onChange={(e) => setFormData((prev) => ({ ...prev, statePreference: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                      >
                        <option>New South Wales (Sydney)</option>
                        <option>Victoria (Melbourne)</option>
                        <option>Queensland (Brisbane & Gold Coast)</option>
                        <option>Western Australia (Perth)</option>
                        <option>South Australia (Adelaide)</option>
                        <option>Tasmania (Hobart)</option>
                        <option>Open to Recommendations / Regional Perks</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Intake
                    </label>
                    <select
                      value={formData.intake}
                      onChange={(e) => setFormData((prev) => ({ ...prev, intake: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                    >
                      <option>February 2027 (Semester 1 - Major Intake)</option>
                      <option>July 2026 (Semester 2)</option>
                      <option>July 2027 (Semester 2)</option>
                      <option>October / November 2026</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Any questions or specific requirements?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="e.g. Can you explain the Australia-India ECTA 3-year master's stay-back rule and PR pathways?"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#ca2221] text-white shadow-lg shadow-red-900/20 transition-all text-sm uppercase tracking-wider"
                  >
                    Submit Free Australia Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
