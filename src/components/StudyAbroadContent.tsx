"use client";

import React, { useState, useEffect, useRef } from "react";
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

function PlaneIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${
        isOpen ? "transform rotate-180 text-[#e52928]" : "text-white"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6 text-slate-500 hover:text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/* -------------------------------------------------------------
   SVG FLAG BADGES (Crisp, High-Quality Rounded Badges)
------------------------------------------------------------- */
function FlagBadge({ country }: { country: string }) {
  switch (country.toLowerCase()) {
    case "usa":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="42" fill="#b22234" />
          <path d="M0,6h60 M0,12h60 M0,18h60 M0,24h60 M0,30h60 M0,36h60" stroke="#fff" strokeWidth="3" />
          <rect width="26" height="23" fill="#3c3b6e" />
          <circle cx="6" cy="6" r="1.5" fill="#fff" />
          <circle cx="13" cy="6" r="1.5" fill="#fff" />
          <circle cx="20" cy="6" r="1.5" fill="#fff" />
          <circle cx="9.5" cy="11.5" r="1.5" fill="#fff" />
          <circle cx="16.5" cy="11.5" r="1.5" fill="#fff" />
          <circle cx="6" cy="17" r="1.5" fill="#fff" />
          <circle cx="13" cy="17" r="1.5" fill="#fff" />
          <circle cx="20" cy="17" r="1.5" fill="#fff" />
        </svg>
      );
    case "germany":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="14" fill="#000" />
          <rect y="14" width="60" height="14" fill="#dd0000" />
          <rect y="28" width="60" height="14" fill="#ffce00" />
        </svg>
      );
    case "uk":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <clipPath id="uk-clip">
            <rect width="60" height="42" />
          </clipPath>
          <g clipPath="url(#uk-clip)">
            <rect width="60" height="42" fill="#012169" />
            <path d="M0 0L60 42M60 0L0 42" stroke="#fff" strokeWidth="8" />
            <path d="M0 0L60 42M60 0L0 42" stroke="#c8102e" strokeWidth="4" />
            <path d="M30 0v42M0 21h60" stroke="#fff" strokeWidth="12" />
            <path d="M30 0v42M0 21h60" stroke="#c8102e" strokeWidth="7" />
          </g>
        </svg>
      );
    case "france":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="20" height="42" fill="#002395" />
          <rect x="20" width="20" height="42" fill="#fff" />
          <rect x="40" width="20" height="42" fill="#ed2939" />
        </svg>
      );
    case "canada":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="15" height="42" fill="#ff0000" />
          <rect x="15" width="30" height="42" fill="#fff" />
          <rect x="45" width="15" height="42" fill="#ff0000" />
          {/* Stylized Maple Leaf */}
          <path
            d="M30 11l2 5 4-2-1 4 5 1-4 3 2 4-5-2-1 6-4-6-5 2 2-4-4-3 5-1-1-4 4 2z"
            fill="#ff0000"
          />
        </svg>
      );
    case "australia":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="42" fill="#00008b" />
          <rect width="30" height="21" fill="#012169" />
          <path d="M0 0L30 21M30 0L0 21" stroke="#fff" strokeWidth="4" />
          <path d="M0 0L30 21M30 0L0 21" stroke="#c8102e" strokeWidth="2" />
          <path d="M15 0v21M0 10.5h30" stroke="#fff" strokeWidth="6" />
          <path d="M15 0v21M0 10.5h30" stroke="#c8102e" strokeWidth="3.5" />
          {/* Southern Cross stars */}
          <circle cx="15" cy="31" r="3" fill="#fff" />
          <circle cx="45" cy="11" r="1.5" fill="#fff" />
          <circle cx="51" cy="18" r="1.5" fill="#fff" />
          <circle cx="45" cy="27" r="1.5" fill="#fff" />
          <circle cx="39" cy="20" r="1.5" fill="#fff" />
        </svg>
      );
    case "new zealand":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="42" fill="#00247d" />
          <rect width="30" height="21" fill="#012169" />
          <path d="M0 0L30 21M30 0L0 21" stroke="#fff" strokeWidth="4" />
          <path d="M0 0L30 21M30 0L0 21" stroke="#cc142b" strokeWidth="2" />
          <path d="M15 0v21M0 10.5h30" stroke="#fff" strokeWidth="6" />
          <path d="M15 0v21M0 10.5h30" stroke="#cc142b" strokeWidth="3.5" />
          {/* Red stars with white border */}
          <circle cx="46" cy="11" r="2.2" fill="#cc142b" stroke="#fff" strokeWidth="0.8" />
          <circle cx="52" cy="18" r="2" fill="#cc142b" stroke="#fff" strokeWidth="0.8" />
          <circle cx="46" cy="28" r="2.2" fill="#cc142b" stroke="#fff" strokeWidth="0.8" />
          <circle cx="40" cy="20" r="1.8" fill="#cc142b" stroke="#fff" strokeWidth="0.8" />
        </svg>
      );
    case "malta":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="30" height="42" fill="#fff" />
          <rect x="30" width="30" height="42" fill="#cf1020" />
          {/* George cross detail */}
          <rect x="5" y="5" width="10" height="10" fill="#bbb" stroke="#888" strokeWidth="0.8" />
        </svg>
      );
    case "poland":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="21" fill="#fff" />
          <rect y="21" width="60" height="21" fill="#dc143c" />
        </svg>
      );
    case "ireland":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="20" height="42" fill="#169b62" />
          <rect x="20" width="20" height="42" fill="#fff" />
          <rect x="40" width="20" height="42" fill="#ff883e" />
        </svg>
      );
    case "denmark":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="42" fill="#c60c30" />
          <path d="M20 0v42M0 21h60" stroke="#fff" strokeWidth="7" />
        </svg>
      );
    case "latvia":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="17" fill="#9e3039" />
          <rect y="17" width="60" height="8" fill="#fff" />
          <rect y="25" width="60" height="17" fill="#9e3039" />
        </svg>
      );
    case "hungary":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="14" fill="#ce2939" />
          <rect y="14" width="60" height="14" fill="#fff" />
          <rect y="28" width="60" height="14" fill="#477050" />
        </svg>
      );
    case "czech republic":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="21" fill="#fff" />
          <rect y="21" width="60" height="21" fill="#d7141a" />
          <polygon points="0,0 28,21 0,42" fill="#11457e" />
        </svg>
      );
    case "malaysia":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="42" fill="#cc0000" />
          <path d="M0,6h60 M0,12h60 M0,18h60 M0,24h60 M0,30h60 M0,36h60" stroke="#fff" strokeWidth="3" />
          <rect width="30" height="22" fill="#000066" />
          <circle cx="14" cy="11" r="7" fill="#ffcc00" />
          <circle cx="16" cy="11" r="6" fill="#000066" />
          <polygon points="20,11 22,13 24,11 22,9" fill="#ffcc00" />
        </svg>
      );
    case "singapore":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="21" fill="#ed2939" />
          <rect y="21" width="60" height="21" fill="#fff" />
          <circle cx="12" cy="10.5" r="6" fill="#fff" />
          <circle cx="14" cy="10.5" r="5" fill="#ed2939" />
          <circle cx="17" cy="8" r="1" fill="#fff" />
          <circle cx="19" cy="10.5" r="1" fill="#fff" />
          <circle cx="17" cy="13" r="1" fill="#fff" />
        </svg>
      );
    case "italy":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="20" height="42" fill="#009246" />
          <rect x="20" width="20" height="42" fill="#fff" />
          <rect x="40" width="20" height="42" fill="#ce2b37" />
        </svg>
      );
    case "united arab emirates":
    case "uae":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="14" fill="#00732f" />
          <rect y="14" width="60" height="14" fill="#fff" />
          <rect y="28" width="60" height="14" fill="#000" />
          <rect width="18" height="42" fill="#ff0000" />
        </svg>
      );
    case "switzerland":
      return (
        <svg className="w-9 h-7 rounded shadow-md border border-white/60" viewBox="0 0 32 32">
          <rect width="32" height="32" fill="#da291c" />
          <rect x="13" y="6" width="6" height="20" fill="#ffffff" />
          <rect x="6" y="13" width="20" height="6" fill="#ffffff" />
        </svg>
      );
    case "lithuania":
      return (
        <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
          <rect width="60" height="14" fill="#fdb913" />
          <rect y="14" width="60" height="14" fill="#006a44" />
          <rect y="28" width="60" height="14" fill="#c1272d" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="1.8" /><path strokeWidth="1.6" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>
      );
  }
}

/* -------------------------------------------------------------
   REUSABLE SECTION HEADER WITH ANIMATION
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
      className={`text-center mb-10 transition-all duration-700 ease-out transform ${
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
          className={`mt-2.5 text-base sm:text-lg font-semibold ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------
   18 DESTINATIONS DATA
------------------------------------------------------------- */
interface Destination {
  id: string;
  name: string;
  region: "English" | "Europe" | "Asia";
  image: string;
  alt: string;
  badgeText: string;
  topIntakes: string;
  postStudyWork: string;
  avgTuition: string;
  highlights: string[];
  topCourses: string[];
}

const DESTINATIONS: Destination[] = [
  {
    id: "usa",
    name: "USA",
    region: "English",
    image: "/destinations/usa.jpg",
    alt: "Statue of Liberty USA Study Abroad",
    badgeText: "World's Top Universities",
    topIntakes: "Fall (Aug/Sep) & Spring (Jan)",
    postStudyWork: "Up to 3 Years (STEM OPT)",
    avgTuition: "$20,000 - $45,000 / year",
    highlights: [
      "Home to top-ranked Ivy League and tier-1 research institutions",
      "Flexible curriculum with major/minor degree combinations",
      "Robust campus OPT/CPT industry internship opportunities",
      "Extensive merit and research assistantship funding options"
    ],
    topCourses: ["Computer Science & AI", "Data Analytics", "MBA & Finance", "Biomedical Engineering"]
  },
  {
    id: "germany",
    name: "Germany",
    region: "Europe",
    image: "/destinations/germany.jpg",
    alt: "Historic German Architecture Study Abroad",
    badgeText: "Tuition-Free Public Universities",
    topIntakes: "Winter (Sep/Oct) & Summer (Mar/Apr)",
    postStudyWork: "18 Months Jobseeker Visa",
    avgTuition: "€0 - €3,000 / year (Nominal admin fees)",
    highlights: [
      "Tuition-free high quality education at public universities",
      "Leading engineering, automotive, and technological industry base",
      "18 months stay-back permit for career establishment",
      "Low living expenses with student semester ticket privileges"
    ],
    topCourses: ["Automotive & Mechanical", "Robotics & AI", "Renewable Energy", "Business & Supply Chain"]
  },
  {
    id: "uk",
    name: "UK",
    region: "English",
    image: "/destinations/uk.jpg",
    alt: "Westminster Abbey and London Double Decker Bus",
    badgeText: "Fast-Track 1-Year Masters",
    topIntakes: "September & January / May",
    postStudyWork: "2 Years Graduate Route Visa",
    avgTuition: "£13,000 - £26,000 / year",
    highlights: [
      "1-year intensive Master's degrees save valuable time and living costs",
      "Prestigious Russell Group universities with centuries of heritage",
      "2-year post-study work visa without job sponsorship requirements",
      "Global financial and cultural hub with unmatched networking"
    ],
    topCourses: ["International Management", "FinTech & Banking", "Law & Dispute Resolution", "Data Science"]
  },
  {
    id: "france",
    name: "France",
    region: "Europe",
    image: "/destinations/france.jpg",
    alt: "Eiffel Tower Paris Study Abroad",
    badgeText: "Europe's Innovation Capital",
    topIntakes: "September & January",
    postStudyWork: "2 Years Post-Study Work Permit",
    avgTuition: "€3,000 - €12,000 / year",
    highlights: [
      "Elite Grandes Écoles ranking top in global business & management",
      "Substantial French government housing subsidies (CAF) for students",
      "2-year stay back visa for Master's graduates from recognized colleges",
      "Generous scholarship schemes like Eiffel Excellence"
    ],
    topCourses: ["Luxury Brand Management", "Culinary & Hospitality", "Aerospace Engineering", "Fashion & Design"]
  },
  {
    id: "canada",
    name: "Canada",
    region: "English",
    image: "/destinations/canada.jpg",
    alt: "Toronto Skyline Study Abroad Canada",
    badgeText: "Up to 3-Year PGWP & PR Pathways",
    topIntakes: "September, January & May",
    postStudyWork: "Up to 3 Years PGWP",
    avgTuition: "CAD $16,000 - $32,000 / year",
    highlights: [
      "Transparent post-graduation work permit (PGWP) up to 3 years",
      "Safe, multicultural environment ranked among top global living standards",
      "Direct pathway to Permanent Residency (Express Entry & PNP)",
      "Co-op education models integrating paid industry work experience"
    ],
    topCourses: ["Information Technology", "Project Management", "Healthcare & Nursing", "Business Administration"]
  },
  {
    id: "australia",
    name: "Australia",
    region: "English",
    image: "/destinations/australia.jpg",
    alt: "Sydney Opera House Study Abroad Australia",
    badgeText: "Group of Eight Excellence",
    topIntakes: "February, July & November",
    postStudyWork: "2 to 4 Years Post-Study Work",
    avgTuition: "AUD $24,000 - $42,000 / year",
    highlights: [
      "Consistently ranks 7 universities in the global top 100",
      "High minimum part-time student wage offering strong financial support",
      "Regional study extensions for extended post-study work rights",
      "Thriving economy with demand across IT, healthcare, and engineering"
    ],
    topCourses: ["Software Engineering", "Nursing & Public Health", "Civil & Mining Engineering", "Accounting & Finance"]
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    region: "English",
    image: "/destinations/new-zealand.jpg",
    alt: "New Zealand Milford Sound & Auckland",
    badgeText: "High Safety & Quality of Life",
    topIntakes: "February & July",
    postStudyWork: "Up to 3 Years Post-Study Work",
    avgTuition: "NZD $22,000 - $35,000 / year",
    highlights: [
      "100% of New Zealand universities rank in the top 3% globally",
      "Peaceful, clean environment ranked top 2 on Global Peace Index",
      "Direct post-study work visa up to 3 years for degree qualifiers",
      "Personalized research mentoring with state-of-the-art facilities"
    ],
    topCourses: ["Agribusiness & Food Science", "Data Science", "Cybersecurity", "Environmental Management"]
  },
  {
    id: "malta",
    name: "Malta",
    region: "Europe",
    image: "/destinations/malta.jpg",
    alt: "Valletta Malta Harbor Study Abroad",
    badgeText: "English-Speaking Schengen Hub",
    topIntakes: "February, June & October",
    postStudyWork: "9 Months Jobseeker Permit",
    avgTuition: "€5,000 - €8,500 / year",
    highlights: [
      "Official English-speaking Mediterranean country in the European Union",
      "Seamless Schengen travel across 29 European countries",
      "Affordable tuition fees and low living expenses compared to Western Europe",
      "Growing tech, iGaming, financial services, and tourism industry"
    ],
    topCourses: ["iGaming & Cybersecurity", "Tourism & Hospitality", "Digital Marketing", "International Business"]
  },
  {
    id: "poland",
    name: "Poland",
    region: "Europe",
    image: "/destinations/poland.jpg",
    alt: "Warsaw Poland Historic City",
    badgeText: "Affordable European Education",
    topIntakes: "October & February",
    postStudyWork: "9 Months Stay-Back Visa",
    avgTuition: "€2,500 - €5,000 / year",
    highlights: [
      "Extremely affordable European tuition and vibrant student towns",
      "Recognized degrees fully compliant with Bologna process",
      "Booming technology and shared service hub for Fortune 500 firms",
      "Safe, picturesque cities with rich cultural heritage"
    ],
    topCourses: ["Medicine / MBBS in English", "Computer Science", "Logistics & Supply Chain", "Management"]
  },
  {
    id: "ireland",
    name: "Ireland",
    region: "English",
    image: "/destinations/ireland.jpg",
    alt: "Rock of Cashel Ireland Green Scenery",
    badgeText: "European Silicon Valley",
    topIntakes: "September & January",
    postStudyWork: "2 Years Third Level Graduate Scheme",
    avgTuition: "€10,000 - €22,000 / year",
    highlights: [
      "European headquarters for Google, Meta, Apple, Pfizer, and Intel",
      "2-year stay-back visa for Master's students with direct hiring",
      "Native English-speaking member of the European Union",
      "Strong research clusters with generous university scholarships"
    ],
    topCourses: ["Cloud Computing & Big Data", "Pharmaceutical Sciences", "FinTech & Risk", "Business Analytics"]
  },
  {
    id: "denmark",
    name: "Denmark",
    region: "Europe",
    image: "/destinations/denmark.jpg",
    alt: "Copenhagen Nyhavn Denmark",
    badgeText: "Global Leader in Sustainability",
    topIntakes: "September & February",
    postStudyWork: "Up to 3 Years Post-Grad Permit",
    avgTuition: "€6,000 - €16,000 / year",
    highlights: [
      "World-class innovation in clean tech, green architecture, and life science",
      "Progressive teaching methodology emphasizing collaborative problem solving",
      "Exceptional work-life balance and high international happiness index",
      "Extended post-study residency permits for university graduates"
    ],
    topCourses: ["Renewable Energy", "Industrial Design & Architecture", "Biotechnology", "Global Logistics"]
  },
  {
    id: "latvia",
    name: "Latvia",
    region: "Europe",
    image: "/destinations/latvia.jpg",
    alt: "Riga Cathedral Latvia Old Town",
    badgeText: "High Visa Success & Low Costs",
    topIntakes: "September & February",
    postStudyWork: "Jobseeker Residence Permit",
    avgTuition: "€2,500 - €4,500 / year",
    highlights: [
      "Fast visa processing with dependable admission timelines",
      "High quality European higher education recognized internationally",
      "Full Schengen visa privileges allowing travel across Europe",
      "English-medium degree programs across modern Baltic campuses"
    ],
    topCourses: ["Aviation Management", "Computer Systems", "Telecommunications", "International Economics"]
  },
  {
    id: "hungary",
    name: "Hungary",
    region: "Europe",
    image: "/destinations/hungary.jpg",
    alt: "Budapest Parliament on Danube River",
    badgeText: "Prestigious Medical & Tech Hub",
    topIntakes: "September & February",
    postStudyWork: "9 Months Study-to-Work Permit",
    avgTuition: "€3,000 - €7,000 / year",
    highlights: [
      "Centuries-old medical schools offering WHO/NMC recognized degrees",
      "Stipendium Hungaricum scholarship programs with complete tuition waiver",
      "Cost-effective European living in the vibrant student capital Budapest",
      "Central European crossroads with strong manufacturing and R&D"
    ],
    topCourses: ["General Medicine & Dentistry", "Automotive Engineering", "Computer Science", "International Relations"]
  },
  {
    id: "czech-republic",
    name: "Czech Republic",
    region: "Europe",
    image: "/destinations/czech-republic.jpg",
    alt: "Charles Bridge Prague Czech Republic",
    badgeText: "Heart of European Innovation",
    topIntakes: "September & February",
    postStudyWork: "9 Months Job Search Visa",
    avgTuition: "€3,000 - €6,500 / year",
    highlights: [
      "Home to Charles University, one of Central Europe's oldest universities",
      "One of the lowest unemployment rates in the entire European Union",
      "Vibrant student life in historic Prague and Brno tech corridor",
      "Extensive technical programs taught entirely in English"
    ],
    topCourses: ["Mechanical Engineering", "Software Engineering", "Cybernetics", "Economics & Finance"]
  },
  {
    id: "malaysia",
    name: "Malaysia",
    region: "Asia",
    image: "/destinations/malaysia.jpg",
    alt: "Petronas Twin Towers Malaysia",
    badgeText: "Cost-Effective Global Degrees",
    topIntakes: "March, July & October",
    postStudyWork: "Employment Pass Pathways",
    avgTuition: "$3,500 - $8,000 / year",
    highlights: [
      "Branch campuses of top UK and Australian universities (Monash, Nottingham)",
      "Significantly lower tuition and living expenses with identical degree certificates",
      "High English proficiency and hospitable multicultural environment",
      "Simple, fast student visa application process with high approval rates"
    ],
    topCourses: ["Business Management", "Information Technology", "Hospitality Management", "Biomedical Sciences"]
  },
  {
    id: "singapore",
    name: "Singapore",
    region: "Asia",
    image: "/destinations/singapore.jpg",
    alt: "Marina Bay Sands Singapore",
    badgeText: "Asia's Premier Education Capital",
    topIntakes: "August & January",
    postStudyWork: "Tuition Grant / S-Pass Opportunities",
    avgTuition: "$12,000 - $28,000 / year",
    highlights: [
      "Global top-ranked universities including NUS and NTU",
      "Financial, logistics, and technology capital of Southeast Asia",
      "Flawless public safety, cleanliness, and state-of-the-art infrastructure",
      "Direct recruitment drives by global Fortune 500 headquarters"
    ],
    topCourses: ["FinTech & Blockchain", "Supply Chain Management", "Artificial Intelligence", "Hospitality Leadership"]
  },
  {
    id: "italy",
    name: "Italy",
    region: "Europe",
    image: "/destinations/italy.jpg",
    alt: "Colosseum Rome Italy Study Abroad",
    badgeText: "Heritage, Design & DSU Scholarships",
    topIntakes: "September & February",
    postStudyWork: "12 Months Permesso di Soggiorno",
    avgTuition: "€1,000 - €4,000 / year (Subject to ISEE income tier)",
    highlights: [
      "Top-tier Politecnico engineering and architecture academies",
      "Generous Italian regional DSU scholarships providing free tuition & stipend",
      "World capital of design, luxury automotive, fashion, and gastronomy",
      "Bologna system degrees recognized worldwide with 29-country Schengen mobility"
    ],
    topCourses: ["Automotive Design", "Architecture & Urban Planning", "Fashion Management", "Data Analytics"]
  },
  {
    id: "united-arab-emirates",
    name: "United Arab Emirates",
    region: "Asia",
    image: "/destinations/united-arab-emirates.jpg",
    alt: "Burj Khalifa Dubai UAE Study Abroad",
    badgeText: "Tax-Free Careers & Golden Visa",
    topIntakes: "September & January",
    postStudyWork: "Green Visa & Employment Permits",
    avgTuition: "$10,000 - $22,000 / year",
    highlights: [
      "International university branch campuses (Middlesex, Birmingham, Heriot-Watt)",
      "Zero income tax with high earning potential for fresh graduates",
      "Rapidly expanding global hub for AI, aviation, trade, and media",
      "Golden Visa pathways available for outstanding university graduates"
    ],
    topCourses: ["International Business", "Artificial Intelligence", "Civil & Structural Engineering", "Digital Media"]
  },
  {
    id: "switzerland",
    name: "Switzerland",
    region: "Europe",
    image: "/destinations/switzerland.jpg",
    alt: "Swiss Alps and scenic lake Switzerland Study Abroad",
    badgeText: "World's #1 Hospitality & Luxury B-Schools",
    topIntakes: "Fall (September) & Spring (February)",
    postStudyWork: "6-Month Post-Study Job Search Permit",
    avgTuition: "CHF 5,700 - CHF 45,600 / year",
    highlights: [
      "Home to top-ranked hospitality institutes (GLION, SHMS, BHMS, César Ritz)",
      "Bologna system with globally accredited business schools (EU Business School)",
      "Mandatory paid hospitality internships offering min. CHF 2,200/month stipend",
      "High standard of living in safe, multilingual alpine cities (Geneva, Bern, Zurich)"
    ],
    topCourses: ["Tourism & Hospitality", "Business & Management", "Law & International Law", "Biotechnology"]
  },
  {
    id: "lithuania",
    name: "Lithuania",
    region: "Europe",
    image: "/destinations/lithuania.jpg",
    alt: "Vilnius Lithuania Study Abroad",
    badgeText: "Laser Tech, Fintech & €2,200 Tuition",
    topIntakes: "September & February",
    postStudyWork: "12-Month Post-Study TRP Extension",
    avgTuition: "€2,200 - €9,000 / year",
    highlights: [
      "World-class laser science, fintech, and high-tech EU research ecosystem",
      "Full-time 40 hours/week work rights for international degree students",
      "Extremely affordable cost of living with €5.80/month student transit",
      "Top universities including Vilnius University (est. 1579), VILNIUS TECH & LSMU"
    ],
    topCourses: ["Technology Studies", "Business Studies", "Healthcare & Medicine", "Tourism & Hospitality"]
  }
];

/* -------------------------------------------------------------
   8-STEP STUDY ABROAD ROADMAP DATA
------------------------------------------------------------- */
const ROADMAP_STEPS = [
  {
    step: "01",
    title: "Profile Assessment",
    desc: "In-depth review of your academic records, test scores, career ambitions, and budget to pinpoint optimal country pathways."
  },
  {
    step: "02",
    title: "University Shortlisting",
    desc: "Curating a tailored list of Ambitious, Target, and Safe institutions across top study destinations."
  },
  {
    step: "03",
    title: "Test Preparation",
    desc: "Targeted coaching & resources for IELTS, PTE, TOEFL, GRE, or SAT to achieve required benchmark scores."
  },
  {
    step: "04",
    title: "SOP & LOR Crafting",
    desc: "Formulating compelling Statements of Purpose, Resumes, and Letters of Recommendation with zero plagiarism."
  },
  {
    step: "05",
    title: "Application Lodgement",
    desc: "Flawless submission of university portals, fee waivers, scholarship applications, and tracking offer letters."
  },
  {
    step: "06",
    title: "Visa Filing & Mocks",
    desc: "Rigorous documentation, financial dossier preparation, statement of intent, and simulated consulate interviews."
  },
  {
    step: "07",
    title: "Education Loan & Forex",
    desc: "Securing quick sanction collateral/non-collateral student loans, blocked accounts, and forex cards at best rates."
  },
  {
    step: "08",
    title: "Pre-Departure & Flights",
    desc: "Air ticketing, student travel insurance, verified student housing guidance, and cultural orientation briefing."
  }
];

/* -------------------------------------------------------------
   FAQS DATA
------------------------------------------------------------- */
const FAQS = [
  {
    q: "Which country is best for me to study abroad?",
    a: "The ideal destination depends on your academic profile, budget, career aspirations, and post-study goals. For example, Canada and Australia offer direct PR points and generous post-study work rights; the USA provides unmatched STEM OPT opportunities (up to 3 years); Germany offers tuition-free public university education; and the UK features fast-track 1-year Master's programs. Our senior counselors evaluate your background during a free 1-on-1 profile evaluation to recommend the best match."
  },
  {
    q: "Can I study abroad without IELTS or TOEFL?",
    a: "Yes! Many universities across the UK, France, Germany, Poland, and Malaysia accept alternative proof of English proficiency, such as an English Medium of Instruction (MOI) certificate from your previous college, Class 12 English scores (typically 70%+), or PTE / Duolingo English Tests."
  },
  {
    q: "What is the typical cost of studying abroad?",
    a: "Tuition fees vary significantly by destination. In Germany and public European universities, tuition is essentially free or €500–€3,000/year. In the UK, Canada, Australia, and the USA, annual tuition ranges from $15,000 to $35,000 depending on whether you pursue a diploma, Bachelor's, or Master's. Living costs range from $8,000 to $15,000 annually, which can be comfortably supported through part-time work."
  },
  {
    q: "Are international students allowed to work part-time?",
    a: "Yes! Most top study destinations permit international students on student visas to work part-time during academic terms (usually 20 to 24 hours per week) and full-time (up to 40 hours per week) during official semester breaks and vacations."
  },
  {
    q: "How does Umang Career Consultancy assist with study visas?",
    a: "We provide end-to-end guidance: verifying eligible funds, compiling tax documents and sponsorships, formulating persuasive Statements of Purpose / Cover Letters, booking biometric appointments, and conducting mock consular interviews to maximize visa approval rates."
  },
  {
    q: "When should I begin my study abroad application process?",
    a: "It is best to start 8 to 12 months ahead of your intended intake. This ensures sufficient time for standardized tests (IELTS/PTE), university application evaluations, scholarship consideration, offer letter acceptance, loan processing, and student visa filing."
  }
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function StudyAbroadContent() {
  const [selectedRegion, setSelectedRegion] = useState<"All" | "English" | "Europe" | "Asia">("All");
  const [activeModalCountry, setActiveModalCountry] = useState<Destination | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Canada",
    degree: "Master's / PG",
    intake: "2026 Intake"
  });

  // Intersection observer for entrance animations
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);

    const observerOptions = { threshold: 0.15 };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "destinations-grid") setGridVisible(true);
          if (entry.target.id === "why-umang") setWhyVisible(true);
          if (entry.target.id === "roadmap-steps") setStepsVisible(true);
          if (entry.target.id === "faq-section") setFaqVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const gridEl = document.getElementById("destinations-grid");
    const whyEl = document.getElementById("why-umang");
    const stepsEl = document.getElementById("roadmap-steps");
    const faqEl = document.getElementById("faq-section");

    if (gridEl) observer.observe(gridEl);
    if (whyEl) observer.observe(whyEl);
    if (stepsEl) observer.observe(stepsEl);
    if (faqEl) observer.observe(faqEl);

    return () => observer.disconnect();
  }, []);

  // Filtered destination list
  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (selectedRegion === "All") return true;
    return d.region === selectedRegion;
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        destination: "Canada",
        degree: "Master's / PG",
        intake: "2026 Intake"
      });
    }, 4000);
  };

  return (
    <main className="w-full bg-[#f8fafc] text-slate-800 overflow-hidden font-sans">
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
          HERO SECTION (Matching Reference Screenshot 1 + Animations)
         ========================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] pt-10 sm:pt-14 pb-14 sm:pb-20 border-b border-slate-200">
        {/* Subtle Decorative Background Circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Content Column */}
            <div
              className={`lg:col-span-6 text-center lg:text-left transition-all duration-1000 ease-out transform ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e52928] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm animate-pulse">
                <svg className="w-4 h-4 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="2" /><path strokeWidth="1.6" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>
                <span>Global Higher Education Gateway</span>
              </div>

              {/* Exact Reference Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Start your Journey to{" "}
                <span className="block text-[#0a1e38] mt-1 relative inline-block">
                  STUDY ABROAD
                  <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#e52928]/15 -z-10 rounded-sm" />
                </span>
              </h1>

              {/* Sub-tagline */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Unlock world-class degrees, generous scholarships, and vibrant global careers across{" "}
                <span className="font-semibold text-slate-900">Canada, USA, UK, Australia, New Zealand & Europe</span> with Umang Career Consultancy&apos;s trusted admission & visa specialists.
              </p>

              {/* Bullet Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-left max-w-md mx-auto lg:mx-0 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>100% Free Initial Profile Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>1,500+ Global Partner Universities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Transparent Visa Lodgement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Fast-Track Education Loans</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#destinations-grid"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-[#e52928] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <PlaneIcon className="w-5 h-5" />
                  <span>Explore 18+ Destinations</span>
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#0a1e38] border-2 border-[#0a1e38] hover:border-[#e52928] hover:text-[#e52928] font-bold text-base px-7 py-3.5 rounded-lg shadow-sm transition-all duration-300"
                >
                  <PhoneIcon />
                  <span className="text-[#0a1e38] hover:text-[#e52928]">+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Hero Graphic Column (Circular Student Avatar with Orbit Flags) */}
            <div
              className={`lg:col-span-6 flex justify-center items-center relative transition-all duration-1000 delay-200 ease-out transform ${
                heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Floating Container */}
              <div className="relative w-[340px] sm:w-[440px] md:w-[500px] aspect-square flex items-center justify-center anim-gentle-float">
                {/* Glowing Outer Rings */}
                <div className="absolute inset-0 rounded-full border border-blue-200/60 animate-ping [animation-duration:4s] pointer-events-none" />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-sky-300/80 animate-spin [animation-duration:60s] pointer-events-none" />

                {/* Central High Quality Generated Hero Graphic */}
                <div className="relative w-full h-full p-4 flex items-center justify-center transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/study-abroad-hero.png"
                    alt="Study Abroad Student and Global Countries Orbit - Umang Career Consultancy"
                    width={520}
                    height={520}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3.5s]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Visa Success</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">98.7% Approvals</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:4.2s]">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-lg"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg></div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Alumni Network</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">5,000+ Students</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          DESTINATIONS DIRECTORY (18 Countries matching user screenshots)
         ========================================================= */}
      <section id="destinations-grid" className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <SectionHeader
            title="Global Study Destinations"
            subtitle="Explore leading international study hubs with renowned universities, high visa grant rates, and thriving career prospects."
            inView={gridVisible}
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {[
              { key: "All", label: "All Destinations (18)" },
              { key: "English", label: "Top English Countries" },
              { key: "Europe", label: "Schengen & Europe" },
              { key: "Asia", label: "Asia & Middle East" },
            ].map((tab) => {
              const active = selectedRegion === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedRegion(tab.key as any)}
                  className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${
                    active
                      ? "bg-[#0a1e38] text-white shadow-md transform scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Country Cards Grid (3 Columns matching reference layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredDestinations.map((dest, idx) => (
              <div
                key={dest.id}
                className="group bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out flex flex-col items-center hover:-translate-y-1.5"
                style={{
                  transitionDelay: `${(idx % 3) * 80}ms`
                }}
              >
                {/* 1. Country Name at Top (Matching Reference Screenshot) */}
                <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] tracking-tight mb-4 group-hover:text-[#e52928] transition-colors">
                  {dest.name}
                </h3>

                {/* 2. Rounded Landmark Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                  <Image
                    src={dest.image}
                    alt={dest.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Badge overlay */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#0a1e38] shadow-sm">
                    {dest.badgeText}
                  </div>

                  {/* 3. Miniature Country Flag Badge Overlapping Bottom-Right Corner (Exact Reference Match) */}
                  <div className="absolute bottom-3 right-3 z-10 transition-transform duration-300 group-hover:scale-110">
                    <FlagBadge country={dest.name} />
                  </div>
                </div>

                {/* Card Quick Info Highlights */}
                <div className="w-full mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="font-semibold text-slate-500">Post-Study Work:</span>
                    <span className="font-bold text-[#0a1e38]">{dest.postStudyWork}</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="font-semibold text-slate-500">Intakes:</span>
                    <span className="font-semibold text-slate-800">{dest.topIntakes}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-500">Avg Tuition:</span>
                    <span className="font-bold text-emerald-600">{dest.avgTuition}</span>
                  </div>
                </div>

                {/* 4. Dark Navy Button "Read More" (Exact Reference Match) */}
                <div className="w-full mt-5">
                  <button
                    onClick={() => setActiveModalCountry(dest)}
                    className="w-full py-3 px-4 rounded-xl bg-[#0a1e38] hover:bg-[#e52928] text-white font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-red-500/25 transition-all duration-300 group/btn"
                  >
                    <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">
                      <PlaneIcon className="w-4 h-4" />
                    </span>
                    <span>Read More</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          COUNTRY DETAILS MODAL (Interactive Popup on Read More)
         ========================================================= */}
      {activeModalCountry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalCountry(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all duration-300 scale-100 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Landmark Image */}
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src={activeModalCountry.image}
                alt={activeModalCountry.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalCountry(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                aria-label="Close modal"
              >
                <CloseIcon />
              </button>

              {/* Title & Flag in Header */}
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <FlagBadge country={activeModalCountry.name} />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Study in {activeModalCountry.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    {activeModalCountry.badgeText}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs sm:text-sm">
                <div>
                  <div className="text-slate-500 font-semibold">Post-Study Work</div>
                  <div className="text-[#0a1e38] font-bold mt-0.5">{activeModalCountry.postStudyWork}</div>
                </div>
                <div>
                  <div className="text-slate-500 font-semibold">Typical Intakes</div>
                  <div className="text-slate-800 font-bold mt-0.5">{activeModalCountry.topIntakes}</div>
                </div>
                <div>
                  <div className="text-slate-500 font-semibold">Est. Tuition Fee</div>
                  <div className="text-emerald-700 font-bold mt-0.5">{activeModalCountry.avgTuition}</div>
                </div>
              </div>

              {/* Key Advantages */}
              <div>
                <h4 className="text-base font-extrabold text-[#0a1e38] mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e52928]" />
                  Why Choose {activeModalCountry.name}?
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {activeModalCountry.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Disciplines */}
              <div>
                <h4 className="text-base font-extrabold text-[#0a1e38] mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0a1e38]" />
                  Trending Courses & In-Demand Programs
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalCountry.topCourses.map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-red-50 text-[#e52928] text-xs font-bold border border-red-100"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Call to Action */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/study-abroad/${activeModalCountry.id}`}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0a1e38] font-bold text-center text-sm border border-slate-200 transition-colors"
                >
                  Full Country Guide →
                </Link>
                <a
                  href="#counselling-form"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, destination: activeModalCountry.name }));
                    setActiveModalCountry(null);
                  }}
                  className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-center text-sm sm:text-base shadow-md transition-colors"
                >
                  Book Free Counselling for {activeModalCountry.name}
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto py-3 px-5 rounded-xl bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-center text-sm sm:text-base inline-flex items-center justify-center gap-2"
                >
                  <PhoneIcon />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          WHY STUDY ABROAD WITH UMANG CAREER CONSULTANCY
         ========================================================= */}
      <section id="why-umang" className="w-full py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Why Umang Career Consultancy?"
            subtitle="Over a decade of uncompromised integrity, transparent guidance, and exceptional visa approval records."
            inView={whyVisible}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                iconSvg: "university",
                title: "Direct University Ties",
                desc: "Official representation and direct application tie-ups with 1,500+ universities across 25+ countries."
              },
              {
                iconSvg: "profile",
                title: "Genuine Profile Matching",
                desc: "No biased recommendations. We match your academic background, test scores, and goals with zero hidden agendas."
              },
              {
                iconSvg: "sop",
                title: "Bespoke SOP & LOR",
                desc: "Original, human-crafted SOPs and resumes tailored to admissions committee expectations and visa requirements."
              },
              {
                iconSvg: "ecosystem",
                title: "Complete Ecosystem",
                desc: "From initial IELTS coaching to education loans, forex cards, flights, and post-arrival housing assistance."
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-2xl flex items-center justify-center mb-5 group-hover:bg-[#e52928] group-hover:scale-110 transition-all duration-300">
                  {card.iconSvg === "university" ? (
                  <svg className="w-7 h-7 text-[#e52928] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                ) : card.iconSvg === "profile" ? (
                  <svg className="w-7 h-7 text-[#e52928] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                ) : card.iconSvg === "sop" ? (
                  <svg className="w-7 h-7 text-[#e52928] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                ) : (
                  <svg className="w-7 h-7 text-[#e52928] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                )}
                </div>
                <h3 className="text-lg font-extrabold text-[#0a1e38] mb-2.5 group-hover:text-[#e52928] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          8-STEP STUDY ABROAD ROADMAP (Dark Navy #0a1e38)
         ========================================================= */}
      <section id="roadmap-steps" className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            title="Our 8-Step Study Abroad Roadmap"
            subtitle="A systematic, stress-free pathway from your initial dream to landing at your overseas campus."
            variant="dark"
            inView={stepsVisible}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROADMAP_STEPS.map((item, index) => (
              <div
                key={index}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-[#22c55e]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black px-2.5 py-1 rounded bg-[#22c55e] text-slate-950 tracking-wider">
                    STEP {item.step}
                  </span>
                  <span className="text-xs text-white/40 font-mono">0{index + 1}/08</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#22c55e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Consultation Bar inside Roadmap */}
          <div className="mt-12 bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Unsure which step to start with?
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Our Senior Academic Counselors assess your full profile completely free of charge.
              </p>
            </div>
            <a
              href="#counselling-form"
              className="inline-flex items-center justify-center gap-2 bg-[#e52928] hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
            >
              <span>Get Free Assessment</span>
              <PlaneIcon className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================
          STUDENT TESTIMONIALS / SUCCESS HIGHLIGHTS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Voices of Our Global Achievers"
            subtitle="Real experiences from students who turned their study abroad aspirations into reality with Umang."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aakash Mehta",
                destination: "Canada",
                university: "University of Windsor",
                course: "Master of Applied Computing",
                quote: "Umang Career Consultancy guided me from day one. When my previous visa had a minor discrepancy, their team re-drafted my SOP and submitted an impeccable file. Today I'm studying my dream MS program in Canada!",
                rating: 5
              },
              {
                name: "Pooja Trivedi",
                destination: "United Kingdom",
                university: "University of Leeds",
                course: "MSc International Business",
                quote: "The 1-on-1 attention was unbelievable. They handled my CAS issuance, visa filing, and even currency exchange without a single hiccup. I received my UK student visa within just 11 business days!",
                rating: 5
              },
              {
                name: "Rohan Patel",
                destination: "Germany",
                university: "TU Munich (TUM)",
                course: "MSc Mechanical & Process Engineering",
                quote: "Securing admission to a tuition-free public German university felt impossible until Sudip Sir and the Umang team streamlined my APS certificate and blocked account. Outstanding professionalism!",
                rating: 5
              }
            ].map((testi, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testi.rating)].map((_, idx) => (
                      <StarIcon key={idx} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                    &ldquo;{testi.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-[#0a1e38] text-base">{testi.name}</div>
                    <div className="text-xs text-slate-500 font-medium">{testi.course}</div>
                    <div className="text-xs font-bold text-[#e52928]">{testi.university}</div>
                  </div>
                  <div className="text-xs font-black bg-white px-2.5 py-1.5 rounded-full border border-slate-200 text-slate-800 shadow-sm">
                    {testi.destination}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          INTERACTIVE FAQS SECTION
         ========================================================= */}
      <section id="faq-section" className="w-full py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about planning your international higher education."
            inView={faqVisible}
          />

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0a1e38] hover:text-[#e52928] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                      <ChevronDownIcon isOpen={isOpen} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          CONSULTATION BOOKING FORM & CALL STRIP
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                Fast-Track Admissions
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Book Your Free 1-on-1 Study Abroad Consultation
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Connect with our senior study abroad specialists. Receive personalized university shortlists, scholarship eligibility insights, and an exact timeline tailored to your background.
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Zero Consultancy Charges for University Selection</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Complete Transparency & Guaranteed Response</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Instant Verification of Academic Documents</span>
                </div>
              </div>

              {/* Direct Call Box */}
              <div className="pt-2">
                <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">
                  Prefer direct calling?
                </div>
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center gap-3 text-xl sm:text-2xl font-black text-[#0a1e38] hover:text-[#e52928] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e52928] text-white flex items-center justify-center shadow-md">
                    <PhoneIcon />
                  </div>
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <h3 className="text-2xl font-black text-[#0a1e38]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our Senior Study Abroad Counselor will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Priyansh Shah"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="e.g. priyansh@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Target Country *
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData((prev) => ({ ...prev, destination: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        {DESTINATIONS.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Intended Degree Level
                      </label>
                      <select
                        value={formData.degree}
                        onChange={(e) => setFormData((prev) => ({ ...prev, degree: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Bachelor's / Undergrad">Bachelor&apos;s / Undergrad</option>
                        <option value="Master's / PG">Master&apos;s / Postgraduate</option>
                        <option value="PG Diploma / Co-op">PG Diploma / Co-op</option>
                        <option value="PhD / Doctorate">PhD / Doctorate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Target Intake
                      </label>
                      <select
                        value={formData.intake}
                        onChange={(e) => setFormData((prev) => ({ ...prev, intake: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="2026 Fall Intake">2026 Fall Intake (Aug/Sep)</option>
                        <option value="2027 Spring Intake">2027 Spring Intake (Jan/Feb)</option>
                        <option value="2027 Summer/Fall">2027 Summer/Fall</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                  >
                    Submit Free Consultation Request
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>We respect your privacy. No spam. You will be contacted only by our certified counselors.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          RED DIRECT CALL BAR (Matching Reference Call Banner)
         ========================================================= */}
      <section className="w-full bg-[#e52928] py-8 text-white relative shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-xs uppercase tracking-widest font-black text-red-200">
              Immediate Admissions Support
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Book Free Counselling With Our Experts Today
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
