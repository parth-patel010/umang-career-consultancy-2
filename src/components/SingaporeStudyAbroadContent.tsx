"use client";

import FeeNote from "@/components/FeeNote";
import { sendFormInquiry } from "@/lib/inquiries/web3forms";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import VibrantCountryFlag from "@/components/VibrantCountryFlag";

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

function CheckmarkIcon({ className = "w-5 h-5 text-[#22c55e]" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AlertIcon({ className = "w-5 h-5 text-amber-500" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

/* Course Icons */
function HTMIcon() {
  return (
    <svg className="w-8 h-8 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function CyberTechIcon() {
  return (
    <svg className="w-8 h-8 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function LogisticsIcon() {
  return (
    <svg className="w-8 h-8 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function SCMIcon() {
  return (
    <svg className="w-8 h-8 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
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
          className={`mt-2.5 text-base sm:text-lg font-medium max-w-3xl mx-auto ${
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
const POPULAR_PROGRAMS = [
  {
    title: "Hospitality & Tourism Management (HTM)",
    tag: "Paid Internships & Resort Ops",
    desc: "Singapore is the undisputed hospitality capital of Asia. Study luxury hospitality, resort operations, and event management with guaranteed paid industry internships at Marina Bay Sands, Sentosa, and world-class 5-star hotel chains.",
    icon: <HTMIcon />,
    careers: "Hotel General Manager, Revenue Analyst, Event Director, Guest Experience Lead",
  },
  {
    title: "Information Technology (IT) & Cyber Security",
    tag: "Asia Tech Capital",
    desc: "Gain industry-aligned credentials in cloud architecture, cybersecurity defense, data analytics, and software engineering. Connect directly with regional tech hubs of Google, Meta, Microsoft, and GovTech Singapore.",
    icon: <CyberTechIcon />,
    careers: "Cyber Security Analyst, Cloud Engineer, Full-Stack Developer, AI Data Specialist",
  },
  {
    title: "Business Management (BM) & Global Logistics",
    tag: "Fortune 500 APAC Epicenter",
    desc: "Master international finance, strategic business leadership, fintech, and cross-border commercial trade. Singapore hosts over 4,000 regional multinational headquarters offering premier networking opportunities.",
    icon: <LogisticsIcon />,
    careers: "Management Consultant, Financial Analyst, Regional Business Development Lead",
  },
  {
    title: "Supply Chain Management (SCM)",
    tag: "World's Busiest Transshipment Hub",
    desc: "Specialized training in multimodal freight, container logistics, inventory optimization, and digital maritime supply systems anchored around PSA Singapore and the world's best air hub, Changi Airport.",
    icon: <SCMIcon />,
    careers: "Supply Chain Director, Global Procurement Manager, Freight Logistics Planner",
  },
];

const SOLAR_STEPS = [
  {
    num: "1",
    title: "Offer & Student Contract",
    desc: "We secure your official Letter of Acceptance (LOA) and execute the mandatory Standard PEI-Student Contract with your chosen institution, safeguarding your fees under Singapore's Fee Protection Scheme (FPS).",
  },
  {
    num: "2",
    title: "SOLAR System Registration",
    desc: "The university registers your unique profile on the ICA Student's Pass On-Line Application & Registration (SOLAR) portal and generates your official SOLAR Application Number.",
  },
  {
    num: "3",
    title: "In-Principle Approval (IPA)",
    desc: "We accurately lodge your digital Form 16, V36, and financial briefs. Once evaluated, the ICA grants an In-Principle Approval (IPA) Letter. This letter serves as your single-entry visa to travel to Singapore.",
  },
  {
    num: "4",
    title: "Arrival & Biometrics",
    desc: "Upon landing, we guide you through completing your local medical examination and your physical ICA biometric verification at the ICA Building to receive your official Student's Pass card.",
  },
];

const ICA_FEES = [
  {
    label: "ICA Processing Fee",
    amount: "SGD 45",
    inr: "≈ ₹2,800",
    timing: "Non-refundable, paid at the time of online application on SOLAR.",
    badge: "Initial Filing",
  },
  {
    label: "Student's Pass Issuance Fee",
    amount: "SGD 60",
    inr: "≈ ₹3,750",
    timing: "Paid online once your application is formally approved by ICA.",
    badge: "Upon Approval",
  },
  {
    label: "Multiple-Entry Visa Fee",
    amount: "SGD 30",
    inr: "≈ ₹1,875",
    timing: "Applicable if your nationality requires a visa for entry into Singapore.",
    badge: "If Applicable",
  },
  {
    label: "Standard Processing Timeline",
    amount: "1 to 2 Weeks",
    inr: "File 8-12 weeks early",
    timing: "Usually takes 1 to 2 weeks for autonomous universities & EduTrust schools. We advise applying 8-12 weeks early.",
    badge: "Fast Turnaround",
  },
];

const UNIVERSITIES = [
  {
    name: "National University of Singapore (NUS)",
    logo: "/universities/singapore/nus.avif",
    type: "Autonomous Public University",
    qsRank: "#8 Globally (QS World 2025)",
    tag: "Asia's #1 Ranked University",
    features: "Global academic powerhouse excelling in computer science, business, engineering, law, medicine, and social sciences.",
  },
  {
    name: "Nanyang Technological University (NTU)",
    logo: "/universities/singapore/ntu.avif",
    type: "Autonomous Public University",
    qsRank: "#15 Globally (QS World 2025)",
    tag: "Engineering & Tech Leader",
    features: "Renowned Smart Campus leading world benchmarks in AI, robotics, sustainability, clean energy, and materials science.",
  },
  {
    name: "Singapore Management University (SMU)",
    logo: "/universities/singapore/smu.avif",
    type: "Specialized Business & Social Sciences",
    qsRank: "Top 50 Global Business",
    tag: "Wharton-Modeled City Campus",
    features: "Interactive seminar-style pedagogy in Singapore's financial core with strong corporate mentoring and fintech integration.",
  },
  {
    name: "Singapore University of Technology & Design (SUTD)",
    logo: "/universities/singapore/sutd.avif",
    type: "Autonomous Public University",
    qsRank: "Developed with MIT & Zhejiang Univ",
    tag: "Design & Product Innovation",
    features: "Cutting-edge curriculum fusing artificial intelligence, architectural innovation, design computation, and engineering.",
  },
  {
    name: "Singapore Institute of Technology (SIT)",
    logo: "/universities/singapore/sit.avif",
    type: "University of Applied Learning",
    qsRank: "Premier Applied Degrees",
    tag: "95%+ Employment Placement",
    features: "Direct industrial partnership modules providing hands-on operational work-study degrees in aerospace, software, and logistics.",
  },
  {
    name: "James Cook University (JCU Singapore)",
    logo: "/universities/singapore/jcu.avif",
    type: "Australian Public University Campus",
    qsRank: "Top 2% Globally / EduTrust Star",
    tag: "Direct Australian Degree",
    features: "Direct Australian degrees with trimester-based accelerated study and seamless campus transfer options between Singapore and Australia.",
  },
];

const LIVING_COSTS = [
  { item: "Accommodation (Student Hostel / Shared HDB / Condo)", range: "SGD 600 – SGD 1,200", inr: "₹37,500 – ₹75,000" },
  { item: "Food & Meals (Hawker Centers & Campus Pantries)", range: "SGD 300 – SGD 500", inr: "₹18,750 – ₹31,250" },
  { item: "Transportation (EZ-Link MRT & Public Buses)", range: "SGD 100 – SGD 150", inr: "₹6,250 – ₹9,375" },
  { item: "Mobile Internet & Connectivity Plans", range: "SGD 40 – SGD 75", inr: "₹2,500 – ₹4,680" },
  { item: "Utilities (Power, Water, Air-Conditioning)", range: "SGD 100 – SGD 180", inr: "₹6,250 – ₹11,250" },
  { item: "Personal & Social Incidentals", range: "SGD 150 – SGD 300", inr: "₹9,375 – ₹18,750" },
];

const FAQS = [
  {
    q: "Is a Singapore Student Visa actually a visa sticker?",
    a: "No! This is the most common misconception. In Singapore, international students are granted a Student's Pass (STP) issued digitally by the Immigration & Checkpoints Authority (ICA). The In-Principle Approval (IPA) letter serves as your entry authorization to travel to Singapore, and your physical Student's Pass card is collected after completing biometric verification and a local medical checkup in Singapore.",
  },
  {
    q: "Can I study part-time or attend evening classes on a Student's Pass?",
    a: "No. Under strict Singapore ICA immigration law, a Student's Pass is only issued for approved, full-time daytime courses. Part-time, weekend, or evening courses are completely ineligible for international student sponsorship.",
  },
  {
    q: "Can international students work part-time while studying in Singapore?",
    a: "Work rights in Singapore are strictly regulated: Full-time international students enrolled in government-recognized autonomous universities (NUS, NTU, SMU, SUTD, SIT) or polytechnics are permitted to work part-time up to 16 hours per week during term time and unlimited hours during scheduled vacations. Students enrolled at private education institutions (PEIs) generally do not have default work rights unless they are on an official On-the-Job Training (OJT) or paid internship module approved by the Ministry of Manpower (MOM).",
  },
  {
    q: "What is the post-study work visa pathway in Singapore?",
    a: "Unlike countries with automatic open graduate work permits, graduates from recognized Institutes of Higher Learning (IHLs) can apply for a 1-year non-renewable Long-Term Visit Pass (LTVP) to reside in Singapore while interviewing for full-time corporate jobs. Once you secure an employment offer meeting prevailing Ministry of Manpower salary criteria, your sponsoring employer applies for your S Pass or Employment Pass (EP).",
  },
  {
    q: "What are the exact fees charged by the Singapore ICA?",
    a: "The official ICA fee structure is 100% transparent: SGD 45 for initial SOLAR application processing (non-refundable), SGD 60 for Student's Pass issuance once approved, and SGD 30 for multiple-entry visa fees if applicable to your passport.",
  },
  {
    q: "What is the Tuition Grant Scheme (TGS)?",
    a: "The Tuition Grant Scheme is a Singapore Ministry of Education (MOE) initiative that subsidizes up to 50%+ of undergraduate tuition fees for eligible students at autonomous public universities. In return, international recipients sign a formal bond committing to work for a Singapore-registered company for 3 years upon graduation.",
  },
  {
    q: "How does Umang Career Consultancy assist with Singapore applications?",
    a: "We provide honest, direct evaluations. We analyze your academic transcripts, explain proof-of-fund rules truthfully, map your backlog status honestly, draft your SOPs and student contracts, register your profile on the SOLAR portal, and prepare you for flawless ICA compliance.",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function SingaporeStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "Hospitality & Tourism Management (HTM)",
    intake: "August 2026",
    notes: "",
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(await sendFormInquiry(e.currentTarget as HTMLFormElement, "Singapore Study Abroad page"))) return;
    setFormSubmitted(true);
  };

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Embedded Animations */}
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
      <section className="relative w-full pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-[#f8fafc] via-white to-slate-50 border-b border-slate-200/60">
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
            <span className="text-[#0a1e38] font-bold">Singapore Student Visa</span>
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
                <VibrantCountryFlag country="singapore" size="sm" variant="badge" />
                <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-wide uppercase">
                  Website Content • Study in Singapore (Umang Career Consultancy)
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Study in Singapore:{" "}
                <span className="text-[#e52928]">Your Gateway</span> to World-Class Asian Education
              </h1>

              {/* Tagline Paragraph from OM Bhai */}
              <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Are you dreaming of studying in the world’s safest, cleanest, and most forward-thinking global business hub? Singapore offers a perfect mix of elite global education, vibrant multicultural student life, and unmatched proximity to international career opportunities.
              </p>

              <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                At <strong className="text-[#0a1e38] font-bold">Umang Career Consultancy</strong>, we believe in keeping our advice transparent and direct. Here is the actual, crystal-clear breakdown of how a Singapore Student Visa works and what you truly need to prepare.
              </p>

              {/* Key Bullet Highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto lg:mx-0 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/80 shadow-sm">
                  <CheckmarkIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Official Student&apos;s Pass (ICA SOLAR)</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/80 shadow-sm">
                  <CheckmarkIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fast 1 to 2 Week ICA Processing</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/80 shadow-sm">
                  <CheckmarkIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-Year LTVP Job Seeker Pathway</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/80 shadow-sm">
                  <CheckmarkIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Transparent ICA Official Fees</span>
                </div>
              </div>

              {/* CTAs with Real Phone Lines */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Book Free Evaluation</span>
                </a>
                <a
                  href="tel:+919173186109"
                  className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md transition-all duration-300"
                >
                  <PhoneIcon />
                  <span>+91 9173186109</span>
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
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-red-300/80 animate-spin [animation-duration:60s] pointer-events-none" />

                {/* Central Image Card */}
                <div className="relative w-full h-full p-4 flex items-center justify-center transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/singapore-hero.png"
                    alt="Study in Singapore - Umang Career Consultancy"
                    width={480}
                    height={480}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    priority
                  />
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-sm">
                    ICA
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Pass Type</div>
                    <div className="text-sm font-extrabold text-[#0a1e38]">Student&apos;s Pass (STP)</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-sm">
                    SGD
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Official Fee</div>
                    <div className="text-sm font-extrabold text-[#0a1e38]">SGD 45 + 60</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. THE FIRST TRUTH: IT IS NOT A "VISA," IT IS A STUDENT’S PASS
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The First Truth: It is Not a &quot;Visa,&quot; It is a Student’s Pass"
            subtitle="Transparent legal clarity from Founder Sudip Parikh & Umang Career Consultancy"
          />

          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              A common misconception is that you apply for a standard visa sticker in your passport. In Singapore, international students are granted a <strong className="text-[#0a1e38] font-bold">Student&apos;s Pass (STP)</strong> issued directly by the <strong className="text-[#0a1e38] font-bold">Immigration & Checkpoints Authority (ICA)</strong>.
            </p>

            {/* Critical Rule Callout Box */}
            <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex flex-col sm:flex-row items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                <AlertIcon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 block">
                  Critical Rule Mandated by Singapore ICA
                </span>
                <p className="text-sm sm:text-base font-bold leading-relaxed">
                  A Student’s Pass is strictly issued for approved, full-time daytime courses. Part-time, weekend, or evening courses are completely ineligible for a Student&apos;s Pass.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80">
                <div className="font-bold text-[#0a1e38] text-base mb-1">
                  Autonomous Universities & Polytechnics
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Government-funded premier institutions like NUS, NTU, SMU, SUTD, and SIT offer autonomous degree programs, Tuition Grant Schemes (TGS), and full legal campus privileges.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80">
                <div className="font-bold text-[#0a1e38] text-base mb-1">
                  EduTrust-Accredited Private Institutes (PEIs)
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Must hold valid certification under the Committee for Private Education (CPE) and EduTrust quality frameworks to ensure student tuition fees are protected under the Fee Protection Scheme (FPS).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. POPULAR PROGRAMS WE HELP YOU APPLY FOR
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Popular Programs We Help You Apply For"
            subtitle="Admissions are open for multiple intakes throughout the year, spanning top local universities, polytechnics, and well-known private institutions offering internationally recognized programs:"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POPULAR_PROGRAMS.map((prog, idx) => (
              <div
                key={idx}
                className="h-full bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#e52928] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-3 rounded-2xl bg-red-50 group-hover:bg-[#e52928] group-hover:text-white transition-colors duration-300">
                      {prog.icon}
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-[#0a1e38] border border-slate-200 uppercase tracking-wider">
                      {prog.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors">
                    {prog.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-500 mb-1">Target Career Horizons:</div>
                  <div className="text-xs font-bold text-[#0a1e38]">{prog.careers}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice Pill */}
          <div className="mt-8 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 shadow-sm">
              <strong className="text-[#0a1e38]">Multiple Intakes:</strong> January, March/April, July/August, and October/November. Fast admissions available!
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. OFFICIAL ICA FEES AND PROCESSING TIMES
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What are the Official ICA Fees and Processing Times?"
            subtitle="We don't hide costs behind generic package fees. Here is the exact fee structure mandated by the Singapore ICA:"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ICA_FEES.map((fee, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#0a1e38] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-red-50 text-[#e52928] border border-red-100 inline-block mb-3">
                    {fee.badge}
                  </span>
                  <h3 className="text-base font-extrabold text-[#0a1e38]">{fee.label}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#e52928]">{fee.amount}</span>
                    <span className="text-xs font-semibold text-slate-500">({fee.inr})</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{fee.timing}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#0a1e38] to-[#122e54] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">Umang Advisory Tip</span>
              <h4 className="text-lg font-bold">Standard Processing Timeline: 1 to 2 Weeks</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Usually takes 1 to 2 weeks for autonomous universities and EduTrust-accredited private schools. However, we strongly advise filing your paperwork at least 8 to 12 weeks before your course intake begins.
              </p>
            </div>
            <a
              href="#counselling-form"
              className="px-6 py-3 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105"
            >
              Check Your Intake Timeline
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. OUR STEP-BY-STEP SOLAR VISA PROCESS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Our Step-by-Step SOLAR Visa Process"
            subtitle="Founder Sudip Parikh’s extensive global visa training ensures your application moves flawlessly through Singapore’s digital-first architecture:"
            variant="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {SOLAR_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-[#22c55e]/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#e52928] text-white font-black text-lg flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#22c55e] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              From your initial LOA submission to your official ICA biometrics at Kallang Road, Umang Career Consultancy manages every Form 16, e-Form V36, and document upload with zero margin for error.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. THE REALITY OF WORK RIGHTS IN SINGAPORE
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Reality of Work Rights in Singapore"
            subtitle="In alignment with our absolute commitment to honest consultation, we want you to know the realistic boundaries of working while studying:"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Panel 1: Part-Time Work */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                    16h
                  </div>
                  <h3 className="text-xl font-black text-[#0a1e38]">Part-Time Work During Term</h3>
                </div>

                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-[#0a1e38]">Autonomous Universities & Polytechnics:</strong> Only students enrolled in specific, government-recognized autonomous universities (NUS, NTU, SMU, SUTD, SIT) or polytechnics are permitted to work <strong className="text-[#0a1e38]">up to 16 hours per week</strong> during term time.
                  </p>
                  <p>
                    <strong className="text-[#0a1e38]">Private School Students:</strong> Private education institution (PEI) students generally <strong className="text-red-700">do not hold default work rights</strong> unless they are on an official On-the-Job Training (OJT) or internship module integrated directly into their diploma.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                Strict MOM Regulations Apply • Zero Illegal Employment Tolerated
              </div>
            </div>

            {/* Panel 2: Post-Study Stay */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                    LTVP
                  </div>
                  <h3 className="text-xl font-black text-[#0a1e38]">Post-Study Stay & Employment</h3>
                </div>

                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-[#0a1e38]">1-Year LTVP Job Seeker Pass:</strong> Unlike countries with automatic graduate route visas, Singapore allows you to apply for a <strong className="text-[#0a1e38]">1-year non-renewable Long-Term Visit Pass (LTVP)</strong> to look for a job after graduating from recognized Institutes of Higher Learning.
                  </p>
                  <p>
                    <strong className="text-[#0a1e38]">Corporate S Pass / Employment Pass (EP):</strong> Once you secure a job offer meeting the required salary thresholds and COMPASS points criteria, your employer will sponsor your official S Pass or Employment Pass (EP).
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                Evaluated under Singapore Ministry of Manpower COMPASS Framework
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. PROMINENT UNIVERSITIES & INSTITUTIONS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Prominent Universities & Institutions in Singapore"
            subtitle="Explore world-leading autonomous universities and prestigious foreign branch campuses."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UNIVERSITIES.map((uni, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#e52928] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 p-1 flex items-center justify-center shrink-0 shadow-xs">
                      <Image
                        src={uni.logo}
                        alt={uni.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800">
                        {uni.qsRank}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{uni.type}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38]">{uni.name}</h3>
                  <div className="text-xs font-bold text-[#e52928] mt-1 flex items-center gap-1.5">
                    <span>{uni.tag}</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{uni.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          8. TUITION FEES & LIVING COSTS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Indicative Tuition Fees & Living Costs in Singapore"
            subtitle="Transparent financial estimates in Singapore Dollars (SGD) and Indian Rupees (INR)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tuition Fees Table */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-black text-[#0a1e38]">Annual Indicative Tuition Fees</h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-200">
                  Multiple Intakes
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200 text-[#0a1e38]">
                      <th className="py-3 px-3 font-extrabold">Course Level</th>
                      <th className="py-3 px-3 font-extrabold">Min. (SGD)</th>
                      <th className="py-3 px-3 font-extrabold">Max. (SGD)</th>
                      <th className="py-3 px-3 font-extrabold text-[#22c55e]">Approx. INR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-white">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Diploma Programs</td>
                      <td className="py-3.5 px-3 font-semibold">S$4,400</td>
                      <td className="py-3.5 px-3 font-semibold">S$25,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹2.7L – ₹15.6L</td>
                    </tr>
                    <tr className="hover:bg-white">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Bachelor Degree</td>
                      <td className="py-3.5 px-3 font-semibold">S$12,000</td>
                      <td className="py-3.5 px-3 font-semibold">S$55,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹7.5L – ₹34.5L</td>
                    </tr>
                    <tr className="hover:bg-white">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Master Degree</td>
                      <td className="py-3.5 px-3 font-semibold">S$14,000</td>
                      <td className="py-3.5 px-3 font-semibold">S$65,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹8.8L – ₹40.5L</td>
                    </tr>
                    <tr className="hover:bg-white">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Ph.D. / Research</td>
                      <td className="py-3.5 px-3 font-semibold">S$20,000</td>
                      <td className="py-3.5 px-3 font-semibold">S$50,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">Often 100% Funded*</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <FeeNote />

              <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-[#0a1e38]">Tuition Grant Scheme (TGS):</span> Eligible autonomous university students receive up to 50%+ government subsidies in exchange for a 3-year service bond working in Singapore.
              </div>
            </div>

            {/* Cost of Living */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-black text-[#0a1e38]">Monthly Living Costs</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Realistic Est.
                  </span>
                </div>

                <div className="space-y-2.5">
                  {LIVING_COSTS.map((c, i) => (
                    <div key={i} className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-200">
                      <span className="text-slate-600 font-medium">{c.item}</span>
                      <div className="text-right">
                        <span className="font-bold text-[#0a1e38]">{c.range}</span>
                        <span className="text-[11px] text-slate-400 block">({c.inr})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-2xl bg-white border border-slate-200">
                <div className="flex items-center justify-between text-sm font-extrabold text-[#0a1e38]">
                  <span>Total Est. Monthly:</span>
                  <span className="text-[#22c55e] text-base font-black">SGD 1,300 – 2,400</span>
                </div>
                <div className="text-xs text-slate-500 text-right mt-0.5">Approx. ₹80,000 – ₹1,50,000 / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          9. WHY FILE YOUR SINGAPORE APPLICATION WITH UMANG?
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#0a1e38] via-[#112a4c] to-[#0a1e38] text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
            Honest • Professional • Transparent
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
            Why File Your Singapore Application with Umang?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            &ldquo;We don&apos;t build empty expectations. We analyze your academic transcripts, explain proof-of-fund rules truthfully, map your backlog status honestly, and construct a practical roadmap to maximize your ICA approval chances.&rdquo;
          </p>

          <div className="mt-8 text-2xl sm:text-3xl font-black text-[#e52928] tracking-tight">
            Umang career mein possible hai!
          </div>

          <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium">
            Ready for an honest, crystal-clear evaluation of your Singapore study options?
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919173186109"
              className="anim-phone-ring inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <PhoneIcon />
              <span>Call +91 9173186109</span>
            </a>
            <a
              href="tel:+919712610086"
              className="anim-phone-ring inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <PhoneIcon />
              <span>Call +91 9712610086</span>
            </a>
            <a
              href="#counselling-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0a1e38] font-bold text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Visit Vadodara Office</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          10. FREQUENTLY ASKED QUESTIONS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions: Singapore Student's Pass"
            subtitle="Straightforward answers regarding SOLAR approvals, part-time work legality, and post-study LTVP stay."
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm overflow-hidden transition-colors"
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
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          11. FREE COUNSELLING FORM & OFFICIAL OFFICE DETAILS
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-widest uppercase">
                Take The Next Step
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] mt-1.5">
                Book Free Singapore Study Evaluation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Receive end-to-end guidance from Founder Sudip Parikh and senior Asia-Pacific visa counselors at Umang Career Consultancy.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckmarkIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-[#0a1e38]">Inquiry Submitted!</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Thank you! Our Singapore education advisor will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 inline-flex text-xs font-bold text-[#e52928] hover:underline"
                >
                  Submit another evaluation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Target Program *</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData((prev) => ({ ...prev, program: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm bg-white transition-all"
                    >
                      <option value="Hospitality & Tourism Management (HTM)">Hospitality & Tourism Management (HTM)</option>
                      <option value="Information Technology (IT) & Cyber Security">Information Technology (IT) & Cyber Security</option>
                      <option value="Business Management (BM) & Global Logistics">Business Management (BM) & Global Logistics</option>
                      <option value="Supply Chain Management (SCM)">Supply Chain Management (SCM)</option>
                      <option value="Autonomous University UG/PG (NUS/NTU/SMU)">Autonomous University UG/PG (NUS/NTU/SMU)</option>
                      <option value="Other Course">Other Course / Private Diploma</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Target Intake</label>
                    <select
                      value={formData.intake}
                      onChange={(e) => setFormData((prev) => ({ ...prev, intake: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm bg-white transition-all"
                    >
                      <option value="August 2026">August 2026</option>
                      <option value="October/November 2026">October / November 2026</option>
                      <option value="January 2027">January 2027</option>
                      <option value="March/April 2027">March / April 2027</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Academic Background or Questions</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                    placeholder="Tell us about your highest qualification, percentage, backlogs (if any), or preferred Singapore institute."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#e52928] hover:bg-[#c92017] text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95"
                  >
                    Book Free Singapore Consultation
                  </button>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href="https://wa.me/919173186109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-sm transition-colors hover:scale-105 active:scale-95 text-sm"
                    >
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="tel:+919173186109"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#0a1e38] hover:bg-[#112a4c] text-white font-semibold rounded-xl shadow-sm transition-colors hover:scale-105 active:scale-95 text-sm"
                    >
                      <span>Call Counsellor</span>
                    </a>
                  </div>
                </div>

                {/* Direct Office & Contact Verification Strip */}
                <div className="pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-500">
                  <div>
                    <strong className="text-slate-700 font-semibold block mb-0.5">Visit Our Head Office:</strong>
                    First Floor 25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP road, Vadodara Gujarat. 390019
                  </div>
                  <div>
                    <strong className="text-slate-700 font-semibold block mb-0.5">Direct Enquiries:</strong>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a href="tel:+919173186109" className="text-[#0a1e38] font-bold hover:underline">+91 9173186109</a>
                      <span>•</span>
                      <a href="tel:+919712610086" className="text-[#0a1e38] font-bold hover:underline">+91 9712610086</a>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      <a href="mailto:umangcareer2022@gmail.com" className="hover:underline">umangcareer2022@gmail.com</a> | <a href="mailto:umangcareer2025@gmail.com" className="hover:underline">umangcareer2025@gmail.com</a> | <a href="mailto:umangcareer2023@gmail.com" className="hover:underline">umangcareer2023@gmail.com</a>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
