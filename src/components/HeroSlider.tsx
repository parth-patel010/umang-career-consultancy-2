"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CmsImage from "@/components/CmsImage";
import { homepageContent, type HomepageContent } from "@/content/cmsDefaults";

export default function HeroSlider({ hero = homepageContent.hero }: { hero?: HomepageContent["hero"] }) {
  const slides = hero.slides;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Continuous infinite autoplay - loops forever 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 1 ...
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full max-w-full min-h-[780px] lg:min-h-[860px] h-[92vh] max-h-[960px] overflow-hidden overflow-x-hidden bg-gradient-to-r from-[#071f43] via-[#0b2b5c] to-[#0f3870] font-sans select-none">
      {/* Top Right Decorative Golden Curved Shape */}
      <div className="absolute top-0 right-0 w-[380px] md:w-[520px] lg:w-[680px] h-[380px] md:h-[520px] lg:h-[680px] pointer-events-none overflow-hidden z-0">
        <div className="w-full h-full bg-[#f59e0b] rounded-bl-[100%] opacity-90 transform translate-x-12 -translate-y-12 shadow-2xl" />
      </div>

      {/* World Map Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Slides Container */}
      <div className="relative w-full h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {slides.map((slide, idx) => {
          const isActive = currentSlide === idx;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10 pointer-events-auto"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                {/* Left Column: Text Content with fresh key to re-trigger Left-to-Right CSS animations */}
                <div
                  key={`text-${slide.id}-${isActive}`}
                  className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5 text-white pr-0 lg:pr-6 overflow-hidden"
                >
                  {/* Title: Smooth Slide Left to Right */}
                  <h1
                    className={`text-3xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.12] text-white tracking-tight ${
                      isActive ? "anim-slide-left-1" : "opacity-0"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle: Smooth Slide Left to Right (Staggered) */}
                  <div
                    className={`text-2xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.15] ${
                      isActive ? "anim-slide-left-2" : "opacity-0"
                    }`}
                  >
                    {slide.subtitle}
                  </div>

                  {/* Mini Title with Red Vertical Bar | : Smooth Slide Left to Right */}
                  <div
                    className={`flex items-center gap-3 pt-2 ${
                      isActive ? "anim-slide-left-3" : "opacity-0"
                    }`}
                  >
                    <span className="w-1 h-5 sm:h-6 bg-[#e52928] rounded-full inline-block shrink-0" />
                    <span className="text-white text-base sm:text-lg lg:text-xl font-medium tracking-wide">
                      {slide.miniTitle}
                    </span>
                  </div>

                  {/* Contact Now Button: Smooth Slide Up */}
                  <div
                    className={`pt-5 sm:pt-7 ${
                      isActive ? "anim-slide-up-btn" : "opacity-0"
                    }`}
                  >
                    <Link
                      href={hero.contactButtonHref}
                      className="inline-flex items-center gap-3.5 px-7 py-3.5 bg-[#e52928] hover:bg-[#c91e1d] text-white font-semibold rounded-full shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-200 transform hover:scale-105 group"
                    >
                      <span className="text-base sm:text-lg font-bold">{hero.contactButtonLabel}</span>
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#0f2e5a] shadow-sm transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
                        <svg className="w-3.5 h-3.5 fill-[#0f2e5a]" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Visual with Submerge Ken-Burns Zoom & Dissolve Animation */}
                <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center items-center">
                  <div className="relative w-full max-w-[460px] h-[380px] sm:h-[460px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-[#082247]/60">
                    <CmsImage
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 768px) 100vw, 460px"
                      className={`object-cover object-top transition-transform duration-[6000ms] ease-out ${
                        isActive ? "scale-108" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071f43]/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vertical Pagination Dots (1 to 6) On The Right Edge */}
      <div className="absolute right-3 sm:right-5 top-[44%] -translate-y-1/2 flex flex-col space-y-2.5 z-30">
        {slides.map((slide, idx) => {
          const isActive = currentSlide === idx;

          return (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 shadow-md ${
                isActive
                  ? "bg-white text-[#e52928] ring-2 ring-[#e52928] scale-110 shadow-red-500/40"
                  : "bg-white/90 text-slate-800 hover:bg-white hover:scale-105"
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
}
