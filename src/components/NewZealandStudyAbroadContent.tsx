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

/* New Zealand Flag Badge */
function NZFlagBadge() {
  return (
    <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
      <rect width="60" height="42" fill="#012169" />
      <rect width="30" height="21" fill="#00247d" />
      <path d="M0 0L30 21M30 0L0 21" stroke="#fff" strokeWidth="4" />
      <path d="M0 0L30 21M30 0L0 21" stroke="#cc142b" strokeWidth="2" />
      <path d="M15 0v21M0 10.5h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v21M0 10.5h30" stroke="#cc142b" strokeWidth="3.5" />
      <circle cx="45" cy="10" r="2.2" fill="#cc142b" stroke="#fff" strokeWidth="0.8" />
      <circle cx="52" cy="18" r="2" fill="#cc142b" stroke="#fff" strokeWidth="0.8" />
      <circle cx="46" cy="28" r="2.2" fill="#cc142b" stroke="#fff" strokeWidth="0.8" />
      <circle cx="40" cy="20" r="1.8" fill="#cc142b" stroke="#fff" strokeWidth="0.8" />
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
const WHY_CHOOSE_NZ = [
  {
    title: "Universally Ranked Universities",
    desc: "Graduate from world-class institutions where every single university ranks highly in global academic listings.",
    badge: "Top 2% Worldwide",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "High Employability & In-Demand Skills",
    desc: "Align your education with New Zealand’s 'Green List' to target high-priority career roles in sectors like technology, engineering, and healthcare.",
    badge: "Green List Careers",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "India-NZ Free Trade Agreement Perks",
    desc: "Benefit from exclusive new immigration pathways, extended visa validity, and guaranteed long-term work rights designed specifically for Indian graduates.",
    badge: "India-NZ FTA Perks",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Outstanding Safety and Lifestyle",
    desc: "Experience the unparalleled peace, safety, and vibrant student-friendly culture of dynamic metropolitan hubs like Auckland, Wellington, and Christchurch.",
    badge: "#4 Global Peace Index",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const LATEST_INZ_UPDATES = [
  {
    title: "Unified Master’s Work Hours",
    desc: "All new Master's students, including those in Master's-by-Research programs, are subject to a standard part-time cap of up to 25 hours per week during active semesters and unlimited full-time hours during scheduled academic holidays.",
    badge: "25h / Week Cap",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Stringent English Language Checks",
    desc: "INZ visa officers have drastically strengthened their instructions regarding language skills. English proficiency is now a major deciding factor for visa validation; our experts ensure your IELTS or PTE scores are bulletproof.",
    badge: "IELTS & PTE Scrutiny",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Extended Grace Period",
    desc: "Eligible students now receive a comfortable 2-month grace visa extension after their official course completion date—up from just 1 month—giving you ample time to transition or lodge your post-study paperwork.",
    badge: "2-Month Transition Grace",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Enhanced Post-Study & Short-Term Visas",
    desc: "Under the latest rules: Master's Graduates receive an automatic 3-year Post-Study Work Visa; Indian PhD Graduates are now eligible for an extended 4-year post-study work visa under the FTA; Graduate Diploma (Level 7) holders now qualify for a 1-year open work visa if they hold a prior Bachelor's degree; other Level 5 to 7 graduates can take advantage of the brand-new 6-month Short-Term Graduate Work Visa to launch their local job search.",
    badge: "3–4 Yrs PSWV & FTA",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const KEY_REQUIREMENTS = [
  {
    title: "Verified Offer of Place",
    desc: "Securing your official confirmation from an approved, compliant Kiwi university or polytechnic.",
    badge: "Official Kiwi Offer",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Airtight Financial Proofs & FTS",
    desc: "Guiding you flawlessly through required living expense thresholds (at least NZ$ 20,000 per year) and structuring secure Funds Transfer Scheme (FTS) accounts.",
    badge: "NZ$ 20,000 / Yr & FTS",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Genuine Student (GS) Intent Statements",
    desc: "Assisting you in drafting a powerful, fact-based Statement of Purpose (SOP) that highlights your career objectives and commitment to compliance.",
    badge: "Fact-Based GS SOP",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "E-Medical and Police Verification",
    desc: "Seamlessly scheduling your digital health exams and obtaining your required Police Clearance Certificates (PCC).",
    badge: "e-Medical & PCC",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const SUCCESS_PATHWAY = [
  {
    step: "01",
    title: "Career Profiling & Green List Mapping",
    desc: "Pairing your profile with specific courses that naturally unlock New Zealand's best post-study career options.",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Academic Dossier Composition",
    desc: "Formatting highly persuasive CVs, recommendation letters, and SOPs that attract academic panels.",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Fee & FTS Management",
    desc: "Safely routing your tuition payments and setting up authorized banking channels for living costs.",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Portal Application Lodgement",
    desc: "Submitting your Fee-Paying Student Visa onto the Immigration Online portal with zero processing flaws.",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Mock Embassy Interview Prep",
    desc: "Conducting intense, one-on-one mock interview drills so you can speak to visa officers with absolute conviction.",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Pre-Departure Orientation",
    desc: "Empowering you with practical checklists for your flight, initial student housing, currency exchange, and cultural adjustment.",
    icon: (
      <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const TOP_COURSES = [
  { name: "MBA", category: "Business & Leadership", tag: "Triple-Accredited" },
  { name: "Accounting & Finance", category: "Commerce & Banking", tag: "CPA / CAANZ" },
  { name: "Hotel Management", category: "Hospitality & Tourism", tag: "Global Industry" },
  { name: "Sports Management", category: "Athletics & Recreation", tag: "World Rugby Hub" },
  { name: "IT & Computer Science", category: "Technology & Software", tag: "High Demand" },
  { name: "Civil Engineering", category: "Engineering & Construction", tag: "Green List Tier 1" },
  { name: "Artificial Intelligence", category: "Data Science & Machine Learning", tag: "Cutting-Edge R&D" },
  { name: "Cloud Computing", category: "Enterprise Infrastructure", tag: "Booming Sector" },
  { name: "Animation & Web Design", category: "Digital Media & VFX", tag: "Wētā FX Capital" },
  { name: "Medicine", category: "Healthcare & Surgery", tag: "Otago & Auckland" },
  { name: "Nursing", category: "Clinical Healthcare", tag: "Green List Fast-Track" },
  { name: "Agriculture", category: "Agri-Tech & Dairy Science", tag: "World #1 Dairy Exporter" },
];

const WHY_NZ = [
  {
    title: "Globally Recognised Qualifications",
    desc: "All 8 New Zealand state universities are ranked in the top 2% worldwide by QS World University Rankings, delivering prestigious degrees recognized across Europe, USA, UK, and Asia.",
  },
  {
    title: "Research, Innovation & Practical Learning",
    desc: "Hands-on, project-based curricula connecting students with state-of-the-art research centers, Crown Research Institutes (CRIs), and dynamic tech incubators.",
  },
  {
    title: "Wide Range of Study Options",
    desc: "Broad academic spectrum spanning 8 public universities, 16 regional Te Pūkenga institutes of technology, and accredited Private Training Establishments (PTEs).",
  },
  {
    title: "Work While Studying",
    desc: "International students on a student visa can legally work up to 20 hours per week during academic semesters and full-time (up to 40 hours) during scheduled vacations.",
  },
  {
    title: "Post-Study Work Opportunities",
    desc: "Eligible graduates can secure an open Post-Study Work Visa (PSWV) for up to 3 years to gain vital international work experience with New Zealand employers.",
  },
  {
    title: "Family & Spouse Accompanying Privileges",
    desc: "Students pursuing eligible Master's degrees or Green List qualifications can bring their spouse on an Open Work Visa and children with domestic student school access.",
  },
  {
    title: "Balanced Academic Life & Outdoor Adventures",
    desc: "Pristine natural environment offering snow skiing, world-class trekking, coastal surfing, and clean, uncrowded student cities with friendly Kiwi hospitality.",
  },
  {
    title: "PhD at Domestic Kiwi Tuition Rates",
    desc: "International doctoral candidates in New Zealand pay the exact same subsidized tuition fees as domestic Kiwi students (~NZD 6,500–9,000/year) with full work rights.",
  },
];

const REGIONS = [
  {
    id: "auckland",
    name: "AUCKLAND",
    title: "Auckland Region",
    desc: "Explore study opportunities in Auckland. New Zealand's economic, financial, and tech powerhouse. Home to The University of Auckland and Auckland University of Technology (AUT).",
    tag: "Metropolitan Tech Hub",
  },
  {
    id: "new-plymouth",
    name: "NEW PLYMOUTH",
    title: "Taranaki Region",
    desc: "Explore study opportunities in New Plymouth. Renowned for its stunning Mount Taranaki backdrop, booming renewable energy sector, dairy agribusiness, and hands-on polytechnic education.",
    tag: "Energy & Agri Hub",
  },
  {
    id: "wellington",
    name: "WELLINGTON",
    title: "Wellington Region",
    desc: "Explore universities and study options in Wellington. The creative, film, gaming, and governmental capital of New Zealand, home to Victoria University of Wellington and Wētā FX.",
    tag: "Creative & Political Capital",
  },
  {
    id: "nelson",
    name: "NELSON",
    title: "Nelson Tasman",
    desc: "Explore study opportunities in Nelson. New Zealand's sunniest region, featuring Nelson Marlborough Institute of Technology (NMIT), viticulture, aquaculture, and maritime training.",
    tag: "Sunniest Coastal Region",
  },
  {
    id: "canterbury",
    name: "CANTERBURY",
    title: "Canterbury (Christchurch)",
    desc: "Explore universities and study options in Canterbury. Home to the University of Canterbury and Lincoln University. A hub for civil engineering, agriculture, tech innovation, and aerospace.",
    tag: "Engineering & Agri Capital",
  },
  {
    id: "otago",
    name: "OTAGO",
    title: "Otago (Dunedin & Queenstown)",
    desc: "Explore study opportunities in Otago. Home to the historic University of Otago in Dunedin (New Zealand's oldest university and medical school) and Queenstown adventure tourism colleges.",
    tag: "Medical & Student City",
  },
];

const UNIVERSITIES = [
  {
    name: "The University of Auckland",
    location: "Auckland",
    qsRank: "#65 Global (QS World 2025)",
    tag: "New Zealand's #1 Ranked University",
    features: "Comprehensive flagship university with triple-crown business accreditation, leading global engineering, law, medicine, and computer science faculties.",
  },
  {
    name: "University of Otago",
    location: "Dunedin",
    qsRank: "#214 Global (QS)",
    tag: "Oldest University & Medical Flagship",
    features: "Founded in 1869, world-famous for biomedical sciences, dentistry, medicine, pharmacy, law, and vibrant campus collegiate life.",
  },
  {
    name: "Auckland University of Technology (AUT)",
    location: "Auckland",
    qsRank: "Top 1% Global Universities",
    tag: "Contemporary Tech & Industry Connect",
    features: "Fastest-growing modern university in Australasia with 95% graduate employment within 9 months, specializing in IT, design, engineering, and sports science.",
  },
  {
    name: "University of Canterbury",
    location: "Christchurch",
    qsRank: "#256 Global (QS)",
    tag: "World-Class Civil & Tech Engineering",
    features: "Prestigious engineering school, forestry, astronomy, and digital humanities situated in the heart of the South Island.",
  },
  {
    name: "Victoria University of Wellington",
    location: "Wellington",
    qsRank: "#244 Global (QS)",
    tag: "Capital City Law & Public Policy",
    features: "Top research institution with premier faculties in international law, film animation, government administration, and architecture.",
  },
  {
    name: "University of Waikato",
    location: "Hamilton & Tauranga",
    qsRank: "#235 Global (QS)",
    tag: "Triple Crown Waikato Management School",
    features: "Recognized for cyber security labs, supply chain, digital business, law, and environmental sciences.",
  },
  {
    name: "Massey University",
    location: "Palmerston North, Auckland, Wellington",
    qsRank: "#239 Global (QS)",
    tag: "Aviation & Veterinary Science",
    features: "Only university in NZ offering veterinary science and aviation flight training, alongside world-leading food technology and agribusiness.",
  },
  {
    name: "Lincoln University",
    location: "Canterbury",
    qsRank: "Specialist Land-Based University",
    tag: "Agriculture, Viticulture & Environment",
    features: "Southern Hemisphere's oldest agricultural university, excelling in agricultural commerce, landscape architecture, and environmental management.",
  },
];

const LIVING_COSTS = [
  { item: "Housing (Student Flat, Hostel, Homestay)", range: "NZD 800 – NZD 1,500", inr: "₹40,000 – ₹75,000" },
  { item: "Food & Daily Groceries", range: "NZD 300 – NZD 500", inr: "₹15,000 – ₹25,000" },
  { item: "Educational Materials & Books", range: "NZD 50 – NZD 100", inr: "₹2,500 – ₹5,000" },
  { item: "Personal Expenses & Sundries", range: "NZD 100 – NZD 300", inr: "₹5,000 – ₹15,000" },
  { item: "Utilities (Power, Gas, Internet)", range: "NZD 100 – NZD 150", inr: "₹5,000 – ₹7,500" },
  { item: "Transportation (Concession AT HOP / Metro)", range: "NZD 100 – NZD 200", inr: "₹5,000 – ₹10,000" },
];

const SEASONS = [
  {
    name: "Summer",
    months: "December – February",
    temp: "20℃ – 30℃",
    icon: <SunIcon />,
    desc: "Long warm sunny days, extended beach barbecues, outdoor festivals, and lush hiking trails across North and South Islands.",
  },
  {
    name: "Autumn",
    months: "March – May",
    temp: "14℃ – 22℃",
    icon: <LeafIcon />,
    desc: "Crisp clear days, breathtaking golden foliage across Arrowtown and Central Otago, and comfortable study temperatures.",
  },
  {
    name: "Winter",
    months: "June – August",
    temp: "1℃ – 15℃",
    icon: <SnowflakeIcon />,
    desc: "Snowfall on the Southern Alps and central North Island volcanoes, world-class ski fields (Queenstown, Wanaka), and cozy evenings.",
  },
  {
    name: "Spring",
    months: "September – November",
    temp: "10℃ – 20℃",
    icon: <BlossomIcon />,
    desc: "Fresh mild weather, blooming gardens, lambing season in rural farmlands, and outdoor recreational sports.",
  },
];

const ACADEMIC_SYSTEM = [
  {
    step: "01",
    title: "Pastoral Care Code of Practice",
    desc: "New Zealand is the first country in the world to adopt a legally binding Pastoral Care Code, ensuring institutions look after international student mental health, accommodation, and safety.",
  },
  {
    step: "02",
    title: "Post-Study Work Visa (PSWV)",
    desc: "Graduates with degree-level qualifications (Bachelor's, Master's, Ph.D.) are eligible for up to 3 years open Post-Study Work Visas to work with any employer in New Zealand.",
  },
  {
    step: "03",
    title: "Green List Fast-Track PR",
    desc: "In-demand roles in civil engineering, software development, nursing, medicine, and construction enjoy Tier 1 straight-to-residence or Tier 2 work-to-residence fast pathways.",
  },
  {
    step: "04",
    title: "Spouse Open Work Rights",
    desc: "Partners of students studying Level 9/10 Master's degrees or eligible Green List Level 7/8 qualifications can apply for an open work visa with full-time work rights.",
  },
  {
    step: "05",
    title: "Subsidized Ph.D. Domestic Rates",
    desc: "International Ph.D. scholars pay the exact same heavily subsidized tuition rates as domestic Kiwi students (~NZD 6,500–9,000/yr) with full work rights for self and spouse.",
  },
  {
    step: "06",
    title: "Fee Protection Scheme (FPS)",
    desc: "The New Zealand Qualifications Authority (NZQA) mandates that student tuition fees are held safely in independent student fee trusts until course delivery.",
  },
];

const FAQS = [
  {
    q: "Can I bring my family with me?",
    a: "Yes! Depending on your visa type and circumstances, eligible partners or dependent children may be able to accompany you under applicable New Zealand immigration rules. If you are enrolled in a Level 9 Master's degree or Level 10 Ph.D. (or a Bachelor's leading to an occupation on the Green List), your spouse is typically eligible for a Partner of a Student Work Visa with full open work rights, and your school-age dependent children can attend New Zealand state schools as domestic fee-free students.",
  },
  {
    q: "Is English language proficiency mandatory under the latest INZ rules?",
    a: "Yes. INZ visa officers have drastically strengthened their instructions regarding language skills. English proficiency is now a major deciding factor for visa validation. Our counselors assist you in preparing and achieving bulletproof IELTS or PTE Academic test scores to ensure complete compliance with the latest criteria.",
  },
  {
    q: "What post-study work visa rights do I get under the latest updates and India-NZ FTA?",
    a: "Under current INZ regulations and the India-NZ Free Trade Agreement: Master's Graduates receive an automatic 3-year Post-Study Work Visa; Indian PhD Graduates are now eligible for an extended 4-year post-study work visa; Graduate Diploma (Level 7) holders qualify for a 1-year open work visa if they hold a prior Bachelor's degree; and other Level 5 to 7 graduates can leverage the brand-new 6-month Short-Term Graduate Work Visa to launch their local job search.",
  },
  {
    q: "Can I stay in New Zealand permanently after studying?",
    a: "Permanent residence is not automatic after graduation, but graduates who work in occupations on New Zealand's 'Green List' (such as civil engineering, software engineering, nursing, ICT, and healthcare) can access fast-track Straight to Residence or Work to Residence pathways under the Skilled Migrant Category.",
  },
  {
    q: "What is the Funds Transfer Scheme (FTS) and required living expense threshold?",
    a: "The Funds Transfer Scheme (FTS) is an arrangement between Immigration New Zealand (INZ) and ANZ Bank New Zealand. It allows international students from India to transfer their living funds (at least NZ$ 20,000 per year) into a dedicated, secure Kiwi bank account. A set allowance is paid out monthly after arrival, demonstrating airtight financial capability to visa officers.",
  },
  {
    q: "What are the primary university intakes in New Zealand?",
    a: "The two major intakes are February/March (Semester 1 - primary intake with widest course options) and July (Semester 2). Select institutes of technology and pathway colleges also offer rolling intakes in September, October, and November.",
  },
  {
    q: "How many hours can international students work in New Zealand?",
    a: "Under the latest INZ rules, all new Master's students (including Master's-by-Research) are subject to a unified standard cap of up to 25 hours per week during active semesters and unlimited full-time hours during scheduled academic holidays. Other eligible students can work up to 20 hours per week during semesters.",
  },
  {
    q: "What is the new 2-month grace visa extension?",
    a: "Eligible international students now receive a comfortable 2-month grace visa extension after their official course completion date—up from just 1 month previously—giving you ample time to transition, attend graduation, or lodge your post-study work paperwork without stress.",
  },
  {
    q: "Why is New Zealand's Ph.D. policy so popular among international researchers?",
    a: "New Zealand treats international doctoral researchers like domestic citizens: you pay the low domestic Kiwi tuition rate (~NZD 6,500 to 9,000/year), you and your partner can work unlimited hours, and your children receive free education in state primary and secondary schools!",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function NewZealandStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    degree: "Master's / PG",
    intake: "February 2027",
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
            <span className="text-[#0a1e38] font-bold">New Zealand</span>
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
                <NZFlagBadge />
                <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-wide uppercase">
                  Umang Career Consultancy • New Zealand Student Visa Page
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Build Your Global Future:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#012169] via-[#0a1e38] to-[#e52928]">
                  Study in New Zealand
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#e52928] mt-2">
                  with Umang Career Consultancy
                </span>
              </h1>

              {/* Sub-tagline */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Step into a country renowned for its pristine natural beauty, universally respected educational infrastructure, and excellent career pathways. At Umang Career Consultancy, we convert your dreams of studying in New Zealand into a reality through rigorous document drafting, verified financial formatting, and up-to-date immigration expertise.
              </p>

              {/* Feature Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-sm sm:text-base font-bold text-[#0a1e38]">Top 2% Globally</div>
                  <div className="text-[11px] text-slate-500 font-medium">Universally Ranked</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-sm sm:text-base font-bold text-[#e52928]">Green List</div>
                  <div className="text-[11px] text-slate-500 font-medium">High Employability</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-sm sm:text-base font-bold text-emerald-600">25h / Week</div>
                  <div className="text-[11px] text-slate-500 font-medium">Master&apos;s Work Hours</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-sm sm:text-base font-bold text-[#0a1e38]">3–4 Yrs PSWV</div>
                  <div className="text-[11px] text-slate-500 font-medium">India-NZ FTA Perks</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Apply for New Zealand</span>
                  <span>→</span>
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
                    src="/new-zealand-hero.png"
                    alt="Study in New Zealand Student - Umang Career Consultancy"
                    width={480}
                    height={480}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    priority
                  />
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3.5s]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg">
                    100%
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">QS Ranking</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">All 8 Unis in Top 2%</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:4.2s]">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-xs tracking-wider">NZ</div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Post-Study Visa</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">Up to 3-4 Yrs PSWV</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. WHY CHOOSE NEW ZEALAND (AOTEAROA) FOR YOUR HIGHER EDUCATION?
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Why Choose New Zealand (Aotearoa) for Your Higher Education?"
            subtitle="Universally ranked institutions, high-priority Green List career mapping, exclusive India-NZ FTA benefits, and an unmatched quality of life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {WHY_CHOOSE_NZ.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#e52928] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e52928] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-[#e52928] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38] mb-2 group-hover:text-[#e52928] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* New Zealand Academic Excellence & Innovation Highlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#012169] via-[#0a1e38] to-[#123661] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-[#e52928] text-white text-xs font-black uppercase tracking-wider">
                New Zealand Higher Education Hub
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                100% Universally Ranked State Universities &amp; Green List Career Pathways
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                All 8 New Zealand state universities rank in the global top 2%, offering hands-on research facilities, unified 25h/week work rights, up to 3 to 4 years Post-Study Work Visas under the India-NZ FTA, and subsidized PhD tuition.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#counselling-form"
                className="px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#1ea750] text-white font-bold text-sm shadow-md transition-all whitespace-nowrap"
              >
                Explore Kiwi Universities
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          3. NAVIGATING THE NEW ZEALAND STUDENT VISA (LATEST INZ RULES & REGULATIONS) & KEY REQUIREMENTS
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Navigating the New Zealand Student Visa (Latest INZ Rules & Regulations)"
            subtitle="Immigration New Zealand (INZ) has updated its student framework to protect international students and streamline visa pathways. At Umang Career Consultancy, our counseling team ensures your file fully satisfies these strict new criteria to safeguard your application from rejection:"
          />

          {/* 4 Latest INZ Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {LATEST_INZ_UPDATES.map((update, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#22c55e] flex items-center justify-center shrink-0">
                      {update.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
                      {update.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38] mb-2.5">
                    {update.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {update.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Requirements We Help You Perfect Header & Grid */}
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1e38]">
              Key Requirements We Help You Perfect
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
              We guide you through every essential requirement from securing compliant Kiwi offers to structuring FTS accounts, fact-based SOPs, and medical clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_REQUIREMENTS.map((req, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#e52928] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e52928] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {req.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {req.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors mb-2">
                    {req.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {req.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT NEW ZEALAND (Matching User Reference)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About New Zealand"
            subtitle="An advanced, peaceful Pacific nation renowned for academic prestige, technological ingenuity, and spectacular landscapes."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Landmark Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              <Image
                src="/destinations/new-zealand.jpg"
                alt="Auckland Skyline and Harbor New Zealand"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#e52928] text-white">
                  Auckland Harbor & Sky Tower
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2">Aotearoa — Land of the Long White Cloud</h3>
              </div>
            </div>

            {/* Key Fact Badges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14c2.5 0 4-2 6.5-2s4 2 6.5 2 4-2 6.5-2M4 18c2.5 0 4-2 6.5-2s4 2 6.5 2 4-2 6.5-2" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Southwestern Pacific Island Nation</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Composed of two main landmasses (North and South Islands) surrounded by breathtaking coastal fjords.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">English is Widely Used</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  English is the primary day-to-day administrative, business, and educational language across all institutions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Agriculture, Tourism & Film Production</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  World&apos;s #1 dairy exporter, global hub for film VFX (Avatar, Lord of the Rings), and eco-tourism.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Safe, Peaceful & Student-Friendly</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Ranked #4 on the Global Peace Index, offering an inclusive, secure society with exceptional student care.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Strong in IT, Biotech & Clean Energy</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Over 80% renewable electricity grid with booming software engineering, cloud computing, and agritech sectors.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Stable Economy & High Living Standard</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Transparent governance, competitive wages, pristine air quality, and unmatched work-life balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOP COURSES IN NEW ZEALAND (12 Courses)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Courses in New Zealand"
            subtitle="Industry-aligned degree and postgraduate programs connected to Green List career pathways."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {TOP_COURSES.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-lg hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors mt-2.5">
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
                Green List Assessment
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-2">Studying an In-Demand Skill in New Zealand?</h3>
              <p className="mt-1 text-sm text-slate-300 max-w-xl">
                Civil engineering, nursing, software architecture, and construction management qualify for direct fast-track residence pathways under the NZ Green List.
              </p>
            </div>
            <a
              href="#counselling-form"
              className="whitespace-nowrap py-3.5 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              Check My Green List Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY NEW ZEALAND AS AN IDEAL DESTINATION? (8 Pillars)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why New Zealand as an Ideal Study Abroad Destination?"
            subtitle="Discover why thousands of international scholars choose New Zealand for higher education."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_NZ.map((pillar, idx) => (
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
          GREEN LIST & SPOUSE WORK RIGHTS SPOTLIGHT
         ========================================================= */}
      <section className="w-full py-12 sm:py-16 bg-[#0a1e38] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-[#22c55e] border border-emerald-500/30">
                Immigration New Zealand (INZ) Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3 text-white">
                Green List Fast-Track PR & Partner Work Rights
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Graduates in Tier 1 Green List occupations enjoy immediate Straight-to-Residence applications upon securing a qualifying job offer. Enrolling in a Master&apos;s degree also entitles your spouse to an Open Work Visa with full-time work rights and children to domestic school tuition.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#22c55e]">Tier 1 & 2</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Green List Residence Pathways</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#e52928]">3 Years</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Post-Study Open Work Visa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REGIONS IN NEW ZEALAND (6 Regions matching reference)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Regions in New Zealand"
            subtitle="Explore study opportunities and university clusters across New Zealand's diverse island regions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((region) => (
              <div
                key={region.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-200">
                      {region.name}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{region.tag}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1e38]">{region.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{region.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a1e38]">
                  <span>Explore Institutions</span>
                  <span className="text-[#e52928]">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          UNIVERSITIES IN NEW ZEALAND (All 8 Public Flagships)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Universities in New Zealand"
            subtitle="All eight public state universities rank among the top 2% worldwide in QS World University Rankings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {UNIVERSITIES.map((uni, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#0a1e38] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800">
                      {uni.qsRank}
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
            title="New Zealand Tuition Fees & Living Costs"
            subtitle="Clear financial breakdown in New Zealand Dollars (NZD) and Indian Rupees (INR)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tuition Fees Table */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#0a1e38]">New Zealand Tuition Fees</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Annual indicative tuition rates across program levels
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-200">
                  Feb, Sep, Mar, Jul
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
                      <td className="py-3.5 px-3 font-semibold">NZD 20,000</td>
                      <td className="py-3.5 px-3 font-semibold">NZD 32,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹10.0L – ₹16.0L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Master Degree</td>
                      <td className="py-3.5 px-3 font-semibold">NZD 22,000</td>
                      <td className="py-3.5 px-3 font-semibold">NZD 45,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹11.0L – ₹22.5L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Diploma Programs</td>
                      <td className="py-3.5 px-3 font-semibold">NZD 35,000</td>
                      <td className="py-3.5 px-3 font-semibold">NZD 45,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹17.5L – ₹22.5L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Ph.D. Programs</td>
                      <td className="py-3.5 px-3 font-semibold">NZD 6,500</td>
                      <td className="py-3.5 px-3 font-semibold">NZD 45,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">Domestic Kiwi Rate*</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-[#0a1e38]">Key Intakes:</span> February, September, March, July.
                <br />
                <span className="italic text-slate-500">
                  *Note: Tuition fees and intakes vary by institution and program. In New Zealand, international Ph.D. students qualify for domestic Kiwi tuition rates (~NZD 6,500 to NZD 9,000/year), representing immense educational value.
                </span>
              </div>
            </div>

            {/* Monthly Cost of Living Table */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-[#0a1e38]">Monthly Cost of Living</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Est. Breakdown
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Typical monthly student expenditure in New Zealand
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
                  <span className="text-[#22c55e] text-base font-black">NZD 1,450 – 2,750</span>
                </div>
                <div className="text-xs text-slate-500 text-right mt-0.5">Approx. ₹73,000 – ₹1,38,000 / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEATHER & FOUR SEASONS IN NEW ZEALAND
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Weather & Four Seasons in New Zealand"
            subtitle="Experience New Zealand's refreshing maritime climate, extended summer days, and mild winters."
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
          NZ ACADEMIC SYSTEM & IMMIGRATION (6 Cards)
         ========================================================= */}
      {/* =========================================================
          THE UMANG CAREER CONSULTANCY ADVANTAGE: OUR 6-STEP PATHWAY
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Umang Career Consultancy Advantage: Our 6-Step Pathway"
            subtitle="From career profiling and Green List mapping to FTS setup, portal lodgement, mock interview drills, and pre-departure orientation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUCCESS_PATHWAY.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#22c55e]">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#22c55e] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38] group-hover:text-[#22c55e] transition-colors mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
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
            subtitle="Verified answers to vital questions regarding studying and living in New Zealand."
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
                  Vadodara Office • Certified New Zealand Counselors
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Begin Your Journey to <span className="text-[#e52928]">New Zealand</span> Today!
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Don&apos;t let complex policy updates slow down your career ambitions. Put your profile in the hands of the destination experts at Umang Career Consultancy. Contact our Vadodara office today to secure your personalized visa roadmap!
                </p>

                <div className="space-y-3 pt-2 text-left">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                    <span>Career Profiling &amp; Green List Mapping</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                    <span>Airtight Financial Proofs &amp; FTS Structuring</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                    <span>Fact-Based Genuine Student (GS) Intent Statements</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                    <span>Mock Embassy Interview Prep &amp; Pre-Departure Guidance</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="tel:+919173186109"
                      className="anim-phone-ring inline-flex items-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm sm:text-base px-5 py-3 rounded-xl shadow-lg transition-colors"
                    >
                      <PhoneIcon />
                      <span>+91 91731 86109</span>
                    </a>
                    <a
                      href="tel:+919712610086"
                      className="anim-phone-ring inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-5 py-3 rounded-xl border border-white/20 transition-colors"
                    >
                      <PhoneIcon />
                      <span>+91 97126 10086</span>
                    </a>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1">
                    <div>
                      <strong className="text-white">Vadodara Office: </strong>
                      First Floor 25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP road, Vadodara Gujarat. 390019
                    </div>
                    <div className="text-[11px] text-slate-400">
                      <span className="font-semibold text-slate-300">Email: </span>
                      umangcareer2022@gmail.com • umangcareer2026@gmail.com • umangcareer2023@gmail.com
                    </div>
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
                      Your inquiry for studying in New Zealand has been received. Our senior education advisor will contact you within 24 hours.
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
                      Book Free New Zealand Counselling
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Siddharth Patel"
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
                          placeholder="siddharth@example.com"
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
                          <option value="Master's / PG">Master&apos;s Degree / PG</option>
                          <option value="Bachelor's / UG">Bachelor&apos;s Degree / UG</option>
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
                          <option value="February 2027">February 2027 Intake</option>
                          <option value="July 2026">July 2026 Intake</option>
                          <option value="September 2026">September 2026 Intake</option>
                          <option value="July 2027">July 2027 Intake</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred University or Major?</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder="e.g. Interested in Civil Engineering at Canterbury or MBA at Auckland"
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
                      <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Official NZ education partner counseling.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM RED CALL BAR
         ========================================================= */}
      <section className="w-full bg-[#e52928] py-8 text-white relative shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-xs uppercase tracking-widest font-black text-red-200">
              Personalized New Zealand Admission Guidance
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Talk to Umang Career Consultancy Today
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center gap-3 bg-white text-[#0a1e38] hover:text-[#e52928] font-black text-lg sm:text-xl px-7 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-7 h-7 rounded-full bg-[#0a1e38] text-white flex items-center justify-center">
                <PhoneIcon />
              </div>
              <span>+91 91731 86109</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
