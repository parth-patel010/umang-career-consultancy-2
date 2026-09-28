"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------
   SVG ICONS (No external emojis, pure crisp SVGs)
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

function CheckCircleIcon() {
  return (
    <svg className="w-5 h-5 text-[#22c55e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

export default function SopContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [whatInView, setWhatInView] = useState(false);
  const [supportInView, setSupportInView] = useState(false);
  const [whyInView, setWhyInView] = useState(false);
  const [coverInView, setCoverInView] = useState(false);
  const [faqInView, setFaqInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const [bookInView, setBookInView] = useState(false);

  // FAQ Accordion State (open first FAQ by default)
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const whatRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 60);

    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const whatObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setWhatInView(true);
    }, observerOptions);

    const supportObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSupportInView(true);
    }, observerOptions);

    const whyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setWhyInView(true);
    }, observerOptions);

    const coverObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCoverInView(true);
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
    if (supportRef.current) supportObserver.observe(supportRef.current);
    if (whyRef.current) whyObserver.observe(whyRef.current);
    if (coverRef.current) coverObserver.observe(coverRef.current);
    if (faqRef.current) faqObserver.observe(faqRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    if (bookRef.current) bookObserver.observe(bookRef.current);

    return () => {
      clearTimeout(timer);
      whatObserver.disconnect();
      supportObserver.disconnect();
      whyObserver.disconnect();
      coverObserver.disconnect();
      faqObserver.disconnect();
      ctaObserver.disconnect();
      bookObserver.disconnect();
    };
  }, []);

  // 1. Why Choose Us? (6 Cards matching Navy Section with white rounded cards)
  const whyCards = [
    {
      title: "Personalized Narrative",
      description: "We help develop an impactful statement reflecting your unique academic accomplishments, professional background, and future goals.",
      icon: (
        <svg className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "100% Original & Authentic",
      description: "Strictly zero plagiarism and zero robotic content. Every draft is created authentically around your actual experiences and career plans.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Customized by University & Program",
      description: "Tailored specifically to match department research specializations, professor profiles, campus ethos, and course objectives.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Strict Guidelines Alignment",
      description: "Carefully structured to meet mandatory word limits, font specifications, and specific institutional writing prompt criteria.",
      icon: (
        <svg className="w-8 h-8 text-amber-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Punctual Delivery for Deadlines",
      description: "Fast, dependable drafting and feedback turnaround ensuring you submit well ahead of university and visa intake deadlines.",
      icon: (
        <svg className="w-8 h-8 text-rose-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Unlimited Iterations & Review",
      description: "Continuous proofreading, tone calibration, and refinements until your statement reflects complete excellence and conviction.",
      icon: (
        <svg className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  // 2. What We Cover in Your SOP (9 Grid Elements)
  const coverElements = [
    {
      title: "Academic Background",
      desc: "Highlighting foundational degrees, key coursework, academic projects, and scholastic milestones.",
    },
    {
      title: "Course Selection Rationale",
      desc: "Articulating why this specific syllabus, specialized modules, and practical labs match your passion.",
    },
    {
      title: "University Justification",
      desc: "Explaining why this exact institution, faculty prestige, research facilities, and campus culture stand out.",
    },
    {
      title: "Choice of Study Destination",
      desc: "Detailing the industrial reputation, international diversity, and global learning ecosystem of the country.",
    },
    {
      title: "Career Goals & Aspirations",
      desc: "Presenting well-defined short-term job roles and long-term executive or entrepreneurial visions.",
    },
    {
      title: "Relevant Skills & Projects",
      desc: "Demonstrating hands-on competencies, technical certifications, internships, and research papers.",
    },
    {
      title: "Professional Work Experience",
      desc: "Highlighting responsibilities, career achievements, promotions, and real-world problem solving.",
    },
    {
      title: "Future Action Plan Upon Return",
      desc: "Demonstrating compelling reasons, high-growth industrial demand, and clear career trajectories in your home country.",
    },
    {
      title: "Coherence & Course Relevance",
      desc: "Connecting past academics, gap justifications, and chosen studies into a unified, persuasive story.",
    },
  ];

  // 3. FAQs (8 FAQs from prompt)
  const faqs = [
    {
      q: "Do all universities require an SOP?",
      a: "No. Requirements vary between universities, academic levels, and destinations. While most master's and PhD programs require an SOP or Personal Statement, some undergraduate courses may require shorter motivation essays.",
    },
    {
      q: "How long should my SOP be?",
      a: "Standard SOPs generally range between 800 to 1,200 words (1.5 to 2 single-spaced pages). However, some universities (like in the UK or Germany) enforce strict 500-word or character limits. We tailor every draft to your university's exact guidelines.",
    },
    {
      q: "What should I include in my SOP?",
      a: "A strong SOP should cover your academic journey, personal motivations, reasons for choosing the specific course and university, relevant projects or work experiences, short-term and long-term career goals, and ties to your home country.",
    },
    {
      q: "Can I use the same SOP for every university application?",
      a: "It is strongly discouraged. Admissions committees look for genuine intent. Using generic or copy-pasted content can result in rejection. We help customize your statement for each institution's curriculum and strengths.",
    },
    {
      q: "Can I write my own SOP?",
      a: "Yes, absolutely! We encourage you to draft your thoughts and experiences. Our expert advisors will then provide structural feedback, eliminate grammatical errors, refine the narrative flow, and ensure it meets admission committee standards.",
    },
    {
      q: "How long does it take to prepare an SOP?",
      a: "On average, crafting and polishing a top-tier SOP takes 3 to 7 business days, including profile questionnaires, initial draft compilation, and revision cycles.",
    },
    {
      q: "Is my SOP written from scratch?",
      a: "Yes! Every single statement is created from scratch using your personal academic history, career objectives, and university choices. We never reuse templates.",
    },
    {
      q: "Can the SOP be revised if I need changes?",
      a: "Yes. We offer dedicated review and revision support to incorporate your feedback and ensure you are 100% satisfied before final submission.",
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
                Crafting Your Winning Academic Story
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight uppercase leading-[1.1]">
                Statement Of Purpose <span className="text-[#0a1e38]">(SOP)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Your Statement of Purpose is your voice before the admissions committee and visa officers. We help you articulate your true passion, academic journey, and future career plans with compelling originality.
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
                  href="#book-sop"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0a1e38] hover:bg-[#112a4c] text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Talk to Our Counsellors</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Hero Image (Circular graphic with red dashed border & badges) */}
            <div
              className={`lg:col-span-6 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] aspect-square flex items-center justify-center anim-gentle-float">
                <Image
                  src="/sop-hero.png"
                  alt="Statement of Purpose SOP Guidance - Umang Career Consultancy"
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

      {/* ================= 2. WHAT IS A STATEMENT OF PURPOSE (NAVY HIGHLIGHT) ================= */}
      <section
        ref={whatRef}
        className="w-full py-16 sm:py-20 bg-[#0a1e38] text-white relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="What is a Statement of Purpose ?"
            variant="dark"
            inView={whatInView}
          />

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ease-out transform ${
              whatInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            <p className="text-slate-200 text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
              A Statement of Purpose (SOP) is a personal document that explains your academic background, reasons for choosing a particular course and university, future career goals, and motivation to study abroad. A well-structured SOP helps present your journey and plans clearly while showing how your chosen course connects with your previous education and future aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 3. OUR SOP SUPPORT (WITH 3D ILLUSTRATION) ================= */}
      <section ref={supportRef} className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our SOP Support" inView={supportInView} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-10">
            {/* Left Content */}
            <div
              className={`lg:col-span-7 space-y-6 transition-all duration-1000 ease-out transform ${
                supportInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1e38] leading-tight">
                Authentic, Impactful Narratives Tailored to Your Dreams
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                At <strong className="font-semibold text-[#0a1e38]">Umang Career Consultancy</strong>, we help students prepare personalized SOPs based on their academic background, experiences, chosen course, university, and future goals. Our approach focuses on presenting your genuine story clearly and ensuring that the content is relevant to the requirements of your application.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "Personalized profiling session to extract key accomplishments and career goals",
                  "Structured narrative highlighting course relevance and academic continuity",
                  "Clear articulation of why this university and destination match your aspirations",
                  "Meticulous grammar, flow, and vocabulary review by senior education editors",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon />
                    <span className="text-sm sm:text-base text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 3D Illustration */}
            <div
              className={`lg:col-span-5 flex justify-center transition-all duration-1000 delay-200 ease-out transform ${
                supportInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"
              }`}
            >
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center anim-gentle-float">
                <Image
                  src="/sop-illustration.png"
                  alt="SOP Document Preparation Illustration - Umang Career Consultancy"
                  width={520}
                  height={520}
                  priority
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. WHY CHOOSE US? (NAVY SECTION WITH 6 WHITE CARDS) ================= */}
      <section
        ref={whyRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none anim-pulse-border" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Why Choose Us?"
            subtitle="The hallmark of excellence in academic Statement of Purpose preparation"
            variant="dark"
            inView={whyInView}
          />

          {/* 6 White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {whyCards.map((card, idx) => {
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
                  className={`bg-white rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col items-start group transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 ease-out border border-slate-100 ${delayClass} ${
                    whyInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                  }`}
                >
                  {/* Icon Container with Contrast Fix */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-5 border border-slate-100 group-hover:scale-110 group-hover:bg-red-50 transition-all duration-300 shadow-sm">
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#0a1e38] mb-3 group-hover:text-[#e52928] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. WHAT WE COVER IN YOUR SOP ================= */}
      <section ref={coverRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Cover in Your SOP"
            subtitle="Essential elements of a comprehensive, compelling statement of purpose"
            inView={coverInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {coverElements.map((elem, idx) => {
              const delays = [
                "delay-100",
                "delay-150",
                "delay-200",
                "delay-250",
                "delay-300",
                "delay-350",
                "delay-400",
                "delay-450",
                "delay-500",
              ];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-700 ease-out border border-slate-100 flex items-start gap-4 group transform hover:-translate-y-1.5 ${delayClass} ${
                    coverInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e52928] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e52928] group-hover:text-white transition-colors duration-300 font-bold text-sm">
                    0{idx + 1}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors leading-snug">
                      {elem.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {elem.desc}
                    </p>
                  </div>
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
            subtitle="Get Answers to Your SOP & Documentation Questions"
            inView={faqInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12">
            {/* Column 1 - 4 FAQs */}
            <div
              className={`space-y-4 transition-all duration-700 ease-out transform ${
                faqInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              {faqs.slice(0, 4).map((faq, idx) => {
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

            {/* Column 2 - 4 FAQs */}
            <div
              className={`space-y-4 transition-all duration-700 delay-150 ease-out transform ${
                faqInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {faqs.slice(4, 8).map((faq, idx) => {
                const actualIdx = idx + 4;
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
              Tell Your Story With Confidence, Call On...
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

      {/* ================= 8. TALK TO OUR COUNSELLORS FORM ================= */}
      <section
        id="book-sop"
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
              Talk to Our Counsellors
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Present your academic journey, goals, and motivation clearly with personalized SOP guidance from Umang Career Consultancy.
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
                alert("Thank you for reaching out! Our SOP advisors at Umang Career Consultancy will contact you shortly.");
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
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Target Study Destination</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm bg-white transition-all"
                  >
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany / Europe</option>
                    <option value="other">Other Global Destinations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Target Degree Level</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm bg-white transition-all"
                  >
                    <option value="masters">Master's / Post-Graduate</option>
                    <option value="bachelors">Bachelor's / Undergraduate</option>
                    <option value="phd">PhD / Doctorate</option>
                    <option value="diploma">Post-Graduate Diploma</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Target Course & University Name</label>
                <input
                  type="text"
                  placeholder="e.g. Master's in Data Science at University of Toronto"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#e52928] hover:bg-[#c92017] text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  Request SOP Consultation
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
