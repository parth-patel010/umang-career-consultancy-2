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

export default function StudentVisaContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [whatInView, setWhatInView] = useState(false);
  const [servicesInView, setServicesInView] = useState(false);
  const [processInView, setProcessInView] = useState(false);
  const [testimonialsInView, setTestimonialsInView] = useState(false);
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
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
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

    const servicesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setServicesInView(true);
    }, observerOptions);

    const processObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setProcessInView(true);
    }, observerOptions);

    const testimonialsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTestimonialsInView(true);
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
    if (servicesRef.current) servicesObserver.observe(servicesRef.current);
    if (processRef.current) processObserver.observe(processRef.current);
    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current);
    if (faqRef.current) faqObserver.observe(faqRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    if (bookRef.current) bookObserver.observe(bookRef.current);

    return () => {
      clearTimeout(timer);
      whatObserver.disconnect();
      servicesObserver.disconnect();
      processObserver.disconnect();
      testimonialsObserver.disconnect();
      faqObserver.disconnect();
      ctaObserver.disconnect();
      bookObserver.disconnect();
    };
  }, []);

  // 1. Our Student Visa Services Include (8 Cards - Shuffled, unique & distinct)
  const visaServices = [
    {
      title: "Precision Document Verification",
      description: "Thorough review of academic transcripts, official offer letters, and translations ensuring complete immigration compliance.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Financial Planning & Proof of Funds",
      description: "Step-by-step guidance on organizing bank statements, GIC, education loans, and sponsorship deeds for financial clearance.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
    },
    {
      title: "Initial Comprehensive Consultation",
      description: "Personalized evaluation of your study destination, academic history, backlog status, and visa eligibility criteria.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Personalized Visa Roadmap",
      description: "A tailored, milestone-based timeline outlining biometrics, fee payment schedules, medical exams, and portal filing.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Visa Interview Preparation",
      description: "One-on-one mock interview drills, embassy question preparation, and expert advice for speaking with conviction.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Work Rights & Post-Study Guidance",
      description: "Complete insights on allowed in-study part-time hours, on-campus jobs, internships, and post-study work permits (PGWP).",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Pre-Departure & Arrival Support",
      description: "Essential briefings before flying: airport reception, foreign currency exchange (Forex), SIM cards, and student housing.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Visa Extension & Renewal Guidance",
      description: "Support with extending study permits, bridging visas, transitioning to work visas, and maintaining legal status overseas.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  // 2. Student Visa Application Process (10 Steps matching Navy Section)
  const processSteps = [
    {
      step: "01",
      title: "Choose Your Destination & Institution",
      desc: "Select the most suitable university and accredited program aligned with your career goals.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Receive Your Official Offer Letter",
      desc: "Fulfill institutional admission conditions to receive your unconditional Offer Letter / I-20 / CAS / COE.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Prepare Necessary Documentation",
      desc: "Compile valid passport, academic mark sheets, IELTS/PTE scores, SOP, and verified bank statements.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Complete the Visa Application Form",
      desc: "Accurately fill out official immigration forms without any discrepancies or typographical errors.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      step: "05",
      title: "Pay Applicable Visa & SEVIS / Embassy Fees",
      desc: "Submit official government visa application fees through secure authorized channels.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
    },
    {
      step: "06",
      title: "Biometrics & Medical Examination",
      desc: "Complete digital fingerprints, photographs, and approved panel physician health checkups.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11c0 1.258.17 2.474.487 3.633" />
        </svg>
      ),
    },
    {
      step: "07",
      title: "Attend the Visa Interview (if applicable)",
      desc: "Confidently face the visa officer with complete documentation and strategic mock interview practice.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      step: "08",
      title: "Track Your Application in Real-Time",
      desc: "Continuous monitoring of official consulate processing status and addressing any additional requests.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      step: "09",
      title: "Receive the Official Visa Decision",
      desc: "Obtain your passport with the stamped student visa sticker or approved Electronic Travel Authorization (eTA).",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: "10",
      title: "Plan Your Travel & Accommodation",
      desc: "Book student flights, arrange on/off-campus housing, and attend our comprehensive pre-departure briefing.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  // 3. Testimonials
  const testimonials = [
    {
      name: "Jay Gajjar",
      destination: "United Kingdom (UK)",
      text: "Umang Career Consultancy's visa interview preparation was spot on! They conducted multiple mock sessions and shared tips that made me feel completely confident and ready. Thanks to their guidance, I cleared my credibility interview on the first attempt!",
    },
    {
      name: "Umar Shaikh",
      destination: "Canada Study Permit",
      text: "Even after my visa was approved, Umang Career Consultancy continued to support me! They helped with everything from GIC accounts and finding student accommodation to packing guidelines, making my transition to studying abroad smooth and exciting.",
    },
    {
      name: "Gunjan Solanki",
      destination: "Australia Higher Education",
      text: "Securing a study visa after an academic gap seemed daunting, but the senior counsellors at Umang Career Consultancy handled every document, SOP justification, and financial paper with extraordinary care. Received my visa grant without any hassles!",
    },
  ];

  // 4. Frequently Asked Questions (8 FAQs from prompt)
  const faqs = [
    {
      q: "How do I apply for a student visa?",
      a: "The process begins with securing an unconditional offer letter and confirmation of enrollment (such as I-20 for USA, CAS for UK, COE for Australia, or LOA for Canada). You then compile your financial proofs, academic records, and language scores, fill out the official visa application, pay embassy fees, and complete biometrics or an interview.",
    },
    {
      q: "Can I work while studying abroad?",
      a: "Yes, most popular study destinations allow international students to work part-time (typically up to 20 or 24 hours per week during academic terms, and full-time during vacations). Our team provides country-specific work rights guidance before you travel.",
    },
    {
      q: "How long does student visa processing take?",
      a: "Processing times vary significantly by country, intake season, and visa category. They generally range from 2 to 8 weeks. We advise applying 3 to 4 months in advance to avoid last-minute delays.",
    },
    {
      q: "Can I extend my student visa if my course continues?",
      a: "Yes, most countries permit student visa extensions or renewals if you advance to a higher credential or require additional time to complete your degree, provided you maintain academic standing and valid enrollment.",
    },
    {
      q: "What happens if my student visa is refused?",
      a: "A refusal is not the end of your dream. Our experts thoroughly review the refusal letter to identify the visa officer's concerns (such as financial documentation or SOP clarity), rectify the file, and assist you in filing a strong reapplication or administrative review.",
    },
    {
      q: "Do I need mandatory health insurance?",
      a: "Yes. Many international destinations mandate student medical coverage—such as OSHC for Australia, NHS surcharge for the UK, or provincial/private student health plans in Canada and the USA. We assist in arranging compliant insurance.",
    },
    {
      q: "Can my family or spouse accompany me on a student visa?",
      a: "Dependent eligibility depends on the destination country, level of degree (e.g. Master's or PhD programs often permit spouse visas with open work permits), and financial readiness. We advise you on the latest immigration regulations for family accompaniment.",
    },
    {
      q: "What should I do after receiving my visa approval?",
      a: "Verify all visa details (passport number, validity dates, travel conditions), book your flights, finalize student accommodation, exchange Forex, and attend our pre-departure orientation briefing.",
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
                Official Student Visa Filing & Advisory
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight uppercase leading-[1.1]">
                Student <span className="text-[#0a1e38]">Visa</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Achieve your dream of international education with complete peace of mind. We provide comprehensive student visa guidance, financial planning, embassy interview drills, and pre-departure support.
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
                  href="#book-student-visa"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0a1e38] hover:bg-[#112a4c] text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Talk to Counsellors</span>
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
                  src="/student-visa-hero.png"
                  alt="Student Visa Guidance - Umang Career Consultancy"
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

      {/* ================= 2. WHAT IS A STUDENT VISA ================= */}
      <section ref={whatRef} className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What is Student Visa ?" inView={whatInView} />

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ease-out transform ${
              whatInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-700 text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
                A student visa is an official authorization that allows an international student to enter and study in another country for a specified period. Requirements vary depending on the country, course, and institution. At <strong className="font-semibold text-[#0a1e38]">Umang Career Consultancy</strong>, we guide students through the visa application process, helping them understand requirements, prepare documents, and complete each step with greater clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. OUR STUDENT VISA SERVICES INCLUDE ================= */}
      <section ref={servicesRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Student Visa Services Include"
            subtitle="End-to-end guidance from initial evaluation through pre-departure orientation"
            inView={servicesInView}
          />

          {/* 8 Clean Cards Grid with High-Contrast Hover State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {visaServices.map((service, idx) => {
              const delays = [
                "delay-100",
                "delay-150",
                "delay-200",
                "delay-250",
                "delay-300",
                "delay-350",
                "delay-400",
                "delay-450",
              ];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-700 ease-out border border-slate-100 flex flex-col items-center text-center group transform hover:-translate-y-2 ${delayClass} ${
                    servicesInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-95"
                  }`}
                >
                  {/* Icon Container with Contrast Fix */}
                  <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#e52928] flex items-center justify-center mb-5 border border-red-100 group-hover:bg-[#e52928] group-hover:border-[#e52928] group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/25 transition-all duration-300">
                    <span className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1e38] mb-2.5 group-hover:text-[#e52928] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. STUDENT VISA APPLICATION PROCESS (NAVY SECTION) ================= */}
      <section
        ref={processRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none anim-pulse-border" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Student Visa Application Process"
            subtitle="A systematic, step-by-step pathway from offer letter to overseas arrival"
            variant="dark"
            inView={processInView}
          />

          {/* 10 Step Process Grid in 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-12 max-w-5xl mx-auto">
            {processSteps.map((step, idx) => {
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
                "delay-550",
              ];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#22c55e]/40 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm group transform hover:-translate-y-1 ${delayClass} ${
                    processInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#22c55e]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-300">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider font-mono">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#22c55e] transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. SEE WHAT PEOPLE ARE SAYING (TESTIMONIALS) ================= */}
      <section ref={testimonialsRef} className="w-full py-16 sm:py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="See What People Are Saying" inView={testimonialsInView} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {testimonials.map((testi, idx) => {
              const delays = ["delay-100", "delay-200", "delay-300"];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-700 ease-out border border-slate-100 flex flex-col justify-between group transform hover:-translate-y-1.5 ${delayClass} ${
                    testimonialsInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-95"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed italic">
                      "{testi.text}"
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors">
                        {testi.name}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-600">
                        {testi.destination}
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-[#e52928] font-bold text-xs">
                      {testi.name.charAt(0)}
                    </div>
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
            subtitle="Get Answers to Your Student Visa Questions"
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
              Start Your Study Abroad Journey, Call On...
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

      {/* ================= 8. TALK TO OUR STUDENT VISA COUNSELLORS FORM ================= */}
      <section
        id="book-student-visa"
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
              Talk to Our Student Visa Counsellors
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Get end-to-end guidance for your student visa journey, from documentation and application preparation to pre-departure support.
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
                alert("Thank you for reaching out! Our student visa specialists at Umang Career Consultancy will contact you shortly.");
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
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Target Study Destination *</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm bg-white transition-all"
                  >
                    <option value="canada">Canada (Study Permit / SDS)</option>
                    <option value="uk">United Kingdom (Student Visa / Tier 4)</option>
                    <option value="usa">United States (F-1 Student Visa)</option>
                    <option value="australia">Australia (Subclass 500)</option>
                    <option value="germany">Germany & Europe</option>
                    <option value="other">Other Countries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Target Intake & Year</label>
                  <input
                    type="text"
                    placeholder="e.g. Fall 2026 / Spring 2027"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#e52928] hover:bg-[#c92017] text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  Book Free Visa Consultation
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
