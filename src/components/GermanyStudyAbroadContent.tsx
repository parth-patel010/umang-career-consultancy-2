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

function AiIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function AutomotiveIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 13l2-5h14l2 5M3 13h18M3 13v5h2m16-5v5h-2M5 8l2-5h10l2 5" />
    </svg>
  );
}

function ElectricalIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ScienceIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}

function RenewableIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
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

export default function GermanyStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Computer Science & IT",
    level: "Master's Degree (Consecutive)",
    intake: "Winter Semester 2026/27 (Major)",
    cityPreference: "Munich",
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
      title: "Computer Science & IT",
      icon: <ComputerIcon />,
      desc: "Top European tech education with elite research in algorithms, distributed systems, cybersecurity, and direct industry integration in Munich and Berlin.",
      popularSpecializations: ["Software Engineering", "Cybersecurity", "Cloud & Distributed Systems", "Human-Computer Interaction"],
    },
    {
      title: "Engineering & Technology",
      icon: <EngineeringIcon />,
      desc: "World-famous German engineering rigor recognized globally under the Washington Accord across TU9 polytechnics and applied universities.",
      popularSpecializations: ["Industrial Engineering", "Process Engineering", "Robotics & Automation", "Materials Science"],
    },
    {
      title: "Artificial Intelligence & Data Science",
      icon: <AiIcon />,
      desc: "Cutting-edge machine learning, computational neuroscience, and big data systems supported by federal AI research clusters and Cyber Valley.",
      popularSpecializations: ["Machine Learning", "Deep Learning", "Data Analytics & Big Data", "Autonomous Systems"],
    },
    {
      title: "Business & Management",
      icon: <BusinessIcon />,
      desc: "Equis/AACSB accredited degrees in international management, supply chain, and finance located in Europe's most powerful manufacturing and trading economy.",
      popularSpecializations: ["International Management", "Supply Chain & Logistics", "Finance & Accounting", "Innovation & Entrepreneurship"],
    },
    {
      title: "Mechanical & Automotive Engineering",
      icon: <AutomotiveIcon />,
      desc: "Home to the automotive pioneers: BMW, Mercedes-Benz, Porsche, Volkswagen, and Audi. Leading programs in EV powertrain, aerodynamics, and lightweight design.",
      popularSpecializations: ["Automotive Systems", "Thermal & Fluid Dynamics", "Precision Mechatronics", "Electric Mobility (EV)"],
    },
    {
      title: "Electrical Engineering",
      icon: <ElectricalIcon />,
      desc: "Pioneering microelectronics, semiconductor manufacturing (Silicon Saxony), telecommunications, and smart electrical grids.",
      popularSpecializations: ["Power Systems & Smart Grids", "Embedded Systems", "Semiconductor Tech", "Communications Engineering"],
    },
    {
      title: "Natural Sciences",
      icon: <ScienceIcon />,
      desc: "Nobel Prize-winning heritage across physics, chemistry, and molecular biology with direct access to Max Planck and Helmholtz institutes.",
      popularSpecializations: ["Applied Physics", "Chemical Biology", "Nanotechnology", "Mathematics & Modeling"],
    },
    {
      title: "Renewable Energy & Environmental Sciences",
      icon: <RenewableIcon />,
      desc: "Germany leads Europe's Energiewende (energy transition), offering elite degrees in wind power, solar photovoltaics, and sustainable resource management.",
      popularSpecializations: ["Solar & Wind Energy", "Sustainable Urban Systems", "Environmental Engineering", "Circular Economy"],
    },
    {
      title: "Medicine & Life Sciences",
      icon: <MedicineIcon />,
      desc: "Rigorous medical state examination (Staatsexamen) pathways and English-taught Master's in molecular medicine, pharmacology, and bioinformatics.",
      popularSpecializations: ["Molecular Medicine", "Biomedical Sciences", "Pharmacology & Drug Discovery", "Bioinformatics"],
    },
  ];

  const whyStudyGermany = [
    {
      title: "Tuition-Free Public Universities",
      desc: "Most public universities charge €0 tuition for undergraduate and consecutive master's degrees, requiring only a modest semester contribution.",
      badge: "€0 Tuition",
    },
    {
      title: "TU9 & Elite Research Hubs",
      desc: "Germany is home to the TU9 alliance and German Universities of Excellence, collaborating directly with Max Planck, Fraunhofer, and Helmholtz institutes.",
      badge: "TU9 Excellence",
    },
    {
      title: "18-Month Job-Seeking Visa",
      desc: "Graduates are granted an 18-month residence permit to secure qualified employment, bridging effortlessly into an EU Blue Card or skilled worker permit.",
      badge: "18-Mo Stay Back",
    },
    {
      title: "Work 140 Full Days / Year",
      desc: "International students can legally work up to 140 full days (or 280 half-days) per calendar year or 20 hrs/week, earning statutory minimum wages of €12.41+/hr.",
      badge: "140 Days Work",
    },
    {
      title: "Europe's Largest Economy",
      desc: "Global headquarters of BMW, Siemens, SAP, Bosch, Mercedes-Benz, BASF, and Bayer providing unmatched paid working student (Werkstudent) jobs.",
      badge: "Industrial Powerhouse",
    },
    {
      title: "English-Taught Programs",
      desc: "Over 2,000+ accredited international master's and bachelor's programs taught completely in English without initial German proficiency.",
      badge: "2,000+ English Degrees",
    },
    {
      title: "Fast-Track Permanent Settlement",
      desc: "German university graduates can apply for a permanent settlement permit (Niederlassungserlaubnis) after just 21 to 27 months of employment.",
      badge: "Fast-Track PR",
    },
    {
      title: "Central European Schengen Gateway",
      desc: "Bordering 9 countries, your German student visa grants visa-free travel throughout all 29 Schengen member states.",
      badge: "29 Schengen Nations",
    },
  ];

  const universities = [
    {
      name: "Technical University of Munich (TUM)",
      city: "Munich, Bavaria",
      tag: "Excellence University • Ranked #1 in Germany",
      specialty: "Computer Science, Mechanical Engineering, AI, Electrical Systems",
      ranking: "QS World Top 30",
    },
    {
      name: "LMU Munich (Ludwig Maximilian University)",
      city: "Munich, Bavaria",
      tag: "Historic Excellence • Founded 1472",
      specialty: "Medicine, Natural Sciences, Business Administration, Humanities",
      ranking: "QS World Top 60",
    },
    {
      name: "Heidelberg University (Ruprecht Karls)",
      city: "Heidelberg, Baden-Württemberg",
      tag: "Oldest University in Germany (Founded 1386)",
      specialty: "Medicine (MD), Physics, Molecular Biology, Law, Humanities",
      ranking: "QS World Top 90",
    },
    {
      name: "RWTH Aachen University",
      city: "Aachen, North Rhine-Westphalia",
      tag: "Premier Mechanical & Tech Polytechnic",
      specialty: "Mechanical & Automotive Engineering, Metallurgy, Electrical Eng",
      ranking: "TU9 Polytechnic Leader",
    },
    {
      name: "Humboldt University of Berlin (HU Berlin)",
      city: "Berlin (Capital)",
      tag: "Alma Mater of Einstein, Planck & Marx",
      specialty: "Computer Science, Philosophy, Economics, Environmental Sciences",
      ranking: "Excellence University",
    },
    {
      name: "Free University of Berlin (FU Berlin)",
      city: "Berlin (Capital)",
      tag: "International Research University",
      specialty: "Social Sciences, Political Science, Global Economics, Life Sciences",
      ranking: "World Top 100",
    },
    {
      name: "Karlsruhe Institute of Technology (KIT)",
      city: "Karlsruhe, Baden-Württemberg",
      tag: "The Research University in the Helmholtz Association",
      specialty: "Computer Science, Energy Systems, Nanotechnology, Mechanical Eng",
      ranking: "Top Engineering Hub",
    },
    {
      name: "Technical University of Berlin (TU Berlin)",
      city: "Berlin (Capital)",
      tag: "TU9 Innovation & Entrepreneurship",
      specialty: "Civil & Environmental Engineering, Architecture, Data Analytics",
      ranking: "Major Tech Incubator",
    },
    {
      name: "University of Freiburg",
      city: "Freiburg, Baden-Württemberg",
      tag: "Black Forest Green Campus (Founded 1457)",
      specialty: "Renewable Energy, Biotechnology, Forestry, Medicine",
      ranking: "Excellence Initiative",
    },
    {
      name: "University of Bonn",
      city: "Bonn, North Rhine-Westphalia",
      tag: "Most Nobel & Fields Medals in Germany",
      specialty: "Mathematics, Quantitative Economics, Agricultural Sciences, Physics",
      ranking: "6 Excellence Clusters",
    },
  ];

  const cities = [
    {
      name: "BERLIN",
      tagline: "Capital, Startup Megacity & Creative Metropolis",
      desc: "Germany's vibrant capital, famous for a booming venture-backed tech scene, rich Cold War history, endless cultural diversity, and world-class universities.",
      vibe: "Dynamic, Cosmopolitan & Startup-Driven",
      costRange: "€950 – €1,450/mo",
    },
    {
      name: "MUNICH",
      tagline: "Economic Powerhouse & Silicon Valley of Germany",
      desc: "Home to BMW, Siemens, Allianz, TUM, and LMU. Breathtaking Bavarian alpine lifestyle paired with Germany's highest density of engineering and tech jobs.",
      vibe: "Prosperous, High-Tech & Alpine Beauty",
      costRange: "€1,100 – €1,650/mo",
    },
    {
      name: "HAMBURG",
      tagline: "Maritime Port Gateway, Logistics & Media",
      desc: "A stunning canal-lined international trading center with strong logistics, aviation engineering (Airbus), renewable energy, and vibrant student music quarters.",
      vibe: "Maritime, Green & Commercial",
      costRange: "€900 – €1,400/mo",
    },
    {
      name: "FRANKFURT",
      tagline: "Financial Capital of Continental Europe",
      desc: "Skyscraper metropolis housing the European Central Bank and Deutsche Bundesbank. Center for international banking, FinTech, and European trade fairs.",
      vibe: "Financial, High-Rise & Well-Connected",
      costRange: "€1,000 – €1,500/mo",
    },
    {
      name: "AACHEN",
      tagline: "Engineering Capital on the Tri-Border",
      desc: "Located where Germany, the Netherlands, and Belgium meet. Dominated by RWTH Aachen polytechnic students, electric vehicle spin-offs, and robotics labs.",
      vibe: "Polytechnic, Student-Centric & Inventive",
      costRange: "€850 – €1,250/mo",
    },
    {
      name: "HEIDELBERG",
      tagline: "Historic Romantic Gem & Biomedical Hub",
      desc: "Germany's oldest university city nestled on the Neckar River, celebrated for red sandstone castle ruins, world-famous cancer research centers, and biotechnology.",
      vibe: "Historic, Romantic & Academic",
      costRange: "€900 – €1,350/mo",
    },
  ];

  const livingCosts = [
    {
      item: "Accommodation (Student Dorm or Shared WG Flat)",
      cost: "€300 – €1,000+",
      desc: "Studentenwerk dorms average €280–€420/mo; shared flat rooms (WG-Zimmer) range €400–€750/mo depending on city.",
      icon: "home",
    },
    {
      item: "Food & Groceries",
      cost: "€200 – €350+",
      desc: "Supermarkets (Aldi, Lidl, Rewe, Edeka) and subsidized university Mensa cafeterias (€3–€5/meal).",
      icon: "food",
    },
    {
      item: "Public Transportation",
      cost: "€30 – €100+",
      desc: "Universities provide a Semesterticket (or Deutschlandticket upgrade) offering regional/national transit access.",
      icon: "transport",
    },
    {
      item: "Internet & Mobile",
      cost: "€20 – €50+",
      desc: "5G prepaid SIMs (Telekom, Vodafone, O2) and high-speed fiber broadband.",
      icon: "phone",
    },
    {
      item: "Utilities (Heating, Electricity, Broadcasting)",
      cost: "€50 – €150+",
      desc: "Warm rent often includes heat/water; Rundfunkbeitrag (TV license) is €18.36/mo per apartment.",
      icon: "utilities",
    },
    {
      item: "Personal Expenses & Leisure",
      cost: "€100 – €250+",
      desc: "Campus sports (Hochschulsport), weekend museum visits, alpine hiking, and cafes.",
      icon: "leisure",
    },
  ];

  const weatherSeasons = [
    {
      season: "Summer",
      timing: "June – August",
      temp: "15°C – 25°C",
      icon: <SunIcon />,
      desc: "Pleasantly warm and sunny across Germany. Perfect for outdoor riverbank festivals in Berlin, beer gardens in Munich, and lakes in Bavaria.",
      bgClass: "from-amber-500/10 to-orange-500/10 border-amber-200",
    },
    {
      season: "Autumn",
      timing: "September – November",
      temp: "7°C – 15°C",
      icon: <LeafIcon />,
      desc: "Golden foliage across historic campuses and Black Forest hills. Mild, crisp weather marking the kickoff of the major Winter Semester.",
      bgClass: "from-orange-500/10 to-amber-600/10 border-orange-200",
    },
    {
      season: "Winter",
      timing: "December – February",
      temp: "-1°C – 4°C",
      icon: <SnowIcon />,
      desc: "Magical fairy-tale snowy spires, world-famous Christmas markets (Weihnachtsmärkte), glühwein, and budget ski resorts in the Bavarian Alps.",
      bgClass: "from-sky-500/10 to-blue-500/10 border-sky-200",
    },
    {
      season: "Spring",
      timing: "March – May",
      temp: "5°C – 15°C",
      icon: <FlowerIcon />,
      desc: "Cherry blossoms bloom along Bonn's historic avenues. Fresh sunny days return as outdoor campus events and student sports resume.",
      bgClass: "from-emerald-500/10 to-teal-500/10 border-emerald-200",
    },
  ];

  const faqs = [
    {
      q: "Can I work while studying in Germany?",
      a: "Yes. International students from outside the EU/EEA can generally work up to 140 full days or 280 half-days per calendar year. Alternatively, students can work up to 20 hours per week during the lecture semester, and full-time during semester breaks. Positions as an academic student assistant (HiWi) often have even more flexible allowances.",
    },
    {
      q: "What is APS certification and is it mandatory for Indian students?",
      a: "The APS (Akademische Prüfstelle) certificate is issued by the German Embassy in New Delhi to verify the authenticity of Indian educational documents. Since November 2022, an APS certificate is mandatory for Indian applicants applying for degree studies in Germany prior to submitting their student visa application.",
    },
    {
      q: "What is a Blocked Account (Sperrkonto) and what is the requirement for 2026?",
      a: "A blocked account is a specialized German bank account demonstrating that you have sufficient funds to cover living expenses for one year. For 2026, the German Federal Foreign Office / German Missions in India specify a requirement of €11,904 per year, which allows students to withdraw a maximum of €992 per month upon arrival in Germany.",
    },
    {
      q: "Can I study in Germany without paying tuition fees (€0 Tuition)?",
      a: "Yes! The vast majority of public universities across 15 of Germany's 16 federal states charge €0 tuition fees for both domestic and international students in Bachelor's and consecutive Master's programs. Students only pay a semester contribution (Semesterbeitrag) of approximately €150 to €350 per semester, which usually includes a regional public transportation ticket.",
    },
    {
      q: "Can I study completely in English in Germany?",
      a: "Yes. German universities offer more than 2,000 accredited degree programs taught 100% in English, particularly at the Master's and Ph.D. levels in Engineering, Computer Science, Data Science, and Business. While your studies are in English, learning basic conversational German (A1/A2) is highly recommended for daily life and internships.",
    },
    {
      q: "Can I stay in Germany after graduation?",
      a: "Yes! Upon graduating from an accredited German university, international graduates are entitled to apply for an 18-month Job-Seeking Residence Permit (Aufenthaltserlaubnis zur Arbeitsplatzsuche). During these 18 months, you can work in any field to support yourself while searching for a role related to your degree.",
    },
    {
      q: "Can I get Permanent Residency (PR) in Germany after studying?",
      a: "Yes, Germany offers one of the world's fastest pathways to permanent residency for international graduates. Under the German Residence Act (§ 18c AufenthG), graduates of German higher education institutions can receive a Permanent Settlement Permit (Niederlassungserlaubnis) after just 21 months of qualifying employment with B1 German proficiency, or 27 months with basic A1 German.",
    },
    {
      q: "Can I bring my spouse or family to Germany?",
      a: "Family reunification (Familienzusammenführung) is possible for international students and graduates holding a residence permit in Germany, provided they demonstrate sufficient living funds (without public welfare), appropriate accommodation space, and meet applicable marriage validity requirements.",
    },
    {
      q: "What is the difference between TU9 Universities and Universities of Applied Sciences (Fachhochschulen)?",
      a: "TU9 institutions are Germany's 9 leading research-intensive technical universities, emphasizing deep theoretical foundations, scientific research, and doctoral pathways. Universities of Applied Sciences (UAS / Hochschule) focus on practical, industry-oriented training with mandatory company internships (Praxissemester) and applied engineering.",
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
          1. HERO SECTION (GERMANY BLACK/RED/GOLD RIBBONS + METRICS)
      ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1e38] via-[#0d284d] to-[#0a1e38] text-white pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Subtle Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e52928]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f59e0b]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
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
            <span className="text-[#22c55e] font-semibold">Germany</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-ping" />
                <span className="text-slate-100 font-semibold tracking-wide">
                  Europe&apos;s #1 Economy • TU9 & Universities of Excellence
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#f59e0b]">Germany</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#22c55e] mt-2">
                  Build Your Global Future with €0 Tuition
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                Germany offers international students a strong combination of established universities, research opportunities, practical education, and access to Europe&apos;s largest economy. Experience world-renowned TU9 technical excellence with low or no tuition fees.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#22c55e]">€0</div>
                  <div className="text-xs text-slate-300 font-medium">Public Uni Tuition</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">18 Months</div>
                  <div className="text-xs text-slate-300 font-medium">Job-Seeking Visa</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#f59e0b]">140 Days</div>
                  <div className="text-xs text-slate-300 font-medium">Work During Study</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#e52928]">APS</div>
                  <div className="text-xs text-slate-300 font-medium">India Certified</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#consultation"
                  className="px-7 py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#c9201f] text-white shadow-lg shadow-red-900/30 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  Apply for Germany 2026/27
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all text-center"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual (Tech Students in Germany) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md group anim-gentle-float">
                <Image
                  src="/germany-hero.png"
                  alt="International Graduate Students Collaborating in Germany"
                  fill
                  className="object-cover p-1 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Micro Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 shadow-xl flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#000000] via-[#DD0000] to-[#FFCE00] flex items-center justify-center text-white font-black text-sm shadow-md">
                    DE
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold flex items-center gap-1.5">
                      <span>DAAD & TU9 Recognised Partner</span>
                      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    </div>
                    <p className="text-slate-300 text-[11px] leading-tight mt-0.5">
                      Blocked Account (€11,904) & EU Blue Card Pathway
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. ABOUT GERMANY (KEY HIGHLIGHTS & BRANDENBURG GATE VISUAL)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Landmark Visual */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/destinations/germany-landmark.jpg"
                  alt="Historic Brandenburg Gate in Berlin, Germany"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#e52928] text-white text-xs font-bold rounded-md uppercase tracking-wider">
                    Berlin, Germany
                  </span>
                  <h3 className="text-xl font-bold mt-2">Historic Brandenburg Gate</h3>
                  <p className="text-slate-200 text-xs mt-1">
                    At the crossroads of European history, cutting-edge technology, and innovation
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
                <span>Official Language: German (2,000+ Courses in English)</span>
                <span>Currency: Euro (€ / EUR)</span>
              </div>
            </div>

            {/* Right Information Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold tracking-wider uppercase">
                Land der Ideen (Land of Ideas)
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                About Germany & Its World-Class Higher Education
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Located in Central Europe and an anchor member of the European Union, Germany is renowned globally for its powerhouse industrial economy, world-class research institutes, and unmatched leadership in engineering, automotive technology, and applied computer sciences.
              </p>

              {/* 9 Core Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Located in Central Europe with 9 neighboring Schengen states",
                  "Member of the European Union & Europe's largest national economy",
                  "Global industrial base with world-class engineering & technology",
                  "Pioneering research hubs: Max Planck, Fraunhofer & Helmholtz",
                  "Automotive & tech giants: BMW, Mercedes, Porsche, Siemens, SAP, Bosch",
                  "Wide selection of Bachelor's and Master's programs taught in English",
                  "Official language: German (free language courses on campus)",
                  "Over 400,000 international students from more than 170 nations",
                  "€0 tuition at public universities with low semester contributions",
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
          3. TOP COURSES IN GERMANY (9 DISCIPLINES)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Courses in Germany for International Students" subtitle="Germany&apos;s curriculum bridges rigorous theoretical fundamentals with hands-on industrial research in global manufacturing and software ecosystems." />

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
          4. WHY STUDY IN GERMANY?
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Study in Germany?" subtitle="Germany provides international students with a broad range of academic and career-oriented opportunities across Europe&apos;s leading tech ecosystem." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyGermany.map((item, idx) => (
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

          {/* Student Work & Post-Study Residence Permit Spotlight */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#0a1e38] to-[#123661] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-md bg-[#22c55e] text-slate-950 font-extrabold text-xs uppercase tracking-wider">
                  Student Work Regulations
                </span>
                <h4 className="text-xl font-bold text-white mt-3 mb-2">
                  Work Up to 140 Full Days Per Year
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  International students from outside the EU can work up to <strong>140 full days or 280 half-days per calendar year</strong>. Alternatively, you can work up to 20 hours per week during the lecture semester and full-time during breaks. Many students secure paid &ldquo;Werkstudent&rdquo; internships at BMW, Siemens, or SAP.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-xs text-[#22c55e] font-semibold">
                Statutory Minimum Wage: €12.41+/hr
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#123661] to-[#0a1e38] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-md bg-[#FFCE00] text-slate-950 font-extrabold text-xs uppercase tracking-wider">
                  Post-Study Work & EU Blue Card
                </span>
                <h4 className="text-xl font-bold text-white mt-3 mb-2">
                  18-Month Job-Seeking Residence Permit
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  After completing your degree, you can apply for an <strong>18-month residence permit</strong> to search for graduate employment. Once hired, you transition directly to an <strong>EU Blue Card</strong> or skilled worker permit, qualifying for permanent settlement (Niederlassungserlaubnis) in as little as 21 months.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-xs text-[#FFCE00] font-semibold">
                Fast-Track Permanent Residency Pathway
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. 8-STEP GERMANY STUDENT VISA & ADMISSION PROCESS
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Germany Student Visa Process: 8-Step Roadmap" subtitle="From APS certification and Uni-Assist to your €11,904 blocked account and visa grant, Umang Career Consultancy guides you through every milestone." variant="dark" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Choose Your University & Program",
                desc: "Shortlist suitable German universities (TU9, Excellence Universities, or Applied Sciences) according to your academic profile, budget, and career goals.",
              },
              {
                step: "02",
                title: "Apply for Admission",
                desc: "Prepare certified academic transcripts, syllabus translations, motivation letter (Motivationsschreiben), and submit via Uni-Assist or direct university portals.",
              },
              {
                step: "03",
                title: "Receive Your Admission Letter",
                desc: "Once accepted, obtain your official university admission document (Zulassungsbescheid) confirming your enrollment terms.",
              },
              {
                step: "04",
                title: "APS Certificate Verification",
                desc: "For applicants from India, APS certification is mandatory. We provide complete documentation review and submission guidance for the Academic Evaluation Centre.",
              },
              {
                step: "05",
                title: "Arrange Financial Proof (€11,904)",
                desc: "Open an approved German Blocked Account (Sperrkonto) with €11,904 for one year (with monthly withdrawals limited to €992) via Expatrio, Coracle, or Fintiba.",
              },
              {
                step: "06",
                title: "Statutory Health Insurance",
                desc: "Arrange mandatory German statutory student health insurance coverage (Techniker Krankenkasse - TK, AOK, or Barmer) for the entire duration of your stay.",
              },
              {
                step: "07",
                title: "Submit Your Visa Application",
                desc: "Complete your VIDEX national visa application, document audit, and biometric appointment at the German Embassy / Consulate or VFS center in India.",
              },
              {
                step: "08",
                title: "Travel & City Registration (Anmeldung)",
                desc: "Fly to Germany, complete city hall address registration (Anmeldung), activate your blocked account, and collect your biometric residence permit (Aufenthaltstitel).",
              },
            ].map((stepItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#22c55e]/50 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#22c55e] mb-2">{stepItem.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{stepItem.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{stepItem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. POPULAR STUDENT CITIES IN GERMANY
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Popular Student Cities in Germany" subtitle="Each German city offers distinct economic hubs, campus cultures, living costs, and corporate recruitment opportunities." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 uppercase">
                      Federal Republic of Germany
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
                  <span className="text-slate-400 font-medium">Urban Vibe:</span>
                  <span className="font-semibold text-slate-800">{city.vibe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. TOP UNIVERSITIES & INSTITUTIONS IN GERMANY
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Universities & Institutions in Germany" subtitle="Umang Career Consultancy can help students compare institutions based on course, academic profile, tuition, location and career goals." />

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
          8. TUITION FEES & LIVING COSTS BREAKDOWN
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Tuition Fees Table */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold tracking-wider uppercase">
                Zero Tuition Model
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Germany Tuition Fees
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Germany&apos;s tuition structure varies by university, state, program and student status. Many public universities do not charge general tuition fees for bachelor&apos;s and consecutive master&apos;s programs, although semester contributions apply.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0a1e38] text-white text-xs uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="px-5 py-4">Study Level</th>
                        <th className="px-5 py-4">Indicative Tuition (€ EUR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Bachelor&apos;s Degree</td>
                        <td className="px-5 py-4 text-emerald-600 font-bold">
                          Often €0 tuition at public universities (semester contribution ~€150–€350 applies)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Master&apos;s Degree</td>
                        <td className="px-5 py-4 text-emerald-600 font-bold">
                          Often €0 at public universities for consecutive programs (exceptions e.g. Baden-Württemberg €1,500/sem)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Private Universities</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">€5,000 – €20,000+ per year</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">PhD / Doctoral Studies</td>
                        <td className="px-5 py-4 text-emerald-600 font-semibold">
                          Generally no tuition at public universities (often salaried research posts)
                        </td>
                      </tr>
                      <tr className="bg-slate-50/80">
                        <td className="px-5 py-3.5 font-bold text-slate-600 text-xs">Main Intakes</td>
                        <td className="px-5 py-3.5 font-bold text-[#0a1e38] text-xs">
                          Winter Semester (Sept/Oct - Major) & Summer Semester (March/April)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Blocked Account Official Callout */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5 text-xs text-amber-900 leading-relaxed">
                <div className="font-extrabold text-sm text-amber-950 flex items-center gap-2">
                  <svg className="w-4 h-4 inline mr-1 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg> 2026 German Blocked Account Requirement (Sperrkonto)
                </div>
                <p>
                  The German Missions in India state that students must demonstrate sufficient financial funds through a blocked account of <strong>€11,904 for one year</strong>, with monthly withdrawals limited to <strong>€992 per month</strong> upon arrival in Germany.
                </p>
              </div>
            </div>

            {/* Right: Monthly Cost of Living */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-[#e52928] text-xs font-bold tracking-wider uppercase">
                Monthly Budgeting
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Monthly Cost of Living
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Living costs depend on the city, accommodation type and lifestyle. Munich and Frankfurt have higher rental rates, while student cities like Aachen, Leipzig, or Bonn offer great savings.
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
                    Estimated Student Monthly Budget
                  </div>
                  <div className="text-xs text-emerald-700 mt-0.5">
                    Covers accommodation, food, transit, health insurance & leisure
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-700">
                  €900 – €1,500+ <span className="text-xs font-medium text-emerald-600">/ month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          9. WEATHER IN GERMANY (FOUR DISTINCT SEASONS)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Weather in Germany: Four Distinct Seasons" subtitle="International students experience the beauty of Central Europe through all four distinct seasons, from sunny beer garden summers to fairytale winter Christmas markets." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherSeasons.map((season, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-b ${season.bgClass} border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-xs">{season.icon}</div>
                    <span className="text-xs font-bold text-slate-500 uppercase">{season.timing}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0a1e38] mb-1">{season.season}</h3>
                  <div className="text-lg font-black text-[#e52928] mb-3">{season.temp}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{season.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 text-xs text-slate-400">
            * Note: Temperatures vary by region (Baltic & North Sea coast, central plains, and southern Bavarian Alps).
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          10. FREQUENTLY ASKED QUESTIONS (FAQS)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions About Studying in Germany" subtitle="Clear, transparent answers regarding €0 tuition, APS certification, blocked accounts, 18-month stay-back visas, and permanent residency." />

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
                  Start Your Study Journey in Germany
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Get personalized guidance for public university selection, Uni-Assist applications, APS documentation, blocked accounts, and your Germany student visa.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>TU9 & Public University Shortlisting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Step-by-Step APS Certificate Guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Blocked Account (€11,904) Setup Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>18-Month Stay-Back & EU Blue Card Strategy</span>
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
                    Your Germany study abroad inquiry has been received. Our certified European education counselor will contact you at {formData.phone || "your number"} shortly.
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
                    Book Free Germany Consultation
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Fill in your details below and our counselor will evaluate your admission profile within 24 hours.
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
                        placeholder="e.g. Neil Patel"
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
                        placeholder="neil@example.com"
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
                        <option>Master&apos;s Degree (Consecutive - 2 Years)</option>
                        <option>Bachelor&apos;s Degree (3-4 Years)</option>
                        <option>Studienkolleg + Bachelor&apos;s</option>
                        <option>PhD / Doctoral Studies</option>
                        <option>MBA / Non-Consecutive Master&apos;s</option>
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
                        <option>Mechanical & Automotive Engineering</option>
                        <option>Artificial Intelligence & Data Science</option>
                        <option>Electrical Engineering</option>
                        <option>Engineering & Technology</option>
                        <option>Business & Management</option>
                        <option>Renewable Energy & Environmental Sciences</option>
                        <option>Natural Sciences</option>
                        <option>Medicine & Life Sciences</option>
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
                        <option>Munich (TUM / LMU)</option>
                        <option>Berlin (Capital Tech)</option>
                        <option>Aachen (RWTH Engineering)</option>
                        <option>Hamburg (Maritime & Aviation)</option>
                        <option>Frankfurt (Finance Hub)</option>
                        <option>Heidelberg (Oldest Uni)</option>
                        <option>Open to Recommendations / Zero Tuition</option>
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
                      <option>Winter Semester 2026/27 (Sept/Oct - Major Intake)</option>
                      <option>Summer Semester 2027 (March/April)</option>
                      <option>Winter Semester 2027/28</option>
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
                      placeholder="e.g. Do I need an APS certificate? How can I open an €11,904 blocked account?"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#ca2221] text-white shadow-lg shadow-red-900/20 transition-all text-sm uppercase tracking-wider"
                  >
                    Submit Free Germany Consultation Request
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
