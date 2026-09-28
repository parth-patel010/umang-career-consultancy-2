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

function ArtsIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
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

export default function CzechRepublicStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Information Technology",
    level: "Bachelor's Degree",
    intake: "September 2026",
    cityPreference: "Prague",
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
      title: "Business & Economics",
      icon: <BusinessIcon />,
      desc: "Top European management programs in international trade, finance, logistics, and data-driven economics at premier universities like VŠE Prague.",
      popularSpecializations: ["International Business", "Corporate Finance", "Management & Marketing", "Economics & Public Policy"],
    },
    {
      title: "Information Technology",
      icon: <ComputerIcon />,
      desc: "Renowned software engineering, cybersecurity, artificial intelligence, and game design degrees with direct links to global tech hubs in Prague & Brno.",
      popularSpecializations: ["Software Engineering", "Artificial Intelligence & Robotics", "Cybersecurity", "Applied Informatics"],
    },
    {
      title: "Engineering & Technology",
      icon: <EngineeringIcon />,
      desc: "Historic polytechnic engineering excellence in mechanical, civil, automotive, aerospace, and electrical engineering rooted in industrial heritage.",
      popularSpecializations: ["Automotive Engineering", "Mechanical & Mechatronics", "Civil & Structural Engineering", "Electrical Systems"],
    },
    {
      title: "Medicine & Life Sciences",
      icon: <MedicineIcon />,
      desc: "World-famous 6-year General Medicine (MD) and 5-year Dentistry (DMD) degrees taught in English at Charles & Masaryk, recognized worldwide.",
      popularSpecializations: ["General Medicine (MD)", "Dentistry (DMD)", "Pharmacy", "Biomedical Sciences"],
    },
    {
      title: "Arts, Design & Humanities",
      icon: <ArtsIcon />,
      desc: "Rich traditions in classical European architecture, graphic design, animation, film, philosophy, and international relations.",
      popularSpecializations: ["Graphic & Media Design", "Film & Photography", "European Studies", "Visual Arts & Architecture"],
    },
    {
      title: "Natural Sciences",
      icon: <ScienceIcon />,
      desc: "Cutting-edge laboratory research in biotechnology, chemical technology, environmental ecology, physics, and molecular biology.",
      popularSpecializations: ["Biotechnology", "Chemical Engineering", "Environmental Science", "Applied Physics"],
    },
  ];

  const whyStudyCzechia = [
    {
      title: "Established Higher Education",
      desc: "Home to Charles University (founded in 1348), Czechia has over 670 years of world-renowned academic heritage and high global prestige.",
      badge: "Founded 1348",
    },
    {
      title: "1,000+ English Programs",
      desc: "Official Study in Czechia records confirm more than 1,000 accredited degree programs taught fully in English across all disciplines.",
      badge: "1,000+ Programs",
    },
    {
      title: "Affordable Living & Tuition",
      desc: "Living costs are significantly lower than Western Europe (€400–€750/mo), with English degree tuition largely between €0 and €6,000/yr.",
      badge: "€0 – €6,000/yr",
    },
    {
      title: "Heart of Central Europe",
      desc: "Bordering Germany, Austria, Poland, and Slovakia, offering unparalleled Schengen mobility and central continental connectivity.",
      badge: "Schengen Hub",
    },
    {
      title: "50,000+ International Students",
      desc: "A vibrant global academic community with students from over 160 countries creating an open, safe, and culturally rich environment.",
      badge: "Global Community",
    },
    {
      title: "Strong Research & Innovation",
      desc: "Major investments in nanotech, biotech, advanced computing, and aerospace with state-of-the-art European research centers.",
      badge: "Research Powerhouse",
    },
    {
      title: "Right to Work While Studying",
      desc: "Full-time degree students have access to the Czech labor market, allowing flexible part-time work alongside their university curriculum.",
      badge: "Work Opportunities",
    },
    {
      title: "Professional Internships & Career",
      desc: "Direct recruitment from global leaders like Škoda Auto, Siemens, Microsoft, Honeywell, Red Hat, Avast, and DHL.",
      badge: "Direct Industry Ties",
    },
  ];

  const universities = [
    {
      name: "Charles University (Univerzita Karlova)",
      city: "Prague",
      tag: "Founded 1348 • Top #1 in Czechia",
      specialty: "Medicine (MD), Law, Social Sciences, Natural Sciences, Humanities",
      ranking: "Oldest University in Central Europe",
    },
    {
      name: "Masaryk University (MUNI)",
      city: "Brno",
      tag: "Second Largest • High Research Output",
      specialty: "Medicine, Informatics, Economics, Law, Science",
      ranking: "Top Innovation Hub",
    },
    {
      name: "Czech Technical University in Prague (CTU / ČVUT)",
      city: "Prague",
      tag: "Oldest Non-Military Tech University",
      specialty: "Computer Science, Civil & Mechanical Engineering, Architecture, AI",
      ranking: "Premier Engineering Institute",
    },
    {
      name: "Prague University of Economics and Business (VŠE)",
      city: "Prague",
      tag: "Leading Business School in Central Europe",
      specialty: "International Business, Finance, Management, Economics, CEMS MIM",
      ranking: "Triple-Crown Partner",
    },
    {
      name: "Brno University of Technology (BUT / VUT)",
      city: "Brno",
      tag: "Major Polytechnic Center",
      specialty: "Electrical Engineering, IT, Mechanical Engineering, Chemistry",
      ranking: "High Tech Industry Links",
    },
    {
      name: "University of Chemistry and Technology, Prague (UCT)",
      city: "Prague",
      tag: "Largest Chemical Science Hub in Central Europe",
      specialty: "Chemical Engineering, Biochemistry, Food Technology, Nanomaterials",
      ranking: "Top Research Citations",
    },
    {
      name: "Palacký University Olomouc",
      city: "Olomouc",
      tag: "Historic 1573 Foundation",
      specialty: "Medicine, Science, Education, Philosophy, Physical Culture",
      ranking: "Scenic University Town",
    },
    {
      name: "Czech University of Life Sciences Prague (CZU)",
      city: "Prague",
      tag: "Green Campus Excellence",
      specialty: "Environmental Sciences, Agrobiology, Forestry, Economics & Mgt",
      ranking: "Sustainability Leader",
    },
  ];

  const cities = [
    {
      name: "PRAGUE",
      czechName: "Praha",
      tagline: "Golden City of Hundred Spires & Capital",
      desc: "The capital city and the country's undisputed center for higher education, multinational headquarters, startups, culture, and architecture.",
      vibe: "Magical, Cosmopolitan & Cosmopolitan",
      costRange: "€450 – €750/mo",
    },
    {
      name: "BRNO",
      czechName: "Brno",
      tagline: "Silicon Valley of Czechia & Student Haven",
      desc: "A massive university city where 1 in every 5 residents is a student. Famous for top tech firms, Red Hat, Honeywell, and a youthful cafe scene.",
      vibe: "High-Tech, Youthful & Affordable",
      costRange: "€380 – €620/mo",
    },
    {
      name: "OLOMOUC",
      czechName: "Olomouc",
      tagline: "Historic Baroque Gem & Student Town",
      desc: "A breathtaking UNESCO heritage city where campus life permeates picturesque cobblestone squares, fountains, and vibrant student societies.",
      vibe: "Historic, Peaceful & Welcoming",
      costRange: "€320 – €550/mo",
    },
    {
      name: "PLZEŇ",
      czechName: "Pilsen",
      tagline: "Industrial Engineering & Cultural Capital",
      desc: "Celebrated worldwide for mechanical innovation, the Škoda engineering legacy, modern University of West Bohemia, and vibrant green parks.",
      vibe: "Industrial, Dynamic & Practical",
      costRange: "€340 – €580/mo",
    },
    {
      name: "PARDUBICE",
      czechName: "Pardubice",
      tagline: "Science, Transport & Chemical Tech",
      desc: "A dynamic regional center easily connected to Prague, renowned for cutting-edge chemical research, transport engineering, and calm student life.",
      vibe: "Focused, Scientific & Compact",
      costRange: "€300 – €520/mo",
    },
    {
      name: "OPAVA",
      czechName: "Opava",
      tagline: "Silesian Charm & Close-Knit Community",
      desc: "A charming historic Silesian university city offering small lecture sizes, personalized professor mentorship, and very economical living costs.",
      vibe: "Close-Knit, Friendly & Low-Cost",
      costRange: "€280 – €480/mo",
    },
  ];

  const livingCosts = [
    {
      item: "Accommodation (Dorm or Shared Flat)",
      cost: "€190 – €500+",
      desc: "University dorms start from ~€190/mo; rooms in shared student flats average €290–€420/mo.",
      icon: "home",
    },
    {
      item: "Food & Groceries",
      cost: "€150 – €250+",
      desc: "Budget supermarkets (Albert, Billa, Lidl) & heavily subsidized university Mensa dining halls.",
      icon: "food",
    },
    {
      item: "Public Transportation",
      cost: "€10 – €30+",
      desc: "Prague PID & Brno IDS passes offer immense 75% discounts for ISIC student cardholders.",
      icon: "transport",
    },
    {
      item: "Internet & Mobile",
      cost: "€20 – €30+",
      desc: "High-speed 5G European mobile plans & ultra-fast fiber internet in all dormitories.",
      icon: "phone",
    },
    {
      item: "Utilities (Gas, Heating, Water)",
      cost: "€50 – €100+",
      desc: "Usually bundled in student dormitory fees; split proportionately in private flats.",
      icon: "utilities",
    },
    {
      item: "Personal & Leisure",
      cost: "€50 – €150+",
      desc: "Cinema tickets, student festivals, weekend trips across Schengen, and historic cafes.",
      icon: "leisure",
    },
  ];

  const weatherSeasons = [
    {
      season: "Summer",
      czech: "Léto",
      temp: "20°C – 30°C",
      months: "June – August",
      icon: <SunIcon />,
      desc: "Warm and sunny. Perfect for cycling along the Vltava River, outdoor concerts, and enjoying Prague's rooftop gardens and beer gardens.",
      bgClass: "from-amber-500/10 to-orange-500/10 border-amber-200",
    },
    {
      season: "Autumn",
      czech: "Podzim",
      temp: "8°C – 18°C",
      months: "September – November",
      icon: <LeafIcon />,
      desc: "Romantic golden foliage across Bohemian castles and university grounds. Crisp, comfortable weather marking the start of the academic semester.",
      bgClass: "from-orange-500/10 to-amber-600/10 border-orange-200",
    },
    {
      season: "Winter",
      czech: "Zima",
      temp: "-5°C – 5°C",
      months: "December – February",
      icon: <SnowIcon />,
      desc: "Picturesque snowy rooftops, world-famous Prague Old Town Christmas markets, warm trdelník pastries, and nearby skiing in Krkonoše mountains.",
      bgClass: "from-sky-500/10 to-blue-500/10 border-sky-200",
    },
    {
      season: "Spring",
      czech: "Jaro",
      temp: "8°C – 18°C",
      months: "March – May",
      icon: <FlowerIcon />,
      desc: "Cherry blossoms bloom on Petřín Hill. Pleasant, mild days returning as student events, outdoor sports, and university campus festivals resume.",
      bgClass: "from-emerald-500/10 to-teal-500/10 border-emerald-200",
    },
  ];

  const faqs = [
    {
      q: "Do I need to speak Czech to study in Czech Republic?",
      a: "Not necessarily. More than 1,000 accredited degree programs are taught 100% in English across Czech universities. While studying in English, learning basic conversational Czech is encouraged for daily life and interactions, and universities frequently provide free Czech language foundation courses.",
    },
    {
      q: "Can international students work while studying in Czechia?",
      a: "Yes. Non-EU international students enrolled in full-time accredited degree programs at recognized higher-education institutions have free access to the Czech labor market without needing an additional work permit. Students often take up flexible part-time positions, research assistantships, or corporate internships.",
    },
    {
      q: "Can I stay in Czech Republic after graduation?",
      a: "Yes. Upon graduating from an accredited Czech higher education institution, non-EU students can apply for a 9-month residence permit specifically designed to seek employment or start a business. Once you secure qualifying employment, you transition seamlessly to an Employee Card or EU Blue Card.",
    },
    {
      q: "Can my spouse or family accompany me?",
      a: "Family reunification may be possible depending on the student's residence status, course duration, and proof of sufficient funds and accommodation. Long-term residence permits for family reunification allow spouses and children to reside in Czechia.",
    },
    {
      q: "Are scholarships available in Czech Republic?",
      a: "Yes. International students can apply for numerous scholarships, including Government of the Czech Republic scholarships for developing nations, South Moravian Center for International Mobility (JCMM) grants, Visegrad Fund scholarships, Erasmus+ mobility grants, and university-specific merit awards.",
    },
    {
      q: "Are English-taught programs available across disciplines?",
      a: "Yes. The official Study in Czechia portal confirms over 1,000 fully accredited programs taught in English. These span Bachelor's, Master's, and Doctoral levels in Computer Science, Engineering, Business, Medicine (MD), Dentistry, Architecture, Economics, and Life Sciences.",
    },
    {
      q: "What is Nostrification, and does Umang assist with it?",
      a: "Nostrification is the mandatory official recognition of foreign secondary school diplomas or university degrees by Czech educational authorities. Umang Career Consultancy provides comprehensive end-to-end guidance for document apostille, certified Czech translations, and submission to the relevant regional educational board or university.",
    },
    {
      q: "How long does a Czech Long-Term Student Visa (Type D) take?",
      a: "Czech student visa processing usually takes 60 to 90 days following submission at the Czech Embassy or Consulate. Because appointments and police background checks take time, we recommend starting your admission and visa preparation 3 to 4 months prior to your intake.",
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
          1. HERO SECTION (CZECH FLAG RIBBONS + METRICS + CHARLES BRIDGE)
      ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1e38] via-[#0d284d] to-[#0a1e38] text-white pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Subtle Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e52928]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1e40af]/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
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
            <span className="text-[#22c55e] font-semibold">Czech Republic</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e52928] animate-ping" />
                <span className="text-slate-100 font-semibold tracking-wide">
                  Central Europe • EU & Schengen Member State
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#e52928]">Czech Republic</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#22c55e] mt-2">
                  Historic Excellence & 1,000+ English Programs
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                The Czech Republic, officially Czechia, is renowned for its established higher-education tradition dating back to 1348, vibrant student cities, and an increasingly international community. Experience top-tier education with affordable fees (€0 to €6,000/yr) in the heart of Europe.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">1,000+</div>
                  <div className="text-xs text-slate-300 font-medium">English Degrees</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#22c55e]">€0 – €6K</div>
                  <div className="text-xs text-slate-300 font-medium">Annual Tuition</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#e52928]">50,000+</div>
                  <div className="text-xs text-slate-300 font-medium">Global Students</div>
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
                  Apply for Czechia 2026
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all text-center"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual (Student with Czech White, Blue & Red Ribbons) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md group anim-gentle-float">
                <Image
                  src="/czech-hero.png"
                  alt="Graduate Student in Prague with Czech Republic Red White and Blue Flags"
                  fill
                  className="object-contain p-2 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Micro Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 shadow-xl flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e40af] to-[#e52928] flex items-center justify-center text-white font-bold text-lg shadow-md">
                    CZ
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold flex items-center gap-1.5">
                      <span>Central European EU Member</span>
                      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    </div>
                    <p className="text-slate-300 text-[11px] leading-tight mt-0.5">
                      Schengen Area • Study in Czechia Official Framework
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. ABOUT CZECH REPUBLIC (KEY HIGHLIGHTS & CHARLES BRIDGE VISUAL)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Landmark Visual */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/destinations/czech-republic.jpg"
                  alt="Charles Bridge and Historic Towers in Prague, Czech Republic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#e52928] text-white text-xs font-bold rounded-md uppercase tracking-wider">
                    Prague, Czechia
                  </span>
                  <h3 className="text-xl font-bold mt-2">Historic Charles Bridge</h3>
                  <p className="text-slate-200 text-xs mt-1">
                    Connecting ancient academic heritage with a high-tech modern European economy
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
                <span>Official Language: Czech (1,000+ Courses in English)</span>
                <span>Currency: Czech Koruna (CZK / Kč)</span>
              </div>
            </div>

            {/* Right Information Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-[#e52928] text-xs font-bold tracking-wider uppercase">
                Heart of Europe
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                About Czech Republic & Higher Education
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                The Czech Republic, officially Czechia, is a Central European country known for its established higher-education system, historic cities, and growing international student community. It combines centuries of world-class scholarship with modern research excellence across science, technology, and business.
              </p>

              {/* 9 Core Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Located in the geographic center of Europe",
                  "Member of the European Union & Schengen Area",
                  "Official language: Czech (1,000+ English degrees)",
                  "Strong academic and cutting-edge research environment",
                  "High-demand fields: IT, Engineering, Business & Medicine",
                  "Affordable living costs compared with Western Europe",
                  "Vibrant student cities with over 50,000 international scholars",
                  "Four distinct, picturesque seasons throughout the year",
                  "Generous student discounts on transport, museums & cafes",
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
          3. TOP COURSES IN CZECH REPUBLIC
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Courses in Czech Republic for International Students" subtitle="Explore leading programs taught in English with high European employability and international accreditation." />

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
          4. WHY STUDY IN CZECH REPUBLIC?
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Study in Czech Republic?" subtitle="Czechia offers international students a combination of European higher education, English-taught programs and relatively accessible living costs." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyCzechia.map((item, idx) => (
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
              <h4 className="text-xl font-bold text-white">Compare Czech Universities with Umang Experts</h4>
              <p className="text-sm text-slate-300">
                Receive certified profile evaluation, nostrification guidance, and scholarship application support.
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
          5. POPULAR STUDENT CITIES IN CZECH REPUBLIC
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Popular Student Cities in Czech Republic" subtitle="From the historic fairy-tale grandeur of Prague to the booming tech hubs of Brno and the close-knit university towns of Olomouc and Plzeň." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 uppercase">
                      {city.czechName}
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
          6. TOP UNIVERSITIES IN CZECH REPUBLIC
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Universities in Czech Republic" subtitle="Umang Career Consultancy can help students compare universities based on their academic profile, preferred course, budget and career goals." />

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
                Official Cost Details
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Czech Republic Tuition Fees
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tuition depends on the institution, program, and language of instruction. At public and state institutions, programs taught in Czech are generally <strong className="text-emerald-700">tuition-free (€0)</strong> for students of all nationalities, while foreign-language programs normally charge tuition.
              </p>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                <strong>Study in Czechia Official Guidance:</strong> The vast majority of tuition fees for English-taught programs range between <strong>€0 and €6,000 per year</strong>, while select arts and medicine programs can cost more (€10,000 – €15,000/yr).
              </div>

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
                        <td className="px-5 py-4 text-[#e52928] font-bold">€0 – €6,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Master&apos;s Degree</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">€0 – €6,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Diploma / Professional Programs</td>
                        <td className="px-5 py-4 text-slate-700 font-semibold">Varies by institution</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">PhD / Doctoral Studies</td>
                        <td className="px-5 py-4 text-emerald-600 font-semibold">
                          Varies by program (many funded with doctoral stipends)
                        </td>
                      </tr>
                      <tr className="bg-slate-50/80">
                        <td className="px-5 py-3.5 font-bold text-slate-600 text-xs">Primary Intakes</td>
                        <td className="px-5 py-3.5 font-bold text-[#0a1e38] text-xs">
                          Mainly September (Autumn); select programs in February (Spring)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                * Note: Always verify the exact tuition fee with the selected university and program through Umang counseling.
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
                The cost of living depends on the city and accommodation. Official Study in Czechia information gives examples of approximately <strong>€190/month</strong> for a student dormitory and <strong>€290/month</strong> for a room in a shared flat, although actual prices vary.
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
                    Estimated Monthly Student Budget
                  </div>
                  <div className="text-xs text-emerald-700 mt-0.5">
                    Covers accommodation, university dining, local transit & personal leisure
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-700">
                  €470 – €1,060+ <span className="text-xs font-medium text-emerald-600">/ month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          8. WEATHER IN CZECH REPUBLIC (FOUR DISTINCT SEASONS)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Weather in Czech Republic: Four Distinct Seasons" subtitle="Experience the captivating changes of Central Europe, from sunny castle gardens in summer to magical snow-covered spires in winter." />

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
                    {season.czech}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0a1e38] mb-1">{season.season}</h3>
                  <div className="text-lg font-black text-[#e52928] mb-3">{season.temp}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{season.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 text-xs text-slate-400">
            * Note: Temperatures vary by region (Bohemian basin, Moravian hills, and border mountain ranges).
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          9. 6-STEP ADMISSION & CZECH VISA ROADMAP
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Your 6-Step Admission & Czech Student Visa Roadmap" subtitle="Umang Career Consultancy guides you through every milestone, including credential nostrification and long-term student visa filing." variant="dark" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Course Selection & Eligibility Check",
                desc: "We analyze your academic marks, English test score (IELTS/Duolingo/MOI), budget, and career goals across 1,000+ accredited English programs in Czechia.",
              },
              {
                step: "02",
                title: "Nostrification & Document Legalization",
                desc: "Assistance with MEA apostille, official Czech translations, and recognition of prior foreign diplomas by Czech authorities.",
              },
              {
                step: "03",
                title: "University Offer Letter (Potvrzení o Přijetí)",
                desc: "Receiving your official confirmation of studies (*potvrzení o studiu*) confirming your program enrollment and tuition terms.",
              },
              {
                step: "04",
                title: "Accommodation Proof & Medical Insurance",
                desc: "Securing an official Czech accommodation contract (*doklad o zajištění ubytování*) and comprehensive Czech comprehensive travel medical insurance.",
              },
              {
                step: "05",
                title: "Long-Term Student Visa (Type D) Filing",
                desc: "Appointment booking at the Czech Embassy, police clearance documentation (PCC with apostille), bank solvency proof, and mock visa interview training.",
              },
              {
                step: "06",
                title: "Pre-Departure & Foreign Police Registration",
                desc: "Flight ticketing, student dorm check-in, orientation, and biometric registration at the Czech Foreign Police Department within 3 business days of arrival.",
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
          <SectionHeader title="Frequently Asked Questions About Studying in Czech Republic" subtitle="Clear answers regarding tuition fees, language requirements, student work rights, family accompaniment, and post-study opportunities." />

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
                  Start Your Study Journey in Czech Republic
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Get personalized guidance for course selection, university applications, nostrification, documentation and your Czech Republic student visa.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>1,000+ English-Taught Program Matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Certified Nostrification & Apostille Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Complete Czech Student Visa (Type D) Dossier</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Dormitory Booking & Airport Pick-Up Guidance</span>
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
                    Your Czech Republic study abroad inquiry has been received. Our European education specialist will contact you at {formData.phone || "your number"} shortly.
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
                    Book Free Czechia Consultation
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Fill in your details below and our counselor will evaluate your admission eligibility within 24 hours.
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
                        placeholder="e.g. Ananya Sen"
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
                        placeholder="ananya@example.com"
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
                        <option>Master&apos;s Degree (2 Years)</option>
                        <option>General Medicine (6-Year MD)</option>
                        <option>Dentistry (5-Year DMD)</option>
                        <option>PhD / Doctoral Studies</option>
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
                        <option>Information Technology</option>
                        <option>Business & Economics</option>
                        <option>Engineering & Technology</option>
                        <option>Medicine & Life Sciences</option>
                        <option>Arts, Design & Humanities</option>
                        <option>Natural Sciences</option>
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
                        <option>Prague (Capital)</option>
                        <option>Brno (Student Hub)</option>
                        <option>Olomouc (Historic)</option>
                        <option>Plzeň (Engineering)</option>
                        <option>Pardubice (Science)</option>
                        <option>Opava (Silesian)</option>
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
                      <option>September 2026 (Main Autumn Intake)</option>
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
                      placeholder="e.g. I need assistance with nostrification for my Indian high school diploma."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#ca2221] text-white shadow-lg shadow-red-900/20 transition-all text-sm uppercase tracking-wider"
                  >
                    Submit Free Czechia Consultation Request
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
