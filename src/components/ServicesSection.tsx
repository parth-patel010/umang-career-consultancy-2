"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { homepageContent, type HomepageContent } from "@/content/cmsDefaults";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const defaultServices: ServiceItem[] = [
  {
    id: "career-counseling",
    title: "Career Counseling",
    description:
      "Personalized mentorship to discover your strengths, align your academic ambitions, and set long-term global career milestones.",
    href: "/services/career-counseling",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
      </svg>
    ),
  },
  {
    id: "university-selection",
    title: "University Selection",
    description:
      "Shortlist best-fit universities and globally accredited programs tailored precisely to your background and budget.",
    href: "/services/university-selection",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2L2 7v3h20V7L12 2zm-8 7V7.82l8-4 8 4V9H4zm1 3v7h3v-7H5zm5 0v7h4v-7h-4zm6 0v7h3v-7h-3zM2 20v2h20v-2H2z" />
      </svg>
    ),
  },
  {
    id: "visa-document",
    title: "Visa Documentation",
    description:
      "Thorough guidance on drafting airtight visa files, financial affidavits, and compliance paperwork for maximum approval odds.",
    href: "/services/visa-documentation",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    id: "student-visa",
    title: "Student Visa",
    description:
      "End-to-end filing support, mock embassy interview sessions, and up-to-date immigration compliance for overseas education.",
    href: "/services/student-visa",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M4 4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2H4zm8 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 11H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" />
      </svg>
    ),
  },
  {
    id: "sop-resume",
    title: "SOP & Resume Preparation",
    description:
      "Craft compelling Statements of Purpose, impactful CVs, and strong letters of recommendation that captivate admissions boards.",
    href: "/services/sop-resume-preparation",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    id: "spouse-visa",
    title: "Spouse Visa",
    description:
      "Streamlined dependent visa applications and spouse open work permit solutions to keep your family together overseas.",
    href: "/services/spouse-visa",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    id: "visitor-visa",
    title: "Visitor Visa",
    description:
      "Reliable tourist, business, and family visitation visa facilitation with structured itineraries and sponsorship documentation.",
    href: "/services/visitor-visa",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
  },
  {
    id: "pr-immigration",
    title: "PR & Immigration",
    description:
      "Strategic pathway consulting for points assessments, state nominations, and permanent residency transitions post study.",
    href: "/services/pr-immigration",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    id: "forex-services",
    title: "Forex Services",
    description:
      "Competitive currency exchange rates, secure GIC accounts, swift international tuition remittances, and student travel cards.",
    href: "/services/forex-services",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
  },
  {
    id: "air-ticket",
    title: "Air Ticket & Travel Insurance",
    description:
      "Exclusive student flight baggage allowances, pocket-friendly airfares, and comprehensive international health cover.",
    href: "/services/air-ticket-travel-insurance",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.5c-1.25.78-2 2.17-2 3.5s.75 2.72 2 3.5V18H4v-2.5c1.25-.78 2-2.17 2-3.5s-.75-2.72-2-3.5V6h16v2.5zM9.5 8h5v2h-5zm0 3h5v2h-5zm0 3h5v2h-5z" />
      </svg>
    ),
  },
  {
    id: "pre-departure",
    title: "Pre – Departure Guidance",
    description:
      "Essential pre-flight orientations, accommodation booking assistance, packing checklists, and local networking connections.",
    href: "/services/pre-departure-guidance",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    id: "education-loan",
    title: "Education Loan Support",
    description:
      "Fast-track collateral and non-collateral overseas education loans with leading public, private, and NBFC banking partners.",
    href: "/services/education-loan",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
  },
];

// Sub-component for each row of 3 cards with its own scroll-trigger observer
function ServiceRow({
  rowItems,
  startIndex,
}: {
  rowItems: ServiceItem[];
  startIndex: number;
}) {
  const [isRowVisible, setIsRowVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRowVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {rowItems.map((item, colIdx) => (
        <Link
          key={item.id}
          href={item.href}
          className={`group bg-white rounded-xl p-8 sm:p-9 text-center shadow-lg hover:shadow-2xl transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform hover:-translate-y-2 flex flex-col items-center justify-between border border-transparent hover:border-red-100 ${
            isRowVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
          style={{
            transitionDelay: isRowVisible ? `${colIdx * 120}ms` : "0ms",
          }}
        >
          {/* Icon Container with 3D Flip on hover */}
          <div className="perspective-500 mb-5">
            <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center text-[#e52928] transition-transform duration-300">
              <item.icon className="w-12 h-12 sm:w-14 sm:h-14 flip-icon-hover" />
            </div>
          </div>

          {/* Title: Deep Navy, Red on Hover */}
          <h3 className="text-xl sm:text-[22px] font-bold text-[#0f2e5a] group-hover:text-[#e52928] transition-colors duration-200 mb-3.5 tracking-tight">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default function ServicesSection({
  heading = homepageContent.services.heading,
  items = homepageContent.services.items,
}: {
  heading?: string;
  items?: HomepageContent["services"]["items"];
}) {
  const services: ServiceItem[] = items.map((item) => {
    const match = defaultServices.find((service) => service.id === item.id) ?? defaultServices[0];
    return { ...match, ...item, icon: match.icon };
  });
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split services into 4 rows of 3 items each
  const rows: ServiceItem[][] = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <section className="relative w-full py-20 sm:py-24 bg-[#0a1e38] text-white overflow-hidden">
      {/* Background subtle city skyline watermark pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div
          ref={headerRef}
          className={`text-center mb-14 sm:mb-16 transition-all duration-700 ease-out ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
            {heading}
          </h2>
          <div className="w-20 h-1 bg-[#e52928] mx-auto mt-4 rounded-full" />
        </div>

        {/* Row by row animated grid */}
        <div className="space-y-6 sm:space-y-8">
          {rows.map((row, rowIdx) => (
            <ServiceRow
              key={rowIdx}
              rowItems={row}
              startIndex={rowIdx * 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
