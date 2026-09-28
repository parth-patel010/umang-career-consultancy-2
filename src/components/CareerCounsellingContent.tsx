"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* -------------------------------------------------------------
   SVG ICONS (Crisp, modern, pure SVGs)
------------------------------------------------------------- */
function HandshakeIcon() {
  return (
    <svg className="w-10 h-10 text-indigo-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
    </svg>
  );
}

function CareerChartIcon() {
  return (
    <svg className="w-10 h-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5v5" />
    </svg>
  );
}

function BudgetingIcon() {
  return (
    <svg className="w-10 h-10 text-emerald-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
    </svg>
  );
}

function ApplicationDocIcon() {
  return (
    <svg className="w-10 h-10 text-amber-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function SkillAssessmentIcon() {
  return (
    <svg className="w-10 h-10 text-purple-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function RoadmapIcon() {
  return (
    <svg className="w-10 h-10 text-cyan-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

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
        isOpen ? "transform rotate-180 text-[#e52928]" : "text-white"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
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
      className={`text-center mb-10 transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="inline-flex items-center justify-center gap-3.5">
        {/* Left Stacked Lines */}
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

        {/* Right Stacked Lines */}
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

export default function CareerCounsellingContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [whatInView, setWhatInView] = useState(false);
  const [oneToOneInView, setOneToOneInView] = useState(false);
  const [modesInView, setModesInView] = useState(false);
  const [whyInView, setWhyInView] = useState(false);
  const [faqInView, setFaqInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const [bookInView, setBookInView] = useState(false);

  // FAQ Accordion State
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const whatRef = useRef<HTMLDivElement>(null);
  const oneToOneRef = useRef<HTMLDivElement>(null);
  const modesRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger Hero animation quickly on mount
    const timer = setTimeout(() => setHeroLoaded(true), 60);

    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const whatObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setWhatInView(true);
    }, observerOptions);

    const oneToOneObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setOneToOneInView(true);
    }, observerOptions);

    const modesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setModesInView(true);
    }, observerOptions);

    const whyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setWhyInView(true);
    }, observerOptions);

    const faqObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFaqInView(true);
    }, observerOptions);

    const ctaObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCtaInView(true);
    }, observerOptions);

    const bookObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setBookInView(true);
    }, observerOptions);

    if (whatRef.current) whatObserver.observe(whatRef.current);
    if (oneToOneRef.current) oneToOneObserver.observe(oneToOneRef.current);
    if (modesRef.current) modesObserver.observe(modesRef.current);
    if (whyRef.current) whyObserver.observe(whyRef.current);
    if (faqRef.current) faqObserver.observe(faqRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    if (bookRef.current) bookObserver.observe(bookRef.current);

    return () => {
      clearTimeout(timer);
      whatObserver.disconnect();
      oneToOneObserver.disconnect();
      modesObserver.disconnect();
      whyObserver.disconnect();
      faqObserver.disconnect();
      ctaObserver.disconnect();
      bookObserver.disconnect();
    };
  }, []);

  // Shuffled & Enhanced One-to-One Cards Data (Custom for Umang Career Consultancy)
  const oneToOneCards = [
    {
      title: "Profile & Skill Assessment",
      description: "Comprehensive evaluation of your academic credentials, personal strengths, and areas of growth to match your ideal field.",
      icon: <SkillAssessmentIcon />,
    },
    {
      title: "Course & University Matching",
      description: "Explore curated programs, emerging career domains, and top-tier global institutions tailored precisely to your profile.",
      icon: <CareerChartIcon />,
    },
    {
      title: "Personalized Career Roadmap",
      description: "Formulate a clear, milestone-driven pathway detailing exam preparation, admission timelines, and future industry prospects.",
      icon: <RoadmapIcon />,
    },
    {
      title: "Financial Planning & Scholarships",
      description: "Gain complete transparency on tuition expenses, living budgets, merit scholarships, and education loan assistance.",
      icon: <BudgetingIcon />,
    },
    {
      title: "Application & Portfolio Mentorship",
      description: "End-to-end support for drafting compelling SOPs, polished CVs, document organization, and flawless university submissions.",
      icon: <ApplicationDocIcon />,
    },
    {
      title: "One-on-One Dedicated Guidance",
      description: "In-depth, empathetic consultation sessions addressing student ambitions, family expectations, and clear future choices.",
      icon: <HandshakeIcon />,
    },
  ];

  // Shuffled Modes of Delivery Data
  const modesData = [
    {
      num: "1",
      title: "Virtual Online Counselling",
      description: "Convenient one-on-one video consultations with real-time screen sharing and digital course mapping from anywhere.",
    },
    {
      num: "2",
      title: "In-Person Office Sessions",
      description: "Direct face-to-face consultation at Umang Career Consultancy office for exhaustive, personalized guidance.",
    },
    {
      num: "3",
      title: "Global Education Fairs & Expos",
      description: "Direct access to international university representatives, profile reviews, and spot admission assessments.",
    },
    {
      num: "4",
      title: "Institutional Workshops & Seminars",
      description: "Interactive orientation seminars conducted across schools, colleges, and academic institutions for group awareness.",
    },
  ];

  // Shuffled & Enhanced Why Choose Career Counselling Data
  const whyData = [
    {
      title: "Clarity & Strategic Direction",
      description: "Eliminate uncertainty by identifying future-ready global courses and rewarding pathways suited to your capabilities.",
      icon: (
        <svg className="w-7 h-7 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Objective University Selection",
      description: "Select from accredited, world-class universities based purely on your academic background, budget, and post-study opportunities.",
      icon: (
        <svg className="w-7 h-7 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Confidence Every Step of the Way",
      description: "Navigate tests, applications, scholarship filings, and visa approvals smoothly with veteran foreign education consultants.",
      icon: (
        <svg className="w-7 h-7 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  // Shuffled & Reordered FAQs Data
  const faqs = [
    {
      q: "Can career counselling help me choose the right course and university?",
      a: "Yes, definitely! Our senior consultants evaluate your academic profile, budget, career aspirations, and country preferences to shortlist universities and programs where you have the highest chance of admission and career success.",
    },
    {
      q: "How do I know if I need career counselling?",
      a: "If you feel overwhelmed by multiple country options, confused about program prerequisites, or uncertain about career prospects post-graduation, professional counselling provides definitive clarity and an actionable roadmap.",
    },
    {
      q: "Can I receive financial advice and scholarship guidance during counselling?",
      a: "Absolutely. We offer transparent guidance on estimated tuition fees, living costs, currency planning, university scholarship criteria, and step-by-step education loan assistance with leading financial partners.",
    },
    {
      q: "Is virtual career counselling as effective as in-person sessions?",
      a: "Yes! Our virtual counselling sessions are conducted via interactive video meetings with real-time screen sharing, digital course catalogs, and customized roadmap sharing, giving you the exact same depth from the comfort of your home.",
    },
    {
      q: "How many career counselling sessions will I need?",
      a: "Most students gain complete clarity in 1 to 2 dedicated sessions. Furthermore, Umang Career Consultancy offers ongoing support throughout your application, visa, and pre-departure stages.",
    },
    {
      q: "How long does a typical counselling session last?",
      a: "A standard one-to-one consultation typically lasts 45 to 60 minutes, ensuring adequate time to review your profile, answer questions, and formulate your personalized study abroad strategy.",
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Dynamic Keyframes for smooth animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gentleFloat {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(0.4deg); }
            }
            .anim-gentle-float {
              animation: gentleFloat 5.5s ease-in-out infinite;
            }
            @keyframes pulseBorder {
              0%, 100% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.03); opacity: 1; }
            }
            .anim-pulse-border {
              animation: pulseBorder 4s ease-in-out infinite;
            }
            @keyframes phoneRing {
              0%, 100% { transform: rotate(0deg); }
              10%, 30% { transform: rotate(-10deg); }
              20%, 40% { transform: rotate(10deg); }
              50% { transform: rotate(0deg); }
            }
            .anim-phone-ring:hover svg {
              animation: phoneRing 0.8s ease-in-out;
            }
          `,
        }}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="w-full bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#ffffff] pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Title & Value Proposition */}
            <div
              className={`lg:col-span-6 space-y-6 transition-all duration-1000 ease-out transform ${
                heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#e52928] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#e52928] animate-ping"></span>
                Empowering Your Global Future
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight uppercase leading-[1.1]">
                Career <span className="text-[#0a1e38]">Counselling</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Get individualized, end-to-end guidance from veteran overseas educational consultants. We help you choose the right course, select top global universities, and navigate visas with absolute certainty.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+919173186109"
                  className="anim-phone-ring inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#e52928] hover:bg-[#c92017] text-white font-bold rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <PhoneIcon />
                  <span>Call +91 9173186109</span>
                </a>

                <a
                  href="#book-session"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0a1e38] hover:bg-[#112a4c] text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Book Counselling</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Hero Image (Circular graphic with dashed border & badges) */}
            <div
              className={`lg:col-span-6 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] aspect-square flex items-center justify-center anim-gentle-float">
                <Image
                  src="/career-counselling-hero.png"
                  alt="Career Counselling - Umang Career Consultancy"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. WHAT IS CAREER COUNSELLING ================= */}
      <section ref={whatRef} className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What is Career Counselling ?" inView={whatInView} />

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ease-out transform ${
              whatInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-700 text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
                Career counselling at <strong className="font-semibold text-[#0a1e38]">Umang Career Consultancy</strong> helps students understand their academic and career options and make informed decisions about their future. We help you explore suitable courses, universities, and study destinations based on your interests, academic background, skills, and long-term goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. ONE TO ONE CAREER COUNSELLING SESSION ================= */}
      <section
        ref={oneToOneRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden"
      >
        {/* Subtle decorative background circles with pulse */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none anim-pulse-border" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="One to One Career Counselling Session"
            variant="dark"
            inView={oneToOneInView}
          />

          {/* 6 White Rounded Cards Grid with Staggered Scroll Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {oneToOneCards.map((card, idx) => {
              // Stagger delay per card
              const delays = [
                "delay-100",
                "delay-200",
                "delay-300",
                "delay-400",
                "delay-500",
                "delay-600",
              ];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col items-center text-center transition-all duration-700 ease-out border border-slate-100 group transform hover:-translate-y-2 hover:shadow-2xl ${delayClass} ${
                    oneToOneInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                  }`}
                >
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100">
                    {card.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-[#0a1e38] mb-3 group-hover:text-[#e52928] transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. MODES OF DELIVERY ================= */}
      <section ref={modesRef} className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Modes of Delivery" inView={modesInView} />

          {/* 4 Numbered items in 2x2 grid with Staggered In-View Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {modesData.map((item, idx) => {
              const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`flex items-start gap-5 p-6 rounded-2xl bg-[#f8fafc] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-700 ease-out transform group ${delayClass} ${
                    modesInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-[0.97]"
                  }`}
                >
                  {/* Large hollow outlined number with smooth hover effect */}
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 font-mono select-none drop-shadow-sm">
                      {item.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-xl font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. WHY CHOOSE CAREER COUNSELLING ================= */}
      <section ref={whyRef} className="w-full py-16 sm:py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Choose Career Counselling?" inView={whyInView} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {whyData.map((item, idx) => {
              const delays = ["delay-100", "delay-250", "delay-400"];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-700 ease-out border border-slate-100 flex flex-col items-start group transform hover:-translate-y-2 ${delayClass} ${
                    whyInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-95"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e52928] flex items-center justify-center mb-5 border border-red-100 group-hover:bg-[#e52928] group-hover:border-[#e52928] group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/25 transition-all duration-300">
                    <span className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1e38] mb-3 group-hover:text-[#e52928] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 6. FREQUENTLY ASKED QUESTIONS (FAQS) ================= */}
      <section ref={faqRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions (FAQs)"
            subtitle="Get Answers to Your Questions"
            inView={faqInView}
          />

          {/* 2-Column Accordion Layout matching screenshot with smooth animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12">
            {/* Column 1 - Slides in from left */}
            <div
              className={`space-y-4 transition-all duration-700 ease-out transform ${
                faqInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              {faqs.slice(0, 3).map((faq, idx) => {
                const actualIdx = idx;
                const isOpen = !!openFaqs[actualIdx];
                return (
                  <div
                    key={actualIdx}
                    className="rounded-xl overflow-hidden border border-[#0a1e38]/15 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(actualIdx)}
                      className="w-full bg-[#0a1e38] hover:bg-[#102747] text-white p-4 sm:p-5 flex items-center justify-between text-left transition-colors font-medium text-sm sm:text-base gap-3"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold">{faq.q}</span>
                      <ChevronDownIcon isOpen={isOpen} />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 text-slate-700 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 - Slides in from right */}
            <div
              className={`space-y-4 transition-all duration-700 delay-150 ease-out transform ${
                faqInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {faqs.slice(3, 6).map((faq, idx) => {
                const actualIdx = idx + 3;
                const isOpen = !!openFaqs[actualIdx];
                return (
                  <div
                    key={actualIdx}
                    className="rounded-xl overflow-hidden border border-[#0a1e38]/15 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(actualIdx)}
                      className="w-full bg-[#0a1e38] hover:bg-[#102747] text-white p-4 sm:p-5 flex items-center justify-between text-left transition-colors font-medium text-sm sm:text-base gap-3"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold">{faq.q}</span>
                      <ChevronDownIcon isOpen={isOpen} />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 text-slate-700 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. CALL TO ACTION BAR ================= */}
      <section ref={ctaRef} className="w-full py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-[#0a1e38] rounded-2xl p-6 sm:p-9 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 ease-out transform ${
              ctaInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
            }`}
          >
            <h3 className="text-white text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-center md:text-left">
              To Know What is Right for Your Career, Call On...
            </h3>

            <a
              href="tel:+919173186109"
              className="anim-phone-ring inline-flex items-center gap-3 bg-[#e52928] hover:bg-[#c92017] text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 text-base sm:text-lg flex-shrink-0"
            >
              <PhoneIcon />
              <span>+91 9173186109</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= 8. BOOK A COUNSELLING SESSION FORM ================= */}
      <section
        id="book-session"
        ref={bookRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/60"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-10 transition-all duration-700 ease-out transform ${
              bookInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-widest uppercase">Take The Next Step</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] mt-1.5">
              Start Planning Your Career Today
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Book a free one-on-one session with our senior foreign education counsellor.
            </p>
          </div>

          <div
            className={`bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-100 transition-all duration-1000 delay-150 ease-out transform ${
              bookInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.98]"
            }`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for reaching out! Our team at Umang Career Consultancy will contact you shortly.");
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Mode of Counselling</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm bg-white transition-all"
                  >
                    <option value="in-person">In-Person (At Office)</option>
                    <option value="virtual">Virtual (Video Session)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Target Study Destination or Course (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Canada, UK, Australia, USA, Europe / Computer Science, MBA..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#e52928] hover:bg-[#c92017] text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  Book a Counselling Session
                </button>

                <a
                  href="https://wa.me/919173186109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-sm transition-colors hover:scale-105 active:scale-95"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
