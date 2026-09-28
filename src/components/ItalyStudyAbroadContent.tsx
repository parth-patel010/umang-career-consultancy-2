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

/* Italian Flag Badge */
function ItalyFlagBadge() {
  return (
    <svg className="w-10 h-7 rounded shadow-md border border-white/60" viewBox="0 0 60 42">
      <rect width="20" height="42" fill="#009246" />
      <rect x="20" width="20" height="42" fill="#fff" />
      <rect x="40" width="20" height="42" fill="#ce2b37" />
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
    tag: "Top European B-Schools",
    desc: "SDA Bocconi, Luiss Guido Carli, Bologna Business School, international finance, supply chain, and luxury brand management.",
  },
  {
    name: "Sciences & Technology",
    category: "Applied & Natural Sciences",
    tag: "Nobel-Winning Legacy",
    desc: "Applied physics, biotechnology, artificial intelligence, quantum computing, and agricultural sciences at Sapienza and Padua.",
  },
  {
    name: "Engineering",
    category: "Technical Disciplines",
    tag: "Motor Valley Capital",
    desc: "World-leading automotive engineering (Ferrari, Ducati, Lamborghini), robotics, mechanical, civil, and aerospace at PoliMi and PoliTo.",
  },
  {
    name: "Law & International Relations",
    category: "Legal & Global Diplomacy",
    tag: "Roman Law Roots",
    desc: "Foundations of modern jurisprudence, international commercial arbitration, human rights, and European Union policy.",
  },
  {
    name: "Design & Fashion",
    category: "Creative & Luxury Arts",
    tag: "Milan Fashion Capital",
    desc: "Global fashion capitals (Armani, Prada, Gucci), industrial design, automotive exterior styling, and interior architecture at NABA and Marangoni.",
  },
];

const WHY_ITALY = [
  {
    title: "Globally Recognised Degrees",
    desc: "Italian qualifications follow the European Higher Education Area (EHEA) Bologna Process with ECTS credits recognized worldwide.",
  },
  {
    title: "Part of the Bologna Process",
    desc: "Home to the birthplace of modern university education (University of Bologna, established in 1088 AD) setting continental academic standards.",
  },
  {
    title: "International Student Community",
    desc: "Over 100,000 international students from across the globe creating a dynamic, multicultural student life in historic university towns.",
  },
  {
    title: "Wide Range of English-Taught Programs",
    desc: "More than 500 undergraduate, master's, and doctoral programs delivered entirely in English with no Italian language requirement for admission.",
  },
  {
    title: "Work While Studying",
    desc: "International students holding a valid residence permit (Permesso di Soggiorno) can legally work up to 20 hours per week (1,040 hours per year).",
  },
  {
    title: "Post-Study Opportunities",
    desc: "Graduates completing a recognized Master's or Ph.D. degree in Italy can apply for a 12-month Job Search Residence Permit (Permesso di Soggiorno per Ricerca Lavoro).",
  },
  {
    title: "Scholarship Opportunities (DSU)",
    desc: "Regional DSU scholarships offer complete tuition waivers, free student housing, canteen meals, and cash stipends of up to €7,000/year based on family ISEE income.",
  },
  {
    title: "Strong Industry Exposure",
    desc: "Direct corporate ties to Italy's premier industrial and luxury giants including Ferrari, Lamborghini, Stellantis, Gucci, Eni, and Luxottica.",
  },
];

const REGIONS = [
  {
    id: "lazio",
    name: "LAZIO",
    title: "Lazio Region (Rome)",
    desc: "Explore study opportunities in Lazio. Centered in Rome, Italy's historic and political capital. Home to Sapienza University of Rome, Tor Vergata, and Roma Tre.",
    tag: "Diplomatic & Ancient Capital",
  },
  {
    id: "tuscany",
    name: "TUSCANY",
    title: "Tuscany (Florence & Pisa)",
    desc: "Explore universities and study options in Tuscany. The cradle of the Renaissance, home to the prestigious University of Pisa, University of Florence, and University of Siena.",
    tag: "Renaissance Art & Science",
  },
  {
    id: "veneto",
    name: "VENETO",
    title: "Veneto (Padua & Venice)",
    desc: "Explore study opportunities in Veneto. Featuring the University of Padua (founded 1222, where Galileo taught) and Ca' Foscari University of Venice, excelling in commerce and engineering.",
    tag: "Historic Research & Trade",
  },
  {
    id: "sicily",
    name: "SICILY",
    title: "Sicily",
    desc: "Explore universities and study options in Sicily. The largest Mediterranean island, featuring University of Catania and University of Palermo, known for marine biology, agriculture, and heritage.",
    tag: "Mediterranean Agri & Biotech",
  },
  {
    id: "lombardy",
    name: "LOMBARDY",
    title: "Lombardy (Milan)",
    desc: "Explore study opportunities in Lombardy. Italy's financial, tech, and fashion powerhouse. Home to Politecnico di Milano, University of Milan, Bocconi, and Università Cattolica.",
    tag: "Finance, Tech & Fashion Hub",
  },
];

const UNIVERSITIES = [
  {
    name: "University of Bologna",
    location: "Bologna, Emilia-Romagna",
    founded: "1088 AD",
    qsRank: "#133 Global (QS World 2025)",
    tag: "World's Oldest University",
    features: "The historic cradle of higher education, leading Europe in law, medicine, agricultural sciences, and humanities with a vibrant student populace.",
  },
  {
    name: "Sapienza University of Rome",
    location: "Rome, Lazio",
    founded: "1303 AD",
    qsRank: "#132 Global (QS World 2025)",
    tag: "#1 in the World for Classics",
    features: "The largest university in Europe by enrollment, world-famous for physics, engineering, archaeology, medicine, and social sciences.",
  },
  {
    name: "University of Padua",
    location: "Padua, Veneto",
    founded: "1222 AD",
    qsRank: "#236 Global (QS World 2025)",
    tag: "Historic Scientific Powerhouse",
    features: "Where Galileo Galilei taught; renowned for the world's oldest anatomical theatre, clinical medicine, aerospace, and astrophysics.",
  },
  {
    name: "University of Milan (UniMi)",
    location: "Milan, Lombardy",
    founded: "1924 AD",
    qsRank: "#285 Global (QS World 2025)",
    tag: "Top Multidisciplinary Research",
    features: "Leading medical, pharmaceutical, law, and computer science faculties situated in the heart of Italy's financial and business metropolis.",
  },
  {
    name: "University of Pisa",
    location: "Pisa, Tuscany",
    founded: "1343 AD",
    qsRank: "#357 Global (QS World 2025)",
    tag: "Pioneer in Physics & Computing",
    features: "Alma mater of Galileo, possessing Italy's premier computer science department, physics laboratories, and close affiliation with the Scuola Normale Superiore.",
  },
  {
    name: "Politecnico di Milano (PoliMi)",
    location: "Milan, Lombardy",
    founded: "1863 AD",
    qsRank: "#111 Global (QS World 2025)",
    tag: "#1 Technical University in Italy",
    features: "Consistently ranked in the top 20 globally for engineering, architecture, and design, collaborating directly with Ferrari, Pirelli, and Armani.",
  },
];

const LIVING_COSTS = [
  { item: "Accommodation (Student Room / Shared Apartment)", range: "€300 – €700", inr: "₹27,000 – ₹63,000" },
  { item: "Food & Groceries (Fresh Produce & Markets)", range: "€150 – €350", inr: "₹13,500 – ₹31,500" },
  { item: "Transportation (Student Metro & Bus Pass)", range: "€25 – €45", inr: "₹2,250 – ₹4,050" },
  { item: "Internet & Mobile Connectivity", range: "€20 – €35", inr: "₹1,800 – ₹3,150" },
  { item: "Utilities (Gas, Heating, Electricity, Water)", range: "€50 – €100", inr: "₹4,500 – ₹9,000" },
  { item: "Personal / Leisure & Social Activities", range: "€100 – €200", inr: "₹9,000 – ₹18,000" },
];

const SEASONS = [
  {
    name: "Summer",
    months: "June – August",
    temp: "25℃ – 35℃",
    icon: <SunIcon />,
    desc: "Sunny Mediterranean warmth across coastal towns, outdoor evening cultural festivals, and extended cafe dining in historical piazzas.",
  },
  {
    name: "Autumn",
    months: "September – November",
    temp: "10℃ – 22℃",
    icon: <LeafIcon />,
    desc: "Pleasant mild weather, olive and grape harvests in Tuscany and Veneto, and comfortable study temperatures.",
  },
  {
    name: "Winter",
    months: "December – February",
    temp: "0℃ – 10℃",
    icon: <SnowflakeIcon />,
    desc: "Crisp cool weather in central/northern cities with snow in the Alps and Dolomites, and mild winter temperatures in southern Italy.",
  },
  {
    name: "Spring",
    months: "March – May",
    temp: "10℃ – 20℃",
    icon: <BlossomIcon />,
    desc: "Fresh mild breezes, blooming olive groves, open-air art exhibitions, and optimal weather for exploring historic ruins.",
  },
];

const ACADEMIC_SYSTEM = [
  {
    step: "01",
    title: "Universitaly Pre-Enrolment",
    desc: "All non-EU international applicants must complete pre-enrolment on the official Italian Ministry of Education 'Universitaly' portal before visa filing.",
  },
  {
    step: "02",
    title: "DSU Regional Scholarships",
    desc: "Italy's regional scholarship bodies award need-based DSU grants covering 100% tuition waivers, subsidized accommodation, canteen meals, and cash stipends.",
  },
  {
    step: "03",
    title: "Declaration of Value (DOV) / CIMEA",
    desc: "Verification of your prior academic qualifications through the Italian Embassy's Declaration of Value or official digital CIMEA comparability statements.",
  },
  {
    step: "04",
    title: "Codice Fiscale & Permesso di Soggiorno",
    desc: "Obtaining your Italian tax code (Codice Fiscale) and submitting the residence permit application kit (Permesso di Soggiorno) at the Post Office within 8 days.",
  },
  {
    step: "05",
    title: "Student Work Rights (20 hrs/week)",
    desc: "Legally permitted to work part-time up to 20 hours per week during term time, totaling up to 1,040 hours per calendar year across Italy.",
  },
  {
    step: "06",
    title: "1-Year Job Search Residence Permit",
    desc: "Graduates of recognized Master's and Ph.D. degrees can apply for a 12-month post-study stay-back permit to seek professional employment in Italy.",
  },
];

const FAQS = [
  {
    q: "Can I work while studying in Italy?",
    a: "International students may have work opportunities during their studies, subject to the conditions of their residence permit and applicable Italian regulations. Under standard student permit regulations, non-EU students are legally permitted to work up to 20 hours per week during academic terms, up to a maximum of 1,040 hours per calendar year.",
  },
  {
    q: "Can I stay in Italy after graduation?",
    a: "Post-study options depend on your qualification, employment situation, residence status and the immigration rules applicable at the time. Non-EU graduates who have successfully completed an accredited Master's degree (Laurea Magistrale) or Ph.D. in Italy can apply for a 1-Year Job Search Residence Permit (Permesso di Soggiorno per Ricerca Lavoro) to secure full-time employment.",
  },
  {
    q: "Can I bring my spouse or family on a dependent visa?",
    a: "Family reunification or accompanying-family options depend on your residence status and the applicable requirements. Under Italian immigration law, students pursuing long-term Master's or Ph.D. programs who hold a residence permit valid for at least one year and can demonstrate adequate independent accommodation and financial resources may apply for Nulla Osta for family reunification.",
  },
  {
    q: "How long does the student visa process take for Italy?",
    a: "Processing times can vary depending on the consulate, application volume, documentation and individual circumstances. On average, the Italian Embassy and Consulates in India (New Delhi, Mumbai, Kolkata, Bengaluru) process National Type-D Study Visas in approximately 3 to 6 weeks following biometrics at VFS Global.",
  },
  {
    q: "What is the DSU scholarship and how do Indian students qualify?",
    a: "The DSU (Diritto allo Studio Universitario) is a regional Italian government scholarship awarded based on family financial need rather than academic rank. Indian students submit an ISEE Parificato document proving family annual income below approximately €25,000. Successful applicants receive full tuition waivers, free hostel accommodation, free daily canteen meals, and a cash stipend of up to €7,000/year!",
  },
  {
    q: "Do I need to speak Italian to study in Italy?",
    a: "No! Hundreds of bachelor's and master's degree programs are delivered entirely in English at universities across Italy. While learning basic conversational Italian is helpful for everyday life in local markets and social settings, universities provide free Italian language courses for registered international students.",
  },
  {
    q: "What are the primary university intakes in Italy?",
    a: "The primary intake for Italian universities is September/October (Autumn Semester), which hosts the vast majority of bachelor's and master's programs. A select number of universities also offer a smaller February/March intake (Spring Semester) for specific postgraduate degrees.",
  },
  {
    q: "How does public healthcare work for international students in Italy?",
    a: "International students in Italy can register with the Italian National Health Service (Servizio Sanitario Nazionale - SSN) for a modest annual student fee. This provides equal healthcare rights to Italian citizens, including free primary doctor consultations, subsidized prescription medications, and free public hospital care.",
  },
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function ItalyStudyAbroadContent() {
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
            <span className="text-[#0a1e38] font-bold">Italy</span>
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
                <ItalyFlagBadge />
                <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-wide uppercase">
                  Birthplace of Modern Higher Education
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Study in <span className="text-[#e52928]">Italy</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
                  Build Your Global European Future
                </span>
              </h1>

              {/* Sub-tagline */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Italy offers international students centuries-old academic prestige, world-leading research universities (Bologna, Padua, Sapienza, Milan), affordable tuition, generous DSU regional scholarships, and Schengen mobility in the heart of Southern Europe.
              </p>

              {/* Bullet Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-left max-w-md mx-auto lg:mx-0 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>500+ English-Taught Programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>DSU Scholarships (Free Tuition + Stipend)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>1-Year Post-Study Job Search Permit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span>29 Schengen Countries Mobility</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Free Italy Counselling</span>
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
                    src="/italy-hero.png"
                    alt="Study in Italy Student - Umang Career Consultancy"
                    width={480}
                    height={480}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    priority
                  />
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3.5s]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg">
                    1088
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">World&apos;s First University</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">Bologna Legacy</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:4.2s]">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#e52928] font-black text-xs tracking-wider">IT</div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">DSU Grants</div>
                    <div className="text-base font-extrabold text-[#0a1e38]">100% Free Tuition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT ITALY (Matching User Reference)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Italy"
            subtitle="A captivating Mediterranean peninsula combining ancient scholarly heritage, Renaissance architecture, and cutting-edge industrial innovation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Landmark Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              <Image
                src="/destinations/italy.jpg"
                alt="Colosseum and Roman Forum Italy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#e52928] text-white">
                  Colosseum, Rome
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2">Bel Paese — The Beautiful Country</h3>
              </div>
            </div>

            {/* Key Fact Badges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Located in Southern Europe</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Centrally positioned in the Mediterranean, bridging continental Europe and North Africa.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Peninsular Country</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Famous boot-shaped peninsula bordered by the Alps and surrounded by the Adriatic, Tyrrhenian, and Ionian seas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#22c55e] flex items-center justify-center font-black text-[10px] mb-2 tracking-wider">EU</div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Schengen Country</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Enjoy borderless student travel and internships across all 29 European Schengen member states.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Affordable Study and Living Options</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Extremely economical public university tuition and low Mediterranean cost of living.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Modern Infrastructure</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  High-speed Frecciarossa bullet trains, automated metros, and connected European flight corridors.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors">
                <div className="w-7 h-7 rounded-full bg-red-100 text-[#e52928] flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Rich Cultural & Academic Environment</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Home to 59 UNESCO World Heritage Sites, classical arts, world-famous cuisine, and historic faculties.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#22c55e] transition-colors sm:col-span-2">
                <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth={2} /><path strokeWidth={2} strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>
                <h4 className="text-sm font-extrabold text-[#0a1e38]">Warm Summers and Mild Winters</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Invigorating Mediterranean climate with warm sunny summers (25℃–35℃) and gentle, mild winters (0℃–10℃).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOP COURSES IN ITALY (5 Courses)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Courses in Italy"
            subtitle="Pioneering disciplines connecting classroom excellence with world-leading Italian industries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOP_COURSES.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-[#22c55e] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-100">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0a1e38] group-hover:text-[#e52928] transition-colors mt-4">
                    {course.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{course.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#e52928]">
                  <span>{course.tag}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}

            {/* DSU Assessment Card */}
            <div className="bg-gradient-to-br from-[#0a1e38] to-[#122e54] p-7 rounded-3xl shadow-lg text-white flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-[#e52928] text-xs font-bold border border-red-500/30">
                  Regional DSU Scholarships
                </span>
                <h3 className="text-xl font-black mt-4">Qualify for Free Tuition in Italy?</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Indian students with family annual income under €25,000 frequently receive 100% tuition waivers, free hostel accommodation, and cash living stipends.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#counselling-form"
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm shadow-md transition-colors"
                >
                  Check DSU Eligibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY ITALY AS AN IDEAL DESTINATION? (8 Pillars)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why is Italy an Ideal Study Abroad Destination?"
            subtitle="Discover the unique academic, financial, and lifestyle advantages of studying in Italy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_ITALY.map((pillar, idx) => (
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
          DSU & REGIONAL SCHOLARSHIPS SPOTLIGHT
         ========================================================= */}
      <section className="w-full py-12 sm:py-16 bg-[#0a1e38] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-[#22c55e] border border-emerald-500/30">
                Italian Right to University Education (DSU)
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3 text-white">
                DSU Regional Scholarships: Study in Italy for Free
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Italy is one of the only European nations where international students are treated equally to domestic citizens for financial aid. By submitting an ISEE Parificato dossier, eligible students can receive a complete tuition waiver, free canteen meals, and an annual cash stipend of up to €7,000!
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#22c55e]">100%</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Tuition Fee Waiver Under DSU</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-2xl font-black text-[#e52928]">Up to €7,000</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Annual Student Living Stipend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REGIONS IN ITALY (5 Regions matching reference)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Regions in Italy"
            subtitle="Explore university hubs and regional specialization across Northern, Central, and Southern Italy."
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
          UNIVERSITIES IN ITALY
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Prominent Universities in Italy"
            subtitle="Centuries-old institutions and modern engineering polytechnics globally acclaimed for research excellence."
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
            title="Italy Tuition Fees & Cost of Living"
            subtitle="Transparent financial overview in Euros (€) and Indian Rupees (INR)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tuition Fees Table */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#0a1e38]">Italy Tuition Fees</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Annual indicative tuition rates across program tiers
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
                      <td className="py-3.5 px-3 font-semibold">€20,000+</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹5.4L – ₹18.0L+</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Master Degree</td>
                      <td className="py-3.5 px-3 font-semibold">€6,000</td>
                      <td className="py-3.5 px-3 font-semibold">€20,000+</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">₹5.4L – ₹18.0L+</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Diploma Programs</td>
                      <td className="py-3.5 px-3 font-semibold text-slate-400">–</td>
                      <td className="py-3.5 px-3 font-semibold text-slate-400">–</td>
                      <td className="py-3.5 px-3 font-semibold text-slate-400">N/A in Italy</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-3 font-bold text-[#0a1e38]">Ph.D. Programs</td>
                      <td className="py-3.5 px-3 font-semibold">€1,500</td>
                      <td className="py-3.5 px-3 font-semibold">€2,500</td>
                      <td className="py-3.5 px-3 font-semibold text-[#22c55e]">Often Funded*</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-[#0a1e38]">Key Intakes:</span> February, September.
                <br />
                <span className="italic text-slate-500">
                  *Note: Tuition fees and intakes vary depending on the university and program. At Italian public universities, international students can calculate tuition using ISEE Parificato (family income), reducing fees to €500–€1,500/year, or €0 with a DSU scholarship. Ph.D. researchers frequently receive gross ministerial scholarships of ~€16,000/year.
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
                  Typical monthly student expenditure in Italy
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
                  <span className="text-[#22c55e] text-base font-black">€645 – €1,430</span>
                </div>
                <div className="text-xs text-slate-500 text-right mt-0.5">Approx. ₹58,000 – ₹1,28,000 / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEATHER & FOUR SEASONS IN ITALY
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Weather in Italy"
            subtitle="Temperate Mediterranean climate with sunny summers, golden autumns, and mild winters."
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
          ITALIAN ACADEMIC & VISA SYSTEM (6 Cards)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Italian Academic & Visa System"
            subtitle="Key essentials on Universitaly, DSU scholarships, and post-study work authorization."
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
            title="Step-by-Step Italy Admission & Visa Process"
            subtitle="From Universitaly pre-enrolment to DSU scholarship filing — Umang Career Consultancy guides you at every stage."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Profile Assessment & University Shortlist",
                desc: "Evaluating transcripts, English proficiency (IELTS 6.0+ or MOI), and shortlisting public universities and DSU-eligible programs.",
              },
              {
                step: "02",
                title: "Application Dossier & Offer Letter",
                desc: "Submitting verified mark sheets, recommendation letters, CVs, and securing your conditional university admission letter.",
              },
              {
                step: "03",
                title: "Universitaly Portal Pre-Enrolment",
                desc: "Creating your official pre-enrolment application on the Italian Ministry's Universitaly portal for consular validation.",
              },
              {
                step: "04",
                title: "CIMEA Comparability or Declaration of Value",
                desc: "Obtaining your CIMEA Statement of Comparability / Verification or Declaration of Value (DOV) from the Italian Embassy.",
              },
              {
                step: "05",
                title: "Type-D National Student Visa Lodgement",
                desc: "Submitting your visa application at VFS Global with verified financial proof, travel insurance, and pre-enrolment summary.",
              },
              {
                step: "06",
                title: "Arrival, Codice Fiscale & Permesso Kit",
                desc: "Obtaining your Italian tax code, lodging your Permesso di Soggiorno kit at the Italian Post Office, and finalizing DSU disbursement.",
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
            subtitle="Verified answers to vital questions regarding studying and living in Italy."
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
                  Plan Your Italy Study Journey
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  To Make Your Study in Italy <span className="text-[#e52928]">Hassle-Free</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Plan your Italy study journey with Umang Career Consultancy. From securing admissions at Bologna, Sapienza, and PoliMi to navigating Universitaly pre-enrolment and DSU scholarship disbursements, our certified counselors make your Mediterranean education dream a reality.
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
                    <h3 className="text-2xl font-black text-[#0a1e38]">Grazie! Thank You!</h3>
                    <p className="text-sm text-slate-600 mt-2">
                      Your inquiry for studying in Italy has been received. Our senior European education counselor will contact you within 24 hours.
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
                      Book Free Italy Counselling
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Rohan Joshi"
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
                          placeholder="rohan@example.com"
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
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred University or Course?</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder="e.g. Looking for Engineering at PoliMi or Business at Bologna with DSU scholarship"
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
                      <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Confidential. Official Italian education partner counseling.
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
