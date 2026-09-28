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

function HospitalityIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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

function ScienceIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
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
export default function HungaryStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Medicine & Health Sci.",
    intake: "September 2026",
    level: "Bachelor's / One-Tier Master"
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
        course: "Medicine & Health Sci.",
        intake: "September 2026",
        level: "Bachelor's / One-Tier Master"
      });
    }, 4500);
  };

  const FAQS = [
    {
      q: "What is the medium of instruction in Hungarian universities?",
      a: "Hungarian universities offer more than 500 accredited Bachelor's, Master's, and Doctoral degree programs taught 100% in English across medicine, engineering, business, computing, and social sciences."
    },
    {
      q: "Can I work part-time during my studies in Hungary?",
      a: "Yes! International students holding a valid Hungarian student residence permit can work part-time up to 24 hours per week during study semesters and up to 66 working days (or 90 consecutive days) during official academic breaks."
    },
    {
      q: "Can I stay in Hungary after completing my studies?",
      a: "Yes! Graduating international students can apply for the 'Study-to-Work' (Tanulmányi célú tartózkodási engedély) residence permit, granting up to 9 months to seek qualified employment or start a business within Hungary and the European Union."
    },
    {
      q: "Can I bring my family with me while studying in Hungary?",
      a: "Family reunification is generally available for master's or doctoral degree candidates and long-term residence permit holders who demonstrate sufficient accommodation and financial means under the Hungarian National Directorate-General for Aliens Policing (OIF)."
    },
    {
      q: "What is the Stipendium Hungaricum Scholarship?",
      a: "Stipendium Hungaricum is the Hungarian government's flagship international scholarship. It covers full tuition fees, provides a monthly living stipend, contributes to accommodation costs, and includes comprehensive health insurance for thousands of international students each year."
    },
    {
      q: "Why is Hungary world-famous for Medical / MBBS studies?",
      a: "Hungarian medical degrees (such as those from Semmelweis University, University of Debrecen, University of Pécs, and University of Szeged) are fully recognized worldwide by the WHO, GMC (UK), USMLE (USA), and National Medical Commission (NMC India). Tuition is competitive (€12,000–€18,000/year) with high-standard clinical hospitals."
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ce2939] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
                <span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">HU</span>
                <span>Central European Higher Education</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0a1e38] tracking-tight leading-none uppercase">
                HUNGARY
              </h1>

              <p className="mt-5 text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience prestigious European degrees, world-renowned medical and engineering faculties, affordable tuition starting from €1,500, and full Schengen mobility.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Apply for Hungary</span>
                  <span>→</span>
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Celebratory Student Graphic with Hungarian Tricolor Wave */}
            <div
              className={`lg:col-span-6 flex justify-center items-center transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center anim-gentle-float">
                <div className="relative w-full h-full p-2 transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/hungary-hero.png"
                    alt="Study Abroad in Hungary Student - Umang Career Consultancy"
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
          2. ABOUT HUNGARY
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                  About Hungary
                </h2>
                <div className="w-16 h-1.5 bg-[#e52928] rounded-full mt-2 mb-4" />
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Located in Central Europe, Hungary is a landlocked Schengen member nation renowned for historic architecture, high-performing automotive and tech economies, and internationally accredited education.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                {[
                  "Located in the heart of Central Europe, bordering 7 European nations",
                  "Landlocked country bisected by the majestic Danube River",
                  "Full member of the European Union & border-free Schengen Area",
                  "Official Language: Hungarian (with 500+ programs fully taught in English)",
                  "Key economic sectors: automotive, IT, pharmaceuticals & tourism",
                  "High-quality engineering, computer science, and medical programs",
                  "Emerging European market economy with exceptionally low living costs",
                  "Temperate continental climate with hot summers and snowy winters",
                  "Home to centuries-old universities with 14 Nobel Prize laureates"
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

            {/* Right Column: Hungarian Parliament Landmark Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/destinations/hungary.jpg"
                  alt="Hungarian Parliament Building Budapest Danube"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-black bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    Budapest • Hungary
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-2">
                    Gothic Architectural Wonder on the Danube River
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          3. TOP COURSES IN HUNGARY (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Top Courses in Hungary"
            subtitle="Explore high-demand European university degrees recognized across the EU, UK, and worldwide."
            variant="dark"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-6">
            {[
              {
                title: "Business & Economics",
                icon: <BusinessIcon />,
                desc: "Finance, International Economics, Accounting & Marketing."
              },
              {
                title: "Computer Science & IT",
                icon: <ComputerIcon />,
                desc: "Software Engineering, AI, Cloud Infrastructure & Cybersecurity."
              },
              {
                title: "Engineering & Tech",
                icon: <EngineeringIcon />,
                desc: "Automotive, Mechatronics, Chemical & Mechanical Engineering."
              },
              {
                title: "Hospitality & Tourism",
                icon: <HospitalityIcon />,
                desc: "International Tourism Management & Spa/Wellness Leadership."
              },
              {
                title: "Medicine & Health Sci.",
                icon: <MedicineIcon />,
                desc: "General Medicine (MD), Dentistry (DMD) & Pharmacy (PharmD)."
              },
              {
                title: "Applied Sciences",
                icon: <ScienceIcon />,
                desc: "Biotechnology, Environmental Science & Agricultural Tech."
              }
            ].map((c, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#22c55e]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-sm"
              >
                <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110">
                  {c.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug group-hover:text-[#22c55e] transition-colors">
                  {c.title}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          4. WHY IS HUNGARY AN IDEAL DESTINATION?
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Why Is Hungary an Ideal Study Abroad Destination?"
            subtitle="Hungary combines historic European prestige, high-standard teaching, affordable living costs, and generous scholarship programs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Fisherman's Bastion Photo */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                <Image
                  src="/destinations/hungary-fishermans.jpg"
                  alt="Fisherman's Bastion Budapest Hungary"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs uppercase font-extrabold tracking-wider bg-[#0a1e38]/80 backdrop-blur-md px-3 py-1 rounded-md inline-block">
                    Fisherman&apos;s Bastion • Budapest
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bulleted list with Circular Checkmark Badges */}
            <div className="lg:col-span-6 space-y-3">
              {[
                "Globally recognized degrees under the European Higher Education Area (Bologna process)",
                "High-quality education backed by centuries-old universities and 14 Nobel laureates",
                "Affordable tuition rates starting from just €1,500 per academic year",
                "500+ programs taught entirely in English without requiring Hungarian language fluency",
                "Extremely low cost of living compared to Western and Northern Europe (€370–€800/mo)",
                "Cosmopolitan community welcoming international students from over 100 countries",
                "Global reputation in Medicine, Dentistry, Engineering, and Natural Sciences",
                "Stipendium Hungaricum scholarships providing full tuition waiver and monthly stipend",
                "Post-study work options (Study-to-Work residence permit up to 9 months)"
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
          5. TOP UNIVERSITIES IN HUNGARY (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Top Universities in Hungary"
            subtitle="Explore world-ranked state universities, medical academies, and polytechnics across Hungary's premier academic cities."
            variant="dark"
          />

          {/* 10 Circular Institution Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: "Corvinus University", acronym: "CORVINUS" },
              { name: "Semmelweis University", acronym: "SEMMELWEIS" },
              { name: "University of Pécs", acronym: "PÉCS" },
              { name: "University of Debrecen", acronym: "DEBRECEN" },
              { name: "University of Szeged", acronym: "SZEGED" },
              { name: "Budapest Univ. of Tech (BME)", acronym: "BME" },
              { name: "Eötvös Loránd University", acronym: "ELTE" },
              { name: "University of Miskolc", acronym: "MISKOLC" },
              { name: "Széchenyi István Univ.", acronym: "SZE" },
              { name: "IBS Business School", acronym: "IBS" }
            ].map((uni, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white text-[#0a1e38] flex flex-col items-center justify-center p-3 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/20 border-2 border-white/80">
                  <div className="font-black text-xs sm:text-sm tracking-wider uppercase text-[#0a1e38] group-hover:text-[#e52928] transition-colors">
                    {uni.acronym}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">
                    Hungary
                  </div>
                </div>

                <div className="mt-3.5 text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-snug max-w-[130px]">
                  {uni.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Stipendium Hungaricum Partner:</span> Umang Career Consultancy guides you through university choices, direct entrance test coaching, and scholarship dossier applications.
          </div>

        </div>
      </section>

      {/* =========================================================
          6. HUNGARY TUITION FEES TABLE
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Hungary Tuition Fees"
            subtitle="Hungary offers some of the most competitive higher education tuition rates in the entire European Union."
          />

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-[#0a1e38] border-b border-slate-200 font-extrabold">
                    <th className="py-4 px-6">Courses / Program</th>
                    <th className="py-4 px-6 text-center">Minimum Annual</th>
                    <th className="py-4 px-6 text-center">Maximum Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">Bachelor&apos;s Degree</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 1,500</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 8,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">Master&apos;s Degree</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 6,000</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 15,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">Foundation / Preparatory</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 2,000</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 5,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">Ph.D / Doctorate</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 5,000</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 15,000</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#0a1e38]">
                    <td className="py-4 px-6">Major Intakes</td>
                    <td colSpan={2} className="py-4 px-6 text-center text-[#e52928]">
                      February (Spring) & September (Autumn)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 text-center">
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-black uppercase tracking-wider mr-2">Medical Note</span><span className="font-semibold text-slate-900">Medical Degree Note:</span> General Medicine (MD), Dentistry, and Pharmacy programs at Semmelweis, Debrecen, Pécs, and Szeged range between €12,000 and €18,000 annually, with high global licensing pass rates.
          </div>

        </div>
      </section>

      {/* =========================================================
          7. MONTHLY COST OF LIVING (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Monthly Cost of Living in Hungary"
            subtitle="Hungary is recognized as one of the most budget-friendly student destinations in the European Union."
            variant="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Accommodation",
                amount: "€200 – €450",
                desc: "On-campus university dormitories (from ~€120–€180/mo) or shared private apartments in Budapest and university towns."
              },
              {
                title: "Food & Groceries",
                amount: "€60 – €150",
                desc: "Affordable supermarket shopping (Spar, Aldi, Lidl) and cheap student university mensa meals."
              },
              {
                title: "Transportation",
                amount: "€10 – €20",
                desc: "Monthly Budapest student transit pass (BKK) costs only ~€10 (3,450 HUF) covering unlimited metro, tram, and bus rides!"
              },
              {
                title: "Internet & Mobile",
                amount: "€10 – €20",
                desc: "Ultra-fast European broadband and generous 5G mobile packages from Yettel, Telekom, or Vodafone."
              },
              {
                title: "Utilities",
                amount: "€40 – €80",
                desc: "Heating, electricity, and water shared across flatmates."
              },
              {
                title: "Personal / Leisure",
                amount: "€50 – €100",
                desc: "Historic thermal bath visits, cinema, dining out, and weekend rail travel across Central Europe."
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
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Total Living Budget:</span> The typical monthly budget for an international student in Hungary is only <span className="text-[#22c55e] font-bold">€370 to €820</span>, offering unmatched European value for money.
          </div>

        </div>
      </section>

      {/* =========================================================
          8. WEATHER IN HUNGARY
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Weather in Hungary"
            subtitle="Hungary has a continental climate with four distinct seasons: hot summers, golden autumns, cold snowy winters, and fresh springs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Summer",
                temp: "20℃ - 35℃",
                iconSvg: "summer",
                desc: "Warm to hot sunshine. Students enjoy vibrant open-air festivals, ruin pub terraces, and weekends at Lake Balaton."
              },
              {
                season: "Autumn",
                temp: "10℃ - 22℃",
                iconSvg: "autumn",
                desc: "Mild and pleasant with golden vineyards, crisp air, and comfortable temperatures for exploring historical streets."
              },
              {
                season: "Winter",
                temp: "-5℃ - 5℃",
                iconSvg: "winter",
                desc: "Cold with snowfall possible. Steamy historic outdoor thermal baths (Széchenyi, Gellért) and festive winter markets."
              },
              {
                season: "Spring",
                temp: "8℃ - 20℃",
                iconSvg: "spring",
                desc: "Pleasant warming temperatures, blooming Margaret Island gardens, and ideal conditions for city cycling."
              }
            ].map((w, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3"><svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2" /><path strokeWidth="2" strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>
                <h3 className="text-xl font-black text-[#0a1e38]">{w.season}</h3>
                <div className="text-base font-extrabold text-[#e52928] mt-1 mb-2.5">
                  {w.temp}
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
          9. POPULAR STUDENT CITIES & PROVINCES
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Popular Student Cities & Regions in Hungary"
            subtitle="Discover Hungary's major higher education hubs, renowned for world-class universities and student-friendly communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                city: "BUDAPEST",
                tagline: "The Pearl of the Danube & Educational Capital",
                desc: "The bustling capital city, home to Corvinus, ELTE, BME, and Semmelweis. Known for thermal baths, vibrant tech startups, and ruin bar culture."
              },
              {
                city: "DEBRECEN",
                tagline: "Medical & Pharmaceutical Hub of the East",
                desc: "Hungary's second-largest city, famous for the University of Debrecen, a massive international student community, and biomedical industries."
              },
              {
                city: "SZEGED",
                tagline: "City of Sunshine & Nobel Heritage",
                desc: "Home to the University of Szeged (where Vitamin C was discovered by Albert Szent-Györgyi) and top biological research clusters."
              },
              {
                city: "PÉCS",
                tagline: "Historic Mediterranean University City",
                desc: "Founded in 1367, Hungary's oldest university city features Roman monuments, a warm microclimate, and a world-renowned medical school."
              },
              {
                city: "MISKOLC",
                tagline: "Industrial Tech & Engineering Center",
                desc: "A prominent industrial and technical education center nestled near the Bükk mountains, offering specialized mechanical and materials engineering."
              },
              {
                city: "GYŐR",
                tagline: "Automotive Capital & Audi Engineering Hub",
                desc: "Located on the Vienna-Budapest axis, Győr hosts Széchenyi István University with direct industry ties to the world's largest engine factory (Audi)."
              },
              {
                city: "SZÉKESFEHÉRVÁR",
                tagline: "Historic Royal Seat & Modern Manufacturing",
                desc: "A coronation seat of Hungarian kings now transformed into a major industrial and electronics manufacturing center with university satellite faculties."
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
                    Student City
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
            title="Frequently Asked Questions: Study in Hungary"
            subtitle="Everything you need to know regarding admissions, scholarships, work rights, and visas in Hungary."
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
          11. START YOUR STUDY JOURNEY IN HUNGARY (Consultation Form)
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                To Make Study In Hungary Hassle-Free
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Start Your Study Journey in Hungary
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Get personalised guidance for course selection, entrance test preparation, Stipendium Hungaricum scholarship filing, and your Hungary student D-visa application.
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Direct State University & Medical Academy Admissions</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Stipendium Hungaricum Scholarship Dossier Review</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Hungarian Embassy & VFS Visa Interview Coaching</span>
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
                    Inquiry Received for Hungary!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our Hungarian education counselor will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
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
                        <option value="Medicine & Health Sci.">Medicine & Health Sci. (Semmelweis/Debrecen)</option>
                        <option value="Computer Science & IT">Computer Science & IT</option>
                        <option value="Engineering & Technology">Engineering & Technology</option>
                        <option value="Business & Economics">Business & Economics</option>
                        <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                        <option value="Applied Sciences">Applied Sciences & Biotech</option>
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
                        <option value="Bachelor's / One-Tier Master">Bachelor&apos;s / One-Tier Master</option>
                        <option value="Master's Degree">Master&apos;s Degree</option>
                        <option value="Foundation / Prep Course">Foundation / Prep Course</option>
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
                        <option value="September 2026">September 2026 (Autumn - Major)</option>
                        <option value="February 2027">February 2027 (Spring)</option>
                        <option value="September 2027">September 2027 (Autumn)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                  >
                    Submit Free Consultation Request for Hungary
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Free Initial Assessment. Certified European admission & visa specialists.
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
              Personalized Hungary Admission Guidance
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
