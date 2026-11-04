"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { homepageContent, type HomepageContent } from "@/content/cmsDefaults";

/* Icons for the 4 Key Differentiators */
function TransparencyIcon() {
  return (
    <svg className="w-8 h-8 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function GlobalExpertiseIcon() {
  return (
    <svg className="w-8 h-8 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function EndToEndIcon() {
  return (
    <svg className="w-8 h-8 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function LogisticsIcon() {
  return (
    <svg className="w-8 h-8 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4" />
    </svg>
  );
}

const ICONS_MAP: { [key: string]: React.ReactNode } = {
  "crystal-clear-transparency": <TransparencyIcon />,
  "founders-global-expertise": <GlobalExpertiseIcon />,
  "true-end-to-end": <EndToEndIcon />,
  "premium-client-logistics": <LogisticsIcon />,
};

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
      className="relative w-full py-16 sm:py-24 bg-[#0a1e38] text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        
        {/* Header: Why Choose Umang Career Consultancy */}
        <div
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-red-300 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#e52928] animate-ping" />
            Homepage Content • Why Choose Us
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight">
            Why Choose{" "}
            <span className="text-[#f5a623]">Umang Career Consultancy?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Since 2020, we have helped thousands of students, professionals, and families navigate the complexities of international visas and global travel. We don&apos;t just process applications—we build pathways to your success with complete peace of mind.
          </p>

          <div className="mt-5 inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 border-b border-emerald-400/40 pb-1">
            Here is what sets us apart:
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChoosePoints.map((item, idx) => {
            const icon = ICONS_MAP[item.id] || <TransparencyIcon />;

            return (
              <div
                key={item.id}
                className={`bg-white/5 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-[#f5a623]/60 hover:bg-white/10 transition-all duration-500 ease-out flex flex-col justify-between group transform hover:-translate-y-2 shadow-xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${idx * 100 + 150}ms` : "0ms",
                }}
              >
                <div>
                  {/* Top: Icon & Counter */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#f5a623]/20 transition-all duration-300">
                      {icon}
                    </div>
                    <span className="text-2xl font-black text-white/20 group-hover:text-[#f5a623]/60 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#f5a623] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Umang Advantage</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotional Brand Slogans Banner */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <span className="block text-xs font-medium text-slate-300">Clear Truth.</span>
            <span className="block text-sm font-bold text-[#f5a623]">Confident Journeys.</span>
          </div>
          <div className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <span className="block text-xs font-medium text-slate-300">Real Dreams.</span>
            <span className="block text-sm font-bold text-[#f5a623]">Zero Stress.</span>
          </div>
          <div className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <span className="block text-xs font-medium text-slate-300">Honest Guidance.</span>
            <span className="block text-sm font-bold text-[#f5a623]">Approved Futures.</span>
          </div>
          <div className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <span className="block text-xs font-medium text-slate-300">Your Global Journey,</span>
            <span className="block text-sm font-bold text-[#f5a623]">Simplified.</span>
          </div>
        </div>

        {/* Bottom Trust Action Strip */}
        <div
          className={`mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f5a623]">
              Personalized Evaluation
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Ready to experience true, transparent guidance?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Talk directly with Founder Sudip Parikh or our senior visa counselors in Vadodara.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+919173186109"
              className="px-6 py-3.5 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm tracking-wide shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Call +91 91731 86109</span>
            </a>

            <Link
              href="/contact-us"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0a1e38] font-bold text-sm tracking-wide shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              <span>Visit Vadodara Office</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
