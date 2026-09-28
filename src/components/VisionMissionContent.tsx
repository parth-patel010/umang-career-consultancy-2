"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import founderPhoto from "../../public/founder-photo-v4.jpg";

export default function VisionMissionContent() {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [visionInView, setVisionInView] = useState(false);
  const [missionInView, setMissionInView] = useState(false);
  const [founderInView, setFounderInView] = useState(false);

  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
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

    const founderObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFounderInView(true);
    }, observerOptions);

    if (visionRef.current) visionObserver.observe(visionRef.current);
    if (missionRef.current) missionObserver.observe(missionRef.current);
    if (founderRef.current) founderObserver.observe(founderRef.current);

    return () => {
      visionObserver.disconnect();
      missionObserver.disconnect();
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
              className={`lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed transition-all duration-800 delay-200 ease-out transform ${
                visionInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <p>
                Our vision is to become a trusted and reliable career consultancy, committed to providing clear guidance and personalized support to students and individuals planning their education or career journey abroad. We aim to help our clients understand their options, make informed decisions, and choose opportunities that align with their goals.
              </p>
              <p>
                By providing transparent information and dedicated assistance at every stage, we strive to make the journey simpler, more confident, and focused towards a brighter future.
              </p>
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
              className={`lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed transition-all duration-800 delay-200 ease-out transform ${
                missionInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <p>
                Our mission is to support students and individuals in achieving their international education and career goals through personalized counselling, course and university selection, application assistance, visa guidance, documentation support, scholarship guidance, and pre-departure assistance.
              </p>
              <p>
                We aim to provide clear information, responsive support, and a smooth experience throughout every stage of the journey.
              </p>
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
              <div className="relative w-full max-w-[340px] aspect-[703/726] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-1.5 group">
                <Image
                  src={founderPhoto}
                  alt="Sudip Parikh - Founder of Umang Career Consultancy"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
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
                Dear Students, Parents &amp; Well-Wishers,
              </p>

              <p>
                At Umang Career Consultancy, we believe that every student&apos;s journey is unique, and choosing the right education and career path is an important decision.
              </p>

              <p>
                Our aim is to provide honest, transparent, and personalized guidance to students and individuals who wish to explore education and career opportunities abroad. We understand that the process can sometimes feel complicated, which is why our team is committed to supporting you at every important step.
              </p>

              <p>
                Whether you are exploring study destinations, choosing a course or university, preparing your application, or understanding the visa process, we are here to help you make informed decisions based on your individual goals and profile.
              </p>

              <p>
                At Umang Career Consultancy, we value trust, clear communication, and student-focused guidance. We believe our responsibility goes beyond simply assisting with applications — it is about helping you understand your options and move forward with confidence.
              </p>

              <p>
                Thank you for choosing Umang Career Consultancy to be a part of your journey. We look forward to supporting you as you take your next step towards a brighter future.
              </p>

              {/* Signature Block */}
              <div className="pt-4 border-t border-slate-200/70 mt-6">
                <p className="text-sm text-slate-500">Warm Regards,</p>
                <p className="text-lg font-bold text-[#0a1e38] mt-1">Sudip Parikh</p>
                <p className="text-xs text-slate-500 font-medium">Founder, Umang Career Consultancy</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
