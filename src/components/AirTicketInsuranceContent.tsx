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

export default function AirTicketInsuranceContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [introInView, setIntroInView] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(false);
  const [processInView, setProcessInView] = useState(false);
  const [partnersInView, setPartnersInView] = useState(false);
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
  const introRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLElement>(null);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Both Flight & Travel Insurance",
    destination: "United Kingdom",
    travelMonth: "In 1 to 2 Months",
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
          if (entry.target === introRef.current) setIntroInView(true);
          if (entry.target === featuresRef.current) setFeaturesInView(true);
          if (entry.target === processRef.current) setProcessInView(true);
          if (entry.target === partnersRef.current) setPartnersInView(true);
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

    if (introRef.current) observer.observe(introRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (processRef.current) observer.observe(processRef.current);
    if (partnersRef.current) observer.observe(partnersRef.current);
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
     1. CORE PILLARS (4 Main Sections from Competitor Prompt)
  ------------------------------------------------------------- */
  const corePillars = [
    {
      title: "Assistance with Flight Bookings",
      desc: "We help you find and book flights based on your destination, preferred schedule, budget, and travel requirements. Our guidance makes it easier to compare suitable options and plan your journey efficiently.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      title: "Travel Guidelines & Protocols",
      desc: "We provide essential travel information and guidance to help you prepare for your international journey, including baggage regulations, transit visa rules, and destination-specific immigration considerations.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Airport Pick-up & Shuttles",
      desc: "We assist with arranging reliable airport transfers so you can reach your university dormitory or accommodation safely and comfortably immediately after arriving at your overseas destination.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: "Comprehensive Travel Insurance",
      desc: "We help you understand and choose suitable travel insurance coverage for your journey. From emergency hospitalization to flight disruptions and lost baggage, we keep you fully prepared and protected abroad.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     2. 6 FEATURE CARDS (Detailed Value Adds)
  ------------------------------------------------------------- */
  const serviceFeatures = [
    {
      title: "Exclusive Student Baggage Fares",
      description:
        "Access special student airline tariffs with up to 40kg–46kg checked baggage allowances and flexible cancellation terms across global carriers.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Layover & Transit Visa Guidance",
      description:
        "Careful routing analysis to avoid complex transit visas during European, Middle Eastern, or Asian stopovers, ensuring smooth transfers.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Cashless Medical Emergency Cover",
      description:
        "Global cashless hospitalization coverage up to $500,000 for unexpected medical illnesses, outpatient treatments, and dental emergencies.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Flight Delay & Cancellation Shield",
      description:
        "Financial compensation for missed airline connections, extended flight delays, trip curtailment, or compulsory hotel stay costs.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Lost Passport & Luggage Protection",
      description:
        "Comprehensive indemnity coverage for lost check-in luggage, delayed baggage delivery, and emergency duplicate passport reissue expenses.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Destination Airport Pick-up & Transit",
      description:
        "Pre-scheduled meet-and-greet airport transfer services ensuring safe, prompt transit to student residence halls or rented apartments.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     3. 8-STEP PROCESS (Navy Section)
  ------------------------------------------------------------- */
  const processSteps = [
    {
      step: "01",
      title: "Travel Dates & Intake Review",
      desc: "Align your departure window with university orientation dates, course commencement, or visa entry validity.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Airline & Fare Comparison",
      desc: "Compare top carriers (Air India, Emirates, Qatar, British Airways) for student discounts and maximum baggage allowances.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Flight Ticket Booking",
      desc: "Lock in flexible flight tickets with student privileges, verified PNR confirmation, and seat preferences.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Insurance Policy Selection",
      desc: "Select a customized travel insurance policy compliant with embassy mandates and destination medical requirements.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      step: "05",
      title: "Transit & Layover Audit",
      desc: "Verify airport layover times, transfer terminals, and transit visa prerequisites across intermediate stopovers.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: "06",
      title: "Airport Transfer Arrangement",
      desc: "Coordinate with university international student pickup services or pre-book secure airport taxi transfers.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      ),
    },
    {
      step: "07",
      title: "Digital Insurance Card & Helplines",
      desc: "Receive your policy e-card, claim submission protocol, and 24/7 worldwide emergency medical assistance numbers.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
    },
    {
      step: "08",
      title: "Web Check-In & Departure Briefing",
      desc: "Get assistance with online seat selection, boarding passes, and final baggage weight checks before you fly.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     4. TRUSTED INSURANCE PARTNERS (From Reference Image 3)
  ------------------------------------------------------------- */
  const partners = [
    { name: "Allianz Global Assistance", label: "Worldwide Cashless Network", color: "text-blue-700", border: "border-blue-200" },
    { name: "TATA AIG Insurance", label: "Comprehensive Student Plans", color: "text-[#0a1e38]", border: "border-slate-300" },
    { name: "IFFCO-TOKIO General Insurance", label: "Emergency Medical & Baggage", color: "text-emerald-700", border: "border-emerald-200" },
    { name: "Bajaj Allianz General Insurance", label: "Global Student Health Cover", color: "text-blue-600", border: "border-blue-200" },
    { name: "HDFC ERGO General Insurance", label: "24/7 International Assistance", color: "text-red-700", border: "border-red-200" },
    { name: "ICICI Lombard", label: "Instant Digital Policy Claim", color: "text-amber-700", border: "border-amber-200" },
  ];

  /* -------------------------------------------------------------
     5. FREQUENTLY ASKED QUESTIONS (8 FAQs)
  ------------------------------------------------------------- */
  const faqs = [
    {
      q: "Do students get extra baggage allowance on international flights?",
      a: "Yes. Most leading international airlines (like Air India, Emirates, Qatar Airways, British Airways, and Singapore Airlines) offer special student fares that include an additional 10kg to 23kg of check-in baggage upon presenting a valid student visa and university offer letter.",
    },
    {
      q: "Is travel insurance mandatory for international travel and student visas?",
      a: "Yes. For destinations like the Schengen European countries, comprehensive travel medical insurance with minimum coverage of €30,000 is legally required for visa approval. For countries like the UK, USA, Canada, and Australia, having insurance during transit and initial arrival protects against exorbitant overseas medical expenses.",
    },
    {
      q: "What is the difference between travel insurance and university health insurance?",
      a: "University health coverage (like UK NHS surcharge or Australia OSHC) only becomes operational once you arrive in your host country and complete enrollment. Travel insurance covers the critical transit period, flight cancellations, lost baggage, transit medical emergencies, and delays before university coverage kicks in.",
    },
    {
      q: "Can I change my flight date if my visa is delayed?",
      a: "Yes. When you book your ticket through Umang Career Consultancy, we prioritize student-flex tickets that allow date modifications with minimal or zero penalty fees in case of visa processing delays.",
    },
    {
      q: "How do I claim insurance if my luggage is lost or delayed?",
      a: "If your baggage is misplaced, immediately obtain a Property Irregularity Report (PIR) from the airline arrival desk. Then contact the 24/7 insurer toll-free helpline provided in your policy to initiate emergency essential clothing reimbursement or full claim settlement.",
    },
    {
      q: "Does travel insurance cover emergency medical expenses and hospitalization?",
      a: "Yes. Our partner policies cover cashless inpatient hospitalization, doctor consultations, emergency medical evacuation, and acute dental relief across worldwide hospitals without out-of-pocket expenses.",
    },
    {
      q: "How is airport pickup arranged at the destination?",
      a: "Many universities offer complimentary airport welcome services during intake weeks. If not available, we coordinate pre-booked verified transfer cabs that meet you at the arrival terminal and drop you directly at your accommodation address.",
    },
    {
      q: "When should I book my flight tickets?",
      a: "We recommend monitoring flight fares in advance and booking flexible student fares as soon as your visa is approved. Early booking guarantees lower airfares and ensures seat availability during peak student intake months (July–September and December–January).",
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
                Secure Flights & Comprehensive Coverage
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-tight uppercase">
                Air Ticket | <span className="text-[#e52928]">Travel Insurance</span>
              </h1>

              <div className="mt-4 flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="ml-2 text-xs font-semibold text-slate-600">
                  Trusted by 2000+ Students & Travelers Across 50+ Countries
                </span>
              </div>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Planning international travel involves more than just booking a flight. At Umang Career Consultancy, we help students and travellers arrange suitable flights and understand their travel insurance options, making their journey more comfortable, secure, and stress-free.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#book-consultation"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#e52928] hover:bg-[#c9201f] text-white font-bold text-base shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
                >
                  <span>Book Free Counselling</span>
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
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38]">40KG+</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Student Baggage</div>
                </div>
                <div className="px-2 border-x border-slate-200">
                  <div className="text-xl sm:text-2xl font-black text-[#e52928]">Cashless</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Global Claims</div>
                </div>
                <div className="px-2">
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38]">24/7</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Travel Support</div>
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
                  src="/air-ticket-insurance-hero.png"
                  alt="Air Ticket & Travel Insurance - Umang Career Consultancy"
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

      {/* ================= 2. CORE PILLARS & BOARDING PASS WIDGET ================= */}
      <section ref={introRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Air Ticket / Travel Insurance"
            subtitle="Complete travel comfort from your hometown to your overseas campus"
            inView={introInView}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-12">
            
            {/* Left: Stylish Boarding Pass Illustration Widget (Matching Reference 2) */}
            <div
              className={`lg:col-span-5 flex flex-col gap-5 transition-all duration-1000 ease-out transform ${
                introInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              {/* Boarding Pass 1: Teal Card */}
              <div className="relative bg-gradient-to-r from-[#00897b] to-[#004d40] text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-teal-400/20 overflow-hidden transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span className="text-xs font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full">
                    BOARDING PASS
                  </span>
                  <span className="text-xs font-bold tracking-wider text-teal-200">FIRST CLASS / STUDENT</span>
                  <span className="text-lg font-black">SEAT 15 D</span>
                </div>

                <div className="grid grid-cols-3 gap-4 my-5 text-center">
                  <div>
                    <div className="text-[11px] text-teal-200 uppercase">SEAT</div>
                    <div className="text-xl sm:text-2xl font-black text-white">15 D</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-teal-200 uppercase">ZONE</div>
                    <div className="text-xl sm:text-2xl font-black text-white">08</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-teal-200 uppercase">GATE</div>
                    <div className="text-xl sm:text-2xl font-black text-white">14</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-dashed border-white/30 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-teal-200">PASSENGER NAME</div>
                    <div className="font-bold text-sm">INTERNATIONAL STUDENT</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Boarding Pass 2: Have a Nice Flight Widget */}
              <div className="relative bg-[#00897b] text-white rounded-3xl p-6 shadow-xl border border-teal-300/30 flex items-center justify-between overflow-hidden">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-teal-100 uppercase tracking-widest">FLY WITH CONFIDENCE</div>
                  <div className="text-xl sm:text-2xl font-black tracking-tight">HAVE A NICE FLIGHT</div>
                  <div className="text-xs text-teal-100/90 pt-1">
                    Verified Baggage • Cashless Insurance • Safe Arrival
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <svg className="w-9 h-9 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: The 4 Core Pillars */}
            <div
              className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-200 ease-out transform ${
                introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 text-sm sm:text-base leading-relaxed">
                Choosing the right airline and flight may be both complex and challenging. We, at <strong className="font-semibold text-[#0a1e38]">Umang Career Consultancy</strong>, understand the students&apos; and their parents&apos; concerns. We not only provide students with end-to-end comfort by arranging flights from their home country to a foreign land or desired destination, but we also alleviate parents&apos; concerns by providing comprehensive travel insurance.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {corePillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#e52928]/40 transition-all flex flex-col group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e52928] flex items-center justify-center mb-4 group-hover:bg-[#e52928] group-hover:text-white transition-colors">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#0a1e38] mb-2 group-hover:text-[#e52928] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. DETAILED VALUE ADDS (6 Cards Grid) ================= */}
      <section ref={featuresRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Comprehensive Travel & Insurance Features"
            subtitle="Tailored student flight arrangements and worldwide medical protections"
            inView={featuresInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {serviceFeatures.map((feat, idx) => {
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
                  className={`bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-700 ease-out border border-slate-100 flex flex-col items-start group transform hover:-translate-y-2 ${delayClass} ${
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

                  <h3 className="text-xl font-bold text-[#0a1e38] mb-3 group-hover:text-[#e52928] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. 8-STEP PROCESS (NAVY SECTION) ================= */}
      <section
        ref={processRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Flight & Insurance Booking Process"
            subtitle="From itinerary planning to web check-in, we manage every step of your overseas transit"
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

      {/* ================= 5. TRUSTED INSURANCE PARTNERS (Matching Reference 3) ================= */}
      <section ref={partnersRef} className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Travel Insurance Partners"
            subtitle="Accredited underwriting partners offering worldwide cashless hospitalization and swift claims"
            inView={partnersInView}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border ${p.border} shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center group transform hover:-translate-y-1`}
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-slate-700 group-hover:bg-[#e52928] group-hover:text-white transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                <h4 className={`text-lg font-bold ${p.color} mb-1`}>
                  {p.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. FREQUENTLY ASKED QUESTIONS (8 FAQS) ================= */}
      <section ref={faqRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions (FAQs)"
            subtitle="Clear answers about student baggage allowances, insurance claims, and flight bookings"
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

      {/* ================= 7. CALL BAR: BOOK FREE COUNSELLING ================= */}
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
                Seamless International Travel
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Book Free Counselling
              </h3>
              <p className="mt-2 text-white/90 text-sm sm:text-base leading-relaxed">
                Just contact us and let Umang Career Consultancy help you plan a smooth and secure journey abroad.
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
                <span>Free Flight Quote</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. TALK TO OUR FLIGHT & INSURANCE EXPERTS (FORM) ================= */}
      <section
        id="book-consultation"
        ref={bookRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Talk to Our Flight & Insurance Counsellors"
            subtitle="Fill out your travel details to receive student discount fare options and customized insurance quotes"
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
                <h3 className="text-2xl font-bold text-[#0a1e38]">Flight & Insurance Request Received!</h3>
                <p className="mt-2 text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thank you, <strong>{formData.name}</strong>. Our ticketing and insurance officer will contact you on <strong>{formData.phone}</strong> with student fare quotes and policy details for {formData.destination}.
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
                      placeholder="e.g. Meet Shah"
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
                      placeholder="e.g. meet@example.com"
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
                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Both Flight & Travel Insurance">Both Flight Ticket & Travel Insurance</option>
                      <option value="Flight Booking Only">Flight Ticket Booking Only</option>
                      <option value="Travel Insurance Only">Travel Medical Insurance Only</option>
                      <option value="Airport Pick-up Assistance">Airport Pick-up & Transfer Only</option>
                    </select>
                  </div>

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
                      <option value="United Kingdom">United Kingdom (London, Manchester, etc.)</option>
                      <option value="Canada">Canada (Toronto, Vancouver, Montreal, etc.)</option>
                      <option value="United States">United States (New York, Chicago, Dallas, etc.)</option>
                      <option value="Australia">Australia (Melbourne, Sydney, Brisbane, etc.)</option>
                      <option value="Germany / Schengen">Germany / Schengen Europe</option>
                      <option value="New Zealand">New Zealand (Auckland, Wellington, etc.)</option>
                      <option value="Other">Other Global Destination</option>
                    </select>
                  </div>

                  {/* Tentative Travel Month */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Expected Departure Timeline *
                    </label>
                    <select
                      value={formData.travelMonth}
                      onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Within 2 Weeks">Within 2 Weeks (Immediate)</option>
                      <option value="In 1 to 2 Months">In 1 to 2 Months</option>
                      <option value="In 3 to 6 Months">In 3 to 6 Months</option>
                      <option value="Planning Ahead">More than 6 Months</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Departure City / Baggage Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Flying from Ahmedabad or Mumbai, looking for 40kg student baggage and 1-year multi-trip medical insurance..."
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
                    Request Fare & Insurance Quote
                  </button>

                  <a
                    href="https://wa.me/919173186109?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Air%20Ticket%20Booking%20and%20Travel%20Insurance."
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
