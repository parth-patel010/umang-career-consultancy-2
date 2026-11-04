"use client";

import React from "react";

export interface VibrantCountryFlagProps {
  country: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "badge" | "circle" | "shield" | "card";
}

export default function VibrantCountryFlag({
  country,
  size = "md",
  className = "",
  variant = "badge",
}: VibrantCountryFlagProps) {
  const c = country.toLowerCase().trim();

  // Size definitions
  const sizeMap = {
    sm: "w-7 h-5",
    md: "w-10 h-7",
    lg: "w-14 h-10",
    xl: "w-20 h-14",
  };

  const circleSizeMap = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  // Flag Vector Render
  const renderFlagContent = () => {
    switch (c) {
      case "usa":
      case "united states":
      case "us":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="42" fill="#b22234" />
            <path d="M0,6.46h60 M0,12.92h60 M0,19.38h60 M0,25.84h60 M0,32.3h60 M0,38.76h60" stroke="#ffffff" strokeWidth="3.23" />
            <rect width="26" height="22.61" fill="#1b2a4a" />
            {/* Stars */}
            <circle cx="5" cy="4" r="1.2" fill="#ffffff" />
            <circle cx="13" cy="4" r="1.2" fill="#ffffff" />
            <circle cx="21" cy="4" r="1.2" fill="#ffffff" />
            <circle cx="9" cy="8" r="1.2" fill="#ffffff" />
            <circle cx="17" cy="8" r="1.2" fill="#ffffff" />
            <circle cx="5" cy="12" r="1.2" fill="#ffffff" />
            <circle cx="13" cy="12" r="1.2" fill="#ffffff" />
            <circle cx="21" cy="12" r="1.2" fill="#ffffff" />
            <circle cx="9" cy="16" r="1.2" fill="#ffffff" />
            <circle cx="17" cy="16" r="1.2" fill="#ffffff" />
          </svg>
        );

      case "uk":
      case "united kingdom":
      case "britain":
      case "london":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <clipPath id="uk-flag-clip">
              <rect width="60" height="42" />
            </clipPath>
            <g clipPath="url(#uk-flag-clip)">
              <rect width="60" height="42" fill="#012169" />
              <path d="M0 0L60 42M60 0L0 42" stroke="#ffffff" strokeWidth="8" />
              <path d="M0 0L60 42M60 0L0 42" stroke="#e52928" strokeWidth="4" />
              <path d="M30 0v42M0 21h60" stroke="#ffffff" strokeWidth="12" />
              <path d="M30 0v42M0 21h60" stroke="#e52928" strokeWidth="7" />
            </g>
          </svg>
        );

      case "canada":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="15" height="42" fill="#d80027" />
            <rect x="15" width="30" height="42" fill="#ffffff" />
            <rect x="45" width="15" height="42" fill="#d80027" />
            {/* Canadian Maple Leaf */}
            <path
              d="M30 9l1.8 4.2 3.8-1.5-1 3.5 4.5 1-3.5 2.5 1.8 3.5-4.2-1.5-.9 5-3-5-4.2 1.5 1.8-3.5-3.5-2.5 4.5-1-1-3.5 3.8 1.5z"
              fill="#d80027"
            />
          </svg>
        );

      case "australia":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="42" fill="#00008b" />
            {/* Canton */}
            <rect width="30" height="21" fill="#012169" />
            <path d="M0 0L30 21M30 0L0 21" stroke="#ffffff" strokeWidth="4" />
            <path d="M0 0L30 21M30 0L0 21" stroke="#e52928" strokeWidth="2" />
            <path d="M15 0v21M0 10.5h30" stroke="#ffffff" strokeWidth="6" />
            <path d="M15 0v21M0 10.5h30" stroke="#e52928" strokeWidth="3.5" />
            {/* Commonwealth Star */}
            <circle cx="15" cy="31.5" r="3.2" fill="#ffffff" />
            {/* Southern Cross */}
            <circle cx="45" cy="9" r="1.6" fill="#ffffff" />
            <circle cx="51.5" cy="16.5" r="1.6" fill="#ffffff" />
            <circle cx="45" cy="25" r="1.6" fill="#ffffff" />
            <circle cx="38.5" cy="18.5" r="1.6" fill="#ffffff" />
            <circle cx="48" cy="21" r="1.1" fill="#ffffff" />
          </svg>
        );

      case "new zealand":
      case "newzealand":
      case "nz":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="42" fill="#00247d" />
            <rect width="30" height="21" fill="#012169" />
            <path d="M0 0L30 21M30 0L0 21" stroke="#ffffff" strokeWidth="4" />
            <path d="M0 0L30 21M30 0L0 21" stroke="#cc142b" strokeWidth="2" />
            <path d="M15 0v21M0 10.5h30" stroke="#ffffff" strokeWidth="6" />
            <path d="M15 0v21M0 10.5h30" stroke="#cc142b" strokeWidth="3.5" />
            {/* Red stars with white borders */}
            <circle cx="46" cy="10" r="2.4" fill="#cc142b" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="53" cy="17.5" r="2" fill="#cc142b" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="46" cy="27" r="2.4" fill="#cc142b" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="39" cy="19.5" r="1.9" fill="#cc142b" stroke="#ffffff" strokeWidth="0.8" />
          </svg>
        );

      case "europe":
      case "schengen":
      case "eu":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="42" fill="#003399" />
            {/* Ring of 12 Gold Stars */}
            <circle cx="30" cy="9" r="1.5" fill="#ffcc00" />
            <circle cx="37" cy="11" r="1.5" fill="#ffcc00" />
            <circle cx="41" cy="16" r="1.5" fill="#ffcc00" />
            <circle cx="42" cy="21" r="1.5" fill="#ffcc00" />
            <circle cx="41" cy="26" r="1.5" fill="#ffcc00" />
            <circle cx="37" cy="31" r="1.5" fill="#ffcc00" />
            <circle cx="30" cy="33" r="1.5" fill="#ffcc00" />
            <circle cx="23" cy="31" r="1.5" fill="#ffcc00" />
            <circle cx="19" cy="26" r="1.5" fill="#ffcc00" />
            <circle cx="18" cy="21" r="1.5" fill="#ffcc00" />
            <circle cx="19" cy="16" r="1.5" fill="#ffcc00" />
            <circle cx="23" cy="11" r="1.5" fill="#ffcc00" />
          </svg>
        );

      case "dubai":
      case "uae":
      case "united arab emirates":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="14" fill="#00732f" />
            <rect y="14" width="60" height="14" fill="#ffffff" />
            <rect y="28" width="60" height="14" fill="#000000" />
            <rect width="18" height="42" fill="#e52928" />
          </svg>
        );

      case "germany":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="14" fill="#000000" />
            <rect y="14" width="60" height="14" fill="#dd0000" />
            <rect y="28" width="60" height="14" fill="#ffce00" />
          </svg>
        );

      case "france":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="20" height="42" fill="#002395" />
            <rect x="20" width="20" height="42" fill="#ffffff" />
            <rect x="40" width="20" height="42" fill="#ed2939" />
          </svg>
        );

      case "ireland":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="20" height="42" fill="#169b62" />
            <rect x="20" width="20" height="42" fill="#ffffff" />
            <rect x="40" width="20" height="42" fill="#ff883e" />
          </svg>
        );

      case "denmark":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="42" fill="#c60c30" />
            <path d="M20 0v42M0 21h60" stroke="#ffffff" strokeWidth="7" />
          </svg>
        );

      case "switzerland":
        return (
          <svg className="w-full h-full" viewBox="0 0 42 42">
            <rect width="42" height="42" fill="#da291c" />
            <rect x="17" y="8" width="8" height="26" fill="#ffffff" />
            <rect x="8" y="17" width="26" height="8" fill="#ffffff" />
          </svg>
        );

      case "singapore":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="21" fill="#ed2939" />
            <rect y="21" width="60" height="21" fill="#ffffff" />
            <circle cx="12" cy="10.5" r="6.5" fill="#ffffff" />
            <circle cx="14.5" cy="10.5" r="5.5" fill="#ed2939" />
            <circle cx="18" cy="8" r="1.1" fill="#ffffff" />
            <circle cx="20" cy="10.5" r="1.1" fill="#ffffff" />
            <circle cx="18" cy="13" r="1.1" fill="#ffffff" />
          </svg>
        );

      case "malaysia":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="42" fill="#cc0000" />
            <path d="M0,6h60 M0,12h60 M0,18h60 M0,24h60 M0,30h60 M0,36h60" stroke="#ffffff" strokeWidth="3" />
            <rect width="30" height="22" fill="#000066" />
            <circle cx="14" cy="11" r="7" fill="#ffcc00" />
            <circle cx="16" cy="11" r="6" fill="#000066" />
            <polygon points="20,11 22,13 24,11 22,9" fill="#ffcc00" />
          </svg>
        );

      case "italy":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="20" height="42" fill="#009246" />
            <rect x="20" width="20" height="42" fill="#ffffff" />
            <rect x="40" width="20" height="42" fill="#ce2b37" />
          </svg>
        );

      case "poland":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="21" fill="#ffffff" />
            <rect y="21" width="60" height="21" fill="#dc143c" />
          </svg>
        );

      case "malta":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="30" height="42" fill="#ffffff" />
            <rect x="30" width="30" height="42" fill="#cf1020" />
            <rect x="5" y="5" width="9" height="9" fill="#cccccc" stroke="#888888" strokeWidth="0.8" />
          </svg>
        );

      case "latvia":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="17" fill="#9e3039" />
            <rect y="17" width="60" height="8" fill="#ffffff" />
            <rect y="25" width="60" height="17" fill="#9e3039" />
          </svg>
        );

      case "lithuania":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="14" fill="#fdb913" />
            <rect y="14" width="60" height="14" fill="#006a44" />
            <rect y="28" width="60" height="14" fill="#c1272d" />
          </svg>
        );

      case "czech republic":
      case "czechia":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="21" fill="#ffffff" />
            <rect y="21" width="60" height="21" fill="#d7141a" />
            <polygon points="0,0 28,21 0,42" fill="#11457e" />
          </svg>
        );

      case "hungary":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="14" fill="#ce2939" />
            <rect y="14" width="60" height="14" fill="#ffffff" />
            <rect y="28" width="60" height="14" fill="#477050" />
          </svg>
        );

      case "finland":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="42" fill="#ffffff" />
            <path d="M19 0v42M0 21h60" stroke="#003580" strokeWidth="8" />
          </svg>
        );

      case "sweden":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="42" fill="#006aa7" />
            <path d="M19 0v42M0 21h60" stroke="#fecc00" strokeWidth="7" />
          </svg>
        );

      case "spain":
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="10" fill="#aa151b" />
            <rect y="10" width="60" height="22" fill="#f1bf00" />
            <rect y="32" width="60" height="10" fill="#aa151b" />
            <circle cx="16" cy="21" r="4.5" fill="#aa151b" />
          </svg>
        );

      default:
        return (
          <svg className="w-full h-full" viewBox="0 0 60 42">
            <rect width="60" height="42" fill="#0a1e38" />
            <circle cx="30" cy="21" r="10" fill="#e52928" />
          </svg>
        );
    }
  };

  if (variant === "circle") {
    return (
      <div
        className={`relative rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#e52928] via-[#0a1e38] to-[#e52928] shadow-md shadow-red-950/20 hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center ${circleSizeMap[size]} ${className}`}
      >
        <div className="w-full h-full rounded-full overflow-hidden border border-white/80 relative">
          {renderFlagContent()}
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  // Default Badge Variant: Rounded rectangle with Umang Logo Red Accent Glow & Gloss
  return (
    <div
      className={`relative rounded-lg overflow-hidden border-2 border-white/90 shadow-md shadow-black/20 hover:shadow-xl hover:shadow-red-500/20 hover:border-[#e52928] hover:scale-105 transition-all duration-300 inline-block bg-slate-900 ${sizeMap[size]} ${className}`}
    >
      {renderFlagContent()}
      {/* Glossy 3D Highlight */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/25 pointer-events-none" />
    </div>
  );
}
