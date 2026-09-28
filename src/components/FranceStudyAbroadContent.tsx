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

function CheckmarkIcon({ className = "w-5 h-5 text-emerald-500" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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

/* Course Icons (Matching Screenshot 2 green stroke styling) */
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

function EnvironmentIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

function FashionIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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

function AiIcon() {
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
export default function FranceStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Business And Mgt. & MBA",
    intake: "September 2026",
    level: "Master / Grande École"
  });

  // Entrance animations state
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
        course: "Business And Mgt. & MBA",
        intake: "September 2026",
        level: "Master / Grande École"
      });
    }, 4500);
  };

  const FAQS = [
    {
      q: "Can I study in English in France?",
      a: "Yes! Campus France lists more than 1,600 programs that are fully or partially taught in English across Business, Engineering, Computer Science, and Design. You do not need to be fluent in French to be admitted to these programs."
    },
    {
      q: "Can I work while studying in France?",
      a: "International students holding a valid French student visa (VLS-TS) are legally entitled to work part-time up to 964 hours per year (equivalent to roughly 20 hours per week during term time and full-time during official vacation periods), providing excellent financial support."
    },
    {
      q: "Do I need to know French to study in France?",
      a: "Not necessarily for your studies, as hundreds of undergraduate and postgraduate programs are delivered entirely in English. However, learning everyday conversational French is strongly encouraged for day-to-day living and opens up extensive local career and internship opportunities."
    },
    {
      q: "How much does it cost to study in France?",
      a: "Tuition varies by institution. Differentiated registration fees at eligible public institutions for non-EU students are approximately €2,902/year for Bachelor (Licence) and €3,950/year for Master's. Private business schools (Grandes Écoles) and specialized design schools range between €7,000 and €25,000+ per year. Additionally, the French government provides CAF housing allowances that subsidize student rent by up to 30%–40%."
    },
    {
      q: "Can I get scholarships to study in France?",
      a: "Yes! A wide spectrum of scholarships is accessible, including the prestigious Eiffel Excellence Scholarship, Charpak Scholarships for Indian students, Erasmus+ funding, French Embassy bursaries, and merit-based tuition fee waivers directly offered by Grandes Écoles."
    },
    {
      q: "Can I stay in France after graduation?",
      a: "Yes. Graduates holding a Master's degree or equivalent from recognized French institutions are eligible for a Post-Study Work Permit (APS / Carte de séjour 'Recherche d'emploi/Création d'entreprise') granting up to 2 years to seek qualified employment or launch an enterprise. Once you secure employment relevant to your field, you can transition to a temporary or permanent work residence permit."
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
          1. HERO SECTION (Matching Screenshot 1)
         ========================================================= */}
      <section className="relative w-full bg-white pt-10 sm:pt-14 pb-14 sm:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading */}
            <div
              className={`lg:col-span-6 text-center lg:text-left transition-all duration-1000 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
                <span className="px-2 py-0.5 rounded bg-[#e52928] text-white text-[11px] font-black tracking-wider">FR</span>
                <span>Study Abroad Destination Guide</span>
              </div>

              {/* Exact Reference Title from Screenshot 1 */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0a1e38] tracking-tight leading-none uppercase">
                FRANCE
              </h1>

              <p className="mt-5 text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Unlock world-class degrees, European innovation, and prestigious Grande École excellence in one of the world&apos;s cultural and economic capitals.
              </p>

              {/* Call to action buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#counselling-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Apply for France</span>
                  <span>→</span>
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Column: Student Celebratory Graphic with French Tricolor Ribbon (Screenshot 1) */}
            <div
              className={`lg:col-span-6 flex justify-center items-center transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center anim-gentle-float">
                <div className="relative w-full h-full p-2 transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/france-hero.png"
                    alt="Study Abroad in France Student - Umang Career Consultancy"
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
          2. ABOUT FRANCE (Matching Screenshot 1 lower section)
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                  About France
                </h2>
                <div className="w-16 h-1.5 bg-[#e52928] rounded-full mt-2 mb-4" />
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  France is a popular European destination for international students, offering a wide range of higher-education institutions, academic programs, and opportunities for international students.
                </p>
              </div>

              {/* Checklist from Screenshot 1 */}
              <div className="space-y-3.5">
                {[
                  "Located in Western Europe with direct Schengen mobility",
                  "Diverse higher-education options (Universities, Grandes Écoles, Specialized Institutes)",
                  "Public universities with government-supported tuition structures",
                  "More than 3,500 accredited higher-education institutions",
                  "1,600+ programs taught fully or partially in English",
                  "Strong academic, industrial, and cutting-edge research environment",
                  "Opportunities to work alongside studies (up to 964 hours per year), subject to applicable rules"
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

            {/* Right Column: Eiffel Tower Landmark Illustration / Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/destinations/france.jpg"
                  alt="Eiffel Tower Paris France"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-black bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    Paris • France
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-2">
                    Europe&apos;s Leading Cultural & Economic Capital
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          3. TOP COURSES IN FRANCE (Matching Screenshot 2 - Dark Navy #0a1e38)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            title="Top Courses In France"
            subtitle="Explore high-demand academic disciplines delivered by globally renowned French faculty and industry leaders."
            variant="dark"
          />

          {/* 8 Course Cards Grid with Green Icons (Exact match to Screenshot 2) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Business And Mgt. & MBA",
                icon: <BusinessIcon />,
                desc: "Triple-accredited Grandes Écoles with top global rankings."
              },
              {
                title: "Computer Science & IT",
                icon: <ComputerIcon />,
                desc: "Advanced computing, cloud infrastructure & software development."
              },
              {
                title: "Env. Sci. & Sustainability",
                icon: <EnvironmentIcon />,
                desc: "Pioneering ecological transition, renewable energy & green policy."
              },
              {
                title: "Engineering & Technology",
                icon: <EngineeringIcon />,
                desc: "Aerospace, robotics, automotive & civil infrastructure."
              },
              {
                title: "Health & Life Sciences",
                icon: <HealthIcon />,
                desc: "Biotechnology, pharmaceutical research & public health."
              },
              {
                title: "Fashion, Luxury, & Design",
                icon: <FashionIcon />,
                desc: "World capital of haute couture, luxury brands & creative arts."
              },
              {
                title: "Hospitality, Tourism",
                icon: <HospitalityIcon />,
                desc: "Leading international hospitality management & culinary arts."
              },
              {
                title: "Artificial Intelligence & Data Science",
                icon: <AiIcon />,
                desc: "Paris AI hub excellence, machine learning & big data analytics."
              }
            ].map((course, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#22c55e]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-sm"
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {course.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#22c55e] transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {course.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          4. WHY IS FRANCE AN IDEAL DESTINATION? (Matching Screenshot 3)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Why Is France An Ideal Study Abroad Destination ?"
            subtitle="France combines internationally recognised higher education with a diverse cultural environment and a broad choice of study programs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Pont Alexandre III Landmark Photo (Screenshot 3) */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                <Image
                  src="/destinations/france-alexandre-bridge.jpg"
                  alt="Pont Alexandre III Paris Study Abroad France"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs uppercase font-extrabold tracking-wider bg-[#0a1e38]/80 backdrop-blur-md px-3 py-1 rounded-md inline-block">
                    Pont Alexandre III • Paris
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Checklist with Black Circular Badges (Screenshot 3) */}
            <div className="lg:col-span-6 space-y-3.5">
              {[
                "Hub Of World's Prestigious Universities And Grandes Écoles",
                "Embraces A Diverse Culture with global international students",
                "Hefty Investor In Research & Development (R&D)",
                "Affordable Tuition Fees at public and state-subsidized universities",
                "Generous Scholarships & Government Grants (Eiffel, Charpak, Erasmus+)",
                "Post Study Work Permit (APS) up to 2 Years for Master's qualifiers",
                "IELTS/TOEFL Is Not Mandatory (English MOI accepted by select institutes)",
                "Long Stay Visa For Study Purposes with straightforward renewal",
                "Liberty To Visit Other Schengen Countries (29 European nations)",
                "Free French Classes Supported By Government & University portals"
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
          5. TOP 10 UNIVERSITIES IN FRANCE (Matching Screenshot 4)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Top 10 Universities & Institutions in France"
            subtitle="Selected leading universities and Grandes Écoles evaluated based on student profiles, course suitability, and career outcomes."
            variant="dark"
          />

          {/* 10 Circular Institution Badges Grid (Exact match to Screenshot 4) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: "SKEMA Business School", acronym: "skema", color: "from-red-600 to-red-800" },
              { name: "Rennes School Of Business", acronym: "RENNES", color: "from-blue-600 to-indigo-800" },
              { name: "NEOMA Business School", acronym: "NEOMA", color: "from-sky-700 to-blue-900" },
              { name: "EM Normandie", acronym: "EM", color: "from-rose-600 to-red-900" },
              { name: "Collège de Paris", acronym: "CDP", color: "from-amber-700 to-yellow-900" },
              { name: "De Vinci Higher Education", acronym: "DEVINCI", color: "from-slate-700 to-slate-900" },
              { name: "KEDGE Business School", acronym: "KEDGE", color: "from-blue-800 to-slate-900" },
              { name: "Burgundy School Of Business", acronym: "BSB", color: "from-purple-800 to-pink-900" },
              { name: "Montpellier Business School", acronym: "MBS", color: "from-blue-900 to-cyan-900" },
              { name: "Sorbonne & Paris-Saclay", acronym: "PARIS", color: "from-emerald-800 to-teal-950" }
            ].map((uni, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Circular White Badge with University Crest / Name */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white text-[#0a1e38] flex flex-col items-center justify-center p-3 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/20 border-2 border-white/80">
                  <div className="font-black text-sm sm:text-base tracking-wider uppercase text-[#0a1e38] group-hover:text-[#e52928] transition-colors">
                    {uni.acronym}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">
                    France
                  </div>
                </div>

                <div className="mt-3.5 text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-snug max-w-[130px]">
                  {uni.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mr-2">Note</span><span className="font-semibold text-white">Personalized Matching:</span> Instead of claiming a fixed &ldquo;Top 10,&rdquo; Umang Career Consultancy presents selected institutions based on the student&apos;s course, academic profile, budget, and specific career goals.
          </div>

        </div>
      </section>

      {/* =========================================================
          6. FRANCE TUITION FEES & PUBLIC REGISTRATION (Screenshot 5)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="France Tuition Fees"
            subtitle="Tuition varies significantly depending on whether you choose a public state university or a private specialized Grande École."
          />

          {/* Table from Screenshot 5 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg mb-10">
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
                    <td className="py-4 px-6 font-bold text-slate-800">Bachelor / Licence</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 8,000</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 25,250</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">Master / MSc / MIM</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 7,000</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 34,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">Diploma / BBA</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 9,000</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 43,350</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-slate-800">Ph.D / Doctorate</td>
                    <td className="py-4 px-6 text-center text-emerald-600 font-bold">€ 5,000</td>
                    <td className="py-4 px-6 text-center text-slate-700">€ 15,000</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#0a1e38]">
                    <td className="py-4 px-6">Top Intakes</td>
                    <td colSpan={2} className="py-4 px-6 text-center text-[#e52928]">
                      January, February, September & October
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Differentiated Registration Fees Box from Campus France */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1e38]">
                Campus France Differentiated Public University Registration Fees
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              For eligible public higher-education institutions in France, the French government subsidizes a substantial portion of educational costs. Non-EU international students pay official regulated registration fees:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-500 uppercase">Bachelor / Licence</div>
                <div className="text-xl font-black text-[#0a1e38] mt-1">€ 2,902 / year</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-500 uppercase">Master Degree</div>
                <div className="text-xl font-black text-[#e52928] mt-1">€ 3,950 / year</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-500 uppercase">PhD / Doctorate</div>
                <div className="text-xl font-black text-emerald-600 mt-1">€ 398 / year</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          7. MONTHLY COST OF LIVING IN FRANCE (Screenshot 5 Dark Section)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0a1e38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Monthly Cost Of Living in France"
            subtitle="Living expenses depend on the city, accommodation type and personal lifestyle. Major cities such as Paris have higher costs than regional cities."
            variant="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Accommodation",
                amount: "€300 - €800 / month",
                desc: "Varies by city and housing type (CROUS university halls vs. private apartments). Subsidized up to 30%–40% by the French CAF housing benefit."
              },
              {
                title: "Food & Groceries",
                amount: "€200 - €350 / month",
                desc: "Depends on personal lifestyle. French university student cafeterias (CROUS) offer complete healthy student meals for just €3.30."
              },
              {
                title: "Public Transportation",
                amount: "€30 - €75 / month",
                desc: "Exceptional public transport in Paris (Navigo) and all French cities with deeply discounted student transit passes."
              },
              {
                title: "Study Materials & Books",
                amount: "€40 - €90 / month",
                desc: "Varies according to the course. Most textbooks and scientific journals are freely accessible via university digital libraries."
              },
              {
                title: "Personal Expenses",
                amount: "€100 - €200 / month",
                desc: "Entertainment, fitness, dining out, and weekend travel across scenic French regions and neighbouring Schengen nations."
              },
              {
                title: "Utilities & Mobile Internet",
                amount: "€50 - €110 / month",
                desc: "High-speed 5G mobile connectivity (from €10–€20/month) and residential electricity/heating."
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
            <span className="px-2 py-0.5 rounded bg-white/20 text-white border border-white/30 text-[11px] font-black uppercase tracking-wider mr-2">Tip</span><span className="font-semibold text-white">Umang Tip:</span> Students are advised to prepare a city-specific budget before finalizing their university choice. Our counselors assist you with personalized financial planning.
          </div>

        </div>
      </section>

      {/* =========================================================
          8. WEATHER IN FRANCE
         ========================================================= */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Weather in France"
            subtitle="France enjoys a pleasant temperate European climate with four distinct, beautiful seasons."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Summer",
                months: "June – August",
                iconSvg: "summer",
                desc: "Warm to hot, depending on the region. Mediterranean coastal cities offer vibrant sunny summers."
              },
              {
                season: "Autumn",
                months: "September – November",
                iconSvg: "autumn",
                desc: "Mild to cool with golden fall foliage. Ideal weather for campus walks and exploring historic sights."
              },
              {
                season: "Winter",
                months: "December – February",
                iconSvg: "winter",
                desc: "Cold with regional variations. Snowfall in mountain regions and alpine ski hubs, milder in southern cities."
              },
              {
                season: "Spring",
                months: "March – May",
                iconSvg: "spring",
                desc: "Mild with changing temperatures and blooming gardens across Parisian parks and countryside."
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
          9. POPULAR STUDENT CITIES (PARIS, LYON, TOULOUSE, NICE, BORDEAUX, LILLE)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Popular Student Cities in France"
            subtitle="France is home to dynamic educational hubs known for their student life, global industries, and culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                city: "PARIS",
                tagline: "The Global Capital of Education & Culture",
                desc: "A major international education, business and cultural centre hosting top universities, historic museums, and headquarters of multinational enterprises."
              },
              {
                city: "LYON",
                tagline: "Gastronomy & Business Center",
                desc: "Known for world-class education, thriving pharmaceutical and banking sectors, vibrant student communities, and a high quality of life."
              },
              {
                city: "TOULOUSE",
                tagline: "European Aerospace & Tech Hub",
                desc: "A major centre for engineering, aerospace (Airbus HQ), robotics, and technology, accompanied by a dynamic, youthful student demographic."
              },
              {
                city: "NICE",
                tagline: "Mediterranean Innovation & Riviera Living",
                desc: "Popular for its picturesque Mediterranean setting, the Sophia Antipolis technology science park, and an international cosmopolitan atmosphere."
              },
              {
                city: "BORDEAUX",
                tagline: "Heritage, Innovation & High Quality of Life",
                desc: "Known for renowned universities, thriving digital startups, rich architectural heritage, and an active welcoming student community."
              },
              {
                city: "LILLE",
                tagline: "Crossroads of Northern Europe",
                desc: "A vibrant, well-connected student city with immediate high-speed train access to Paris, Brussels, London, and Amsterdam."
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
                    Top Student City
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
          10. FREQUENTLY ASKED QUESTIONS (Accordion)
         ========================================================= */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            title="Frequently Asked Questions: Study in France"
            subtitle="Clear, verified answers to common questions about studying, tuition fees, and visas in France."
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
          11. START YOUR STUDY JOURNEY IN FRANCE (Consultation Form)
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                Certified French Campus Guidance
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Start Your Study Journey in France
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Get personalised guidance for course selection, university applications, Campus France interview preparation, document crafting, and your France student visa (VLS-TS).
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Direct Grande École & State University Applications</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>Campus France Études en France Dossier Support</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                  <span>CAF Housing Subsidy & French Visa Mock Interviews</span>
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
                    Inquiry Received for France!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Student"}</span>. Our French education specialist will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
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
                        placeholder="e.g. Aditi Shah"
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
                        placeholder="e.g. aditi@example.com"
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
                        <option value="Business And Mgt. & MBA">Business And Mgt. & MBA</option>
                        <option value="Computer Science & IT">Computer Science & IT</option>
                        <option value="Fashion, Luxury, & Design">Fashion, Luxury, & Design</option>
                        <option value="Engineering & Technology">Engineering & Technology</option>
                        <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
                        <option value="Hospitality, Tourism">Hospitality, Tourism</option>
                        <option value="Health & Life Sciences">Health & Life Sciences</option>
                        <option value="Env. Sci. & Sustainability">Env. Sci. & Sustainability</option>
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
                        <option value="Master / Grande École">Master / Grande École</option>
                        <option value="Bachelor / Licence">Bachelor / Licence</option>
                        <option value="BBA / Diploma">BBA / Diploma</option>
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
                        <option value="September 2026">September 2026 (Fall)</option>
                        <option value="January/February 2027">January/February 2027 (Spring)</option>
                        <option value="Fall 2027">Fall 2027</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                  >
                    Submit Free Consultation Request for France
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    <svg className="w-3.5 h-3.5 inline mr-1 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>100% Free Initial Assessment. Certified France & Campus France counselors.
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
              Personalized France Admission Guidance
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
