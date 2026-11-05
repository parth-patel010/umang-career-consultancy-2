"use client";

import React, { useState, useEffect } from "react";
import { siteContent, type SiteContent } from "@/content/cmsDefaults";

export default function FloatingWidgets({ site = siteContent }: { site?: SiteContent }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    "Hello Umang Career Consultancy, I would like to inquire about study abroad and visa services."
  )}`;

  return (
    <aside
      aria-label="Floating Actions"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 select-none pointer-events-none"
    >
      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className={`pointer-events-auto w-12 h-12 rounded-full bg-[#0a1e38] text-white border-2 border-white/20 shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-[#e52928] hover:border-[#e52928] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e52928] cursor-pointer ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <svg
          className="w-5 h-5 fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Umang Career Consultancy on WhatsApp"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        {/* Subtle breathing radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>

        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#0a1e38] text-white text-xs font-semibold whitespace-nowrap shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
