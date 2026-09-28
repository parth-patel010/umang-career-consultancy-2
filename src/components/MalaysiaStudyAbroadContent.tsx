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

function MountainIcon() {
  return (
    <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function RainIcon() {
  return (
    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

/* Malaysian Flag Badge */
function MalaysiaFlagBadge() {
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
const TOP_COURSES = [
  {
    name: "Business & Management",
    category: "Commerce & MBA",
    tag: "Global Accreditations",
    desc: "Top international business degrees, supply chain logistics, Islamic banking, and fintech at Sunway, Taylor's, and Monash Malaysia.",
  },
  {
    name: "Computer Science & IT",
    category: "Technology & Software",
    tag: "High Demand",
    desc: "Leading software engineering, cyber security, artificial intelligence, and cloud systems aligned directly with Cyberjaya digital corridor.",
  },
  {
    name: "Tourism & Hospitality",
    category: "Hospitality & Events",
    tag: "Southeast Asia #1",
    desc: "Taylor's School of Hospitality ranks #1 in Southeast Asia, with dual qualifications from renowned European institutions like Le Cordon Bleu.",
  },
  {
    name: "Engineering",
    category: "Technical Disciplines",
    tag: "Washington Accord",
    desc: "Civil, mechanical, electrical, and chemical engineering accredited under the Washington Accord for global professional engineering practice.",
  },
  {
    name: "Medicine & Health Sciences",
    category: "Clinical & Biomedical",
    tag: "WHO / NMC Recognized",
    desc: "MBBS, pharmacy, and biomedical sciences at UM, UCSI, and Newcastle University Medicine Malaysia (NUMed) with advanced clinical rotations.",
  },
  {
    name: "Media & Communication",
    category: "Creative & Digital",
    tag: "Industry Creative Hub",
    desc: "Broadcast journalism, public relations, digital advertising, and film production connecting directly with Southeast Asia's media capitals.",
  },
  {
    name: "Architecture & Built Environment",
    category: "Design & Construction",
    tag: "LAM Accredited",
    desc: "Sustainable tropical architecture, urban planning, interior architecture, and quantity surveying accredited by Board of Architects Malaysia (LAM).",
  },
  {
    name: "Law & International Relations",
    category: "Legal & Diplomacy",
    tag: "UK Transfer / Bar",
    desc: "Common law curricula with direct UK degree transfer pathways (University of London, Reading, Liverpool) and ASEAN diplomatic studies.",
  },
];

const WHY_MALAYSIA = [
  {
    title: "Globally Recognised Degrees",
    desc: "Qualifications accredited by the Malaysian Qualifications Agency (MQA) and fully recognized across the Commonwealth, UK, USA, Australia, and India.",
  },
  {
    title: "Strong Sectors",
    desc: "Electronics, oil & gas, tourism, education & finance driving an expanding modern economy and graduate opportunities.",
  },
  {
    title: "Affordable Tuition Fees",
    desc: "Annual tuition starts from just USD 1,630/year with competitive living expenses, offering exceptional value for global degrees.",
  },
  {
    title: "International Student Community",
    desc: "Students from over 100+ countries creating a welcoming, multicultural campus environment across public and private universities.",
  },
  {
    title: "Safe and Student-Friendly Environment",
    desc: "Ranked among the top 20 most peaceful nations globally with low crime rates, modern infrastructure, and political stability.",
  },
  {
    title: "Work Opportunities Subject to Visa Conditions",
    desc: "Work opportunities may be available subject to applicable student visa conditions and Malaysian immigration regulations.",
  },
  {
    title: "Scholarship Opportunities",
    desc: "Merit scholarships, Malaysian International Scholarship (MIS), university fee discounts, and foreign twinning awards.",
  },
  {
    title: "Foreign Branch Campuses (3+0 / 2+1)",
    desc: "Earn prestigious degrees from Monash (Australia), Nottingham (UK), or Southampton (UK) directly in Malaysia at one-third the international tuition!",
  },
];

const PROVINCES = [
  {
    id: "selangor",
    name: "SELANGOR",
    title: "Selangor State",
    desc: "Explore study opportunities in Selangor. The vibrant education, industrial, and tech powerhouse surrounding Kuala Lumpur. Home to Monash University Malaysia, Sunway University, and Taylor's University.",
    tag: "Premier Higher Ed Hub",
  },
  {
    id: "penang",
    name: "PENANG",
    title: "Penang (Pulau Pinang)",
    desc: "Explore study opportunities in Penang. The 'Silicon Valley of the East' with a booming semiconductor cluster. Home to Universiti Sains Malaysia (USM) and rich UNESCO heritage.",
    tag: "Silicon Valley of the East",
  },
  {
    id: "johor",
    name: "JOHOR",
    title: "Johor & EduCity",
    desc: "Explore study opportunities in Johor. Adjacent to Singapore, featuring EduCity Iskandar with branch campuses of University of Southampton, University of Reading, and Newcastle Medicine.",
    tag: "EduCity International Hub",
  },
  {
    id: "sarawak",
    name: "SARAWAK",
    title: "Sarawak (Borneo)",
    desc: "Explore study opportunities in Sarawak. The largest state on the island of Borneo, home to Curtin University Malaysia, Swinburne Sarawak, rich tropical ecology, and energy engineering.",
    tag: "Borneo Innovation Hub",
  },
  {
    id: "sabah",
    name: "SABAH",
    title: "Sabah (Borneo)",
    desc: "Explore study opportunities in Sabah. Famed for Mount Kinabalu, pristine coral reefs, and Universiti Malaysia Sabah (UMS) specializing in marine biology, forestry, and sustainable eco-tourism.",
    tag: "Marine & Eco-Science",
  },
  {
    id: "kedah",
    name: "KEDAH",
    title: "Kedah",
    desc: "Explore study opportunities in Kedah. Known as the 'Rice Bowl of Malaysia', home to Universiti Utara Malaysia (UUM) specialized in management, governance, and agribusiness technology.",
    tag: "Management & Agritech",
  },
];

const UNIVERSITIES = [
  {
    name: "University of Malaya (UM)",
    location: "Kuala Lumpur",
    qsRank: "#60 Global (QS World 2025)",
    tag: "Malaysia's #1 Premier University",
    features: "The oldest and highest-ranking research university in Malaysia, excelling in medicine, engineering, law, computer science, and public policy.",
  },
  {
    name: "Monash University Malaysia",
    location: "Bandar Sunway, Selangor",
    qsRank: "Top 40 Global (Monash Australia)",
    tag: "Australian Group of Eight Campus",
    features: "Established branch campus offering identical Australian degrees, exams, and grading with full credit transfer options to Melbourne.",
  },
  {
    name: "Universiti Kebangsaan Malaysia (UKM)",
    location: "Bangi, Selangor",
    qsRank: "#138 Global (QS World 2025)",
    tag: "National Research Powerhouse",
    features: "One of Malaysia's elite five research universities with strengths in renewable energy, biotechnology, social sciences, and engineering.",
  },
  {
    name: "Universiti Putra Malaysia (UPM)",
    location: "Serdang, Selangor",
    qsRank: "#148 Global (QS World 2025)",
    tag: "Agriculture & Engineering Leader",
    features: "World-class faculties in agriculture, forestry, veterinary medicine, artificial intelligence, and environmental technology.",
  },
  {
    name: "UCSI University",
    location: "Kuala Lumpur",
    qsRank: "#265 Global (QS World 2025)",
    tag: "Top Private Research University",
    features: "Praised for performing arts, pharmacy, business, and engineering, with expansive industry co-op internship networks across Asia.",
  },
  {
    name: "Sunway University",
    location: "Subang Jaya, Selangor",
    qsRank: "Top 2% Global / 5-Star QS",
    tag: "Affiliated with Lancaster & Harvard",
    features: "State-of-the-art campus integrated within Sunway City, offering dual degrees with Lancaster University (UK) and Le Cordon Bleu.",
  },
];

const LIVING_COSTS = [
  { item: "Accommodation (Student Apartment / Hostel)", range: "MYR 800 – 1,500", inr: "₹14,400 – ₹27,000" },
  { item: "Food & Daily Groceries", range: "MYR 600 – 900", inr: "₹10,800 – ₹16,200" },
  { item: "Transportation (RapidKL MRT, LRT & Bus)", range: "MYR 100 – 200", inr: "₹1,800 – ₹3,600" },
  { item: "Internet & Mobile 5G Connectivity", range: "MYR 80 – 150", inr: "₹1,440 – ₹2,700" },
  { item: "Utilities (Air-Conditioning, Water, Electricity)", range: "MYR 150 – 300", inr: "₹2,700 – ₹5,400" },
  { item: "Personal, Leisure & Social Activities", range: "MYR 300 – 600", inr: "₹5,400 – ₹10,800" },
];

const SEASONS = [
  {
    name: "Summer / Coastal",
    months: "Year-Round Coastal",
    temp: "26℃ – 34℃",
    icon: <SunIcon />,
    desc: "Tropical sunshine across Kuala Lumpur, Penang, and Langkawi. Light casual attire, outdoor evening night markets, and modern air-conditioned malls.",
  },
  {
    name: "Autumn / Inland",
    months: "Inter-Monsoon Months",
    temp: "18℃ – 28℃",
    icon: <LeafIcon />,
    desc: "Pleasant rain-cooled afternoons, lush green valleys, outdoor cycling, and cultural campus festivities.",
  },
  {
    name: "Winter / Highlands",
    months: "Hill Station Climates",
    temp: "10℃ – 17℃",
    icon: <MountainIcon />,
    desc: "Refreshing cool mountain breezes in Cameron Highlands, Genting Highlands, and Fraser's Hill with tea plantations and strawberry farms.",
  },
  {
    name: "Spring / Foothills",
    months: "Tropical Spring Flora",
    temp: "15℃ – 24℃",
    icon: <RainIcon />,
    desc: "Mild highland foothills, blooming rainforest flora, and ideal temperatures for student camping and nature expeditions.",
  },
];

const ACADEMIC_SYSTEM = [
  {
    step: "01",
    title: "EMGS & Electronic Visa (eVAL)",
    desc: "Education Malaysia Global Services (EMGS) processes online student visa applications. Once approved, you receive an electronic Visa Approval Letter (eVAL) to enter Malaysia.",
  },
  {
    step: "02",
    title: "Foreign Degree Twinning (3+0 / 2+1)",
    desc: "Complete your entire degree in Malaysia or transfer for your final year to the UK or Australia, graduating with the identical degree parchment at one-third the cost.",
  },
  {
    step: "03",
    title: "100% English-Taught Curriculums",
    desc: "English is the official language of instruction across private universities, branch campuses, and public university postgraduate degree programs.",
  },
  {
    step: "04",
    title: "Student Part-Time Work Rights",
    desc: "International students can work up to 20 hours per week during semester breaks and holidays in restaurants, petrol stations, mini markets, and hotels.",
  },
  {
    step: "05",
    title: "MQA National Accreditation",
    desc: "Every course is audited and accredited by the Malaysian Qualifications Agency (MQA), ensuring credit transfers and worldwide recognition.",
  },
  {
    step: "06",
    title: "Post-Study Employment Pathways",
    desc: "Graduates can transition to Malaysia's Employment Pass (EP) or Professional Visit Pass through growing multinational corporate hubs in Kuala Lumpur and Penang.",
  },
];

const FAQS = [
  {
    q: "Is the medium of instruction English?",
    a: "Many universities and international programs in Malaysia offer courses taught in English. The language of instruction depends on the institution and program. Private universities and foreign branch campuses deliver all lectures, exams, and dissertations in English.",
  },
  {
    q: "Do I need to take the IELTS or TOEFL to study in Malaysia?",
    a: "English-language requirements vary by university and program. Some institutions may accept alternative evidence of English proficiency, such as an English Medium of Instruction (MOI) certificate from your previous school/college or university placement assessments.",
  },
  {
    q: "Can I work while studying in Malaysia?",
    a: "International students may have limited work opportunities subject to the applicable student pass conditions and Malaysian regulations. When permitted, students can work up to 20 hours per week during semester breaks and official holidays in authorized service sectors.",
  },
  {
    q: "Is there a post-study work visa in Malaysia?",
    a: "Post-study work options depend on your nationality, qualification, employment and the immigration rules applicable at the time. Initiatives like the Graduate Social Visit Pass (SVP) and corporate sponsorship on Employment Passes (EP) allow qualified graduates to build careers in Malaysia.",
  },
  {
    q: "What is a 3+0 foreign degree twinning program?",
    a: "A 3+0 program allows you to complete an entire three-year UK or Australian Bachelor's degree while studying at a Malaysian partner institution (like Sunway or Taylor's). You pay Malaysian tuition and living costs, but your final degree certificate and academic transcripts are issued directly by the foreign university in the UK or Australia!",
  },
  {
    q: "How long does it take to obtain the EMGS Visa Approval Letter (VAL)?",
    a: "Once your university submits your application to Education Malaysia Global Services (EMGS), it typically takes 2 to 4 weeks for the Malaysian Immigration Department to issue your electronic Visa Approval Letter (eVAL). With your eVAL, you can obtain your Single Entry Visa (SEV) and travel to Malaysia.",
  },
  {
    q: "How much does it cost to live in Malaysia as an international student?",
    a: "Living in Malaysia is remarkably economical. Most international students spend between MYR 1,500 and MYR 2,500 per month (approx. ₹27,000 to ₹45,000) covering comfortable air-conditioned accommodation, groceries, dining out, high-speed 5G internet, and public transit.",
  },
  {
    q: "What healthcare coverage is provided to international students?",
    a: "All international students in Malaysia are covered under mandatory student health insurance arranged during your EMGS visa process. This provides cashless hospitalization, clinic consultations, and emergency medical treatment across accredited private and panel hospitals nationwide.",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function MalaysiaStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    degree: "Bachelor's / UG",
    intake: "September 2026",
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
            <span className="text-[#0a1e38] font-bold">Malaysia</span>
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
                <MalaysiaFlagBadge />
                <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-wide uppercase">
                  Gateway to ASEAN & Top Global Degrees
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Study in <span className="text-[#e52928]">Malaysia</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
                  World-Class Global Degrees at Affordable Costs
                </span>
              </h1>

              {/* Sub-tagline */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Malaysia offers international students top-ranked universities (University of Malaya #60 QS), branch campuses of world-renowned UK & Australian institutions, highly affordable tuition from USD 1,630/year, smart digital cities, and a safe, multicultural lifestyle.
              </p>

              {/* Bullet Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-left max-w-md mx-auto lg:mx-0 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Tuition from USD 1,630 / Year</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Monash, Nottingham & Southampton Campuses</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Fast Online EMGS eVAL Visa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Work up to 20 Hrs/Week During Breaks</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Free Malaysia Counselling</span>
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
                    src="/malaysia-hero.png"
                    alt="Study in Malaysia Student - Umang Career Consultancy"
                    width={480}
                    height={480}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    priority
                  />
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3.5s]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg">
                    1/3
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">UK & Australian Degrees</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">At 1/3rd the Cost</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:4.2s]">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-lg">
                    #60
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">QS World Ranking</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">University of Malaya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT MALAYSIA (Matching User Reference)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Malaysia"
            subtitle="A dynamic Southeast Asian federation offering cutting-edge smart cities, tropical rainforests, and multicultural harmony."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Landmark Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              <Image
                src="/destinations/malaysia.jpg"
                alt="Petronas Twin Towers Kuala Lumpur Malaysia"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#e52928] text-white">
                  Petronas Twin Towers, Kuala Lumpur
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2">Truly Asia</h3>
              </div>
            </div>

            {/* Key Fact Badges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Located in Southeast Asia</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Strategic maritime crossroads encompassing Peninsular Malaysia and Malaysian Borneo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="2" /><path strokeWidth="1.6" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Gateway to ASEAN</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Direct commercial, education, and travel connectivity across the 10 ASEAN economies.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Affordable Living Costs</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  High quality student accommodation, dining, and transit at a fraction of Western costs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Modern and Developing Cities</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Ultra-modern skylines, digital innovation corridors (Cyberjaya), and rapid development.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Strong Economy</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Global leader in semiconductor manufacturing, financial services, and energy.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-xs mb-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Safe and Student-Friendly Environment</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Ranked among Asia&apos;s safest countries with multicultural harmony and warm hospitality.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs mb-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Growing Tourism & Education Sector</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Over 130,000 international students and world-class eco-tourism attractions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xs mb-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth={2} /><path strokeWidth={2} strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Hot, Humid & Rainy Climate</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Tropical temperatures with warm sunshine and seasonal monsoon refreshment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOP COURSES IN MALAYSIA (8 Courses)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Courses in Malaysia"
            subtitle="Industry-aligned programs with dual degree certifications from premier UK and Australian institutions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOP_COURSES.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-100">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors mt-3">
                    {course.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{course.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#e52928]">
                  <span>{course.tag}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Twinning Consultation Banner */}
          <div className="mt-10 bg-gradient-to-r from-[#0a1e38] to-[#122e54] p-8 rounded-3xl shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-red-500/20 text-[#e52928] text-xs font-bold border border-red-500/30">
                Foreign Degree Twinning (3+0 / 2+1)
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-2">Want a UK or Australian Degree at 1/3rd the Cost?</h3>
              <p className="mt-1 text-sm text-slate-300 max-w-xl">
                Earn authentic degrees from Lancaster, Monash, Nottingham, or Southampton while paying low Malaysian tuition and living costs.
              </p>
            </div>
            <a
              href="#counselling-form"
              className="whitespace-nowrap py-3.5 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              Explore Twinning Programs
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY MALAYSIA AS AN IDEAL DESTINATION? (8 Pillars)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why is Malaysia an Ideal Study Abroad Destination?"
            subtitle="Discover the unique advantages that attract over 130,000 international students to Malaysia."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_MALAYSIA.map((pillar, idx) => (
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
          BRANCH CAMPUSES SPOTLIGHT
         ========================================================= */}
      <section className="w-full py-12 sm:py-16 bg-[#0a1e38] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-[#22c55e] border border-emerald-500/30">
                Global Academic Excellence in Asia
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3 text-white">
                Study at Top UK & Australian Universities in Malaysia
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Malaysia hosts official full-fledged branch campuses of Monash University (Australia), University of Nottingham (UK), University of Southampton (UK), Curtin University (Australia), Swinburne University (Australia), and Heriot-Watt University (UK). Students receive the exact same qualification as their parent campuses.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#22c55e]">65% – 70%</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Savings on Tuition & Living</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#e52928]">100%</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Identical Degree Parchment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROVINCES / REGIONS IN MALAYSIA (6 Official Regions)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Provinces & States in Malaysia"
            subtitle="Explore university hubs and regional specialization across Peninsular Malaysia and Malaysian Borneo."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROVINCES.map((prov) => (
              <div
                key={prov.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-200">
                      {prov.name}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{prov.tag}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1e38]">{prov.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{prov.desc}</p>
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
          TOP UNIVERSITIES IN MALAYSIA
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Universities in Malaysia"
            subtitle="Prestigious public research universities and world-renowned private institutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            title="Malaysia Tuition Fees & Cost of Living"
            subtitle="Affordable educational investment in USD and Malaysian Ringgit (MYR) with INR equivalents."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tuition Fees Table */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#0a1e38]">Malaysia Tuition Fees</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Annual indicative tuition rates for international students
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-200">
                  Jan, Jul, Sep
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
                      <td className="py-3.5 px-3 font-semibold">USD 1,630</td>
                      <td className="py-3.5 px-3 font-semibold">USD 11,700</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹1.35L – ₹9.75L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Master Degree</td>
                      <td className="py-3.5 px-3 font-semibold">USD 2,560</td>
                      <td className="py-3.5 px-3 font-semibold">USD 14,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹2.10L – ₹11.6L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Diploma Programs</td>
                      <td className="py-3.5 px-3 font-semibold">USD 1,200</td>
                      <td className="py-3.5 px-3 font-semibold">USD 5,850</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹1.00L – ₹4.85L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Ph.D. Programs</td>
                      <td className="py-3.5 px-3 font-semibold">USD 18,700</td>
                      <td className="py-3.5 px-3 font-semibold">USD 98,500</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹15.5L – ₹81.7L*</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-[#0a1e38]">Primary Intakes:</span> January, July, September.
                <br />
                <span className="italic text-slate-500">
                  *Note: Tuition fees and intakes vary depending on the institution and program.
                </span>
              </div>
            </div>

            {/* Monthly Cost of Living Table */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-[#0a1e38]">Monthly Cost of Living</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    In Ringgit (MYR)
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Typical monthly student expenditure in Malaysia
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
                  <span className="text-[#22c55e] text-base font-black">MYR 2,030 – 3,650</span>
                </div>
                <div className="text-xs text-slate-500 text-right mt-0.5">Approx. ₹36,000 – ₹65,000 / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEATHER IN MALAYSIA
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Weather in Malaysia"
            subtitle="Malaysia has a tropical climate with warm and humid conditions throughout much of the year. Rainfall patterns can vary by region and monsoon season."
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
          MALAYSIAN ACADEMIC & VISA SYSTEM (6 Cards)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Malaysian Academic & Visa System"
            subtitle="Key essentials on EMGS visa approvals, student pass compliance, and work rights."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMIC_SYSTEM.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e52928] font-black text-sm flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38]">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP-BY-STEP ADMISSION & EMGS VISA ROADMAP
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Step-by-Step Malaysia Admission & EMGS Visa Process"
            subtitle="From university shortlisting to eVAL clearance — Umang Career Consultancy guides you at every step."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Profile Assessment & University Shortlist",
                desc: "Evaluating transcripts, English proficiency, and matching you with top public flagships, private colleges, or foreign branch campuses.",
              },
              {
                step: "02",
                title: "Application Dossier & Offer Letter",
                desc: "Submitting verified academic mark sheets, passport copy, and securing your unconditional university Letter of Offer.",
              },
              {
                step: "03",
                title: "EMGS Portal Lodgement & Fee Payment",
                desc: "Registering on the Education Malaysia Global Services (EMGS) portal and paying official visa processing and medical insurance fees.",
              },
              {
                step: "04",
                title: "eVAL (Visa Approval Letter) Issuance",
                desc: "The Malaysian Immigration Department issues your electronic Visa Approval Letter (eVAL) upon reviewing background checks.",
              },
              {
                step: "05",
                title: "Single Entry Visa (SEV) Endorsement",
                desc: "Obtaining your Single Entry Visa stamp from the Malaysian Embassy/VFS or via eVISA to board your flight to Malaysia.",
              },
              {
                step: "06",
                title: "Arrival, Medical Check & Student Pass",
                desc: "Airport clearance, university arrival coordination, mandatory on-campus health screening, and Student Pass sticker endorsement.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#22c55e] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0a1e38] text-white font-black text-sm flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38]">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
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
            subtitle="Verified answers to vital questions regarding studying and living in Malaysia."
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
                  Plan Your Malaysia Study Journey
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  To Make Your Study in Malaysia <span className="text-[#e52928]">Hassle-Free</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Plan your Malaysia study journey with Umang Career Consultancy. From securing offer letters at University of Malaya, Monash, and Sunway to flawless EMGS eVAL visa processing, our dedicated education advisors make your international journey seamless.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg transition-colors"
                  >
                    <PhoneIcon />
                    <span>Call +91 91731 86109</span>
                  </a>
                  <div className="text-xs text-slate-400 font-medium">
                    Office Hours: Mon–Sat, 9:30 AM – 7:00 PM IST
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
                      Your inquiry for studying in Malaysia has been received. Our senior Southeast Asian education advisor will contact you within 24 hours.
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
                      Book Free Malaysia Counselling
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Varun Mehta"
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
                          placeholder="varun@example.com"
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
                          <option value="Bachelor's / UG">Bachelor&apos;s Degree / UG</option>
                          <option value="Master's / PG">Master&apos;s Degree / PG</option>
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
                          <option value="September 2026">September 2026 Intake</option>
                          <option value="January 2027">January 2027 Intake</option>
                          <option value="July 2027">July 2027 Intake</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred University or Course?</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder="e.g. Interested in Computer Science or Business at Monash Malaysia or Sunway"
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
                      <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Official Malaysian partner counseling.
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
