"use client";

import React, { useRef, useEffect, useState } from "react";

interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
}

const whyChoosePoints: WhyChooseItem[] = [
  {
    id: "student-focused",
    title: "Student-Focused Guidance",
    description:
      "We understand that every student's academic background and career goal is different.",
  },
  {
    id: "personalized-counselling",
    title: "Personalized Counselling",
    description:
      "Our guidance is tailored to your profile, preferences, and future plans.",
  },
  {
    id: "transparent-process",
    title: "Transparent Process",
    description:
      "We believe in providing clear information about courses, institutions, applications, and associated processes.",
  },
  {
    id: "end-to-end",
    title: "End-to-End Assistance",
    description:
      "From the first counselling session to your study-abroad journey, we are here to guide you at every important step.",
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    description:
      "Get assistance whenever you need guidance throughout your application journey.",
  },
  {
    id: "career-oriented",
    title: "Career-Oriented Approach",
    description:
      "We focus not only on studying abroad but also on helping students make decisions aligned with their long-term career goals.",
  },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 bg-[#0f2e5a] text-white overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header: Why Choose Umang Career Consultancy */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            Why Choose{" "}
            <span className="text-[#f5a623]">Umang Career Consultancy</span>
          </h2>
        </div>

        {/* 6 Clean Columns matching the exact reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 text-center">
          {whyChoosePoints.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col items-center group transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${idx * 80 + 100}ms` : "0ms",
              }}
            >
              {/* Title in Bright Yellow/Gold matching 22+, 12+, 500+ */}
              <h3 className="text-lg sm:text-xl font-bold text-[#f5a623] mb-3 leading-snug group-hover:scale-105 transition-transform duration-200 min-h-[52px] flex items-center justify-center">
                {item.title}
              </h3>

              {/* Description in Clean Off-White */}
              <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
