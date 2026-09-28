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

function DataAiIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

function HospitalityIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
export default function UKStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Business & Management",
    intake: "September 2026",
    level: "1-Year Master's Degree"
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
        course: "Business & Management",
        intake: "September 2026",
        level: "1-Year Master's Degree"
      });
    }, 4500);
  };

  const FAQS = [
    {
      q: "Can IELTS be waived for admission to a UK university?",
      a: "Yes! Many UK universities offer IELTS waivers for Indian students who scored 70% or higher in English in their Class 12 CBSE, ICSE, or select State Board exams, or who provide a recognized Medium of Instruction (MOI) certificate from their bachelor's degree."
    },
    {
      q: "Do I need GMAT for a Master's programme in the UK?",
      a: "Not necessarily. The vast majority of UK Master's and MBA programs evaluate candidates holistically based on undergraduate academic marks, work experience, letters of recommendation, and statement of purpose, without requiring GMAT or GRE scores."
    },
    {
      q: "Can my UK Student visa be extended?",
      a: "Yes. In eligible circumstances, you can apply to extend your Student visa from within the UK if you progress to a higher qualification level (e.g. from Bachelor's to Master's or Master's to PhD) or switch into the Graduate Route or Skilled Worker visa."
    },
    {
      q: "Should I choose a university based only on ranking?",
      a: "No single factor should determine your choice. It is crucial to evaluate course modules, industrial accreditations, teaching methodology, location and living costs, graduate employability rates, and scholarship availability alongside global rankings."
    },
    {
      q: "Can I work part-time while studying in the UK?",
      a: "Yes! Full-time degree-level students holding a UK Student visa are legally permitted to work up to 20 hours per week during term time and unlimited full-time hours during official vacation periods and holiday breaks."
    },
    {
      q: "Can I stay in the UK after graduation?",
      a: "Yes! The Graduate Route visa allows eligible graduates to stay and work (or look for work) in the UK for 2 years (or 3 years for doctoral / PhD graduates) after completing their eligible qualification, without requiring an employer sponsorship or minimum salary threshold."
    },
    {
      q: "Is an interview required for a UK Student visa?",
      a: "Some applicants may be invited to attend a short Credibility Interview conducted by UK Visas and Immigration (UKVI). The interview assesses your genuine student intent, course understanding, university choice, and financial preparation. Umang Career Consultancy conducts rigorous mock interview sessions."
    },
    {
      q: "Can I change my course after arriving in the UK?",
      a: "Changing courses may be permissible in select circumstances, provided the new course is at the same or higher level and academically related. However, students must comply with UKVI academic progression rules and may require an updated CAS."
    },
    {
      q: "Do design courses require a portfolio?",
      a: "Yes, creative arts, architecture, fashion, and industrial design programs usually request a creative portfolio showcasing your conceptual work, design sketches, and technical skills alongside your academic transcript."
    },
    {
      q: "How long does it take to receive a UK Student visa?",
      a: "Standard UK Student visa processing typically takes around 3 weeks from your biometrics appointment at VFS Global. Priority (5 working days) and Super Priority (next working day) expedited services are also available for urgent timelines."
    },
    {
      q: "How are scholarships awarded?",
      a: "Scholarships are awarded based on academic excellence, course subject, nationality, and background. Prestigious schemes include Chevening Scholarships, Commonwealth Awards, GREAT Scholarships, and university-specific automatic early-bird or merit tuition fee discounts (£1,500 – £10,000+)."
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#012169] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
                <span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">UK</span>
                <span>The Place of Discoveries, Innovation & Opportunity</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0a1e38] tracking-tight leading-tight uppercase">
                UNITED KINGDOM
              </h1>

              <div className="mt-3 text-lg sm:text-2xl font-extrabold text-[#e52928]">
                Build Skills. Build Your Future. More Than Just a Degree.
              </div>

              <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                The UK is a premier destination for international students, offering centuries of academic heritage, fast-track 1-year Master&apos;s degrees, and the 2-Year Graduate Route post-study work visa.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Apply for UK</span>
                  <span>→</span>
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Celebratory Student Graphic with Union Jack Ribbon */}
            <div
              className={`lg:col-span-6 flex justify-center items-center transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center anim-gentle-float">
                <div className="relative w-full h-full p-2 transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/uk-hero.png"
                    alt="Study Abroad in UK Student - Umang Career Consultancy"
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
          2. WHY STUDY IN THE UK? (AFFORDABLE, EMPLOYABLE, VALUABLE)
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Why Study in the UK?"
            subtitle="The UK combines established universities, diverse academic choices and a multicultural environment for international students."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: 3 Pillars */}
            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  title: "AFFORDABLE",
                  tag: "1-Year Master's Advantage",
                  iconSvg: "cost",
                  desc: "Many UK master's programs can be completed in just one year, potentially saving substantial tuition fees and full living costs compared with traditional two-year programs. Universities also offer an extensive range of merit scholarships and early-bird fee reductions."
                },
                {
                  title: "EMPLOYABLE",
                  tag: "Practical Industry Skills",
                  iconSvg: "growth",
                  desc: "UK universities provide direct opportunities to develop academic knowledge, practical skills and industry-focused experience through structured courses, real-world case studies, and state-of-the-art laboratory research facilities."
                },
                {
                  title: "VALUABLE",
                  tag: "Global Degree Prestige",
                  iconSvg: "degree",
                  desc: "Students can choose from a wide range of disciplines and specialised programs, allowing them to align their education with their academic interests and career goals. Qualifications from UK institutions are held in highest esteem by employers worldwide."
                }
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#e52928] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-lg bg-red-50 text-[#e52928] flex items-center justify-center shrink-0">
                      {pillar.iconSvg === "cost" ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      ) : pillar.iconSvg === "growth" ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                      )}
                    </span>
                    <h3 className="text-xl font-black text-[#0a1e38] tracking-tight">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-bold text-[#e52928] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {pillar.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-9">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Westminster / Big Ben Landmark Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/destinations/uk.jpg"
                  alt="Westminster Abbey and London Red Bus UK"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-black bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    London • United Kingdom
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-2">
                    Centuries of Global Academic & Cultural Heritage
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          3. POPULAR STUDY AREAS (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Popular Study Areas in the UK"
            subtitle="Explore high-demand academic disciplines delivering globally accredited UK qualifications."
            variant="dark"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Business & Management",
                icon: <BusinessIcon />,
                desc: "MBA, International Management, Strategy, Supply Chain & Entrepreneurship."
              },
              {
                title: "Computer Science & IT",
                icon: <ComputerIcon />,
                desc: "Software Engineering, Cloud Computing, Cybersecurity & Web Architectures."
              },
              {
                title: "Engineering & Technology",
                icon: <EngineeringIcon />,
                desc: "Mechanical, Civil, Aerospace, Sustainable Energy & Robotics."
              },
              {
                title: "Artificial Intelligence & Data Science",
                icon: <DataAiIcon />,
                desc: "Machine Learning, Big Data Analytics, Neural Networks & Algorithmic Design."
              },
              {
                title: "Finance & Accounting",
                icon: <FinanceIcon />,
                desc: "ACCA / CFA Accredited Accounting, Corporate Finance, FinTech & Risk."
              },
              {
                title: "Health & Life Sciences",
                icon: <HealthIcon />,
                desc: "Public Health, Biomedical Research, Pharmacology & Clinical Sciences."
              },
              {
                title: "Architecture & Design",
                icon: <ArchitectureIcon />,
                desc: "RIBA Certified Architecture, Landscape Design & Interior Environments."
              },
              {
                title: "Law & Social Sciences",
                icon: <LawIcon />,
                desc: "LLM International Commercial Law, Human Rights & International Relations."
              },
              {
                title: "Hospitality & Tourism",
                icon: <HospitalityIcon />,
                desc: "International Hotel Management, Event Planning & Luxury Tourism Operations."
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
          4. POST-STUDY WORK – GRADUATE ROUTE & UK-INDIA LINKS
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Post-Study Work & UK–India Student Opportunities"
            subtitle="The UK and India have strong educational, cultural and economic links, creating an established environment for Indian students."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Tower Bridge Photo */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                <Image
                  src="/destinations/uk-tower-bridge.jpg"
                  alt="Tower Bridge London United Kingdom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs uppercase font-extrabold tracking-wider bg-[#0a1e38]/80 backdrop-blur-md px-3 py-1 rounded-md inline-block">
                    Tower Bridge • London
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Facts */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                  <h3 className="text-lg sm:text-xl font-black text-[#0a1e38]">
                    Graduate Route Visa (2 to 3 Years)
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Eligible international students may apply for the Graduate visa after successfully completing an eligible course in the UK. The Graduate visa allows graduates to stay and work in the UK for <strong className="text-slate-900">2 years</strong> (and <strong className="text-slate-900">3 years</strong> for PhD graduates) without needing an employer sponsor or minimum salary requirement.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <h3 className="text-lg sm:text-xl font-black text-[#0a1e38]">
                    UK–India Mutual Educational Recognition
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Under the UK-India Memorandum of Understanding on Mutual Recognition of Academic Qualifications, UK Master&apos;s and Bachelor&apos;s degrees are fully equivalent to Indian qualifications for higher study and public/private employment.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <h3 className="text-lg sm:text-xl font-black text-[#0a1e38]">
                    Work Rights During Studies
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Student visa holders are permitted to work up to <strong className="text-slate-900">20 hours per week</strong> during term time and <strong className="text-slate-900">full-time</strong> during vacation periods, helping offset living expenses with the UK&apos;s high national minimum wage.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          5. TOP UNIVERSITIES & RUSSELL GROUP HERITAGE (Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Top Universities & Institutions in the UK"
            subtitle="Compare world-ranked research institutions, Russell Group universities, and modern tech hubs across the UK."
            variant="dark"
          />

          {/* 10 Circular Institution Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: "University of Oxford", acronym: "OXFORD" },
              { name: "University of Cambridge", acronym: "CAMBRIDGE" },
              { name: "Imperial College London", acronym: "IMPERIAL" },
              { name: "University College London", acronym: "UCL" },
              { name: "University of Edinburgh", acronym: "EDINBURGH" },
              { name: "University of Manchester", acronym: "MANCHESTER" },
              { name: "King's College London", acronym: "KCL" },
              { name: "University of Leeds", acronym: "LEEDS" },
              { name: "University of Birmingham", acronym: "BIRMINGHAM" },
              { name: "Middlesex University London", acronym: "MIDDLESEX" }
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
                    United Kingdom
                  </div>
                </div>

                <div className="mt-3.5 text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-snug max-w-[130px]">
                  {uni.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">University Selection:</span> No single factor determines suitability. Umang Career Consultancy helps you balance academic prestige, fee structures, scholarships, city cost of living, and graduate career outcomes.
          </div>

        </div>
      </section>

      {/* =========================================================
          6. UK STUDENT VISA PROCESS (6 Steps)
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="UK Student Visa Process"
            subtitle="A structured 6-step roadmap from initial shortlisting to securing your UK Student visa and boarding your flight."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Choose Your Course & University",
                desc: "Shortlist programs based on your academic profile, English test scores (or waivers), budget, and long-term career plans."
              },
              {
                step: "02",
                title: "Apply to the University",
                desc: "Prepare original academic transcripts, SOP, reference letters (LOR), and submit applications directly or via UCAS."
              },
              {
                step: "03",
                title: "Receive Your Offer & CAS",
                desc: "Accept your offer, pay initial tuition deposit, and receive your official Confirmation of Acceptance for Studies (CAS)."
              },
              {
                step: "04",
                title: "Prepare Your Financial Dossier",
                desc: "Ensure tuition balance plus UKVI maintenance funds (28-day bank balance rule) are strictly verified."
              },
              {
                step: "05",
                title: "Submit Visa Application & Biometrics",
                desc: "Complete the online UK Student visa form, pay Immigration Health Surcharge (IHS), and attend VFS biometrics."
              },
              {
                step: "06",
                title: "Visa Decision & Pre-Departure",
                desc: "Receive your passport sticker / digital vignette, book flights, arrange student housing, and attend our pre-departure briefing."
              }
            ].map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black px-2.5 py-1 rounded bg-[#e52928] text-white">
                    STEP {s.step}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">UKVI Process</span>
                </div>
                <h3 className="text-lg font-bold text-[#0a1e38] mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          7. STUDY DESTINATIONS ACROSS THE UK
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Study Destinations Across the UK"
            subtitle="Explore distinctive educational hubs and rich student communities across the four nations of the United Kingdom."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                nation: "ENGLAND",
                tagline: "Academic & Commercial Heartland",
                desc: "Home to a vast array of world-leading universities and major cosmopolitan student cities including London, Manchester, Birmingham, Leeds, and Bristol."
              },
              {
                nation: "SCOTLAND",
                tagline: "World-Class Research & Culture",
                desc: "Known for world-renowned ancient universities in Edinburgh, Glasgow, and Aberdeen, pioneering research environments, and vibrant historic settings."
              },
              {
                nation: "WALES",
                tagline: "Friendly Campuses & Coastal Living",
                desc: "Offers top universities across Cardiff, Swansea, and Aberystwyth with lower living costs, beautiful coastlines, and tight-knit communities."
              },
              {
                nation: "NORTHERN IRELAND",
                tagline: "Innovation & Global Connection",
                desc: "Centered around Belfast, home to Queen's University Belfast, offering rich cultural heritage and among the lowest living costs in the UK."
              }
            ].map((d, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#e52928] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] tracking-tight">
                    {d.nation}
                  </h3>
                  <span className="text-xs font-bold text-[#e52928] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    UK Region
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 mb-3">{d.tagline}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          8. UK TUITION FEES & LIVING COSTS OVERVIEW
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="UK Tuition Fees & Cost of Living Overview"
            subtitle="Understanding typical financial commitments for studying and living across the United Kingdom."
            variant="dark"
          />

          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-xl mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base border-collapse">
                <thead>
                  <tr className="bg-white/10 text-white border-b border-white/10 font-extrabold">
                    <th className="py-4 px-6">Study Level / Category</th>
                    <th className="py-4 px-6 text-center">Indicative Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-medium">
                  <tr className="hover:bg-white/10 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">Undergraduate / Bachelor&apos;s</td>
                    <td className="py-4 px-6 text-center text-[#22c55e] font-bold">£ 12,000 – £ 26,000+ / year</td>
                  </tr>
                  <tr className="hover:bg-white/10 transition-colors bg-white/[0.02]">
                    <td className="py-4 px-6 font-bold text-white">Master&apos;s (1-Year Intensive)</td>
                    <td className="py-4 px-6 text-center text-[#22c55e] font-bold">£ 13,000 – £ 28,000+ / year</td>
                  </tr>
                  <tr className="hover:bg-white/10 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">MBA / Specialized Business</td>
                    <td className="py-4 px-6 text-center text-[#22c55e] font-bold">£ 18,000 – £ 40,000+ / year</td>
                  </tr>
                  <tr className="hover:bg-white/10 transition-colors bg-white/[0.02]">
                    <td className="py-4 px-6 font-bold text-white">UKVI Monthly Living Requirement (London)</td>
                    <td className="py-4 px-6 text-center text-slate-300">~£ 1,334 / month (up to 9 months)</td>
                  </tr>
                  <tr className="hover:bg-white/10 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">UKVI Monthly Living Requirement (Outside London)</td>
                    <td className="py-4 px-6 text-center text-slate-300">~£ 1,023 / month (up to 9 months)</td>
                  </tr>
                  <tr className="bg-white/10 font-bold text-white">
                    <td className="py-4 px-6">Major Intakes</td>
                    <td className="py-4 px-6 text-center text-[#22c55e]">
                      September / October (Major) & January / February (Spring)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          9. FREQUENTLY ASKED QUESTIONS (11 FAQs)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Frequently Asked Questions: Study in the UK"
            subtitle="Detailed, accurate answers regarding IELTS waivers, GMAT, work rights, CAS issuance, and the Graduate visa."
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
          10. START YOUR UK STUDY JOURNEY (Consultation Form)
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                Official UK University Representatives
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Start Your UK Study Journey
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Get personalised guidance for course selection, IELTS waivers, fast-track offer letters, CAS issuance, and your UK Student visa filing.
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Direct Applications to 130+ Recognized UK Universities</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>IELTS Waiver Assessment (70%+ in Class 12 English)</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>End-to-End CAS & UKVI Credibility Interview Coaching</span>
                </div>
              </div>

              {/* Direct Call Info */}
              <div className="pt-2">
                <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">
                  Book Your Free Counselling with Umang Career Consultancy:
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
                    Inquiry Received for United Kingdom!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our UK certified education counselor will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
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
                        <option value="Business & Management">Business & Management (MSc / MBA)</option>
                        <option value="Computer Science & IT">Computer Science & IT</option>
                        <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
                        <option value="Finance & Accounting">Finance & Accounting</option>
                        <option value="Engineering & Technology">Engineering & Technology</option>
                        <option value="Health & Life Sciences">Health & Life Sciences</option>
                        <option value="Law & Social Sciences">Law & Social Sciences</option>
                        <option value="Architecture & Design">Architecture & Design</option>
                        <option value="Hospitality & Tourism">Hospitality & Tourism</option>
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
                        <option value="1-Year Master's Degree">1-Year Master&apos;s Degree</option>
                        <option value="Bachelor's Degree (3 Years)">Bachelor&apos;s Degree (3 Years)</option>
                        <option value="MBA / Executive">MBA / Executive</option>
                        <option value="International Foundation">International Foundation</option>
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
                        <option value="September 2026">September 2026 (Major Autumn)</option>
                        <option value="January 2027">January 2027 (Spring)</option>
                        <option value="September 2027">September 2027 (Autumn)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                  >
                    Submit Free UK Consultation Request
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Free Initial Assessment. Certified British Council & UKVI counselors.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          11. BOTTOM RED CALL BAR
         ========================================================= */}
      <section className="w-full bg-[#e52928] py-8 text-white relative shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-xs uppercase tracking-widest font-black text-red-200">
              Personalized UK Admission & Visa Guidance
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
