"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import CmsImage from "@/components/CmsImage";
import { homepageContent, type HomepageContent } from "@/content/cmsDefaults";
import { submitWebsiteInquiry } from "@/lib/inquiries/submitInquiry";

export default function StudentSupportSection({
  support = homepageContent.studentSupport,
}: {
  support?: HomepageContent["studentSupport"];
}) {
  const availableServices = support.services;
  const checklistPoints = support.checklist;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("Choose services*");
  const [message, setMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Intersection observer for section entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedService === availableServices[0]) {
      setFormError("Please choose a service.");
      return;
    }
    setIsSubmitting(true);
    setFormError("");
    try {
      await submitWebsiteInquiry({
        fullName: name,
        email: "",
        mobile: phone,
        service: selectedService,
        message,
        source: "Homepage student support",
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setName("");
        setPhone("");
        setSelectedService(availableServices[0] ?? "Choose services*");
        setMessage("");
        setIsSubmitted(false);
      }, 4000);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Could not send your inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-24 bg-white overflow-hidden"
    >
      {/* Background Dotted World Map Network Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none select-none z-0">
        <CmsImage
          src={support.mapImage}
          alt="Global Network Map"
          width={1300}
          height={480}
          className="w-full max-w-[1400px] h-auto object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Header matching reference */}
        <div
          className={`text-center mb-14 sm:mb-16 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          {/* Subtitle with accent lines: = Get in touch = */}
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="w-5 sm:w-6 h-[2px] bg-[#e52928] rounded-full inline-block" />
            <span className="text-[#e52928] text-sm sm:text-base font-semibold tracking-wide uppercase">
              {support.eyebrow}
            </span>
            <span className="w-5 sm:w-6 h-[2px] bg-[#0f2e5a] rounded-full inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight">
            <span className="text-[#e52928]">{support.titleLead}</span>
            <span className="text-[#0f2e5a]">{support.titleRest}</span>
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name and Phone Number - Smooth slide in from Left */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-14"
                }`}
                style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
              >
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-lg bg-[#f8fafc] border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#e52928] focus:bg-white transition-all text-sm sm:text-base font-medium"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone number*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-lg bg-[#f8fafc] border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#e52928] focus:bg-white transition-all text-sm sm:text-base font-medium"
                  />
                </div>
              </div>

              {/* Row 2: Custom Dropdown Selector - Smooth slide in from Left */}
              <div
                ref={dropdownRef}
                className={`relative w-full transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-14"
                }`}
                style={{ transitionDelay: isVisible ? "250ms" : "0ms" }}
              >
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className={`w-full px-5 py-3.5 rounded-lg bg-[#f8fafc] border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    isDropdownOpen
                      ? "border-[#e52928] ring-1 ring-[#e52928] bg-white shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span
                    className={`text-sm sm:text-base font-medium ${
                      selectedService === "Choose services*"
                        ? "text-gray-600"
                        : "text-[#0f2e5a] font-semibold"
                    }`}
                  >
                    {selectedService}
                  </span>
                  
                  {/* Chevron Icon with smooth rotation */}
                  <svg
                    className={`w-5 h-5 text-[#0f2e5a] transition-transform duration-250 ${
                      isDropdownOpen ? "rotate-180 text-[#e52928]" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Pop-In Animated Dropdown Menu matching exact reference */}
                {isDropdownOpen && (
                  <div className="absolute top-[calc(100%+6px)] left-0 w-full bg-white rounded-lg shadow-[0_12px_36px_rgba(0,0,0,0.16)] border border-gray-100 max-h-64 overflow-y-auto z-50 anim-dropdown-popup py-1 divide-y divide-gray-50">
                    {availableServices.map((service, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSelectedService(service);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-5 py-2.5 text-sm sm:text-[15px] transition-colors duration-150 cursor-pointer flex items-center justify-between ${
                          idx === 0
                            ? "font-bold text-[#0f2e5a] bg-slate-50/70"
                            : selectedService === service
                            ? "bg-red-50 text-[#e52928] font-bold"
                            : "text-gray-700 hover:bg-slate-50 hover:text-[#0f2e5a]"
                        }`}
                      >
                        <span>{service}</span>
                        {selectedService === service && idx !== 0 && (
                          <span className="w-2 h-2 rounded-full bg-[#e52928]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Row 3: Message Textarea - Smooth slide in from Left */}
              <div
                className={`transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-14"
                }`}
                style={{ transitionDelay: isVisible ? "350ms" : "0ms" }}
              >
                <textarea
                  rows={4}
                  placeholder="Message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-lg bg-[#f8fafc] border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#e52928] focus:bg-white transition-all text-sm sm:text-base font-medium resize-none"
                />
              </div>

              {/* Submit Button - Smooth slide up */}
              <div
                className={`pt-2 transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2.5 px-9 py-3.5 bg-[#e52928] hover:bg-[#c91e1d] text-white font-bold text-base sm:text-lg rounded-full shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-200 transform hover:scale-105 cursor-pointer active:scale-95 disabled:opacity-60"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />
                  </svg>
                  <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                </button>

                {formError ? <p className="mt-3 text-sm font-semibold text-red-600">{formError}</p> : null}

                {isSubmitted && (
                  <p className="mt-3 text-sm font-semibold text-emerald-600 animate-pulse">
                    Thank you! Your inquiry has been sent to Umang Career Consultancy.
                  </p>
                )}
              </div>

            </form>
          </div>

          {/* Right Column: Checkmark Points + Direct Contact Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Checklist items - Staggered slide in from Right */}
            <div className="space-y-4 mb-10">
              {checklistPoints.map((point, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3.5 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-12"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${idx * 75 + 200}ms` : "0ms",
                  }}
                >
                  <span className="w-5 h-5 shrink-0 text-[#e52928] mt-0.5">
                    <svg
                      className="w-5 h-5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-[#1a2e4c] font-medium text-base sm:text-lg leading-snug">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Contact Action Badges - Slide Up */}
            <div
              className={`flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "650ms" : "0ms" }}
            >
              
              {/* Phone Call pill */}
              <div className="flex items-center gap-3.5 group">
                <a
                  href="tel:+919173186109"
                  aria-label="Call Umang Career Consultancy"
                  className="w-12 h-12 rounded-full bg-[#0a1e38] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#e52928] transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-.99-1.11z" />
                  </svg>
                </a>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Call us for information</p>
                  <a
                    href="tel:+919173186109"
                    className="text-[#0a1e38] font-bold text-base sm:text-lg hover:text-[#e52928] transition-colors"
                  >
                    +91 91731 86109
                  </a>
                </div>
              </div>

              {/* Mail Us Pill */}
              <a
                href="mailto:umangcareer2022@gmail.com"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#e52928] hover:bg-[#c91e1d] text-white font-bold text-base rounded-full shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Mail us</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
