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

function HospitalityIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function HumanitiesIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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

/* Danish Flag Dannebrog */
function DanishFlagBadge() {
  return (
    <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
      <rect width="60" height="42" fill="#c60c30" />
      <path d="M20 0v42M0 21h60" stroke="#fff" strokeWidth="7" />
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
    desc: "Copenhagen Business School (CBS) & top Scandinavian institutions offering global MBA, sustainable management, international trade, and fintech leadership.",
    icon: <BusinessIcon />,
    tag: "Global Accreditations",
  },
  {
    title: "Computer Science & IT",
    desc: "Cutting-edge degrees in artificial intelligence, software engineering, cyber security, data analytics, and digital innovation at IT University of Copenhagen and DTU.",
    icon: <ComputerIcon />,
    tag: "High Tech Demand",
  },
  {
    title: "Engineering & Technology",
    desc: "Renowned Danish engineering in wind energy, sustainable architecture, acoustic engineering, robotics, and environmental technology at DTU and Aalborg.",
    icon: <EngineeringIcon />,
    tag: "PBL Learning",
  },
  {
    title: "Hospitality & Tourism",
    desc: "Innovative Nordic culinary arts, sustainable tourism operations, international event management, and hotel business leadership.",
    icon: <HospitalityIcon />,
    tag: "Booming Industry",
  },
  {
    title: "Social Sciences & Humanities",
    desc: "Progressive Scandinavian governance, public policy, human rights, environmental law, media studies, and cross-cultural communication.",
    icon: <HumanitiesIcon />,
    tag: "Global Outlook",
  },
];

const WHY_DENMARK = [
  {
    title: "Globally Recognized Degrees",
    desc: "Danish higher education follows the Bologna Process with ECTS credits, ensuring qualifications are respected and accredited by employers and universities worldwide.",
  },
  {
    title: "Wide Range of English-Taught Programs",
    desc: "Over 700 bachelor's and master's degree programs are delivered entirely in English with no Danish language requirement for international admission.",
  },
  {
    title: "Work While Studying",
    desc: "Non-EU/EEA international students on a valid residence permit can legally work 20 hours per week during term time and full-time (up to 37+ hrs) in June, July, and August.",
  },
  {
    title: "Post-Study Work & Establishment Card",
    desc: "Graduates with a completed Danish Bachelor's, Master's, or Ph.D. can apply for post-study residence schemes (such as the 3-Year Establishment Card) to launch European careers.",
  },
  {
    title: "Vibrant International Student Community",
    desc: "Over 35,000 international students create an inclusive, multicultural campus environment with English widely spoken by more than 86% of the population.",
  },
  {
    title: "Pioneer in STEM & Sustainability",
    desc: "Global leader in green technology, wind turbines (Vestas, Ørsted), biotechnology (Novo Nordisk), clean energy, and innovative Danish design.",
  },
  {
    title: "Generous Scholarship Opportunities",
    desc: "Danish Government Scholarships, Erasmus Mundus, and university tuition waivers available for outstanding non-EU/EEA applicants.",
  },
  {
    title: "World's Highest Quality of Life",
    desc: "Consistently ranked among the top 3 happiest nations in the World Happiness Report, offering safety, social equality, work-life balance, and clean cities.",
  },
];

const REGIONS = [
  {
    id: "hovedstaden",
    name: "HOVEDSTADEN",
    title: "Capital Region of Denmark",
    desc: "Explore study opportunities in the vibrant Capital Region of Denmark. Home to Copenhagen, world-class design, tech innovation, Copenhagen Business School, DTU, and University of Copenhagen.",
    tag: "Tech & Business Hub",
  },
  {
    id: "midtjylland",
    name: "MIDTJYLLAND",
    title: "Central Jutland",
    desc: "Explore universities and study options in Central Jutland. Features Denmark's premier student hub Aarhus, home to Aarhus University, VIA University College, and major wind energy corporations.",
    tag: "Vibrant Student City",
  },
  {
    id: "nordjylland",
    name: "NORDJYLLAND",
    title: "Northern Jutland",
    desc: "Explore study opportunities in Northern Jutland. Known for Aalborg University's world-famous Problem-Based Learning (PBL) model and booming telecommunications & engineering clusters.",
    tag: "PBL Innovation",
  },
  {
    id: "sjaelland",
    name: "SJÆLLAND",
    title: "Zealand",
    desc: "Explore universities and study options in Zealand. Close to the capital with coastal serenity, featuring Roskilde University (RUC), biotechnology research centers, and Absalon University College.",
    tag: "Interdisciplinary Research",
  },
  {
    id: "syddanmark",
    name: "SYDDANMARK",
    title: "Southern Denmark",
    desc: "Explore study opportunities in Southern Denmark. Centered in Odense, home to the University of Southern Denmark (SDU), world-famous collaborative robotics cluster, and border innovation.",
    tag: "Robotics & Engineering",
  },
];

const UNIVERSITIES = [
  {
    name: "University of Copenhagen (UCPH)",
    location: "Copenhagen",
    founded: "1479",
    qsRank: "#107 Global (QS)",
    tag: "Top Research University",
    features: "Oldest and largest university in Denmark, world-renowned for health sciences, biology, humanities, and social research.",
  },
  {
    name: "Technical University of Denmark (DTU)",
    location: "Kongens Lyngby, Greater Copenhagen",
    founded: "1829",
    qsRank: "#109 Global (QS)",
    tag: "Engineering & Green Tech Leader",
    features: "Ranked among Europe's top polytechnics, pioneering sustainable energy, acoustic engineering, robotics, and nanotechnology.",
  },
  {
    name: "Aarhus University (AU)",
    location: "Aarhus",
    founded: "1928",
    qsRank: "#143 Global (QS)",
    tag: "Comprehensive Research Flagship",
    features: "Aarhus is Denmark's youngest city by demographic. AU offers world-class faculty in business, physics, genetics, and arts.",
  },
  {
    name: "Aalborg University (AAU)",
    location: "Aalborg & Copenhagen",
    founded: "1974",
    qsRank: "Top 350 Global / Top 50 Engineering",
    tag: "Problem-Based Learning Pioneer",
    features: "Ranked #1 in Europe for Engineering education (MIT Report), specializing in team project problem-solving and industry collaboration.",
  },
  {
    name: "University of Southern Denmark (SDU)",
    location: "Odense, Esbjerg, Kolding, Sønderborg",
    founded: "1966",
    qsRank: "Top 350 Global",
    tag: "European Robotics Capital",
    features: "Dynamic modern university leading Europe in drone technology, collaborative robotics (Universal Robots ecosystem), and software.",
  },
  {
    name: "Roskilde University (RUC)",
    location: "Roskilde (Greater Copenhagen)",
    founded: "1972",
    qsRank: "Renowned Research Hub",
    tag: "Interdisciplinary & Critical Thinking",
    features: "Project-oriented education centered around sustainability, global development, communication, and environmental science.",
  },
];

const LIVING_COSTS = [
  { item: "Accommodation (Student Residence / Flat)", range: "€400 – €800", inr: "₹36,000 – ₹72,000" },
  { item: "Food & Daily Groceries", range: "€150 – €300", inr: "₹13,500 – ₹27,000" },
  { item: "Transportation (Cycle or Youth Transit)", range: "€40 – €60", inr: "₹3,600 – ₹5,400" },
  { item: "Internet & Mobile Connectivity", range: "€30 – €50", inr: "₹2,700 – ₹4,500" },
  { item: "Utilities (Heating, Water, Electricity)", range: "€80 – €120", inr: "₹7,200 – ₹10,800" },
  { item: "Personal, Leisure & Social Activities", range: "€100 – €200", inr: "₹9,000 – ₹18,000" },
];

const SEASONS = [
  {
    name: "Summer",
    months: "June – August",
    temp: "15℃ – 25℃",
    icon: <SunIcon />,
    desc: "Long sunlit days with up to 18 hours of daylight, lively harbor baths, open-air cafes, and vibrant music festivals.",
  },
  {
    name: "Autumn",
    months: "September – November",
    temp: "5℃ – 15℃",
    icon: <LeafIcon />,
    desc: "Crisp Nordic air, stunning golden foliage across royal deer parks, and cozy indoor 'hygge' candlelit gatherings.",
  },
  {
    name: "Winter",
    months: "December – February",
    temp: "-1℃ – 5℃",
    icon: <SnowflakeIcon />,
    desc: "Festive Christmas markets (Tivoli Gardens), occasional snowfalls, and warm, well-heated sustainable indoor spaces.",
  },
  {
    name: "Spring",
    months: "March – May",
    temp: "5℃ – 15℃",
    icon: <BlossomIcon />,
    desc: "Fresh mild breezes, blooming cherry blossoms at Langelinie Park, and resumption of city-wide outdoor cycling.",
  },
];

const ACADEMIC_SYSTEM = [
  {
    step: "01",
    title: "Problem-Based Learning (PBL)",
    desc: "Danish classrooms emphasize collaborative project work where students tackle actual industry dilemmas rather than memorizing lecture slides.",
  },
  {
    step: "02",
    title: "The CPR Number & Healthcare",
    desc: "Every registered international student receives a Central Personal Registration (CPR) card granting access to Denmark's free universal public healthcare.",
  },
  {
    step: "03",
    title: "Cashless & Digital MitID Society",
    desc: "Denmark is virtually cashless. Your MitID digital identity unlocks Danish student banking, public health records, and university portals seamlessly.",
  },
  {
    step: "04",
    title: "ST1 Residence Permit & Biometrics",
    desc: "Online joint visa filing coordinated between the university and student via SIRI (Danish Agency for International Recruitment and Integration).",
  },
  {
    step: "05",
    title: "Part-Time Work Authorization",
    desc: "Automatic permission to work 20 hours per week during semesters and full-time (up to 37+ hours/week) during June, July, and August.",
  },
  {
    step: "06",
    title: "3-Year Establishment Card",
    desc: "Eligible non-EU graduates can apply for an Establishment Card granting up to 3 years of post-study residence to work or start an enterprise in Denmark.",
  },
];

const FAQS = [
  {
    q: "Do I need to speak Danish to study in Denmark?",
    a: "No! Many programs are available entirely in English, particularly at higher-education institutions and university master's levels. Over 86% of Danish citizens speak fluent English, making daily life, student jobs, and socializing exceptionally easy. Free Danish language classes are also provided by municipal centers for registered international students who wish to learn.",
  },
  {
    q: "Can I stay in Denmark after graduation?",
    a: "Yes! Post-study residence options depend on your program, residence permit, and rules applicable at the time of graduation. International graduates completing a recognized Danish Master's or Ph.D. are eligible to apply for post-study residence schemes (such as the 3-Year Establishment Card) allowing you to work or seek employment across Denmark without an employer sponsorship limit.",
  },
  {
    q: "Can my spouse or family accompany me while I study in Denmark?",
    a: "Yes. Depending on your residence status and circumstances, eligible family members (spouse, registered partner, and dependent minor children under 18) may be able to apply for accompanying family member residence permits. In most cases, spouses receive full work rights in Denmark for the duration of the student's permit.",
  },
  {
    q: "What is the CPR number, and why is it important?",
    a: "The CPR number (Det Centrale Personregister) is the Danish personal identification number assigned after you register your address at the local citizen service center (Folkeregister). It is essential for opening a Danish bank account, receiving wages, accessing free public healthcare (Yellow Health Card), and subscribing to mobile contracts.",
  },
  {
    q: "How much are tuition fees for non-EU students in Denmark?",
    a: "Annual tuition fees for international non-EU/EEA students typically range between €6,000 and €20,000 for Bachelor's degrees, and €8,000 to €25,000 for Master's programs. Specialized medical, arts, or laboratory engineering degrees may be on the higher end, while humanities and business diplomas start from €6,000.",
  },
  {
    q: "What are the typical intakes for Danish universities?",
    a: "Danish universities have two primary intakes: September (Autumn Intake) which hosts the widest selection of undergraduate and postgraduate courses, and February (Spring Intake) with select master's and diploma programs. Applications for September typically close by March 15th for non-EU applicants.",
  },
  {
    q: "Are international students entitled to free healthcare in Denmark?",
    a: "Yes! Once you register with the Danish authorities and receive your CPR number and Yellow Health Card (Sundhedskort), you are entitled to free medical consultations, hospital treatment, and emergency services under the Danish National Health Service on equal footing with Danish citizens.",
  },
  {
    q: "Can I bike everywhere in Denmark to save on transportation?",
    a: "Absolutely! Denmark is renowned as the cycling capital of the world. More than 62% of Copenhagen residents cycle to work and university daily across thousands of kilometers of dedicated cycling superhighways. Owning a second-hand bicycle costs €50–€100 once and saves €40–€60 every month on public transit!",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function DenmarkStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    degree: "Master's / PG",
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
            <span className="text-[#0a1e38] font-bold">Denmark</span>
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
                <DanishFlagBadge />
                <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-wide uppercase">
                  Nordic Excellence & Green Innovation
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Study in <span className="text-[#e52928]">Denmark</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
                  Build Your Global Nordic Future
                </span>
              </h1>

              {/* Sub-tagline */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Denmark offers international students world-class universities, innovative Problem-Based Learning (PBL), a high quality of life, green sustainability leadership, and generous post-study residence pathways in the heart of Northern Europe.
              </p>

              {/* Bullet Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-left max-w-md mx-auto lg:mx-0 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>700+ English-Taught Programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>3-Year Post-Study Establishment Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>20 Hrs/Week Part-Time Work Rights</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>Free Universal Healthcare (CPR Card)</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Free Counselling for Denmark</span>
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

                {/* Central High-Quality Graphic */}
                <div className="relative w-full h-full p-4 flex items-center justify-center transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/denmark-hero.png"
                    alt="Study Abroad Student in Denmark - Umang Career Consultancy"
                    width={480}
                    height={480}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    priority
                  />
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3.5s]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg">
                    #1
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">World Happiness</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">Safest Nordic Society</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:4.2s]">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-xs tracking-wider">DK</div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Schengen Access</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">29 European Nations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT DENMARK OVERVIEW (Matching User Reference)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Denmark"
            subtitle="An advanced Nordic nation combining sustainable innovation, rich Viking heritage, and academic excellence."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Landmark Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              <Image
                src="/destinations/denmark.jpg"
                alt="Nyhavn Waterfront Copenhagen Denmark"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#e52928] text-white">
                  Iconic Nyhavn, Copenhagen
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2">The Heart of Scandinavia</h3>
              </div>
            </div>

            {/* Key Fact Badges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center font-bold text-sm mb-3"><svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Located in Northern Europe</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Strategic gateway connecting Scandinavia and mainland Europe via the landmark Øresund Bridge.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m10-10H2m17.07-7.07L4.93 19.07m0-14.14l14.14 14.14" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Nordic & Schengen Country</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Enjoy unrestricted borderless student travel throughout all 29 Schengen European countries.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Green Tech & Sustainable Living</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Pioneering wind energy, carbon-neutral cities, cycling superhighways, and circular bio-economy.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Safe, Inclusive & Welcoming</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Exceptional social trust, low crime rates, gender equality, and an open multicultural student body.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Balanced Lifestyle (&apos;Hygge&apos;)</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  World-famous for cozy Danish hygge, reasonable study hours, active sports culture, and mental wellbeing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-sm mb-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg></div>
                <h4 className="text-base font-extrabold text-[#0a1e38]">Mild Summers & Cool Winters</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Temperate maritime climate with mild pleasant summers (15℃–25℃) and cool, cozy winters (-1℃–5℃).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOP COURSES IN DENMARK
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Courses in Denmark"
            subtitle="Industry-aligned degree programs taught in English with world-class faculty and cutting-edge labs."
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
                  <span>Explore Danish Curriculums</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}

            {/* Quick Consultation CTA Card */}
            <div className="bg-gradient-to-br from-[#0a1e38] to-[#122e54] p-7 rounded-3xl shadow-lg text-white flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-[#e52928] text-xs font-bold border border-red-500/30">
                  Custom Profile Check
                </span>
                <h3 className="text-xl font-black mt-4">Unsure Which Danish Program Fits You?</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Our certified Scandinavian educational advisors match your GPA, English scores, and career goals with accredited Danish colleges.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#counselling-form"
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm shadow-md transition-colors"
                >
                  Get Program Recommendations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY IS DENMARK AN IDEAL DESTINATION? (8 Pillars)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why is Denmark an Ideal Study Abroad Destination?"
            subtitle="Discover the unparalleled benefits of a Nordic higher education experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_DENMARK.map((pillar, idx) => (
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
          GREEN TECH & SUSTAINABILITY SPOTLIGHT
         ========================================================= */}
      <section className="w-full py-12 sm:py-16 bg-[#0a1e38] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-[#22c55e] border border-emerald-500/30">
                Pioneering the Green Transition
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3 text-white">
                World Capital of Wind Energy, Cycling & Circular Economy
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Denmark produces more than 50% of its total electricity from wind and solar power. As an international student in Denmark, you learn from professors actively consulting for global green tech leaders such as Vestas, Ørsted, Danfoss, and Novo Nordisk.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#22c55e]">50%+</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Wind & Renewable Grid Power</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#e52928]">3 Years</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Post-Study Establishment Card</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REGIONS IN DENMARK (5 Official Regions matching reference)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Regions in Denmark"
            subtitle="Explore study opportunities and accredited university clusters across Denmark's five administrative regions."
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
                  <span>Explore Universities</span>
                  <span className="text-[#e52928]">→</span>
                </div>
              </div>
            ))}

            {/* Quick Regional Map Advice */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Regional Insights
                </span>
                <h3 className="text-xl font-extrabold text-[#0a1e38] mt-3">Which Region Is Best For You?</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Choose Copenhagen (Hovedstaden) for high finance and tech startups, Aarhus (Midtjylland) for vibrant student culture, or Odense (Syddanmark) for robotics and affordable living.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="#counselling-form"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#e52928] hover:underline"
                >
                  Consult an Advisor on Regional Options →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          UNIVERSITIES IN DENMARK
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Prominent Universities in Denmark"
            subtitle="World-class institutions globally accredited for pioneering research and student satisfaction."
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
                    <span className="text-xs text-slate-500 font-semibold">Est. {uni.founded}</span>
                  </div>
                  <h3 className="text-lg font-black text-[#0a1e38]">{uni.name}</h3>
                  <div className="text-xs font-bold text-[#e52928] mt-1 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                    <span>{uni.location}</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{uni.features}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-between">
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
            title="Denmark Tuition Fees & Living Costs"
            subtitle="Transparent financial planning for your Danish degree and student lifestyle."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tuition Fees Table */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#0a1e38]">Denmark Tuition Fees</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Annual indicative tuition rates for non-EU/EEA international students
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-200">
                  Intakes: Feb & Sep
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
                      <td className="py-3.5 px-3 font-semibold">€6,000</td>
                      <td className="py-3.5 px-3 font-semibold">€20,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹5.4L – ₹18.0L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Master Degree</td>
                      <td className="py-3.5 px-3 font-semibold">€8,000</td>
                      <td className="py-3.5 px-3 font-semibold">€25,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹7.2L – ₹22.5L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Diploma Programs</td>
                      <td className="py-3.5 px-3 font-semibold">€6,000</td>
                      <td className="py-3.5 px-3 font-semibold">€16,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹5.4L – ₹14.4L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Ph.D. Programs</td>
                      <td className="py-3.5 px-3 font-semibold">€3,000</td>
                      <td className="py-3.5 px-3 font-semibold">€8,000</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">Often Salaried*</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs text-slate-500 italic">
                *Note: Tuition fees vary by university, program, and student eligibility. In Denmark, many Ph.D. positions are considered salaried research employment with zero tuition and competitive monthly stipends.
              </p>
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
                  Typical monthly student expenditure in Denmark
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
                  <span className="text-[#22c55e] text-base font-black">€800 – €1,530</span>
                </div>
                <div className="text-xs text-slate-500 text-right mt-0.5">Approx. ₹72,000 – ₹1,38,000 / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEATHER & FOUR SEASONS IN DENMARK
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Weather & Four Seasons in Denmark"
            subtitle="Experience Denmark's refreshing maritime climate, extended summer evenings, and cozy Nordic autumns."
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
          DANISH HIGHER EDUCATION SYSTEM EXPLAINED (6 Cards)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Danish Academic & Student Life System"
            subtitle="Key essentials every international student should know before stepping foot in Denmark."
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
          STEP-BY-STEP ADMISSION & VISA ROADMAP
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Step-by-Step Denmark Admission & ST1 Visa Process"
            subtitle="From university shortlisting to residence biometrics — Umang Career Consultancy guides you at every milestone."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Profile Assessment & Program Selection",
                desc: "1-on-1 counseling to evaluate your academic transcripts, English proficiency (IELTS 6.5+ or MOI), and match with top Danish universities.",
              },
              {
                step: "02",
                title: "Application Dossier & SOP Formulation",
                desc: "Crafting customized Statements of Purpose, resumes, recommendation letters, and verifying prerequisites for Optagelse.dk or university portals.",
              },
              {
                step: "03",
                title: "Offer Acceptance & Tuition Transfer",
                desc: "Securing your official letter of acceptance and coordinating secure university tuition payment to activate your Danish residence case.",
              },
              {
                step: "04",
                title: "SIRI Case Order ID & ST1 Form Lodgement",
                desc: "Registering the Case Order ID with SIRI (Danish Agency for International Recruitment and Integration) and completing digital Part 2 of Form ST1.",
              },
              {
                step: "05",
                title: "VFS Global Biometrics Appointment",
                desc: "Booking biometric data recording at VFS Global (New Delhi, Mumbai, Ahmedabad, Bengaluru) with zero document deficiencies.",
              },
              {
                step: "06",
                title: "Pre-Departure, Housing & CPR Guidance",
                desc: "Student accommodation bookings, flight ticketing, travel insurance, currency exchange, and CPR number registration checklist upon arrival.",
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
          FAQS SECTION (Matching User Request + Practical Additions)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Clear, verified answers to common questions about studying in Denmark."
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
                  Plan Your Denmark Study Journey
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  To Make Your Study in Denmark <span className="text-[#e52928]">Hassle-Free</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Plan your Denmark study journey with Umang Career Consultancy. From choosing between DTU, Aarhus, and Aalborg to securing your ST1 residence permit, our dedicated Scandinavian counselors assist you every step of the way.
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
                      Your inquiry for studying in Denmark has been received. Our senior Scandinavian counselor will contact you within 24 hours.
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
                      Book Free Denmark Counselling
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Rahul Sharma"
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
                          placeholder="rahul@example.com"
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
                          <option value="September 2026">September 2026 Intake</option>
                          <option value="February 2027">February 2027 Intake</option>
                          <option value="September 2027">September 2027 Intake</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Any Questions / Preferred Course?</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder="e.g. Looking for Computer Science or Green Energy at DTU or Aalborg"
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
                      <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Zero spam. Official counseling support.
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
