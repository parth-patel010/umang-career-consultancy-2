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

export default function AccommodationContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [whatInView, setWhatInView] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(false);
  const [compareInView, setCompareInView] = useState(false);
  const [processInView, setProcessInView] = useState(false);
  const [testimonialsInView, setTestimonialsInView] = useState(false);
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
  const compareRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLElement>(null);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "United Kingdom",
    housingType: "Private Student Studio / Ensuite (PBSA)",
    budget: "£500 - £800 / month",
    university: "",
    moveInDate: "September Intake",
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
          if (entry.target === compareRef.current) setCompareInView(true);
          if (entry.target === processRef.current) setProcessInView(true);
          if (entry.target === testimonialsRef.current) setTestimonialsInView(true);
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
    if (compareRef.current) observer.observe(compareRef.current);
    if (processRef.current) observer.observe(processRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
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
     1. 8 SERVICE FEATURES (Shuffled & Elevated with High-Contrast Hover)
  ------------------------------------------------------------- */
  const serviceFeatures = [
    {
      title: "Personalized Housing Options",
      description:
        "Explore curated accommodation options tailored to your monthly budget, preferred lifestyle, room type (ensuite/studio/shared), and university location.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Pre-Arrival Confirmed Booking",
      description:
        "Lock in your accommodation address and receive an official booking confirmation voucher prior to flying, avoiding arrival stress and hotel expenses.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Convenient Campus Locations",
      description:
        "Evaluate housing based on safe walking distances to university campus buildings, subway/bus connectivity, supermarkets, and international student hubs.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Lease Agreement & Legal Guidance",
      description:
        "Careful review of tenancy contracts, security deposits, cooling-off periods, utility bill inclusions (heating/Wi-Fi/water), and guarantor terms.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Verified Accommodation Providers",
      description:
        "Partnership with accredited student housing platforms (AmberStudent, Casita, Unite Students, Student.com) to guarantee legitimate, scam-free properties.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Simple & Transparent Process",
      description:
        "Step-by-step assistance from virtual room tours to booking contract execution without hidden broker commissions or surprise maintenance fees.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Short-Term & Emergency Housing",
      description:
        "Assistance with flexible short-term student apartments, homestays, or verified hostels for early arrivals prior to university hall move-in dates.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Post-Arrival Settlement Support",
      description:
        "Guidance on check-in formalities, inventory check inspection, local council tax student exemption filing, Wi-Fi setup, and maintenance protocols.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     2. 8-STEP PROCESS (Navy Section)
  ------------------------------------------------------------- */
  const processSteps = [
    {
      step: "01",
      title: "Preference & Budget Audit",
      desc: "Discuss budget limits, university campus location, room type preferences (studio, ensuite, shared apartment), and lease duration.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Campus Proximity & Transit Check",
      desc: "Filter properties based on walking distance or direct bus/subway links to your university faculty and safety ratings.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Property Shortlisting & Virtual Tours",
      desc: "Explore shortlisted verified apartments with 360° virtual tours, floor plans, room photographs, and utility bill breakdowns.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Verified Housing Provider Selection",
      desc: "Connect directly with accredited student housing networks and university-vetted private accommodations.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      step: "05",
      title: "Tenancy Agreement & Deposit Review",
      desc: "Scrutinize the tenancy contract, cancellation policies, refundable security deposit terms, and guarantor requirements.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: "06",
      title: "Room Booking & Official Confirmation",
      desc: "Lock in your room reservation, complete the secure online deposit, and receive your official accommodation confirmation voucher.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      step: "07",
      title: "Airport Transit & Move-In Coordination",
      desc: "Schedule your check-in time with building reception, arrange airport pickup straight to your door, and collect your keys.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      step: "08",
      title: "Settlement & Council Tax Exemption",
      desc: "Complete your inventory checklist, inspect room amenities, setup Wi-Fi, and register for student council tax exemption.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     3. TESTIMONIALS (From User Prompt)
  ------------------------------------------------------------- */
  const testimonials = [
    {
      name: "Zainab Shaikh",
      role: "Student (UK)",
      review:
        "Umang helped me understand different accommodation options before travelling abroad. Their guidance made it much easier to plan where I would stay after arrival.",
    },
    {
      name: "Jihan Desai",
      role: "Student (Canada)",
      review:
        "The team helped me explore accommodation options close to my university and within my budget. The process was simple and well explained.",
    },
    {
      name: "Asmit",
      role: "Student (Australia)",
      review:
        "I was unsure about arranging accommodation before travelling, but Umang guided me through the available options and helped make the process much less stressful.",
    },
  ];

  /* -------------------------------------------------------------
     4. FREQUENTLY ASKED QUESTIONS (12 FAQs in 2 Columns)
  ------------------------------------------------------------- */
  const faqs = [
    {
      q: "Why do I need accommodation assistance when studying abroad?",
      a: "Finding housing from India can be challenging due to unfamiliar rental laws, currency conversions, transit zones, and the risk of online rental scams. Our assistance ensures you secure verified, safe, and university-accessible housing before you fly.",
    },
    {
      q: "What types of accommodation options are available?",
      a: "Common options include on-campus university halls of residence, purpose-built student accommodations (PBSA) with private en-suites or studios, private shared apartments with fellow students, and local family homestays.",
    },
    {
      q: "Can Umang help with accommodation booking?",
      a: "Yes. We guide you through selecting reputable providers, reviewing floor plans, understanding tenancy contracts, arranging virtual viewings, and completing your booking reservation safely.",
    },
    {
      q: "Is accommodation assistance only available for students?",
      a: "While our primary focus is international university students, we also provide guidance for working professionals on post-study work permits, PR holders, and families relocating overseas.",
    },
    {
      q: "Do you assist with short-term accommodation?",
      a: "Yes. If your long-term lease begins after your arrival date or you wish to view properties in person before signing a year-long lease, we help arrange temporary serviced apartments, student hostels, or homestays.",
    },
    {
      q: "How can I check whether accommodation is suitable and reliable?",
      a: "We only recommend properties through accredited student housing networks with verified landlord certifications, 24/7 on-site security, CCTV surveillance, and positive feedback from past international students.",
    },
    {
      q: "Can I choose my accommodation based on my preferences?",
      a: "Absolutely. You can specify preferences such as private bathroom (ensuite), single vs shared occupancy, female-only/male-only flats, proximity to specific campus faculties, or budget constraints.",
    },
    {
      q: "Is accommodation assistance included in the consultancy fee?",
      a: "Yes. Basic accommodation guidance and partner shortlisting are seamlessly integrated into our comprehensive study abroad advisory package without exorbitant extra charges.",
    },
    {
      q: "Can you help me understand accommodation agreements and paperwork?",
      a: "Yes. We review the tenancy agreement terms, payment schedules, rent deposit protection schemes (TDS in UK, RTB in Ireland), cancellation policies, and inventory clauses to ensure you are legally protected.",
    },
    {
      q: "What should I do if I face an accommodation issue after arrival?",
      a: "Our student support team remains accessible post-arrival. We guide you on contacting your building's facilities management, filing maintenance tickets, or escalating tenant rights concerns to local housing ombudsman services.",
    },
    {
      q: "How early should I request accommodation assistance?",
      a: "We strongly advise booking your student housing 2 to 4 months before your intake commences. Quality rooms near top universities fill up quickly, and booking early guarantees the lowest rent tariffs.",
    },
    {
      q: "Can I get accommodation guidance for different countries?",
      a: "Yes. We provide country-specific housing support for the UK, Canada, USA, Australia, Germany, Ireland, and New Zealand, aligning with each country's unique tenancy laws and rental standards.",
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
                Secure & Comfortable Student Housing Abroad
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-tight uppercase">
                Accommodation <span className="text-[#e52928]">Assistance</span>
              </h1>

              <div className="mt-4 flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="ml-2 text-xs font-semibold text-slate-600">
                  Trusted by 2000+ Students Settled in Safe Overseas Housing
                </span>
              </div>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Finding the right place to stay is an essential part of moving overseas. We help you explore verified on-campus dorms, private student apartments, and homestays close to your campus with safe, budget-friendly lease terms.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#book-consultation"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#e52928] hover:bg-[#c9201f] text-white font-bold text-base shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
                >
                  <span>Explore Housing Options</span>
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
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38]">100%</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Verified Rooms</div>
                </div>
                <div className="px-2 border-x border-slate-200">
                  <div className="text-xl sm:text-2xl font-black text-[#e52928]">All Bills</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Included Options</div>
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
                  src="/accommodation-hero.png"
                  alt="Accommodation Assistance - Umang Career Consultancy"
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

      {/* ================= 2. WHAT IS ACCOMMODATION ASSISTANCE ================= */}
      <section ref={whatRef} className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What is Accommodation Assistance?" inView={whatInView} />

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ease-out transform ${
              whatInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-700 text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
                Accommodation assistance helps students find suitable housing while preparing to study abroad. Finding the right place to stay is an important part of moving to a new country, as it can affect your budget, comfort, safety, and daily routine. At <strong className="font-semibold text-[#0a1e38]">Umang Career Consultancy</strong>, we provide guidance to help you explore accommodation options based on your destination, budget, location preferences, and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURES OF ACCOMMODATION ASSISTANCE (8 Cards) ================= */}
      <section ref={featuresRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Features of Our Accommodation Assistance Service"
            subtitle="Tailored housing solutions designed for comfort, security, and proximity to your campus"
            inView={featuresInView}
          />

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

      {/* ================= 4. STUDENT HOUSING TYPES COMPARISON ================= */}
      <section ref={compareRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore Overseas Housing Types"
            subtitle="Understand the distinct advantages of each accommodation category"
            inView={compareInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Type 1: On-Campus Halls */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#e52928] transition-all flex flex-col justify-between group transform hover:-translate-y-1.5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0a1e38] flex items-center justify-center font-bold text-lg mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                <h3 className="text-xl font-bold text-[#0a1e38] mb-2 group-hover:text-[#e52928] transition-colors">
                  University On-Campus Halls
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Owned and managed by your university. Located directly on campus grounds, offering exceptional security and social integration for first-year students.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Zero daily commute to lecture halls</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>All utilities (heating, water, Wi-Fi) included</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Catered or self-catered meal plans</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#0a1e38]">
                Best for 1st Year Undergraduates
              </div>
            </div>

            {/* Type 2: Private PBSA (Ensuites & Studios) */}
            <div className="bg-slate-50 rounded-3xl p-8 border-2 border-red-200 shadow-md hover:shadow-xl hover:border-[#e52928] transition-all flex flex-col justify-between group transform hover:-translate-y-1.5 relative">
              <div className="absolute top-4 right-4 bg-[#e52928] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                Most Popular
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-lg mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg></div>
                <h3 className="text-xl font-bold text-[#0a1e38] mb-2 group-hover:text-[#e52928] transition-colors">
                  Private PBSA (Studios & Ensuites)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Purpose-Built Student Accommodations offering modern private bedrooms with attached bathrooms, shared/private kitchens, and premium communal amenities.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>On-site gym, cinema room, & study lounges</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>24/7 concierge, CCTV & secure keycard access</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>High-speed Wi-Fi and content insurance included</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-red-100 text-xs font-bold text-[#e52928]">
                Best for Independent Living & Postgrads
              </div>
            </div>

            {/* Type 3: Homestays & Shared Flats */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0a1e38] transition-all flex flex-col justify-between group transform hover:-translate-y-1.5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></div>
                <h3 className="text-xl font-bold text-[#0a1e38] mb-2 group-hover:text-[#0a1e38] transition-colors">
                  Homestays & Shared Rentals
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Live with a welcoming local host family or rent a shared house with classmates. Highly budget-friendly with authentic cultural immersion.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Home-cooked meals and local guidance</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Flexible lease durations and monthly terms</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Economical shared living costs</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#0a1e38]">
                Best for Budget Optimization & Culture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. 8-STEP ACCOMMODATION ROADMAP (NAVY SECTION) ================= */}
      <section
        ref={processRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Accommodation Search & Booking Roadmap"
            subtitle="A transparent, step-by-step procedure to secure verified housing before departure"
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

      {/* ================= 6. TESTIMONIALS (FROM USER PROMPT) ================= */}
      <section ref={testimonialsRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="See What Our Clients Are Saying"
            subtitle="Real experiences from students who found their international homes through Umang"
            inView={testimonialsInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testi, idx) => {
              const delays = ["delay-100", "delay-200", "delay-300"];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-700 ease-out flex flex-col justify-between transform hover:-translate-y-2 group ${delayClass} ${
                    testimonialsInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                  }`}
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                      <span className="ml-2 font-bold text-slate-800 text-sm">5/5</span>
                    </div>

                    {/* Quote text */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                      &ldquo;{testi.review}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[#0a1e38] text-base group-hover:text-[#e52928] transition-colors">
                        {testi.name}
                      </h4>
                      <p className="text-xs text-slate-500">{testi.role}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-red-100 text-[#e52928] flex items-center justify-center font-bold text-sm">
                      {testi.name.charAt(0)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 7. FREQUENTLY ASKED QUESTIONS (12 FAQS) ================= */}
      <section ref={faqRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions (FAQs)"
            subtitle="Answers to common queries regarding student housing, lease terms, and booking"
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

      {/* ================= 8. CALL BAR: MAKE YOUR ARRIVAL EASIER ================= */}
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
                Stress-Free Settlement
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Make Your Arrival Easier
              </h3>
              <p className="mt-2 text-white/90 text-sm sm:text-base leading-relaxed">
                Explore suitable accommodation options and prepare for a comfortable start to your journey abroad.
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
                <span>Find My Room</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. TALK TO OUR COUNSELLORS (BOOKING FORM) ================= */}
      <section
        id="book-consultation"
        ref={bookRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Talk to Our Housing Counsellors"
            subtitle="Tell us your university, budget, and room preferences to receive verified accommodation options"
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
                <h3 className="text-2xl font-bold text-[#0a1e38]">Housing Request Received!</h3>
                <p className="mt-2 text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thank you, <strong>{formData.name}</strong>. Our student housing specialist will contact you on <strong>{formData.phone}</strong> with verified room options near your university in {formData.destination}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 inline-flex px-6 py-2.5 rounded-lg bg-[#e52928] text-white font-semibold text-sm hover:bg-[#c9201f] transition-colors"
                >
                  Submit Another Inquiry
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
                      placeholder="e.g. Zainab Shaikh"
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
                      placeholder="e.g. zainab@example.com"
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
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="United Kingdom">United Kingdom (UK)</option>
                      <option value="Canada">Canada</option>
                      <option value="United States">United States (USA)</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany / Europe">Germany / Schengen Europe</option>
                      <option value="Ireland">Ireland</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>

                  {/* Housing Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Housing Preference *
                    </label>
                    <select
                      value={formData.housingType}
                      onChange={(e) => setFormData({ ...formData, housingType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Private Student Studio / Ensuite (PBSA)">Private Studio / Ensuite (PBSA)</option>
                      <option value="University On-Campus Residence">University On-Campus Hall</option>
                      <option value="Shared Student Apartment">Private Shared Student Apartment</option>
                      <option value="Local Host Family Homestay">Local Family Homestay</option>
                      <option value="Temporary / Short-Term Stay">Temporary / Short-Term Stay</option>
                    </select>
                  </div>

                  {/* Monthly Budget */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Monthly Budget (Approx.) *
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Budget: £400 - £600 / $600 - $900">Economical (£400–£600 / $600–$900)</option>
                      <option value="Moderate: £600 - £900 / $900 - $1300">Moderate (£600–£900 / $900–$1300)</option>
                      <option value="Premium: £900+ / $1300+">Premium En-suite / Studio (£900+ / $1300+)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    University Name, City, or Room Preferences (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. University of Manchester, looking for an ensuite room with bills included, move-in by September 15th..."
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
                    Find Verified Rooms
                  </button>

                  <a
                    href="https://wa.me/919173186109?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Student%20Accommodation%20Assistance."
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
