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
function TechIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function SoftwareIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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

function SecurityIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

function BiotechIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
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

function FinanceIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MarketingIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

function GreenEnergyIcon() {
  return (
    <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

export default function IrelandStudyAbroadContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Computer Science / IT",
    level: "Master's Degree (Level 9)",
    intake: "September 2026 (Major Intake)",
    cityPreference: "Dublin (Capital)",
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
      title: "Information Technology",
      icon: <TechIcon />,
      desc: "Comprehensive software architectures, networking, and IT enterprise systems directly aligned with Dublin's Silicon Docks tech giants.",
      popularSpecializations: ["Enterprise IT", "Information Systems", "Network Architecture", "IT Project Management"],
    },
    {
      title: "Software Engineering",
      icon: <SoftwareIcon />,
      desc: "Rigorous algorithmic engineering, full-stack software development, DevOps, and agile frameworks developed in close partnership with tech leaders.",
      popularSpecializations: ["Full Stack Development", "Systems Programming", "Mobile Software", "Distributed Systems"],
    },
    {
      title: "Artificial Intelligence",
      icon: <AiIcon />,
      desc: "Cutting-edge machine learning, computer vision, deep learning, and generative AI research supported by national AI testbeds.",
      popularSpecializations: ["Machine Learning", "Natural Language Processing", "Robotics & Perception", "AI Ethics & Governance"],
    },
    {
      title: "Cybersecurity",
      icon: <SecurityIcon />,
      desc: "Cyber Ireland endorsed degrees teaching threat intelligence, digital forensics, ethical hacking, and critical infrastructure defense.",
      popularSpecializations: ["Network Security", "Digital Forensics", "Incident Response", "Cloud Security"],
    },
    {
      title: "Cloud Computing",
      icon: <CloudIcon />,
      desc: "Specialized degrees in AWS, Azure, virtualization, distributed data management, and containerization in Europe's data center capital.",
      popularSpecializations: ["Cloud Solutions Architecture", "DevOps & SRE", "Virtualization Systems", "Serverless Computing"],
    },
    {
      title: "Biotech & Pharmaceutical Sciences",
      icon: <BiotechIcon />,
      desc: "9 of the world's top 10 pharma corporations have massive manufacturing hubs in Ireland. High demand for bio-process engineers and chemists.",
      popularSpecializations: ["Biopharmaceutical Science", "Medical Technology (MedTech)", "Clinical Research", "Process Chemistry"],
    },
    {
      title: "Business Administration",
      icon: <BusinessIcon />,
      desc: "Triple-accredited MBA and management programs preparing students for leadership in multinational European headquarters.",
      popularSpecializations: ["International Business", "Strategic Management", "Supply Chain & Logistics", "Human Resources"],
    },
    {
      title: "Finance & Accounting",
      icon: <FinanceIcon />,
      desc: "ACCA, CIMA, and ACA exemptions with direct recruitment into Dublin's International Financial Services Centre (IFSC) and Big Four.",
      popularSpecializations: ["Financial Analytics", "FinTech", "Corporate Finance & M&A", "Investment & Risk"],
    },
    {
      title: "Digital Marketing",
      icon: <MarketingIcon />,
      desc: "Modern data-led digital marketing, growth hacking, SEO, and social platform strategies in the home city of Google, TikTok, and Meta.",
      popularSpecializations: ["E-Commerce Strategy", "Digital Analytics & SEM", "Brand Leadership", "Content Creation"],
    },
    {
      title: "Data Science & Analytics",
      icon: <DataIcon />,
      desc: "Big data architectures, statistical modeling, predictive analytics, and business intelligence across corporate decision engines.",
      popularSpecializations: ["Big Data Engineering", "Business Analytics", "Predictive Modeling", "Data Visualization"],
    },
    {
      title: "Engineering",
      icon: <EngineeringIcon />,
      desc: "Engineers Ireland accredited qualifications across mechanical, electronic, biomedical, civil, and aeronautical engineering.",
      popularSpecializations: ["Biomedical Engineering", "Electronic Systems", "Mechanical Design", "Civil Infrastructure"],
    },
    {
      title: "Environmental & Renewable Energy",
      icon: <GreenEnergyIcon />,
      desc: "Pioneering offshore wind, clean grid integration, environmental conservation, and circular economic sustainability across the EU.",
      popularSpecializations: ["Wind & Ocean Energy", "Sustainability Management", "Environmental Assessment", "Carbon Neutral Policy"],
    },
  ];

  const whyStudyIreland = [
    {
      title: "English-Speaking EU Member",
      desc: "The only native English-speaking country in the European Union post-Brexit, providing completely immersive communication and study.",
      badge: "100% English Native",
    },
    {
      title: "European Silicon Valley",
      desc: "EMEA headquarters of Google, Meta, Apple, Microsoft, TikTok, Intel, and Pfizer offer unrivaled career internships and recruitment.",
      badge: "Silicon Docks Hub",
    },
    {
      title: "2-Year Post-Study Work (Stamp 1G)",
      desc: "Eligible Level 9 Master's graduates receive a 24-month stay-back visa to secure graduate employment and transition to a Critical Skills permit.",
      badge: "2-Year Stamp 1G",
    },
    {
      title: "Work While Studying (Stamp 2)",
      desc: "Legal permission to work 20 hours per week during academic semesters and 40 hours per week during holidays, earning €12.70+/hr minimum wage.",
      badge: "20 / 40 Hrs Work",
    },
    {
      title: "Internationally Recognised Degrees",
      desc: "National Framework of Qualifications (NFQ Levels 7 to 10) recognized globally across the EU, USA, UK, Canada, and commonwealth nations.",
      badge: "NFQ Accredited",
    },
    {
      title: "Practical & Industry-Oriented",
      desc: "Universities co-design curricula directly with IDA Ireland industry partners, featuring mandatory paid co-op internships.",
      badge: "Paid Co-Op Internships",
    },
    {
      title: "Generous Scholarships",
      desc: "Government of Ireland International Education Scholarships (GOI-IES) and university merit discounts ranging from €2,000 to 50% tuition.",
      badge: "GOI-IES Grants",
    },
    {
      title: "Safe, Friendly & Welcoming",
      desc: "Consistently ranked among the top 10 safest and most peaceful countries in the Global Peace Index, celebrated for world-famous hospitality.",
      badge: "Global Top 10 Safety",
    },
  ];

  const universities = [
    {
      name: "Trinity College Dublin (TCD)",
      city: "Dublin",
      tag: "Founded 1592 • Ranked #1 in Ireland",
      specialty: "Computer Science, Literature, Law, Medicine, Business",
      ranking: "QS World Top 90",
    },
    {
      name: "University College Dublin (UCD)",
      city: "Dublin",
      tag: "Triple-Accredited Business (Smurfit)",
      specialty: "Data Analytics, Biotechnology, Business, Engineering, Agriculture",
      ranking: "QS World Top 130",
    },
    {
      name: "University of Galway",
      city: "Galway",
      tag: "Global MedTech Capital Hub",
      specialty: "Biomedical Engineering, Marine Science, Software, Human Rights",
      ranking: "World Top 300",
    },
    {
      name: "University College Cork (UCC)",
      city: "Cork",
      tag: "World's First Green Flag Campus",
      specialty: "Pharmaceutical Chemistry, Food Science, Microelectronics, Law",
      ranking: "World Top 300",
    },
    {
      name: "University of Limerick (UL)",
      city: "Limerick",
      tag: "Pioneer in Paid Co-Op Work Placements",
      specialty: "Aeronautical Engineering, Software, Supply Chain, Sports Science",
      ranking: "High Employability Leader",
    },
    {
      name: "Dublin City University (DCU)",
      city: "Dublin",
      tag: "Ireland's University of Enterprise",
      specialty: "Artificial Intelligence, Communications, Finance, Education",
      ranking: "Top Young University",
    },
    {
      name: "Maynooth University",
      city: "Maynooth (Co. Kildare)",
      tag: "Rapidly Growing Research Institution",
      specialty: "Computer Science, Immunology, Humanities, International Finance",
      ranking: "High Student Satisfaction",
    },
    {
      name: "Technological University Dublin (TU Dublin)",
      city: "Dublin (Grangegorman)",
      tag: "Ireland's First Technological University",
      specialty: "Architecture, Cybersecurity, Hospitality, Applied Sciences",
      ranking: "Industry-Connected Tech",
    },
  ];

  const cities = [
    {
      name: "DUBLIN",
      tagline: "Capital, Silicon Docks & Financial Epicenter",
      desc: "Ireland's bustling capital and European home to tech giants (Google, Meta, LinkedIn, Stripe). Historic cobblestones, vibrant arts, and the International Financial Services Centre (IFSC).",
      vibe: "Dynamic, Global & Tech-Centric",
      costRange: "€1,200 – €2,000/mo",
    },
    {
      name: "CORK",
      tagline: "Rebel City, Pharma Capital & Culinary Heart",
      desc: "Ireland's second-largest city and a worldwide pharmaceutical powerhouse (Pfizer, J&J, Apple European HQ). Youthful, welcoming, and famous for artisan markets and river waterways.",
      vibe: "Friendly, Innovative & High-Paying",
      costRange: "€950 – €1,500/mo",
    },
    {
      name: "GALWAY",
      tagline: "Cultural Capital & World MedTech Center",
      desc: "Perched on the Wild Atlantic Way, Galway is renowned for busking musicians, traditional arts, and a colossal medical device cluster employing thousands of engineers.",
      vibe: "Artistic, Coastal & MedTech Hub",
      costRange: "€900 – €1,450/mo",
    },
    {
      name: "LIMERICK",
      tagline: "Engineering, Aviation & Enterprise City",
      desc: "Located on the majestic River Shannon, Limerick boasts world-class sporting facilities, cutting-edge software research, aviation finance, and lower student rental costs.",
      vibe: "Industrial, Sporty & Budget-Friendly",
      costRange: "€850 – €1,350/mo",
    },
    {
      name: "WATERFORD",
      tagline: "Ireland's Oldest City & Sunny Southeast",
      desc: "A charming coastal student town combining Viking heritage, crystal craft, South East Technological University (SETU), and peaceful, economical living.",
      vibe: "Relaxed, Historic & Affordable",
      costRange: "€800 – €1,250/mo",
    },
  ];

  const livingCosts = [
    {
      item: "Accommodation (Student Residence / Flatshare)",
      cost: "€800 – €1,500+",
      desc: "Shared student houses average €600–€900/mo in Cork/Limerick; purpose-built student dorms in Dublin range €900–€1,400/mo.",
      icon: "home",
    },
    {
      item: "Food & Groceries",
      cost: "€200 – €400+",
      desc: "Supermarkets (Lidl, Aldi, Tesco, Dunnes) & affordable local butcheries and grocery shops.",
      icon: "food",
    },
    {
      item: "Public Transportation",
      cost: "€40 – €100+",
      desc: "Young Adult / Student Leap Card provides 50% discount on all Dublin Bus, Luas, Dart & regional Bus Éireann.",
      icon: "transport",
    },
    {
      item: "Internet & Mobile",
      cost: "€30 – €80+",
      desc: "High-speed 5G unlimited European mobile data packages (Vodafone, Three, Eir) & home broadband.",
      icon: "phone",
    },
    {
      item: "Utilities (Gas, Heating, Electricity)",
      cost: "€50 – €120+",
      desc: "Usually included in managed student residences; split proportionately in private house shares.",
      icon: "utilities",
    },
    {
      item: "Personal & Leisure",
      cost: "€150 – €400+",
      desc: "Cinema, traditional live music pubs, student society memberships, weekend Atlantic coast getaways.",
      icon: "leisure",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to get an Irish student visa?",
      a: "The Irish Immigration Service Delivery (ISD) and VFS Global typically process long-term study visas (D-Visa) within 4 to 8 weeks from the date of biometric submission. During peak summer intake months (July and August), processing times can extend slightly, so we advise applying at least 8 to 12 weeks before your course starts.",
    },
    {
      q: "Can I work while studying in Ireland?",
      a: "Yes. Non-EEA students holding a valid Stamp 2 student permission can work up to 20 hours per week during university term time and up to 40 hours per week during designated holiday periods (June, July, August, September, and 15 December to 15 January). Ireland's statutory minimum wage is €12.70 per hour.",
    },
    {
      q: "What is the post-study work policy in Ireland (Third Level Graduate Scheme)?",
      a: "Under the Third Level Graduate Scheme (Stamp 1G), international students who graduate from an eligible Irish higher education institution can remain in Ireland to seek employment. Honours Bachelor's degree (NFQ Level 8) graduates receive up to 12 months. Master's degree (NFQ Level 9) and Doctoral (NFQ Level 10) graduates receive up to 24 months (2 full years).",
    },
    {
      q: "Is a study gap acceptable for Ireland?",
      a: "Yes, reasonable study gaps are acceptable provided they are transparently explained with verifiable documentation (such as employment experience letters, salary slips, internships, or professional development courses). Umang Career Consultancy helps you build a strong Statement of Purpose (SOP) that justifies your academic timeline.",
    },
    {
      q: "Can I bring my spouse or family to Ireland while studying?",
      a: "For most ordinary student visa categories (undergraduate and taught master's), family accompaniment is restricted by Irish immigration rules. However, exceptions exist for full-time PhD and doctoral research scholars under specific funded fellowships.",
    },
    {
      q: "Can I get permanent residency in Ireland after studying?",
      a: "Studying in Ireland does not automatically grant permanent residency. However, after graduating, students transition to the 2-year Stamp 1G post-study work permit. Securing a qualifying job allows you to obtain a Critical Skills Employment Permit (CSEP). After 2 years on a CSEP, you can apply for Stamp 4 (permanent residency rights) without needing labour market tests.",
    },
    {
      q: "Do I need IELTS to study in Ireland?",
      a: "Most Irish universities require proof of English proficiency (IELTS, PTE Academic, or TOEFL iBT). Generally, a minimum IELTS score of 6.0–6.5 is required for Bachelor's and 6.5 (with no band less than 6.0) for Master's programs. In select circumstances, certain universities accept an English Medium of Instruction (MOI) letter or Duolingo English Test (DET).",
    },
    {
      q: "Can I study in Ireland completely in English?",
      a: "Yes! Ireland is a 100% native English-speaking country. All university lectures, coursework, campus life, research, and corporate employment are conducted in English, providing an effortless and immersive international experience.",
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
          1. HERO SECTION (EMERALD GREEN & ORANGE RIBBONS + METRICS)
      ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1e38] via-[#0d284d] to-[#0a1e38] text-white pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Subtle Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22c55e]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f97316]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
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
            <span className="text-[#22c55e] font-semibold">Ireland</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-ping" />
                <span className="text-slate-100 font-semibold tracking-wide">
                  European Union • Native English-Speaking Tech Powerhouse
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#22c55e]">Ireland</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#22c55e] mt-2">
                  Silicon Docks Careers & 2-Year Graduate Visas
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                Ireland is an English-speaking European destination known for its world-class universities, thriving technology and pharmaceutical sectors, high-impact research, and the European headquarters of Google, Meta, Apple, Pfizer, and Intel.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-300 font-medium">English Native</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#22c55e]">2 Years</div>
                  <div className="text-xs text-slate-300 font-medium">Stamp 1G (PSW)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">20 / 40 Hrs</div>
                  <div className="text-xs text-slate-300 font-medium">Stamp 2 Work</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#e52928]">Top 10</div>
                  <div className="text-xs text-slate-300 font-medium">Global Pharma/Tech</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#consultation"
                  className="px-7 py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#c9201f] text-white shadow-lg shadow-red-900/30 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  Apply for Ireland 2026/27
                </a>
                <a href="tel:+919173186109" className="anim-phone-ring inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all text-center"
                >
                  <PhoneIcon />
                  <span>+91 91731 86109</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual (Students Collaborating in Dublin) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md group anim-gentle-float">
                <Image
                  src="/ireland-hero.png"
                  alt="International University Students Studying in Ireland"
                  fill
                  className="object-cover p-1 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Micro Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 shadow-xl flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#169B62] to-[#FF883E] flex items-center justify-center text-white font-black text-sm shadow-md">
                    IE
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold flex items-center gap-1.5">
                      <span>European Union Member (ILEP & NFQ)</span>
                      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    </div>
                    <p className="text-slate-300 text-[11px] leading-tight mt-0.5">
                      Silicon Docks EMEA Headquarters • Stamp 1G Pathway
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. ABOUT IRELAND (KEY HIGHLIGHTS & DUBLIN VISUAL)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Landmark Visual */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/destinations/ireland-landmark.jpg"
                  alt="Historic Dublin City Streetscape with Spire, Ireland"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#169B62] text-white text-xs font-bold rounded-md uppercase tracking-wider">
                    Dublin, Ireland
                  </span>
                  <h3 className="text-xl font-bold mt-2">Historic Dublin & Silicon Docks</h3>
                  <p className="text-slate-200 text-xs mt-1">
                    Where ancient Georgian architecture meets the global digital economy
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
                <span>Official Language: English & Irish (Gaeilge)</span>
                <span>Currency: Euro (€ / EUR)</span>
              </div>
            </div>

            {/* Right Information Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-[#169B62] text-xs font-bold tracking-wider uppercase">
                The Emerald Isle
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
                About Ireland & Its Higher Education System
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Ireland is an English-speaking European island nation located in Northwestern Europe and an influential member of the European Union. Known as the &ldquo;European Silicon Valley,&rdquo; it combines high-ranking universities, a powerhouse pharmaceutical sector, and an exceptionally safe, friendly society.
              </p>

              {/* 9 Core Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Island nation in Northwestern Europe and key EU member",
                  "Sole primary English-speaking country in the European Union",
                  "Global technology & pharmaceutical manufacturing powerhouse",
                  "EMEA headquarters of Google, Apple, Meta, Pfizer & Intel",
                  "Rich cultural heritage, literary history & celebrated hospitality",
                  "Safe, progressive, friendly, and diverse multicultural society",
                  "Multi-billion euro research & innovation ecosystem (SFI)",
                  "High-demand careers in IT, AI, Pharma, FinTech & MedTech",
                  "Stamp 1G provides up to 2 full years of post-study stay-back",
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
          3. TOP COURSES IN IRELAND (12 DISCIPLINES)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Courses in Ireland for International Students" subtitle="Irish degree programs are closely mapped to the national Critical Skills shortage lists, ensuring high post-graduation employment and sponsorship." />

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
          4. WHY STUDY IN IRELAND?
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Study in Ireland?" subtitle="Ireland offers international students an English-speaking academic environment with strong links between higher education, research, and global industry." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyIreland.map((item, idx) => (
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

          {/* Third Level Graduate Scheme (Stamp 1G) Spotlight Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#0a1e38] via-[#0d2a52] to-[#169B62] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <span className="px-3 py-1 rounded-md bg-[#FF883E] text-slate-950 font-extrabold text-xs uppercase tracking-wider">
                  Third Level Graduate Programme (Stamp 1G)
                </span>
                <h4 className="text-2xl font-bold text-white">
                  Up to 24 Months of Post-Study Work Permission
                </h4>
                <p className="text-sm text-slate-200 max-w-3xl leading-relaxed">
                  Graduates of NFQ Level 8 (Honours Bachelor&apos;s) receive <strong>12 months</strong>, while NFQ Level 9 (Master&apos;s) and Level 10 (PhD) graduates receive <strong>24 months (2 full years)</strong> of unrestricted work permission to secure graduate employment and qualify for a Critical Skills Employment Permit (CSEP).
                </p>
              </div>
              <a href="tel:+919173186109" className="anim-phone-ring px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#1ea750] text-white font-bold text-sm shadow-md transition-all shrink-0 whitespace-nowrap"
              >
                Check Stamp 1G Eligibility
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. POPULAR STUDENT CITIES IN IRELAND
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Popular Student Cities in the Republic of Ireland" subtitle="Explore dynamic university cities across the Republic of Ireland offering distinctive career ecosystems, culture, and coastal charm." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 uppercase">
                      Republic of Ireland
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
                  <span className="text-slate-400 font-medium">City Character:</span>
                  <span className="font-semibold text-slate-800">{city.vibe}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 font-medium">
            * Note: Belfast is in Northern Ireland (United Kingdom). For Republic of Ireland study and Stamp 1G post-study permissions, consider Dublin, Cork, Galway, Limerick, and Waterford.
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. TOP UNIVERSITIES & INSTITUTIONS IN IRELAND
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Top Universities in Ireland" subtitle="Umang Career Consultancy can help students compare institutions based on their academic profile, preferred course, budget, location and career plans." />

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
                Academic Investment
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Ireland Tuition Fees
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tuition fees vary considerably depending on the institution, program and level of study. For example, Education in Ireland lists postgraduate fees for non-EU students ranging from approximately €12,000 to €40,000.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0a1e38] text-white text-xs uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="px-5 py-4">Study Level</th>
                        <th className="px-5 py-4">Indicative Annual Tuition (€ EUR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Bachelor&apos;s Degree (NFQ Level 7/8)</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">€8,000 – €25,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Master&apos;s Degree (NFQ Level 9)</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">€12,000 – €40,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">Diploma / Professional Programs</td>
                        <td className="px-5 py-4 text-[#e52928] font-bold">€6,000 – €15,000+</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[#0a1e38]">PhD / Doctoral Studies (NFQ Level 10)</td>
                        <td className="px-5 py-4 text-emerald-600 font-semibold">
                          Varies by institution & research area
                        </td>
                      </tr>
                      <tr className="bg-slate-50/80">
                        <td className="px-5 py-3.5 font-bold text-slate-600 text-xs">Main Intakes</td>
                        <td className="px-5 py-3.5 font-bold text-[#0a1e38] text-xs">
                          September (Primary Intake); selected programs in January/February
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Working While Studying Info */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5 text-xs text-emerald-900 leading-relaxed">
                <div className="font-extrabold text-sm text-emerald-950 flex items-center gap-2">
                  <svg className="w-4 h-4 inline mr-1 text-[#0a1e38]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> Stamp 2 Student Part-Time Work Permission
                </div>
                <p>
                  International students holding eligible Stamp 2 permission can work <strong>up to 20 hours per week</strong> during term time and <strong>up to 40 hours per week</strong> during designated holiday periods (June, July, August, September, and 15 December – 15 January).
                </p>
                <p className="font-semibold text-emerald-800">
                  Irish statutory minimum wage: €12.70 / hour.
                </p>
              </div>
            </div>

            {/* Right: Monthly Cost of Living */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-[#e52928] text-xs font-bold tracking-wider uppercase">
                Living Expenses
              </div>
              <h2 className="text-3xl font-extrabold text-[#0a1e38] tracking-tight">
                Monthly Cost of Living
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Living costs depend significantly on the city, accommodation and personal lifestyle. Dublin generally has higher accommodation costs than other Irish university cities like Cork, Galway, or Limerick.
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
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                    Estimated Student Monthly Budget
                  </div>
                  <div className="text-xs text-blue-700 mt-0.5">
                    Includes housing, groceries, transport & leisure
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-black text-blue-900">
                  €1,270 – €2,600+ <span className="text-xs font-medium text-blue-600">/ month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          8. 6-STEP ADMISSION & IRELAND STUDENT VISA (STAMP 2)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Your 6-Step Admission & Ireland Student Visa Roadmap" subtitle="Umang Career Consultancy guides you through ILEP program verification, university offer letters, financial documentation, and Irish Residence Permit (IRP) registration." variant="dark" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Course Discovery & ILEP Check",
                desc: "We verify that your chosen program is listed on the Interim List of Eligible Programmes (ILEP) for student immigration compliance.",
              },
              {
                step: "02",
                title: "University Application & Statement of Purpose",
                desc: "Drafting a high-impact SOP, academic resume, and securing letters of recommendation for top Irish university applications.",
              },
              {
                step: "03",
                title: "Letter of Offer & Tuition Fee Payment",
                desc: "Receiving your unconditional offer letter and making the required initial tuition payment via secure university transfer (Flywire / PayToStudy).",
              },
              {
                step: "04",
                title: "Financial Evidence & Private Health Insurance",
                desc: "Organizing 6-month bank statements showing immediate access to €10,000+ living funds and activating compliant Irish private medical insurance.",
              },
              {
                step: "05",
                title: "Irish Student Visa (AVATS) Submission",
                desc: "Completing the online AVATS visa application, file audit, and submitting documents at your regional VFS Global visa application center.",
              },
              {
                step: "06",
                title: "Pre-Departure & Irish Residence Permit (IRP)",
                desc: "Flight booking, student accommodation arrangement, and booking your appointment at the Burgh Quay Registration Office / Garda Station for your Stamp 2 IRP card.",
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
          9. FREQUENTLY ASKED QUESTIONS (FAQS)
      ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions About Studying in Ireland" subtitle="Transparent answers regarding visas, Stamp 1G post-study permissions, study gaps, family accompaniment, and permanent residency." />

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
          10. CONSULTATION FORM & CONTACT CALLOUT
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
                  Start Your Study Journey in Ireland
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Get personalized guidance for course selection, university applications, ILEP eligibility, financial documentation, and your Ireland student visa.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>100% English-Taught University Matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Stamp 1G (2-Year Stay-Back) Strategic Planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Comprehensive AVATS Visa File Audit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Pre-Departure & Accommodation Support</span>
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
                    Your Ireland study abroad inquiry has been received. Our European education specialist will contact you at {formData.phone || "your number"} shortly.
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
                    Book Free Ireland Consultation
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
                        placeholder="e.g. Karan Desai"
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
                        placeholder="karan@example.com"
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
                        <option>Master&apos;s Degree (NFQ Level 9 - 1 Year)</option>
                        <option>Bachelor&apos;s Degree (NFQ Level 8 - 3-4 Years)</option>
                        <option>Postgraduate Diploma (NFQ Level 9)</option>
                        <option>PhD / Doctoral Studies (NFQ Level 10)</option>
                        <option>Higher Diploma / Conversion Course</option>
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
                        <option>Information Technology & Software</option>
                        <option>Artificial Intelligence & Data Science</option>
                        <option>Biotech & Pharmaceutical Sciences</option>
                        <option>Business Administration & Mgt</option>
                        <option>Finance & Accounting</option>
                        <option>Cybersecurity & Cloud Computing</option>
                        <option>Engineering (Civil/Mech/Biomed)</option>
                        <option>Digital Marketing</option>
                        <option>Environmental Science & Green Energy</option>
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
                        <option>Dublin (Capital & Silicon Docks)</option>
                        <option>Cork (Pharma Capital)</option>
                        <option>Galway (MedTech Hub)</option>
                        <option>Limerick (Engineering & Aviation)</option>
                        <option>Waterford (Sunny Southeast)</option>
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
                      <option>September 2026 (Major Autumn Intake)</option>
                      <option>January / February 2027 (Spring Intake)</option>
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
                      placeholder="e.g. Can you explain the 2-year Stamp 1G stay-back and Critical Skills work permit process?"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold bg-[#e52928] hover:bg-[#ca2221] text-white shadow-lg shadow-red-900/20 transition-all text-sm uppercase tracking-wider"
                  >
                    Submit Free Ireland Consultation Request
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
