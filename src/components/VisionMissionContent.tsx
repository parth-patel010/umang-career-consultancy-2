"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import founderPhoto from "../../public/founder-photo-v5.jpg";

export default function VisionMissionContent() {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [visionInView, setVisionInView] = useState(false);
  const [missionInView, setMissionInView] = useState(false);
  const [careInView, setCareInView] = useState(false);
  const [founderInView, setFounderInView] = useState(false);

  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const careRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBannerLoaded(true);

    const observerOptions = {
      root: null,
      threshold: 0.12,
    };

    const visionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisionInView(true);
    }, observerOptions);

    const missionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setMissionInView(true);
    }, observerOptions);

    const careObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCareInView(true);
    }, observerOptions);

    const founderObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFounderInView(true);
    }, observerOptions);

    if (visionRef.current) visionObserver.observe(visionRef.current);
    if (missionRef.current) missionObserver.observe(missionRef.current);
    if (careRef.current) careObserver.observe(careRef.current);
    if (founderRef.current) founderObserver.observe(founderRef.current);

    return () => {
      visionObserver.disconnect();
      missionObserver.disconnect();
      careObserver.disconnect();
      founderObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* ================= 1ST SECTION: TOP VISION BANNER ================= */}
      <section className="w-full relative overflow-hidden bg-white shadow-sm">
        <div
          className={`w-full relative transition-all duration-1000 ease-out transform ${
            bannerLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
          }`}
        >
          <Image
            src="/vision-banner.png"
            alt="Our Vision and Our Mission - Umang Career Consultancy"
            width={1920}
            height={630}
            priority
            quality={95}
            className="w-full h-auto object-cover block"
          />
        </div>
      </section>

      {/* ================= 2ND SECTION: OUR VISION ================= */}
      <section
        ref={visionRef}
        className="w-full bg-white py-14 sm:py-20 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Heading + 3D Vision Graphic */}
            <div
              className={`lg:col-span-5 flex flex-col transition-all duration-800 ease-out transform ${
                visionInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider mb-3 w-fit">
                Where Hope Meets Honesty
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight mb-6">
                Our Vision
              </h2>

              <div className="relative w-full max-w-[420px] aspect-[4/3] group">
                <Image
                  src="/vision-illustration.png"
                  alt="Umang Career Consultancy - Our Vision"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
                />
              </div>
            </div>

            {/* Right Column: Vision Description */}
            <div
              className={`lg:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg lg:text-[17.5px] leading-relaxed transition-all duration-800 delay-200 ease-out transform ${
                visionInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-red-50/70 via-white to-slate-50 border-l-4 border-[#e52928] shadow-sm">
                <p className="font-semibold text-[#0a1e38] text-base sm:text-lg leading-relaxed">
                  We believe that a passport full of stamps shouldn’t come with a head full of stress. Your dream of moving abroad, studying at a global university, or exploring a new country is one of the biggest chapters of your life—and it shouldn&apos;t feel like a cold, terrifying legal hurdle.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Our vision is to build a consultancy where <strong className="text-[#0a1e38] font-bold">hope meets honesty</strong>. We see a future where every student, family, and traveler who walks through our doors is met with absolute clarity, zero hidden games, and genuine warmth. By taking the heavy burden of embassy visas, complex flight ticketing, and tour logistics completely off your shoulders, we want to be more than just a service provider. We aim to be the trusted partner that stands by you at every single milestone—giving you the direct, crystal-clear truth you deserve, so you can step onto your flight with a calm heart and total confidence.
              </p>

              {/* 3 Core Emotional Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-[#e52928] flex items-center justify-center font-black text-sm mb-2">
                    01
                  </div>
                  <div className="font-bold text-[#0a1e38] text-sm">Hope Meets Honesty</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-snug">Zero hidden games &amp; crystal-clear guidance.</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0a1e38] flex items-center justify-center font-black text-sm mb-2">
                    02
                  </div>
                  <div className="font-bold text-[#0a1e38] text-sm">Zero Travel Stress</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-snug">Embassy visas, flights &amp; tour logistics lifted.</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm mb-2">
                    03
                  </div>
                  <div className="font-bold text-[#0a1e38] text-sm">Total Confidence</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-snug">Calm heart &amp; unwavering support at every step.</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 3RD SECTION: OUR MISSION ================= */}
      <section
        ref={missionRef}
        className="w-full bg-[#f8fafc] py-14 sm:py-20 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Heading + 3D Mission Graphic */}
            <div
              className={`lg:col-span-5 flex flex-col transition-all duration-800 ease-out transform ${
                missionInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0a1e38] text-xs font-bold uppercase tracking-wider mb-3 w-fit">
                Tireless Support &amp; Clear Truth
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight mb-6">
                Our Mission
              </h2>

              <div className="relative w-full max-w-[420px] aspect-[4/3] group">
                <Image
                  src="/mission-illustration.png"
                  alt="Umang Career Consultancy - Our Mission"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
                />
              </div>
            </div>

            {/* Right Column: Mission Description */}
            <div
              className={`lg:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg lg:text-[17.5px] leading-relaxed transition-all duration-800 delay-200 ease-out transform ${
                missionInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-slate-50 border-l-4 border-[#0a1e38] shadow-sm">
                <p className="font-semibold text-[#0a1e38] text-base sm:text-lg leading-relaxed">
                  To protect your dreams from the stress of paperwork and the confusion of hidden rules. We are committed to standing beside every student, family, and traveler as a trusted guide, offering direct truth and tireless support.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed">
                By handling every visa application with <strong className="text-[#0a1e38] font-bold">absolute transparency</strong>, securing the best flight tickets, and managing your tours end-to-end, our mission is to deliver complete peace of mind—ensuring your next big step into the world begins with absolute confidence.
              </p>

              {/* 3 Mission Delivery Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a1e38] flex items-center justify-center font-black text-sm mb-2">
                    01
                  </div>
                  <div className="font-bold text-[#0a1e38] text-sm">Paperwork Shield</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-snug">Zero confusion, zero hidden rules.</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#e52928] flex items-center justify-center font-black text-sm mb-2">
                    02
                  </div>
                  <div className="font-bold text-[#0a1e38] text-sm">Full Logistics Care</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-snug">Visas, flight tickets &amp; tours managed.</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-sm mb-2">
                    03
                  </div>
                  <div className="font-bold text-[#0a1e38] text-sm">Complete Peace of Mind</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-snug">Step out with absolute confidence.</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 4TH SECTION: EMOTIONAL BRAND SLOGANS ================= */}
      <section className="w-full bg-[#0a1e38] text-white py-12 sm:py-16 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e52928_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-400 mb-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/60">
              Brand Slogans &amp; Identity
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Our Core Promises in Action
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal">
              Emotional brand mottos defining every visa, ticket, and journey we manage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all text-center group">
              <div className="w-10 h-10 mx-auto rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity={0.2} />
                </svg>
              </div>
              <h4 className="text-lg font-black text-white">Clear Truth.</h4>
              <p className="text-red-400 font-bold text-sm mt-0.5">Confident Journeys.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all text-center group">
              <div className="w-10 h-10 mx-auto rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <h4 className="text-lg font-black text-white">Real Dreams.</h4>
              <p className="text-red-400 font-bold text-sm mt-0.5">Zero Stress.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all text-center group">
              <div className="w-10 h-10 mx-auto rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h4 className="text-lg font-black text-white">Honest Guidance.</h4>
              <p className="text-red-400 font-bold text-sm mt-0.5">Approved Futures.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all text-center group">
              <div className="w-10 h-10 mx-auto rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h4 className="text-lg font-black text-white">Your Global Journey,</h4>
              <p className="text-red-400 font-bold text-sm mt-0.5">Simplified.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5TH SECTION: WHY WE CARE (EMOTIONAL STORY BLOCK) ================= */}
      <section
        ref={careRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-[#0a1e38] to-slate-900 text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
                Emotional Story Block
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Why We Care
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto font-normal">
                Behind every passport is a sacred story of family sacrifice, late-night hard work, and lifelong aspirations.
              </p>
            </div>

            {/* Core Story Card */}
            <div
              className={`p-8 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl space-y-6 transition-all duration-800 ease-out transform ${
                careInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="p-6 sm:p-7 rounded-2xl bg-white/10 border-l-4 border-[#e52928]">
                <p className="text-base sm:text-xl font-semibold text-white leading-relaxed">
                  &ldquo;We know exactly what is at stake when you hand us your documents. We know that behind every passport is a parent’s hard-earned savings, a student’s late-night sacrifices, or a family&apos;s dream of a better future.&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed">
                <p>
                  Our founder, <strong className="text-white font-bold">Sudip Parikh</strong>, sat in those exact same shoes when heading to <strong className="text-white font-bold">Australia and New Zealand</strong> for his own education. He remembers the anxiety of waiting for an embassy response and the confusion of booking flights alone.
                </p>
                <p>
                  <strong className="text-white font-bold">That is why Umang Career Consultancy exists.</strong> We care because we remember what it feels like. We don&apos;t see you as an application file or a checklist—we see your hopes, your hard work, and your future.
                </p>
                <div className="pt-2">
                  <p className="text-amber-300 font-semibold text-base sm:text-lg italic">
                    &ldquo;That is why we promise to always tell you the crystal-clear truth, manage your logistics end-to-end, and treat your dreams with the respect they deserve.&rdquo;
                  </p>
                </div>
              </div>

              {/* 3 Emotional Anchors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xs uppercase font-bold text-red-300">The Stakes</div>
                  <div className="text-sm font-bold text-white mt-1">Parents&apos; Savings &amp; Sacrifices</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xs uppercase font-bold text-red-300">Our Empathy</div>
                  <div className="text-sm font-bold text-white mt-1">Lived the Exact Same Journey</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xs uppercase font-bold text-red-300">Our Promise</div>
                  <div className="text-sm font-bold text-white mt-1">Crystal-Clear Truth &amp; Respect</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4TH SECTION: FOUNDER'S MESSAGE ================= */}
      <section
        ref={founderRef}
        className="w-full bg-white py-14 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1e38] tracking-tight mb-10 transition-all duration-700 ease-out transform ${
              founderInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6"
            }`}
          >
            Founder’s Message
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Founder Photo Card */}
            <div
              className={`w-full lg:w-[36%] xl:w-[34%] shrink-0 flex flex-col items-center transition-all duration-800 delay-150 ease-out transform ${
                founderInView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-1.5 group">
                <Image
                  src={founderPhoto}
                  alt="Sudip Parikh - Founder of Umang Career Consultancy"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Founder Details */}
              <div className="text-center mt-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a1e38]">
                  Sudip Parikh
                </h3>
                <p className="text-sm font-semibold text-[#e52928] uppercase tracking-wider mt-1">
                  Founder & Principal Consultant
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Umang Career Consultancy, Vadodara
                </p>
              </div>
            </div>

            {/* Right Column: Message Body */}
            <div
              className={`flex-1 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed transition-all duration-800 delay-300 ease-out transform ${
                founderInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="font-semibold text-base sm:text-lg text-[#0a1e38]">
                Dear Students, Parents, and Well-Wishers,
              </p>

              <p>
                Choosing the right education and career path is one of the most significant milestones in a person&apos;s life. At Umang Career Consultancy, we recognize that every individual’s journey is entirely unique, filled with immense potential and distinct goals.
              </p>

              <p>
                When I founded this consultancy in 2020, my vision was built on a single, uncompromising principle: to provide honest, transparent, and personalized guidance to anyone aspiring to build a future abroad. Having completed my own higher education in Australia and New Zealand, I understand firsthand the mix of excitement, anxiety, and complexity that comes with moving to a new country. I know what it takes to sit in your shoes, and that personal insight forms the empathetic foundation of how our team works every single day.
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

              {/* Signature Block */}
              <div className="pt-4 border-t border-slate-200/70 mt-6">
                <p className="text-sm text-slate-500">Warm Regards,</p>
                <p className="text-xl font-bold text-[#0a1e38] mt-1">Sudip Parikh</p>
                <p className="text-xs font-semibold text-[#e52928] uppercase tracking-wider mt-0.5">
                  Founder &amp; Principal Consultant
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Umang Career Consultancy, Vadodara
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
