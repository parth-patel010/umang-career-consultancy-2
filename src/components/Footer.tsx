"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#07172b] text-white pt-16 pb-8 border-t border-slate-800/80">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Col 1: Logo & Company Brand Info */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              {/* Umang Career Consultancy Logo */}
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.png"
                  alt="Umang Career Consultancy"
                  width={220}
                  height={60}
                  className="h-12 w-auto object-contain brightness-105"
                />
              </Link>

              {/* Google Rating Pill */}
              <div className="flex items-center gap-2 mb-6 text-xs text-slate-300">
                <span className="w-5 h-5 flex items-center justify-center font-bold text-base text-[#10b981]">
                  G
                </span>
                <div className="flex items-center text-[#10b981]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-white">4.9/5</span>
                <span className="text-slate-400">(1500+ Reviews)</span>
              </div>
            </div>

            {/* Social Media Circular Buttons matching reference */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#0a1e38] border border-white/20 hover:border-[#e52928] hover:bg-[#e52928] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#0a1e38] border border-white/20 hover:border-[#e52928] hover:bg-[#e52928] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#0a1e38] border border-white/20 hover:border-[#e52928] hover:bg-[#e52928] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-[#0a1e38] border border-white/20 hover:border-[#e52928] hover:bg-[#e52928] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919173186109"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#0a1e38] border border-white/20 hover:border-[#25D366] hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Our Office */}
          <div className="lg:col-span-4">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#10b981] mb-5">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span>Our Office</span>
            </h4>
            <div className="space-y-4 text-xs sm:text-[13px] text-slate-300">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#10b981] shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-.99-1.11z" />
                </svg>
                <div>
                  <a href="tel:+919173186109" className="hover:text-white font-semibold transition-colors block">
                    +91 91731 86109
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#10b981] shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <a
                  href="https://wa.me/919173186109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +91 91731 86109
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#10b981] shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:umangcareer2022@gmail.com" className="hover:text-white transition-colors">
                  umangcareer2022@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 fill-[#10b981] shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="leading-relaxed">
                  FF-25 Shree Siddeshwar Plaza, Beside Super Bakery New Vip Road, KhodiyarNagar, Vadodara Gujarat India, 390019
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Contact Us (Services & Guidance Inquiries) */}
          <div className="lg:col-span-4">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#10b981] mb-5">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
              <span>Contact Us</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] text-slate-300">
              <li>
                <Link href="/study-abroad/uk" className="hover:text-white transition-colors">
                  UK Student Visa
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/canada" className="hover:text-white transition-colors">
                  Canada Admissions
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/usa" className="hover:text-white transition-colors">
                  USA University Guidance
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/europe" className="hover:text-white transition-colors">
                  Europe Study Programs
                </Link>
              </li>
              <li>
                <Link href="/study-abroad/australia" className="hover:text-white transition-colors">
                  Australia & New Zealand
                </Link>
              </li>
              <li>
                <Link href="/services/visitor-visa" className="hover:text-white transition-colors">
                  Visitor & Spouse Visas
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= MIDDLE SECTION: NAVIGATION CATEGORIES ================= */}
        <div className="py-12 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-xs sm:text-[13px]">
          
          {/* Category 1: Study Abroad */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wider text-[#10b981] mb-4">
              Study Abroad
            </h5>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/study-abroad/uk" className="hover:text-white transition-colors">Study in UK</Link></li>
              <li><Link href="/study-abroad/canada" className="hover:text-white transition-colors">Study in Canada</Link></li>
              <li><Link href="/study-abroad/usa" className="hover:text-white transition-colors">Study in USA</Link></li>
              <li><Link href="/study-abroad/australia" className="hover:text-white transition-colors">Study in Australia</Link></li>
              <li><Link href="/study-abroad/new-zealand" className="hover:text-white transition-colors">Study in New Zealand</Link></li>
              <li><Link href="/study-abroad/europe" className="hover:text-white transition-colors">Study in Europe</Link></li>
            </ul>
          </div>

          {/* Category 2: Visa Services */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wider text-[#10b981] mb-4">
              Visa Services
            </h5>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/services/student-visa" className="hover:text-white transition-colors">Student Visa</Link></li>
              <li><Link href="/services/spouse-visa" className="hover:text-white transition-colors">Spouse Visa</Link></li>
              <li><Link href="/services/visitor-visa" className="hover:text-white transition-colors">Visitor Visa</Link></li>
              <li><Link href="/services/visa-documentation" className="hover:text-white transition-colors">Visa Documentation</Link></li>
              <li><Link href="/services/pr-immigration" className="hover:text-white transition-colors">PR & Immigration</Link></li>
              <li><Link href="/services/pre-departure-guidance" className="hover:text-white transition-colors">Pre-Departure Guidance</Link></li>
            </ul>
          </div>

          {/* Category 3: Student Assistance */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wider text-[#10b981] mb-4">
              Student Assistance
            </h5>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/services/career-counseling" className="hover:text-white transition-colors">Career Counseling</Link></li>
              <li><Link href="/services/university-selection" className="hover:text-white transition-colors">University Selection</Link></li>
              <li><Link href="/services/sop-resume-preparation" className="hover:text-white transition-colors">SOP & Resume Drafting</Link></li>
              <li><Link href="/services/education-loan" className="hover:text-white transition-colors">Education Loan Support</Link></li>
              <li><Link href="/services/forex-services" className="hover:text-white transition-colors">Forex & Fee Transfer</Link></li>
              <li><Link href="/services/air-ticket-travel-insurance" className="hover:text-white transition-colors">Air Ticket & Insurance</Link></li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* Quick Legal Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            © 2026 <span className="text-white font-semibold">Umang Career Consultancy</span>. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
