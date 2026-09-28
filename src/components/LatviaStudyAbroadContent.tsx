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

function MedicineIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function SocialScienceIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

function DataAiIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
export default function LatviaStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Computer Science & IT",
    intake: "September 2026",
    level: "Bachelor's Degree"
  });

  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        course: "Computer Science & IT",
        intake: "September 2026",
        level: "Bachelor's Degree"
      });
    }, 4500);
  };

  const FAQS = [
    {
      q: "Can international students work while studying in Latvia?",
      a: "Yes! International students holding a valid residence permit for studies are legally permitted to work up to 20 hours per week during term time and up to 40 hours per week during official semester vacations and holidays."
    },
    {
      q: "What are the main intakes in Latvia?",
      a: "Many Latvian universities offer admissions for two primary intakes: Autumn (September), which is the major intake with the widest program availability, and Spring (February) intake for select Bachelor's and Master's programs."
    },
    {
      q: "Can I stay in Latvia after completing my studies?",
      a: "Yes! Upon graduating from an accredited higher education institution in Latvia, international students can apply for a post-study temporary residence permit (up to 9 months) to seek employment or establish an enterprise. Once formal employment is secured, you can convert to a full work permit."
    },
    {
      q: "How long does it take to receive an admission decision?",
      a: "Processing times generally range between 2 to 6 weeks depending on the university, academic credential evaluation by the Academic Information Centre (AIC), and program prerequisites. It is recommended to apply 3–5 months before your target intake."
    },
    {
      q: "What language is spoken in Latvia?",
      a: "Latvian is the sole official language. English is widely spoken and understood across universities, international workplaces, and cosmopolitan student cities like Riga. Russian is also spoken by a significant segment of the population."
    },
    {
      q: "Can my spouse or children accompany me to Latvia?",
      a: "Family reunification regulations vary. Generally, master's and doctoral students or long-term residence permit holders who meet financial threshold requirements may apply for family members, subject to current Latvian Office of Citizenship and Migration Affairs (PMLP) policies."
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#9e3039] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
                <span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">LV</span>
                <span>Northern European Higher Education</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0a1e38] tracking-tight leading-none uppercase">
                LATVIA
              </h1>

              <p className="mt-5 text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience high-quality European degrees, affordable tuition structures, vibrant student culture, and 29-country Schengen mobility in Northern Europe.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Apply for Latvia</span>
                  <span>→</span>
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Celebratory Student Graphic with Carmine Red Ribbon */}
            <div
              className={`lg:col-span-6 flex justify-center items-center transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center anim-gentle-float">
                <div className="relative w-full h-full p-2 transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/latvia-hero.png"
                    alt="Study Abroad in Latvia Student - Umang Career Consultancy"
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
          2. ABOUT LATVIA
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                  About Latvia
                </h2>
                <div className="w-16 h-1.5 bg-[#e52928] rounded-full mt-2 mb-4" />
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Latvia is a Northern European country and an EU member, offering international students access to a range of academic programs in a European study environment.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                {[
                  "Located in Northern Europe with scenic Baltic coastline",
                  "Member of the European Union (EU) and Eurozone",
                  "Part of the border-free Schengen Area (29 European countries)",
                  "European higher-education system fully aligned with the Bologna process",
                  "Extensive English-taught programs available across disciplines",
                  "Relatively compact, safe, and exceptionally well-connected country",
                  "Diverse cultural and welcoming international student environment",
                  "Four distinct, picturesque seasons",
                  "Opportunities for international students in technology, aviation, business, and healthcare"
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

            {/* Right Column: Riga Cathedral Landmark Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/destinations/latvia.jpg"
                  alt="Riga Cathedral Latvia Old Town"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-black bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    Riga • Latvia
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-2">
                    Northern Europe&apos;s Historic Education Capital
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          3. TOP COURSES IN LATVIA (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Top Courses in Latvia"
            subtitle="Explore high-demand European qualification pathways across science, engineering, and commerce."
            variant="dark"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Business & Management",
                icon: <BusinessIcon />,
                desc: "International economics, finance, entrepreneurship, and logistics."
              },
              {
                title: "Computer Science & IT",
                icon: <ComputerIcon />,
                desc: "Software engineering, cybersecurity, cloud architecture, and telecommunications."
              },
              {
                title: "Engineering & Technology",
                icon: <EngineeringIcon />,
                desc: "Aviation, transport logistics, mechanical engineering, and robotics."
              },
              {
                title: "Medicine & Health Sciences",
                icon: <MedicineIcon />,
                desc: "European-recognized General Medicine (MBBS) & Dentistry at Rīga Stradiņš University."
              },
              {
                title: "Social Sciences",
                icon: <SocialScienceIcon />,
                desc: "International relations, diplomatic studies, law, and media communications."
              },
              {
                title: "Architecture & Design",
                icon: <ArchitectureIcon />,
                desc: "Urban planning, sustainable architecture, interior design, and visual arts."
              },
              {
                title: "Data Science & Artificial Intelligence",
                icon: <DataAiIcon />,
                desc: "Big data analytics, machine learning, algorithmic intelligence, and smart systems."
              },
              {
                title: "Aviation & Logistics",
                icon: <EngineeringIcon />,
                desc: "Commercial aviation management, aircraft maintenance, and international cargo logistics."
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
          4. WHY STUDY IN LATVIA?
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Why Study in Latvia?"
            subtitle="Latvia offers international students a combination of European education, diverse study options and a relatively affordable student lifestyle."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: House of Blackheads Photo */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                <Image
                  src="/destinations/latvia-blackheads.jpg"
                  alt="House of the Black Heads Riga Latvia"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs uppercase font-extrabold tracking-wider bg-[#0a1e38]/80 backdrop-blur-md px-3 py-1 rounded-md inline-block">
                    House of the Blackheads • Riga
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bulleted list with Circular Checkmark Badges */}
            <div className="lg:col-span-6 space-y-3">
              {[
                "EU-recognised higher-education environment with Bologna degree framework",
                "Wide selection of Bachelor's and Master's programs delivered entirely in English",
                "Affordable study and living options compared with Western European destinations",
                "Opportunities for internships and practical industry placements",
                "Safe, peaceful, and student-friendly environment with high quality of life",
                "Strong academic faculties in technology, engineering, and medical healthcare",
                "Border-free travel access to 29 European Schengen member states",
                "Cosmopolitan international student community from over 80 countries",
                "Opportunities to work part-time (up to 20 hours/week) during academic terms",
                "Post-study stay-back residence permits up to 9 months to establish your career"
              ].map((reason, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          5. UNIVERSITIES & INSTITUTIONS IN LATVIA (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Universities & Institutions in Latvia"
            subtitle="Umang Career Consultancy helps students compare recognized Latvian institutions according to course, profile, budget, and career plans."
            variant="dark"
          />

          {/* 10 Circular Institution Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: "Riga Technical University", acronym: "RTU" },
              { name: "University of Latvia", acronym: "LU" },
              { name: "Rīga Stradiņš University", acronym: "RSU" },
              { name: "Daugavpils University", acronym: "DU" },
              { name: "University of Liepāja", acronym: "LiepU" },
              { name: "Vidzeme Univ. of Applied Sciences", acronym: "ViA" },
              { name: "Ventspils Univ. of Applied Sciences", acronym: "VeA" },
              { name: "Rēzekne Academy of Technologies", acronym: "RTA" },
              { name: "Latvian Academy of Art", acronym: "LMA" },
              { name: "Transport & Telecomm. Institute", acronym: "TSI" }
            ].map((uni, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white text-[#0a1e38] flex flex-col items-center justify-center p-3 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/20 border-2 border-white/80">
                  <div className="font-black text-sm sm:text-base tracking-wider uppercase text-[#0a1e38] group-hover:text-[#e52928] transition-colors">
                    {uni.acronym}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">
                    Latvia
                  </div>
                </div>

                <div className="mt-3.5 text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-snug max-w-[130px]">
                  {uni.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Objective Guidance:</span> Umang Career Consultancy assesses entry criteria, academic credentials, and tuition budgets to short-list the exact universities best matched to your profile.
          </div>

        </div>
      </section>

      {/* =========================================================
          6. LATVIA TUITION FEES TABLE
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Latvia Tuition Fees"
            subtitle="Tuition fees vary according to the university, program and level of study. Fees are indicative and can differ significantly by institution."
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
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 2,000 – € 6,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">Master&apos;s Degree</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 1,700 – € 9,600+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">Diploma / Professional Programs</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 1,550 – € 15,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">PhD / Doctorate</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 1,550 – € 25,600+</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#0a1e38]">
                    <td className="py-4 px-6">Main Intakes</td>
                    <td className="py-4 px-6 text-center text-[#e52928]">
                      February (Spring) & September (Autumn)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500">
            * Note: Medical programs (such as Medicine / Dentistry at RSU or LU) range between €10,000 and €13,000 annually. Contact our counselors for exact department fee sheets.
          </p>

        </div>
      </section>

      {/* =========================================================
          7. MONTHLY COST OF LIVING (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Monthly Cost of Living in Latvia"
            subtitle="Living costs depend on the city, accommodation, and personal lifestyle. Riga may have slightly different expenses compared with regional cities."
            variant="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Accommodation",
                amount: "€200 – €400+ / month",
                desc: "Student dormitories and shared private apartments in Riga, Liepāja, and Valmiera."
              },
              {
                title: "Food & Groceries",
                amount: "€150 – €250+ / month",
                desc: "Supermarket groceries (Rimi, Maxima) and affordable university campus cafeterias."
              },
              {
                title: "Transportation",
                amount: "€15 – €30+ / month",
                desc: "Highly subsidized monthly student transit cards for trams, trolleybuses, and buses in Riga."
              },
              {
                title: "Internet & Mobile",
                amount: "€15 – €25+ / month",
                desc: "Latvia ranks among the global leaders in high-speed fiber broadband and unlimited 5G mobile packages."
              },
              {
                title: "Utilities",
                amount: "€60 – €100+ / month",
                desc: "Heating, electricity, and water (fluctuates during colder winter heating periods)."
              },
              {
                title: "Personal & Leisure",
                amount: "€50 – €100+ / month",
                desc: "Cinema, sports clubs, weekend trips across Baltic beaches and nature reserves."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#22c55e]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-xs font-black px-2.5 py-1 rounded bg-[#22c55e] text-slate-950">
                    {item.amount}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 text-center">
            <span className="px-2 py-0.5 rounded bg-white/20 text-white border border-white/30 text-[11px] font-black uppercase tracking-wider mr-2">Tip</span><span className="font-semibold text-white">Budget Recommendation:</span> Total average monthly living expenses in Latvia typically range from <span className="text-[#22c55e] font-bold">€450 to €750</span>, making it one of Europe&apos;s most economical student destinations.
          </div>

        </div>
      </section>

      {/* =========================================================
          8. WEATHER IN LATVIA
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Weather in Latvia"
            subtitle="Latvia enjoys four distinct European seasons with mild summers, golden autumns, snowy winters, and fresh springs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Summer",
                months: "June – August",
                iconSvg: "summer",
                desc: "Generally mild to warm with long daylight hours. Perfect for exploring Jurmala's white sandy beaches."
              },
              {
                season: "Autumn",
                months: "September – November",
                iconSvg: "autumn",
                desc: "Cool with changing weather and golden forests across Gauja National Park."
              },
              {
                season: "Winter",
                months: "December – February",
                iconSvg: "winter",
                desc: "Cold with snowfall possible. Cosy historic cafes and picturesque snow-covered old towns."
              },
              {
                season: "Spring",
                months: "March – May",
                iconSvg: "spring",
                desc: "Cool to mild with gradually increasing temperatures and blossoming city parks."
              }
            ].map((w, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3"><svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2" /><path strokeWidth="2" strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>
                <h3 className="text-xl font-black text-[#0a1e38]">{w.season}</h3>
                <div className="text-xs font-bold text-[#e52928] uppercase mt-0.5 mb-2.5">
                  {w.months}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          9. POPULAR STUDENT CITIES & REGIONS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Popular Student Cities & Regions in Latvia"
            subtitle="Discover Latvia's principal academic centres offering high-standard facilities and welcoming communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                city: "RIGA",
                tagline: "The Capital & Primary Educational Hub",
                desc: "The capital and the country's major centre for higher education, business, international connectivity, and vibrant student life."
              },
              {
                city: "DAUGAVPILS",
                tagline: "Multicultural Regional Center",
                desc: "A significant regional city located in southeastern Latvia offering recognized universities, music academies, and a rich cultural heritage."
              },
              {
                city: "LIEPĀJA",
                tagline: "The Coastal Academic City",
                desc: "A dynamic coastal port city offering a refreshing seaside student lifestyle, engineering facilities, and creative arts programs."
              },
              {
                city: "VALMIERA",
                tagline: "Business & Applied Tech Cluster",
                desc: "A progressive regional centre closely associated with higher education, digital business, cyber research, and high-tech startups."
              },
              {
                city: "VENTSPILS",
                tagline: "Port City of Applied Sciences",
                desc: "A coastal city recognized for pioneering opportunities in applied sciences, satellite engineering, translation studies, and IT."
              },
              {
                city: "JELGAVA",
                tagline: "Agricultural & Bio-Sciences Capital",
                desc: "Home to the Latvia University of Life Sciences and Technologies situated in the historic Jelgava Palace."
              }
            ].map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#e52928] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] tracking-tight">
                    {c.city}
                  </h3>
                  <span className="text-xs font-bold text-[#e52928] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    Academic Hub
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 mb-3">{c.tagline}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {c.desc}
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
            title="Frequently Asked Questions: Study in Latvia"
            subtitle="Everything you need to know about academic admissions, residence permits, and student life in Latvia."
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
          11. START YOUR STUDY JOURNEY IN LATVIA (Consultation Form)
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#9e3039] text-xs font-bold uppercase tracking-wider">
                Certified Latvia Admission Guidance
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Start Your Study Journey in Latvia
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Get personalised guidance for course selection, university applications, AIC credential verification, visa documentation, and your Latvia student residence permit.
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Direct State University & Technical Institute Lodgements</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Academic Information Centre (AIC) Recognition Support</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Latvia Student Visa & Residence Permit (TRP) Filing</span>
                </div>
              </div>

              {/* Direct Call Info */}
              <div className="pt-2">
                <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">
                  Talk to Umang Career Consultancy Today:
                </div>
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center gap-3 text-xl sm:text-2xl font-black text-[#0a1e38] hover:text-[#e52928] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e52928] text-white flex items-center justify-center shadow-md">
                    <PhoneIcon />
                  </div>
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <h3 className="text-2xl font-black text-[#0a1e38]">
                    Inquiry Received for Latvia!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our Baltic education specialist will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
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
                        placeholder="e.g. Priyansh Patel"
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
                        placeholder="e.g. priyansh@example.com"
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
                        <option value="Business & Management">Business & Management</option>
                        <option value="Engineering & Technology">Engineering & Technology</option>
                        <option value="Medicine & Health Sciences">Medicine & Health Sciences (RSU)</option>
                        <option value="Data Science & Artificial Intelligence">Data Science & Artificial Intelligence</option>
                        <option value="Architecture & Design">Architecture & Design</option>
                        <option value="Social Sciences">Social Sciences</option>
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
                        <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                        <option value="Master's Degree">Master&apos;s Degree</option>
                        <option value="Diploma / Professional">Diploma / Professional</option>
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
                        <option value="September 2026">September 2026 (Autumn)</option>
                        <option value="February 2027">February 2027 (Spring)</option>
                        <option value="September 2027">September 2027 (Autumn)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                  >
                    Submit Free Consultation Request for Latvia
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Free Initial Assessment. Certified European admission counselors.
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
              Personalized Latvia Admission Guidance
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
