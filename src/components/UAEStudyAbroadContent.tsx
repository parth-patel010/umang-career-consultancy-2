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

/* UAE Flag Badge */
function UAEFlagBadge() {
  return (
    <svg className="w-9 h-6 rounded shadow-sm border border-slate-200" viewBox="0 0 60 42">
      <rect width="60" height="14" fill="#00732f" />
      <rect y="14" width="60" height="14" fill="#ffffff" />
      <rect y="28" width="60" height="14" fill="#000000" />
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
          className={`mt-3 text-sm sm:text-base max-w-2xl mx-auto ${
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
   DATA: CORE PILLARS (Why Choose Dubai)
------------------------------------------------------------- */
const WHY_CHOOSE_DUBAI = [
  {
    title: "Global Financial Hub",
    description:
      "Study in a hyper-connected metropolis that serves as the corporate headquarters for Fortune 500 companies, offering unparalleled networking and internship options.",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    badge: "Fortune 500 Network",
  },
  {
    title: "Safe and Modern Lifestyle",
    description:
      "Experience one of the safest, most cosmopolitan cities in the world with cutting-edge student infrastructure and premium lifestyle amenities.",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    badge: "World Top 3 Safest",
  },
  {
    title: "Post-Study Employment Growth",
    description:
      "Position yourself in a booming job market with excellent opportunities to transition into corporate roles upon graduation.",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    badge: "0% Income Tax",
  },
  {
    title: "Flexible Part-Time Work",
    description:
      "Gain valuable international work experience with legal provisions to take up part-time jobs and internships while completing your course.",
    icon: (
      <svg className="w-6 h-6 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: "Legal Work Rights",
  },
];

/* -------------------------------------------------------------
   DATA: TOP WORLD-RENOWNED UNIVERSITIES IN DUBAI
------------------------------------------------------------- */
const TOP_UNIVERSITIES_DUBAI = [
  {
    name: "University of Birmingham Dubai",
    type: "UK Russell Group Branch Campus",
    location: "Dubai International Academic City (DIAC)",
    hub: "DIAC Campus",
    description:
      "Graduate from a prestigious UK Russell Group university campus offering elite programs in business, computer science, and engineering.",
    highlights: [
      "Top 100 World Ranked University (QS)",
      "Identical UK degree awarded at graduation",
      "State-of-the-art smart campus opened in DIAC",
      "Russell Group pedigree with elite corporate tie-ups",
    ],
    popular: ["BSc Computer Science", "MSc International Business", "BEng Mechanical Engineering", "MSc Artificial Intelligence"],
  },
  {
    name: "Heriot-Watt University Dubai",
    type: "Top UK Engineering & Business Institution",
    location: "Dubai Knowledge Park (DKP)",
    hub: "DKP Campus",
    description:
      "A pioneering British institution known for stellar engineering, data science, and global business management curriculum.",
    highlights: [
      "First overseas university established in Dubai (2005)",
      "UK Royal Charter degrees recognized internationally",
      "Brand-new campus in Dubai Knowledge Park",
      "Pioneering Edinburgh Business School programs",
    ],
    popular: ["MSc Data Science", "BBA Global Business Management", "BEng Robotics & Autonomous Systems", "MSc Construction Project Mgmt"],
  },
  {
    name: "University of Wollongong in Dubai (UOWD)",
    type: "Premier Australian University Branch",
    location: "Dubai Knowledge Park (DKP)",
    hub: "DKP Campus",
    description:
      "One of the oldest and most respected Australian branch universities in the UAE, famous for finance, IT, and media studies.",
    highlights: [
      "Top 1% Global University (Australian Parent)",
      "Accredited by UAE Ministry of Education (CAA)",
      "Over 30 years of excellence in Dubai",
      "Seamless transfer options to Wollongong, Australia",
    ],
    popular: ["Bachelor of Computer Science", "Master of Applied Finance", "Bachelor of Media & Communications", "Master of Business Analytics"],
  },
  {
    name: "Middlesex University Dubai",
    type: "Award-Winning UK University Campus",
    location: "Dubai Knowledge Park (DKP)",
    hub: "DKP Campus",
    description:
      "An award-winning UK campus offering flexible course selections across accounting, law, design, and psychology.",
    highlights: [
      "Over 4,000 students from 118+ nationalities",
      "Attractive merit scholarships up to 50%",
      "Direct UK honors degree with London study trips",
      "Flexible evening timetable options for postgraduates",
    ],
    popular: ["LLB Honours Law", "BA Graphic Design", "BSc Psychology with HR", "MSc Corporate & Marketing Communications"],
  },
  {
    name: "Curtin University Dubai",
    type: "High-Ranking Australian Tech Institution",
    location: "Dubai International Academic City (DIAC)",
    hub: "DIAC Campus",
    description:
      "A high-ranking Australian institution offering industry-aligned degrees in business, communications, and information technology.",
    highlights: [
      "Top 1% Global University worldwide (ARWU)",
      "Triple-accredited Curtin Business School (AACSB)",
      "Option to complete final years in Perth, Australia",
      "Intensive 3-year Australian bachelor degrees",
    ],
    popular: ["Bachelor of Information Technology", "Bachelor of Commerce", "Master of International Business", "Diploma of Arts & Creative Industries"],
  },
];

/* -------------------------------------------------------------
   DATA: PATHWAY & TRANSFER PROGRAMS
------------------------------------------------------------- */
const PATHWAY_PROGRAMS = [
  {
    title: "Foundation and Diploma Pathways",
    subtitle: "Bridge Academic Gaps & Enter Year 2 Directly",
    description:
      "Enroll in foundational modules that bridge the academic gap, guaranteeing progression into the second year of your undergraduate degree at world-class branch campuses.",
    benefits: [
      "Guaranteed progression into Bachelor's degree Year 2 upon passing",
      "Lower high school grade cutoffs accepted compared to direct entry",
      "Intensive academic English and study skills preparation",
      "Small class sizes with high faculty-to-student interaction",
    ],
    idealFor: "Students completing CBSE/ICSE/State boards who need academic smoothing or fast-track entry.",
  },
  {
    title: "International Transfer Options (1+2 & 2+1)",
    subtitle: "Start in Dubai, Graduate in UK, Australia, or Canada",
    description:
      "Start your educational journey at a premium campus in Dubai and seamlessly transfer to home campuses in the UK, Australia, or Canada after 1 or 2 years, saving significantly on initial tuition and living costs.",
    benefits: [
      "Save 40% to 60% on initial tuition & accommodation costs during years in Dubai",
      "Earn full post-study work rights (PGWP in Canada, Graduate Route in UK, PSWV in Australia) upon completing final years abroad",
      "Zero hassle internal credit transfer between international campuses",
      "Gain dual-continent exposure and international network",
    ],
    idealFor: "Budget-conscious families seeking world-class degrees and western post-study work visas.",
  },
];

/* -------------------------------------------------------------
   DATA: DUBAI VISA PROCESS (Streamlined University-Sponsored)
------------------------------------------------------------- */
const VISA_PROCESS_STEPS = [
  {
    title: "University-Sponsored Visa",
    subtitle: "Zero Hassle Institutional Sponsorship",
    description:
      "Unlike traditional destinations, your student visa is officially processed and sponsored by your chosen university in Dubai, making the documentation incredibly simple.",
    badge: "100% University Sponsored",
  },
  {
    title: "Straightforward Financial Rules",
    subtitle: "Clean & Clear-Cut Financial Declarations",
    description:
      "Enjoy a hassle-free immigration process with clean, clear-cut financial declarations—avoiding the overly complicated funding histories required by western consulates.",
    badge: "No Complex Bank Histories",
  },
  {
    title: "Medium of Instruction (MOI) Pathways",
    subtitle: "Admission Without Mandatory IELTS/PTE",
    description:
      "Avoid the stress of rigid language test thresholds; many premier universities in Dubai allow admissions and visa clearances using an English MOI certificate from your previous school or college.",
    badge: "English MOI Accepted",
  },
  {
    title: "Medical and Insurance Clearance",
    subtitle: "Complete On-Arrival Care",
    description:
      "We manage your mandatory local health screenings and secure compliant UAE medical insurance required for your residency permit activation.",
    badge: "Emirates ID & Health Screening",
  },
];

/* -------------------------------------------------------------
   DATA: UMANG 4-STEP SUCCESS PROCESS
------------------------------------------------------------- */
const FOUR_STEP_PROCESS = [
  {
    num: "01",
    title: "Campus & Career Alignment",
    desc: "Evaluating your profile to find the ideal global branch university or budget-friendly pathway program in Dubai.",
    details: "We assess your high school/degree marks, financial parameters, and target post-study career goals to match top UK/Australian campuses.",
  },
  {
    num: "02",
    title: "Direct Application Management",
    desc: "Coordinating flawlessly with academic panels to secure your official Letter of Acceptance (LOA) and scholarship grants.",
    details: "We fast-track admissions with partner university admissions boards and maximize merit scholarships up to 50% tuition reduction.",
  },
  {
    num: "03",
    title: "Hassle-Free Visa Lodgement",
    desc: "Routing your immigration documents through university portals to secure your entry permit with speed and precision.",
    details: "No tedious embassy queues or interview stress; the university issues an official UAE Entry Permit within 2 to 3 weeks.",
  },
  {
    num: "04",
    title: "Pre-Departure & Local Arrival Briefing",
    desc: "Preparing you with complete practical checklists for corporate wear, student accommodation, and local transport networks.",
    details: "Guiding you on Dubai Metro Nol cards, student flat rentals in DIAC/DKP, local SIM cards, and on-arrival medical fitness tests.",
  },
];

/* -------------------------------------------------------------
   DATA: COST OF STUDY & LIVING
------------------------------------------------------------- */
const EXPENSE_DATA = [
  { level: "Undergraduate Degree (Bachelor's)", costAed: "AED 45,000 – AED 95,000 / year", costInr: "₹10,50,000 – ₹22,000,000" },
  { level: "Postgraduate Degree (Master's / MBA)", costAed: "AED 50,000 – AED 110,000 / year", costInr: "₹11,50,000 – ₹25,50,000" },
  { level: "Foundation & Diploma Pathways", costAed: "AED 35,000 – AED 55,000 / year", costInr: "₹8,00,000 – ₹12,80,000" },
  { level: "Student Accommodation (Shared Flat / Hostel)", costAed: "AED 1,800 – AED 3,500 / month", costInr: "₹42,000 – ₹82,000" },
  { level: "Food & Personal Living Expenses", costAed: "AED 1,000 – AED 1,800 / month", costInr: "₹23,000 – ₹42,000" },
  { level: "Local Transportation (Metro Nol Student Pass)", costAed: "AED 150 – AED 300 / month", costInr: "₹3,500 – ₹7,000" },
];

/* -------------------------------------------------------------
   DATA: FAQS
------------------------------------------------------------- */
const DUBAI_FAQS = [
  {
    q: "Why is Dubai considered the most hassle-free study abroad destination for Indian students?",
    a: "Unlike traditional western destinations where students face rigid embassy interviews, strict quotas, and cumbersome multi-year bank statement audits, Dubai's student visas are officially processed and sponsored directly by the university. Approvals are typically issued within 2 to 3 weeks with straightforward financial declarations and high approval rates.",
  },
  {
    q: "Do I need IELTS or PTE to study at top universities in Dubai?",
    a: "In many cases, no! Many premier international branch universities in Dubai accept an English Medium of Instruction (MOI) certificate from your previous school or college (stating your education was in English). If your MOI meets the institution's threshold, the IELTS/PTE requirement is waived.",
  },
  {
    q: "How does the International Transfer Option (Pathway Program) work?",
    a: "You can enroll in the first 1 or 2 years of an undergraduate program at a Dubai branch campus (like University of Birmingham, Wollongong, or Curtin) and seamlessly transfer to the parent campus in the UK, Australia, or Canada. This saves you huge sums on tuition and living costs during your initial years while ensuring you graduate with an authentic global degree and qualify for post-study work permits in that country.",
  },
  {
    q: "Can international students work part-time while studying in Dubai?",
    a: "Yes. International students in Dubai can legally work part-time or undertake paid internships during semesters (typically up to 15–20 hours per week) and full-time during vacations, subject to university approval and local UAE labor regulations. Many universities run active on-campus career placement cells.",
  },
  {
    q: "What degree certificate do I receive upon graduating from a branch campus in Dubai?",
    a: "You receive the exact same official degree certificate and academic transcript as students studying at the home campus in the UK or Australia (e.g. University of Birmingham, Heriot-Watt, Wollongong). There is no difference in the degree title, giving you universal global accreditation.",
  },
  {
    q: "What is the UAE Golden Visa for outstanding students?",
    a: "Exceptional students graduating from UAE high schools or universities with outstanding academic achievement (typically a GPA of 3.75 or 3.8+ out of 4.0) can qualify for a 5-year or 10-year UAE Golden Visa, providing long-term residency without requiring immediate employer sponsorship.",
  },
  {
    q: "What are the job opportunities and career prospects in Dubai after graduation?",
    a: "Dubai is the regional headquarters for thousands of multinational enterprises across finance, technology, aviation, real estate, logistics, and tourism. With 0% personal income tax, competitive corporate salaries, and straightforward transitions from student visas to employer-sponsored employment residency permits, Dubai provides an exceptional launchpad for young professionals.",
  },
  {
    q: "How does Umang Career Consultancy in Vadodara support my Dubai admission?",
    a: "Our certified consultants guide you through university selection, course evaluation, profile optimization, scholarship grants (up to 50%), university portal submission, entry permit visa tracking, Emirates ID registration, and pre-departure accommodation booking.",
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
    university: "University of Birmingham Dubai",
    degree: "Master's / Postgraduate",
    intake: "September 2026",
    notes: "",
  });

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(await sendFormInquiry(e.currentTarget as HTMLFormElement, "U A E Study Abroad page"))) return;
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
            <span className="text-[#0a1e38] font-bold">Dubai (UAE)</span>
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
                  Umang Career Consultancy • Dubai Student Visa Page
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Shape Your Destiny:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1e38] via-[#e52928] to-[#b91c1c]">
                  Study in Dubai
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#e52928] mt-2">
                  with Umang Career Consultancy
                </span>
              </h1>

              {/* Sub-tagline from User Prompt */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Step into the world&apos;s most dynamic global hub of business, innovation, and luxury. At Umang Career Consultancy, we map your academic ambition to the fast-growing educational landscape of the United Arab Emirates. Benefit from top-tier international education, seamless visa pathways, and exceptional post-study career options in Dubai.
              </p>

              {/* 4 Feature Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl hover:border-red-300 transition-colors">
                  <div className="text-sm sm:text-base font-bold text-[#0a1e38]">Fortune 500</div>
                  <div className="text-[11px] text-slate-500 font-medium">Global Corporate Hub</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl hover:border-red-300 transition-colors">
                  <div className="text-sm sm:text-base font-bold text-[#e52928]">Zero Hassle</div>
                  <div className="text-[11px] text-slate-500 font-medium">University-Sponsored</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl hover:border-red-300 transition-colors">
                  <div className="text-sm sm:text-base font-bold text-emerald-600">English MOI</div>
                  <div className="text-[11px] text-slate-500 font-medium">IELTS Waivers Available</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl hover:border-red-300 transition-colors">
                  <div className="text-sm sm:text-base font-bold text-blue-600">UK / AUS / CAN</div>
                  <div className="text-[11px] text-slate-500 font-medium">Transfer Pathways</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#e52928] hover:bg-[#c81e1d] text-white font-bold rounded-xl shadow-lg shadow-red-500/25 transition-all text-center"
                >
                  Book Free Dubai Consultation
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
                    src="/destinations/united-arab-emirates.jpg"
                    alt="Study in Dubai UAE - Umang Career Consultancy"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e38]/90 via-black/30 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0a1e38] shadow-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Fall 2026 Admissions Open</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Dubai Knowledge Park &amp; DIAC
                    </span>
                    <h3 className="text-xl font-bold leading-snug">
                      World-Class British &amp; Australian Degrees in Dubai
                    </h3>
                    <p className="text-xs text-slate-300">
                      Birmingham • Heriot-Watt • Wollongong • Middlesex • Curtin
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
                    <div className="text-xs font-bold text-slate-900">University-Sponsored Visa</div>
                    <div className="text-[11px] text-slate-500 font-medium">99.8% Approval Track Record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. WHY CHOOSE DUBAI FOR YOUR HIGHER EDUCATION?
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Dubai for Your Higher Education?"
            subtitle="Explore how Dubai combines top-ranked global academics with vibrant cosmopolitan living, legal student work rights, and corporate growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {WHY_CHOOSE_DUBAI.map((item, idx) => (
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
          3. STUDY AT LEADING WORLD-RENOWNED UNIVERSITIES IN DUBAI
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Study at Leading World-Renowned Universities in Dubai"
            subtitle="Dubai is home to the world's largest concentration of prestigious international branch campuses located in dedicated hubs like Dubai Knowledge Park (DKP) and Dubai International Academic City (DIAC). Secure direct admission with Umang Career Consultancy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOP_UNIVERSITIES_DUBAI.map((uni, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#e52928] bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                      {uni.hub}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {uni.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a1e38] mb-1">
                    {uni.name}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    {uni.type}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {uni.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {uni.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-700 mb-2">Popular Programs:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {uni.popular.map((prog, pi) => (
                      <span
                        key={pi}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Sixth Promotional Card */}
            <div className="bg-gradient-to-br from-[#0a1e38] to-[#142d4f] rounded-2xl p-7 text-white shadow-xl flex flex-col justify-between border border-slate-800">
              <div>
                <span className="inline-block text-xs font-bold text-red-400 bg-red-950/60 border border-red-800/40 px-3 py-1 rounded-full mb-4">
                  Additional Top Campuses
                </span>
                <h3 className="text-2xl font-black mb-3">
                  More Prestigious Institutions in Dubai
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  We also represent Murdoch University Dubai, Canadian University Dubai, BITS Pilani Dubai Campus, Manipal Academy of Higher Education, and De Montfort University Dubai.
                </p>
                <div className="space-y-2.5 text-xs text-slate-200 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>100% University Sponsored Visas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Merit Scholarships up to 50% Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Direct Vadodara Office Assistance</span>
                  </div>
                </div>
              </div>

              <a
                href="#counselling-form"
                className="w-full text-center px-5 py-3 rounded-xl bg-[#e52928] hover:bg-[#c81e1d] text-white font-bold text-sm transition-all shadow-md"
              >
                Get University Shortlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. UNLOCK AFFORDABLE ROUTES VIA PATHWAY PROGRAMS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Unlock Affordable Routes via Pathway Programs"
            subtitle="If you do not meet direct entry criteria or wish to optimize your educational budget, Umang Career Consultancy specializes in structuring strategic Pathway Programs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PATHWAY_PROGRAMS.map((prog, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-7 sm:p-9 shadow-sm hover:border-[#e52928] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#e52928] bg-red-100/60 px-3.5 py-1.5 rounded-full mb-4">
                    <span>Strategic Route</span> • <span>Fast Track</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0a1e38] mb-1.5">
                    {prog.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#e52928] mb-4">
                    {prog.subtitle}
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  <div className="space-y-3 mb-6 bg-white p-5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Key Strategic Advantages:
                    </div>
                    {prog.benefits.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-50/70 p-4 rounded-xl border border-red-100 text-xs text-slate-700">
                  <span className="font-bold text-[#e52928]">Best Fit For: </span>
                  {prog.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. NAVIGATING THE DUBAI STUDENT VISA PROCESS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-[#0a1e38] via-[#0f284c] to-[#0a1e38] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Navigating the Dubai Student Visa Process"
            subtitle="Dubai offers a highly streamlined, zero-hassle immigration framework completely sponsored by the university itself. Our expert team ensures your file satisfies all criteria for high approval rates."
            variant="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {VISA_PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl hover:bg-white/15 hover:border-red-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold text-red-300 bg-red-950/80 border border-red-800/60 px-3 py-1 rounded-full mb-4">
                    {step.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300 mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 text-xs font-semibold text-red-300 flex items-center gap-1.5">
                  <span>Guaranteed Guidance</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Visa Roadmap Banner */}
          <div className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                  Step 1: Entry Permit (eVisa)
                </div>
                <div className="text-lg font-bold text-white">Issued in 10 to 15 Days</div>
                <p className="text-xs text-slate-300 mt-1">
                  Electronic entry voucher sent to you in India, granting legal entry into UAE.
                </p>
              </div>

              <div className="md:border-l md:border-r border-white/15 md:px-6">
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                  Step 2: Medical &amp; Emirates ID
                </div>
                <div className="text-lg font-bold text-white">On-Arrival Health Clearance</div>
                <p className="text-xs text-slate-300 mt-1">
                  Standard blood test, chest X-ray &amp; biometrics conducted at Dubai Health centers.
                </p>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                  Step 3: Residence Visa Stamping
                </div>
                <div className="text-lg font-bold text-white">1-Year Renewable Student Card</div>
                <p className="text-xs text-slate-300 mt-1">
                  Emirates ID card delivered to campus with active UAE student residence status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. THE UMANG CAREER CONSULTANCY ADVANTAGE: 4-STEP PROCESS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Umang Career Consultancy Advantage: Our 4-Step Success Process"
            subtitle="From profile evaluation and scholarship matching to university portal lodgement and Dubai arrival briefings, our dedicated consultants manage your end-to-end journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_STEP_PROCESS.map((s, idx) => (
              <div
                key={idx}
                className="relative bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-red-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Umang Direct Care</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. TUITION FEES & LIVING COSTS BREAKDOWN
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Estimated Tuition Fees & Living Expenses in Dubai"
            subtitle="Transparent financial benchmarks to help you plan your higher education investment in the UAE."
          />

          <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0a1e38] text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Program / Expense Category</th>
                  <th className="py-4 px-6">Average Cost (AED)</th>
                  <th className="py-4 px-6">Estimated Cost (INR approx.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {EXPENSE_DATA.map((row, i) => (
                  <tr key={i} className="hover:bg-red-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">{row.level}</td>
                    <td className="py-4 px-6 text-[#0a1e38] font-bold">{row.costAed}</td>
                    <td className="py-4 px-6 text-[#e52928] font-bold">{row.costInr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <FeeNote />
          <div className="mt-4 text-xs text-slate-500 text-center">
            *Exchange rate benchmark: 1 AED ≈ ₹22.8. Exact tuition fees depend on the specific institution, course, and scholarship allocation.
          </div>
        </div>
      </section>

      {/* =========================================================
          8. FREQUENTLY ASKED QUESTIONS (FAQS)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions: Dubai Student Visa"
            subtitle="Answers to common questions regarding admissions, work rights, pathways, and visa processing in Dubai."
          />

          <div className="space-y-4">
            {DUBAI_FAQS.map((faq, idx) => {
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
                Vadodara Office • Certified Dubai Counselors
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Your Global Future Begins in Dubai!
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Don&apos;t let complex traditional visa systems delay your career growth. Partner with the destination experts at Umang Career Consultancy to unlock a world-class degree in Dubai. Contact our Vadodara office today for a personalized consultation!
              </p>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-left shadow-sm">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span>Direct Admissions to British &amp; Australian Branch Campuses</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span>Strategic Pathway &amp; UK / Australia Transfer Programs</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span>100% University-Sponsored Visa Assistance</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span>English MOI Admissions &amp; Scholarship Guidance</span>
                </div>
              </div>

              {/* Direct Call Info */}
              <div className="pt-2 space-y-2">
                <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">
                  Talk to Our Dubai Counselors:
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
                  <span className="font-bold text-slate-700">Office Location: </span>
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
                    Inquiry Received for Dubai!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our certified Dubai education counselor will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
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
                        Target Institution *
                      </label>
                      <select
                        value={formData.university}
                        onChange={(e) => setFormData((prev) => ({ ...prev, university: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="University of Birmingham Dubai">University of Birmingham Dubai (UK)</option>
                        <option value="Heriot-Watt University Dubai">Heriot-Watt University Dubai (UK)</option>
                        <option value="University of Wollongong in Dubai">University of Wollongong in Dubai (AUS)</option>
                        <option value="Middlesex University Dubai">Middlesex University Dubai (UK)</option>
                        <option value="Curtin University Dubai">Curtin University Dubai (AUS)</option>
                        <option value="Pathway Program (UK/AUS/CAN Transfer)">Pathway Program (UK/AUS/CAN Transfer)</option>
                        <option value="Other Dubai Institution">Other Dubai Institution</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Degree Level
                      </label>
                      <select
                        value={formData.degree}
                        onChange={(e) => setFormData((prev) => ({ ...prev, degree: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Undergraduate / Bachelor's">Undergraduate / Bachelor&apos;s</option>
                        <option value="Master's / Postgraduate">Master&apos;s / Postgraduate</option>
                        <option value="Foundation / Diploma Pathway">Foundation / Diploma Pathway</option>
                        <option value="MBA / Executive">MBA / Executive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Target Intake
                      </label>
                      <select
                        value={formData.intake}
                        onChange={(e) => setFormData((prev) => ({ ...prev, intake: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="September 2026">September 2026 (Major Intake)</option>
                        <option value="January 2027">January 2027 (Winter)</option>
                        <option value="May 2027">May 2027 (Summer)</option>
                        <option value="September 2027">September 2027</option>
                      </select>
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
                      placeholder="Share your highest qualification, percentage, and any questions regarding admissions or transfer programs..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e52928] hover:bg-[#c81e1d] text-white font-extrabold rounded-xl shadow-lg shadow-red-500/25 transition-all text-base"
                  >
                    Submit My Dubai Application Inquiry
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
            <UAEFlagBadge />
            <span className="text-sm font-semibold text-slate-200">
              Ready to Study in Dubai? Fast-Track Your Admission &amp; University-Sponsored Visa with Umang Career Consultancy Vadodara!
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
