"use client";

import FeeNote from "@/components/FeeNote";
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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

function EducationIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function ArchitectureIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function HospitalityIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
   MAIN COMPONENT
------------------------------------------------------------- */
export default function CanadaStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Computer Science & IT",
    intake: "September 2026",
    level: "Post-Graduate / Master's"
  });

  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(await sendFormInquiry(e.currentTarget as HTMLFormElement, "Canada Study Abroad page"))) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        course: "Computer Science & IT",
        intake: "September 2026",
        level: "Post-Graduate / Master's"
      });
    }, 4500);
  };

  const whyChooseCanada = [
    {
      title: "Globally Prestigious Institutions",
      desc: "Graduate from top Designated Learning Institutions (DLIs) renowned for research excellence and industry integration.",
      badge: "Top DLIs",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "Post-Graduation Work Permit (PGWP)",
      desc: "Gain valuable Canadian work experience after completing your program, setting you on a solid path toward long-term career growth.",
      badge: "Up to 3-Year PGWP",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "High Quality of Life",
      desc: "Benefit from exceptionally safe campus environments, welcoming student communities, and a high standard of living.",
      badge: "Safe & Welcoming",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Flexible Work Hours",
      desc: "Balance your academic obligations with regular off-campus part-time work rights up to 24 hours per week during active semesters.",
      badge: "24h/Week Work Rights",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const latestUpdates = [
    {
      title: "Regular Stream Transition",
      desc: "The Student Direct Stream (SDS) has been formally discontinued by the Canadian government. All new applications from India are now processed seamlessly via the Regular Stream, which demands deep expertise in strategic documentation and precise application filing.",
      badge: "SDS Discontinued",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Provincial Attestation Letter (PAL)",
      desc: "Under the national processing caps, most undergraduate and post-graduate diploma candidates must secure a verified Provincial Attestation Letter (PAL) from their province of study alongside an official DLI Letter of Acceptance (LOA) before applying for a study permit.",
      badge: "Mandatory PAL Cap",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Master's and Doctoral Exemptions",
      desc: "In a major update, students enrolling in Master's and PhD programs at public universities are officially exempt from the PAL requirement, facilitating a direct and streamlined application path.",
      badge: "PAL Exempt: Masters & PhD",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Increased Financial Proofs",
      desc: "Applicants must demonstrate enhanced financial capacity to satisfy immigration officers. Candidates must show at least CAD 22,895 in available living expense funds, which is entirely separate from first-year tuition fees and travel allowances.",
      badge: "CAD 22,895 Living Funds",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const keyRequirements = [
    {
      title: "DLI Acceptance & Letters",
      desc: "Matching your credentials with verified Designated Learning Institutions and managing your LOA securements.",
      badge: "DLI & LOA Secured",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Guaranteed Investment Certificate (GIC)",
      desc: "Complete guidance on setting up, verifying, and transferring funds into a Canadian bank account to satisfy living cost mandates.",
      badge: "Canadian Bank GIC",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Compelling Statement of Purpose (SOP)",
      desc: "Assistance in writing a highly persuasive, legally compliant SOP that communicates your genuine intent to visa officers.",
      badge: "Strategic Intent SOP",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "Language Proficiency Clean Filing",
      desc: "Helping you correctly format and submit your required IELTS or PTE academic scores for standard processing windows.",
      badge: "IELTS & PTE Submission",
      icon: (
        <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
  ];

  const successSteps = [
    {
      step: "01",
      title: "Rigorous Profile Review",
      desc: "Evaluating your history, backlogs, and future career goals to align you with public DLIs and high-success provinces.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Financial & Attestation Structuring",
      desc: "Managing your GIC setup, attestation letter routing, and funding affidavits with complete compliance.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Portal Lodgement & Tracking",
      desc: "Accurately submitting your Study Permit application onto the IRCC portal to minimize administrative delays.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Pre-Departure Success Briefing",
      desc: "Preparing you thoroughly for Canadian travel, borders, winter clothing needs, health cover activations, and initial housing.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  const FAQS = [
    {
      q: "What is a DLI?",
      a: "A Designated Learning Institution (DLI) is a Canadian university, college, or technical institute approved by a provincial or territorial government to host international students. Under IRCC rules, you must hold an official acceptance letter from a valid DLI to qualify for a Canadian study permit."
    },
    {
      q: "How many hours can international students work?",
      a: "Eligible full-time international students can generally work up to 24 hours per week off campus during regular academic sessions and unlimited hours during eligible scheduled breaks (such as winter and summer breaks)."
    },
    {
      q: "Can I stay in Canada after completing my studies?",
      a: "Eligible graduates from qualifying DLI programs may apply for a Post-Graduation Work Permit (PGWP) lasting between 8 months and up to 3 years. This open work permit allows graduates to gain Canadian skilled work experience, unlocking pathways toward Permanent Residency (PR) via Express Entry (Canadian Experience Class) or Provincial Nominee Programs (PNP)."
    },
    {
      q: "Is PGWP available for every Canadian program?",
      a: "No. PGWP eligibility depends on the specific institution type, credential level, full-time study duration, and recent field-of-study alignment rules established by IRCC. Graduation from a DLI does not automatically guarantee PGWP eligibility, making expert course shortlisting vital."
    },
    {
      q: "Can I study in Canada without IELTS?",
      a: "While most institutions require IELTS, PTE, or TOEFL, some colleges accept alternative English proof (such as Medium of Instruction / MOI from previous English-medium education or Duolingo English Tests). However, for study permit visa processing, standard approved language benchmarks ensure smoother assessment."
    },
    {
      q: "How much money do I need to study in Canada?",
      a: "Applicants must demonstrate sufficient funds covering first-year tuition fees plus living expenses. Under the latest IRCC regulations, the base cost of living requirement is CAD 22,895 in available living expense funds for a single student (completely separate from first-year tuition fees and travel allowances), typically deposited into an approved Canadian Guaranteed Investment Certificate (GIC)."
    }
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
              className={`lg:col-span-6 text-center lg:text-left transition-all duration-1000 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e52928] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
                <span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">CA</span>
                <span>Umang Career Consultancy • Canada Student Visa Page</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-5xl font-black text-[#0a1e38] tracking-tight leading-tight">
                Achieve Your Canadian Dream:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e52928] via-[#0a1e38] to-[#e52928]">
                  Study in Canada
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#e52928] mt-2">
                  with Umang Career Consultancy
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Unlock world-class academic institutions, thriving diverse communities, and unparalleled career opportunities. At Umang Career Consultancy, we turn your aspirations of studying in Canada into reality through meticulous visa processing, transparent legal guidance, and personalized profile assessments.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                  <div className="text-sm sm:text-base font-bold text-[#0a1e38]">Regular Stream</div>
                  <div className="text-[11px] text-slate-500 font-medium">IRCC Compliant</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                  <div className="text-sm sm:text-base font-bold text-[#e52928]">PAL Guidance</div>
                  <div className="text-[11px] text-slate-500 font-medium">Masters/PhD Exempt</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                  <div className="text-sm sm:text-base font-bold text-emerald-600">CAD 22,895</div>
                  <div className="text-[11px] text-slate-500 font-medium">Living Funds (GIC)</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                  <div className="text-sm sm:text-base font-bold text-[#0a1e38]">24h / Week</div>
                  <div className="text-[11px] text-slate-500 font-medium">Work Rights</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Apply for Canada</span>
                  <span>→</span>
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Celebratory Student Graphic with Maple Leaf Wave */}
            <div
              className={`lg:col-span-6 flex justify-center items-center transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center anim-gentle-float">
                <div className="relative w-full h-full p-2 transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/canada-hero.png"
                    alt="Study Abroad in Canada Student - Umang Career Consultancy"
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
          2. WHY CHOOSE CANADA FOR YOUR HIGHER EDUCATION?
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Why Choose Canada for Your Higher Education?"
            subtitle="Unlock world-class Designated Learning Institutions, post-graduation work opportunities, welcoming multicultural cities, and 24-hour work rights."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseCanada.map((item, idx) => (
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

          {/* Canada Academic Heritage & Innovation Highlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#0a1e38] via-[#123661] to-[#0a1e38] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-[#e52928] text-white text-xs font-black uppercase tracking-wider">
                Canada Higher Education &amp; Global Innovation Hub
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Top DLIs, High Standard of Living &amp; Strategic Global Careers
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Home to globally renowned Designated Learning Institutions, Canada unites research excellence with flexible off-campus work rights and up to 3-year Post-Graduation Work Permits across high-demand tech, business, and healthcare sectors.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#counselling-form"
                className="px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#1ea750] text-white font-bold text-sm shadow-md transition-all whitespace-nowrap"
              >
                Explore Canada Institutions
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          3. NAVIGATING THE CANADIAN STUDY PERMIT PROCESS (LATEST IMMIGRATION UPDATES) & KEY REQUIREMENTS
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Navigating the Canadian Study Permit Process (Latest Immigration Updates)"
            subtitle="Canada's international student visa landscape has changed significantly. Following recent Immigration, Refugees and Citizenship Canada (IRCC) directives, applications must now follow specific updated pathways. Our immigration experts track these developments continuously to protect your file from rejection:"
          />

          {/* 4 Latest Updates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {latestUpdates.map((update, idx) => (
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

          {/* Key Requirements We Guide You Through Header & Grid */}
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1e38]">
              Key Requirements We Guide You Through
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
              We provide end-to-end assistance for every stage of your IRCC application, ensuring all documentation satisfies Canadian immigration authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyRequirements.map((req, idx) => (
              <div
                key={idx}
                className="h-full bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#e52928] transition-all duration-300 flex flex-col justify-between group"
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
          4. ABOUT CANADA
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                  About Canada
                </h2>
                <div className="w-16 h-1.5 bg-[#e52928] rounded-full mt-2 mb-4" />
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Canada is a North American country known for its diverse communities, high-quality education system and wide range of study options for international students. Located in the northern part of North America, Canada is the second-largest country in the world by total area.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                {[
                  "Located in the northern part of North America (second-largest country in the world by area)",
                  "Safe, welcoming, and culturally diverse communities with high living standards",
                  "Globally recognized qualifications from renowned public universities & polytechnics",
                  "Robust economy with major industry hubs in Toronto, Vancouver, Montreal, Calgary & Ottawa",
                  "Modern research laboratories, university hospitals, and cutting-edge tech incubators",
                  "Co-op academic degree formats enabling paid professional Canadian work experience",
                  "Designated Learning Institution (DLI) framework ensuring verified academic quality",
                  "Clear pathways toward Permanent Residency (PR) through Express Entry & PNP streams"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Toronto Skyline Landmark Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/destinations/canada.jpg"
                  alt="Toronto Skyline CN Tower Canada"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-black bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    Toronto • Canada
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-2">
                    North America&apos;s Financial & Academic Powerhouse
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          3. TOP COURSES IN CANADA (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Top Courses in Canada"
            subtitle="Explore high-demand Canadian academic degrees and post-graduate diplomas with strong employer recruitment."
            variant="dark"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Business Administration & Management",
                icon: <BusinessIcon />,
                desc: "MBA, Global Business Management, Project Management, and Supply Chain Logistics."
              },
              {
                title: "Computer Science & IT",
                icon: <ComputerIcon />,
                desc: "Cloud Architecture, Cybersecurity, Software Engineering, and Full-Stack Development."
              },
              {
                title: "Engineering & Technology",
                icon: <EngineeringIcon />,
                desc: "Civil, Mechanical, Electrical, Environmental, and Sustainable Energy Systems."
              },
              {
                title: "Data Science & Artificial Intelligence",
                icon: <DataAiIcon />,
                desc: "Big Data Analytics, Machine Learning, Cognitive Systems, and Business Intelligence."
              },
              {
                title: "Health Sciences",
                icon: <HealthIcon />,
                desc: "Nursing Practice, Healthcare Administration, Pharmacy, and Biotechnology."
              },
              {
                title: "Education",
                icon: <EducationIcon />,
                desc: "Early Childhood Education, Instructional Design, and Educational Leadership."
              },
              {
                title: "Architecture & Design",
                icon: <ArchitectureIcon />,
                desc: "Sustainable Urban Design, Interior Architecture, and Environmental Planning."
              },
              {
                title: "Hospitality & Tourism",
                icon: <HospitalityIcon />,
                desc: "International Hotel Operations, Event Management, and Culinary Management."
              },
              {
                title: "Finance & Accounting",
                icon: <FinanceIcon />,
                desc: "CPA Accredited Accounting, Financial Technology (FinTech), and Risk Analytics."
              }
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
          THE UMANG CAREER CONSULTANCY ADVANTAGE: OUR 4-STEP SUCCESS PROCESS
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="The Umang Career Consultancy Advantage: Our 4-Step Success Process"
            subtitle="From rigorous profile review and financial structuring to IRCC portal lodgement and pre-departure briefings."
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
          5. TOP UNIVERSITIES & INSTITUTIONS IN CANADA (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Top Universities & Institutions in Canada"
            subtitle="Umang Career Consultancy helps students compare institutions based on academic profile, preferred course, budget, location and career plans."
            variant="dark"
          />

          {/* 10 Circular Institution Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: "University of Toronto", logo: "/universities/canada/toronto.avif", acronym: "U of T" },
              { name: "McGill University", logo: "/universities/canada/mcgill.avif", acronym: "McGill" },
              { name: "Univ. of British Columbia", logo: "/universities/canada/ubc.avif", acronym: "UBC" },
              { name: "University of Alberta", logo: "/universities/canada/alberta.avif", acronym: "U of A" },
              { name: "University of Waterloo", logo: "/universities/canada/waterloo.avif", acronym: "Waterloo" },
              { name: "York University", logo: "/universities/canada/york.avif", acronym: "York" },
              { name: "University of Ottawa", logo: "/universities/canada/ottawa.avif", acronym: "uOttawa" },
              { name: "Western University", logo: "/universities/canada/western.avif", acronym: "Western" },
              { name: "University of Calgary", logo: "/universities/canada/calgary.avif", acronym: "UCalgary" },
              { name: "Simon Fraser University", logo: "/universities/canada/sfu.avif", acronym: "SFU" }
            ].map((uni, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white text-[#0a1e38] flex flex-col items-center justify-center p-2.5 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/20 border-2 border-white/80 overflow-hidden">
                  <Image
                    src={uni.logo}
                    alt={uni.name}
                    width={72}
                    height={72}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                  <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5 tracking-wider truncate max-w-[85px]">
                    {uni.acronym}
                  </div>
                </div>

                <div className="mt-3.5 text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-snug max-w-[130px]">
                  {uni.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Admissions & PGWP Guidance:</span> Admission requirements, tuition fees, and program availability vary by institution. Our certified Canadian counselors verify current DLI numbers and PGWP eligibility for every application.
          </div>

        </div>
      </section>

      {/* =========================================================
          6. CANADA TUITION FEES TABLE
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Canada Tuition Fees"
            subtitle="Tuition varies significantly according to the institution, province, program and level of study."
          />

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-[#0a1e38] border-b border-slate-200 font-extrabold">
                    <th className="py-4 px-6">Study Level</th>
                    <th className="py-4 px-6 text-center">Indicative Annual Tuition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">Bachelor&apos;s Degree</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">CAD 18,000 – 45,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">Master&apos;s Degree</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">CAD 16,000 – 40,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">Diploma / Graduate Certificate</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">CAD 13,500 – 27,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">PhD / Doctorate</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">Varies by University & Fellowship</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#0a1e38]">
                    <td className="py-4 px-6">Main Intakes</td>
                    <td className="py-4 px-6 text-center text-[#e52928]">
                      September (Fall), January (Winter) & selected May (Summer)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <FeeNote />
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 text-center">
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 text-[11px] font-black uppercase tracking-wider mr-2">Benchmark</span><span className="font-semibold text-slate-900">Statistics Canada Benchmark:</span> Statistics Canada reported an average international undergraduate tuition of CAD 41,746 for 2025/26, with substantial variations between colleges, polytechnics, and research universities.
          </div>

        </div>
      </section>

      {/* =========================================================
          7. MONTHLY COST OF LIVING (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Monthly Cost of Living in Canada"
            subtitle="Living expenses depend heavily on the province, city, and accommodation type. Metropolitan centers like Toronto and Vancouver have higher costs than prairie or Atlantic cities."
            variant="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accommodation",
                amount: "CAD 600 – 1,500+",
                desc: "On-campus dormitories, student homestays, or shared off-campus apartments."
              },
              {
                title: "Transportation",
                amount: "CAD 80 – 150+",
                desc: "Subsidized universal transit passes (U-Pass) across TTC, TransLink, and regional transit."
              },
              {
                title: "Groceries & Food",
                amount: "CAD 250 – 450+",
                desc: "Everyday supermarket groceries and student campus food services."
              },
              {
                title: "Health Insurance",
                amount: "Provincial / UHIP",
                desc: "University health insurance plan (UHIP in Ontario) or provincial healthcare (MSP in BC)."
              },
              {
                title: "Internet & Phone",
                amount: "CAD 30 – 80+",
                desc: "High-speed home fiber Wi-Fi and 5G cellular phone plans (BYOD options)."
              },
              {
                title: "Utilities",
                amount: "CAD 100 – 200+",
                desc: "Electricity, heating, water, and waste collection (often bundled in rental leases)."
              },
              {
                title: "Personal & Miscellaneous",
                amount: "CAD 100 – 300+",
                desc: "Clothing, winter gear, leisure, textbooks, and entertainment."
              },
              {
                title: "Total Monthly Budget",
                amount: "CAD 1,200 – 2,500+",
                desc: "Estimated student budget depending on whether you live in major vs. regional cities."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#22c55e]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-xs font-black px-2.5 py-1 rounded bg-[#22c55e] text-slate-950">
                    {item.amount}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          8. WORK WHILE STUDYING & POST-GRADUATION WORK PERMIT (PGWP)
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Work Rights & Post-Graduation Opportunities"
            subtitle="Understand current IRCC employment regulations while studying and subsequent post-study work authorization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Work While Studying */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
              <h3 className="text-2xl font-black text-[#0a1e38]">
                Work While Studying (24 Hours / Week)
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Eligible full-time international students may work off campus while pursuing their studies. Under current IRCC regulations:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span>Work up to <strong className="text-slate-900">24 hours per week</strong> off campus during active academic sessions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span>Work <strong className="text-slate-900">unlimited hours</strong> during scheduled breaks (such as winter & summer vacation).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span>Competitive minimum wages across provinces (typically CAD $15 – $17.50+ / hour).</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Post-Graduation Work Permit */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#e52928] flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg></div>
              <h3 className="text-2xl font-black text-[#0a1e38]">
                Post-Graduation Work Permit (PGWP)
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Eligible graduates from qualifying DLI institutions can apply for an open work permit lasting up to 3 years:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span>Valid for <strong className="text-slate-900">up to 3 years</strong> depending on degree duration and credential level.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span>Open work authorization permitting employment with any Canadian employer.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span>Direct points booster toward Canadian Permanent Residency (Express Entry & PNP streams).</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          9. POPULAR PROVINCES & TERRITORIES
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Popular Canadian Provinces & Territories"
            subtitle="Explore distinct study environments across Canada, from bustling metropolitan centers to scenic coastal hubs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                province: "ONTARIO",
                tagline: "Economic Hub of Canada",
                desc: "Home to Toronto and Ottawa, offering world-ranked universities, polytechnic colleges, and major corporate headquarters."
              },
              {
                province: "BRITISH COLUMBIA",
                tagline: "Tech Innovation & Pacific Coast",
                desc: "Renowned for Vancouver, strong tech clusters, mild coastal climates, and world-class research institutions like UBC and SFU."
              },
              {
                province: "ALBERTA",
                tagline: "Energy, Tech & Rocky Mountains",
                desc: "Offers top-tier universities in Calgary and Edmonton with strong business, engineering, and lower provincial taxes."
              },
              {
                province: "QUEBEC",
                tagline: "Bilingual Culture & European Charm",
                desc: "Distinctive multicultural environment centered around Montreal with world-class English and French universities."
              },
              {
                province: "MANITOBA",
                tagline: "Affordable Living & PR Pathways",
                desc: "Centrally located in Winnipeg with affordable tuition fees, low living costs, and favorable provincial nominee streams."
              },
              {
                province: "SASKATCHEWAN",
                tagline: "Agriculture & Innovation Center",
                desc: "Known for university excellence in Saskatoon and Regina with strong post-study retention incentives."
              },
              {
                province: "NOVA SCOTIA",
                tagline: "Atlantic Canadian Education Hub",
                desc: "Centered in Halifax, offering prestigious maritime universities, welcoming communities, and oceanfront living."
              },
              {
                province: "NEW BRUNSWICK",
                tagline: "Bilingual Community & Applied Colleges",
                desc: "Provides quality higher education across universities and professional colleges with an accessible cost of living."
              },
              {
                province: "YUKON",
                tagline: "Northern Canadian Frontier",
                desc: "Offers specialized education in northern environmental science, indigenous studies, and sustainable resource management."
              }
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#e52928] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] tracking-tight">
                    {p.province}
                  </h3>
                  <span className="text-xs font-bold text-[#e52928] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    Canadian Region
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 mb-3">{p.tagline}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          10. FREQUENTLY ASKED QUESTIONS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Frequently Asked Questions: Study in Canada"
            subtitle="Verified answers to common queries regarding DLIs, work rights, PGWP permits, and student visa processing."
          />

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300"
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
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
          11. START YOUR STUDY JOURNEY IN CANADA (Consultation Form)
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                Vadodara Office • Certified Canada Counselors
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Ready to Start Your Journey to Canada?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Don&apos;t let complex policy shifts compromise your academic future. Partner with the destination experts at Umang Career Consultancy to ensure a smooth, error-free path to Canada. Contact our Vadodara office today to schedule your comprehensive consultation!
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Rigorous Profile Review &amp; DLI Matching</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Provincial Attestation Letter (PAL) Guidance</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Guaranteed Investment Certificate (GIC) Support</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Regular Stream IRCC Study Permit Lodgement</span>
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
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <h3 className="text-2xl font-black text-[#0a1e38]">
                    Inquiry Received for Canada!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our certified Canada specialist will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
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
                        placeholder="e.g. parth@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Course *
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData((prev) => ({ ...prev, course: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Computer Science & IT">Computer Science & IT</option>
                        <option value="Business Administration & Management">Business Administration & Management</option>
                        <option value="Engineering & Technology">Engineering & Technology</option>
                        <option value="Data Science & Artificial Intelligence">Data Science & Artificial Intelligence</option>
                        <option value="Health Sciences">Health Sciences</option>
                        <option value="Finance & Accounting">Finance & Accounting</option>
                        <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                        <option value="Architecture & Design">Architecture & Design</option>
                        <option value="Education">Education</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Intended Study Level
                      </label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData((prev) => ({ ...prev, level: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Post-Graduate / Master's">Post-Graduate / Master&apos;s</option>
                        <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                        <option value="Post-Graduate Diploma">Post-Graduate Diploma</option>
                        <option value="Undergraduate Diploma">Undergraduate Diploma</option>
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
                        <option value="September 2026">September 2026 (Fall)</option>
                        <option value="January 2027">January 2027 (Winter)</option>
                        <option value="May 2027">May 2027 (Summer)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                  >
                    Submit Free Consultation Request for Canada
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Free Initial Assessment. Certified Canadian immigration & admission counselors.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          12. BOTTOM RED CALL BAR
         ========================================================= */}
      <section className="w-full bg-[#e52928] py-8 text-white relative shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-xs uppercase tracking-widest font-black text-red-200">
              Personalized Canada Admission Guidance
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
