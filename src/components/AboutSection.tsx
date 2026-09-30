"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import CmsImage from "@/components/CmsImage";
import { homepageContent, type HomepageContent } from "@/content/cmsDefaults";

export default function AboutSection({ about = homepageContent.about }: { about?: HomepageContent["about"] }) {
  const features = about.features;
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-slate-50/40 to-red-50/20 overflow-hidden"
    >
      {/* Background subtle geometric watermark */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.035] pointer-events-none select-none bg-[radial-gradient(#e52928_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Counseling Illustration - Slides in from LEFT */}
          <div
            className={`lg:col-span-6 flex justify-center items-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-24 sm:-translate-x-32"
            }`}
          >
            <div className="relative w-full max-w-[620px]">
              {/* Main Visual */}
              <div className="relative p-2">
                <CmsImage
                  src={about.imageSrc}
                  alt={about.imageAlt}
                  width={640}
                  height={427}
                  priority
                  className="w-full h-auto object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Feature Points, Button - Slides in from RIGHT */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-24 sm:translate-x-32"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {/* Red Bold Main Title - Slides from right */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#e52928] tracking-tight uppercase mb-6 sm:mb-8 leading-tight">
              {about.heading}
            </h2>

            {/* Checklist items with red checkmarks - Staggered slide from right */}
            <div className="space-y-4 sm:space-y-4.5 mb-8 sm:mb-10">
              {features.map((point, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 sm:gap-4 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-12"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${idx * 80 + 250}ms` : "0ms",
                  }}
                >
                  {/* Clean Red Checkmark Icon */}
                  <span className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center text-[#e52928]">
                    <svg
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>

                  {/* Feature Text */}
                  <span className="text-[#1a2e4c] font-medium text-base sm:text-lg leading-snug">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Red About Us Button - Slides UP */}
            <div
              className={`transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? "750ms" : "0ms" }}
            >
              <Link
                href={about.buttonHref}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#e52928] hover:bg-[#c91e1d] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-200 transform hover:scale-105 group"
              >
                <span>{about.buttonLabel}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-black text-xl">
                  »
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
