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

/* USA Flag Badge */
function USAFlagBadge() {
  return (
    <svg className="w-9 h-6 rounded shadow-sm border border-slate-200" viewBox="0 0 60 42">
      <rect width="60" height="42" fill="#b22234" />
      <rect y="3.23" width="60" height="3.23" fill="#ffffff" />
      <rect y="9.69" width="60" height="3.23" fill="#ffffff" />
      <rect y="16.15" width="60" height="3.23" fill="#ffffff" />
      <rect y="22.61" width="60" height="3.23" fill="#ffffff" />
      <rect y="29.07" width="60" height="3.23" fill="#ffffff" />
      <rect y="35.53" width="60" height="3.23" fill="#ffffff" />
      <rect width="24" height="22.61" fill="#3c3b6e" />
      <circle cx="4" cy="4" r="1" fill="#ffffff" />
      <circle cx="12" cy="4" r="1" fill="#ffffff" />
      <circle cx="20" cy="4" r="1" fill="#ffffff" />
      <circle cx="8" cy="8" r="1" fill="#ffffff" />
      <circle cx="16" cy="8" r="1" fill="#ffffff" />
      <circle cx="4" cy="12" r="1" fill="#ffffff" />
      <circle cx="12" cy="12" r="1" fill="#ffffff" />
      <circle cx="20" cy="12" r="1" fill="#ffffff" />
      <circle cx="8" cy="16" r="1" fill="#ffffff" />
      <circle cx="16" cy="16" r="1" fill="#ffffff" />
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
            isDark ? "text-white" : "text-[#0a1e38]"
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
          className={`mt-3 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------
   DATA: WHY CHOOSE THE USA
------------------------------------------------------------- */
const WHY_CHOOSE_USA = [
  {
    title: "Ivy League & Top-Tier Universities",
    description:
      "Study at institutions that lead the world in global rankings, research output, and academic resources.",
    badge: "World Top 100",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "OPT & STEM Extensions",
    description:
      "Gain crucial corporate experience with Optional Practical Training (OPT) for up to 1 year, or up to 3 years for eligible STEM degree holders.",
    badge: "Up to 3-Year Work Rights",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Innovation and Cultural Synergy",
    description:
      "Immerse yourself in a diverse, high-energy environment that fosters entrepreneurship, creativity, and professional leadership.",
    badge: "Global Synergy",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "High Campus Value",
    description:
      "Access elite networking circles, extensive research grants, and career-accelerating corporate internships.",
    badge: "Fortune 500 Recruiting",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

/* -------------------------------------------------------------
   DATA: LATEST IMMIGRATION & REGULATION UPDATES (USCIS & SEVIS)
------------------------------------------------------------- */
const LATEST_IMMIGRATION_UPDATES = [
  {
    title: "The Four-Year Authorized Cap",
    tagline: "End of Open-Ended Duration of Status (D/S)",
    description:
      "In a massive regulatory shift, the traditional open-ended 'Duration of Status' (D/S) model has been updated. The authorized stay period for international students is now securely capped at a maximum of four years. Students requiring extra time to finish their degrees must apply for formal extensions directly through USCIS.",
    action: "Formal USCIS Extension Assistance Provided",
  },
  {
    title: "Tightened Transition Windows",
    tagline: "Shortened Grace Periods for University Transfers",
    description:
      "The standard grace period allowed for course changes, university transfers, or practical training adjustments has been shortened. Fast, proactive planning with certified counselors is mandatory to protect your active legal status.",
    action: "Proactive SEVIS Transfer Timeline Management",
  },
  {
    title: "Stricter Biometric Mandatory Checkpoints",
    tagline: "Comprehensive Identity Background Checks",
    description:
      "The visa application pipeline now demands rigorous compliance, including mandatory biometric collection and comprehensive identity background checks prior to consulate interview scheduling.",
    action: "Complete Biometric & VAC Slot Booking Support",
  },
  {
    title: "Airtight SEVIS Tracking",
    tagline: "Real-Time Campus & Academic Compliance Flags",
    description:
      "Universities are under strict enforcement to report student compliance flags immediately. Every document must match perfectly within the Student and Exchange Visitor Information System (SEVIS) to prevent sudden status cancellation.",
    action: "100% Document Cross-Verification with I-20",
  },
];

/* -------------------------------------------------------------
   DATA: F-1 STUDENT VISA PROCESS & CRITERIA (4 Prerequisites)
------------------------------------------------------------- */
const F1_VISA_PREREQUISITES = [
  {
    step: "1",
    title: "Secure Your I-20 Form",
    subtitle: "Certificate of Eligibility for Nonimmigrant Student Status",
    description:
      "We handle your application management to top SEVP-approved Designated Learning Institutions to secure your official Form I-20 (Certificate of Eligibility for Nonimmigrant Student Status).",
    checklist: [
      "Official University Acceptance Letter",
      "Financial Evidence matching institutional I-20 budget",
      "SEVIS ID generation and university DSO authorization",
    ],
  },
  {
    step: "2",
    title: "SEVIS Fee & DS-160 Filing",
    subtitle: "I-901 SEVIS Payment & Online Visa Application",
    description:
      "Our team ensures the accurate, timely payment of your mandatory SEVIS fee, followed by the zero-error completion of the online DS-160 Nonimmigrant Visa Application form.",
    checklist: [
      "Timely payment of mandatory $350 SEVIS I-901 fee",
      "Flawless DS-160 filing with precise travel & educational history",
      "Booking VAC Biometrics & Consular Interview slots across Indian consulates",
    ],
  },
  {
    step: "3",
    title: "Updated Financial Solvency Proofs",
    subtitle: "Liquid First-Year Funds & Multiannual Coverage",
    description:
      "You must present clear, liquid financial capacity to cover your first full year of tuition and living expenses, plus proof of readily available funding options for the remainder of your degree. We help you format clear bank statements, verified sponsor affidavits, and legal loan papers.",
    checklist: [
      "100% liquid funds for Year 1 (Savings, Fixed Deposits, Education Loans)",
      "Verifiable multi-year income proof (IT Returns, Property Valuations)",
      "Official notarized Affidavits of Support (Form I-134 where applicable)",
    ],
  },
  {
    step: "4",
    title: "Language and Testing Metrics",
    subtitle: "Standardized Testing Submissions & Waivers",
    description:
      "Fulfilling specific university requirements by formatting and submitting verified scores from standardized testing models (including IELTS, PTE, TOEFL, GRE, or GMAT).",
    checklist: [
      "IELTS 6.5+ / TOEFL 80+ / PTE 58+ or Duolingo",
      "GRE / GMAT scores or strategic test-waiver petitions",
      "WES / ECE credential evaluations for 3-year Indian Bachelor degrees",
    ],
  },
];

/* -------------------------------------------------------------
   DATA: UMANG 4-STEP SUCCESS PATHWAY
------------------------------------------------------------- */
const UMANG_SUCCESS_PATHWAY = [
  {
    num: "01",
    title: "Strategic University Profiling",
    desc: "Matching your background, backlogs, and future career vision with premium public and private US universities.",
    details: "We analyze your GPA, GRE/test scores, budget, and desired STEM OPT outcomes to curate an ambitious, target, and safe university list.",
  },
  {
    num: "02",
    title: "Financial Dossier Verification",
    desc: "Structuring liquid assets, family sponsor tracking, and scholarship awards perfectly to meet tough consulate rules.",
    details: "We ensure your liquid bank balances, education loan sanction letters, and CA net-worth statements satisfy strict consular scrutiny.",
  },
  {
    num: "03",
    title: "Advanced Embassy Interview Drills",
    desc: "Conducting rigorous, intensive mock visa interview rounds to help you present your genuine student intent to visa officers with confidence.",
    details: "1-on-1 personalized mock interview sessions tackling tough questions regarding post-study intent, university choice, and financial stability.",
  },
  {
    num: "04",
    title: "Pre-Departure Compliance Briefing",
    desc: "Preparing you comprehensively for US Customs and Border Protection (CBP) checkpoints, health insurance rules, and initial housing steps.",
    details: "Guidance on Form I-94 retrieval, Port of Entry questioning, US domestic SIM cards, university health insurance waivers, and on-campus housing.",
  },
];

/* -------------------------------------------------------------
   DATA: TOP UNIVERSITIES IN THE USA
------------------------------------------------------------- */
const TOP_US_UNIVERSITIES = [
  {
    name: "Stanford University",
    location: "Stanford, California (Silicon Valley)",
    ranking: "#2 QS World Rankings",
    programs: "Computer Science, AI, Business, Bioengineering",
    optHighlight: "Direct access to Silicon Valley venture capital and tech giants.",
  },
  {
    name: "Purdue University",
    location: "West Lafayette, Indiana",
    ranking: "Top 10 US Public Engineering",
    programs: "Mechanical, Aerospace, Data Analytics, Cybersecurity",
    optHighlight: "World-class aerospace engineering and Fortune 500 employer partnerships.",
  },
  {
    name: "University of Southern California (USC)",
    location: "Los Angeles, California",
    ranking: "Top 25 US National University",
    programs: "Viterbi Computer Science, Marshall MBA, Cinematic Arts",
    optHighlight: "Massive global Trojan alumni network across entertainment and technology.",
  },
  {
    name: "Boston University",
    location: "Boston, Massachusetts",
    ranking: "Top 40 US National University",
    programs: "Data Science, Biomedical Engineering, Finance",
    optHighlight: "East Coast biotech corridor and top hospital research affiliations.",
  },
  {
    name: "University of Texas at Austin",
    location: "Austin, Texas",
    ranking: "Top 10 US Engineering & Tech Hub",
    programs: "Cockrell Engineering, McCombs Business, Computer Science",
    optHighlight: "Situated in 'Silicon Hills' with booming corporate tech migration.",
  },
  {
    name: "New York University (NYU)",
    location: "New York City, New York",
    ranking: "Top 35 Global Ranking",
    programs: "Stern Business & Finance, Tandon School of Engineering",
    optHighlight: "Wall Street proximity, international finance internships, and global media.",
  },
];

/* -------------------------------------------------------------
   DATA: ESTIMATED COSTS (TUITION & LIVING)
------------------------------------------------------------- */
const US_COST_BREAKDOWN = [
  { category: "Public Universities (In-State / Out-of-State)", rangeUsd: "$22,000 – $40,000 / year", rangeInr: "₹18.5L – ₹34.0L" },
  { category: "Private Universities (Ivy League & Top Private)", rangeUsd: "$45,000 – $68,000 / year", rangeInr: "₹38.0L – ₹57.5L" },
  { category: "STEM Master's Programs (Average 2-Year Program)", rangeUsd: "$30,000 – $52,000 / year", rangeInr: "₹25.0L – ₹44.0L" },
  { category: "Living Expenses (Housing, Meals & Transport)", rangeUsd: "$12,000 – $18,000 / year", rangeInr: "₹10.0L – ₹15.0L" },
  { category: "Mandatory Health Insurance (SEVP Compliant)", rangeUsd: "$1,800 – $3,200 / year", rangeInr: "₹1.5L – ₹2.7L" },
];

/* -------------------------------------------------------------
   DATA: FAQS FOR US STUDENT VISA
------------------------------------------------------------- */
const USA_FAQS = [
  {
    q: "What is the new Four-Year Authorized Cap for F-1 student visas?",
    a: "Under recent USCIS and Department of State directives, the open-ended 'Duration of Status' (D/S) policy has transitioned to a fixed authorized stay capped at a maximum of four years. If an undergraduate or doctorate program takes longer to complete, students must apply for a formal extension of stay with USCIS prior to the four-year mark. Our counselors proactively manage your SEVIS timeline to ensure flawless compliance.",
  },
  {
    q: "How does the 3-Year STEM OPT extension work?",
    a: "All F-1 degree holders receive 12 months of initial post-completion Optional Practical Training (OPT). If you graduate with an eligible STEM degree (Science, Technology, Engineering, or Mathematics) from an SEVP-certified institution, you can apply for an additional 24-month STEM OPT extension, granting you up to 3 full years of legal employment authorization in the United States with E-Verify employers.",
  },
  {
    q: "What financial proof is required for the F-1 visa interview?",
    a: "You must demonstrate immediate, liquid financial capacity to cover your first full academic year (tuition plus living costs as indicated on Form I-20), and readily accessible funds (or documented parental income/sponsor assets) for the remainder of the degree. Liquid funds can include savings accounts, fixed deposits, and sanctioned education loans.",
  },
  {
    q: "Why is the F-1 visa interview so critical, and how does Umang prepare students?",
    a: "Unlike European or Canadian processes which are purely paper-based, the US F-1 visa is granted or denied during a short 2 to 3 minute in-person interview with a consular officer. The officer evaluates your academic preparedness, funding credibility, and non-immigrant intent (ties to India). Umang conducts intensive 1-on-1 mock interviews drills to refine your answers, tone, and body language.",
  },
  {
    q: "Can Indian students with a 3-year Bachelor's degree (B.Com, B.Sc, BBA) apply for a US Master's?",
    a: "Yes! While some US universities historically required 16 years of education (4-year degrees), hundreds of top accredited US institutions now accept 3-year Indian Bachelor degrees directly, or through simple credential evaluations (such as WES or ECE), or via specialized 1-year bridge/pre-master programs.",
  },
  {
    q: "Can international students work while studying in the US on an F-1 visa?",
    a: "Yes. F-1 students can work on-campus up to 20 hours per week during active academic semesters and full-time (up to 40 hours per week) during official vacation periods. Off-campus employment during your degree is permissible after your first year through Curricular Practical Training (CPT) if integrated into your curriculum.",
  },
  {
    q: "What is the difference between Form I-20 and the F-1 visa stamp?",
    a: "Form I-20 is issued by your university and proves your SEVP eligibility to study in the United States. The F-1 visa is the official entry travel document placed in your passport by the US Embassy. You need a valid I-20 and valid passport to maintain active legal status inside the US even if the visa foil in your passport expires while you are actively enrolled.",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function USAStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    degree: "Master's / STEM MS",
    targetIntake: "Fall 2026 (August)",
    greScore: "",
    notes: "",
  });

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(await sendFormInquiry(e.currentTarget as HTMLFormElement, "U S A Study Abroad page"))) return;
    setFormSubmitted(true);
  };

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Global Embedded Styles */}
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
            <span className="text-[#0a1e38] font-bold">United States (USA)</span>
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
                <USAFlagBadge />
                <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-wide uppercase">
                  Umang Career Consultancy • USA Student Visa Page
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Achieve Your American Dream:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1e38] via-[#e52928] to-[#b91c1c]">
                  Study in the USA
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#e52928] mt-2">
                  with Umang Career Consultancy
                </span>
              </h1>

              {/* Sub-tagline from User Prompt */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Unlock absolute academic excellence, groundbreaking research facilities, and global career networks. At Umang Career Consultancy, we turn your ambitions of studying in the United States into a reality through expert F-1 visa coaching, meticulous financial mapping, and dedicated SEVIS compliance documentation.
              </p>

              {/* 4 Feature Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl hover:border-red-300 transition-colors">
                  <div className="text-sm sm:text-base font-bold text-[#0a1e38]">Ivy League</div>
                  <div className="text-[11px] text-slate-500 font-medium">Top Tier Universities</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl hover:border-red-300 transition-colors">
                  <div className="text-sm sm:text-base font-bold text-[#e52928]">3-Year STEM OPT</div>
                  <div className="text-[11px] text-slate-500 font-medium">Post-Study Work Rights</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl hover:border-red-300 transition-colors">
                  <div className="text-sm sm:text-base font-bold text-emerald-600">4-Year Cap Ready</div>
                  <div className="text-[11px] text-slate-500 font-medium">USCIS Compliance</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl hover:border-red-300 transition-colors">
                  <div className="text-sm sm:text-base font-bold text-blue-600">Mock Drills</div>
                  <div className="text-[11px] text-slate-500 font-medium">F-1 Visa Interview Prep</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#e52928] hover:bg-[#c81e1d] text-white font-bold rounded-xl shadow-lg shadow-red-500/25 transition-all text-center"
                >
                  Book Free F-1 Consultation
                </a>
                <a
                  href="tel:+919173186109"
                  className="anim-phone-ring w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-3"
                >
                  <PhoneIcon />
                  <span>Call: +91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual / Card */}
            <div
              className={`lg:col-span-5 transition-all duration-700 delay-200 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] group">
                  <Image
                    src="/destinations/usa.jpg"
                    alt="Study in USA - Umang Career Consultancy"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e38]/90 via-black/30 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0a1e38] shadow-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Fall 2026 / Spring 2027 Intakes Open</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      SEVP Certified Institutions
                    </span>
                    <h3 className="text-xl font-bold leading-snug">
                      Form I-20 &amp; F-1 Visa Visa Lodgement Support
                    </h3>
                    <p className="text-xs text-slate-300">
                      Silicon Valley • Boston Corridor • Texas Tech • New York Metro
                    </p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="anim-gentle-float absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs">
                  <div className="w-12 h-12 rounded-xl bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-xl flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">F-1 Visa Interview Coaching</div>
                    <div className="text-[11px] text-slate-500 font-medium">Over 98% First-Attempt Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. WHY CHOOSE THE USA FOR YOUR HIGHER EDUCATION?
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose the USA for Your Higher Education?"
            subtitle="Discover why the United States remains the undisputed global leader for international students pursuing transformative academic and career outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {WHY_CHOOSE_USA.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e52928] flex items-center justify-center group-hover:bg-[#e52928] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-[#e52928]">
                  <span>Explore Advantage</span>
                  <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. NAVIGATING THE US STUDENT VISA: LATEST UPDATES
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-[#0a1e38] via-[#0f284c] to-[#0a1e38] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Navigating the US Student Visa (Latest Immigration & Regulation Updates)"
            subtitle="Securing an F-1 Student Visa requires complete alignment with the newest United States Citizenship and Immigration Services (USCIS) and Department of State directives. Our legal processing experts ensure your application follows the latest compliance frameworks to secure high visa approval rates."
            variant="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {LATEST_IMMIGRATION_UPDATES.map((update, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/15 p-7 rounded-3xl hover:bg-white/15 hover:border-red-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-red-300 bg-red-950/80 border border-red-800/60 px-3.5 py-1 rounded-full">
                      Critical Update #{idx + 1}
                    </span>
                    <span className="text-xs text-slate-300 font-semibold">
                      {update.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {update.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {update.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{update.action}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold text-red-300">
              ⚡ Important Advisory for Indian Applicants:
            </span>
            <span className="text-xs sm:text-sm text-slate-200 ml-2">
              Consular appointments fill rapidly for Fall (August) and Spring (January) intakes. Early Form I-20 issuance and DS-160 lodgement are strongly recommended.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. F-1 STUDENT VISA PROCESS & REQUIREMENT CRITERIA
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="F-1 Student Visa Process & Requirement Criteria"
            subtitle="To successfully clear the US visa interview, candidates must present a flawless dossier. We guide you step-by-step through the core prerequisites."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {F1_VISA_PREREQUISITES.map((req, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm hover:border-[#e52928] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#0a1e38] text-white flex items-center justify-center font-black text-sm mb-5 shadow-sm">
                    0{req.step}
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1e38] mb-1">
                    {req.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#e52928] mb-4">
                    {req.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {req.description}
                  </p>

                  <div className="space-y-2 mb-4 bg-white p-4 rounded-xl border border-slate-200/80">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Key Verifications:
                    </div>
                    {req.checklist.map((item, ci) => (
                      <div key={ci} className="flex items-start gap-2 text-xs text-slate-700">
                        <svg className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center text-xs font-bold text-emerald-600">
                  <span>Step {req.step} Verified by Umang</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. THE UMANG ADVANTAGE: 4-STEP SUCCESS PATHWAY
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Umang Career Consultancy Advantage: Our 4-Step Success Pathway"
            subtitle="From tailored profile evaluation and scholarship matching to intensive consular mock interview drills, our certified US counselors steer your file to approval."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {UMANG_SUCCESS_PATHWAY.map((s, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-red-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#e52928]/30">
                      {s.num}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1e38] mb-2">
                    {s.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 leading-snug mb-3">
                    {s.desc}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {s.details}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Umang Direct Mentorship</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. TOP UNIVERSITIES & RESEARCH INSTITUTIONS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Universities & Institutions in the USA"
            subtitle="We help students compare and target Tier-1 public and private institutions across the United States according to their profile, test metrics, and STEM career aspirations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOP_US_UNIVERSITIES.map((uni, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-red-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#e52928] bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                      {uni.ranking}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a1e38] mb-1">
                    {uni.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-4">
                    {uni.location}
                  </div>

                  <div className="space-y-2 mb-4 text-xs">
                    <div>
                      <span className="font-bold text-slate-800">Key Faculties: </span>
                      <span className="text-slate-600">{uni.programs}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Career Value: </span>
                      <span className="text-slate-600">{uni.optHighlight}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#e52928]">
                  <span>F-1 Visa Shortlisting Available</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. TUITION FEES & LIVING EXPENSES BREAKDOWN
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Estimated Tuition Fees & Living Expenses in the USA"
            subtitle="Transparent financial benchmarks to assist you in planning your I-20 funding and consulate solvency evidence."
          />

          <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0a1e38] text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Program / Expense Category</th>
                  <th className="py-4 px-6">Average Cost (USD)</th>
                  <th className="py-4 px-6">Estimated Cost (INR approx.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {US_COST_BREAKDOWN.map((row, i) => (
                  <tr key={i} className="hover:bg-red-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">{row.category}</td>
                    <td className="py-4 px-6 text-[#0a1e38] font-bold">{row.rangeUsd}</td>
                    <td className="py-4 px-6 text-[#e52928] font-bold">{row.rangeInr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <FeeNote />
          <div className="mt-4 text-xs text-slate-500 text-center">
            *Exchange rate benchmark: 1 USD ≈ ₹84.5. Exact tuition fees depend on the specific institution, department, credit hours, and scholarship awards.
          </div>
        </div>
      </section>

      {/* =========================================================
          8. FREQUENTLY ASKED QUESTIONS (FAQS)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions: US Student Visa (F-1)"
            subtitle="Expert answers to essential questions regarding the F-1 interview, SEVIS, STEM OPT extensions, and the four-year cap."
          />

          <div className="space-y-4">
            {USA_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-white shadow-sm hover:border-slate-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-[#e52928] transition-colors"
                  >
                    <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                    <ChevronDownIcon isOpen={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
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
          9. CONSULTATION FORM SECTION
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                Vadodara Office • Certified US Visa Counselors
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Your Future in the USA Begins Today!
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Don&apos;t let complex policy transitions compromise your global education goals. Trust your future to the destination experts at Umang Career Consultancy. Contact our Vadodara office today to secure your personalized US visa consultation!
              </p>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-left shadow-sm">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span>Direct I-20 Processing at Top SEVP-Accredited Universities</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span>SEVIS Fee &amp; Zero-Error DS-160 Filing Support</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span>Intensive 1-on-1 Consular Mock Interview Drills</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span>Four-Year Authorized Cap &amp; STEM OPT Roadmap Planning</span>
                </div>
              </div>

              {/* Direct Call Info */}
              <div className="pt-2 space-y-2">
                <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">
                  Talk to Our US Counselors:
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
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-[#0a1e38]">
                    Inquiry Received for USA!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our certified US F-1 education counselor will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
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
                        Target Degree Level *
                      </label>
                      <select
                        value={formData.degree}
                        onChange={(e) => setFormData((prev) => ({ ...prev, degree: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Master's / STEM MS">Master&apos;s / STEM MS</option>
                        <option value="Undergraduate / Bachelor's">Undergraduate / Bachelor&apos;s</option>
                        <option value="MBA / Business School">MBA / Business School</option>
                        <option value="Ph.D. / Doctorate">Ph.D. / Doctorate</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Target Intake
                      </label>
                      <select
                        value={formData.targetIntake}
                        onChange={(e) => setFormData((prev) => ({ ...prev, targetIntake: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Fall 2026 (August)">Fall 2026 (August - Primary)</option>
                        <option value="Spring 2027 (January)">Spring 2027 (January)</option>
                        <option value="Summer 2027 (May)">Summer 2027 (May)</option>
                        <option value="Fall 2027 (August)">Fall 2027 (August)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Test Status (GRE / IELTS / Duolingo)
                      </label>
                      <input
                        type="text"
                        value={formData.greScore}
                        onChange={(e) => setFormData((prev) => ({ ...prev, greScore: e.target.value }))}
                        placeholder="e.g. GRE 315, IELTS 7.0 or Planning"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Academic Background / Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="Share your undergraduate field, GPA, preferred US states, or specific questions about the F-1 visa interview..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e52928] hover:bg-[#c81e1d] text-white font-extrabold rounded-xl shadow-lg shadow-red-500/25 transition-all text-base"
                  >
                    Submit My USA F-1 Application Inquiry
                  </button>
                  <p className="text-[11px] text-center text-slate-400">
                    100% Free Consultation • Confidential Profile Review • Zero Obligation
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          10. BOTTOM HIGHLIGHT CALL BAR
         ========================================================= */}
      <div className="w-full bg-[#0a1e38] text-white py-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <USAFlagBadge />
            <span className="text-sm font-semibold text-slate-200">
              Ready to Study in the USA? Fast-Track Your Form I-20 &amp; F-1 Visa with Umang Career Consultancy Vadodara!
            </span>
          </div>
          <a
            href="tel:+919173186109"
            className="px-5 py-2 rounded-lg bg-[#e52928] hover:bg-[#c81e1d] text-white text-xs font-bold transition-colors whitespace-nowrap shadow-md"
          >
            Call: +91 91731 86109
          </a>
        </div>
      </div>
    </main>
  );
}
