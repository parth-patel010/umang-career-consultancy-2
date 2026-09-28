"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Destination {
  id: string;
  name: string;
  imageSrc: string;
  flagSrc: string;
  href: string;
}

const destinations: Destination[] = [
  {
    id: "europe",
    name: "Europe",
    imageSrc:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85",
    flagSrc: "https://flagcdn.com/w80/eu.png",
    href: "/study-abroad/europe",
  },
  {
    id: "new-zealand",
    name: "New-Zealand",
    imageSrc:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=900&q=85",
    flagSrc: "https://flagcdn.com/w80/nz.png",
    href: "/study-abroad/new-zealand",
  },
  {
    id: "canada",
    name: "Canada",
    imageSrc:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=85",
    flagSrc: "https://flagcdn.com/w80/ca.png",
    href: "/study-abroad/canada",
  },
  {
    id: "usa",
    name: "USA",
    imageSrc:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=900&q=85",
    flagSrc: "https://flagcdn.com/w80/us.png",
    href: "/study-abroad/usa",
  },
  {
    id: "uk",
    name: "UK",
    imageSrc:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85",
    flagSrc: "https://flagcdn.com/w80/gb.png",
    href: "/study-abroad/uk",
  },
  {
    id: "australia",
    name: "Australia",
    imageSrc:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=85",
    flagSrc: "https://flagcdn.com/w80/au.png",
    href: "/study-abroad/australia",
  },
];

export default function DestinationCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Trigger smooth scroll slide-up animation when cards come into view
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

  // Calculate slide offset dynamically based on actual rendered card distance
  useEffect(() => {
    const updateOffset = () => {
      if (!trackRef.current) return;
      const cards = trackRef.current.children;
      if (cards.length < 2) return;
      const firstCard = cards[0] as HTMLElement;
      const secondCard = cards[1] as HTMLElement;
      // Exact step distance from start of one card to start of next card
      const step = secondCard.offsetLeft - firstCard.offsetLeft;
      setOffset(currentIndex * step);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [currentIndex]);

  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = destinations.length - 3; // 6 cards, 3 visible on desktop

  // Auto-slide destinations every 3.5s, paused on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-30 w-full max-w-[1500px] mx-auto px-12 sm:px-16 lg:px-24 -mt-16 sm:-mt-20 md:-mt-22 pb-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative">
        {/* Transparent Circular Left Button with Red Border & Red Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Destinations"
          className={`absolute -left-6 sm:-left-9 lg:-left-14 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-full bg-white/95 hover:bg-red-50 border-2 border-[#e52928] text-[#e52928] shadow-xl flex items-center justify-center transition-all duration-700 ease-out transform z-40 focus:outline-none cursor-pointer ${
            isVisible
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-75 pointer-events-none"
          }`}
          style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        {/* Transparent Circular Right Button with Red Border & Red Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Destinations"
          className={`absolute -right-6 sm:-right-9 lg:-right-14 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-full bg-white/95 hover:bg-red-50 border-2 border-[#e52928] text-[#e52928] shadow-xl flex items-center justify-center transition-all duration-700 ease-out transform z-40 focus:outline-none cursor-pointer ${
            isVisible
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-75 pointer-events-none"
          }`}
          style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden py-3 px-1">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {destinations.map((dest, idx) => (
              <Link
                key={dest.id}
                href={dest.href}
                className={`shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] p-3 sm:p-3.5 pb-4 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform hover:-translate-y-2 group block ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-14"
                }`}
                style={{
                  transitionDelay: isVisible ? `${idx * 120 + 80}ms` : "0ms",
                }}
              >
                {/* Wrapper for image + flag without overflow-hidden so flag never gets cut off */}
                <div className="relative w-full">
                  {/* Image Container with rounded corners and overflow-hidden */}
                  <div className="relative aspect-[1/1] w-full rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={dest.imageSrc}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Country Flag Badge: Outside image overflow-hidden so it freely overlaps boundaries */}
                  <div className="absolute -bottom-3 right-3 w-16 h-10 sm:w-18 sm:h-11 rounded-lg shadow-lg border-[3px] border-white overflow-hidden z-20 bg-white">
                    <Image
                      src={dest.flagSrc}
                      alt={`${dest.name} Flag`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Destination Title: Navy by default, turns Red on hover */}
                <div className="pt-4 px-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0f2e5a] group-hover:text-[#e52928] transition-colors duration-200">
                    {dest.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
