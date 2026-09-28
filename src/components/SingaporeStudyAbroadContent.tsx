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

/* Course Icons */
function BusinessIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function TechIcon() {
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

function DesignIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4 4 4 0 014-4c.488 0 .95.093 1.378.261l9.143-9.143a2 2 0 112.828 2.828l-9.143 9.143A4 4 0 017 21z" />
    </svg>
  );
}

function LawIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  );
}

/* Singapore Flag Badge */
function SingaporeFlagBadge() {
  return (
    <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
      <rect width="60" height="21" fill="#ed2939" />
      <rect y="21" width="60" height="21" fill="#fff" />
      {/* Crescent Moon */}
      <circle cx="12" cy="10.5" r="6" fill="#fff" />
      <circle cx="14" cy="10.5" r="5" fill="#ed2939" />
      {/* Five Stars */}
      <circle cx="17" cy="8" r="0.9" fill="#fff" />
      <circle cx="19" cy="10" r="0.9" fill="#fff" />
      <circle cx="18" cy="12" r="0.9" fill="#fff" />
      <circle cx="15.5" cy="12.5" r="0.9" fill="#fff" />
      <circle cx="15" cy="9.5" r="0.9" fill="#fff" />
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
    title: "Business & Management",
    desc: "Premier MBA, global finance, supply chain management, and fintech leadership at Singapore Management University (SMU), NUS Business School, and NTU.",
    icon: <BusinessIcon />,
    tag: "APAC Financial Hub",
  },
  {
    title: "Information Technology",
    desc: "World-leading artificial intelligence, cyber security, cloud architecture, and data analytics programs aligned directly with Asia's Silicon Island tech corridor.",
    icon: <TechIcon />,
    tag: "Top Tech Careers",
  },
  {
    title: "Engineering",
    desc: "Globally celebrated engineering disciplines across robotics, biomedical engineering, clean energy, civil engineering, and aerospace technology at NTU and SUTD.",
    icon: <EngineeringIcon />,
    tag: "MIT-Partnered Pedagogy",
  },
  {
    title: "Design & Creative Arts",
    desc: "Pioneering industrial product design, digital animation, interactive media, and game design at LASALLE College of the Arts, NAFA, and SUTD.",
    icon: <DesignIcon />,
    tag: "Creative Capital",
  },
  {
    title: "Law & International Relations",
    desc: "Renowned international commercial arbitration, maritime law, intellectual property, and Asian governance at Lee Kuan Yew School of Public Policy & NUS Law.",
    icon: <LawIcon />,
    tag: "Global Jurisprudence",
  },
];

const WHY_SINGAPORE = [
  {
    title: "Globally Recognised Degrees",
    desc: "NUS (#8 globally) and NTU (#15 globally) consistently rank among the top 15 universities in the world according to QS World University Rankings.",
  },
  {
    title: "Wide Range of English-Taught Programs",
    desc: "English is Singapore's official language of instruction and business, ensuring seamless academic integration for international students.",
  },
  {
    title: "Quality Education & Strict Accreditation",
    desc: "Rigorous standards maintained by the Committee for Private Education (CPE) and EduTrust certification guarantee high teaching quality.",
  },
  {
    title: "Diverse Study Options",
    desc: "Choose between prestigious autonomous public universities, polytechnics, and foreign branch campuses (e.g., James Cook University, Curtin, ESSEC, INSEAD).",
  },
  {
    title: "International Student Community",
    desc: "Vibrant multicultural society hosting scholars and professionals from over 120+ nations in a truly global, cosmopolitan environment.",
  },
  {
    title: "Scholarship Opportunities (TGS)",
    desc: "Generous tuition grants, MOE Tuition Grant Scheme (TGS) providing up to 50%+ fee subsidies, ASEAN scholarships, and university fellowships.",
  },
  {
    title: "Strong Industry Exposure",
    desc: "Asia-Pacific headquarters for 4,000+ multinational corporations including Google, Meta, Microsoft, Dyson, Shopee, DBS, and Pfizer.",
  },
  {
    title: "Excellent Asia-Pacific Connectivity",
    desc: "Changi Airport connects directly to all major Indian cities with flight times of only 4.5 to 5 hours, making family visits convenient.",
  },
];

const UNIVERSITIES = [
  {
    name: "National University of Singapore (NUS)",
    type: "Public Autonomous Flagship",
    qsRank: "#8 Global (QS World 2025)",
    tag: "Asia's Top University",
    features: "Comprehensive research university excelling in computer science, business, engineering, law, medicine, and social sciences.",
  },
  {
    name: "Nanyang Technological University (NTU)",
    type: "Public Autonomous Flagship",
    qsRank: "#15 Global (QS World 2025)",
    tag: "Engineering & Tech Powerhouse",
    features: "Smart Campus renowned globally for materials science, artificial intelligence, sustainability research, and business.",
  },
  {
    name: "Singapore Management University (SMU)",
    type: "Specialized Business & Social Sciences",
    qsRank: "Top 50 Global in Business/Finance",
    tag: "City Campus Leadership",
    features: "Modeled after the Wharton School (UPenn), SMU delivers interactive seminar-style learning in the heart of Singapore's financial district.",
  },
  {
    name: "Singapore University of Technology and Design (SUTD)",
    type: "Technology & Design Pioneer",
    qsRank: "Established in collaboration with MIT",
    tag: "Architectural & Product Innovation",
    features: "Cutting-edge curriculum integrating design, engineering, and artificial intelligence with intensive hands-on incubator projects.",
  },
  {
    name: "Singapore Institute of Technology (SIT)",
    type: "University of Applied Learning",
    qsRank: "Premier Applied Degrees",
    tag: "Industry-Centric Education",
    features: "Offers integrated work study programs with Singapore's economic agencies, ensuring 95%+ graduate employment rates.",
  },
  {
    name: "James Cook University (JCU Singapore)",
    type: "Australian Public University Branch Campus",
    qsRank: "Top 2% Global / EduTrust Star",
    tag: "Fast-Track Trimester System",
    features: "Direct Australian degrees in Singapore with options for inter-campus transfers to Australia, offering IT, Psychology, and Business.",
  },
];

const LIVING_COSTS = [
  { item: "Accommodation (Student Hostel / Shared HDB / Condo)", range: "SGD 600 – SGD 1,200", inr: "₹37,500 – ₹75,000" },
  { item: "Food & Groceries (Hawker Centers & Markets)", range: "SGD 300 – SGD 500", inr: "₹18,700 – ₹31,200" },
  { item: "Transportation (EZ-Link MRT & Bus Network)", range: "SGD 100 – SGD 150", inr: "₹6,200 – ₹9,300" },
  { item: "Internet & Mobile Data Plans", range: "SGD 50 – SGD 80", inr: "₹3,100 – ₹5,000" },
  { item: "Utilities (Air-Conditioning, Water, Power)", range: "SGD 100 – SGD 180", inr: "₹6,200 – ₹11,200" },
  { item: "Personal, Leisure & Social Activities", range: "SGD 150 – SGD 300", inr: "₹9,300 – ₹18,700" },
];

const ACADEMIC_SYSTEM = [
  {
    step: "01",
    title: "SOLAR Student's Pass System",
    desc: "Student visas are officially known as Student's Pass, issued electronically through the Singapore Immigration & Checkpoints Authority (ICA) Student's Pass Online Application & Registration (SOLAR) system.",
  },
  {
    step: "02",
    title: "Tuition Grant Scheme (TGS)",
    desc: "Substantial tuition fee reduction offered by the Singapore Ministry of Education (MOE) for eligible university students in return for a 3-year commitment to work in Singapore-registered firms.",
  },
  {
    step: "03",
    title: "Work While Studying Rules",
    desc: "Full-time international students at approved public institutions (NUS, NTU, SMU, SIT, SUTD) can work part-time up to 16 hours/week during term time and unlimited hours during official vacations without a separate work pass.",
  },
  {
    step: "04",
    title: "Long Term Visit Pass (LTVP)",
    desc: "Graduates from recognized Institutes of Higher Learning can apply for a one-year non-renewable Long-Term Visit Pass to seek full-time employment in Singapore.",
  },
  {
    step: "05",
    title: "Employment Pass (EP) & S-Pass",
    desc: "Smooth pathway to Employment Pass (EP) or S-Pass upon securing a full-time job offer, evaluated under Singapore's transparent COMPASS points-based immigration framework.",
  },
  {
    step: "06",
    title: "World's Safest & Cleanest Nation",
    desc: "Strict laws, zero-tolerance policy for crime, world-renowned public healthcare, and flawless MRT public transit infrastructure make Singapore ideal for international students.",
  },
];

const FAQS = [
  {
    q: "Can I work while studying in Singapore?",
    a: "International students may be allowed to work during their studies if they meet the applicable requirements and their institution and course are eligible. Full-time students enrolled at designated public institutions (such as NUS, NTU, SMU, SUTD, and SIT) are permitted to work up to 16 hours per week during term time and full-time during official vacation periods without applying for a work pass. Students at private education institutions should consult their institution's specific EduTrust regulations.",
  },
  {
    q: "Can international students stay in Singapore after graduation?",
    a: "Yes! Post-study options depend on your employment, immigration status, and the rules applicable at the time of application. International graduates from government-funded autonomous universities and select polytechnics can apply for a 1-Year Long-Term Visit Pass (LTVP) to seek employment. Once you secure a qualifying job offer, your employer can sponsor an Employment Pass (EP) or S-Pass.",
  },
  {
    q: "How long does it take to process a student visa for Singapore?",
    a: "Processing times can vary depending on the institution, application, and immigration requirements. On average, the Singapore Immigration & Checkpoints Authority (ICA) processes Student's Pass applications via SOLAR in approximately 2 to 4 weeks. Once approved, you receive an In-Principle Approval (IPA) letter which serves as a single-entry visa to travel to Singapore.",
  },
  {
    q: "What is the Tuition Grant Scheme (TGS)?",
    a: "The Tuition Grant Scheme provides eligible students with a subsidy toward tuition fees at participating public institutions (such as NUS, NTU, SMU, and polytechnics), subject to applicable conditions. In exchange for receiving the grant, non-Singaporean students sign an agreement obligating them to work for a Singapore-registered entity for 3 years upon graduation.",
  },
  {
    q: "Can I bring my dependents (spouse/children) on a student visa?",
    a: "Dependent eligibility depends on your type of course, institution, immigration status, and applicable Singapore regulations. Generally, international students pursuing postgraduate research degrees (Ph.D. or Master's by Research) at autonomous universities can apply for a Dependant's Pass or Long-Term Visit Pass for their legally married spouse and children, subject to ICA approval and minimum financial thresholds.",
  },
  {
    q: "What are the primary intakes for Singapore universities?",
    a: "The major intake for autonomous universities (NUS, NTU, SMU) is August (Fall Semester), with select master's and postgraduate programs offering a January intake. Private universities and foreign branch campuses (like JCU Singapore and Curtin) offer flexible trimester intakes in March/April, July/August, and October/November.",
  },
  {
    q: "What is the climate like in Singapore throughout the year?",
    a: "Singapore has a hot, humid, and tropical climate throughout the year, with temperatures consistently averaging between 24°C and 32°C. There are no distinct seasonal changes, though sudden tropical rain showers occur frequently. All academic buildings, libraries, public transport (MRT & buses), and shopping malls are fully air-conditioned.",
  },
  {
    q: "How can Indian students keep living costs affordable in Singapore?",
    a: "Students can comfortably manage expenses by dining at UNESCO-recognized local hawker centers where nutritious meals cost just SGD 4 to SGD 7, utilizing subsidized student MRT/bus concession cards, and sharing HDB flats or university residences. Many students also offset costs through university teaching or research assistantships.",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function SingaporeStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    degree: "Master's / PG",
    intake: "August 2026",
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
            <span className="text-[#0a1e38] font-bold">Singapore</span>
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
                <SingaporeFlagBadge />
                <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-wide uppercase">
                  Asia&apos;s Leading Education & Global Finance Hub
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Study in <span className="text-[#e52928]">Singapore</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
                  Build Your Global Career at World-Class Institutions
                </span>
              </h1>

              {/* Sub-tagline */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Singapore combines Ivy-League caliber autonomous universities (NUS & NTU), English-medium education, exceptional safety, cutting-edge innovation, and direct access to Fortune 500 headquarters in the heart of Southeast Asia.
              </p>

              {/* Bullet Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-left max-w-md mx-auto lg:mx-0 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>NUS (#8) & NTU (#15) QS Global</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Tuition Grant Scheme (TGS) Subsidies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>1-Year LTVP Post-Study Work Pathway</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Only 4.5 Hours Direct Flight from India</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Free Singapore Counselling</span>
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
                    src="/singapore-hero.png"
                    alt="Study in Singapore Student - Umang Career Consultancy"
                    width={480}
                    height={480}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    priority
                  />
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3.5s]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg">
                    #8
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">QS World Ranking</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">NUS Top in Asia</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:4.2s]">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-xs tracking-wider">SG</div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Global Business</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">4,000+ MNC HQs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT SINGAPORE (Matching User Reference)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Singapore"
            subtitle="A global powerhouse of technological innovation, economic dynamism, and pristine urban architecture."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Landmark Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              <Image
                src="/destinations/singapore.jpg"
                alt="Marina Bay Sands Skyline Singapore"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#e52928] text-white">
                  Marina Bay Sands & Gardens by the Bay
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2">The Lion City</h3>
              </div>
            </div>

            {/* Key Fact Badges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center font-bold text-sm mb-3"><svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Located in Southeast Asia</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Strategic maritime crossroads at the southern tip of the Malay Peninsula connecting East and West.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Small Island City-State</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Highly efficient, compact metropolis where university campuses, business centers, and transit are minutes apart.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Innovation-Driven Economy</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Asia&apos;s leading R&D, biomedical, fintech, and semiconductor ecosystem backed by substantial government investment.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Excellent Infrastructure</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Changi Airport voted world&apos;s best, complemented by automated driverless MRT subway networks and 5G nationwide coverage.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Strong Economy & High GDP</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  AAA sovereign credit rated economy offering currency stability, flourishing capital markets, and high student earning potential.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Safe, Clean & Law-Abiding</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Consistently ranked among the safest cities in the world with strict civic regulations and zero-tolerance crime policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOP COURSES IN SINGAPORE
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Courses in Singapore"
            subtitle="High-demand academic disciplines connected directly to Asia's premier multinational employers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOP_COURSES.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-emerald-50 group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-[#0a1e38] border border-slate-200">
                      {course.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1e38] group-hover:text-[#e52928] transition-colors">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{course.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#e52928]">
                  <span>Explore Course Syllabi</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}

            {/* Consultation CTA Card */}
            <div className="bg-gradient-to-br from-[#0a1e38] to-[#122e54] p-7 rounded-3xl shadow-lg text-white flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-[#e52928] text-xs font-bold border border-red-500/30">
                  Profile Assessment
                </span>
                <h3 className="text-xl font-black mt-4">Want to Apply to NUS, NTU or SMU?</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Admission to Singapore autonomous universities is highly competitive. Let our senior consultants evaluate your GPA and profile for scholarships.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#counselling-form"
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm shadow-md transition-colors"
                >
                  Request University Shortlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY SINGAPORE AS AN IDEAL DESTINATION? (8 Pillars)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Singapore as an Ideal Study Abroad Destination?"
            subtitle="Unmatched advantages of pursuing higher education in Asia's most progressive city-state."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_SINGAPORE.map((pillar, idx) => (
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
          TUITION GRANT SCHEME (TGS) SPOTLIGHT
         ========================================================= */}
      <section className="w-full py-12 sm:py-16 bg-[#0a1e38] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-[#22c55e] border border-emerald-500/30">
                Singapore Ministry of Education (MOE) Initiative
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3 text-white">
                The Tuition Grant Scheme (TGS) & 3-Year Career Guarantee
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                International students admitted to full-time undergraduate courses at Singapore autonomous universities (NUS, NTU, SMU, SUTD, SIT) can apply for the MOE Tuition Grant. This covers a substantial portion of your tuition costs in return for a 3-year service bond working in Singapore upon graduation.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#22c55e]">Up to 50%+</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Tuition Subsidies Under TGS</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#e52928]">3 Years</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Guaranteed Work in Singapore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          UNIVERSITIES IN SINGAPORE
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Prominent Universities in Singapore"
            subtitle="Ivy-League tier autonomous institutions and prestigious international branch campuses."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UNIVERSITIES.map((uni, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#0a1e38] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800">
                      {uni.qsRank}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{uni.type}</span>
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38]">{uni.name}</h3>
                  <div className="text-xs font-bold text-[#e52928] mt-1 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                    <span>Singapore</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{uni.features}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-slate-700 flex items-center justify-between">
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
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Singapore Tuition Fees & Living Costs"
            subtitle="Transparent financial overview in Singapore Dollars (SGD) and Indian Rupees (INR)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tuition Fees Table */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#0a1e38]">Singapore Tuition Fees</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Annual indicative tuition rates for international students
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-200">
                  Multiple Intakes
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
                    <tr className="hover:bg-white">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Bachelor Degree</td>
                      <td className="py-3.5 px-3 font-semibold">S$11,990</td>
                      <td className="py-3.5 px-3 font-semibold">S$60,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹7.5L – ₹37.5L</td>
                    </tr>
                    <tr className="hover:bg-white">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Master Degree</td>
                      <td className="py-3.5 px-3 font-semibold">S$11,605</td>
                      <td className="py-3.5 px-3 font-semibold">S$75,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹7.2L – ₹46.8L</td>
                    </tr>
                    <tr className="hover:bg-white">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Diploma Programs</td>
                      <td className="py-3.5 px-3 font-semibold">S$4,400</td>
                      <td className="py-3.5 px-3 font-semibold">S$35,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹2.7L – ₹21.8L</td>
                    </tr>
                    <tr className="hover:bg-white">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Ph.D. Programs</td>
                      <td className="py-3.5 px-3 font-semibold">S$25,000</td>
                      <td className="py-3.5 px-3 font-semibold">S$60,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">Often Fully Funded*</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-[#0a1e38]">Key Intakes:</span> August, January, March/April, October.
                <br />
                <span className="italic text-slate-500">
                  *Note: Fees and intakes vary depending on the institution, program, and whether a student receives the MOE Tuition Grant. Ph.D. scholars at NUS and NTU frequently receive full tuition waivers plus S$2,000–S$3,500 monthly research stipends.
                </span>
              </div>
            </div>

            {/* Monthly Cost of Living Table */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-[#0a1e38]">Monthly Cost of Living</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Est. Breakdown
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Estimated monthly living expenditure in Singapore
                </p>

                <div className="space-y-3">
                  {LIVING_COSTS.map((c, i) => (
                    <div key={i} className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-200">
                      <span className="text-slate-600 font-medium">{c.item}</span>
                      <div className="text-right">
                        <span className="font-bold text-[#0a1e38]">{c.range}</span>
                        <span className="text-xs text-slate-400 block">({c.inr})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 p-4 rounded-2xl bg-white border border-slate-200">
                <div className="flex items-center justify-between text-sm font-extrabold text-[#0a1e38]">
                  <span>Total Estimated Monthly:</span>
                  <span className="text-[#22c55e] text-base font-black">SGD 1,300 – 2,410</span>
                </div>
                <div className="text-xs text-slate-500 text-right mt-0.5">Approx. ₹80,000 – ₹1,50,000 / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEATHER THROUGHOUT THE YEAR
         ========================================================= */}
      <section className="w-full py-14 sm:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  Climate Profile
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0a1e38] mt-3">
                  Weather Throughout the Year
                </h3>
                <div className="mt-4 text-4xl sm:text-5xl font-black text-[#e52928]">
                  24℃ – 32℃
                </div>
                <div className="text-xs font-bold text-slate-500 mt-1">Consistent Annual Temperatures</div>
              </div>

              <div className="lg:col-span-8 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Singapore has a <strong className="text-[#0a1e38]">hot, humid and tropical climate throughout the year</strong>, with relatively consistent temperatures and rainfall. There are no cold winters or extreme seasonal temperature fluctuations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-[#0a1e38] text-sm flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth={2} /><path strokeWidth={2} strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>Tropical Sunshine</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Warm sunny days year-round. Light cotton clothing, sunglasses, and comfortable footwear are everyday student staples.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-[#0a1e38] text-sm flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>Monsoon Showers & Air-Conditioning</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Frequent refreshing afternoon showers. All lecture theaters, libraries, malls, and MRT trains are fully climate-controlled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SINGAPORE ACADEMIC SYSTEM & IMMIGRATION (6 Cards)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Singapore Academic & Student Pass System"
            subtitle="Essential regulations, immigration pathways, and student employment frameworks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMIC_SYSTEM.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
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
          STEP-BY-STEP ADMISSION & STUDENT PASS ROADMAP
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Step-by-Step Singapore Admission & SOLAR Visa Process"
            subtitle="From choosing your institution to ICA biometric verification — Umang Career Consultancy guides you at every stage."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Profile Assessment & Program Selection",
                desc: "Evaluating transcripts, standardized tests (IELTS/PTE, GRE/GMAT if applicable), and identifying autonomous universities or private pathway colleges.",
              },
              {
                step: "02",
                title: "Dossier Formulation & SOP Drafting",
                desc: "Crafting customized Statements of Purpose, resumes, academic references, and assembling certified academic portfolios.",
              },
              {
                step: "03",
                title: "University Acceptance & Student Contract",
                desc: "Securing your Letter of Acceptance (LOA) and signing the mandatory Standard PEI-Student Contract or university registration agreement.",
              },
              {
                step: "04",
                title: "SOLAR Registration & IPA Letter Issuance",
                desc: "The institution submits your details on the ICA SOLAR portal; we lodge your Form 16/V36 to receive your In-Principle Approval (IPA) visa letter.",
              },
              {
                step: "05",
                title: "Travel to Singapore & ICA Biometrics",
                desc: "Entering Singapore with your IPA letter and completing biometric registration, medical checkup, and collecting your physical Student's Pass card.",
              },
              {
                step: "06",
                title: "Pre-Departure Briefing & Housing Setup",
                desc: "Assistance with student hostel bookings, EZ-Link public transit cards, bank account opening, and SIM card activation upon arrival.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#22c55e] transition-all flex flex-col justify-between"
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
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Authoritative answers to vital queries regarding education and student visas in Singapore."
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
          FREE COUNSELLING FORM & HASSLE-FREE CTA
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0a1e38] to-[#142d4f] rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 text-white border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-red-500/20 text-[#e52928] border border-red-500/30">
                  Plan Your Singapore Study Journey
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  To Make Your Study in Singapore <span className="text-[#e52928]">Hassle-Free</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Plan your Singapore study journey with Umang Career Consultancy. From navigating competitive admissions at NUS, NTU, and SMU to securing Tuition Grants and Student&apos;s Pass via SOLAR, our certified Asia-Pacific counselors ensure an impeccable experience.
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
                      Your inquiry for studying in Singapore has been received. Our senior Asia-Pacific education specialist will contact you within 24 hours.
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
                      Book Free Singapore Counselling
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Ananya Desai"
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
                          placeholder="ananya@example.com"
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
                          <option value="August 2026">August 2026 Intake</option>
                          <option value="January 2027">January 2027 Intake</option>
                          <option value="March/April 2027">March / April 2027 Intake</option>
                          <option value="October 2027">October 2027 Intake</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred University or Course?</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder="e.g. Interested in Computer Science or MBA at NUS / NTU / SMU"
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
                      <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Official partner university counseling.
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
