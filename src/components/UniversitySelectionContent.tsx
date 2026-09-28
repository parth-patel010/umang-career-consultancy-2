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

export default function UniversitySelectionContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [whatInView, setWhatInView] = useState(false);
  const [evaluateInView, setEvaluateInView] = useState(false);
  const [understandInView, setUnderstandInView] = useState(false);
  const [approachInView, setApproachInView] = useState(false);
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
  const evaluateRef = useRef<HTMLDivElement>(null);
  const understandRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
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

    const evaluateObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setEvaluateInView(true);
    }, observerOptions);

    const understandObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setUnderstandInView(true);
    }, observerOptions);

    const approachObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setApproachInView(true);
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
    if (evaluateRef.current) evaluateObserver.observe(evaluateRef.current);
    if (understandRef.current) understandObserver.observe(understandRef.current);
    if (approachRef.current) approachObserver.observe(approachRef.current);
    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current);
    if (faqRef.current) faqObserver.observe(faqRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    if (bookRef.current) bookObserver.observe(bookRef.current);

    return () => {
      clearTimeout(timer);
      whatObserver.disconnect();
      evaluateObserver.disconnect();
      understandObserver.disconnect();
      approachObserver.disconnect();
      testimonialsObserver.disconnect();
      faqObserver.disconnect();
      ctaObserver.disconnect();
      bookObserver.disconnect();
    };
  }, []);

  // 1. How Do We Evaluate a University (8 Cards - Shuffled and distinct)
  const evaluateData = [
    {
      title: "University Portals & Websites",
      description: "Reviewing official course catalogs, admission criteria, academic prerequisites, and institutional guidelines.",
      icon: (
        <svg className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: "Authorized University Delegates",
      description: "Direct liaison with designated university representatives for authentic, up-to-the-minute admission updates.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Campus Facilities & Living Standards",
      description: "Evaluating on-campus accommodation, high-tech research labs, libraries, athletic centers, and safety.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Global Education Expos & Fairs",
      description: "Direct interaction opportunities with admissions officers for instant profile appraisal and spot assessments.",
      icon: (
        <svg className="w-8 h-8 text-amber-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      title: "Alumni Success & Network Insights",
      description: "Gathering insights from past graduates on employability, post-study work permits, and career development.",
      icon: (
        <svg className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      title: "Student Testimonials & Campus Vlogs",
      description: "Understanding everyday international student experiences, culture, and faculty mentorship from real reviews.",
      icon: (
        <svg className="w-8 h-8 text-rose-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Interactive Webinars & Open Houses",
      description: "Participating in virtual department walkthroughs, live Q&A sessions, and faculty introductory briefings.",
      icon: (
        <svg className="w-8 h-8 text-cyan-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Credible Rankings & Audit Reports",
      description: "Benchmarking subject-specific excellence, QS/Times Higher Education rankings, and research funding metrics.",
      icon: (
        <svg className="w-8 h-8 text-teal-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  // 2. Through Us, Understand a University's... (12 Items in Navy section)
  const understandAttributes = [
    {
      title: "National & Global Rankings",
      desc: "Accurate evaluation of world university rankings and subject-specific reputation.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Accreditation & Recognition",
      desc: "Confirming degree validity, global equivalency, and professional licensing boards.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Programs & Specializations",
      desc: "Comprehensive review of curriculum, credit hours, electives, and practical modules.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Strategic Campus Location",
      desc: "City demographics, cost of living, regional job markets, and public transit.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Tuition Fees & Financial Aid",
      desc: "Transparent breakdown of per-semester fees, merit scholarships, and grant opportunities.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
    },
    {
      title: "Campus Infrastructure",
      desc: "Advanced laboratories, digital libraries, study spaces, and athletic complexes.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Amenities & Resources",
      desc: "Student dining, university housing, on-campus healthcare, and recreation.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Vibrant Student Life",
      desc: "Student unions, cultural groups, sports clubs, international associations, and events.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Career & Placement Services",
      desc: "University internship cells, corporate tie-ups, resume workshops, and career fairs.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Alumni Network & Reach",
      desc: "Connections with thriving graduates working across multinational corporations worldwide.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "International Student Support",
      desc: "Dedicated international student advisors, visa compliance guidance, and arrival reception.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Admission Requirements & Deadlines",
      desc: "Exact GPA thresholds, English language scores (IELTS/TOEFL/PTE), and intake schedules.",
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  // 3. Our University Selection Approach (4 Steps with big numbers)
  const approachSteps = [
    {
      num: "01",
      title: "Understand Your Profile",
      description: "We conduct an in-depth review of your academic achievements, career aspirations, financial budget, and lifestyle preferences.",
    },
    {
      num: "02",
      title: "Explore Suitable Options",
      description: "We filter through hundreds of accredited universities to curate an elite shortlist perfectly suited to your eligibility.",
    },
    {
      num: "03",
      title: "Compare Your Choices",
      description: "We evaluate side-by-side distinctions between tuition fees, living costs, post-study work regulations, and global rankings.",
    },
    {
      num: "04",
      title: "Make an Informed Decision",
      description: "With expert unbiased advice, you confidently select your dream institution and proceed seamlessly to admissions.",
    },
  ];

  // 4. Testimonials
  const testimonials = [
    {
      name: "Subh Patel",
      location: "Algoma University, Canada",
      text: "After completing my 12th grade, I was unsure which college to choose for Psychology. Umang Career Consultancy helped me evaluate top options based on my career goals and budget. They recommended Algoma University in Canada, which perfectly matched my aspirations. The entire process was seamless and stress-free!",
    },
    {
      name: "Vraj Shah",
      location: "MBBS / Healthcare Pathway",
      text: "Searching for the right university to pursue clinical studies was overwhelming. Umang Career Consultancy helped me narrow down excellent institutions aligned with my career roadmap. Their detailed information on accreditations, clinical rotations, and post-study opportunities gave me unmatched clarity!",
    },
  ];

  // 5. Frequently Asked Questions (7 FAQs requested by user)
  const faqs = [
    {
      q: "How do you choose the right university for me?",
      a: "We perform a personalized evaluation of your academic grades, preferred course, target countries, budget, scholarship eligibility, and long-term career goals to shortlist universities where your profile has the highest rate of admission and success.",
    },
    {
      q: "How many universities will you recommend?",
      a: "Rather than giving a random fixed list, we provide a strategic mix categorized into Dream, Target, and Safe institutions (typically 4 to 8 universities) to maximize your chances of acceptance and financial aid.",
    },
    {
      q: "Do you help with the application process?",
      a: "Yes! Once you finalize your university selections, our team assists you with preparing error-free applications, drafting compelling SOPs and LORs, verifying transcripts, and meeting official deadlines.",
    },
    {
      q: "Can you help with universities in different countries?",
      a: "Absolutely. Umang Career Consultancy represents and works with prestigious universities across the USA, UK, Canada, Australia, New Zealand, Germany, and Europe.",
    },
    {
      q: "Are there additional costs for university selection?",
      a: "No hidden charges! Our consultancy operates with complete transparency. Any applicable service details are communicated and agreed upon clearly upfront.",
    },
    {
      q: "What if I change my university preference?",
      a: "You can discuss your updated preferences with our senior counsellors at any time. We will promptly re-evaluate your profile and update your university shortlist accordingly.",
    },
    {
      q: "Can I get guidance before choosing a university?",
      a: "Yes, definitely. In fact, we strongly recommend booking a preliminary one-on-one counselling session to understand prerequisites, costs, and career prospects before making any final commitment.",
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
                Strategic Global University Matching
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight uppercase leading-[1.1]">
                University <span className="text-[#0a1e38]">Selection</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Finding the right university shapes your entire global career. We help you evaluate, compare, and gain admission to world-class institutions matching your exact academic potential, budget, and ambitions.
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
                  href="#book-selection"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0a1e38] hover:bg-[#112a4c] text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Talk to Counsellors</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Hero Image (Circular graphic with dashed border & badges) */}
            <div
              className={`lg:col-span-6 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] aspect-square flex items-center justify-center anim-gentle-float">
                <Image
                  src="/university-selection-hero.png"
                  alt="University Selection - Umang Career Consultancy"
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

      {/* ================= 2. WHAT IS UNIVERSITY SELECTION ================= */}
      <section ref={whatRef} className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What is University Selection" inView={whatInView} />

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ease-out transform ${
              whatInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-700 text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
                University selection is an important step in planning your education journey. At <strong className="font-semibold text-[#0a1e38]">Umang Career Consultancy</strong>, we help students explore and compare universities based on their academic profile, career goals, preferred course, budget, location, and other individual requirements. Our guidance helps simplify the process and allows students to make informed decisions about where to study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. HOW DO WE EVALUATE A UNIVERSITY? ================= */}
      <section ref={evaluateRef} className="w-full py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How Do We Evaluate a University?"
            subtitle="We help students understand important information about universities through available and reliable sources, including:"
            inView={evaluateInView}
          />

          {/* 8 Clean Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {evaluateData.map((item, idx) => {
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
                    evaluateInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-95"
                  }`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-red-50 transition-colors duration-300 border border-slate-100 shadow-sm">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1e38] mb-2.5 group-hover:text-[#e52928] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. THROUGH US, UNDERSTAND A UNIVERSITY'S... (NAVY SECTION) ================= */}
      <section
        ref={understandRef}
        className="w-full py-16 sm:py-24 bg-[#0a1e38] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none anim-pulse-border" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none anim-pulse-border" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Through Us, Understand a University's"
            variant="dark"
            inView={understandInView}
          />

          {/* 3-Column Attributes Grid with Vibrant Green Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {understandAttributes.map((attr, idx) => {
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
                "delay-600",
                "delay-650",
              ];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#22c55e]/40 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm group transform hover:-translate-y-1.5 ${delayClass} ${
                    understandInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#22c55e]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-300">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {attr.icon}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#22c55e] transition-colors">
                      {attr.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {attr.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. OUR UNIVERSITY SELECTION APPROACH ================= */}
      <section ref={approachRef} className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our University Selection Approach"
            subtitle="A systematic, unbiased methodology ensuring you choose the best university"
            inView={approachInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12">
            {approachSteps.map((step, idx) => {
              const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`flex items-start gap-5 p-6 rounded-2xl bg-[#f8fafc] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-700 ease-out transform group ${delayClass} ${
                    approachInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-[0.97]"
                  }`}
                >
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 font-mono select-none drop-shadow-sm">
                      {step.num}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-xl font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 6. SEE WHAT PEOPLE ARE SAYING (TESTIMONIALS) ================= */}
      <section ref={testimonialsRef} className="w-full py-16 sm:py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="See What People Are Saying" inView={testimonialsInView} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testi, idx) => {
              const delayClass = idx === 0 ? "delay-100" : "delay-250";

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-7 sm:p-8 shadow-md hover:shadow-xl transition-all duration-700 ease-out border border-slate-100 flex flex-col justify-between group transform hover:-translate-y-1.5 ${delayClass} ${
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

                    <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed italic">
                      "{testi.text}"
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors">
                        {testi.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-slate-500">
                        {testi.location}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#e52928] font-bold text-sm">
                      {testi.name.charAt(0)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 7. FREQUENTLY ASKED QUESTIONS (FAQS) ================= */}
      <section ref={faqRef} className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions (FAQs)"
            subtitle="Get Answers to Your Questions"
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

            {/* Column 2 - 3 FAQs */}
            <div
              className={`space-y-4 transition-all duration-700 delay-150 ease-out transform ${
                faqInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {faqs.slice(4, 7).map((faq, idx) => {
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

      {/* ================= 8. CALL TO ACTION BAR ================= */}
      <section ref={ctaRef} className="w-full py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-[#0a1e38] rounded-2xl p-6 sm:p-9 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 ease-out transform ${
              ctaInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
            }`}
          >
            <h3 className="text-white text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-center md:text-left">
              Choose Your University With Confidence, Call On...
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

      {/* ================= 9. BOOK A COUNSELLING SESSION FORM ================= */}
      <section
        id="book-selection"
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
              Talk to Our Counsellors
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Explore your options, compare suitable universities, and take the next step towards your education goals.
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
                alert("Thank you for reaching out! Our team at Umang Career Consultancy will contact you shortly.");
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
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Study Destination</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm bg-white transition-all"
                  >
                    <option value="any">Select Destination (All Countries)</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="australia">Australia</option>
                    <option value="europe">Europe / Germany</option>
                    <option value="other">Other Global Destinations</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Target Degree & Field of Interest (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Master's in Computer Science, Bachelor of Business, Healthcare..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#e52928] focus:ring-1 focus:ring-[#e52928] text-slate-800 text-sm transition-all"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#e52928] hover:bg-[#c92017] text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  Book a Counselling Session
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
