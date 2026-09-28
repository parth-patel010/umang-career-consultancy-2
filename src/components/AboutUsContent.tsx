"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import officeBanner from "../../public/umang-office-banner-v3.jpg";

interface ServicePill {
  title: string;
  icon: React.ReactNode;
}

const servicePills: ServicePill[] = [
  {
    title: "Career Counselling",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 3.28L18.82 9 12 12.72 5.18 9 12 6.28zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    title: "University Selection",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 1L2 6v2h20V6L12 1zm-7 9v8h3v-8H5zm5 0v8h3v-8h-3zm5 0v8h3v-8h-3zm5 0v8h3v-8h-3zM2 20v2h20v-2H2z" />
      </svg>
    ),
  },
  {
    title: "Visitor Visa",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
  },
  {
    title: "PR | Immigration",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Accommodation | SIM Card",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
  },
  {
    title: "Forex Services",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-1.08c-1.3-.25-2.28-1.04-2.48-2.22l1.62-.65c.12.7.67 1.25 1.66 1.25 1.14 0 1.6-.66 1.6-1.18 0-.74-.63-1.07-1.84-1.42-1.63-.48-2.54-1.22-2.54-2.45 0-1.33 1.05-2.22 2.38-2.48V5.5h2v1.07c1.11.23 1.94.9 2.19 1.92l-1.57.65c-.14-.59-.6-1.04-1.42-1.04-.84 0-1.46.47-1.46 1.13 0 .62.48.97 1.69 1.34 1.77.53 2.69 1.27 2.69 2.58 0 1.39-1.08 2.33-2.36 2.56V16.5z" />
      </svg>
    ),
  },
  {
    title: "Pre-Departure Guidance",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
  },
  {
    title: "Air Ticket | Travel Insurance",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.4-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 14.8-3.96c.8-.21 1.28-1.05 1.06-1.87z" />
      </svg>
    ),
  },
  {
    title: "Visa Documentation",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    title: "Student Visa",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
  },
  {
    title: "Statement of Purpose",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6zm2 2h12v1.5H6V8zm0 2.5h12V12H6v-1.5zm0 2.5h8V14H6v-1.5z" />
      </svg>
    ),
  },
  {
    title: "Spouse Visa",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm8.5 1.75c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h5.5v-1.75c0-2.33-4.67-3.5-6.5-3.5zM17 12c1.93 0 3.5-1.57 3.5-3.5S18.93 5 17 5c-.47 0-.91.1-1.32.27.53.94.82 2.03.82 3.23s-.29 2.29-.82 3.23c.41.17.85.27 1.32.27z" />
      </svg>
    ),
  },
  {
    title: "Education Loan",
    icon: (
      <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
      </svg>
    ),
  },
];

export default function AboutUsContent() {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [overviewInView, setOverviewInView] = useState(false);
  const [pillsInView, setPillsInView] = useState(false);

  const overviewRef = useRef<HTMLDivElement>(null);
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

    const pillsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPillsInView(true);
    }, observerOptions);

    if (overviewRef.current) overviewObserver.observe(overviewRef.current);
    if (pillsRef.current) pillsObserver.observe(pillsRef.current);

    return () => {
      overviewObserver.disconnect();
      pillsObserver.disconnect();
    };
  }, []);

  const topTwelvePills = servicePills.slice(0, 12);
  const loanPill = servicePills[12];

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* ================= 1ST SECTION: OFFICE SLICED BANNER ================= */}
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

      {/* ================= 2ND SECTION: ABOUT OVERVIEW WITH VIDEO ================= */}
      <section
        ref={overviewRef}
        className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Section Heading */}
          <h1
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1e38] tracking-tight uppercase mb-8 transition-all duration-700 ease-out transform ${
              overviewInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            ABOUT UMANG CAREER CONSULTANCY
          </h1>

          {/* Unified Content Flow: Floated Video on Desktop, Normal Paragraph Spacing */}
          <div
            className={`w-full text-slate-700 text-sm sm:text-base leading-relaxed transition-all duration-700 delay-150 ease-out transform ${
              overviewInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Floated Video Container */}
            <div className="w-full lg:w-[46%] xl:w-[44%] lg:float-right lg:ml-10 lg:mb-6 mb-6">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group hover:shadow-2xl hover:border-slate-300 transition-all duration-300">
                <iframe
                  src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0"
                  title="Umang Career Consultancy Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            <p className="mb-4 sm:mb-5">
              At Umang Career Consultancy, we believe choosing the right education and career path is an important decision. Our aim is to make the process of exploring study-abroad opportunities simple, transparent, and personalized for every student.
            </p>

            <p className="mb-4 sm:mb-5">
              We provide guidance to students who are planning to pursue their education in India or abroad. From understanding your career goals and selecting the right course to exploring suitable universities and preparing applications, our team is here to support you throughout your journey.
            </p>

            <p className="mb-4 sm:mb-5">
              At Umang Career Consultancy, we focus on understanding each student&apos;s academic background, interests, career aspirations, and individual requirements before recommending suitable options. We believe that the right guidance should be based on the student&apos;s profile rather than a one-size-fits-all approach.
            </p>

            <p className="mb-4 sm:mb-5">
              Our counselling support covers important aspects of the study-abroad journey, including career counselling, course selection, university selection, application assistance, documentation guidance, visa guidance, and pre-departure support.
            </p>

            <p className="mb-4 sm:mb-5">
              We also help students understand the requirements and processes involved in pursuing education overseas, so they can make informed decisions with greater confidence.
            </p>

            <div className="clear-both" />
          </div>

        </div>
      </section>

      {/* ================= 3RD SECTION: SERVICES PILLS & CONTACT CALLOUT ================= */}
      <section
        ref={pillsRef}
        className="w-full bg-[#f8fafc] py-12 sm:py-16 border-b border-slate-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 12 Services Pills (4 columns x 3 rows on desktop) with staggered cascade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {topTwelvePills.map((pill, idx) => (
              <div
                key={idx}
                style={{
                  transitionDelay: pillsInView ? `${idx * 40}ms` : "0ms",
                }}
                className={`w-full h-[54px] px-5 sm:px-6 rounded-full bg-[#0a1e38] hover:bg-[#123668] text-white flex items-center justify-center gap-3 shadow-sm hover:shadow-lg hover:shadow-[#0a1e38]/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none group transform ${
                  pillsInView
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
                }`}
              >
                <span className="text-white/90 group-hover:scale-115 group-hover:text-red-400 transition-all duration-300">
                  {pill.icon}
                </span>
                <span className="font-semibold text-xs sm:text-[13px] lg:text-sm tracking-wide truncate group-hover:text-white transition-colors duration-200">
                  {pill.title}
                </span>
              </div>
            ))}
          </div>

          {/* 13th Pill: Centered Education Loan */}
          <div className="flex justify-center mt-3.5 sm:mt-4">
            <div
              style={{
                transitionDelay: pillsInView ? "520ms" : "0ms",
              }}
              className={`h-[54px] px-8 rounded-full bg-[#0a1e38] hover:bg-[#123668] text-white inline-flex items-center justify-center gap-3 shadow-sm hover:shadow-lg hover:shadow-[#0a1e38]/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none group min-w-[240px] transform ${
                pillsInView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              }`}
            >
              <span className="text-white/90 group-hover:scale-115 group-hover:text-red-400 transition-all duration-300">
                {loanPill.icon}
              </span>
              <span className="font-semibold text-xs sm:text-[13px] lg:text-sm tracking-wide group-hover:text-white transition-colors duration-200">
                {loanPill.title}
              </span>
            </div>
          </div>

          {/* Direct Contact Callout Bar */}
          <div
            style={{
              transitionDelay: pillsInView ? "600ms" : "0ms",
            }}
            className={`mt-8 sm:mt-10 w-full bg-[#0a1e38] rounded-xl sm:rounded-2xl px-6 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg transition-all duration-700 ease-out transform ${
              pillsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Just contact us...
            </h3>

            <a
              href="tel:+919173186109"
              className="inline-flex items-center gap-2.5 bg-[#e52928] hover:bg-[#c91e1d] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg transition-all duration-200 shadow-md shadow-red-900/30 shrink-0 group hover:scale-[1.03] active:scale-95"
            >
              <svg
                className="w-4 h-4 fill-current transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>+91 9173186109</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
