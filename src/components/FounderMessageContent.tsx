"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import founderPhoto from "../../public/founder-photo-v5.jpg";

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
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
              <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-50 p-1 group anim-gentle-float">
                <Image
                  src={founderPhoto}
                  alt="Sudip Parikh - Founder of Umang Career Consultancy"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
