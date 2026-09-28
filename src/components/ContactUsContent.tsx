"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------
   SVG ICONS
------------------------------------------------------------- */
function LocationPinIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

/* -------------------------------------------------------------
   ADVISOR DIRECTORY DATA
------------------------------------------------------------- */
const ADVISORS = [
  { country: "Canada", number: "+91 6355 600 204", raw: "+916355600204", flag: "CA" },
  { country: "UK", number: "+91 7990 359 721", raw: "+917990359721", flag: "UK" },
  { country: "Europe", number: "+91 7874 030 174", raw: "+917874030174", flag: "EU" },
  { country: "Coaching", number: "+91 9724 913 620", raw: "+919724913620", flag: "COACH" },
  { country: "MBBS In India", number: "+91 9898 434 909", raw: "+919898434909", flag: "MBBS-IN" },
  { country: "MBBS In Abroad", number: "+91 9998 034 909", raw: "+919998034909", flag: "MBBS-ABROAD" },
  { country: "MBBS B2B", number: "+91 8490 090 111", raw: "+918490090111", flag: "B2B" },
];

/* -------------------------------------------------------------
   SERVICE OPTIONS FOR DROPDOWN
------------------------------------------------------------- */
const SERVICE_OPTIONS = [
  "Study in Canada",
  "Study in UK",
  "Study in USA",
  "Study in Australia & New Zealand",
  "Study in Europe (Germany, France, Ireland, Italy, Poland, Latvia, Switzerland)",
  "Study in UAE (Dubai Campuses)",
  "MBBS Abroad (Georgia, Uzbekistan, Kazakhstan, Russia, Philippines)",
  "MBBS in India (NEET Guidance)",
  "IELTS / PTE / TOEFL / Duolingo Coaching",
  "Student Visa Filing & SOP Guidance",
  "Visitor / Tourist Visa",
  "Spouse / Dependent Visa",
  "Permanent Residency (PR) & Immigration",
  "Education Loan & Forex Assistance",
];

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export default function ContactUsContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agreeToTerms: true,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#07172b] text-white font-sans selection:bg-[#e52928] selection:text-white">
      {/* -------------------------------------------------------------
          1. MAIN HERO & CONTACT SECTION (MATCHING SCREENSHOT)
      ------------------------------------------------------------- */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Subtle Network & Silhouette Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <Image
            src="/world-map-network.png"
            alt="World Map Background"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#e52928]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header: Matches Screenshot Red Accent & "Just a Call Away..." */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
            <div className="inline-flex items-center justify-center gap-3 mb-2">
              <span className="h-[3px] w-8 sm:w-10 bg-[#e52928] rounded-full inline-block animate-pulse" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Just a Call Away...
              </h1>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 font-medium">
              Have questions about foreign university admissions, student visas, test coaching, or MBBS abroad? Reach out to our certified advisors today.
            </p>
          </div>

          {/* Grid Layout: Left Details vs Right Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ================= LEFT COLUMN: CONTACT DETAILS ================= */}
            <div className="lg:col-span-5 space-y-6 animate-fade-in-left">
              
              {/* Card 1: Head Office */}
              <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/25 card-hover-elevate transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner border border-white/10">
                  <LocationPinIcon />
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <h3 className="text-base sm:text-lg font-black text-white tracking-wide">
                    Head Office:
                  </h3>
                  <p className="font-bold text-slate-200">
                    Disha Education Consultancy ( DEC ABROAD )
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    301-305, Pinnacle Business Park,
                    <br />
                    Above RBL Bank, Near Tulsidham Char Rasta,
                    <br />
                    Manjalpur, Vadodara – 390011. Gujarat
                  </p>
                  <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10">
                    <span className="font-semibold text-slate-300">VIP Road Branch:</span> FF-25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP Road, Vadodara – 390019
                  </div>
                </div>
              </div>

              {/* Card 2: Meet Career Advisors */}
              <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/25 card-hover-elevate transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner border border-white/10">
                  <PhoneIcon />
                </div>
                <div className="w-full space-y-2 text-xs sm:text-sm">
                  <h3 className="text-base sm:text-lg font-black text-white tracking-wide mb-3">
                    Meet Career Advisors:
                  </h3>
                  <div className="space-y-2 divide-y divide-white/5">
                    {ADVISORS.map((adv, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between pt-2 first:pt-0 group"
                      >
                        <span className="text-slate-300 font-medium flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 text-[10px] font-black rounded bg-white/10 text-slate-200 border border-white/20 tracking-wider">{adv.flag}</span>
                          <span>{adv.country}:</span>
                        </span>
                        <a
                          href={`tel:${adv.raw}`}
                          className="font-bold text-white group-hover:text-rose-400 transition-colors tracking-wide"
                        >
                          {adv.number}
                        </a>
                      </div>
                    ))}

                    {/* General Hotline */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-amber-300 font-bold flex items-center gap-1.5">
                        <svg className="w-4 h-4 fill-current inline-block text-amber-300" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg>
                        <span>Hotline / WhatsApp:</span>
                      </span>
                      <a
                        href="tel:+919173186109"
                        className="font-extrabold text-amber-300 hover:text-white transition-colors"
                      >
                        +91 91731 86109
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Mail Us For Information */}
              <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-white/25 card-hover-elevate transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner border border-white/10">
                  <MailIcon />
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <h3 className="text-base sm:text-lg font-black text-white tracking-wide">
                    Mail us for information
                  </h3>
                  <p className="text-slate-300">
                    Send us your transcripts or queries for an immediate response:
                  </p>
                  <div className="pt-1 space-y-1">
                    <a
                      href="mailto:umangcareer2022@gmail.com"
                      className="text-white hover:text-rose-400 font-semibold block transition-colors"
                    >
                      umangcareer2022@gmail.com
                    </a>
                    <a
                      href="mailto:info@decabroad.com"
                      className="text-slate-300 hover:text-white block transition-colors"
                    >
                      info@decabroad.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4: Operating Hours */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-emerald-900/20 border border-emerald-500/30 card-hover-elevate flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-white">Office Hours:</span>
                  <span className="text-slate-300">Mon – Sat: 10:00 AM – 7:00 PM</span>
                </div>
                <span className="text-emerald-400 font-semibold text-xs hidden sm:inline">
                  Sunday by Appt
                </span>
              </div>

            </div>

            {/* ================= RIGHT COLUMN: INTERACTIVE CONTACT FORM ================= */}
            <div className="lg:col-span-7 animate-fade-in-right">
              <div className="bg-[#0b1f3b] rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Fill out the form below and one of our regional admissions specialists will call or WhatsApp you within 24 hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-12 px-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/40"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                    <h4 className="text-xl sm:text-2xl font-black text-white">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Umang Career Consultancy (DEC Abroad). Our senior advisor for <span className="text-amber-300 font-bold">{formData.service || "Study Abroad"}</span> will connect with you at <span className="text-white font-bold">{formData.phone}</span> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: "",
                          agreeToTerms: true,
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Top Row: Full Name & Your Mail */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                          }
                          placeholder="Full name *"
                          className="w-full px-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#e52928] shadow-sm"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          placeholder="Your mail *"
                          className="w-full px-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#e52928] shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Second Row: Phone Number & Services Dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          placeholder="Phone number *"
                          className="w-full px-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#e52928] shadow-sm"
                        />
                      </div>
                      <div>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, service: e.target.value }))
                          }
                          className="w-full px-4 py-3.5 rounded-xl bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#e52928] shadow-sm cursor-pointer"
                        >
                          <option value="">Services (Select Service)</option>
                          {SERVICE_OPTIONS.map((srv, idx) => (
                            <option key={idx} value={srv} className="text-slate-900">
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Third Row: Message Textarea */}
                    <div>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        placeholder="Message..."
                        className="w-full px-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#e52928] shadow-sm resize-none"
                      />
                    </div>

                    {/* Checkbox Agreement (Matching Screenshot Exact Wording) */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }))
                        }
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#e52928] focus:ring-[#e52928] cursor-pointer"
                      />
                      <label htmlFor="agreeToTerms" className="text-xs text-slate-300 leading-relaxed cursor-pointer select-none">
                        I agree to receive messages from DEC Abroad Private Limited and its representatives through WhatsApp, RCS, Email, and other communication channels.
                      </label>
                    </div>

                    {/* Submit Button (Matching Screenshot Red Button with Icon) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#c1272d] hover:bg-red-700 active:bg-red-800 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-700/30 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer disabled:opacity-70"
                      >
                        <SendIcon />
                        <span>{isSubmitting ? "Sending..." : "Send now"}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. GOOGLE MAPS EMBED SECTION (MATCHING SCREENSHOT 2)
      ------------------------------------------------------------- */}
      <section className="relative bg-[#051121] py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-rose-300 mb-2">
                <span className="inline-flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-[#e52928]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>VISIT OUR HEAD OFFICE IN VADODARA</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Find Us on Google Maps
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Located at 301-305, Pinnacle Business Park, Above RBL Bank, Near Tulsidham Char Rasta, Manjalpur, Vadodara – 390011.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.google.com/maps?q=22.31511224414104,73.2321907886134"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Open in Maps</span>
                <ExternalLinkIcon />
              </a>
              <a
                href="https://wa.me/919173186109"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all shadow-sm"
              >
                <WhatsAppIcon />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Frame with Coordinates Pin */}
          <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 h-[420px] sm:h-[480px]">
            {/* Embedded Google Map iframe pointing to coordinates 22.31511224414104, 73.2321907886134 */}
            <iframe
              title="Umang Career Consultancy Office Location"
              src="https://maps.google.com/maps?q=22.31511224414104,73.2321907886134&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. WHY REACH OUT / FAQ STRIP
      ------------------------------------------------------------- */}
      <section className="py-16 bg-[#07172b] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 card-hover-elevate hover:border-white/25 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h4 className="text-base font-bold text-white mb-1">
                Swift 24-Hour Response
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you message via WhatsApp or submit our website inquiry, a dedicated country counselor will review your profile within 24 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 card-hover-elevate hover:border-white/25 transition-all">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-[#e52928] flex items-center justify-center mb-3"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="2" /><circle cx="12" cy="12" r="5" strokeWidth="2" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg></div>
              <h4 className="text-base font-bold text-white mb-1">
                100% Free Initial Assessment
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We evaluate your academic transcripts, IELTS/PTE scores, financial budget, and backlogs without any upfront charge or counseling fee.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 card-hover-elevate hover:border-white/25 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="2" /><path strokeWidth="1.8" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg></div>
              <h4 className="text-base font-bold text-white mb-1">
                In-Person & Online Consultations
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Visit our Vadodara office or schedule a convenient Google Meet / Zoom counseling session for you and your parents anywhere across India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
