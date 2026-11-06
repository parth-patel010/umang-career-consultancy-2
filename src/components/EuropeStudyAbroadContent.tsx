"use client";

import { sendFormInquiry } from "@/lib/inquiries/web3forms";
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

/* European Flag Badge */
function EUFlagBadge() {
  return (
    <div className="w-6 h-4 bg-[#003399] rounded flex items-center justify-center shadow-xs overflow-hidden shrink-0">
      <svg className="w-3.5 h-3.5 text-[#ffcc00]" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="3.5" r="1" />
        <circle cx="16.2" cy="4.6" r="1" />
        <circle cx="19.4" cy="7.8" r="1" />
        <circle cx="20.5" cy="12" r="1" />
        <circle cx="19.4" cy="16.2" r="1" />
        <circle cx="16.2" cy="19.4" r="1" />
        <circle cx="12" cy="20.5" r="1" />
        <circle cx="7.8" cy="19.4" r="1" />
        <circle cx="4.6" cy="16.2" r="1" />
        <circle cx="3.5" cy="12" r="1" />
        <circle cx="4.6" cy="7.8" r="1" />
        <circle cx="7.8" cy="4.6" r="1" />
      </svg>
    </div>
  );
}

/* Course Icons (Green Stroke Styling) */
function BusinessIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

function EngineeringIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function DataAiIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function HospitalityIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

/* -------------------------------------------------------------
   REUSABLE SECTION HEADER
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
   MAIN COMPONENT
------------------------------------------------------------- */
export default function EuropeStudyAbroadContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "Germany",
    course: "Computer Science & IT",
    intake: "September / October 2026",
    dependentRelocation: "Yes (Spouse / Family)",
  });

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(await sendFormInquiry(e.currentTarget as HTMLFormElement, "Europe Study Abroad page"))) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        country: "Germany",
        course: "Computer Science & IT",
        intake: "September / October 2026",
        dependentRelocation: "Yes (Spouse / Family)",
      });
    }, 4500);
  };

  const whyChooseEurope = [
    {
      title: "World-Renowned Education",
      desc: "Graduate from historic public universities and elite business schools recognized across the globe.",
      badge: "Historic & Elite",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "Affordable Tuition & Scholarships",
      desc: "Benefit from low tuition fees—and even entirely tuition-free education in certain public systems—alongside extensive European scholarship grants.",
      badge: "Low/No Tuition Grants",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "The Schengen Advantage",
      desc: "Hold a single student visa that grants you border-free, visa-free travel across all 29 Schengen member nations for leisure, networking, or exploration.",
      badge: "29 Nations Border-Free",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Post-Study Career Pathways",
      desc: "Access attractive stay-back and job-seeker visas upon graduation to kickstart your career in thriving European economies.",
      badge: "Stay-Back & Job-Seeker",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  const topDestinations = [
    {
      country: "Finland",
      tagline: "World's Happiest Country & Concurrent Family Visas",
      desc: "One of the most open and family-friendly study destinations in Europe. International students can apply for dependent visas for their family members concurrently. Spouses are granted unrestricted, full-time work rights without needing a separate work permit.",
      badge: "Concurrent Filing • Unrestricted Work",
      highlight: "Spouses can work full-time immediately without a separate work permit.",
      image: "/destinations/germany-landmark.jpg",
    },
    {
      country: "Sweden",
      tagline: "Innovation Giant & Direct Family Residence",
      desc: "Highly supportive of international student families. Registered partners and minor children can accompany the student directly on a resident permit for the duration of the course. Spouses are legally allowed to work full-time while you complete your program.",
      badge: "Full-Time Spousal Work Rights",
      highlight: "Direct family residence permit issued for the entire program duration.",
      image: "/destinations/denmark.jpg",
    },
    {
      country: "Denmark",
      tagline: "PBL Learning, Green Tech & Duration-Linked Work",
      desc: "Allows eligible international students to bring a spouse, partner, and dependent children. This applies mostly to state-approved higher education programs. Accompanying spouses receive work rights linked to the duration of the student's residence permit.",
      badge: "Duration-Linked Work Rights",
      highlight: "Spouses receive legal work rights matching the student's permit duration.",
      image: "/destinations/denmark.jpg",
    },
    {
      country: "Germany",
      tagline: "Industrial Powerhouse & Family Reunification",
      desc: "Supports family relocation through the official Family Reunification visa route. Spouses can legally live and work full-time in Germany once the residence permit is issued, provided the family demonstrates sufficient independent living funds and the spouse holds basic (A1 level) German language skills.",
      badge: "Family Reunification • Full Work",
      highlight: "Low/zero tuition fees, blocked account Sperrkonto setup & full spousal work rights.",
      image: "/destinations/germany.jpg",
    },
    {
      country: "France",
      tagline: "Culinary, Business & Long-Stay Companion Visas",
      desc: "Spouses can apply for a long-stay companion visa under specific family reunification protocols once the student is securely enrolled. The right to full employment is available subject to standard immigration validation.",
      badge: "Long-Stay Companion Protocol",
      highlight: "World-class grande écoles, subsidized student housing (CAF) & Schengen access.",
      image: "/destinations/france.jpg",
    },
    {
      country: "Spain",
      tagline: "Vibrant Lifestyle & Sequential Family Visas",
      desc: "Highly welcoming to international families. The visa framework allows a student's dependent family members to travel, though typically the primary applicant processes first, with the dependent visa following shortly after. Spouses can secure work rights once they complete local registration steps.",
      badge: "Welcoming Family Framework",
      highlight: "Warm Mediterranean climate, leading business schools & local registration work rights.",
      image: "/destinations/italy.jpg",
    },
  ];

  const schengenVisaProcess = [
    {
      title: "Verified University Acceptance",
      desc: "Securing a formal admission letter from a recognized European institution.",
      badge: "Type D Long-Stay Visa",
      icon: (
        <svg className="w-6 h-6 text-[#012169]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Blocked Account & Financial Viability",
      desc: "Structuring your financial proofs according to each country's mandate—such as setting up a German Blocked Account (Sperrkonto) or showing sufficient shared financial capacity to comfortably support accompanying dependents.",
      badge: "Sperrkonto & Proof of Funds",
      icon: (
        <svg className="w-6 h-6 text-[#012169]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "English Medium of Instruction (MOI) Pathways",
      desc: "Identifying programs that allow you to secure university admission using a Medium of Instruction certificate from your previous college, minimizing strict IELTS or PTE rules where applicable.",
      badge: "MOI Certificate Pathways",
      icon: (
        <svg className="w-6 h-6 text-[#012169]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "Comprehensive Travel & Health Insurance",
      desc: "Arranging compliant international student health insurance that meets strict Schengen embassy coverage prerequisites for the whole family.",
      badge: "Schengen Embassy Standard",
      icon: (
        <svg className="w-6 h-6 text-[#012169]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const successSteps = [
    {
      step: "01",
      title: "Family & Profile Alignment",
      desc: "Matching your academic background, budget, and family relocation goals with the ideal European country and university program.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Compliance & Document Preparation",
      desc: "Flawlessly organizing your academic transcripts, marriage/birth certificates, financial dossiers, health covers, and visa forms.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Interview Training & VFS Lodgement",
      desc: "Providing specialized mock interview coaching to build your confidence for consulate interactions, followed by seamless VFS Global appointment booking.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Pre-Departure Orientation",
      desc: "Prepping you thoroughly for European student housing, flight tracking, cost-of-living management, and initial local arrival steps.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  const FAQS = [
    {
      q: "What is a Schengen National Long-Stay Visa (Type D)?",
      a: "A National Long-Stay Visa (Type D) is issued by a specific Schengen member country (such as Germany, Finland, Sweden, or France) for study programs exceeding 90 days. Once issued, it doubles as your legal residency permit, allowing you to live and study in that host nation while enjoying visa-free travel across all 29 Schengen member countries for up to 90 days in any 180-day period.",
    },
    {
      q: "Can I bring my spouse and children with me when studying in Europe?",
      a: "Yes! Several European countries have exceptionally supportive dependent visa frameworks. In Finland and Sweden, dependent visas can be applied for concurrently, granting your spouse unrestricted, full-time work rights. Denmark, Germany, France, and Spain also permit family accompaniment, each with specific requirements such as proof of independent living funds, marriage validation, or basic language proficiency (A1 in Germany).",
    },
    {
      q: "Can I study in Europe without IELTS?",
      a: "Yes! Many universities across Germany, France, Poland, Hungary, and other European countries offer English-taught degrees and accept a Medium of Instruction (MOI) certificate from your previous university. If your Bachelor's degree was conducted in English, you may be exempt from IELTS or PTE depending on the institution's specific admissions guidelines.",
    },
    {
      q: "What is a German Blocked Account (Sperrkonto)?",
      a: "A Blocked Account (Sperrkonto) is a mandatory financial prerequisite for international students moving to Germany. You deposit the legally required living funds (approx. €11,904/year for a single student) into an authorized German bank (like Expatrio or Fintiba). Once in Germany, a fixed monthly amount is disbursed into your local checking account to cover living expenses.",
    },
    {
      q: "Are public universities in Europe really tuition-free?",
      a: "In Germany, public universities in almost all federal states charge zero tuition fees for undergraduate and consecutive master's degrees (only a nominal semester administration fee of €150–€350). Countries like Finland and Sweden offer generous tuition scholarships covering 50% to 100% of fees, while Poland, Hungary, and Italy offer low tuition rates (€1,500–€4,000/year).",
    },
    {
      q: "Can international students work part-time in Europe?",
      a: "Yes. International students in European countries typically have legal part-time work rights. In Germany, students can work 140 full days or 280 half days per calendar year. In Finland, students can work up to 30 hours per week, and in France, up to 964 hours annually (approx. 20 hours per week).",
    },
  ];

  return (
    <main className="w-full bg-[#f8fafc] text-slate-800 font-sans overflow-hidden">
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
          1. HERO SECTION
         ========================================================= */}
      <section className="relative w-full bg-white pt-10 sm:pt-14 pb-14 sm:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div
              className={`lg:col-span-7 text-center lg:text-left transition-all duration-1000 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#003399] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
                <EUFlagBadge />
                <span>Umang Career Consultancy • Europe Student Visa Page</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-tight">
                Unlock a Continent of Opportunity:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] via-[#0a1e38] to-[#e52928]">
                  Study in Europe
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#e52928] mt-2">
                  with Umang Career Consultancy
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Your gateway to global academic excellence, rich cultural history, and border-free career opportunities starts here. At Umang Career Consultancy, we turn your aspirations of studying in Europe into a reality through expert Schengen visa processing, comprehensive document formatting, and dedicated profile-matching.
              </p>

              {/* Feature Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-sm sm:text-base font-bold text-[#0a1e38]">29 Nations</div>
                  <div className="text-[11px] text-slate-500 font-medium">Schengen Freedom</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-sm sm:text-base font-bold text-[#e52928]">Low / Zero Tuition</div>
                  <div className="text-[11px] text-slate-500 font-medium">Top Public Systems</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-sm sm:text-base font-bold text-emerald-600">Dependent Visas</div>
                  <div className="text-[11px] text-slate-500 font-medium">Spouse Work Rights</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-sm sm:text-base font-bold text-[#0a1e38]">Stay-Back Visas</div>
                  <div className="text-[11px] text-slate-500 font-medium">EU Job-Seeker Routes</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Apply for Europe</span>
                  <span>→</span>
                </a>
                <a
                  href="tel:+919173186109"
                  className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Celebratory Graphic */}
            <div
              className={`lg:col-span-5 flex justify-center items-center transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center anim-gentle-float">
                <div className="relative w-full h-full p-2 transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/study-abroad-hero.png"
                    alt="Study Abroad in Europe - Umang Career Consultancy"
                    width={520}
                    height={520}
                    className="w-full h-full object-contain drop-shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          2. WHY CHOOSE EUROPE FOR YOUR HIGHER EDUCATION?
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Why Choose Europe for Your Higher Education?"
            subtitle="Historic academic prestige, tuition-free opportunities, border-free Schengen travel, and world-leading research hubs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseEurope.map((item, idx) => (
              <div
                key={idx}
                className="h-full p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#e52928] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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

          {/* Europe Academic & Schengen Highlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#003399] via-[#0a1e38] to-[#122e54] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-[#e52928] text-white text-xs font-black uppercase tracking-wider">
                Europe Higher Education &amp; Schengen Innovation Hub
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Historic Academic Prestige, Border-Free Schengen Mobility &amp; Global Careers
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Study across 29 Schengen member countries with globally ranked research universities, English-taught degree courses, generous dependent relocation policies, and unmatched post-study job seeker permits.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#counselling-form"
                className="px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#1ea750] text-white font-bold text-sm shadow-md transition-all whitespace-nowrap"
              >
                Explore European Universities
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          3. EXPLORE TOP EUROPEAN STUDY DESTINATIONS & DEPENDENT VISA POLICIES
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore Top European Study Destinations & Dependent Visa Policies"
            subtitle="We provide specialized, end-to-end processing for major educational hubs across Europe, giving accurate guidance on moving with your spouse and children:"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {topDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="h-full bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#003399] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-50 text-[#003399] border border-blue-100 uppercase tracking-wider">
                      {dest.country}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      Family Friendly
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors mb-2">
                    {dest.country}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 mb-3">{dest.tagline}</div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {dest.desc}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800 flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5 shrink-0">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{dest.highlight}</span>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-100/70 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a1e38]">
                  <span>{dest.badge}</span>
                  <span className="text-[#e52928] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. NAVIGATING THE EUROPE SCHENGEN STUDENT VISA PROCESS
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Navigating the Europe Schengen Student Visa Process"
            subtitle="Studying in a Schengen country requires a National Long-Stay Visa (Type D) which doubles as a Schengen residency permit. Our dedicated immigration team at Umang Career Consultancy ensures your application meets strict European consulate rules:"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schengenVisaProcess.map((item, idx) => (
              <div
                key={idx}
                className="h-full bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#003399] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#003399] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. TOP COURSES ACROSS EUROPEAN UNIVERSITIES (Dark Navy)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Popular Study Areas Across Europe"
            subtitle="Explore high-demand academic disciplines delivering globally accredited degrees across 29 Schengen member states."
            variant="dark"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Engineering & Automotive Tech",
                icon: <EngineeringIcon />,
                desc: "Mechanical, Robotics, Automotive Design, Renewable Systems, and Industry 4.0 in Germany, Sweden, and Finland.",
              },
              {
                title: "Computer Science & Artificial Intelligence",
                icon: <ComputerIcon />,
                desc: "Cybersecurity, Cloud Architectures, Machine Learning, and Big Data Analytics across top European tech hubs.",
              },
              {
                title: "Business Administration & Management",
                icon: <BusinessIcon />,
                desc: "MBA, International Trade, Supply Chain Logistics, and Global Finance in France, Spain, and Denmark.",
              },
              {
                title: "Data Science & Cloud Systems",
                icon: <DataAiIcon />,
                desc: "Enterprise Architecture, Predictive Analytics, and High-Performance Computing across EU research clusters.",
              },
              {
                title: "Health, Pharmaceuticals & Biotech",
                icon: <HealthIcon />,
                desc: "Public Health, Pharmacology, Clinical Research, and Biomedical Innovation in Denmark, Germany, and Sweden.",
              },
              {
                title: "Hospitality, Tourism & Luxury Management",
                icon: <HospitalityIcon />,
                desc: "International Hotel Management, Luxury Brand Marketing, and Culinary Arts in France and Spain.",
              },
            ].map((c, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#22c55e]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-sm"
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {c.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#22c55e] transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. THE UMANG CAREER CONSULTANCY ADVANTAGE: OUR 4-STEP SUCCESS PROCESS
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Umang Career Consultancy Advantage: Our 4-Step Success Process"
            subtitle="From family and profile alignment to document drafting, consulate interview coaching, VFS Global lodgement, and pre-departure briefings."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {successSteps.map((s, idx) => (
              <div
                key={idx}
                className="h-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between group"
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
          7. FREQUENTLY ASKED QUESTIONS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions: Study in Europe & Schengen Visas"
            subtitle="Verified answers regarding Schengen Type D student visas, dependent relocation rules, blocked accounts, and English-taught programs."
          />

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0a1e38] hover:text-[#e52928] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-slate-600 shadow-xs">
                      <ChevronDownIcon isOpen={isOpen} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
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
          8. CONSULTATION FORM SECTION
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                Vadodara Office • Certified Europe Counselors
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Begin Your European Adventure Today!
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Don&apos;t let complex multi-country regulations or changing dependent rules delay your family&apos;s future. Partner with the destination experts at Umang Career Consultancy to secure your path to Europe. Contact our Vadodara office today for a personalized consultation!
              </p>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-left shadow-sm">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Family &amp; Profile Alignment Across 29 Schengen Nations</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Blocked Account (Sperrkonto) &amp; Financial Dossier Structuring</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>English MOI Admissions &amp; Dependent Visa Processing</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Consulate Mock Interviews &amp; VFS Appointment Lodgement</span>
                </div>
              </div>

              {/* Direct Call Info */}
              <div className="pt-2 space-y-2">
                <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">
                  Talk to Umang Career Consultancy Today:
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="tel:+919173186109"
                    className="anim-phone-ring inline-flex items-center gap-2.5 text-lg sm:text-xl font-black text-[#0a1e38] hover:text-[#e52928] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#e52928] text-white flex items-center justify-center shadow-md">
                      <PhoneIcon />
                    </div>
                    <span>+91 91731 86109</span>
                  </a>
                  <span className="text-slate-300 font-bold hidden sm:inline">•</span>
                  <a
                    href="tel:+919712610086"
                    className="anim-phone-ring inline-flex items-center gap-2.5 text-lg sm:text-xl font-black text-[#0a1e38] hover:text-[#e52928] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#0a1e38] text-white flex items-center justify-center shadow-md">
                      <PhoneIcon />
                    </div>
                    <span>+91 97126 10086</span>
                  </a>
                </div>
              </div>

              <div className="text-xs text-slate-500 space-y-1">
                <div>
                  <span className="font-bold text-slate-700">Vadodara Office: </span>
                  First Floor 25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP road, Vadodara Gujarat. 390019
                </div>
                <div className="text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-600">Email: </span>
                  umangcareer2022@gmail.com • umangcareer2026@gmail.com • umangcareer2023@gmail.com
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-black text-[#0a1e38]">
                    Inquiry Received for Europe!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our certified Europe and Schengen visa counselor will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
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
                        placeholder="e.g. Parth Patel"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
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
                        placeholder="e.g. parth@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Country *
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Germany">Germany (Tuition-Free & Blocked Account)</option>
                        <option value="Finland">Finland (Concurrent Dependent Visas)</option>
                        <option value="Sweden">Sweden (Direct Family Residence)</option>
                        <option value="Denmark">Denmark (Duration-Linked Spousal Work)</option>
                        <option value="France">France (Grande Écoles & Long-Stay Companion)</option>
                        <option value="Spain">Spain (Mediterranean Hub & Sequential Visa)</option>
                        <option value="Poland">Poland (Low Living Cost & Central Europe)</option>
                        <option value="Hungary">Hungary (Affordable Medicine & Engineering)</option>
                        <option value="Ireland">Ireland (European Silicon Valley & 2-Yr PSWV)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Course Stream
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData((prev) => ({ ...prev, course: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Engineering & Automotive Tech">Engineering &amp; Automotive Tech</option>
                        <option value="Computer Science & IT">Computer Science &amp; IT</option>
                        <option value="Business Administration & Management">Business Administration &amp; Management</option>
                        <option value="Data Science & Artificial Intelligence">Data Science &amp; Artificial Intelligence</option>
                        <option value="Health, Pharmaceuticals & Biotech">Health, Pharmaceuticals &amp; Biotech</option>
                        <option value="Hospitality, Tourism & Luxury">Hospitality, Tourism &amp; Luxury</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Relocating With Family / Spouse?
                      </label>
                      <select
                        value={formData.dependentRelocation}
                        onChange={(e) => setFormData((prev) => ({ ...prev, dependentRelocation: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Yes (Spouse / Family)">Yes, relocating with spouse / family</option>
                        <option value="No (Individual Applicant)">No, applying as individual student</option>
                        <option value="Considering for Later">Considering family relocation later</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                  >
                    Submit Free Consultation Request for Europe
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                    100% Free Initial Assessment. Certified Schengen &amp; European immigration advisors.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          9. BOTTOM RED CALL BAR
         ========================================================= */}
      <section className="w-full bg-[#e52928] py-8 text-white relative shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-xs uppercase tracking-widest font-black text-red-200">
              Personalized Europe &amp; Schengen Admission Guidance
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Talk to Umang Career Consultancy Today
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+919173186109"
              className="anim-phone-ring inline-flex items-center gap-3 bg-white text-[#0a1e38] hover:text-[#e52928] font-black text-lg sm:text-xl px-7 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
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
