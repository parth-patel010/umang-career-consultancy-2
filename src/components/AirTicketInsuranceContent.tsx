"use client";

import { sendFormInquiry } from "@/lib/inquiries/web3forms";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------
   SVG ICONS (Crisp, High-Definition Vector SVGs)
------------------------------------------------------------- */
function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
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

function CheckCircleIcon({ className = "w-6 h-6 text-[#22c55e]" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      className={`text-center mb-10 sm:mb-12 transition-all duration-700 ease-out transform ${
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
            isDark ? "text-white" : "text-[#0a1e38]"
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
            isDark ? "text-slate-200" : "text-slate-600"
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
  const [paymentsInView, setPaymentsInView] = useState(false);
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
  const paymentsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLElement>(null);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tripType: "International Flight",
    departureCity: "Ahmedabad / Mumbai",
    destination: "London, UK",
    travelDates: "",
    passengers: "1 Passenger",
    notes: "",
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
          if (entry.target === paymentsRef.current) setPaymentsInView(true);
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
    if (paymentsRef.current) observer.observe(paymentsRef.current);
    if (faqRef.current) observer.observe(faqRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (bookRef.current) observer.observe(bookRef.current);

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(await sendFormInquiry(e.currentTarget as HTMLFormElement, "Air Ticket Insurance page"))) return;
    setFormSubmitted(true);
  };

  /* -------------------------------------------------------------
     1. PREMIUM FULL-SERVICE CARE PILLARS (OM Bhai's Prompt)
  ------------------------------------------------------------- */
  const fullServicePillars = [
    {
      title: "Automated Web Check-In",
      tag: "100% Free of Charge",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      desc: "Forget about setting reminders or logging into complex airline portals. Our dedicated ticketing team handles your web check-in automatically as soon as the window opens.",
      benefit: "Preferred seat selection & stress-free boarding.",
      icon: (
        <svg className="w-8 h-8 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Boarding Passes Directly to WhatsApp",
      tag: "Direct to Your Phone",
      badgeColor: "bg-green-50 text-green-700 border-green-200",
      desc: "We issue your boarding pass on your behalf and deliver it directly to your WhatsApp number at least 2 hours before your flight departs. All you have to do is show up at the airport.",
      benefit: "No printing queues, no mobile app logins required.",
      icon: (
        <svg className="w-8 h-8 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Corporate Travel Management",
      tag: "Business & Group Solutions",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      desc: "We provide customized corporate flight booking solutions for businesses, offering optimized itineraries, group fare advantages, flexible rescheduling, and streamlined GST invoicing for your employees.",
      benefit: "Dedicated account manager & bulk booking savings.",
      icon: (
        <svg className="w-8 h-8 text-[#0a1e38]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     2. PAYMENT OPTIONS (OM Bhai's Prompt)
  ------------------------------------------------------------- */
  const paymentMethods = [
    {
      title: "Instant UPI Transfer",
      subtitle: "Google Pay & PhonePe",
      desc: "Instant zero-fee digital payments directly from your smartphone for swift ticket issuance.",
      badge: "Fastest Confirmation",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Direct Bank Transfer",
      subtitle: "NEFT & RTGS",
      desc: "Direct corporate bank account settlement ideal for family trips, university groups, and business accounts.",
      badge: "High-Value Bookings",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      title: "Card Payments",
      subtitle: "All Major Credit & Debit Cards",
      desc: "Accepting Visa, MasterCard, RuPay, and American Express with secure encrypted processing (T&C APPLIED).",
      badge: "T&C Applied",
      icon: (
        <svg className="w-8 h-8 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     3. 6 VALUE ADDS (Student Baggage & Comprehensive Transit)
  ------------------------------------------------------------- */
  const serviceFeatures = [
    {
      title: "Exclusive Student Baggage Fares",
      description:
        "Access special student airline tariffs with up to 40kg–46kg checked baggage allowances and flexible cancellation terms across global carriers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Layover & Transit Visa Guidance",
      description:
        "Careful routing analysis to avoid complex transit visas during European, Middle Eastern, or Asian stopovers, ensuring smooth transfers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Cashless Medical Emergency Cover",
      description:
        "Worldwide cashless hospitalization coverage up to $500,000 for unexpected medical illnesses, emergency treatments, and dental emergencies abroad.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Flight Delay & Cancellation Shield",
      description:
        "Financial reimbursement for missed flight connections, extended delays, airline schedule disruptions, or necessary hotel accommodations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Lost Passport & Luggage Protection",
      description:
        "Comprehensive indemnity coverage for lost check-in luggage, delayed baggage delivery, and emergency duplicate passport reissue costs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Destination Airport Pick-up & Transit",
      description:
        "Assistance with arranging reliable airport transfers so you can reach your overseas accommodation or university dorm safely and on time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  /* -------------------------------------------------------------
     4. 8-STEP PROCESS (Navy Section)
  ------------------------------------------------------------- */
  const processSteps = [
    {
      step: "01",
      title: "Send Travel Dates on WhatsApp",
      desc: "Share your travel dates, preferred departure city, and destination with our team via WhatsApp or call.",
    },
    {
      step: "02",
      title: "Competitive Fare Comparison",
      desc: "Receive customized domestic or international fare comparisons across top airlines with transparent pricing.",
    },
    {
      step: "03",
      title: "Flexible Payment Options",
      desc: "Complete your booking seamlessly via Instant UPI (GPay/PhonePe), Direct Bank Transfer, or Debit/Credit Cards.",
    },
    {
      step: "04",
      title: "Confirmed PNR & E-Ticket Issuance",
      desc: "Instant confirmed ticket delivery with verified PNR and student extra baggage allowances tagged.",
    },
    {
      step: "05",
      title: "Transit & Layover Audit",
      desc: "We verify baggage transfer rules, terminal connections, and transit visa exemptions for your route.",
    },
    {
      step: "06",
      title: "Automated Web Check-In",
      desc: "Our team automatically completes your web check-in as soon as the airline portal opens.",
    },
    {
      step: "07",
      title: "Boarding Pass on WhatsApp (2h Prior)",
      desc: "Your ready-to-use boarding pass is delivered straight to your WhatsApp at least 2 hours before departure.",
    },
    {
      step: "08",
      title: "Smooth Airport Walk-In & Landing",
      desc: "Skip long queues, show your digital boarding pass, drop your bags, and enjoy a comfortable journey.",
    },
  ];

  /* -------------------------------------------------------------
     5. FAQS
  ------------------------------------------------------------- */
  const faqs = [
    {
      q: "Do you charge extra for automated web check-in and WhatsApp boarding passes?",
      a: "No! At Umang Career Consultancy, our automated web check-in and WhatsApp boarding pass delivery (at least 2 hours before flight departure) are provided completely free of charge as part of our premium full-service care.",
    },
    {
      q: "Can you arrange extra baggage allowances for international students?",
      a: "Yes! We have direct access to specialized international student fares with major global carriers (Emirates, Qatar Airways, Air India, British Airways, Singapore Airlines) offering 40kg to 46kg checked baggage allowances.",
    },
    {
      q: "How does Corporate Travel Management work for businesses?",
      a: "We provide customized corporate flight booking solutions for companies and institutions, offering optimized itineraries, group fare advantages, flexible date changes, and centralized GST-compliant invoicing for your employees.",
    },
    {
      q: "What payment methods are accepted for flight ticket bookings?",
      a: "To make your booking process as smooth as possible, we accept all modern digital and traditional payment methods: Instant UPI Transfer (Google Pay & PhonePe), Direct Bank Transfer (NEFT & RTGS), and all major Credit & Debit Cards (T&C APPLIED).",
    },
    {
      q: "Can you assist with domestic flights within India as well?",
      a: "Yes, we book domestic flights across all Indian carriers (IndiGo, Air India, Vistara, Akasa Air, SpiceJet) with competitive airfares and automated web check-in support.",
    },
    {
      q: "What travel insurance options do you provide for overseas travelers?",
      a: "We offer comprehensive international travel insurance covering cashless hospitalization up to $500,000, trip cancellation/delay reimbursement, lost baggage compensation, and emergency duplicate passport reissuance.",
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
              50% { transform: translateY(-8px) rotate(0.4deg); }
            }
            .anim-gentle-float {
              animation: gentleFloat 5s ease-in-out infinite;
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
      <section className="w-full bg-gradient-to-b from-[#f8fafc] via-white to-white pt-28 sm:pt-36 pb-14 sm:pb-20 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div
              className={`lg:col-span-6 space-y-6 text-center lg:text-left transition-all duration-1000 ease-out transform ${
                heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e52928] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#e52928] animate-ping" />
                Flight Ticket Booking Services • Umang Career Consultancy
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Seamless Flight Bookings &amp;{" "}
                <span className="text-[#e52928]">End-to-End</span> Travel Support
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="ml-2 text-xs font-semibold text-slate-600">
                  Trusted by 2,000+ Students, Families &amp; Corporate Clients
                </span>
              </div>

              {/* Exact Text from OM Bhai */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                At <strong className="text-[#0a1e38] font-bold">Umang Career Consultancy</strong>, we don’t just help you get your visa—we make sure you reach your destination smoothly. We offer highly competitive airfares for both domestic and international travel, combined with a premium, stress-free booking experience.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                From individual travelers to corporate teams, we manage all your ticketing logistics so you can focus entirely on your journey.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://wa.me/919173186109?text=Hello%20Umang%20Career%20Consultancy%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20flight%20ticket%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Send Travel Dates on WhatsApp</span>
                </a>

                <a
                  href="tel:+919173186109"
                  className="anim-phone-ring inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0a1e38] hover:bg-[#112a4c] text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                  <PhoneIcon />
                  <span>Call +91 9173186109</span>
                </a>
              </div>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/80 max-w-md mx-auto lg:mx-0 text-center">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs sm:text-sm font-black text-[#0a1e38]">Auto Check-In</div>
                  <div className="text-[11px] text-emerald-600 font-bold">100% Free</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs sm:text-sm font-black text-[#0a1e38]">WhatsApp Pass</div>
                  <div className="text-[11px] text-emerald-600 font-bold">2h Before Flight</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs sm:text-sm font-black text-[#0a1e38]">Corporate Desk</div>
                  <div className="text-[11px] text-blue-600 font-bold">Group Rates</div>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic: Boarding Pass & Visual Card */}
            <div
              className={`lg:col-span-6 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[460px] flex flex-col gap-5 anim-gentle-float">
                {/* Boarding Pass Card */}
                <div className="bg-gradient-to-br from-[#0a1e38] via-[#122e54] to-[#0a1e38] text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/10 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-4 border-b border-white/15">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                      <span className="text-xs font-bold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full">
                        CONFIRMED E-TICKET
                      </span>
                    </div>
                    <span className="text-xs font-bold text-red-300">AUTO WEB CHECK-IN</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 my-5 text-center">
                    <div>
                      <div className="text-[11px] text-slate-300 uppercase">FROM</div>
                      <div className="text-xl sm:text-2xl font-black text-white">AMD / BOM</div>
                      <div className="text-[10px] text-slate-400">INDIA</div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-6 h-6 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                      </svg>
                      <span className="text-[10px] text-emerald-400 font-bold mt-1">NON-STOP / 1-STOP</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-300 uppercase">DESTINATION</div>
                      <div className="text-xl sm:text-2xl font-black text-[#e52928]">LHR / YYZ</div>
                      <div className="text-[10px] text-slate-400">GLOBAL ARRIVAL</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-dashed border-white/20 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-slate-300 text-[11px]">BOARDING PASS DELIVERY</div>
                      <div className="font-bold text-sm text-[#22c55e] flex items-center gap-1.5 mt-0.5">
                        <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                        <span>WhatsApp (2h Prior)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-300 text-[11px]">BAGGAGE PRIVILEGE</div>
                      <div className="font-black text-sm text-white">UP TO 46 KG</div>
                    </div>
                  </div>
                </div>

                {/* Sub-Card: Domestic & International Quote Widget */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/80 rounded-2xl p-5 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black uppercase text-[#e52928] tracking-wider">
                      Instant Fare Quote
                    </span>
                    <h4 className="text-base font-extrabold text-[#0a1e38] mt-0.5">
                      Domestic &amp; International Airfares
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Call our Vadodara office or WhatsApp for transparent rates.
                    </p>
                  </div>
                  <a
                    href="tel:+919173186109"
                    className="p-3.5 rounded-xl bg-[#0a1e38] text-white hover:bg-[#e52928] transition-colors shrink-0 shadow-sm"
                    aria-label="Call Umang Career Consultancy"
                  >
                    <PhoneIcon />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. OUR PREMIUM FULL-SERVICE CARE (OM BHAI) ================= */}
      <section ref={introRef} className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title='Our Premium "Full-Service" Care'
            subtitle="We believe in absolute convenience, which is why we handle all the post-booking hassles for you completely free of charge:"
            inView={introInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {fullServicePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="h-full bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#e52928] transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Top decorative gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#e52928] via-[#0a1e38] to-[#e52928] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>
                    <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${pillar.badgeColor}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pillar.benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Slogan Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a1e38] via-[#122e54] to-[#0a1e38] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">Stress-Free Travel</span>
              <h3 className="text-xl sm:text-2xl font-black mt-1">
                Let us take care of the logistics while you enjoy the flight.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                From Ahmedabad/Mumbai to London, Toronto, New York, Melbourne, or Dubai—we handle your ticketing, baggage, check-in, and boarding pass.
              </p>
            </div>
            <a
              href="https://wa.me/919173186109?text=Hello%20Umang%20Career%2C%20please%20send%20me%20a%20flight%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm tracking-wide shadow-lg transition-transform hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Get Instant Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= 3. FLEXIBLE & SECURE PAYMENT OPTIONS (OM BHAI) ================= */}
      <section ref={paymentsRef} className="w-full py-16 sm:py-24 bg-slate-50 border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Flexible & Secure Payment Options"
            subtitle="To make your booking process as smooth as possible, we accept all modern digital and traditional payment methods:"
            inView={paymentsInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {paymentMethods.map((method, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      {method.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                      {method.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#0a1e38]">{method.title}</h3>
                  <div className="text-sm font-bold text-[#e52928] mt-1">{method.subtitle}</div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {method.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                  <span>Verified Secure Gateway</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 font-medium">
            * Card payments subject to applicable merchant terms &amp; conditions (T&amp;C APPLIED). Official receipts issued immediately.
          </div>
        </div>
      </section>

      {/* ================= 4. DETAILED VALUE ADDS (6 Cards Grid) ================= */}
      <section ref={featuresRef} className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Comprehensive Travel Logistics & Medical Safety"
            subtitle="Tailored student flight arrangements and worldwide travel protections"
            inView={featuresInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {serviceFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0a1e38] transition-all duration-300 flex flex-col items-start group transform hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#e52928] flex items-center justify-center mb-5 border border-red-100 group-hover:bg-[#e52928] group-hover:text-white transition-all duration-300">
                  {feat.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0a1e38] mb-3 group-hover:text-[#e52928] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. 8-STEP PROCESS (NAVY SECTION) ================= */}
      <section
        ref={processRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden text-white"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="How Our Flight Booking & Care Works"
            subtitle="From your initial inquiry on WhatsApp to your boarding pass delivery — complete peace of mind"
            variant="dark"
            inView={processInView}
          />

          {/* 8 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="h-full bg-[#0e274a]/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#22c55e]/50 hover:bg-[#13325c] transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-white/30 tracking-tight group-hover:text-[#22c55e] transition-colors">
                      {stepItem.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#22c55e] transition-colors leading-snug">
                    {stepItem.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 text-[#22c55e] text-xs font-semibold">
                  Step {stepItem.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. FREQUENTLY ASKED QUESTIONS ================= */}
      <section ref={faqRef} className="w-full py-16 sm:py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions: Flight Tickets & Travel"
            subtitle="Clear answers regarding automated check-in, baggage allowances, payments, and corporate booking"
            inView={faqInView}
          />

          <div className="space-y-4 mt-10">
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

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-white/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 7. CALL BAR: LOOKING FOR THE BEST AIRFARES? (OM BHAI) ================= */}
      <section ref={ctaRef} className="w-full py-12 sm:py-16 bg-[#e52928] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ease-out transform ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-block px-3.5 py-1 rounded-md bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-2">
                Instant Transparent Airfare Quotes
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Looking for the best airfares for your next trip?
              </h3>
              <p className="mt-2 text-white/90 text-sm sm:text-base leading-relaxed">
                Send us your travel dates on WhatsApp or call our Vadodara office today for an instant, transparent quote!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="https://wa.me/919173186109?text=Hello%20Umang%20Career%2C%20here%20are%20my%20travel%20dates%3A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-[#0a1e38] hover:bg-slate-100 font-black text-base transition-all duration-200 shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-0.5 group"
              >
                <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                <span>WhatsApp Travel Dates</span>
              </a>

              <a
                href="tel:+919173186109"
                className="anim-phone-ring w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0a1e38] hover:bg-[#122846] text-white font-bold text-base transition-all duration-200 shadow-xl flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
              >
                <PhoneIcon />
                <span>Call +91 9173186109</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. TALK TO OUR FLIGHT & TRAVEL DESK (FORM & VERIFICATION) ================= */}
      <section
        id="book-consultation"
        ref={bookRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Request a Flight Ticket Quote"
            subtitle="Domestic or International • Student Fares • Corporate Travel Packages"
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
                  <CheckCircleIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a1e38]">Flight Request Received!</h3>
                <p className="mt-2 text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thank you, <strong>{formData.name}</strong>. Our ticketing officer will WhatsApp or call you on <strong>{formData.phone}</strong> with the lowest airfares and student baggage options.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 inline-flex px-6 py-2.5 rounded-lg bg-[#e52928] text-white font-semibold text-sm hover:bg-[#c9201f] transition-colors"
                >
                  Submit Another Fare Request
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
                      placeholder="e.g. Parikh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      WhatsApp / Phone Number *
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

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. parikh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Trip Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Trip Type *
                    </label>
                    <select
                      value={formData.tripType}
                      onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="International Flight">International Flight</option>
                      <option value="Domestic Flight (India)">Domestic Flight (India)</option>
                      <option value="Student Special Fare">Student Special Fare (40kg Baggage)</option>
                      <option value="Corporate / Group Travel">Corporate / Group Travel</option>
                    </select>
                  </div>

                  {/* Departure City */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Departure City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmedabad / Mumbai / Delhi"
                      value={formData.departureCity}
                      onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Destination City / Country *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. London, Toronto, Sydney"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Travel Dates */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Travel Date / Window *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 15th Aug 2026 or Flexible"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Special Requirements (Baggage, Airline Preference, Transit)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need direct or 1-stop via Emirates with student baggage, need free automated check-in and WhatsApp boarding pass..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all resize-none"
                  />
                </div>

                {/* Submit & WhatsApp Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#e52928] hover:bg-[#c9201f] text-white font-extrabold text-base shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Request Fare Quote
                  </button>

                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <a
                      href="https://wa.me/919173186109?text=Hello%20Umang%20Career%2C%20here%20are%20my%20flight%20details%3A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-current" />
                      <span>WhatsApp Dates</span>
                    </a>

                    <a
                      href="tel:+919712610086"
                      className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0a1e38] hover:bg-[#122846] text-white font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <PhoneIcon />
                      <span>Call +91 9712610086</span>
                    </a>
                  </div>
                </div>

                {/* Official Office Details Verification */}
                <div className="pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-500">
                  <div>
                    <strong className="text-slate-700 font-semibold block mb-0.5">Visit Our Vadodara Office:</strong>
                    First Floor 25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP road, Vadodara Gujarat. 390019
                  </div>
                  <div>
                    <strong className="text-slate-700 font-semibold block mb-0.5">Direct Helpline &amp; Email:</strong>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a href="tel:+919173186109" className="text-[#0a1e38] font-bold hover:underline">+91 9173186109</a>
                      <span>•</span>
                      <a href="tel:+919712610086" className="text-[#0a1e38] font-bold hover:underline">+91 9712610086</a>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      <a href="mailto:umangcareer2022@gmail.com" className="hover:underline">umangcareer2022@gmail.com</a> | <a href="mailto:umangcareer2025@gmail.com" className="hover:underline">umangcareer2025@gmail.com</a> | <a href="mailto:umangcareer2023@gmail.com" className="hover:underline">umangcareer2023@gmail.com</a>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
