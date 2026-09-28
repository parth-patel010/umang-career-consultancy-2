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

function HospitalityIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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

function HealthIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

function LawIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l9-4 9 4M4 10h16M4 14h16M4 18h16" />
    </svg>
  );
}

function SportsIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
export default function MaltaStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Tourism and Hospitality",
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
        course: "Tourism and Hospitality",
        intake: "September 2026",
        level: "Bachelor's Degree"
      });
    }, 4500);
  };

  const FAQS = [
    {
      q: "Is English widely spoken in Malta?",
      a: "Yes! English is one of Malta's two official languages, alongside Maltese. All university and college courses for international students are taught 100% in English, and English is used across government, business, signage, and everyday community life."
    },
    {
      q: "Can I work while studying in Malta?",
      a: "Yes! Under Maltese immigration regulations, non-EU international students enrolled in full-time courses exceeding 90 days are legally permitted to work part-time up to 20 hours per week after their initial 90 days, via a streamlined Jobsplus student employment license."
    },
    {
      q: "How long does it take to process a Malta student visa?",
      a: "Malta student national visa (D-Visa) processing typically takes between 4 to 8 weeks through VFS Global and the Central Visa Unit (CVU) in Malta. Early application lodgement ensures smooth document verification and pre-departure flight booking."
    },
    {
      q: "Can I stay in Malta after completing my studies?",
      a: "Yes! Graduating students from accredited tertiary institutions in Malta can apply for a post-study residence permit (typically up to 9 months) to seek high-skilled employment or establish an enterprise. Upon securing employment, you can transition to a Single Work Permit."
    },
    {
      q: "Is IELTS mandatory for studying in Malta?",
      a: "Not in all cases! Many Maltese higher education institutions and private colleges accept alternative proof of English proficiency, such as an English Medium of Instruction (MOI) letter from your previous school/college, Class 12 English scores (typically 70%+), or internal online language interviews."
    },
    {
      q: "Why is Malta popular among Indian students?",
      a: "Malta combines native English-speaking education, European Union quality, affordable tuition (€5,500 – €8,500/year), low living costs, virtually zero crime, an active Indian diaspora with Indian restaurants and grocery stores, and full Schengen travel access across 29 European nations."
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e52928] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
                <span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">MT</span>
                <span>English-Speaking Mediterranean Schengen Hub</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0a1e38] tracking-tight leading-none uppercase">
                MALTA
              </h1>

              <p className="mt-5 text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Study in the heart of the Mediterranean with 100% English-taught programs, low tuition fees, part-time work rights, and access to the 29-country Schengen zone.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Apply for Malta</span>
                  <span>→</span>
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Celebratory Student Graphic with Maltese Flag Wave */}
            <div
              className={`lg:col-span-6 flex justify-center items-center transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center anim-gentle-float">
                <div className="relative w-full h-full p-2 transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/malta-hero.png"
                    alt="Study Abroad in Malta Student - Umang Career Consultancy"
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
          2. ABOUT MALTA
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                  About Malta
                </h2>
                <div className="w-16 h-1.5 bg-[#e52928] rounded-full mt-2 mb-4" />
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Malta is an archipelago in the central Mediterranean, between Sicily and the North African coast, known for historic sites, sunny climate, and vibrant European higher education.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                {[
                  "Island Nation in the heart of the Mediterranean Sea",
                  "English is one of Malta's official languages (used everywhere)",
                  "Legal part-time job opportunities (up to 20 hrs/week) & internships",
                  "Multicultural, friendly, and exceptionally inclusive society",
                  "Full member of the European Union & border-free Schengen Area",
                  "Remarkably low national unemployment rate of only 0.7%",
                  "Well-developed & budget-friendly student accommodation options",
                  "Pleasant coastal, sunny, and breezy Mediterranean climate year-round"
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

            {/* Right Column: Valletta Harbor Landmark Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/destinations/malta.jpg"
                  alt="Valletta Harbor Grand Harbour Malta"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-black bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    Valletta • Malta
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-2">
                    Mediterranean Capital of Culture & European Commerce
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          3. TOP COURSES IN MALTA (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Top Courses in Malta"
            subtitle="Explore accredited British and European degree programs in in-demand disciplines."
            variant="dark"
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-6">
            {[
              {
                title: "Business And Mgt.",
                icon: <BusinessIcon />,
                desc: "MBA, International Management & Entrepreneurship."
              },
              {
                title: "Information Technology",
                icon: <ComputerIcon />,
                desc: "Cybersecurity, Cloud Computing & iGaming Systems."
              },
              {
                title: "Tourism and Hospitality",
                icon: <HospitalityIcon />,
                desc: "World-class International Hotel & Resort Management."
              },
              {
                title: "Education & Training",
                icon: <EducationIcon />,
                desc: "Pedagogy, Educational Leadership & Language Training."
              },
              {
                title: "Engineering",
                icon: <EngineeringIcon />,
                desc: "Electrical, Marine Engineering & Sustainable Energy."
              },
              {
                title: "Healthcare",
                icon: <HealthIcon />,
                desc: "Nursing, Public Health & Medical Laboratory Sciences."
              },
              {
                title: "Social Science",
                icon: <SocialScienceIcon />,
                desc: "Psychology, International Relations & Human Resources."
              },
              {
                title: "Architecture & Design",
                icon: <ArchitectureIcon />,
                desc: "Built Environment, Interior Architecture & Urban Design."
              },
              {
                title: "Law & Legal Studies",
                icon: <LawIcon />,
                desc: "Maritime Law, International Commercial Arbitration & EU Law."
              },
              {
                title: "Sports & Fitness",
                icon: <SportsIcon />,
                desc: "Sports Science, Physical Coaching & Athletic Management."
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
          4. WHY IS MALTA AN IDEAL DESTINATION?
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Why Is Malta an Ideal Study Abroad Destination?"
            subtitle="Malta offers international students a rare combination of pure English-speaking education, safety, low tuition, and European career avenues."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Mdina Historic Old City Photo */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                <Image
                  src="/destinations/malta-mdina.jpg"
                  alt="Mdina Historic Walled City Malta"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs uppercase font-extrabold tracking-wider bg-[#0a1e38]/80 backdrop-blur-md px-3 py-1 rounded-md inline-block">
                    Mdina • The Silent City of Malta
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bulleted list with Circular Checkmark Badges */}
            <div className="lg:col-span-6 space-y-3">
              {[
                "Distraction-Free, safe and peaceful Mediterranean learning environment",
                "Strategic location in Europe bridging the EU, UK, and international commerce",
                "100% English-taught programs with British higher education traditions",
                "High-quality education without the exorbitant price tag of other Western nations",
                "Exciting job opportunities supported by an unprecedented 0.7% unemployment rate",
                "Path to Europe with visa-free travel privileges across all 29 Schengen member states",
                "Prominent universities and established UK branch campuses (QMUL, Middlesex)",
                "Thriving and warm Indian community with Indian groceries, temples, and restaurants"
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
          5. PROMINENT UNIVERSITIES & INSTITUTIONS IN MALTA (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Prominent Universities & Institutions in Malta"
            subtitle="Explore accredited public universities, polytechnics, and prestigious international branch campuses across the Maltese islands."
            variant="dark"
          />

          {/* 10 Circular Institution Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: "University of Malta", acronym: "UM" },
              { name: "MCAST Polytechnic", acronym: "MCAST" },
              { name: "Queen Mary Univ. of London", acronym: "QMUL" },
              { name: "American Univ. of Malta", acronym: "AUM" },
              { name: "Middlesex University", acronym: "MDX" },
              { name: "London School of Commerce", acronym: "LSC" },
              { name: "Global College Malta", acronym: "GCM" },
              { name: "Inst. of Tourism Studies", acronym: "ITS" },
              { name: "European Inst. of Higher Ed.", acronym: "EIHE" },
              { name: "Ascencia Malta Business", acronym: "ASCENCIA" }
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
                    Malta
                  </div>
                </div>

                <div className="mt-3.5 text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-snug max-w-[130px]">
                  {uni.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Admissions & Visa Advantage:</span> Malta offers fast-track admission turnarounds and streamlined visa assessment through VFS Global and Identity Malta.
          </div>

        </div>
      </section>

      {/* =========================================================
          6. MALTA TUITION FEES TABLE
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Malta Tuition Fees"
            subtitle="Tuition varies depending on whether you enroll in public universities, technical diplomas, or international branch campuses."
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
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 5,500</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 20,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">Master&apos;s Degree</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 6,500</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 25,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">Diploma & Higher Certificate</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 2,500</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 8,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">Ph.D / Doctorate</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 5,500</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 30,000</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#0a1e38]">
                    <td className="py-4 px-6">Major Intakes</td>
                    <td colSpan={2} className="py-4 px-6 text-center text-[#e52928]">
                      January, March, June & September
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 text-center">
            <span className="px-2 py-0.5 rounded bg-red-100 text-[#e52928] border border-red-200 text-[11px] font-black uppercase tracking-wider mr-2">Tip</span><span className="font-semibold text-slate-900">Flexible Rolling Intakes:</span> Unlike many European countries with only one or two intakes, Malta offers four rolling intakes (January, March, June, and September), enabling students to start without losing academic time.
          </div>

        </div>
      </section>

      {/* =========================================================
          7. MONTHLY COST OF LIVING (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Monthly Cost of Living in Malta"
            subtitle="Malta provides an affordable Mediterranean student lifestyle with accessible housing and subsidized living."
            variant="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Accommodation",
                amount: "€600 – €1,200",
                desc: "Private studio or apartment. Shared student flat rooms typically range from €250 – €450/month."
              },
              {
                title: "Food & Groceries",
                amount: "€180 – €370",
                desc: "Local supermarkets (Lidl, Pavi, Greens) and fresh Mediterranean market produce."
              },
              {
                title: "Transportation",
                amount: "€26 – €50",
                desc: "Eligible students holding a personalized Tallinja bus card travel for free across the Maltese bus network!"
              },
              {
                title: "Internet & Mobile",
                amount: "€25 – €45",
                desc: "Unlimited 5G mobile packages and high-speed residential fiber broadband."
              },
              {
                title: "Utilities",
                amount: "€80 – €150",
                desc: "Electricity, water, and cooling (AC usage during warm summer periods)."
              },
              {
                title: "Personal / Leisure",
                amount: "€100 – €200",
                desc: "Dining out, weekend beach excursions, water sports, and historical museum visits."
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
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Student Budget:</span> Average monthly student expenses in Malta typically range between <span className="text-[#22c55e] font-bold">€500 and €800</span> for shared accommodation, easily manageable with part-time work.
          </div>

        </div>
      </section>

      {/* =========================================================
          8. WEATHER IN MALTA
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Weather in Malta"
            subtitle="Malta enjoys one of the sunniest climates in Europe with over 300 days of sunshine each year."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Summer",
                temp: "26℃ - 34℃",
                iconSvg: "summer",
                desc: "Warm, sunny, and dry. Ideal for beach swimming, boat cruises to the Blue Lagoon, and coastal outdoor festivals."
              },
              {
                season: "Autumn",
                temp: "18℃ - 28℃",
                iconSvg: "autumn",
                desc: "Pleasant, warm, and breezy with comfortable temperatures for academic campus life and outdoor sightseeing."
              },
              {
                season: "Winter",
                temp: "10℃ - 17℃",
                iconSvg: "winter",
                desc: "Extremely mild with zero freezing temperatures or snow. Green landscapes and crisp Mediterranean sea breezes."
              },
              {
                season: "Spring",
                temp: "15℃ - 24℃",
                iconSvg: "spring",
                desc: "Delightful warm sunshine, fresh sea breezes, and blooming coastal flora."
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
          9. REGIONS / PROVINCES OF MALTA
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Regions of Malta"
            subtitle="Discover Malta's unique geographical and administrative regions offering vibrant student hubs and coastal living."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                region: "Central Region",
                tagline: "Educational & Commercial Core",
                desc: "Encompassing Msida (home to the University of Malta), Birkirkara, and Attard. Packed with student housing, libraries, and tech offices."
              },
              {
                region: "Northern Region",
                tagline: "Coastal Bays & Active Student Life",
                desc: "Covering St. Paul's Bay, Mellieħa, and Qawra. Known for scenic Mediterranean beaches, student apartment rentals, and watersports."
              },
              {
                region: "Southern Region",
                tagline: "Historic Harbor & Three Cities",
                desc: "Home to the historic Grand Harbour, Vittoriosa, Senglea, and Cospicua, featuring the American University of Malta campus."
              },
              {
                region: "Southeast Region",
                tagline: "Traditional Culture & Maritime Industry",
                desc: "Includes Marsaxlokk fishing village, Birżebbuġa, and Żejtun, offering authentic Maltese culture and budget housing."
              },
              {
                region: "Gozo Region",
                tagline: "Tranquil Island Oasis & Medical Hub",
                desc: "Malta's sister island featuring Queen Mary University of London medical campus, green hills, and a serene, distraction-free environment."
              },
              {
                region: "Northern Harbour",
                tagline: "Sliema & St. Julian's Metropolitan Hub",
                desc: "Malta's financial and lifestyle capital with multinational iGaming headquarters, language schools, and seaside promenades."
              }
            ].map((r, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#e52928] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] tracking-tight">
                    {r.region}
                  </h3>
                  <span className="text-xs font-bold text-[#e52928] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    Maltese Region
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 mb-3">{r.tagline}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {r.desc}
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
            title="Frequently Asked Questions: Study in Malta"
            subtitle="Clear answers on English language requirements, work permissions, visa timelines, and post-study opportunities in Malta."
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
          11. START YOUR STUDY JOURNEY IN MALTA (Consultation Form)
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                To Make Study In Malta Hassle-Free
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Start Your Study Journey in Malta
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Get personalised guidance for course selection, admission offers, document notarization, VFS visa filing, and your Malta student residence card.
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Direct University & College Offer Letters (Within 5-7 Days)</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Central Visa Unit (CVU) & VFS Appointment Support</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Assistance with Jobsplus Student Work License</span>
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
                    Inquiry Received for Malta!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our Malta admissions counselor will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
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
                        <option value="Tourism and Hospitality">Tourism and Hospitality</option>
                        <option value="Business And Mgt.">Business And Mgt. (MBA / BBA)</option>
                        <option value="Information Technology">Information Technology & iGaming</option>
                        <option value="Healthcare">Healthcare & Nursing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Education & Training">Education & Training</option>
                        <option value="Law And Legal Studies">Law And Legal Studies</option>
                        <option value="Architecture and Design">Architecture and Design</option>
                        <option value="Social Science">Social Science</option>
                        <option value="Sports">Sports & Fitness</option>
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
                        <option value="Master's Degree">Master&apos;s Degree / MBA</option>
                        <option value="Diploma">Diploma / Advanced Certificate</option>
                        <option value="Ph.D">Ph.D / Doctorate</option>
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
                        <option value="September 2026">September 2026 (Major)</option>
                        <option value="January 2027">January 2027 (Winter)</option>
                        <option value="March 2027">March 2027 (Spring)</option>
                        <option value="June 2027">June 2027 (Summer)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                  >
                    Submit Free Consultation Request for Malta
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Free Initial Assessment. Certified Malta student visa counselors.
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
              Personalized Malta Admission Guidance
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
