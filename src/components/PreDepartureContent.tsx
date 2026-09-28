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

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

export default function PreDepartureContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [whatInView, setWhatInView] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(false);
  const [processInView, setProcessInView] = useState(false);
  const [faqInView, setFaqInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const [bookInView, setBookInView] = useState(false);

  // FAQ Accordion State (open first 2 FAQs by default)
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Section references for scroll animation
  const whatRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLElement>(null);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Canada",
    visaType: "Student Visa",
    departureTime: "In 1 to 2 Months",
    message: "",
  });

  useEffect(() => {
    setHeroLoaded(true);

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === whatRef.current) setWhatInView(true);
          if (entry.target === featuresRef.current) setFeaturesInView(true);
          if (entry.target === processRef.current) setProcessInView(true);
          if (entry.target === faqRef.current) setFaqInView(true);
          if (entry.target === ctaRef.current) setCtaInView(true);
          if (entry.target === bookRef.current) setBookInView(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
    });

    if (whatRef.current) observer.observe(whatRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (processRef.current) observer.observe(processRef.current);
    if (faqRef.current) observer.observe(faqRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (bookRef.current) observer.observe(bookRef.current);

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  /* -------------------------------------------------------------
     1. SHUFFLED & ELEVATED FEATURES (8 Cards)
  ------------------------------------------------------------- */
  const serviceFeatures = [
    {
      title: "Personalized Travel Checklists",
      description:
        "Comprehensive destination-specific checklists covering academic credentials, identity records, certified translations, and essential emergency paperwork.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Visa Conditions & Travel Rules",
      description:
        "In-depth briefing on your visa validity, permissible arrival window, work-hour limitations, and transit visa requirements across international layovers.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Foreign Exchange & Banking Setup",
      description:
        "Guidance on acquiring multi-currency student Forex cards, GIC account verification, fee remittances, and pre-booking overseas bank appointments.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
    },
    {
      title: "Packing Strategy & Customs Compliance",
      description:
        "Knowing exactly what to carry: baggage weight allowances, seasonal winter clothing, electrical converters, and strictly prohibited customs items.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Accommodation & Transit Assistance",
      description:
        "Advising on university halls of residence, verified private student accommodation, homestays, lease contracts, and airport pickup booking.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Health, Vaccinations & Insurance",
      description:
        "Complete understanding of student health coverage (NHS, OSHC, provincial plans), carrying certified prescription drugs, and medical immunizations.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Technology & Connectivity Setup",
      description:
        "Arranging international student SIM cards or eSIMs, setting up essential transit and banking applications, and creating cloud document backups.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Cultural Orientation & Community",
      description:
        "Adapting smoothly to local lifestyle, classroom etiquette, social norms, public transit passes, and connecting with regional Indian student alumni.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     2. PRE-DEPARTURE ROADMAP (8 Steps Navy Section)
  ------------------------------------------------------------- */
  const processSteps = [
    {
      step: "01",
      title: "Document Audit & Handover",
      desc: "Review passport, visa grant letter, CAS/I-20/eCOE, admission letter, medical receipts, and organize cabin baggage originals.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Currency & Forex Setup",
      desc: "Load multi-currency student Forex cards, secure tuition receipt confirmations, and withdraw permitted local currency cash.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Accommodation & Arrival Booking",
      desc: "Confirm campus dorm or private flat contract, finalize check-in times, and schedule university airport pickup.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Health, Prescriptions & Insurance",
      desc: "Print mandatory health insurance cards, doctor-certified medical prescriptions, and vaccination certificates.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      step: "05",
      title: "Smart Packing & Customs Check",
      desc: "Pack according to airline baggage limits, inspect prohibited biological items, and prepare appropriate thermal clothing.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      step: "06",
      title: "SIM Card & Digital Readiness",
      desc: "Install an international eSIM or SIM kit, configure offline maps, university communication apps, and local transit planners.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: "07",
      title: "Port-of-Entry Mock Briefing",
      desc: "Simulate immigration officer questions at border control, document declarations, biometric scans, and study permit issuance.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: "08",
      title: "On-Campus Arrival & Orientation",
      desc: "Complete campus registration, student ID issuance, bank account opening, and social security / SIN number activation.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     3. FREQUENTLY ASKED QUESTIONS (8 FAQs in 2 Columns)
  ------------------------------------------------------------- */
  const faqs = [
    {
      q: "Do I really need pre-departure guidance?",
      a: "Yes. Moving to a new country involves multiple legal, cultural, and logistical preparations. Our session eliminates uncertainty, prevents costly airport mistakes, and equips you with practical checklists for packing, banking, accommodation, and port-of-entry immigration clearance.",
    },
    {
      q: "Do you provide information about customs restrictions?",
      a: "Absolutely. We provide thorough guidance on commonly restricted, quarantined, or regulated items (such as agricultural products, specific food items, dairy, and spices), while guiding you on how to properly declare required goods to avoid heavy airport fines.",
    },
    {
      q: "Can you help me with accommodation arrangements?",
      a: "Yes. We guide you through the process of choosing university on-campus residence halls versus private shared student apartments, understanding lease deposits, identifying safe student neighborhoods, and arranging temporary stay for your initial arrival.",
    },
    {
      q: "What about local transportation tips?",
      a: "We familiarize you with local public transport systems in your destination city (subway/metro, buses, student concession travel passes), teaching you how to purchase monthly transit passes and download essential route-planning applications.",
    },
    {
      q: "Do you provide emergency contacts?",
      a: "Yes. We supply a curated list of vital emergency contacts, including local emergency numbers (911/999/112), nearest Indian High Commission/Consulate contacts, campus international student helplines, and local student community networks.",
    },
    {
      q: "How far in advance should I seek pre-departure guidance?",
      a: "It is ideal to begin your pre-departure preparations immediately following your visa approval—typically 3 to 6 weeks before your scheduled flight. This provides ample time to book affordable accommodation, acquire Forex cards, and pack stress-free.",
    },
    {
      q: "How much foreign currency should I carry when travelling?",
      a: "It is generally advised to carry around $300 to $500 in local cash for immediate airport expenses, taxis, or incidentals, while keeping the bulk of your funds securely accessible on a pre-loaded multi-currency international student Forex card.",
    },
    {
      q: "Can I open an overseas bank account before leaving India?",
      a: "Yes, in many major destinations like Canada (via GIC accounts with CIBC, Scotiabank, or ICICI Canada) and Germany (Blocked Accounts with Coracle/Expatrio), student accounts are opened and funded prior to departure from India.",
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-800 antialiased overflow-hidden">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#f0f4f9] via-white to-slate-50 border-b border-gray-100 overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div
              className={`lg:col-span-6 text-center lg:text-left transition-all duration-1000 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-[#e52928] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#e52928] animate-ping" />
                Smooth Transition to Life Abroad
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-tight uppercase">
                Pre-Departure <span className="text-[#e52928]">Guidance</span>
              </h1>

              <div className="mt-4 flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="ml-2 text-xs font-semibold text-slate-600">
                  Trusted by 2500+ Students & Skilled Immigrants
                </span>
              </div>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Comprehensive pre-landing orientation covering international travel checklists, foreign currency, accommodation setup, packing guidelines, and campus culture.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#book-consultation"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#e52928] hover:bg-[#c9201f] text-white font-bold text-base shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
                >
                  <span>Book Pre-Departure Session</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href="tel:+919173186109"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0a1e38] hover:bg-[#122846] text-white font-bold text-base transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2.5 shadow-md group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#e52928] transition-colors">
                    <PhoneIcon />
                  </span>
                  <span>+91 91731 86109</span>
                </a>
              </div>

              {/* Quick Key Highlights */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-2 max-w-md mx-auto lg:mx-0 text-center">
                <div className="px-2">
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38]">Zero</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Airport Stress</div>
                </div>
                <div className="px-2 border-x border-slate-200">
                  <div className="text-xl sm:text-2xl font-black text-[#e52928]">100%</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Compliance</div>
                </div>
                <div className="px-2">
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38]">24/7</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Arrival Support</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image (Circular graphic with red border & badges) */}
            <div
              className={`lg:col-span-6 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] aspect-square flex items-center justify-center anim-gentle-float">
                <Image
                  src="/pre-departure-hero.png"
                  alt="Pre-Departure Guidance - Umang Career Consultancy"
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

      {/* ================= 2. WHAT IS PRE-DEPARTURE GUIDANCE ================= */}
      <section ref={whatRef} className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What is Pre-Departure Guidance?" inView={whatInView} />

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ease-out transform ${
              whatInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-700 text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
                Pre-departure guidance helps you prepare for moving abroad for study, work, PR, or travel. It covers important travel requirements, cultural awareness, finances, health and safety, packing, accommodation, and practical arrangements. At <strong className="font-semibold text-[#0a1e38]">Umang Career Consultancy</strong>, we help you understand what to prepare before your journey so you can travel with greater confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURES OF OUR PRE-DEPARTURE SERVICE (8 Cards) ================= */}
      <section ref={featuresRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Features of Our Pre-Departure Guidance Service"
            subtitle="Everything you need to step on the plane fully prepared, organized, and excited"
            inView={featuresInView}
          />

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {serviceFeatures.map((feat, idx) => {
              const delays = [
                "delay-100",
                "delay-200",
                "delay-300",
                "delay-400",
                "delay-500",
                "delay-600",
                "delay-700",
                "delay-800",
              ];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-700 ease-out border border-slate-100 flex flex-col items-start group transform hover:-translate-y-2 ${delayClass} ${
                    featuresInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                  }`}
                >
                  {/* Icon Container with Contrast Fix */}
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#e52928] flex items-center justify-center mb-5 border border-red-100 group-hover:bg-[#e52928] group-hover:border-[#e52928] group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/25 transition-all duration-300">
                    <span className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {feat.icon}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1e38] mb-2.5 group-hover:text-[#e52928] transition-colors leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. PRE-DEPARTURE ROADMAP (NAVY SECTION) ================= */}
      <section
        ref={processRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Pre-Departure Preparation Roadmap"
            subtitle="A step-by-step checklist to ensure you never miss an essential task prior to boarding"
            variant="dark"
            inView={processInView}
          />

          {/* 8 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {processSteps.map((stepItem, idx) => {
              const delays = [
                "delay-100",
                "delay-200",
                "delay-300",
                "delay-400",
                "delay-500",
                "delay-600",
                "delay-700",
                "delay-800",
              ];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-[#0e274a]/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#22c55e]/50 hover:bg-[#13325c] transition-all duration-700 ease-out flex flex-col justify-between group transform hover:-translate-y-1.5 shadow-lg ${delayClass} ${
                    processInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                  }`}
                >
                  <div>
                    {/* Header: Step Number & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-black text-white/30 tracking-tight group-hover:text-[#22c55e] transition-colors">
                        {stepItem.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#22c55e]/20 group-hover:border-[#22c55e]/40 transition-colors">
                        {stepItem.icon}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#22c55e] transition-colors leading-snug">
                      {stepItem.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {stepItem.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[#22c55e] text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                    <span>Step {stepItem.step}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. FREQUENTLY ASKED QUESTIONS (8 FAQS) ================= */}
      <section ref={faqRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions (FAQs)"
            subtitle="Common questions answered to make your relocation completely seamless"
            inView={faqInView}
          />

          {/* 2-Column Accordion Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-10">
            {faqs.map((faq, index) => {
              const isOpen = !!openFaqs[index];
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-[#0a1e38] text-white border-[#0a1e38] shadow-lg"
                      : "bg-[#0a1e38] text-white border-[#0a1e38]/80 hover:bg-[#0e274a]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  >
                    <span className="font-bold text-sm sm:text-base leading-snug pr-2 text-white">
                      {faq.q}
                    </span>
                    <span className="shrink-0">
                      <ChevronDownIcon isOpen={isOpen} />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 px-5 sm:px-6 pb-6" : "max-h-0 opacity-0 px-5 sm:px-6 pb-0"
                    }`}
                  >
                    <div className="pt-2 border-t border-white/10 text-slate-200 text-xs sm:text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 6. PREPARE FOR YOUR JOURNEY (CALL BAR) ================= */}
      <section ref={ctaRef} className="w-full py-12 sm:py-16 bg-[#e52928] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ease-out transform ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-md bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
                Pre-Flight Orientation
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Prepare for Your Journey With Confidence
              </h3>
              <p className="mt-2 text-white/90 text-sm sm:text-base leading-relaxed">
                Get practical pre-departure guidance and make your transition to a new country more organized and comfortable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="tel:+919173186109"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-[#e52928] hover:bg-slate-100 font-extrabold text-base transition-all duration-200 shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-0.5 group"
              >
                <span className="w-8 h-8 rounded-full bg-red-100 text-[#e52928] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 fill-current anim-ring-phone" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </span>
                <span>Call +91 91731 86109</span>
              </a>

              <a
                href="#book-consultation"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0a1e38] hover:bg-[#122846] text-white font-bold text-base transition-all duration-200 shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Book Orientation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. TALK TO OUR COUNSELLORS (BOOKING FORM) ================= */}
      <section
        id="book-consultation"
        ref={bookRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Talk to Our Counsellors"
            subtitle="Schedule your personalized one-on-one pre-departure briefing session"
            inView={bookInView}
          />

          <div
            className={`mt-10 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl transition-all duration-700 ease-out transform ${
              bookInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0a1e38]">Pre-Departure Session Booked!</h3>
                <p className="mt-2 text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thank you, <strong>{formData.name}</strong>. Our student orientation coordinator will contact you on <strong>{formData.phone}</strong> with your personalized departure checklist.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 inline-flex px-6 py-2.5 rounded-lg bg-[#e52928] text-white font-semibold text-sm hover:bg-[#c9201f] transition-colors"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Destination Country *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Australia">Australia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Germany / Europe">Germany / Europe</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>

                  {/* Visa Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Visa Category *
                    </label>
                    <select
                      value={formData.visaType}
                      onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Student Visa">Student Visa (Higher Education)</option>
                      <option value="PR / Immigration">Permanent Residency (PR)</option>
                      <option value="Spouse Visa">Spouse / Partner Visa</option>
                      <option value="Visitor / Tourist">Visitor / Tourist Visa</option>
                      <option value="Work Permit">Work Permit / Job Relocation</option>
                    </select>
                  </div>

                  {/* Departure Timeline */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Expected Departure Timeline *
                    </label>
                    <select
                      value={formData.departureTime}
                      onChange={(e) => setFormData({ ...formData, departureTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Within 2 Weeks">Within 2 Weeks (Urgent)</option>
                      <option value="In 1 to 2 Months">In 1 to 2 Months</option>
                      <option value="In 3 to 6 Months">In 3 to 6 Months</option>
                      <option value="Planning Ahead">More than 6 Months</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    University / City Name or Specific Inquiries (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention your university, destination city, accommodation concerns, or foreign currency questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all resize-none"
                  />
                </div>

                {/* Submit & WhatsApp Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#e52928] hover:bg-[#c9201f] text-white font-extrabold text-base shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Confirm Briefing Session
                  </button>

                  <a
                    href="https://wa.me/919173186109?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Pre-Departure%20Guidance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
