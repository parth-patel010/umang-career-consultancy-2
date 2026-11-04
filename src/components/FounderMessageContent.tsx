"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import founderPhoto from "../../public/founder-photo-v4.jpg";

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

function QuoteIcon({ className = "w-10 h-10 text-red-100" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function FounderMessageContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Dynamic Keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gentleFloat {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-8px) rotate(0.4deg); }
            }
            .anim-gentle-float {
              animation: gentleFloat 5s ease-in-out infinite;
            }
            @keyframes phoneRing {
              0%, 100% { transform: rotate(0deg); }
              10%, 30% { transform: rotate(-10deg); }
              20%, 40% { transform: rotate(10deg); }
              50% { transform: rotate(0deg); }
            }
            .anim-phone-ring:hover svg {
              animation: phoneRing 0.8s ease-in-out;
            }
          `,
        }}
      />

      {/* Hero / Header Section */}
      <section className="w-full bg-gradient-to-b from-[#f8fafc] via-white to-white pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#e52928] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/about-us" className="hover:text-[#e52928] transition-colors">
              About Us
            </Link>
            <span>/</span>
            <span className="text-[#0a1e38] font-bold">Founder&apos;s Message</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e52928] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#e52928] animate-ping" />
              Leadership &amp; Personal Vision
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight leading-tight">
              Founder’s <span className="text-[#e52928]">Message</span>
            </h1>

            <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
              A personal message from Sudip Parikh, Founder &amp; Principal Consultant of Umang Career Consultancy, Vadodara.
            </p>
          </div>
        </div>
      </section>

      {/* Main Letter Section */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Founder Photo Card & Credentials */}
            <div
              className={`lg:col-span-5 flex flex-col items-center transition-all duration-800 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative w-full max-w-[360px] aspect-[703/726] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-50 p-1 group anim-gentle-float">
                <Image
                  src={founderPhoto}
                  alt="Sudip Parikh - Founder of Umang Career Consultancy"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 text-center">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Alumnus • Australia &amp; New Zealand
                  </div>
                  <div className="text-base font-black text-[#0a1e38]">
                    Sudip Parikh
                  </div>
                </div>
              </div>

              {/* Title & Organization */}
              <div className="text-center mt-6 space-y-1">
                <h2 className="text-2xl font-black text-[#0a1e38]">
                  Sudip Parikh
                </h2>
                <p className="text-sm font-bold text-[#e52928] uppercase tracking-wider">
                  Founder &amp; Principal Consultant
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Umang Career Consultancy, Vadodara
                </p>
              </div>

              {/* Verified Credentials Box */}
              <div className="mt-6 w-full max-w-[360px] p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-2.5">
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Founded in 2020 on Uncompromising Ethics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Personal Higher Education in Australia &amp; NZ</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Direct, Transparent &amp; Realistic Profile Audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Comprehensive Student, Visitor &amp; PR Visas</span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder's Message Body (Exact Words from OM Bhai) */}
            <div
              className={`lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl relative transition-all duration-800 delay-150 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="absolute top-6 right-6 pointer-events-none opacity-40">
                <QuoteIcon className="w-16 h-16 text-slate-200" />
              </div>

              <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed relative z-10 font-normal">
                <p className="font-bold text-lg sm:text-xl text-[#0a1e38]">
                  Dear Students, Parents, and Well-Wishers,
                </p>

                <p>
                  Choosing the right education and career path is one of the most significant milestones in a person&apos;s life. At <strong className="text-[#0a1e38] font-bold">Umang Career Consultancy</strong>, we recognize that every individual’s journey is entirely unique, filled with immense potential and distinct goals.
                </p>

                <p>
                  When I founded this consultancy in 2020, my vision was built on a single, uncompromising principle: to provide honest, transparent, and personalized guidance to anyone aspiring to build a future abroad. Having completed my own higher education in <strong className="text-[#0a1e38] font-bold">Australia and New Zealand</strong>, I understand firsthand the mix of excitement, anxiety, and complexity that comes with moving to a new country. I know what it takes to sit in your shoes, and that personal insight forms the empathetic foundation of how our team works every single day.
                </p>

                <p>
                  Immigration and global education systems can feel overwhelming, but you do not have to navigate them alone. Whether you are exploring global study destinations, selecting the right university course, preparing rigorous applications, navigating international flight logistics, or understanding complex embassy visa requirements, we are here to support you at every pivotal step.
                </p>

                <p>
                  Our responsibility goes far beyond simply filing paperwork or booking tickets. We are here to empower you with crystal-clear facts, realistic profile evaluations, and strategic guidance so that you can make informed choices and move forward with absolute confidence. We do not believe in false promises—we believe in direct, honest conversations that protect your time, investment, and future.
                </p>

                <p>
                  Thank you for placing your trust in Umang Career Consultancy and making us a part of your global journey. We look forward to guiding you safely toward a brighter, borderless future.
                </p>

                {/* Emotionally Resonant Vision Statement Quote */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50/70 via-white to-slate-50 border-l-4 border-[#e52928] shadow-sm my-6">
                  <div className="text-xs font-bold text-[#e52928] uppercase tracking-wider mb-2">
                    Our Vision • Where Hope Meets Honesty
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#0a1e38] leading-relaxed italic">
                    &ldquo;We believe that a passport full of stamps shouldn’t come with a head full of stress. Your dream of moving abroad, studying at a global university, or exploring a new country is one of the biggest chapters of your life—and it shouldn&apos;t feel like a cold, terrifying legal hurdle.&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    We aim to be the trusted partner that stands by you at every single milestone—giving you the direct, crystal-clear truth you deserve, so you can step onto your flight with a calm heart and total confidence.
                  </p>
                </div>

                {/* Signature Block */}
                <div className="pt-6 border-t border-slate-200 mt-8">
                  <p className="text-sm font-semibold text-slate-500">Warm Regards,</p>
                  <p className="text-2xl font-black text-[#0a1e38] mt-1">Sudip Parikh</p>
                  <p className="text-xs font-bold text-[#e52928] uppercase tracking-wider mt-0.5">
                    Founder &amp; Principal Consultant
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Umang Career Consultancy, Vadodara
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why We Care & Brand Slogans Section */}
      <section className="w-full py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#e52928] mb-2 px-3 py-1 rounded-full bg-red-100/70">
              Emotional Story Block
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e38] tracking-tight">
              Why We Care
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              We remember what it feels like—and that empathy guides every decision we make.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-red-50 to-slate-50 border-l-4 border-[#e52928]">
              <p className="text-base sm:text-lg font-semibold text-[#0a1e38] leading-relaxed">
                &ldquo;We know exactly what is at stake when you hand us your documents. We know that behind every passport is a parent’s hard-earned savings, a student’s late-night sacrifices, or a family&apos;s dream of a better future.&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Our founder, <strong className="text-[#0a1e38] font-bold">Sudip Parikh</strong>, sat in those exact same shoes when heading to <strong className="text-[#0a1e38] font-bold">Australia and New Zealand</strong> for his own education. He remembers the anxiety of waiting for an embassy response and the confusion of booking flights alone. That is why Umang Career Consultancy exists.
              </p>
              <p>
                We care because we remember what it feels like. We don&apos;t see you as an application file or a checklist—we see your hopes, your hard work, and your future. That is why we promise to always tell you the crystal-clear truth, manage your logistics end-to-end, and treat your dreams with the respect they deserve.
              </p>
            </div>

            {/* 4 Brand Slogans */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="block text-sm font-black text-[#0a1e38]">Clear Truth.</span>
                <span className="text-xs text-[#e52928] font-semibold">Confident Journeys.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="block text-sm font-black text-[#0a1e38]">Real Dreams.</span>
                <span className="text-xs text-[#e52928] font-semibold">Zero Stress.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="block text-sm font-black text-[#0a1e38]">Honest Guidance.</span>
                <span className="text-xs text-[#e52928] font-semibold">Approved Futures.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="block text-sm font-black text-[#0a1e38]">Your Global Journey,</span>
                <span className="text-xs text-[#e52928] font-semibold">Simplified.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="w-full py-12 sm:py-16 bg-[#0a1e38] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                Direct Principal Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Begin Your Global Journey with Total Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Visit our Vadodara office or reach out to Founder Sudip Parikh and our senior consulting team for an honest evaluation.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:+919173186109"
                className="anim-phone-ring inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <PhoneIcon />
                <span>Call +91 9173186109</span>
              </a>

              <a
                href="https://wa.me/919173186109?text=Hello%20Sudip%20Sir%2C%20I%20would%20like%20to%20consult%20with%20Umang%20Career%20Consultancy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Sudip Parikh</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
