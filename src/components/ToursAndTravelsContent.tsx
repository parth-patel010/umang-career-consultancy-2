"use client";

import { sendFormInquiry } from "@/lib/inquiries/web3forms";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import VibrantCountryFlag from "@/components/VibrantCountryFlag";

/* -------------------------------------------------------------
   SVG ICONS
------------------------------------------------------------- */
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

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${
        isOpen ? "transform rotate-180 text-[#e52928]" : "text-white"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function CheckmarkIcon({ className = "w-5 h-5 text-[#22c55e]" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* -------------------------------------------------------------
   REUSABLE SECTION HEADER
------------------------------------------------------------- */
function SectionHeader({
  title,
  subtitle,
  variant = "light",
  inView = true,
}: {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
  inView?: boolean;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`text-center mb-10 sm:mb-14 transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="inline-flex items-center justify-center gap-3.5">
        <div className="flex flex-col gap-1 w-6 sm:w-8">
          <span className="h-[2.5px] w-full bg-[#e52928] rounded-full" />
          <span
            className={`h-[2.5px] w-full ${
              isDark ? "bg-white/80" : "bg-[#0a1e38]"
            } rounded-full`}
          />
        </div>

        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-[#0a1e38]"
          }`}
        >
          {title}
        </h2>

        <div className="flex flex-col gap-1 w-6 sm:w-8">
          <span className="h-[2.5px] w-full bg-[#e52928] rounded-full" />
          <span
            className={`h-[2.5px] w-full ${
              isDark ? "bg-white/80" : "bg-[#0a1e38]"
            } rounded-full`}
          />
        </div>
      </div>
      {subtitle && (
        <p
          className={`mt-2.5 text-base sm:text-lg font-medium max-w-3xl mx-auto ${
            isDark ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------
   DATA STRUCTURES (DOMESTIC & INTERNATIONAL PACKAGES)
------------------------------------------------------------- */
const DOMESTIC_PACKAGES = [
  {
    title: "Royal Rajasthan",
    tag: "Heritage & Palaces",
    highlights: "Jaipur, Udaipur, Jodhpur & Jaisalmer",
    desc: "Explore grandiose forts, magnificent palaces, camel desert safaris on Thar dunes, and rich Rajasthani royal culinary feasts.",
    duration: "6 Nights / 7 Days",
  },
  {
    title: "Magical Himachal",
    tag: "Snow Valleys & Pines",
    highlights: "Shimla, Manali, Solang Valley & Dharamshala",
    desc: "Breathtaking snow-draped Himalayan panoramas, cedar pine forests, paragliding adventures, and serene colonial mountain retreats.",
    duration: "5 Nights / 6 Days",
  },
  {
    title: "Serene Kerala",
    tag: "God's Own Country",
    highlights: "Munnar, Thekkady, Alleppey & Kovalam",
    desc: "Lush rolling tea estates, aromatic spice plantations, authentic luxury backwater houseboats, and tranquil Arabian sea beaches.",
    duration: "5 Nights / 6 Days",
  },
  {
    title: "Spiritual Golden Triangle",
    tag: "Culture & Devotion",
    highlights: "Delhi, Agra Taj Mahal & Varanasi",
    desc: "Marvel at the world wonder Taj Mahal, tour Mughal architecture, and witness the transcendent evening Ganga Aarti in sacred Varanasi.",
    duration: "4 Nights / 5 Days",
  },
  {
    title: "Exotic Beach Getaways (Goa & Andaman)",
    tag: "Sun, Sand & Scuba",
    highlights: "Havelock Island, Neil Island, North & South Goa",
    desc: "Crystal-clear turquoise waters, coral reef scuba diving, radiant golden coastlines, and rejuvenating coastal tropical resorts.",
    duration: "4 Nights / 5 Days",
  },
];

const DOMESTIC_INCLUSIONS = [
  "Handpicked Premium Accommodations (4★ & 5★ Resorts/Hotels)",
  "Flight Bookings with Free Automated Web Check-In",
  "Dedicated Private Chauffeur & AC Ground Vehicle",
  "Curated Sightseeing Tours & Monument Entry Coordination",
  "24/7 Dedicated On-Tour Assistance & Emergency Support",
  "Tailored Meal Plans (Vegetarian & Jain Friendly)",
];

const INTERNATIONAL_PACKAGES = [
  {
    title: "Vibrant Dubai & Abu Dhabi",
    tag: "Luxury & Modern Marvels",
    flag: "dubai",
    highlights: "Burj Khalifa, Desert Safari, Palm Jumeirah & Sheikh Zayed Mosque",
    desc: "Futuristic skyscrapers, world-class luxury shopping, desert 4x4 dune bashing with BBQ under stars, and private yacht cruises.",
    duration: "4 Nights / 5 Days",
  },
  {
    title: "Scenic Sri Lanka",
    tag: "Emerald Island Discovery",
    flag: "sri lanka",
    highlights: "Sigiriya Rock, Kandy Temple, Nuwara Eliya & Bentota",
    desc: "Misty tea hills, ancient Buddhist rock fortresses, scenic mountain train journeys, and golden southern beach coastlines.",
    duration: "5 Nights / 6 Days",
  },
  {
    title: "Tropical Maldives",
    tag: "Overwater Paradise",
    flag: "maldives",
    highlights: "Private Island Resorts, Coral Reefs & Sunset Cruises",
    desc: "Iconic overwater luxury villas, crystal clear coral lagoons, world-class snorkeling, private dolphin cruises, and pristine white sands.",
    duration: "3 Nights / 4 Days",
  },
  {
    title: "Cultural Vietnam",
    tag: "Ancient Towns & Emerald Bays",
    flag: "vietnam",
    highlights: "Ha Long Bay Cruise, Hanoi Old Quarter, Da Nang & Hoi An",
    desc: "Overnight luxury cruise through Ha Long Bay’s limestone peaks, lantern-lit ancient trading streets of Hoi An, and vibrant culinary culture.",
    duration: "6 Nights / 7 Days",
  },
  {
    title: "Tropical Southeast Asia",
    tag: "Triple Country Discovery",
    flag: "singapore",
    highlights: "Singapore, Bangkok, Phuket, Kuala Lumpur & Langkawi",
    desc: "Futuristic Gardens by the Bay, Thai temple tours, tropical island island-hopping, and Malaysia's vibrant cultural skyline.",
    duration: "7 Nights / 8 Days",
  },
  {
    title: "Comprehensive European Schengen",
    tag: "Grand Continental Tour",
    flag: "europe",
    highlights: "Switzerland Alps, Paris, Rome, Venice & Amsterdam",
    desc: "Snow-capped Swiss summits on scenic cogwheel trains, Eiffel Tower sunsets, Venetian gondolas, and border-free Schengen touring.",
    duration: "9 Nights / 10 Days",
  },
];

const INTERNATIONAL_INCLUSIONS = [
  "Professional Tourist Visa Processing & Document Lodgement",
  "Competitive International Airfares with Extra Baggage Options",
  "Luxury Stays at Verified 4★ / 5★ Hotels & Beachfront Resorts",
  "Certified Local English-Speaking Tour Guides",
  "Curated Daily Meals (Jain, Pure Vegetarian & International)",
  "Seamless Airport Lounge Access Coordination",
  "Mandatory International Travel Medical Insurance Setups",
];

const UMANG_ADVANTAGES = [
  {
    title: "Tailor-Made Itineraries",
    desc: "No generic cookie-cutter plans. We design the daily pace around your family, children, senior citizens, or corporate group preferences.",
    icon: (
      <svg className="w-8 h-8 text-[#e52928]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Seamless Logistics",
    desc: "Flights, visas, luxury hotels, private transfers, and excursions are knitted together into one smooth, effortless master itinerary.",
    icon: (
      <svg className="w-8 h-8 text-[#0a1e38]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: "Zero Hidden Costs",
    desc: "In line with our brand promise of crystal-clear communication, what we quote is exactly what you get. No surprise charges mid-trip.",
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "Can I customize the day-by-day itinerary of my holiday package?",
    a: "Absolutely! At Umang Career Consultancy, bespoke travel is our specialty. We can adjust the travel dates, hotel categories (3★, 4★, 5★, or boutique villas), flight timings, sightseeing activities, and private vehicle options to suit your preferences and budget.",
  },
  {
    q: "Do your international holiday packages include tourist visas and insurance?",
    a: "Yes! Our end-to-end international service includes full visa processing (Schengen, Dubai, Vietnam, Singapore, Sri Lanka, etc.), documentation checks, appointment scheduling, and comprehensive overseas travel insurance.",
  },
  {
    q: "Are Pure Vegetarian or Jain meals available on international tours?",
    a: "Yes! We coordinate with our international destination partners and verified hotel properties to ensure authentic Pure Vegetarian and Jain meal options are seamlessly provided throughout your journey.",
  },
  {
    q: "What payment methods are supported for holiday bookings?",
    a: "We support flexible, transparent payment modes including Instant UPI (Google Pay, PhonePe), Direct Bank Transfers (NEFT & RTGS), and major Debit & Credit Cards with official GST invoices.",
  },
  {
    q: "What on-tour support does Umang Career Consultancy provide?",
    a: "You receive 24/7 direct telephone and WhatsApp on-tour concierge support from our Vadodara headquarters as well as local certified destination representatives on the ground.",
  },
];

export default function ToursAndTravelsContent() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [domesticInView, setDomesticInView] = useState(false);
  const [internationalInView, setInternationalInView] = useState(false);
  const [advantageInView, setAdvantageInView] = useState(false);
  const [faqInView, setFaqInView] = useState(false);
  const [formInView, setFormInView] = useState(false);

  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });
  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destinationType: "International Tour",
    preferredDestination: "Dubai / Maldives / Europe",
    travelMonth: "In 1 to 2 Months",
    travelers: "2 Adults (Couple)",
    budget: "Standard / Premium",
    notes: "",
  });

  const domesticRef = useRef<HTMLElement>(null);
  const internationalRef = useRef<HTMLElement>(null);
  const advantageRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeroLoaded(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === domesticRef.current) setDomesticInView(true);
            if (entry.target === internationalRef.current) setInternationalInView(true);
            if (entry.target === advantageRef.current) setAdvantageInView(true);
            if (entry.target === faqRef.current) setFaqInView(true);
            if (entry.target === formRef.current) setFormInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (domesticRef.current) observer.observe(domesticRef.current);
    if (internationalRef.current) observer.observe(internationalRef.current);
    if (advantageRef.current) observer.observe(advantageRef.current);
    if (faqRef.current) observer.observe(faqRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(await sendFormInquiry(e.currentTarget as HTMLFormElement, "Tours And Travels page"))) return;
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-white overflow-hidden">
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

      {/* ================= 1. HERO SECTION ================= */}
      <section className="w-full bg-gradient-to-b from-[#f8fafc] via-white to-white pt-28 sm:pt-36 pb-14 sm:pb-20 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div
              className={`lg:col-span-7 space-y-6 text-center lg:text-left transition-all duration-1000 ease-out transform ${
                heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e52928] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#e52928] animate-ping" />
                Website Content • Tours &amp; Travels Business
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight leading-[1.15]">
                Bespoke Tours &amp; Travels:{" "}
                <span className="text-[#e52928]">Seamless Journeys</span>, Unforgettable Memories
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="ml-2 text-xs font-semibold text-slate-600">
                  Custom Domestic &amp; Global Holidays Curated with Care
                </span>
              </div>

              {/* Exact Text from OM Bhai */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                At <strong className="text-[#0a1e38] font-bold">Umang Career Consultancy</strong>, we believe that traveling should be about creating memories, not managing logistics. Whether you are looking to discover the rich cultural heritage of India or jet off to an exotic global destination, we curate premium holiday experiences tailored perfectly to your style and budget.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                From the moment you dream up a destination to the moment you return home, our team provides comprehensive, end-to-end travel management. We handle the details so you can simply live the experience.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#holiday-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#e52928] hover:bg-[#c9201f] text-white font-bold rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                  <span>Plan Your Dream Holiday</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/919173186109?text=Hello%20Umang%20Career%2C%20I%20would%20like%20to%20plan%20a%20holiday%20tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>WhatsApp Travel Specialists</span>
                </a>
              </div>

              {/* Quick Highlights */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs sm:text-sm font-black text-[#0a1e38]">Incredible India</div>
                  <div className="text-[11px] text-emerald-600 font-bold">Domestic Circuits</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs sm:text-sm font-black text-[#0a1e38]">Global Holidays</div>
                  <div className="text-[11px] text-[#e52928] font-bold">25+ Countries</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs sm:text-sm font-black text-[#0a1e38]">Zero Hassle</div>
                  <div className="text-[11px] text-blue-600 font-bold">Visas &amp; Flights</div>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div
              className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out transform ${
                heroLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="relative w-full max-w-[440px] flex flex-col gap-4 anim-gentle-float">
                {/* Visual Banner Card */}
                <div className="bg-gradient-to-br from-[#0a1e38] via-[#122e54] to-[#0a1e38] text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <span className="text-xs font-bold tracking-widest uppercase bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30">
                      BESPOKE HOLIDAYS
                    </span>
                    <span className="text-xs font-bold text-emerald-400">100% TAILOR-MADE</span>
                  </div>

                  <div className="my-5 space-y-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="text-xs font-semibold text-slate-300">DOMESTIC PACKAGES</div>
                      <div className="text-xs font-black text-white">Rajasthan • Kerala • Himachal • Goa</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="text-xs font-semibold text-slate-300">INTERNATIONAL PACKAGES</div>
                      <div className="text-xs font-black text-[#e52928]">Dubai • Maldives • Vietnam • Europe</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-dashed border-white/20 flex items-center justify-between text-xs text-slate-300">
                    <span>Flights • Hotels • Visas • Transfers</span>
                    <span className="font-bold text-[#22c55e]">Zero Hidden Costs</span>
                  </div>
                </div>

                {/* Sub Callout */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                      Personalized Concierge
                    </span>
                    <h4 className="text-sm font-extrabold text-[#0a1e38]">
                      Speak with our holiday planner
                    </h4>
                  </div>
                  <a
                    href="tel:+919173186109"
                    className="p-3 rounded-xl bg-[#0a1e38] text-white hover:bg-[#e52928] transition-colors shrink-0 shadow-sm"
                    aria-label="Call Umang Travel Desk"
                  >
                    <PhoneIcon />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. EXPLORE INDIA: DOMESTIC TOUR PACKAGES (OM BHAI) ================= */}
      <section ref={domesticRef} className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore India: Incredible Domestic Tour Packages"
            subtitle="Discover the breathtaking landscapes, royal history, and spiritual corners of India with our meticulously planned domestic itineraries. We don't just book hotels; we design immersive journeys."
            inView={domesticInView}
          />

          {/* 5 Popular Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {DOMESTIC_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className="h-full bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#e52928] transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-[#e52928] border border-red-100">
                      {pkg.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{pkg.duration}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors leading-snug">
                    {pkg.title}
                  </h3>

                  <div className="text-xs font-bold text-slate-700 mt-1 mb-3">
                    📍 {pkg.highlights}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {pkg.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-500">Tailored Itinerary</span>
                  <a
                    href="#holiday-form"
                    className="text-[#e52928] hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Request Quote</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Callout Card */}
            <div className="bg-gradient-to-br from-[#0a1e38] to-[#122e54] text-white rounded-3xl p-7 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-red-300 border border-white/15">
                  Have a Custom Destination in Mind?
                </span>
                <h3 className="text-xl font-black mt-4 text-white">
                  Kashmir, Northeast, Coorg or Varanasi?
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We formulate custom itineraries for any Indian state or circuit. Tell us your dates and passenger count.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="#holiday-form"
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                >
                  Custom Domestic Itinerary
                </a>
              </div>
            </div>
          </div>

          {/* End-to-End Domestic Service Checklist */}
          <div className="mt-12 bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h4 className="text-lg font-black text-[#0a1e38] mb-4 text-center sm:text-left">
              End-to-End Domestic Service Includes:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {DOMESTIC_INCLUSIONS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckmarkIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. EXPLORE THE WORLD: INTERNATIONAL PACKAGES (OM BHAI) ================= */}
      <section ref={internationalRef} className="w-full py-16 sm:py-24 bg-slate-50 border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore the World: Premium International Tour Packages"
            subtitle="Ready to stamp your passport? We bridge the gap between you and the world's most sought-after international destinations. We eliminate the stress of foreign travel logistics by managing everything locally and globally."
            inView={internationalInView}
          />

          {/* 6 International Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {INTERNATIONAL_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className="h-full bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0a1e38] transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <VibrantCountryFlag country={pkg.flag} size="sm" variant="badge" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        {pkg.tag}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">{pkg.duration}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors leading-snug">
                    {pkg.title}
                  </h3>

                  <div className="text-xs font-bold text-slate-700 mt-1 mb-3">
                    📍 {pkg.highlights}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {pkg.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-emerald-700">Tourist Visa Included</span>
                  <a
                    href="#holiday-form"
                    className="text-[#e52928] hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Check Rates</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* End-to-End International Service Checklist */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h4 className="text-lg font-black text-[#0a1e38] mb-4 text-center sm:text-left">
              End-to-End International Service Includes:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {INTERNATIONAL_INCLUSIONS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckmarkIcon className="w-4 h-4 text-[#e52928] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. THE UMANG TRAVEL ADVANTAGE (OM BHAI) ================= */}
      <section ref={advantageRef} className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Umang Travel Advantage: True End-to-End Service"
            subtitle="Why do families, couples, and corporate groups trust Umang with their holidays? Because we provide complete peace of mind:"
            inView={advantageInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch">
            {UMANG_ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="h-full bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0a1e38] transition-all duration-300 flex flex-col group transform hover:-translate-y-1.5"
              >
                <div className="flex-1 flex flex-col">
                  <div className="self-start p-3.5 rounded-2xl bg-white border border-slate-100 inline-block mb-6 shadow-xs group-hover:scale-110 transition-transform">
                    {adv.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] group-hover:text-[#e52928] transition-colors leading-snug">
                    {adv.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-left break-words [text-wrap:pretty]">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-bold text-slate-700 flex items-center gap-2">
                  <CheckmarkIcon className="w-4 h-4 text-emerald-600" />
                  <span>Umang Quality Guarantee</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. FREQUENTLY ASKED QUESTIONS ================= */}
      <section ref={faqRef} className="w-full py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions: Tours &amp; Travels"
            subtitle="Everything you need to know about custom packages, visas, meals, and booking procedures"
            inView={faqInView}
          />

          <div className="space-y-4 mt-10">
            {FAQS.map((faq, index) => {
              const isOpen = !!openFaqs[index];
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-[#0a1e38] text-white border-[#0a1e38] shadow-lg"
                      : "bg-[#0a1e38] text-white border-[#0a1e38]/80 hover:bg-[#0e274a]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  >
                    <span className="font-bold text-sm sm:text-base leading-snug pr-2 text-white">
                      {faq.q}
                    </span>
                    <span className="shrink-0">
                      <ChevronDownIcon isOpen={isOpen} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-white/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 6. CALL BAR: YOUR NEXT GREAT ADVENTURE (OM BHAI) ================= */}
      <section className="w-full py-12 sm:py-16 bg-[#e52928] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-block px-3.5 py-1 rounded-md bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-2">
                Your next great adventure is just a conversation away.
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Where do you want to fly next?
              </h3>
              <p className="mt-2 text-white/90 text-sm sm:text-base leading-relaxed">
                Connect with our travel specialists today to get a customized, transparent quote for your dream holiday!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="https://wa.me/919173186109?text=Hello%20Umang%20Travels%2C%20I%20want%20to%20plan%20my%20next%20trip%20to%3A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-[#0a1e38] hover:bg-slate-100 font-black text-base transition-all duration-200 shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-0.5 group"
              >
                <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                <span>WhatsApp Destination</span>
              </a>

              <a
                href="tel:+919173186109"
                className="anim-phone-ring w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0a1e38] hover:bg-[#122846] text-white font-bold text-base transition-all duration-200 shadow-xl flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
              >
                <PhoneIcon />
                <span>Call +91 9173186109</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. HOLIDAY INQUIRY BOOKING FORM ================= */}
      <section
        id="holiday-form"
        ref={formRef}
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Request a Custom Holiday Quote"
            subtitle="Domestic Tour • International Package • Corporate & Family Groups"
            inView={formInView}
          />

          <div
            className={`mt-10 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl transition-all duration-700 ease-out transform ${
              formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckmarkIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a1e38]">Holiday Request Received!</h3>
                <p className="mt-2 text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thank you, <strong>{formData.name}</strong>. Our holiday concierge will contact you on <strong>{formData.phone}</strong> with a customized itinerary and transparent fare quote for {formData.preferredDestination}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 inline-flex px-6 py-2.5 rounded-lg bg-[#e52928] text-white font-semibold text-sm hover:bg-[#c9201f] transition-colors"
                >
                  Submit Another Holiday Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Package Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Package Category *
                    </label>
                    <select
                      value={formData.destinationType}
                      onChange={(e) => setFormData({ ...formData, destinationType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="International Tour">International Holiday Tour</option>
                      <option value="Domestic Tour (India)">Domestic Holiday (Incredible India)</option>
                      <option value="Honeymoon Special">Honeymoon Special Package</option>
                      <option value="Corporate / Group Tour">Corporate / Family Group Tour</option>
                    </select>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Target Destination *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dubai, Maldives, Kerala, Europe"
                      value={formData.preferredDestination}
                      onChange={(e) => setFormData({ ...formData, preferredDestination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Travel Window */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Travel Month / Dates *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nov 2026 / Diwali / Dec"
                      value={formData.travelMonth}
                      onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>

                  {/* Travelers Count */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Travelers Count
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Adults, 1 Child"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferences (Hotel Category, Sightseeing, Jain/Veg Food)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your preferred hotel rating (4★/5★), pure veg/Jain food requirements, specific attractions you want to visit..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#e52928] focus:ring-2 focus:ring-red-100 text-slate-800 text-sm outline-hidden transition-all resize-none"
                  />
                </div>

                {/* Submit & Contact Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#e52928] hover:bg-[#c9201f] text-white font-extrabold text-base shadow-lg shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Request Holiday Quote
                  </button>

                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <a
                      href="https://wa.me/919173186109?text=Hello%20Umang%20Travels%2C%20I%20would%20like%20a%20tour%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-current" />
                      <span>WhatsApp Specialist</span>
                    </a>

                    <a
                      href="tel:+919712610086"
                      className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0a1e38] hover:bg-[#122846] text-white font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <PhoneIcon />
                      <span>Call +91 9712610086</span>
                    </a>
                  </div>
                </div>

                {/* Office Details */}
                <div className="pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-500">
                  <div>
                    <strong className="text-slate-700 font-semibold block mb-0.5">Visit Our Vadodara Office:</strong>
                    First Floor 25 Shree Siddeshwar Plaza, Beside Super Bakery, New VIP road, Vadodara Gujarat. 390019
                  </div>
                  <div>
                    <strong className="text-slate-700 font-semibold block mb-0.5">Direct Enquiries:</strong>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a href="tel:+919173186109" className="text-[#0a1e38] font-bold hover:underline">+91 9173186109</a>
                      <span>•</span>
                      <a href="tel:+919712610086" className="text-[#0a1e38] font-bold hover:underline">+91 9712610086</a>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      <a href="mailto:umangcareer2022@gmail.com" className="hover:underline">umangcareer2022@gmail.com</a> | <a href="mailto:umangcareer2026@gmail.com" className="hover:underline">umangcareer2026@gmail.com</a>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
