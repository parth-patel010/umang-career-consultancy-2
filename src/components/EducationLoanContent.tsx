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

export default function EducationLoanContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [whyInView, setWhyInView] = useState(false);
  const [compareInView, setCompareInView] = useState(false);
  const [processInView, setProcessInView] = useState(false);
  const [partnersInView, setPartnersInView] = useState(false);
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
  const whyRef = useRef<HTMLElement>(null);
  const compareRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
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
    destination: "USA",
    loanType: "Non-Collateral / Unsecured Loan",
    amount: "₹30 Lakhs - ₹50 Lakhs",
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
          if (entry.target === whyRef.current) setWhyInView(true);
          if (entry.target === compareRef.current) setCompareInView(true);
          if (entry.target === processRef.current) setProcessInView(true);
          if (entry.target === partnersRef.current) setPartnersInView(true);
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

    if (whyRef.current) observer.observe(whyRef.current);
    if (compareRef.current) observer.observe(compareRef.current);
    if (processRef.current) observer.observe(processRef.current);
    if (partnersRef.current) observer.observe(partnersRef.current);
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
     1. 6 CORE PILLARS (Shuffled & Elevated with High-Contrast Hover)
  ------------------------------------------------------------- */
  const loanFeatures = [
    {
      title: "Fast & Easy Approval",
      description:
        "Quick application support, priority document appraisal, and expedited sanction letters to meet strict university tuition and visa deadlines.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Competitive Interest Rates",
      description:
        "Access exclusive student interest concessions, special girl-child discounts, and floating/fixed rates that make your education substantially more affordable.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
    },
    {
      title: "100% Comprehensive Expense Cover",
      description:
        "Funding that covers complete university tuition fees, living costs, accommodation, books, laptop, mandatory health insurance, and round-trip airfare.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Flexible Repayment & Moratorium",
      description:
        "Zero repayment burden while studying. Enjoy full principal moratorium during course duration plus up to 12 months after course completion.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Multi-Lender Loan Comparison",
      description:
        "Unbiased comparative evaluation across leading nationalized banks, premier private lenders, and specialized international student fintechs.",
      icon: (
        <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Dedicated Loan Advisor Support",
      description:
        "Personalized case guidance from initial documentation to legal vetting, valuation, loan sanction, and seamless direct fee disbursements.",
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
      title: "Profile & Eligibility Evaluation",
      desc: "Analyze student academic credentials, test scores (GRE/IELTS), target program, and co-applicant financial standing.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Lender & Loan Structure Selection",
      desc: "Determine whether a Secured (Collateral) or Unsecured (Non-Collateral) loan provides optimal interest rates and terms.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Document Compilation & Verification",
      desc: "Assemble student KYC, admission offer letters, co-applicant ITRs, bank statements, and property records (if applicable).",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Application Lodgement with Banking Partner",
      desc: "Submit your pre-verified digital dossier directly to the chosen bank branch or specialized NBFC underwriting desk.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      step: "05",
      title: "Sanction Letter Issuance",
      desc: "Receive the official conditional or unconditional loan sanction letter, crucial for visa filing and financial readiness.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      step: "06",
      title: "Legal & Valuation Vetting",
      desc: "For secured loans, complete property title search, lawyer legal vetting, and bank-approved engineer property valuation.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      step: "07",
      title: "Loan Agreement & Term Finalization",
      desc: "Sign the loan agreement, setup auto-debit (NACH/e-mandate), and review the clear interest and repayment schedule.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      step: "08",
      title: "Timely University Fee Disbursement",
      desc: "Direct remittance of tuition fees to the international institution and living costs into student GIC or blocked accounts.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     3. BANKING PARTNERS SHOWCASE
  ------------------------------------------------------------- */
  const bankingPartners = [
    { name: "State Bank of India (SBI)", desc: "Lowest Interest Rates & Sovereign Guarantee", tag: "Public Sector" },
    { name: "HDFC Credila", desc: "Specialized Education Loans with Doorstep Service", tag: "NBFC Leader" },
    { name: "ICICI Bank", desc: "Fast Pre-Visa Sanctions up to ₹2 Crore", tag: "Private Bank" },
    { name: "Axis Bank", desc: "Unsecured Loans up to ₹75 Lakhs for STEM", tag: "Private Bank" },
    { name: "Bank of Baroda (BOB)", desc: "Competitive Rates for Top 100 Universities", tag: "Public Sector" },
    { name: "Avanse Financial Services", desc: "100% Tuition & Living Cost Coverage", tag: "Student NBFC" },
    { name: "Prodigy Finance", desc: "No Co-Signer & No Collateral USD/GBP Loans", tag: "International" },
    { name: "Auxilo Finserve", desc: "Customized Non-Collateral Student Financing", tag: "Student NBFC" },
  ];

  /* -------------------------------------------------------------
     4. TESTIMONIALS (From User Prompt)
  ------------------------------------------------------------- */
  const testimonials = [
    {
      name: "Suhas Patel",
      role: "M.S. in USA",
      review:
        "I had very little time to arrange funds, but Umang Career Consultancy’s loan assistance helped me complete the process on time. The guidance was smooth and reliable.",
    },
    {
      name: "Apurva Sonavane",
      role: "M.Sc. in UK",
      review:
        "The loan assistance team was supportive throughout the process and helped me understand my available options clearly.",
    },
    {
      name: "Rakesh Shah",
      role: "Parent (Canada Student)",
      review:
        "I received multiple loan options and understood the repayment terms better with their guidance. The entire process felt much easier.",
    },
  ];

  /* -------------------------------------------------------------
     5. FREQUENTLY ASKED QUESTIONS (10 FAQs)
  ------------------------------------------------------------- */
  const faqs = [
    {
      q: "What is an educational loan for studying abroad?",
      a: "An education loan is a specialized financial product offered by banks and financial institutions to help students fund higher education abroad. It typically covers tuition fees, accommodation, books, equipment, travel, and health insurance with repayment starting after course completion.",
    },
    {
      q: "What expenses can an education loan cover?",
      a: "Most education loans cover 100% of education-related expenses, including university tuition fees, examination/library/laboratory charges, on-campus or off-campus accommodation, refundable caution deposits, study equipment (laptops), international flight tickets, and foreign health insurance.",
    },
    {
      q: "What documents are required to apply for an education loan?",
      a: "Core documents include: admission offer letter, fee structure, student academic records (10th, 12th, graduation, GRE/IELTS), co-applicant KYC documents (PAN, Aadhaar), income proofs (salary slips, ITRs for last 2–3 years, 6 months bank statements), and property documents if applying for a secured loan.",
    },
    {
      q: "Do I need collateral for an education loan?",
      a: "Not necessarily. We provide guidance on both Secured Loans (which require property, fixed deposits, or land as security) and Unsecured / Non-Collateral Loans (which do not require property, offering up to ₹50L–₹75L based on student academic merit and co-applicant income).",
    },
    {
      q: "When does education loan repayment begin?",
      a: "Repayment begins after a moratorium period, which generally spans the entire duration of your academic program plus 6 to 12 months grace period (or 6 months after securing employment, whichever occurs earlier). During the moratorium, simple interest or partial interest may be serviced.",
    },
    {
      q: "Can I apply for an education loan before receiving final admission?",
      a: "Yes. Many partner lenders issue a 'Pre-Admission / Pre-Visa Sanction Letter' based on your standardized test scores (GRE/GMAT/IELTS) and academic profile. This helps you demonstrate financial capability during university applications and scholarship assessments.",
    },
    {
      q: "What happens if my loan application is rejected?",
      a: "Our team conducts a thorough audit to identify the reason for rejection (such as low co-applicant CIBIL score, property documentation gaps, or ineligible course). We then restructure the application and present it to an alternative partner bank or NBFC with higher approval probability.",
    },
    {
      q: "What is the maximum education loan amount available?",
      a: "For secured loans (against collateral), amounts can exceed ₹1.5 Crore to ₹2 Crore depending on property value. For unsecured / non-collateral loans, amounts range from ₹30 Lakhs to ₹75 Lakhs for premier global universities.",
    },
    {
      q: "Can I prepay my education loan without penalty?",
      a: "Yes. As per RBI guidelines, public and private banks in India do not charge prepayment penalties or foreclosure charges on floating-rate education loans. You can repay the loan faster once you start earning abroad.",
    },
    {
      q: "Are scholarships available along with education loans?",
      a: "Yes. Winning a scholarship or graduate assistantship reduces your total tuition cost, which can either reduce the required loan amount or cover your non-funded living expenses while your loan covers the balance.",
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
                On the Fast Track to Your Future
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-tight uppercase">
                Education Loans for <span className="text-[#e52928]">Study Abroad</span>
              </h1>

              <div className="mt-4 flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="ml-2 text-xs font-semibold text-slate-600">
                  ₹50+ Crores Loan Sanctioned for 1500+ Ambitious Students
                </span>
              </div>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Unlock your global potential with collateral and non-collateral education loans. Quick approvals, competitive interest rates, and end-to-end guidance from application to timely university disbursement.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#book-consultation"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#e52928] hover:bg-[#c9201f] text-white font-bold text-base shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
                >
                  <span>Check Loan Eligibility</span>
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
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38]">Up to 75L</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Non-Collateral</div>
                </div>
                <div className="px-2 border-x border-slate-200">
                  <div className="text-xl sm:text-2xl font-black text-[#e52928]">3-7 Days</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Fast Sanction</div>
                </div>
                <div className="px-2">
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38]">100%</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Cost Coverage</div>
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
                  src="/education-loan-hero.png"
                  alt="Education Loans for Study Abroad - Umang Career Consultancy"
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

      {/* ================= 2. WHY EDUCATION LOAN ASSISTANCE (6 CARDS) ================= */}
      <section ref={whyRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Education Loan Assistance from Umang?"
            subtitle="Transparent multi-bank advisory that makes your dream of overseas education hassle-free and affordable"
            inView={whyInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {loanFeatures.map((feat, idx) => {
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

      {/* ================= 3. SECURED VS UNSECURED COMPARISON ================= */}
      <section ref={compareRef} className="w-full py-16 sm:py-20 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Choose the Right Loan Structure"
            subtitle="Understand whether a Collateral or Non-Collateral education loan best aligns with your goals"
            inView={compareInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {/* Non-Collateral (Unsecured) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-[#e52928] transition-all flex flex-col justify-between group">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider mb-4">
                  No Property Required
                </div>
                <h3 className="text-2xl font-black text-[#0a1e38] mb-3">
                  Non-Collateral Loan (Unsecured)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Ideal for students with strong academic merit, high GRE/IELTS scores, and salaried co-applicants looking for rapid sanction without pledging real estate.
                </p>

                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Loan Limit:</strong> Up to ₹50 Lakhs - ₹75 Lakhs</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Turnaround Time:</strong> 3 to 5 Working Days</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Security:</strong> None (Zero collateral or mortgage)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Key Criteria:</strong> Co-applicant ITR & student academics</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <a
                  href="#book-consultation"
                  className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-[#e52928] text-slate-800 hover:text-white font-bold text-sm transition-colors text-center block"
                >
                  Apply for Unsecured Loan
                </a>
              </div>
            </div>

            {/* Collateral (Secured) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-[#0a1e38] transition-all flex flex-col justify-between group">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-[#0a1e38] text-xs font-bold uppercase tracking-wider mb-4">
                  Lowest Interest Rates
                </div>
                <h3 className="text-2xl font-black text-[#0a1e38] mb-3">
                  Collateral Loan (Secured)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Backed by residential property, commercial space, or fixed deposits. Offers lower interest tariffs, higher loan limits, and maximum tax savings under Section 80E.
                </p>

                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Loan Limit:</strong> Up to ₹1.5 Crore - ₹2 Crore+</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Interest Rates:</strong> Lower interest tariffs (8.5% - 10.5%)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Security:</strong> House, Flat, Commercial Property, or FDs</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Tenure:</strong> Extended repayment up to 15 years</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <a
                  href="#book-consultation"
                  className="w-full py-3.5 rounded-xl bg-[#0a1e38] hover:bg-[#122846] text-white font-bold text-sm transition-colors text-center block"
                >
                  Apply for Secured Loan
                </a>
              </div>
            </div>
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
            title="Education Loan Application Roadmap"
            subtitle="From initial document audit to university fee disbursement, we manage every step with partner banks"
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

      {/* ================= 5. OUR BANKING PARTNERS SHOWCASE ================= */}
      <section ref={partnersRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Banking Partners"
            subtitle="We work with a range of leading banks and financial institutions to help students explore suitable education loan options"
            inView={partnersInView}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {bankingPartners.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#e52928]/40 transition-all flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {b.tag}
                    </span>
                    <span className="text-emerald-600 font-bold text-xs">Verified Partner</span>
                  </div>
                  <h4 className="text-lg font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors mb-2">
                    {b.name}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-[#0a1e38] flex items-center gap-1">
                  <span>Fast Track Sanction</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. TESTIMONIALS (FROM USER PROMPT) ================= */}
      <section ref={testimonialsRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="See What People Are Saying"
            subtitle="Real feedback from students and parents funded through our educational loan desk"
            inView={testimonialsInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testi, idx) => {
              const delays = ["delay-100", "delay-200", "delay-300"];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-700 ease-out flex flex-col justify-between transform hover:-translate-y-2 group ${delayClass} ${
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

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
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

      {/* ================= 7. FREQUENTLY ASKED QUESTIONS (10 FAQS) ================= */}
      <section ref={faqRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions (FAQs)"
            subtitle="Get answers to your study abroad loan eligibility, collateral, and repayment questions"
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

      {/* ================= 8. CALL BAR: FOR SECURE STUDY ABROAD FUNDING ================= */}
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
                Financial Empowerment
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                For Secure Study Abroad Funding...
              </h3>
              <p className="mt-2 text-white/90 text-sm sm:text-base leading-relaxed">
                Connect with our education loan specialists to explore collateral-free loan options and fast-track your university sanction letter.
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
                <span>Free Loan Assessment</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. TALK TO OUR LOAN COUNSELLORS (BOOKING FORM) ================= */}
      <section
        id="book-consultation"
        ref={bookRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Talk to Our Loan Counsellors"
            subtitle="Fill out the details below to receive customized loan eligibility options and sanction estimates"
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
                <h3 className="text-2xl font-bold text-[#0a1e38]">Loan Eligibility Request Received!</h3>
                <p className="mt-2 text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thank you, <strong>{formData.name}</strong>. Our senior education loan officer will connect with you on <strong>{formData.phone}</strong> with multi-bank pre-approval offers for {formData.destination}.
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
                      placeholder="e.g. Suhas Patel"
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
                      placeholder="e.g. suhas@example.com"
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
                  {/* Loan Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Loan Category *
                    </label>
                    <select
                      value={formData.loanType}
                      onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Non-Collateral / Unsecured Loan">Non-Collateral / Unsecured Loan (No Property)</option>
                      <option value="Collateral / Secured Loan">Collateral / Secured Loan (Against Property / FD)</option>
                      <option value="International Student Loan">International Lender (Prodigy / MPower)</option>
                      <option value="Not Sure / Need Guidance">Not Sure / Recommend Best Option</option>
                    </select>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Target Study Destination *
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="USA">United States (USA)</option>
                      <option value="United Kingdom">United Kingdom (UK)</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany / Europe">Germany / Schengen Europe</option>
                      <option value="Ireland">Ireland</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Other">Other Global Destination</option>
                    </select>
                  </div>

                  {/* Required Amount */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Estimated Loan Amount *
                    </label>
                    <select
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Up to ₹20 Lakhs">Up to ₹20 Lakhs</option>
                      <option value="₹20 Lakhs - ₹40 Lakhs">₹20 Lakhs - ₹40 Lakhs</option>
                      <option value="₹40 Lakhs - ₹75 Lakhs">₹40 Lakhs - ₹75 Lakhs</option>
                      <option value="Above ₹75 Lakhs">Above ₹75 Lakhs (Up to ₹1.5 Cr+)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    University Name / Co-Applicant Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention your admitted university, course name, co-applicant occupation (salaried/business), or any property details..."
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
                    Check Pre-Approved Rates
                  </button>

                  <a
                    href="https://wa.me/919173186109?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20an%20Education%20Loan%20for%20Study%20Abroad."
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
