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

/* Feature & Academic Icons */
function BookIcon() {
  return (
    <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}


/* -------------------------------------------------------------
   REUSABLE SECTION HEADER WITH STACKED DOUBLE DASHES & ANIMATION
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
      className={`text-center mb-10 sm:mb-12 transition-all duration-700 ease-out transform ${
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

export default function USAStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Computer Science & IT",
    level: "Master's Degree (MS / MBA)",
    intake: "September (Fall 2026 - Major)",
    statePreference: "California (Silicon Valley)",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  /* -------------------------------------------------------------
     DATA STRUCTURES
  ------------------------------------------------------------- */
  const whyStudyUSA = [
    {
      title: "Hub of Globally Recognised Universities",
      desc: "Home to the world's most prestigious Ivy League institutions, Tier-1 research universities, and world top-ranking colleges.",
      badge: "World Top 100",
    },
    {
      title: "Students From Countries Worldwide",
      desc: "More than 1 million international students create an unparalleled multicultural network spanning technology, business, and arts.",
      badge: "1M+ Global Students",
    },
    {
      title: "Flexible Academic Structure & Majors",
      desc: "Undergraduates can explore diverse subjects for the first two years before declaring a major, or even pursue double majors and minors.",
      badge: "Flexible Curriculum",
    },
    {
      title: "Wide Range of Programs & Specialisations",
      desc: "Choose from thousands of innovative degree concentrations in AI, FinTech, aerospace, data science, bioengineering, and MBA.",
      badge: "Thousands of Majors",
    },
    {
      title: "Generous Scholarships & Assistantships",
      desc: "Merit scholarships, need-based aid, and Graduate Assistantships (Teaching Assistant / Research Assistant) offering full tuition waivers + stipends.",
      badge: "TA / RA Assistantships",
    },
    {
      title: "World-Leading Research & Innovation",
      desc: "Over $80 billion in annual university R&D funding. Access cutting-edge laboratories, supercomputers, and direct commercial patents.",
      badge: "R&D Powerhouse",
    },
    {
      title: "3-Year STEM OPT Work Rights",
      desc: "STEM graduates qualify for a 24-month OPT extension on top of the standard 12-month OPT, providing up to 36 months (3 years) of U.S. work authorization.",
      badge: "36-Month STEM OPT",
    },
    {
      title: "Practical CPT Industry Internships",
      desc: "Curricular Practical Training (CPT) allows off-campus paid internships during your degree program with Fortune 500 giants.",
      badge: "Paid CPT Internships",
    },
  ];

  const universities = [
    {
      name: "Stanford University",
      state: "California (Silicon Valley)",
      tag: "World #2 Global Ranking • Startup Engine",
      specialty: "Computer Science, AI, Business (GSB), Bioengineering, Law",
      ranking: "QS World Top 5",
    },
    {
      name: "Northwestern University",
      state: "Illinois (Evanston / Chicago)",
      tag: "Elite Private Institution • Kellogg School of Mgt",
      specialty: "Marketing, Journalism, Materials Science, Medicine, Law",
      ranking: "US News Top 10",
    },
    {
      name: "Duke University",
      state: "North Carolina (Durham)",
      tag: "Research Triangle Powerhouse",
      specialty: "Biomedical Engineering, Public Policy, Fuqua Business, Nursing",
      ranking: "US News Top 10",
    },
    {
      name: "Johns Hopkins University (JHU)",
      state: "Maryland (Baltimore)",
      tag: "Ranked #1 in Medical & Healthcare Research",
      specialty: "Public Health, Biomedical Eng, Medicine, International Affairs",
      ranking: "World Leader in Medicine",
    },
    {
      name: "Boston University (BU)",
      state: "Massachusetts (Boston)",
      tag: "Major Global City University",
      specialty: "Data Science, Management, Communications, Biotechnology",
      ranking: "World Top 100",
    },
    {
      name: "Purdue University",
      state: "Indiana (West Lafayette)",
      tag: "Cradle of Astronauts • Premier Engineering",
      specialty: "Aeronautical & Mechanical Engineering, Computer Science, Agriculture",
      ranking: "Top 5 U.S. Public Engineering",
    },
    {
      name: "University of Southern California (USC)",
      state: "California (Los Angeles)",
      tag: "Silicon Beach & Cinematic Arts Leader",
      specialty: "Viterbi Engineering, Cinema Arts, Marshall Business, Games",
      ranking: "Top Private Research Hub",
    },
    {
      name: "Cleveland State University (CSU)",
      state: "Ohio (Cleveland)",
      tag: "Engaged Learning & Urban Health Hub",
      specialty: "Mechanical Engineering, Computer Science, Health Sciences, Business",
      ranking: "High ROI Public University",
    },
    {
      name: "Washington University in St. Louis (WashU)",
      state: "Missouri (St. Louis)",
      tag: "Pre-Med & Scientific Research Elite",
      specialty: "Medicine, Architecture, Genetics, Olin Business, Law",
      ranking: "US News Top 20",
    },
    {
      name: "Arizona State University (ASU)",
      state: "Arizona (Phoenix / Tempe)",
      tag: "#1 in the U.S. for Innovation",
      specialty: "Sustainability, Computer Science, Supply Chain, Thunderbird Global",
      ranking: "#1 Innovation (9 Yrs Running)",
    },
  ];

  const states = [
    {
      name: "NEW YORK",
      tagline: "Global Capital of Finance, Media & Culture",
      desc: "Major global center for business, Wall Street finance, technology, media, and education. Home to world-class universities, corporate headquarters, and high graduate salaries.",
      vibe: "Fast-Paced, Iconic & Multicultural",
      livingRange: "$1,600 – $3,200/mo",
    },
    {
      name: "CALIFORNIA",
      tagline: "Silicon Valley Innovation & Hollywood Sunshine",
      desc: "Known for technology, innovation, venture capital, aerospace, biotechnology, and top universities like Stanford, UC Berkeley, UCLA, and USC.",
      vibe: "High-Tech, Sun-Drenched & Entrepreneurial",
      livingRange: "$1,500 – $3,000/mo",
    },
    {
      name: "TEXAS",
      tagline: "Silicon Hills, Energy Capital & Space Hub",
      desc: "A massive economic powerhouse with universities in Austin, Dallas, and Houston. Dominant in technology, aerospace, biomedical science, and oil & gas with zero state income tax.",
      vibe: "Expanding, Business-Friendly & Warm",
      livingRange: "$1,200 – $2,200/mo",
    },
    {
      name: "NEW JERSEY",
      tagline: "The Garden State & Pharma Corridor",
      desc: "Offers direct access to the New York metropolitan economy and is home to the world's highest concentration of pharmaceutical, biotechnology, and chemical research firms.",
      vibe: "Connected, Research-Dense & Suburban",
      livingRange: "$1,300 – $2,400/mo",
    },
    {
      name: "VIRGINIA",
      tagline: "Tech Corridor, Defense & Historic Prestige",
      desc: "Home to the Dulles Tech Corridor, carrying over 70% of the world's internet traffic. Premier universities in public policy, cybersecurity, engineering, and business.",
      vibe: "Tech-Oriented, Historic & Green",
      livingRange: "$1,200 – $2,300/mo",
    },
    {
      name: "WASHINGTON",
      tagline: "Pacific Northwest Tech & Aviation Capital",
      desc: "Offers top universities and close ties to technology giants like Amazon, Microsoft, and Boeing. Renowned for environmental innovation and stunning natural landscapes.",
      vibe: "Progressive, Evergreen & Cloud Capital",
      livingRange: "$1,400 – $2,600/mo",
    },
    {
      name: "MICHIGAN",
      tagline: "Automotive Innovation & Engineering Excellence",
      desc: "Known for universities like UMich, leading research in autonomous driving, smart mobility, advanced manufacturing, robotics, and clean energy.",
      vibe: "Industrial-Chic, Friendly & Engineering-Led",
      livingRange: "$1,000 – $1,800/mo",
    },
    {
      name: "FLORIDA",
      tagline: "The Sunshine State, Aerospace & Biomedical Hub",
      desc: "Offers universities across a wide range of programs in a tropical climate. Rapidly emerging as a major tech, finance, and aerospace corridor.",
      vibe: "Tropical, Dynamic & Tourism-Tech",
      livingRange: "$1,200 – $2,200/mo",
    },
    {
      name: "INDIANA",
      tagline: "Crossroads of America & STEM Leadership",
      desc: "Provides top-tier study options across universities like Purdue and Indiana University, celebrated for aeronautical engineering, business, and affordable living.",
      vibe: "Affordable, Welcoming & Campus-Centric",
      livingRange: "$950 – $1,600/mo",
    },
  ];

  const academicSystemCards = [
    {
      title: "What is a Major?",
      icon: <BookIcon />,
      desc: "A major is the primary academic field or subject that a student specializes in during an undergraduate degree (comprising 30–36 credits of your 120-credit degree). You can also pursue a minor or double major.",
    },
    {
      title: "What is a GPA?",
      icon: <AwardIcon />,
      desc: "GPA stands for Grade Point Average, measured on a 4.0 scale (4.0 = A, 3.0 = B). It is the standardized indicator of academic performance across all U.S. colleges and graduate schools.",
    },
    {
      title: "What is the Credit System?",
      icon: <BuildingIcon />,
      desc: "U.S. universities measure coursework in credit hours (typically 3 credits per semester course). Bachelor's degrees require ~120 credits; Master's degrees require 30–36 credits.",
    },
    {
      title: "College vs University",
      icon: <BuildingIcon />,
      desc: "A 'College' usually emphasizes undergraduate education (liberal arts colleges), while a 'University' encompasses undergraduate, graduate, and doctoral research institutions.",
    },
    {
      title: "Community Colleges (2+2)",
      icon: <BuildingIcon />,
      desc: "Community colleges offer 2-year Associate degrees with tuition savings. Students utilize guaranteed '2+2 transfer pathways' to enter top 4-year state universities as third-year juniors.",
    },
    {
      title: "OPT & 3-Year STEM Extension",
      icon: <BriefcaseIcon />,
      desc: "F-1 student visa holders receive 12 months of Optional Practical Training (OPT). Graduates in STEM designated degree programs qualify for an extra 24-month extension, totaling 36 months (3 years) of U.S. work authorization.",
    },
  ];

  const livingCosts = [
    { item: "Accommodation (On-Campus Dorm / Flatshare)", cost: "$800 – $2,500", desc: "Campus dorms or off-campus shared apartments depending on city.", icon: "home" },
    { item: "Food & Groceries", cost: "$100 – $500", desc: "University meal plans and local supermarkets (Trader Joe's, Costco, Walmart).", icon: "groceries" },
    { item: "Educational Materials & Books", cost: "$50 – $100", desc: "Textbooks, software subscriptions, laboratory materials & supplies.", icon: "books" },
    { item: "Transportation", cost: "$50 – $970", desc: "Campus shuttle buses, city subways, or vehicle insurance & fuel.", icon: "transport" },
    { item: "Personal Expenses", cost: "$100 – $300", desc: "Clothing, personal grooming, laundry, and leisure activities.", icon: "clothing" },
    { item: "Utilities (Electricity, Water, Heating)", cost: "$100 – $200", desc: "Shared utilities in private apartments; included in on-campus dorms.", icon: "utilities" },
    { item: "Health Insurance (Mandatory)", cost: "$100 – $300", desc: "University-approved international student health insurance policy.", icon: "health" },
  ];

  const faqs = [
    {
      q: "What are the English-language requirements for U.S. universities?",
      a: "Requirements vary by university and program. Most U.S. institutions accept IELTS (typically 6.5–7.5), TOEFL iBT (80–100+), PTE Academic (58–68+), or Duolingo English Test (110–130+). Certain universities may grant English proficiency waivers if your secondary or undergraduate education was conducted entirely in English.",
    },
    {
      q: "Can I work while studying in the United States?",
      a: "Yes. International students on an active F-1 visa can work on-campus up to 20 hours per week during academic semesters, and full-time (up to 40 hours per week) during official summer and winter breaks. Off-campus employment is permitted after the first academic year through Curricular Practical Training (CPT) for course-related internships.",
    },
    {
      q: "What is the academic calendar and main intake periods in the USA?",
      a: "U.S. universities operate primarily on a Semester system (Fall and Spring) or Quarter system. The major intake is Fall (August/September), which offers the largest program availability and financial aid. The second intake is Spring (January), followed by a smaller Summer intake (May) for select courses.",
    },
    {
      q: "Can I transfer to a U.S. university from another country?",
      a: "Yes! Many U.S. universities accept international transfer students. Your prior university coursework and syllabus will be evaluated via credential evaluation services (such as WES or ECE) to determine how many credits transfer toward your degree requirements.",
    },
    {
      q: "What is the difference between state and private universities in the USA?",
      a: "State (public) universities are funded by state governments and usually have separate in-state and out-of-state tuition rates. Private universities (like Stanford, Northwestern, or Duke) are funded by tuition, private endowments, and research grants, charging uniform tuition rates while offering generous institutional scholarships and grants.",
    },
    {
      q: "Are scholarships and financial aid available for international students?",
      a: "Yes. International students can qualify for university merit-based scholarships, department grants, and athletic scholarships. Graduate students (Master's and Ph.D.) frequently receive Graduate Assistantships (Graduate Teaching Assistant - TA, or Graduate Research Assistant - RA) that provide a 50% to 100% tuition waiver plus a monthly living stipend.",
    },
    {
      q: "What is the difference between undergraduate and graduate degrees?",
      a: "Undergraduate degrees comprise 2-year Associate degrees and 4-year Bachelor's degrees (BA, BS, BBA). Graduate degrees include Master's degrees (MS, MA, MBA - typically 1.5 to 2 years) and Doctoral degrees (Ph.D. - typically 4 to 6 years), requiring a completed bachelor's degree for admission.",
    },
    {
      q: "Are there age limitations for studying at U.S. universities?",
      a: "No! U.S. universities do not have an upper age limit. Higher education institutions in America embrace lifelong learning, and professionals of all ages regularly enroll in undergraduate, graduate, and executive programs.",
    },
    {
      q: "Can I obtain a Bachelor's and Master's degree together?",
      a: "Yes. Many U.S. universities offer accelerated 4+1 combined degree programs that allow high-achieving students to complete both a Bachelor's and a Master's degree in 5 years, saving both time and tuition expenses.",
    },
    {
      q: "How can I check whether a U.S. institution is properly accredited?",
      a: "You can verify an institution's accreditation status via the Council for Higher Education Accreditation (CHEA) or the U.S. Department of Education database. Umang Career Consultancy exclusively works with regionally accredited, SEVP-certified American colleges and universities.",
    },
    {
      q: "Can I study vocational programs in the USA?",
      a: "Yes. Options include Community Colleges, Career and Technical Education (CTE) institutions, and professional certificate programs offering applied technical skills and Associate of Applied Science (AAS) degrees.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
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

      {/* -------------------------------------------------------------
          1. HERO SECTION (USA RED, WHITE & BLUE RIBBONS + METRICS)
      ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1e38] via-[#0d284d] to-[#0a1e38] text-white pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Subtle Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e52928]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1e40af]/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <Link href="/study-abroad" className="hover:text-white transition-colors">
              Study Abroad
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-[#22c55e] font-semibold">USA</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e52928] animate-ping" />
                <span className="text-slate-100 font-semibold tracking-wide">
                  World #1 Study Destination • Over 1 Million International Students
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Study in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#e52928]">USA</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#22c55e] mt-2">
                  Build Your Global Future with 3-Year STEM OPT
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                The USA offers international students an unmatched selection of universities, flexible majors, cutting-edge research opportunities, generous assistantships, and career-focused education with up to 36 months of post-study work authorization.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">1M+</div>
                  <div className="text-xs text-slate-300 font-medium">Global Students</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#22c55e]">3 Years</div>
                  <div className="text-xs text-slate-300 font-medium">STEM OPT (PSW)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#e52928]">F-1 Visa</div>
                  <div className="text-xs text-slate-300 font-medium">Full Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">TA / RA</div>
                  <div className="text-xs text-slate-300 font-medium">Assistantships</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#consultation"
                  className="px-7 py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#c9201f] text-white shadow-lg shadow-red-900/30 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  Apply for USA 2026/27
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all text-center"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual (American University Graduates) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md group anim-gentle-float">
                <Image
                  src="/usa-hero.png"
                  alt="Graduates celebrating commencement ceremony in the USA"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Micro Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 shadow-xl flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#dc2626] flex items-center justify-center text-white font-black text-sm shadow-md">
                    US
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold flex items-center gap-1.5">
                      <span>SEVP Certified & Tier-1 Accredited</span>
                      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    </div>
                    <p className="text-slate-300 text-[11px] leading-tight mt-0.5">
                      Form I-20, F-1 Visa & 3-Year STEM OPT Pathway
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. ABOUT USA (KEY HIGHLIGHTS & STATUE OF LIBERTY VISUAL)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Landmark Visual */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/destinations/usa.jpg"
                  alt="Statue of Liberty in New York Harbor, USA"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#e52928] text-white text-xs font-bold rounded-md uppercase tracking-wider">
                    New York, USA
                  </span>
                  <h3 className="text-xl font-bold mt-2">Statue of Liberty</h3>
                  <p className="text-slate-200 text-xs mt-1">
                    The global beacon of opportunity, research innovation, and academic liberty
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
                <span>Official Language: English</span>
                <span>Currency: United States Dollar (USD / $)</span>
              </div>
            </div>

            {/* Right Information Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase">
                Land of Opportunity
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                About the USA & Higher Education System
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Located in North America, the United States is one of the world&apos;s largest economies and the preeminent global destination for research and innovation. With thousands of accredited colleges and universities, American higher education offers unparalleled flexibility, cross-disciplinary study, and direct industry connectivity.
              </p>

              {/* 8 Core Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Located in North America with 50 diverse states & territories",
                  "World's largest economy and global center for capital & tech",
                  "Leading destination for research, patents, and scientific innovation",
                  "Over 4,000 accredited universities across all academic disciplines",
                  "Diverse and multicultural society welcoming 1M+ foreign scholars",
                  "Unprecedented flexibility: declare or change your major anytime",
                  "F-1 visa offering on-campus work & off-campus CPT internships",
                  "Optional Practical Training (OPT) granting 1 to 3 years of work rights",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. USA EDUCATION & ACADEMIC SYSTEM EXPLAINER CARDS
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="USA Education & Academic System Explained" subtitle="Key concepts that define the American higher education journey: Majors, GPAs, Credits, Community Colleges, and Post-Study OPT." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicSystemCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-[#22c55e]/40 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. WHY STUDY IN THE USA?
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Study in the USA?" subtitle="The United States offers international students a hub of globally recognized universities, flexible curricula, and transformative career opportunities." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyUSA.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-[#e52928]/10 text-[#e52928] font-bold text-xs mb-3">
                    {item.badge}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1e38] mb-2 group-hover:text-[#22c55e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 36-Month STEM OPT Spotlight Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#0a1e38] via-[#0d2a52] to-[#1e3a8a] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <span className="px-3 py-1 rounded-md bg-[#22c55e] text-slate-950 font-extrabold text-xs uppercase tracking-wider">
                  Post-Study Work Authorization (OPT & STEM OPT)
                </span>
                <h4 className="text-2xl font-bold text-white">
                  Up to 36 Months (3 Years) of U.S. Employment Permission
                </h4>
                <p className="text-sm text-slate-200 max-w-3xl leading-relaxed">
                  All F-1 graduates qualify for <strong>12 months of Optional Practical Training (OPT)</strong>. Graduates in qualifying STEM fields (Science, Technology, Engineering, and Math) can apply for an additional <strong>24-month STEM OPT extension</strong>, providing up to <strong>3 full years of legal employment</strong> in the United States without an H-1B lottery visa.
                </p>
              </div>
              <a href="tel:+919173186109" className="anim-phone-ring px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#1ea750] text-white font-bold text-sm shadow-md transition-all shrink-0 whitespace-nowrap"
              >
                Evaluate STEM Eligibility
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. POPULAR STUDY DESTINATIONS (9 STATES)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Popular Study Destinations Across the United States" subtitle="Each U.S. state features distinct industrial strengths, university clusters, climate varieties, and corporate recruitment opportunities." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {states.map((state, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 uppercase">
                      United States
                    </span>
                    <span className="text-xs font-bold text-[#e52928] bg-red-50 px-2.5 py-1 rounded-md">
                      {state.livingRange}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0a1e38] mb-1">{state.name}</h3>
                  <div className="text-xs font-semibold text-[#22c55e] mb-3">
                    {state.tagline}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {state.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">State Lifestyle:</span>
                  <span className="font-semibold text-slate-800">{state.vibe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. TOP UNIVERSITIES & INSTITUTIONS IN THE USA
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Universities & Institutions in the USA" subtitle="Umang Career Consultancy can help students compare universities according to their academic profile, preferred course, budget, location and career goals." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {universities.map((uni, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#22c55e] hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a1e38] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#0a1e38] truncate">
                      {uni.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded-full">
                      <svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>{uni.state}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#e52928] mb-1.5">
                    {uni.tag} • {uni.ranking}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-700">Specializations:</span> {uni.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. TUITION FEES & MONTHLY COST OF LIVING (EXACT USER RANGES)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Tuition Fees Table */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold tracking-wider uppercase">
                Annual Course Investments
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                USA Tuition Fees
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Actual tuition varies considerably by university, program, location, and student status. The ranges below indicate annual tuition averages for international students.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0a1e38] text-white text-xs uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="px-5 py-4">Study Level</th>
                        <th className="px-5 py-4">Minimum Annual ($ USD)</th>
                        <th className="px-5 py-4">Maximum Annual ($ USD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Bachelor&apos;s Degree</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">$32,000</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">$45,000</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Master&apos;s Degree</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">$22,000</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">$30,000</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Diploma / Associate Degree</td>
                        <td className="px-5 py-4 text-slate-700 font-semibold">$6,000</td>
                        <td className="px-5 py-4 text-slate-700 font-semibold">$20,000</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">PhD / Doctoral Studies</td>
                        <td className="px-5 py-4 text-emerald-600 font-semibold">$10,000</td>
                        <td className="px-5 py-4 text-emerald-600 font-semibold">$50,000*</td>
                      </tr>
                      <tr className="bg-slate-50/80">
                        <td className="px-5 py-3.5 font-bold text-slate-600 text-xs">Major Intakes</td>
                        <td colSpan={2} className="px-5 py-3.5 font-bold text-[#0a1e38] text-xs">
                          January (Spring), May (Summer) & September (Fall - Major Intake)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                * Note: Most academic PhD programs in the USA are fully funded with full tuition waivers and annual living stipends ($25,000 – $40,000/yr) via Research or Teaching Assistantships.
              </p>
            </div>

            {/* Right: Monthly Cost of Living */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-[#e52928] text-xs font-bold tracking-wider uppercase">
                Living Expenses
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Monthly Cost of Living
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                These figures are indicative ranges for typical student expenses. Living in metropolitan hubs like New York or San Francisco will be higher than college towns in Indiana, Texas, or Ohio.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {livingCosts.map((cost, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-[#e52928] flex items-center justify-center shrink-0"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                      <span className="text-sm font-extrabold text-[#e52928]">{cost.cost}</span>
                    </div>
                    <div className="text-xs font-bold text-[#0a1e38] mb-1">{cost.item}</div>
                    <p className="text-[11px] text-slate-500 leading-snug">{cost.desc}</p>
                  </div>
                ))}
              </div>

              {/* Total Estimated Monthly Expense Card */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                    Estimated Total Monthly Cost
                  </div>
                  <div className="text-xs text-blue-700 mt-0.5">
                    Covers accommodation, food, transport & health insurance
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-black text-blue-900">
                  $1,400 – $5,500 <span className="text-xs font-medium text-blue-600">/ month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          8. 6-STEP ADMISSION & U.S. F-1 STUDENT VISA ROADMAP
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Your 6-Step Admission & U.S. F-1 Visa Roadmap" subtitle="From university shortlisting and standardized tests to Form I-20 issuance and mock visa interview training, Umang Career Consultancy guides you every step of the way." variant="dark" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Profile Assessment & University Shortlist",
                desc: "We analyze your GPA, test scores (GRE/GMAT/IELTS/TOEFL/Duolingo), budget, and career goals to select Ambitious, Target, and Safe U.S. universities.",
              },
              {
                step: "02",
                title: "Application Dossier & SOP Editing",
                desc: "Crafting a compelling Statement of Purpose (SOP), securing strong Letters of Recommendation (LORs), and submitting applications through university portals.",
              },
              {
                step: "03",
                title: "Admit Letter & Form I-20 Issuance",
                desc: "Submitting financial bank statements and affidavits of support to receive your official Form I-20 (Certificate of Eligibility for Nonimmigrant Student Status).",
              },
              {
                step: "04",
                title: "SEVIS I-901 Fee Payment ($350)",
                desc: "Paying the mandatory federal SEVIS fee to the U.S. Department of Homeland Security and generating your official SEVIS payment receipt.",
              },
              {
                step: "05",
                title: "DS-160 Filing & Visa Interview Prep",
                desc: "Filing your DS-160 nonimmigrant visa form, scheduling your OFC biometrics and Consular interview, and undergoing intensive mock visa interviews.",
              },
              {
                step: "06",
                title: "Pre-Departure Briefing & U.S. Arrival",
                desc: "Forex currency cards, student health insurance setup, campus housing booking, and pre-departure briefings for U.S. Customs and Border Protection (CBP).",
              },
            ].map((stepItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#22c55e]/50 backdrop-blur-sm transition-all duration-300"
              >
                <div className="text-3xl font-black text-[#22c55e] mb-2">{stepItem.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{stepItem.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          9. FREQUENTLY ASKED QUESTIONS (FAQS - 11 QUESTIONS)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions About Studying in the USA" subtitle="Clear answers regarding English requirements, F-1 work rights, credit transfers, scholarships, and university accreditation." />

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base text-[#0a1e38] focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDownIcon isOpen={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          10. CONSULTATION FORM & CONTACT CALLOUT
      ------------------------------------------------------------- */}
      <section id="consultation" className="py-16 md:py-24 bg-slate-100 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left CTA Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0a1e38] to-[#123661] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-md bg-[#e52928] text-white text-xs font-bold uppercase tracking-wider">
                  Start Your Journey
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Start Your Study Journey in the USA
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Get personalized guidance for course selection, university applications, Form I-20 documentation, and your U.S. F-1 student visa.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Ivy League, Tier-1 & Public University Shortlisting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>3-Year STEM OPT Strategy & Career Planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Form I-20 & DS-160 Visa File Preparation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>1-on-1 Mock Visa Interview Training</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-xs text-slate-300">Talk to Umang Career Consultancy Today</div>
                <a href="tel:+919173186109" className="anim-phone-ring text-lg font-bold text-[#22c55e] hover:underline flex items-center gap-2"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-[#22c55e] rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <h4 className="text-2xl font-bold text-[#0a1e38]">Thank You!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Your USA study abroad inquiry has been received. Our certified U.S. education counselor will contact you at {formData.phone || "your number"} shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#0a1e38] text-white text-xs font-bold hover:bg-[#123661] transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-xl font-bold text-[#0a1e38] mb-1">
                    Book Free USA Consultation
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Fill in your details below and our counselor will evaluate your profile within 24 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Yash Shah"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="yash@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Study Level
                      </label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData((prev) => ({ ...prev, level: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                      >
                        <option>Master&apos;s Degree (MS / MBA / LLM)</option>
                        <option>Bachelor&apos;s Degree (4-Year Undergrad)</option>
                        <option>Doctoral Degree (Ph.D.)</option>
                        <option>Community College (2+2 Transfer)</option>
                        <option>Graduate Certificate</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Course Area
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData((prev) => ({ ...prev, course: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                      >
                        <option>Computer Science & IT (STEM)</option>
                        <option>Artificial Intelligence & Data Science (STEM)</option>
                        <option>Engineering (Mechanical/Civil/Electrical - STEM)</option>
                        <option>Business Administration & Management (MBA)</option>
                        <option>Finance & Business Analytics (STEM)</option>
                        <option>Biotechnology & Life Sciences (STEM)</option>
                        <option>Architecture & Design</option>
                        <option>Healthcare & Public Health</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred State / Region
                      </label>
                      <select
                        value={formData.statePreference}
                        onChange={(e) => setFormData((prev) => ({ ...prev, statePreference: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                      >
                        <option>California (Silicon Valley)</option>
                        <option>New York (East Coast Hub)</option>
                        <option>Texas (Austin & Dallas)</option>
                        <option>Washington (Seattle Tech)</option>
                        <option>New Jersey / Virginia</option>
                        <option>Michigan / Indiana (Midwest)</option>
                        <option>Florida (Southeast)</option>
                        <option>Open to Recommendations / High Scholarships</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Intake
                    </label>
                    <select
                      value={formData.intake}
                      onChange={(e) => setFormData((prev) => ({ ...prev, intake: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                    >
                      <option>September (Fall 2026 - Major Intake)</option>
                      <option>January (Spring 2027)</option>
                      <option>May (Summer 2027)</option>
                      <option>September (Fall 2027)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Any questions or specific requirements?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="e.g. Do I need GRE for MS in CS? Can I apply with Duolingo English Test?"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#ca2221] text-white shadow-lg shadow-red-900/20 transition-all text-sm uppercase tracking-wider"
                  >
                    Submit Free USA Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
