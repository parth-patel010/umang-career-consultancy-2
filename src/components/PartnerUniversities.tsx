"use client";

import React, { useRef, useEffect, useState } from "react";
import CmsImage from "@/components/CmsImage";
import { homepageContent, type HomepageContent } from "@/content/cmsDefaults";

const partnerSizes: Record<string, { width: number; height: number }> = {
  constructor: { width: 140, height: 60 },
  "johns-hopkins": { width: 120, height: 70 },
  centennial: { width: 160, height: 60 },
  middlesex: { width: 135, height: 70 },
};

export default function PartnerUniversities({
  partners = homepageContent.partners,
}: {
  partners?: HomepageContent["partners"];
}) {
  const items = partners.items;
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

  // Duplicate logos multiple times for seamless, non-stop loop
  const sizedPartners = items.map((partner) => ({
    ...partner,
    ...(partnerSizes[partner.id] ?? { width: 140, height: 60 }),
  }));
  const repeatedPartners = [
    ...sizedPartners,
    ...sizedPartners,
    ...sizedPartners,
    ...sizedPartners,
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-16 sm:py-20 bg-white overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 mb-12 sm:mb-14 text-center">
        {/* Title with decorative lines: = Our Partner Universities = */}
        <div className="inline-flex items-center justify-center gap-3 sm:gap-4">
          <div className="flex flex-col gap-1 items-center">
            <span className="w-6 sm:w-8 h-[2px] bg-[#e52928] rounded-full inline-block" />
            <span className="w-4 sm:w-5 h-[2px] bg-[#0f2e5a] rounded-full inline-block" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e52928] tracking-tight">
            {partners.heading}
          </h2>

          <div className="flex flex-col gap-1 items-center">
            <span className="w-6 sm:w-8 h-[2px] bg-[#e52928] rounded-full inline-block" />
            <span className="w-4 sm:w-5 h-[2px] bg-[#0f2e5a] rounded-full inline-block" />
          </div>
        </div>
      </div>

      {/* Continuous Marquee Carousel with Fade Edges */}
      <div className="relative w-full overflow-hidden pause-on-hover py-4">
        {/* Left & Right Gradient Mask for sleek edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous Track */}
        <div className="animate-marquee-continuous flex items-center gap-12 sm:gap-16 lg:gap-20">
          {repeatedPartners.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="shrink-0 flex items-center justify-center px-4 py-3 cursor-pointer group/logo transition-all duration-300"
            >
              <div className="relative transform transition-all duration-300 ease-out group-hover/logo:scale-125 group-hover/logo:-translate-y-1">
                <CmsImage
                  src={partner.imageSrc}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="h-10 sm:h-12 w-auto object-contain opacity-80 group-hover/logo:opacity-100 transition-opacity duration-300 drop-shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
