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

export default function PrImmigrationContent() {
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
    qualification: "Bachelor's Degree",
    experience: "3-5 Years",
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
     1. SHUFFLED & ELEVATED PR VISA SERVICES (8 Cards)
  ------------------------------------------------------------- */
  const serviceFeatures = [
    {
      title: "Pathway & Profile Selection",
      description:
        "Comprehensive assessment of your academic qualifications, work history, and language ability to map out the most suitable PR pathways.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: "Country-Specific Immigration Guidance",
      description:
        "Specialized advice tailored to your preferred destination, covering national and regional immigration streams, eligibility criteria, and quotas.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Meticulous Document Assistance",
      description:
        "Step-by-step guidance in collecting, organizing, and verifying critical academic records, reference letters, financial statements, and civil certificates.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Complete Application Support",
      description:
        "Full assistance through official submission portals, including Expression of Interest (EOI) filings and comprehensive electronic PR dossiers.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "100% Transparent Process",
      description:
        "Clear, upfront information regarding eligibility benchmarks, government processing fees, applicable service charges, and Realistic timelines.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Interview & Verification Preparation",
      description:
        "Thorough coaching, mock interviews, and scenario reviews in case an interview or procedural fairness hearing is scheduled by immigration officers.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Regulatory Compliance Guidance",
      description:
        "Helping you stay fully compliant with immigration laws, residency obligations, status maintenance, and statutory requirements throughout.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Post-Approval & Settlement Support",
      description:
        "Guidance on critical post-approval milestones including Confirmation of Permanent Residence (COPR), initial landing, and PR card formalities.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7m-2-4H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     2. PR APPLICATION PROCESS (8 Steps matching Navy Section)
  ------------------------------------------------------------- */
  const processSteps = [
    {
      step: "01",
      title: "Eligibility Assessment",
      desc: "Review your profile, qualifications, age, and professional history against targeted PR programs and points grids.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Choose the Right PR Pathway",
      desc: "Explore and shortlist available Federal, Provincial, or State Sponsored pathways aligned with your profile and immigration goals.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Gather Required Documents",
      desc: "Prepare and organize academic transcripts, employment references, identity proofs, financial records, and civil documents.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Language Proficiency & ECA",
      desc: "Complete your designated language examination (IELTS/PTE/CELPIP) and obtain official Educational Credential Assessment (ECA).",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      step: "05",
      title: "Submit Application / EOI",
      desc: "Complete and lodge your profile in the official immigration pool (Expression of Interest) with complete accuracy.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      step: "06",
      title: "Application Review & Invitation",
      desc: "The immigration authority evaluates your pool profile and issues an Invitation to Apply (ITA) or provincial nomination.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: "07",
      title: "Medical & PCC Checks",
      desc: "Undergo designated medical examinations and obtain certified Police Clearance Certificates (PCC) as instructed.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      step: "08",
      title: "Final Decision & PR Approval",
      desc: "Receive your final PR approval, Confirmation of Permanent Residence (COPR), and visa stamp to begin your journey.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     3. FREQUENTLY ASKED QUESTIONS (12 Items in 2 Columns)
  ------------------------------------------------------------- */
  const faqs = [
    {
      q: "What are the benefits of permanent residency?",
      a: "Benefits depend on the destination country and immigration program. They commonly include the right to live, work, and study indefinitely, access to subsidized healthcare and education, eligibility to sponsor qualified relatives, and a clear pathway toward citizenship.",
    },
    {
      q: "How long does the PR process take?",
      a: "Processing times vary significantly based on country, specific immigration program, annual quotas, invitation draw cutoffs, and individual verification checks. Typically, processing ranges from 6 to 18 months once an Invitation to Apply (ITA) is received.",
    },
    {
      q: "What factors determine PR eligibility?",
      a: "Key eligibility factors include age, educational credentials, verified years of skilled work experience, language test results, designated occupation classifications, settlement funds, and adaptability factors like spouse qualifications or overseas study.",
    },
    {
      q: "Is there an age limit for PR applications?",
      a: "Age requirements vary depending on the destination and program. Points-based immigration systems (like Canada Express Entry or Australia SkillSelect) typically award maximum points to candidates between 18 and 35 years, with age caps often set at 45 or 50.",
    },
    {
      q: "Do I need a job offer to apply for PR?",
      a: "Not necessarily. Many popular economic PR programs, including Canada's Federal Skilled Worker Program (FSWP) and Australia's Subclass 189 Skilled Independent visa, do not mandate a job offer if your comprehensive ranking points are sufficient.",
    },
    {
      q: "What is a points-based PR system?",
      a: "A points-based system objectively scores applicants across multiple parameters (age, education, language scores, work experience, adaptability). Immigration authorities conduct periodic draws and invite candidates who score above the established cutoff.",
    },
    {
      q: "Which language tests are accepted?",
      a: "Accepted tests depend on the country. For Canada, IELTS General Training, CELPIP-General, and PTE Core are standard for English. For Australia, IELTS General, PTE Academic, and TOEFL iBT are widely accepted. Score requirements correspond to your targeted pathway.",
    },
    {
      q: "What is an ECA (Educational Credential Assessment)?",
      a: "An Educational Credential Assessment (ECA) verifies that your foreign degrees, diplomas, or certificates are valid and equivalent to credentials earned in Canada or Australia. Recognized bodies include WES, IQAS, ICAS, and relevant professional councils.",
    },
    {
      q: "Are there additional costs involved in the PR process?",
      a: "Yes. In addition to government visa processing fees, applicants should budget for third-party expenses such as language exams, ECA fees, certified translations, notarizations, medical checkups, and Police Clearance Certificates (PCC).",
    },
    {
      q: "What happens if my PR application is refused?",
      a: "Next steps depend on the specific grounds for refusal. Our experts review the refusal letter and officer notes to determine if procedural fairness was adhered to, allowing you to appeal, file for judicial review, or submit a stronger re-application.",
    },
    {
      q: "Can I include my family in my PR application?",
      a: "Yes. Most permanent residency programs allow principal applicants to include their legally married spouse or common-law partner and dependent children under the age of 22 in a single application.",
    },
    {
      q: "What documents are required for PR?",
      a: "Required documents typically include valid passports, ECA reports, official language test results, detailed employer reference letters, bank proof of settlement funds, police clearance certificates, medical examination receipts, and civil status certificates.",
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
                Permanent Residency Guidance
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-tight uppercase">
                Immigration / <span className="text-[#e52928]">PR</span>
              </h1>

              <div className="mt-4 flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="ml-2 text-xs font-semibold text-slate-600">
                  Trusted by 1000+ Skilled Applicants & Families
                </span>
              </div>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Strategic pathway planning, points-score maximization, verified documentation, and step-by-step consular guidance for Canada Express Entry, Australia PR, and global immigration streams.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#book-consultation"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#e52928] hover:bg-[#c9201f] text-white font-bold text-base shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
                >
                  <span>Book PR Assessment</span>
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
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38]">Points</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Evaluation</div>
                </div>
                <div className="px-2 border-x border-slate-200">
                  <div className="text-xl sm:text-2xl font-black text-[#e52928]">100%</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Transparency</div>
                </div>
                <div className="px-2">
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38]">Global</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Pathways</div>
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
                  src="/pr-immigration-hero.png"
                  alt="Permanent Residency & Immigration Guidance - Umang Career Consultancy"
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

      {/* ================= 2. WHAT IS PERMANENT RESIDENCY (PR) ================= */}
      <section ref={whatRef} className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What is Permanent Residency (PR)?" inView={whatInView} />

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ease-out transform ${
              whatInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-700 text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
                Permanent residency allows eligible individuals to live and work in a country for an extended period, subject to the conditions of the applicable immigration program. PR pathways and requirements vary by country and applicant profile. At <strong className="font-semibold text-[#0a1e38]">Umang Career Consultancy</strong>, we help you understand available pathways, eligibility requirements, documentation, and the application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. OUR PR VISA SERVICES INCLUDE (8 Cards) ================= */}
      <section ref={featuresRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our PR Visa Services Include"
            subtitle="Strategic end-to-end guidance designed to maximize your points score and application accuracy"
            inView={featuresInView}
          />

          {/* 8 Cards Grid with High-Contrast Hover State */}
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

      {/* ================= 4. PR APPLICATION PROCESS (NAVY SECTION) ================= */}
      <section
        ref={processRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="PR Application Process"
            subtitle="A structured, transparent roadmap from initial points assessment to final permanent residency approval"
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
                    <span>Stage {stepItem.step}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. FREQUENTLY ASKED QUESTIONS (12 FAQS) ================= */}
      <section ref={faqRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions (FAQs)"
            subtitle="Essential answers to help you navigate points systems, eligibility factors, and application steps"
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

      {/* ================= 6. EXPLORE YOUR PR OPTIONS (CALL BAR) ================= */}
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
                Expert PR Advisory
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Explore Your PR Options
              </h3>
              <p className="mt-2 text-white/90 text-sm sm:text-base leading-relaxed">
                Understand your eligibility, explore available pathways, and get guidance throughout your PR application journey.
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
                <span>Free Assessment</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. TALK TO OUR IMMIGRATION COUNSELLORS (BOOKING FORM) ================= */}
      <section
        id="book-consultation"
        ref={bookRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Talk to Our Immigration Counsellors"
            subtitle="Fill out the details below to request a personalized PR eligibility assessment"
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
                <h3 className="text-2xl font-bold text-[#0a1e38]">Assessment Request Received!</h3>
                <p className="mt-2 text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thank you, <strong>{formData.name}</strong>. Our senior immigration counsellor will review your profile and connect with you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 inline-flex px-6 py-2.5 rounded-lg bg-[#e52928] text-white font-semibold text-sm hover:bg-[#c9201f] transition-colors"
                >
                  Submit Another Profile
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
                      placeholder="e.g. Rahul Patel"
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
                      placeholder="e.g. rahul@example.com"
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
                  {/* Preferred Destination */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Target Destination *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Canada">Canada (Express Entry / PNP)</option>
                      <option value="Australia">Australia (SkillSelect Subclass 189/190/491)</option>
                      <option value="New Zealand">New Zealand (Skilled Migrant)</option>
                      <option value="Germany">Germany (Opportunity Card / EU Blue Card)</option>
                      <option value="United Kingdom">United Kingdom (Skilled Worker)</option>
                      <option value="Other">Other Global Pathways</option>
                    </select>
                  </div>

                  {/* Qualification */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Highest Qualification *
                    </label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Master's / Post Graduate">Master&apos;s / Post Graduate Degree</option>
                      <option value="Bachelor's Degree">Bachelor&apos;s Degree (3 or 4 Years)</option>
                      <option value="Diploma / Trade Qualification">Diploma / Trade Certificate</option>
                      <option value="Doctorate (PhD)">Doctorate (PhD)</option>
                    </select>
                  </div>

                  {/* Work Experience */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Skilled Work Experience *
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="0-1 Year">Less than 1 Year</option>
                      <option value="1-3 Years">1 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Profile Highlights or Specific Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your field of work, IELTS/PTE scores if taken, or any specific provincial programs of interest..."
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
                    Submit PR Profile
                  </button>

                  <a
                    href="https://wa.me/919173186109?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Permanent%20Residency%20(PR)%20and%20immigration%20pathways."
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
