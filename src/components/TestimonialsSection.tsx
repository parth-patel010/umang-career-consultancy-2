"use client";

import React, { useState, useEffect, useRef } from "react";
import CmsImage from "@/components/CmsImage";
import { homepageContent, type HomepageContent } from "@/content/cmsDefaults";

export default function TestimonialsSection({
  testimonials = homepageContent.testimonials,
}: {
  testimonials?: HomepageContent["testimonials"];
}) {
  const items = testimonials.items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll entrance observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials every 5s, paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const current = items[currentIndex];
  const posters = testimonials.posters;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#0a1e38] text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Skyline Silhouette */}
      <div
        className="absolute inset-0 opacity-10 bg-center bg-cover bg-no-repeat pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: `url('/why-choose-bg.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e38]/80 via-transparent to-[#0a1e38]/90 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 z-10">
        
        {/* Top Header matching reference */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          {/* Subtitle with accent lines: — UMANG CAREER CONSULTANCY — */}
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-6 sm:w-8 h-[2px] bg-[#e52928] rounded-full inline-block" />
            <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase">
              {testimonials.eyebrow}
            </span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#e52928] rounded-full inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight">
            {testimonials.heading}
          </h2>
        </div>

        {/* 2-Column Content Grid: Illustration + Testimonial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-24">
          
          {/* Left Column: 3D Illustration of Achievers holding Thumbs up & Stars */}
          <div
            className={`lg:col-span-6 flex justify-center items-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="relative w-full max-w-[580px]">
              <CmsImage
                src={testimonials.imageSrc}
                alt={testimonials.imageAlt}
                width={640}
                height={427}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Testimonial Card with Prev/Next Controls */}
          <div
            className={`lg:col-span-6 flex flex-col items-center lg:items-start transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            {/* Glassmorphic Testimonial Card with FIXED CONSTANT HEIGHT so it never jumps or resizes */}
            <div className="relative w-full max-w-[580px] h-[280px] sm:h-[250px] bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-hidden">
              
              <div className="transition-all duration-500 ease-out">
                {/* Reviewer Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {current.name}
                </h3>

                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1.5 mb-4 text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text with fixed height clamp */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light line-clamp-4">
                  {current.review}
                </p>
              </div>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-6 bg-[#e52928]"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* Bottom Circular Red Arrow Buttons matching reference */}
            <div className="flex items-center gap-4 mt-6">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e52928] hover:bg-[#c91e1d] text-white flex items-center justify-center shadow-lg shadow-red-600/30 transition-all duration-200 transform hover:scale-110 active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e52928] hover:bg-[#c91e1d] text-white flex items-center justify-center shadow-lg shadow-red-600/30 transition-all duration-200 transform hover:scale-110 active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>

          </div>

        </div>

        {/* ================= Achiever Posters Slider ================= */}
        {/* ================= Achiever Posters ================= */}
        <div
          className={`relative transition-all duration-1000 ease-out pt-10 border-t border-white/10 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Header row for posters */}
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Visa Approval Highlights
            </h3>
            <p className="text-sm text-gray-300 font-light mt-1.5">
              {testimonials.posterCaption}
            </p>
          </div>

          {/* Exactly 2 Posters Centered with Compact Sizing */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 max-w-[760px] mx-auto">
            {posters.map((poster) => (
              <div
                key={poster.id}
                className="w-full sm:w-[320px] max-w-[340px] group transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/15 shadow-[0_16px_36px_rgba(0,0,0,0.35)] group-hover:border-[#e52928]/50 group-hover:shadow-[0_20px_45px_rgba(229,41,40,0.25)] transition-all duration-300">
                  <div className="relative aspect-[3/4] w-full">
                    <CmsImage
                      src={poster.imageSrc}
                      alt={poster.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 340px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
