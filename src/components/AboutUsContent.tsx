"use client";

import { sendFormInquiry } from "@/lib/inquiries/web3forms";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import officeBanner from "../../public/umang-office-banner-v3.jpg";
import founderPhoto from "../../public/founder-photo-v4.jpg";

/* -------------------------------------------------------------
   SVG ICONS
------------------------------------------------------------- */
function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* Service Pills Data */
interface ServicePill {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const servicePills: ServicePill[] = [
  {
    title: "Career Counselling",
    href: "/services/career-counselling",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 3.28L18.82 9 12 12.72 5.18 9 12 6.28zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    title: "University Selection",
    href: "/services/university-selection",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 1L2 6v2h20V6L12 1zm-7 9v8h3v-8H5zm5 0v8h3v-8h-3zm5 0v8h3v-8h-3zm5 0v8h3v-8h-3zM2 20v2h20v-2H2z" />
      </svg>
    ),
  },
  {
    title: "Visitor Visa",
    href: "/services/visitor-visa",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
  },
  {
    title: "PR | Immigration",
    href: "/services/pr-immigration",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Accommodation | SIM Card",
    href: "/services/accommodation",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
  },
  {
    title: "Forex Services",
    href: "/services/forex-services",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-1.08c-1.3-.25-2.28-1.04-2.48-2.22l1.62-.65c.12.7.67 1.25 1.66 1.25 1.14 0 1.6-.66 1.6-1.18 0-.74-.63-1.07-1.84-1.42-1.63-.48-2.54-1.22-2.54-2.45 0-1.33 1.05-2.22 2.38-2.48V5.5h2v1.07c1.11.23 1.94.9 2.19 1.92l-1.57.65c-.14-.59-.6-1.04-1.42-1.04-.84 0-1.46.47-1.46 1.13 0 .62.48.97 1.69 1.34 1.77.53 2.69 1.27 2.69 2.58 0 1.39-1.08 2.33-2.36 2.56V16.5z" />
      </svg>
    ),
  },
  {
    title: "Pre-Departure Guidance",
    href: "/services/pre-departure-guidance",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
  },
  {
    title: "Air Ticket | Travel Insurance",
    href: "/services/air-ticket-travel-insurance",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.4-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 14.8-3.96c.8-.21 1.28-1.05 1.06-1.87z" />
      </svg>
    ),
  },
  {
    title: "Visa Documentation",
    href: "/services/visa-documentation",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    title: "Student Visa",
    href: "/services/student-visa",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
  },
  {
    title: "Statement of Purpose",
    href: "/services/statement-of-purpose",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6zm2 2h12v1.5H6V8zm0 2.5h12V12H6v-1.5zm0 2.5h8V14H6v-1.5z" />
      </svg>
    ),
  },
  {
    title: "Spouse Visa",
    href: "/services/spouse-visa",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm8.5 1.75c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h5.5v-1.75c0-2.33-4.67-3.5-6.5-3.5zM17 12c1.93 0 3.5-1.57 3.5-3.5S18.93 5 17 5c-.47 0-.91.1-1.32.27.53.94.82 2.03.82 3.23s-.29 2.29-.82 3.23c.41.17.85.27 1.32.27z" />
      </svg>
    ),
  },
  {
    title: "Education Loan",
    href: "/services/education-loan",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
      </svg>
    ),
  },
];

/* -------------------------------------------------------------
   MAIN ABOUT US CONTENT COMPONENT
------------------------------------------------------------- */
export default function AboutUsContent() {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [overviewInView, setOverviewInView] = useState(false);
  const [journeyInView, setJourneyInView] = useState(false);
  const [founderInView, setFounderInView] = useState(false);
  const [promiseInView, setPromiseInView] = useState(false);
  const [pillsInView, setPillsInView] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Student Visa",
    destination: "Australia",
    message: "",
  });

  const overviewRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const promiseRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBannerLoaded(true);

    const observerOptions = {
      root: null,
      threshold: 0.12,
    };

    const overviewObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setOverviewInView(true);
    }, observerOptions);

    const journeyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setJourneyInView(true);
    }, observerOptions);

    const founderObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFounderInView(true);
    }, observerOptions);

    const promiseObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPromiseInView(true);
    }, observerOptions);

    const pillsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPillsInView(true);
    }, observerOptions);

    if (overviewRef.current) overviewObserver.observe(overviewRef.current);
    if (journeyRef.current) journeyObserver.observe(journeyRef.current);
    if (founderRef.current) founderObserver.observe(founderRef.current);
    if (promiseRef.current) promiseObserver.observe(promiseRef.current);
    if (pillsRef.current) pillsObserver.observe(pillsRef.current);

    return () => {
      overviewObserver.disconnect();
      journeyObserver.disconnect();
      founderObserver.disconnect();
      promiseObserver.disconnect();
      pillsObserver.disconnect();
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(await sendFormInquiry(e.currentTarget as HTMLFormElement, "About Us page"))) return;
    setFormSubmitted(true);
  };

  const topTwelvePills = servicePills.slice(0, 12);
  const loanPill = servicePills[12];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Global Embedded Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gentleFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            .anim-gentle-float {
              animation: gentleFloat 4s ease-in-out infinite;
            }
            @keyframes phoneRing {
              0%, 100% { transform: rotate(0deg); }
              20% { transform: rotate(15deg); }
              40% { transform: rotate(-15deg); }
              60% { transform: rotate(10deg); }
              80% { transform: rotate(-10deg); }
            }
            .anim-phone-ring:hover svg {
              animation: phoneRing 0.8s ease-in-out;
            }
          `,
        }}
      />

      {/* =========================================================
          1. OFFICE BANNER
         ========================================================= */}
      <section className="w-full relative overflow-hidden bg-white shadow-sm">
        <div
          className={`w-full relative transition-all duration-1000 ease-out transform ${
            bannerLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
          }`}
        >
          <Image
            src={officeBanner}
            alt="Umang Career Consultancy Office Vadodara"
            priority
            quality={95}
            className="w-full h-auto object-cover block"
          />
        </div>
      </section>

      {/* =========================================================
          2. WELCOME & ABOUT HERO INTRODUCTION
         ========================================================= */}
      <section
        ref={overviewRef}
        className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#e52928] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0a1e38] font-bold">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div
              className={`lg:col-span-7 space-y-6 transition-all duration-700 ease-out transform ${
                overviewInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e52928] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-[#e52928] tracking-wide uppercase">
                  Founded in 2020 • Vadodara, Gujarat
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight leading-tight">
                About Us -{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1e38] via-[#e52928] to-[#b91c1c]">
                  Umang Career Consultancy
                </span>
              </h1>

              <div className="p-4 sm:p-5 bg-slate-50 rounded-2xl border-l-4 border-[#e52928] shadow-sm">
                <h2 className="text-lg sm:text-xl font-bold text-[#0a1e38] mb-2">
                  Welcome to Umang Career Consultancy
                </h2>
                <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed">
                  Your trusted partner in navigating global immigration, study, and travel visas. Founded in 2020, our mission is to turn your global aspirations into reality through honest, professional, and crystal-clear guidance.
                </p>
              </div>

              {/* 4 Core Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white border border-slate-200 p-3.5 rounded-xl text-center shadow-xs">
                  <div className="text-lg font-black text-[#e52928]">2020</div>
                  <div className="text-xs text-slate-500 font-semibold">Established</div>
                </div>
                <div className="bg-white border border-slate-200 p-3.5 rounded-xl text-center shadow-xs">
                  <div className="text-lg font-black text-[#0a1e38]">100%</div>
                  <div className="text-xs text-slate-500 font-semibold">Transparency</div>
                </div>
                <div className="bg-white border border-slate-200 p-3.5 rounded-xl text-center shadow-xs">
                  <div className="text-lg font-black text-emerald-600">Global</div>
                  <div className="text-xs text-slate-500 font-semibold">Immigration</div>
                </div>
                <div className="bg-white border border-slate-200 p-3.5 rounded-xl text-center shadow-xs">
                  <div className="text-lg font-black text-blue-600">Vadodara</div>
                  <div className="text-xs text-slate-500 font-semibold">Headquarters</div>
                </div>
              </div>
            </div>

            {/* Right Video / Media Column: Official Instagram Reel */}
            <div
              className={`lg:col-span-5 flex flex-col items-center transition-all duration-700 delay-200 ease-out transform ${
                overviewInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative w-full max-w-[380px] h-[520px] sm:h-[580px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <iframe
                  src="https://www.instagram.com/reel/DfKG-0HINd0/embed/"
                  title="Umang Career Consultancy - Official Instagram Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                  className="w-full h-full border-0"
                />
              </div>

              <div className="mt-3.5 flex flex-col items-center gap-2 text-center max-w-sm">
                <a
                  href="https://www.instagram.com/umangcareer2022/reel/DfKG-0HINd0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs shadow-md transition-transform hover:scale-105 active:scale-95"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Watch on Instagram (@umangcareer2022)</span>
                </a>
                <span className="text-xs text-slate-500 font-medium">
                  Official Reel: &quot;Umang Career Me Possible Hai!&quot;
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. OUR JOURNEY: GROWTH BUILT ON TRUST
         ========================================================= */}
      <section
        ref={journeyRef}
        className="w-full py-16 sm:py-24 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100/70 text-[#e52928] text-xs font-bold uppercase tracking-wider mb-3">
              The Evolution of Umang
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
              Our Journey: Growth Built on Trust
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              From visitor visas to global education and permanent immigration, our trajectory is defined by honesty and client outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1: 2020 Founded */}
            <div
              className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-500 flex flex-col justify-between transform ${
                journeyInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#e52928] flex items-center justify-center font-black text-xl mb-6 shadow-xs">
                  2020
                </div>
                <h3 className="text-xl font-bold text-[#0a1e38] mb-3">
                  Helping People Explore the World
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Umang Career Consultancy was established in 2020 with a simple goal: helping people explore the world. We began our journey by mastering the complexities of visitor visas, ensuring our clients experienced smooth and hassle-free travel planning.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#e52928] flex items-center gap-1.5">
                <span>Phase 1 • Travel &amp; Visitor Mastery</span>
              </div>
            </div>

            {/* Step 2: Educational Expansion */}
            <div
              className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-500 flex flex-col justify-between transform ${
                journeyInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xl mb-6 shadow-xs">
                  2022
                </div>
                <h3 className="text-xl font-bold text-[#0a1e38] mb-3">
                  Expanding into Student Visas
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  As our reputation for reliability grew, so did the dreams of our clients. Recognizing a profound need for genuine educational guidance, we expanded our expertise into student visas. We took pride in guiding ambitious young minds toward the right international universities and secure career paths.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-blue-600 flex items-center gap-1.5">
                <span>Phase 2 • Global University Admissions</span>
              </div>
            </div>

            {/* Step 3: Comprehensive Immigration */}
            <div
              className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-500 flex flex-col justify-between transform ${
                journeyInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl mb-6 shadow-xs">
                  Today
                </div>
                <h3 className="text-xl font-bold text-[#0a1e38] mb-3">
                  Comprehensive Global Immigration
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Today, we have evolved into a comprehensive immigration consultancy. We successfully settle individuals, professionals, and families in major destinations across the globe. From temporary visits to permanent residency, our evolutionary path reflects our adaptive expertise and unwavering commitment to client success.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                <span>Phase 3 • Full-Spectrum Immigration</span>
              </div>
            </div>

          </div>

          {/* Emotionally Resonant Vision Statement Box */}
          <div className="mt-14 p-8 sm:p-10 bg-gradient-to-br from-red-50/70 via-white to-slate-50 rounded-3xl border border-red-100 border-l-4 border-l-[#e52928] shadow-md">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="md:w-1/3 shrink-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider mb-3">
                  Our Vision
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0a1e38] tracking-tight">
                  Where Hope Meets Honesty
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                  We believe that a passport full of stamps shouldn’t come with a head full of stress.
                </p>
              </div>

              <div className="md:w-2/3 space-y-4">
                <p className="text-base sm:text-lg font-semibold text-[#0a1e38] leading-relaxed">
                  Your dream of moving abroad, studying at a global university, or exploring a new country is one of the biggest chapters of your life—and it shouldn&apos;t feel like a cold, terrifying legal hurdle.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Our vision is to build a consultancy where <strong className="text-[#0a1e38] font-bold">hope meets honesty</strong>. We see a future where every student, family, and traveler who walks through our doors is met with absolute clarity, zero hidden games, and genuine warmth. By taking the heavy burden of embassy visas, complex flight ticketing, and tour logistics completely off your shoulders, we want to be more than just a service provider. We aim to be the trusted partner that stands by you at every single milestone—giving you the direct, crystal-clear truth you deserve, so you can step onto your flight with a calm heart and total confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. MEET OUR FOUNDER: SUDIP PARIKH
         ========================================================= */}
      <section
        ref={founderRef}
        className="w-full py-16 sm:py-24 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Founder Photo & Title */}
            <div
              className={`lg:col-span-5 flex flex-col items-center text-center transition-all duration-800 ease-out transform ${
                founderInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative w-full max-w-[340px] aspect-[703/726] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-50 p-1 group">
                <Image
                  src={founderPhoto}
                  alt="Sudip Parikh - Founder of Umang Career Consultancy"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 text-center">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Alumnus • Australia &amp; New Zealand
                  </div>
                  <div className="text-sm font-black text-[#0a1e38]">
                    Sudip Parikh
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0a1e38]">
                  Sudip Parikh
                </h3>
                <p className="text-sm font-bold text-[#e52928] uppercase tracking-wider">
                  Founder &amp; Principal Consultant
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Umang Career Consultancy • Vadodara
                </p>
              </div>
            </div>

            {/* Founder Story & Profile Credentials */}
            <div
              className={`lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed transition-all duration-800 delay-150 ease-out transform ${
                founderInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                Leadership &amp; Vision
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] tracking-tight">
                Meet Our Founder: Sudip Parikh
              </h2>

              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                Umang Career Consultancy is led by <span className="font-bold text-[#0a1e38]">Sudip Parikh</span>, a seasoned professional who understands international journeys from the inside out.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Having completed his own higher education in both <strong className="text-slate-900 font-semibold">Australia and New Zealand</strong>, Sudip knows firsthand the challenges, anxieties, and excitement of moving to a new country. This personal experience forms the foundational empathy of our firm—we treat your application as if it were our own.
              </p>

              <div className="pt-1">
                <Link
                  href="/founder-message"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-50 text-[#e52928] hover:bg-[#e52928] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-red-200 shadow-xs"
                >
                  <span>Read Full Founder&apos;s Message</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-bold text-[#0a1e38] uppercase tracking-wider mb-4">
                  Diverse &amp; Rigorous Professional Profile:
                </h4>

                <div className="space-y-4">
                  {/* Pillar 1 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-[#e52928] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#e52928]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0a1e38] text-sm sm:text-base">
                        Global Educational Foundation
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        Personal insights from studying extensively in Australia and New Zealand, providing authentic real-world perspective on university life, work rights, and cultural adaptation.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0a1e38] text-sm sm:text-base">
                        Certified Diplomatic Knowledge
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        Successfully completed specialized visa application courses hosted by various country embassies, ensuring deep awareness of changing immigration policies, genuine student rules, and compliance requirements.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0a1e38] text-sm sm:text-base">
                        Comprehensive Travel Insight
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        Professional ticketing and transit experience to seamlessly connect the logistical dots of your journey—from flights and forex to transit insurance and border clearance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          5. THE UMANG PROMISE: CRYSTAL-CLEAR GUIDANCE
         ========================================================= */}
      <section
        ref={promiseRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-br from-[#0a1e38] via-[#0f284c] to-[#0a1e38] text-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 text-xs font-bold uppercase tracking-wider">
              Our Core Philosophy
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              The Umang Promise:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-200">
                Crystal-Clear Guidance
              </span>
            </h2>

            <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed">
              At Umang Career Consultancy, we do not believe in false hopes or hidden terms. Sudip Parikh has built this firm on a strict policy of transparency.
            </p>

            <div className="p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 text-left space-y-4 shadow-xl">
              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  <strong className="text-white">Direct, Honest &amp; Realistic Profile Evaluation:</strong> When you sit down with us, you receive a direct, honest, and realistic evaluation of your profile.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  <strong className="text-white">Open About Challenges:</strong> If your application faces challenges, we will tell you openly and offer viable alternative strategies.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  <strong className="text-white">Preventing Financial Loss:</strong> This &quot;crystal-clear&quot; approach saves you time, prevents unnecessary financial loss, and maximizes your chances of ultimate approval.
                </p>
              </div>
            </div>

            <div className="pt-4 text-xl sm:text-2xl font-black text-amber-300">
              &quot;Let us handle the paperwork while you focus on your bright future abroad.&quot;
            </div>

            {/* Why We Care & Emotional Brand Slogans */}
            <div className="pt-8 border-t border-white/15 text-left space-y-6">
              <div className="text-center">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Emotional Story Block
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                  Why We Care
                </h3>
              </div>

              <div className="p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-2xl border-l-4 border-[#e52928] text-slate-100 text-sm sm:text-base leading-relaxed space-y-4">
                <p className="font-semibold text-white text-base sm:text-lg">
                  &ldquo;We know exactly what is at stake when you hand us your documents. We know that behind every passport is a parent’s hard-earned savings, a student’s late-night sacrifices, or a family&apos;s dream of a better future.&rdquo;
                </p>
                <p>
                  Our founder, <strong className="text-white font-bold">Sudip Parikh</strong>, sat in those exact same shoes when heading to Australia and New Zealand for his own education. He remembers the anxiety of waiting for an embassy response and the confusion of booking flights alone. That is why Umang Career Consultancy exists. We care because we remember what it feels like.
                </p>
                <p className="text-amber-200">
                  We don&apos;t see you as an application file or a checklist—we see your hopes, your hard work, and your future. That is why we promise to always tell you the crystal-clear truth, manage your logistics end-to-end, and treat your dreams with the respect they deserve.
                </p>
              </div>

              {/* 4 Brand Slogans */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-sm font-black text-white">Clear Truth.</span>
                  <span className="text-xs text-red-400 font-semibold">Confident Journeys.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-sm font-black text-white">Real Dreams.</span>
                  <span className="text-xs text-red-400 font-semibold">Zero Stress.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-sm font-black text-white">Honest Guidance.</span>
                  <span className="text-xs text-red-400 font-semibold">Approved Futures.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-sm font-black text-white">Your Global Journey,</span>
                  <span className="text-xs text-red-400 font-semibold">Simplified.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          6. COMPREHENSIVE SERVICES (13 INTERACTIVE PILLS)
         ========================================================= */}
      <section
        ref={pillsRef}
        className="w-full bg-[#f8fafc] py-16 sm:py-20 border-b border-slate-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1e38] tracking-tight uppercase">
              Our Comprehensive Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              End-to-end guidance covering every crucial stage of your international study, immigration, and transit journey.
            </p>
          </div>

          {/* 12 Services Pills with staggered cascade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {topTwelvePills.map((pill, idx) => (
              <Link
                key={idx}
                href={pill.href}
                style={{
                  transitionDelay: pillsInView ? `${idx * 40}ms` : "0ms",
                }}
                className={`w-full h-[54px] px-5 sm:px-6 rounded-full bg-[#0a1e38] hover:bg-[#e52928] text-white flex items-center justify-center gap-3 shadow-sm hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none group transform ${
                  pillsInView
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
                }`}
              >
                <span className="text-white/90 group-hover:scale-110 transition-all duration-300">
                  {pill.icon}
                </span>
                <span className="font-semibold text-xs sm:text-[13px] lg:text-sm tracking-wide truncate group-hover:text-white transition-colors duration-200">
                  {pill.title}
                </span>
              </Link>
            ))}
          </div>

          {/* 13th Pill: Centered Education Loan */}
          <div className="flex justify-center mt-3.5 sm:mt-4">
            <Link
              href={loanPill.href}
              style={{
                transitionDelay: pillsInView ? "520ms" : "0ms",
              }}
              className={`h-[54px] px-8 rounded-full bg-[#0a1e38] hover:bg-[#e52928] text-white inline-flex items-center justify-center gap-3 shadow-sm hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none group min-w-[240px] transform ${
                pillsInView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              }`}
            >
              <span className="text-white/90 group-hover:scale-110 transition-all duration-300">
                {loanPill.icon}
              </span>
              <span className="font-semibold text-xs sm:text-[13px] lg:text-sm tracking-wide group-hover:text-white transition-colors duration-200">
                {loanPill.title}
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          7. TRANSPARENT PROFILE EVALUATION BOOKING FORM
         ========================================================= */}
      <section id="counselling-form" className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                Vadodara Office • Sudip Parikh &amp; Team
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] leading-tight">
                Ready to take the first step toward your new destination?
              </h2>

              <p className="text-base sm:text-lg font-semibold text-[#e52928]">
                Book your transparent profile evaluation call today.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Experience the Umang difference: zero false promises, realistic university and visa strategies, and honest feedback on your profile.
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckIcon />
                  <span>Direct Consultation with Australia/NZ Alumnus Sudip Parikh</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckIcon />
                  <span>Unfiltered Assessment of Approval Chances &amp; Backlogs</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckIcon />
                  <span>Viable Alternative Pathways to Protect Your Future</span>
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="pt-2 space-y-2">
                <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">
                  Call Umang Career Consultancy:
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="tel:+919173186109"
                    className="anim-phone-ring inline-flex items-center gap-2.5 text-lg sm:text-xl font-black text-[#0a1e38] hover:text-[#e52928] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#e52928] text-white flex items-center justify-center shadow-md">
                      <PhoneIcon />
                    </div>
                    <span>+91 91731 86109</span>
                  </a>
                  <span className="text-slate-300 font-bold hidden sm:inline">•</span>
                  <a
                    href="tel:+919712610086"
                    className="anim-phone-ring inline-flex items-center gap-2.5 text-lg sm:text-xl font-black text-[#0a1e38] hover:text-[#e52928] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#0a1e38] text-white flex items-center justify-center shadow-md">
                      <PhoneIcon />
                    </div>
                    <span>+91 97126 10086</span>
                  </a>
                </div>
              </div>

              <div className="text-xs text-slate-500 space-y-1">
                <div>
                  <span className="font-bold text-slate-700">Office Address: </span>
                  First Floor 25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP road, Vadodara Gujarat. 390019
                </div>
                <div className="text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-600">Email: </span>
                  umangcareer2022@gmail.com • umangcareer2026@gmail.com • umangcareer2023@gmail.com
                </div>
              </div>
            </div>

            {/* Right Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-[#0a1e38]">
                    Evaluation Request Received!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || "Client"}</span>. Sudip Parikh or a senior Umang consultant will contact you on <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours for your transparent evaluation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Parth Patel"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="e.g. parth@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                      >
                        <option value="Student Visa">Student Visa</option>
                        <option value="Visitor Visa">Visitor Visa</option>
                        <option value="PR | Immigration">PR | Permanent Residency</option>
                        <option value="Spouse / Dependent Visa">Spouse / Dependent Visa</option>
                        <option value="Career Counselling">Career Counselling</option>
                        <option value="University Selection">University Selection</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Target Country / Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData((prev) => ({ ...prev, destination: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                    >
                      <option value="Australia">Australia</option>
                      <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                      <option value="Canada">Canada</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Europe / Schengen">Europe / Schengen</option>
                      <option value="Dubai / UAE">Dubai / UAE</option>
                      <option value="United States (USA)">United States (USA)</option>
                      <option value="Other / Multiple">Other / Multiple</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Query or Profile Overview
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us about your educational/work background, any refusals or gaps, and what you aim to achieve..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#e52928] focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e52928] hover:bg-[#c81e1d] text-white font-extrabold rounded-xl shadow-lg shadow-red-500/25 transition-all text-base"
                  >
                    Book Transparent Profile Evaluation
                  </button>
                  <p className="text-[11px] text-center text-slate-400">
                    100% Honest Assessment • Zero Hidden Terms • Certified Guidance
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          8. BOTTOM CALLOUT BAR
         ========================================================= */}
      <div className="w-full bg-[#0a1e38] text-white py-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-sm font-semibold text-slate-200">
            Founded in 2020 by Sudip Parikh • Transparent Immigration, Study &amp; Visitor Visas in Vadodara
          </div>
          <a
            href="tel:+919173186109"
            className="px-5 py-2 rounded-lg bg-[#e52928] hover:bg-[#c81e1d] text-white text-xs font-bold transition-colors whitespace-nowrap shadow-md"
          >
            Call: +91 91731 86109
          </a>
        </div>
      </div>

    </div>
  );
}
