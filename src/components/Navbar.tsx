"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Clearly visible, crisp red downward caret arrow matching reference
const CaretDownIcon = () => (
  <svg
    className="w-[10px] h-[6px] fill-[#e52928] inline-block ml-2 shrink-0 align-middle"
    viewBox="0 0 10 6"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <polygon points="0,0 10,0 5,6" />
  </svg>
);

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Area */}
          <Link
            href="/"
            onClick={() => setActiveItem("Home")}
            className="flex-shrink-0 flex items-center py-2 transition-transform duration-200 hover:opacity-95"
          >
            <Image
              src="/logo.png"
              alt="Umang Career Consultancy"
              width={340}
              height={50}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links - relative container for unified mega dropdown alignment */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10 h-full relative">
            {/* 1. HOME */}
            <div className="group flex items-center h-full">
              <Link
                href="/"
                onClick={() => {
                  setActiveItem("Home");
                  setOpenDropdown(null);
                }}
                className={`relative inline-flex items-center py-1 text-[16px] font-semibold transition-colors duration-200 ${
                  activeItem === "Home"
                    ? "text-[#e52928]"
                    : "text-[#1d2736] hover:text-[#e52928]"
                }`}
              >
                <span>Home</span>
                {/* Center-expanding Red Line Indicator */}
                <span
                  className={`nav-line-indicator ${
                    activeItem === "Home" ? "active" : ""
                  }`}
                />
              </Link>
            </div>

            {/* 2. ABOUT US (Mega Dropdown) */}
            <div
              className="group flex items-center h-full"
              onMouseEnter={() => setOpenDropdown("About Us")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/about-us"
                onClick={() => setActiveItem("About Us")}
                className={`relative inline-flex items-center py-1 text-[16px] font-semibold transition-colors duration-200 ${
                  activeItem === "About Us"
                    ? "text-[#e52928]"
                    : "text-[#1d2736] hover:text-[#e52928]"
                }`}
              >
                <span>About Us</span>
                <CaretDownIcon />
                {/* Center-expanding Red Line Indicator */}
                <span
                  className={`nav-line-indicator ${
                    activeItem === "About Us" ? "active" : ""
                  }`}
                />
              </Link>

              {/* Mega Dropdown Panel - About Us: centered identically to Services */}
              <div
                className={`mega-dropdown-container left-1/2 -translate-x-1/2 ${
                  openDropdown === "About Us" ? "open" : ""
                }`}
              >
                <div className="w-[880px] max-w-[calc(100vw-32px)] bg-white rounded-lg shadow-2xl border border-gray-100 p-8">
                  <div className="grid grid-cols-3 gap-x-10">
                    {/* Column 1 */}
                    <div className="space-y-4">
                      <Link
                        href="/about-us"
                        onClick={() => {
                          setActiveItem("About Us");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2.5 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/gallery"
                        onClick={() => {
                          setActiveItem("About Us");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2.5 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Gallery
                      </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                      <Link
                        href="/about-us/vision-mission"
                        onClick={() => {
                          setActiveItem("About Us");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2.5 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Our Vision and Our Mission
                      </Link>
                      <Link
                        href="/careers"
                        onClick={() => {
                          setActiveItem("About Us");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2.5 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Career
                      </Link>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                      <Link
                        href="/our-team"
                        onClick={() => {
                          setActiveItem("About Us");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2.5 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Our Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. SERVICES (Mega Dropdown) */}
            <div
              className="group flex items-center h-full"
              onMouseEnter={() => setOpenDropdown("Services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/services"
                onClick={() => setActiveItem("Services")}
                className={`relative inline-flex items-center py-1 text-[16px] font-semibold transition-colors duration-200 ${
                  activeItem === "Services"
                    ? "text-[#e52928]"
                    : "text-[#1d2736] hover:text-[#e52928]"
                }`}
              >
                <span>Services</span>
                <CaretDownIcon />
                {/* Center-expanding Red Line Indicator */}
                <span
                  className={`nav-line-indicator ${
                    activeItem === "Services" ? "active" : ""
                  }`}
                />
              </Link>

              {/* Mega Dropdown Panel - Services */}
              <div
                className={`mega-dropdown-container left-1/2 -translate-x-1/2 ${
                  openDropdown === "Services" ? "open" : ""
                }`}
              >
                <div className="w-[880px] max-w-[calc(100vw-32px)] bg-white rounded-lg shadow-2xl border border-gray-100 p-8">
                  {/* Top 3 Columns */}
                  <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                    {/* Col 1 */}
                    <div className="space-y-4">
                      <Link
                        href="/services/career-counseling"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Career Counseling
                      </Link>
                      <Link
                        href="/services/student-visa"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Student Visa
                      </Link>
                      <Link
                        href="/services/visitor-visa"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Visitor Visa
                      </Link>
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-4">
                      <Link
                        href="/services/university-selection"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        University Selection
                      </Link>
                      <Link
                        href="/services/sop-resume"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        SOP | Resume Preparation
                      </Link>
                      <Link
                        href="/services/pr-immigration"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        PR | Immigration
                      </Link>
                    </div>

                    {/* Col 3 */}
                    <div className="space-y-4">
                      <Link
                        href="/services/visa-document"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Visa Document
                      </Link>
                      <Link
                        href="/services/spouse-visa"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Spouse Visa
                      </Link>
                      <Link
                        href="/services/pre-departure"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Pre-Departure Guidance
                      </Link>
                    </div>
                  </div>

                  {/* Centered Divider "Our Assistance" */}
                  <div className="relative my-7 flex items-center justify-center">
                    <div className="w-full border-t border-gray-400" />
                    <span className="absolute bg-white px-5 text-[15px] font-semibold text-slate-800">
                      Our Assistance
                    </span>
                  </div>

                  {/* Bottom 3 Columns */}
                  <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                    {/* Col 1 */}
                    <div className="space-y-4">
                      <Link
                        href="/services/forex"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Forex Services
                      </Link>
                      <Link
                        href="/services/accommodation"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Accommodation
                      </Link>
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-4">
                      <Link
                        href="/services/travel-insurance"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Air Ticket | Travel Insurance
                      </Link>
                    </div>

                    {/* Col 3 */}
                    <div className="space-y-4">
                      <Link
                        href="/services/education-loan"
                        onClick={() => {
                          setActiveItem("Services");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[14px] font-medium tracking-wide uppercase text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Education Loan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. STUDY ABROAD (Mega Dropdown) */}
            <div
              className="group flex items-center h-full"
              onMouseEnter={() => setOpenDropdown("Study Abroad")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/study-abroad"
                onClick={() => setActiveItem("Study Abroad")}
                className={`relative inline-flex items-center py-1 text-[16px] font-semibold transition-colors duration-200 ${
                  activeItem === "Study Abroad"
                    ? "text-[#e52928]"
                    : "text-[#1d2736] hover:text-[#e52928]"
                }`}
              >
                <span>Study Abroad</span>
                <CaretDownIcon />
                {/* Center-expanding Red Line Indicator */}
                <span
                  className={`nav-line-indicator ${
                    activeItem === "Study Abroad" ? "active" : ""
                  }`}
                />
              </Link>

              {/* Mega Dropdown Panel - Study Abroad: centered identically to Services */}
              <div
                className={`mega-dropdown-container left-1/2 -translate-x-1/2 ${
                  openDropdown === "Study Abroad" ? "open" : ""
                }`}
              >
                <div className="w-[880px] max-w-[calc(100vw-32px)] bg-white rounded-lg shadow-2xl border border-gray-100 p-8">
                  <div className="grid grid-cols-3 gap-x-10 gap-y-3">
                    {/* Column 1 */}
                    <div className="space-y-3">
                      <Link
                        href="/study-abroad"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Study Abroad
                      </Link>
                      <Link
                        href="/study-abroad/canada"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Canada
                      </Link>
                      <Link
                        href="/study-abroad/uk"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        UK
                      </Link>
                      <Link
                        href="/study-abroad/australia"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Australia
                      </Link>
                      <Link
                        href="/study-abroad/usa"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        USA
                      </Link>
                      <Link
                        href="/study-abroad/new-zealand"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        New Zealand
                      </Link>
                      <Link
                        href="/study-abroad/uae"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        United Arab Emirates
                      </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-3">
                      <Link
                        href="/study-abroad/france"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        France
                      </Link>
                      <Link
                        href="/study-abroad/malta"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Malta
                      </Link>
                      <Link
                        href="/study-abroad/poland"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Poland
                      </Link>
                      <Link
                        href="/study-abroad/ireland"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Ireland
                      </Link>
                      <Link
                        href="/study-abroad/denmark"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Denmark
                      </Link>
                      <Link
                        href="/study-abroad/malaysia"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Malaysia
                      </Link>
                      <Link
                        href="/study-abroad/switzerland"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Switzerland
                      </Link>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-3">
                      <Link
                        href="/study-abroad/latvia"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Latvia
                      </Link>
                      <Link
                        href="/study-abroad/hungary"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Hungary
                      </Link>
                      <Link
                        href="/study-abroad/czech-republic"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Czech Republic
                      </Link>
                      <Link
                        href="/study-abroad/germany"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Germany
                      </Link>
                      <Link
                        href="/study-abroad/singapore"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Singapore
                      </Link>
                      <Link
                        href="/study-abroad/italy"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Italy
                      </Link>
                      <Link
                        href="/study-abroad/lithuania"
                        onClick={() => {
                          setActiveItem("Study Abroad");
                          setOpenDropdown(null);
                        }}
                        className="block pb-2 text-[15px] font-medium text-slate-700 hover:text-[#e52928] border-b border-dotted border-gray-300 transition-colors"
                      >
                        Lithuania
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. CONTACT US (Direct Link, No Dropdown, No Arrow) */}
            <div className="group flex items-center h-full">
              <Link
                href="/contact-us"
                onClick={() => {
                  setActiveItem("Contact Us");
                  setOpenDropdown(null);
                }}
                className={`relative inline-flex items-center py-1 text-[16px] font-semibold transition-colors duration-200 ${
                  activeItem === "Contact Us"
                    ? "text-[#e52928]"
                    : "text-[#1d2736] hover:text-[#e52928]"
                }`}
              >
                <span>Contact Us</span>
                {/* Center-expanding Red Line Indicator */}
                <span
                  className={`nav-line-indicator ${
                    activeItem === "Contact Us" ? "active" : ""
                  }`}
                />
              </Link>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#e52928] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {/* Mobile Home */}
            <div className="border-b border-gray-50 py-3">
              <Link
                href="/"
                onClick={() => {
                  setActiveItem("Home");
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-semibold ${
                  activeItem === "Home" ? "text-[#e52928]" : "text-[#1d2736]"
                }`}
              >
                Home
              </Link>
            </div>

            {/* Mobile About Us */}
            <div className="border-b border-gray-50 py-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/about-us"
                  onClick={() => {
                    setActiveItem("About Us");
                  }}
                  className={`text-base font-semibold ${
                    activeItem === "About Us" ? "text-[#e52928]" : "text-[#1d2736]"
                  }`}
                >
                  About Us
                </Link>
                <button
                  onClick={() => toggleMobileDropdown("About Us")}
                  className="p-1 text-[#e52928]"
                  aria-label="Toggle About Us submenu"
                >
                  <CaretDownIcon />
                </button>
              </div>

              {mobileDropdownOpen === "About Us" && (
                <div className="pl-3 pt-2 space-y-2">
                  {[
                    { label: "About Us", href: "/about-us" },
                    { label: "Gallery", href: "/gallery" },
                    { label: "Our Vision and Our Mission", href: "/about-us/vision-mission" },
                    { label: "Career", href: "/careers" },
                    { label: "Our Team", href: "/our-team" },
                  ].map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => {
                        setActiveItem("About Us");
                        setMobileMenuOpen(false);
                      }}
                      className="block text-sm font-medium text-gray-600 hover:text-[#e52928] py-1 border-b border-dotted border-gray-200"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services */}
            <div className="border-b border-gray-50 py-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setActiveItem("Services")}
                  className={`text-base font-semibold ${
                    activeItem === "Services" ? "text-[#e52928]" : "text-[#1d2736]"
                  }`}
                >
                  Services
                </Link>
                <button
                  onClick={() => toggleMobileDropdown("Services")}
                  className="p-1 text-[#e52928]"
                  aria-label="Toggle Services submenu"
                >
                  <CaretDownIcon />
                </button>
              </div>

              {mobileDropdownOpen === "Services" && (
                <div className="pl-3 pt-2 space-y-2">
                  {[
                    "CAREER COUNSELING",
                    "STUDENT VISA",
                    "VISITOR VISA",
                    "UNIVERSITY SELECTION",
                    "SOP | RESUME PREPARATION",
                    "PR | IMMIGRATION",
                    "VISA DOCUMENT",
                    "SPOUSE VISA",
                    "PRE-DEPARTURE GUIDANCE",
                    "FOREX SERVICES",
                    "ACCOMMODATION",
                    "AIR TICKET | TRAVEL INSURANCE",
                    "EDUCATION LOAN",
                  ].map((sub) => (
                    <Link
                      key={sub}
                      href={
                        sub === "CAREER COUNSELING"
                          ? "/services/career-counselling"
                          : sub === "STUDENT VISA"
                          ? "/services/student-visa"
                          : sub === "VISITOR VISA"
                          ? "/services/visitor-visa"
                          : sub === "UNIVERSITY SELECTION"
                          ? "/services/university-selection"
                          : sub === "SOP | RESUME PREPARATION"
                          ? "/services/sop-resume"
                          : sub === "SPOUSE VISA"
                          ? "/services/spouse-visa"
                          : sub === "VISA DOCUMENT"
                          ? "/services/visa-document"
                          : sub === "PR | IMMIGRATION"
                          ? "/services/pr-immigration"
                          : sub === "PRE-DEPARTURE GUIDANCE"
                          ? "/services/pre-departure"
                          : sub === "FOREX SERVICES"
                          ? "/services/forex"
                          : sub === "AIR TICKET | TRAVEL INSURANCE"
                          ? "/services/travel-insurance"
                          : sub === "EDUCATION LOAN"
                          ? "/services/education-loan"
                          : sub === "ACCOMMODATION"
                          ? "/services/accommodation"
                          : "/services"
                      }
                      onClick={() => {
                        setActiveItem("Services");
                        setMobileMenuOpen(false);
                      }}
                      className="block text-sm font-medium text-gray-600 hover:text-[#e52928] py-1 border-b border-dotted border-gray-200"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Study Abroad */}
            <div className="border-b border-gray-50 py-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/study-abroad"
                  onClick={() => setActiveItem("Study Abroad")}
                  className={`text-base font-semibold ${
                    activeItem === "Study Abroad" ? "text-[#e52928]" : "text-[#1d2736]"
                  }`}
                >
                  Study Abroad
                </Link>
                <button
                  onClick={() => toggleMobileDropdown("Study Abroad")}
                  className="p-1 text-[#e52928]"
                  aria-label="Toggle Study Abroad submenu"
                >
                  <CaretDownIcon />
                </button>
              </div>

              {mobileDropdownOpen === "Study Abroad" && (
                <div className="pl-3 pt-2 grid grid-cols-2 gap-2">
                  {[
                    "Canada",
                    "UK",
                    "Australia",
                    "USA",
                    "New Zealand",
                    "UAE",
                    "France",
                    "Malta",
                    "Poland",
                    "Ireland",
                    "Denmark",
                    "Malaysia",
                    "Switzerland",
                    "Germany",
                    "Singapore",
                    "Italy",
                  ].map((country) => (
                    <Link
                      key={country}
                      href={`/study-abroad/${country.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => {
                        setActiveItem("Study Abroad");
                        setMobileMenuOpen(false);
                      }}
                      className="text-sm font-medium text-gray-600 hover:text-[#e52928] py-1 border-b border-dotted border-gray-200"
                    >
                      {country}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Us */}
            <div className="py-3">
              <Link
                href="/contact-us"
                onClick={() => {
                  setActiveItem("Contact Us");
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-semibold ${
                  activeItem === "Contact Us" ? "text-[#e52928]" : "text-[#1d2736]"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
