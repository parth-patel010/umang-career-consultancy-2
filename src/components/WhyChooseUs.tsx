"use client";

import React, { useRef, useEffect, useState } from "react";
import { homepageContent, type HomepageContent } from "@/content/cmsDefaults";

export default function WhyChooseUs({
  whyChoose = homepageContent.whyChoose,
}: {
  whyChoose?: HomepageContent["whyChoose"];
}) {
  const whyChoosePoints = whyChoose.points;
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
            {whyChoose.headingLead}{" "}
            <span className="text-[#f5a623]">{whyChoose.headingAccent}</span>
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
