"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------
   SVG ICONS (Crisp, clean, no emojis)
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

function CheckCircleIcon() {
  return (
    <svg className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
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

export default function VisaDocumentContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [whatInView, setWhatInView] = useState(false);
  const [whyInView, setWhyInView] = useState(false);
  const [checklistInView, setChecklistInView] = useState(false);
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
  const whyRef = useRef<HTMLDivElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);
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

    const whyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setWhyInView(true);
    }, observerOptions);

    const checklistObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setChecklistInView(true);
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
    if (whyRef.current) whyObserver.observe(whyRef.current);
    if (checklistRef.current) checklistObserver.observe(checklistRef.current);
    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current);
    if (faqRef.current) faqObserver.observe(faqRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    if (bookRef.current) bookObserver.observe(bookRef.current);

    return () => {
      clearTimeout(timer);
      whatObserver.disconnect();
      whyObserver.disconnect();
      checklistObserver.disconnect();
      testimonialsObserver.disconnect();
      faqObserver.disconnect();
      ctaObserver.disconnect();
      bookObserver.disconnect();
    };
  }, []);

  // 1. Why Are Documents Important for a Visa? (6 Cards - Shuffled and unique)
  const whyCards = [
    {
      title: "Document Verification & Audit",
      description: "Thorough review of every academic transcript, certificate, and translation for authenticity, completeness, and consulate compliance.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Financial Proofs & Fund Guidance",
      description: "Step-by-step guidance on organizing bank statements, liquid assets, CA net worth certificates, sponsorship deeds, and loan sanctions.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
    },
    {
      title: "Statement of Purpose (SOP)",
      description: "Comprehensive assistance in drafting, refining, and polishing persuasive SOPs aligned with specific visa officer expectations.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "Identity & Civil Records Verification",
      description: "Verifying passports, civil certificates, biometric criteria, and national identity documents according to immigration rules.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z" />
        </svg>
      ),
    },
    {
      title: "Application Form Filling",
      description: "Accurate, error-free completion of complex embassy portal forms, scheduling appointments, and preventing common rejection errors.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Visa Interview Preparation",
      description: "Rigorous one-on-one mock interview sessions, question drills, and tips for presenting documents with clarity and confidence.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  // 2. Visa Document Checklist (4 Categories matching Navy Section)
  const checklistCategories = [
    {
      title: "Student Visa",
      badge: "Study Abroad",
      icon: (
        <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
        </svg>
      ),
      items: [
        "Valid Passport (min. 6 months validity)",
        "Academic Mark Sheets, Degrees & Certificates",
        "Official Proof of Financial Funds & Bank Statements",
        "Language Proficiency Test Scores (IELTS/PTE/TOEFL)",
        "Letter of Recommendation (LOR), if required",
        "Personal Statement of Purpose (SOP)",
        "Work Experience Letters, if applicable",
        "Approved Medical Examination Documents",
        "Embassy-Compliant Digital Photographs",
      ],
    },
    {
      title: "Spouse / Dependent Visa",
      badge: "Family Reunion",
      icon: (
        <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      items: [
        "Valid Passports of Primary Applicant & Spouse",
        "Government-Registered Marriage Certificate",
        "Proof of Genuine Relationship (Photos, Chats, Joint Bills)",
        "Financial Solvency & Liquid Bank Statements",
        "Spouse's Overseas Study/Work Permit & ID",
        "Employment / Occupation Proof of Both Partners",
        "Overseas Accommodation Proof & Lease Deed",
        "Formal Invitation Letter & Affidavit of Support",
        "Digital Photographs Meeting Embassy Norms",
      ],
    },
    {
      title: "Visitor / Tourist Visa",
      badge: "Travel & Business",
      icon: (
        <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        "Valid International Passport with Blank Pages",
        "Proof of Adequate Financial Funds & IT Returns",
        "Employment Proof, Salary Slips or Business Registration",
        "Approved Leave Sanction Letter from Employer",
        "Complete Previous International Travel History",
        "Day-Wise Travel Itinerary & Hotel Reservations",
        "Confirmed Return Flight Ticket Booking",
        "Formal Invitation / Host Details, if visiting relatives",
        "Standard Embassy-Size Digital Photographs",
      ],
    },
    {
      title: "Immigration / PR Visa",
      badge: "Permanent Residency",
      icon: (
        <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      items: [
        "Valid Current & Previous Passports",
        "Comprehensive, Professionally Formatted Resume",
        "Educational Credential Assessment (ECA Report)",
        "Detailed Reference Letters on Company Letterhead",
        "Official Language Proficiency Exam Results (IELTS/CLB)",
        "Police Clearance Certificate (PCC) for all residences",
        "Certified Medical Examination Reports",
        "Settlement Fund Proofs & Valuation Reports",
        "Additional Category Files Based on Points Grid",
      ],
    },
  ];

  // 3. Testimonials
  const testimonials = [
    {
      name: "Mitesh Rao",
      category: "Student Visa (Canada)",
      text: "Nothing but efficient and reliable is what I can say about Umang Career Consultancy visa document service! Their step-by-step guidance for the student visa documentation process ensured everything was strictly in order for submission. Got my visa approved within 3 weeks!",
    },
    {
      name: "Nikita Parmar",
      category: "Spouse Visa (UK)",
      text: "Great service! I could reunite with my husband in the UK without any delays. They guided me meticulously through relationship proofs, financial documentation, and prepared me thoroughly for the visa interview. Highly recommended!",
    },
    {
      name: "Nisha Sharma",
      category: "Visitor Visa (Australia)",
      text: "For a smooth visitor visa application, I highly recommend Umang Career Consultancy. They were thoroughly professional, guiding me through every step. My paperwork was prepared promptly and I never felt stressed. Truly thank you!",
    },
  ];

  // 4. Frequently Asked Questions (5 FAQs from prompt)
  const faqs = [
    {
      q: "How do I know which documents I need for my visa?",
      a: "The required documents depend on your destination country, visa category (student, spouse, visitor, or PR), and your individual profile. Our experienced visa counsellors evaluate your case and provide an exhaustive, tailored checklist.",
    },
    {
      q: "Can Umang Career Consultancy help with document verification?",
      a: "Yes! We conduct a rigorous line-by-line review of all your academic papers, affidavits, bank statements, and translations to ensure completeness, consistency, and compliance with embassy standards before filing.",
    },
    {
      q: "Do I need to submit financial documents?",
      a: "Financial requirements vary by destination and visa type. For student and visitor visas, embassies require proof of funds to cover tuition and living expenses. We guide you on eligible accounts, liquid funds, sponsorship deeds, and loan sanction letters.",
    },
    {
      q: "Can you help with visa application forms?",
      a: "Yes, our documentation team assists you with accurately filling out official visa application forms (such as DS-160 for USA, IRCC portal for Canada, UKVI for UK) to eliminate typos and discrepancies that lead to refusals.",
    },
    {
      q: "Do you provide visa interview preparation?",
      a: "Absolutely. We conduct one-on-one mock interview sessions tailored to your visa category. We prepare you for common questions, verify how to present your documentation confidently, and guide you on embassy interview etiquette.",
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
                Error-Free Embassy Filing & Documentation
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight uppercase leading-[1.1]">
                Visa <span className="text-[#0a1e38]">Documents</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                A single documentation mistake can delay or jeopardize your visa. We provide meticulous paperwork preparation, financial auditing, and application form review for maximum visa success.
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
                  href="#book-visa"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0a1e38] hover:bg-[#112a4c] text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Talk to Visa Counsellors</span>
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
                  src="/visa-document-hero.png"
                  alt="Visa Documents Guidance - Umang Career Consultancy"
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

      {/* ================= 2. WHAT ARE VISA DOCUMENTS ================= */}
      <section ref={whatRef} className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What are Visa Documents ?" inView={whatInView} />

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ease-out transform ${
              whatInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-700 text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
                Visa documents are the documents required by the relevant embassy, consulate, or immigration authority to process a visa application. Requirements can vary depending on the visa type, destination, and applicant’s circumstances. At <strong className="font-semibold text-[#0a1e38]">Umang Career Consultancy</strong>, we help you understand the required documents, organize your paperwork, and prepare your application carefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. WHY ARE DOCUMENTS IMPORTANT FOR A VISA? ================= */}
      <section ref={whyRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Are Documents Important for a Visa?"
            subtitle="Careful paperwork is the backbone of every successful visa outcome"
            inView={whyInView}
          />

          {/* 6 Clean Cards Grid with High-Contrast Hover State */}
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
                  className={`bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-700 ease-out border border-slate-100 flex flex-col items-start group transform hover:-translate-y-2 ${delayClass} ${
                    whyInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                  }`}
                >
                  {/* Icon Container with Crisp Contrast on Hover */}
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#e52928] flex items-center justify-center mb-5 border border-red-100 group-hover:bg-[#e52928] group-hover:border-[#e52928] group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/25 transition-all duration-300">
                    <span className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {card.icon}
                    </span>
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

      {/* ================= 4. VISA DOCUMENT CHECKLIST (NAVY SECTION) ================= */}
      <section
        ref={checklistRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none anim-pulse-border" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Visa Document Checklist"
            subtitle="Essential paperwork categorized by visa stream"
            variant="dark"
            inView={checklistInView}
          />

          {/* 4 Visa Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {checklistCategories.map((cat, idx) => {
              const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-white/5 border border-white/10 hover:border-[#22c55e]/40 hover:bg-white/10 rounded-2xl p-6 transition-all duration-500 backdrop-blur-sm group flex flex-col justify-between transform hover:-translate-y-2 ${delayClass} ${
                    checklistInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-95"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#22c55e]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-300">
                        {cat.icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-[#22c55e] uppercase tracking-wider block">
                          {cat.badge}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#22c55e] transition-colors leading-tight">
                          {cat.title}
                        </h3>
                      </div>
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-2.5 pt-2 border-t border-white/10">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-snug">
                          <CheckCircleIcon />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note Banner */}
          <div className="mt-12 p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-amber-400 font-semibold">Important Note:</strong> Document requirements vary by country, visa category, and individual profile. The final checklist should always be confirmed according to the applicable official embassy requirements.
            </p>
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
                        {testi.category}
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
            subtitle="Get Answers to Your Documentation Questions"
            inView={faqInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12">
            {/* Column 1 - 3 FAQs */}
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

            {/* Column 2 - 2 FAQs */}
            <div
              className={`space-y-4 transition-all duration-700 delay-150 ease-out transform ${
                faqInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {faqs.slice(3, 5).map((faq, idx) => {
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
              Prepare Your Visa Documents With Confidence, Call On...
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

      {/* ================= 8. TALK TO OUR VISA COUNSELLORS FORM ================= */}
      <section
        id="book-visa"
        ref={bookRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/60"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-10 transition-all duration-700 ease-out transform ${
              bookInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-widest uppercase">Start Your Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] mt-1.5">
              Talk to Our Visa Counsellors
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Get guidance on your visa documentation and understand the exact requirements for your application.
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
                alert("Thank you for reaching out! Our visa documentation experts at Umang Career Consultancy will contact you shortly.");
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
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Visa Category *</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm bg-white transition-all"
                  >
                    <option value="student">Student Visa</option>
                    <option value="spouse">Spouse / Dependent Visa</option>
                    <option value="visitor">Visitor / Tourist Visa</option>
                    <option value="pr">Immigration / PR Visa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Target Destination Country</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm bg-white transition-all"
                  >
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="australia">Australia</option>
                    <option value="europe">Europe / Schengen</option>
                    <option value="other">Other Countries</option>
                  </select>
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
                  Request Document Review
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
