"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${
        isOpen ? "transform rotate-180 text-[#e52928]" : "text-slate-400"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* Course Icons (Green stroke design matching agency identity) */
function BusinessIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ComputerIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function EngineeringIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function MedicineIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v6m-3-3h6" />
    </svg>
  );
}

function LawIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l9-4 9 4M4 10h16M4 14h16M4 18h16" />
    </svg>
  );
}

function DataAiIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function ArchitectureIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

/* Season Weather Icons */
function SunIcon() {
  return (
    <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function SnowIcon() {
  return (
    <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m0-18l3 3m-3-3l-3 3m0 12l3 3m-3-3l-3-3M3 12h18m-18 0l3 3m-3-3l3-3m12 0l3 3m-3-3l-3 3" />
    </svg>
  );
}

function FlowerIcon() {
  return (
    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 2a4 4 0 00-4 4c0 1.5.8 2.8 2 3.5-1.2.7-2 2-2 3.5a4 4 0 008 0c0-1.5-.8-2.8-2-3.5 1.2-.7 2-2 2-3.5a4 4 0 00-4-4z" />
    </svg>
  );
}


/* -------------------------------------------------------------
   REUSABLE SECTION HEADER WITH STACKED DOUBLE DASHES & ANIMATION
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
      className={`text-center mb-10 sm:mb-12 transition-all duration-700 ease-out transform ${
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
            isDark ? "text-[#22c55e]" : "text-[#0a1e38]"
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
          className={`mt-2.5 text-base sm:text-lg font-semibold max-w-3xl mx-auto ${
            isDark ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function PolandStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Computer Science & IT",
    level: "Bachelor's Degree",
    intake: "September / October 2026",
    cityPreference: "Warsaw",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  /* -------------------------------------------------------------
     DATA STRUCTURES
  ------------------------------------------------------------- */
  const topCourses = [
    {
      title: "Business & Management",
      icon: <BusinessIcon />,
      desc: "Internationally accredited programs in International Business, Supply Chain, Strategic Leadership, and Finance in Central Europe's corporate hub.",
      popularSpecializations: ["International Business", "Project Management", "Marketing & E-Commerce", "Finance & Accounting"],
    },
    {
      title: "Computer Science & IT",
      icon: <ComputerIcon />,
      desc: "World-class coding talent development with state-of-the-art labs, algorithms, software engineering, and direct ties to Warsaw's thriving tech ecosystem.",
      popularSpecializations: ["Software Engineering", "Cybersecurity", "Cloud Computing", "Web & Mobile Systems"],
    },
    {
      title: "Engineering & Technology",
      icon: <EngineeringIcon />,
      desc: "Renowned polytechnic universities offering rigorous degrees in mechanical, civil, electrical, aerospace, and mechatronic engineering.",
      popularSpecializations: ["Mechanical Engineering", "Civil Engineering", "Robotics & Automation", "Electrical Power Systems"],
    },
    {
      title: "Medicine & Health Sciences",
      icon: <MedicineIcon />,
      desc: "Prestigious 6-year MD, dentistry, and pharmacy programs fully taught in English, recognized across the EU, WHO, and USMLE guidelines.",
      popularSpecializations: ["General Medicine (MD)", "Dentistry (DDS)", "Pharmacy", "Biomedical Sciences"],
    },
    {
      title: "Law & Legal Studies",
      icon: <LawIcon />,
      desc: "European and International Law programs focusing on human rights, cross-border commercial arbitration, and EU regulatory frameworks.",
      popularSpecializations: ["International Business Law", "EU Law", "Intellectual Property", "Diplomacy & Public Policy"],
    },
    {
      title: "Data Science & Artificial Intelligence",
      icon: <DataAiIcon />,
      desc: "Cutting-edge computational statistics, big data architectures, neural networks, and generative AI research across technical institutes.",
      popularSpecializations: ["Machine Learning", "Big Data Analytics", "Deep Learning", "Business Intelligence"],
    },
    {
      title: "Architecture & Design",
      icon: <ArchitectureIcon />,
      desc: "Mastery of sustainable urban design, restoration of European heritage, and futuristic computational architectural modeling.",
      popularSpecializations: ["Urban Planning", "Sustainable Architecture", "Interior Architecture", "Landscape Design"],
    },
  ];

  const whyStudyPoland = [
    {
      title: "EU-Recognised Education",
      desc: "Degrees follow the Bologna Process (ECTS credits) and are globally recognized, enabling seamless mobility across all 27 EU nations.",
      badge: "Bologna Standard",
    },
    {
      title: "English-Taught Degrees",
      desc: "Over 700+ undergraduate and graduate programs taught entirely in English without requiring initial Polish proficiency.",
      badge: "700+ Programs",
    },
    {
      title: "Affordable Tuition Fees",
      desc: "Quality European degrees with annual tuition fees starting from just €1,000 to €3,500 for most public university programs.",
      badge: "From €1,000/yr",
    },
    {
      title: "Accessible Cost of Living",
      desc: "Student expenses in Poland are among the most economical in Europe, averaging €400 to €750/month including accommodation.",
      badge: "Low Living Cost",
    },
    {
      title: "Schengen Visa Mobility",
      desc: "A Polish student visa and Temporary Residence Card (Karta Pobytu) grants visa-free travel across all 29 Schengen member states.",
      badge: "29 Schengen Countries",
    },
    {
      title: "Right to Work During Studies",
      desc: "Full-time international degree students can work up to 20 hours/week during term time and 40 hours/week during breaks without extra permits.",
      badge: "Work Part-Time",
    },
    {
      title: "Booming Tech & Business Hub",
      desc: "Home to Google Campus Warsaw, Microsoft, Amazon, Intel, and thousands of tech startups offering internships and high-paying jobs.",
      badge: "Corporate Silicon Hub",
    },
    {
      title: "Post-Study Stay Back Options",
      desc: "Graduates from Polish institutions are eligible for a 9-month temporary residence permit specifically to search for employment or launch a business.",
      badge: "9-Mo Job Search TRC",
    },
  ];

  const universities = [
    {
      name: "University of Warsaw (UW)",
      city: "Warsaw",
      tag: "Ranked #1 University in Poland",
      specialty: "Humanities, Social Sciences, Computer Science, Economics",
      ranking: "QS Top Polish University",
    },
    {
      name: "Warsaw University of Technology (WUT)",
      city: "Warsaw",
      tag: "Top Technical University",
      specialty: "Civil, Mechanical, Computer Science, Aerospace Engineering",
      ranking: "Premier Engineering",
    },
    {
      name: "Jagiellonian University",
      city: "Krakow",
      tag: "Founded 1364 (Historic Prestige)",
      specialty: "Medicine, Law, International Relations, Sciences",
      ranking: "Oldest in Poland",
    },
    {
      name: "AGH University of Science & Technology",
      city: "Krakow",
      tag: "Renowned Technical Institute",
      specialty: "Mining, Metallurgy, AI, Data Science, Telecommunications",
      ranking: "High Industry Placement",
    },
    {
      name: "Adam Mickiewicz University",
      city: "Poznań",
      tag: "Major Research University",
      specialty: "Languages, Law, Natural Sciences, Environmental Science",
      ranking: "Top Academic Hub",
    },
    {
      name: "Wrocław University of Science & Technology",
      city: "Wrocław",
      tag: "Innovation & Polytech Leader",
      specialty: "Information Systems, Electronics, Nanotechnology",
      ranking: "Silicon Hub Partner",
    },
    {
      name: "Gdańsk University of Technology",
      city: "Gdańsk",
      tag: "Baltic Coastal Excellence",
      specialty: "Naval Architecture, Ocean Engineering, Green Chemistry",
      ranking: "European Research University",
    },
    {
      name: "Poznań University of Technology",
      city: "Poznań",
      tag: "European Universities Alliance (EUNICE)",
      specialty: "Logistics, Mechanical Systems, Software Engineering",
      ranking: "High Employability",
    },
    {
      name: "University of Wrocław",
      city: "Wrocław",
      tag: "9 Nobel Laureates Heritage",
      specialty: "Physics, Mathematics, Biotechnology, Global Law",
      ranking: "Research Excellence",
    },
    {
      name: "Lodz University of Technology",
      city: "Łódź",
      tag: "Industrial & Creative Heart",
      specialty: "Textile Engineering, Biomedical Engineering, Mechatronics",
      ranking: "Innovation Leader",
    },
  ];

  const cities = [
    {
      name: "WARSAW",
      polishName: "Warszawa",
      tagline: "Capital & Financial Metropolis",
      desc: "Poland's bustling capital and a major European center for education, global headquarters, finance, and technology. Vibrant multicultural scene with over 200,000 students.",
      vibe: "Dynamic, Cosmopolitan & Tech-Driven",
      costRange: "€450 – €750/mo",
    },
    {
      name: "KRAKOW",
      polishName: "Kraków",
      tagline: "Historic Heart & Student Cultural Hub",
      desc: "A breathtaking UNESCO World Heritage historic city with numerous ancient universities, lively cafe-culture squares, and a massive international student community.",
      vibe: "Historic, Artistic & Student-Centric",
      costRange: "€400 – €650/mo",
    },
    {
      name: "WROCŁAW",
      polishName: "Wrocław",
      tagline: "Silicon Valley of Poland & City of Bridges",
      desc: "Known as the city of 100+ bridges and islands, Wrocław boasts a powerhouse IT sector, major research centers, and a flourishing start-up environment.",
      vibe: "Youthful, High-Tech & Picturesque",
      costRange: "€380 – €620/mo",
    },
    {
      name: "POZNAŃ",
      polishName: "Poznań",
      tagline: "Trade, Commerce & Academic Powerhouse",
      desc: "An important academic and commercial center halfway between Warsaw and Berlin, famous for international trade fairs, green lakes, and modern colleges.",
      vibe: "Entrepreneurial, Organized & Friendly",
      costRange: "€350 – €600/mo",
    },
    {
      name: "ŁÓDŹ",
      polishName: "Łódź",
      tagline: "Creative Arts, Film & Post-Industrial Rebirth",
      desc: "Poland's third-largest city, transformed into a hip creative epicenter celebrated for its world-renowned National Film School, design, and budget student housing.",
      vibe: "Creative, Affordable & Industrial Chic",
      costRange: "€320 – €550/mo",
    },
    {
      name: "GDAŃSK",
      polishName: "Gdańsk",
      tagline: "Baltic Maritime Gateway & Tri-City Charm",
      desc: "A scenic coastal city on the Baltic Sea, part of the Tri-City metropolitan area. Known for maritime trade, high quality of life, clean sea air, and green technology.",
      vibe: "Coastal, Fresh & International",
      costRange: "€380 – €630/mo",
    },
  ];

  const livingCosts = [
    {
      item: "Accommodation",
      cost: "€200 – €400+",
      desc: "Dormitories from €150–€220/mo; shared private apartments from €250–€380/mo.",
      icon: "home",
    },
    {
      item: "Food & Groceries",
      cost: "€100 – €200+",
      desc: "Fresh produce from local markets (Biedronka, Lidl) & affordable campus cafeterias.",
      icon: "food",
    },
    {
      item: "Transportation",
      cost: "€15 – €25+",
      desc: "Students receive 50% discount on all Polish public buses, trams & regional trains.",
      icon: "transport",
    },
    {
      item: "Internet & Mobile",
      cost: "€10 – €20+",
      desc: "Ultra-fast European 5G mobile packages and high-speed fiber broadband.",
      icon: "phone",
    },
    {
      item: "Utilities (Gas, Elec, Water)",
      cost: "€50 – €100+",
      desc: "Often included in student dorm rates; divided among flatmates in private rentals.",
      icon: "utilities",
    },
    {
      item: "Personal & Leisure",
      cost: "€50 – €150+",
      desc: "Cinemas, student sports memberships, European weekend trips & cafes.",
      icon: "leisure",
    },
  ];

  const weatherSeasons = [
    {
      season: "Summer",
      polish: "Lato",
      temp: "18°C – 30°C",
      months: "June – August",
      icon: <SunIcon />,
      desc: "Pleasantly warm and sunny across Poland. Perfect for outdoor riverbank festivals in Warsaw, lakes in Masuria, and Baltic beach trips in Gdańsk.",
      bgClass: "from-amber-500/10 to-orange-500/10 border-amber-200",
    },
    {
      season: "Autumn",
      polish: "Jesień",
      temp: "5°C – 17°C",
      months: "September – November",
      icon: <LeafIcon />,
      desc: "Known as the Golden Polish Autumn ('Złota Polska Jesień'). Foliage turns vibrant red and gold with crisp, pleasant academic kickoff weather.",
      bgClass: "from-orange-500/10 to-amber-600/10 border-orange-200",
    },
    {
      season: "Winter",
      polish: "Zima",
      temp: "-6°C – 3°C",
      months: "December – February",
      icon: <SnowIcon />,
      desc: "Magical fairy-tale snowy landscapes with world-famous Christmas markets, ice-skating, and budget ski resorts in Zakopane.",
      bgClass: "from-sky-500/10 to-blue-500/10 border-sky-200",
    },
    {
      season: "Spring",
      polish: "Wiosna",
      temp: "5°C – 15°C",
      months: "March – May",
      icon: <FlowerIcon />,
      desc: "Nature blooms across botanical gardens and campus parks. Temperatures rise steadily as student outdoor events and sports resume.",
      bgClass: "from-emerald-500/10 to-teal-500/10 border-emerald-200",
    },
  ];

  const faqs = [
    {
      q: "Can I work while studying in Poland?",
      a: "Yes. International full-time students holding a Polish student visa and Temporary Residence Card (Karta Pobytu) are legally permitted to work without needing a separate work permit. Students typically work part-time (up to 20 hours per week) during academic semesters and full-time (up to 40 hours per week) during scheduled holiday breaks.",
    },
    {
      q: "What is the medium of instruction for international students?",
      a: "Many Polish universities offer comprehensive degree programs fully taught in English across bachelor's, master's, and doctoral levels. Proficiency can generally be proven through recognized tests like IELTS, TOEFL, Duolingo, or in select cases an English Medium of Instruction (MOI) certificate from previous studies.",
    },
    {
      q: "How long does it take to get a student visa for Poland?",
      a: "The Polish National D-Type Student Visa processing typically takes between 15 to 30 working days from the date of submission at the Polish Embassy or VFS Global center. However, due to seasonal appointment demand for February and September intakes, we strongly advise starting your documentation and appointment booking 2 to 3 months in advance.",
    },
    {
      q: "Can I stay in Poland after graduation?",
      a: "Yes! Full-time graduates from accredited Polish higher-education institutions can apply for a 9-month Temporary Residence Permit (Karta Pobytu) specifically intended for job seeking or business establishment. Once you secure qualifying employment, you can transition smoothly into a standard work permit or EU Blue Card.",
    },
    {
      q: "Are scholarships available in Poland?",
      a: "Yes. Several scholarship opportunities exist, including the Polish National Agency for Academic Exchange (NAWA) Banach Scholarship, the Visegrad Scholarship Program, EU Erasmus+ grants, and merit-based tuition fee reductions offered directly by individual Polish universities for high-achieving international applicants.",
    },
    {
      q: "Is Poland suitable for international students?",
      a: "Poland is one of Europe's safest, most affordable, and most dynamic study destinations. It combines EU-standard high-quality education, globally recognized ECTS degrees, ultra-low living costs compared with Western Europe, vibrant student cities, and visa-free travel throughout all 29 Schengen countries.",
    },
    {
      q: "What are the main intake periods in Poland?",
      a: "Polish universities have two primary intakes: the Autumn/Winter Intake (starting September/October), which offers the widest program selection, and the Spring/Summer Intake (starting February), which is ideal for master's and technical engineering programs.",
    },
    {
      q: "Do I need to learn Polish to study and live in Poland?",
      a: "While your academic courses will be taught 100% in English, learning basic day-to-day Polish phrases is helpful and welcomed by locals. Most youth, university staff, and tech professionals speak fluent English, especially in major student centers like Warsaw, Krakow, and Wrocław.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Global Embedded Animations matching Services Theme */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gentleFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            .anim-gentle-float {
              animation: gentleFloat 4s ease-in-out infinite;
            }
            @keyframes phoneRing {
              0%, 100% { transform: rotate(0deg); }
              20% { transform: rotate(15deg); }
              40% { transform: rotate(-15deg); }
              60% { transform: rotate(10deg); }
              80% { transform: rotate(-10deg); }
            }
            .anim-phone-ring:hover svg {
              animation: phoneRing 0.8s ease-in-out;
            }
          `,
        }}
      />

      {/* -------------------------------------------------------------
          1. HERO SECTION (POLAND FLAG RIBBONS + METRICS + LANDMARK)
      ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1e38] via-[#0d284d] to-[#0a1e38] text-white pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Subtle Decorative Background Circles & Polish Crimson Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e52928]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#22c55e]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <Link href="/study-abroad" className="hover:text-white transition-colors">
              Study Abroad
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-[#22c55e] font-semibold">Poland</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e52928] animate-ping" />
                <span className="text-slate-100 font-semibold tracking-wide">
                  Central European EU & Schengen Member State
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#e52928]">Poland</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#22c55e] mt-2">
                  Affordable European Degrees & Thriving Tech Hubs
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                Poland is a Central European country and a proud member of the European Union and Schengen Area. It offers international students a world-class academic environment, high-standard English-taught programs, low tuition fees starting from €1,000/year, and unbeatable living affordability.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">€1,000+</div>
                  <div className="text-xs text-slate-300 font-medium">Annual Tuition</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#22c55e]">29 Nations</div>
                  <div className="text-xs text-slate-300 font-medium">Schengen Access</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#e52928]">20 Hrs/Wk</div>
                  <div className="text-xs text-slate-300 font-medium">Work During Study</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">9 Months</div>
                  <div className="text-xs text-slate-300 font-medium">Post-Study Visa</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#consultation"
                  className="px-7 py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#c9201f] text-white shadow-lg shadow-red-900/30 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  Apply for Poland 2026
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all text-center"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual (Student with Poland Red & White Ribbons) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md group anim-gentle-float">
                <Image
                  src="/poland-hero.png"
                  alt="International Graduate Student Studying in Poland with Polish White & Red Flags"
                  fill
                  className="object-contain p-2 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Micro Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 shadow-xl flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e52928] to-[#991b1b] flex items-center justify-center text-white font-bold text-lg shadow-md">
                    PL
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold flex items-center gap-1.5">
                      <span>Central European EU Member</span>
                      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    </div>
                    <p className="text-slate-300 text-[11px] leading-tight mt-0.5">
                      European Union & Schengen Area • ECTS Framework
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. ABOUT POLAND (KEY HIGHLIGHTS & LANDMARK VISUAL)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Landmark Visual */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/destinations/poland-landmark.jpg"
                  alt="Warsaw Palace of Culture and Science Illuminated at Night in Poland"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#e52928] text-white text-xs font-bold rounded-md uppercase tracking-wider">
                    Warsaw, Poland
                  </span>
                  <h3 className="text-xl font-bold mt-2">Palace of Culture & Science</h3>
                  <p className="text-slate-200 text-xs mt-1">
                    Central Europe&apos;s fastest growing financial & technology capital
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
                <span>Official Language: Polish (Courses in English)</span>
                <span>Currency: Polish Złoty (PLN / zł)</span>
              </div>
            </div>

            {/* Right Information Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-[#e52928] text-xs font-bold tracking-wider uppercase">
                Gateway to Europe
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                About Poland & Its Higher Education System
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Poland is a Central European country and an influential member of both the European Union and the Schengen Area. It offers international students a prestigious European study environment, blending historic traditions dating back to the 14th century with state-of-the-art technological research.
              </p>

              {/* 9 Core Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Located in Central Europe with excellent connectivity",
                  "Proud Member of the European Union & Schengen Area",
                  "Diverse higher-education options across 400+ institutions",
                  "Wide selection of programs taught 100% in English",
                  "Relatively affordable study options for international scholars",
                  "Competitive living costs compared with Western European nations",
                  "Four distinct, picturesque seasons throughout the year",
                  "Fast-growing technology, gaming, and multinational corporate hub",
                  "Bologna Process degrees recognized across EU, WHO & USMLE",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. TOP COURSES IN POLAND
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Courses in Poland for International Students" subtitle="Polish universities are globally recognized for excellence in technical disciplines, medical degrees, and international commerce, all delivered in English." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-[#22c55e]/40 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1e38] group-hover:text-[#e52928] transition-colors mb-2.5">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {course.desc}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Popular Specializations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.popularSpecializations.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. WHY STUDY IN POLAND?
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Study in Poland?" subtitle="Poland provides students with European higher-education opportunities across a wide range of academic disciplines, pairing high academic standards with unmatched affordability." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyPoland.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-[#e52928]/10 text-[#e52928] font-bold text-xs mb-3">
                    {item.badge}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1e38] mb-2 group-hover:text-[#22c55e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Strip */}
          <div className="mt-12 bg-gradient-to-r from-[#0a1e38] to-[#12315c] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-xl font-bold text-white">Compare Polish Universities with Umang Experts</h4>
              <p className="text-sm text-slate-300">
                We assess your academic background, preferred language, budget, and long-term career goals.
              </p>
            </div>
            <a href="tel:+919173186109" className="anim-phone-ring px-6 py-3 rounded-xl bg-[#22c55e] hover:bg-[#1ea750] text-white font-bold text-sm shadow-md transition-all shrink-0"
            >
              Call +91 91731 86109
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. POPULAR STUDENT CITIES IN POLAND
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Popular Student Cities in Poland" subtitle="Each Polish city offers a distinctive blend of vibrant university culture, affordable student housing, and rich European heritage." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 uppercase">
                      {city.polishName}
                    </span>
                    <span className="text-xs font-bold text-[#e52928] bg-red-50 px-2.5 py-1 rounded-md">
                      {city.costRange}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0a1e38] mb-1">{city.name}</h3>
                  <div className="text-xs font-semibold text-[#22c55e] mb-3">
                    {city.tagline}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {city.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Vibe & Lifestyle:</span>
                  <span className="font-semibold text-slate-800">{city.vibe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. UNIVERSITIES & INSTITUTIONS IN POLAND
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Universities & Institutions in Poland" subtitle="Umang Career Consultancy can help students compare universities according to their academic profile, preferred course, budget, location and career goals." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {universities.map((uni, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#22c55e] hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a1e38] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#0a1e38] truncate">
                      {uni.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded-full">
                      <svg className="w-3.5 h-3.5 inline mr-1 text-[#e52928] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>{uni.city}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#e52928] mb-1.5">
                    {uni.tag} • {uni.ranking}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-700">Specializations:</span> {uni.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. TUITION FEES & LIVING COSTS BREAKDOWN
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Tuition Fees Table */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold tracking-wider uppercase">
                Transparent Expenses
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Poland Tuition Fees
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tuition fees vary according to the university, program, language of instruction and level of study. Below are indicative annual ranges for international students.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0a1e38] text-white text-xs uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="px-5 py-4">Study Level</th>
                        <th className="px-5 py-4">Indicative Annual Tuition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Bachelor&apos;s Degree</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">€1,000 – €7,500+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Master&apos;s Degree</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">€1,500 – €9,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Diploma / Professional Programs</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">€1,550 – €4,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">PhD / Doctoral Studies</td>
                        <td className="px-5 py-4 text-emerald-600 font-semibold">
                          Varies (Often funded / salaried via doctoral schools)
                        </td>
                      </tr>
                      <tr className="bg-slate-50/80">
                        <td className="px-5 py-3.5 font-bold text-slate-600 text-xs">Primary Intakes</td>
                        <td className="px-5 py-3.5 font-bold text-[#0a1e38] text-xs">
                          February (Spring) & September / October (Autumn)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                * Note: Exact fees should be confirmed with the selected university and program. Medical degrees (MD) typically range higher (€10,000 – €14,000/yr).
              </p>
            </div>

            {/* Right: Monthly Cost of Living */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-[#e52928] text-xs font-bold tracking-wider uppercase">
                Student Budgeting
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Monthly Cost of Living
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Living costs depend on the city, accommodation and personal lifestyle. Warsaw and Krakow may have slightly higher expenses than smaller student towns like Łódź or Poznań.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {livingCosts.map((cost, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-[#e52928] flex items-center justify-center shrink-0"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                      <span className="text-sm font-extrabold text-[#e52928]">{cost.cost}</span>
                    </div>
                    <div className="text-xs font-bold text-[#0a1e38] mb-1">{cost.item}</div>
                    <p className="text-[11px] text-slate-500 leading-snug">{cost.desc}</p>
                  </div>
                ))}
              </div>

              {/* Total Estimated Monthly Expense Card */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                    Estimated Total Monthly Budget
                  </div>
                  <div className="text-xs text-emerald-700 mt-0.5">
                    Covers accommodation, food, transport & personal leisure
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-700">
                  €425 – €895+ <span className="text-xs font-medium text-emerald-600">/ month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          8. WEATHER IN POLAND (FOUR DISTINCT SEASONS)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Weather in Poland: Four Distinct Seasons" subtitle="International students enjoy the full European seasonal experience, from golden autumn leaves to magical snowy winters and sun-drenched summers." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherSeasons.map((season, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-b ${season.bgClass} border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-xs">{season.icon}</div>
                    <span className="text-xs font-bold text-slate-500 uppercase">{season.months}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {season.polish}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0a1e38] mb-1">{season.season}</h3>
                  <div className="text-lg font-black text-[#e52928] mb-3">{season.temp}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{season.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 text-xs text-slate-400">
            * Note: Temperatures vary by geographic region (Baltic coast, central plains, and southern Tatra mountains).
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          9. 6-STEP ADMISSION & POLISH VISA ROADMAP
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Your 6-Step Admission & Poland Student Visa Roadmap" subtitle="Umang Career Consultancy guides you through every milestone, from credential verification to your Temporary Residence Card (Karta Pobytu)." variant="dark" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Course Selection & Eligibility Check",
                desc: "We analyze your academic marks, English proficiency (IELTS/MOI), budget, and career goals to select the best university programs in Poland.",
              },
              {
                step: "02",
                title: "Document Legalization & Apostille",
                desc: "Assistance with MEA apostille, document translation into Polish (where required), and university portal submissions.",
              },
              {
                step: "03",
                title: "University Acceptance Letter (Zaświadczenie)",
                desc: "Receipt of your official conditional or unconditional acceptance letter confirming your enrollment and tuition payment details.",
              },
              {
                step: "04",
                title: "Financial Proof & Health Insurance",
                desc: "Arranging compliant bank balance statements, living fund proof, student accommodation certificates, and Schengen travel medical insurance.",
              },
              {
                step: "05",
                title: "National D-Type Student Visa Filing",
                desc: "Appointment booking at the Polish Embassy or VFS center, thorough file audit, and visa interview preparation.",
              },
              {
                step: "06",
                title: "Pre-Departure & Residence Card (TRC)",
                desc: "Briefing on student life, airport pickup guidance, student dorm check-in, and guidance for your Polish Temporary Residence Card (Karta Pobytu).",
              },
            ].map((stepItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#22c55e]/50 backdrop-blur-sm transition-all duration-300"
              >
                <div className="text-3xl font-black text-[#22c55e] mb-2">{stepItem.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{stepItem.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          10. FREQUENTLY ASKED QUESTIONS (FAQS)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions About Studying in Poland" subtitle="Clear answers to the most common queries regarding visas, work rights, medium of instruction, and post-study opportunities." />

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base text-[#0a1e38] focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDownIcon isOpen={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          11. CONSULTATION FORM & CONTACT CALLOUT
      ------------------------------------------------------------- */}
      <section id="consultation" className="py-16 md:py-24 bg-slate-100 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left CTA Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0a1e38] to-[#123661] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-md bg-[#e52928] text-white text-xs font-bold uppercase tracking-wider">
                  Start Your Journey
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Start Your Study Journey in Poland
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Get personalized guidance for course selection, university applications, documentation, apostille legalization, and your Poland student visa.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>100% Transparent Fee Structure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Direct Polish University Partnerships</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Comprehensive VFS Visa File Preparation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Pre-departure & Dormitory Guidance</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-xs text-slate-300">Talk to Umang Career Consultancy Today</div>
                <a href="tel:+919173186109" className="anim-phone-ring text-lg font-bold text-[#22c55e] hover:underline flex items-center gap-2"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-[#22c55e] rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></div>
                  <h4 className="text-2xl font-bold text-[#0a1e38]">Thank You!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Your Poland study abroad inquiry has been received. Our European education specialist will contact you at {formData.phone || "your number"} shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#0a1e38] text-white text-xs font-bold hover:bg-[#123661] transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-xl font-bold text-[#0a1e38] mb-1">
                    Book Free Poland Consultation
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Fill in your details below and our counselor will evaluate your eligibility within 24 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Study Level
                      </label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData((prev) => ({ ...prev, level: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                      >
                        <option>Bachelor&apos;s Degree (3-4 Years)</option>
                        <option>Master&apos;s Degree (1.5-2 Years)</option>
                        <option>Medicine / Healthcare (6-Year MD)</option>
                        <option>PhD / Doctoral Studies</option>
                        <option>Professional Diploma</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Course Area
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData((prev) => ({ ...prev, course: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                      >
                        <option>Computer Science & IT</option>
                        <option>Business & Management</option>
                        <option>Engineering & Technology</option>
                        <option>Medicine & Health Sciences</option>
                        <option>Law & Legal Studies</option>
                        <option>Data Science & AI</option>
                        <option>Architecture & Design</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred City
                      </label>
                      <select
                        value={formData.cityPreference}
                        onChange={(e) => setFormData((prev) => ({ ...prev, cityPreference: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                      >
                        <option>Warsaw (Capital)</option>
                        <option>Krakow (Historic)</option>
                        <option>Wrocław (Tech Hub)</option>
                        <option>Poznań (Trade & Commerce)</option>
                        <option>Łódź (Creative & Budget)</option>
                        <option>Gdańsk (Coastal Maritime)</option>
                        <option>Open to Recommendations</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Intake
                    </label>
                    <select
                      value={formData.intake}
                      onChange={(e) => setFormData((prev) => ({ ...prev, intake: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent bg-white"
                    >
                      <option>September / October 2026 (Major Intake)</option>
                      <option>February 2027 (Spring Intake)</option>
                      <option>September 2027</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Any questions or specific requirements?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="e.g. Do I qualify for English Medium of Instruction waiver? Tell me about scholarships."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#ca2221] text-white shadow-lg shadow-red-900/20 transition-all text-sm uppercase tracking-wider"
                  >
                    Submit Free Poland Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
