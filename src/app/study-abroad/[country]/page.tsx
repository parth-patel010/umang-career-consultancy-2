import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CountryInfo {
  name: string;
  flag: string;
  image: string;
  tagline: string;
  description: string;
  topIntakes: string;
  workPermit: string;
  avgTuition: string;
  costOfLiving: string;
  languageReq: string;
  topUniversities: string[];
  popularCourses: string[];
  reasonsToStudy: string[];
}

const COUNTRIES_DATA: Record<string, CountryInfo> = {
  canada: {
    name: "Canada",
    flag: "CA",
    image: "/destinations/canada.jpg",
    tagline: "World-Class Education, Flexible Work Rights & Clear PR Pathways",
    description:
      "Canada stands as one of the world's most sought-after higher education destinations. With globally acclaimed universities, affordable tuition structures, safe multicultural communities, and post-graduation work permits (PGWP) lasting up to 3 years, Canada is the gateway to long-term career success and permanent residency.",
    topIntakes: "Fall (September), Winter (January), Summer (May)",
    workPermit: "Up to 3 Years Post-Graduation Work Permit (PGWP)",
    avgTuition: "CAD $16,000 - $32,000 / year",
    costOfLiving: "CAD $12,000 - $18,000 / year",
    languageReq: "IELTS 6.5+ / PTE 60+ (Duolingo accepted by select colleges)",
    topUniversities: [
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
      "University of Waterloo",
      "Centennial College",
      "Seneca Polytechnic",
      "University of Windsor",
      "Conestoga College"
    ],
    popularCourses: [
      "Computer Science & Cloud Architecture",
      "Data Analytics & Big Data",
      "Healthcare, Nursing & Biotechnology",
      "Supply Chain & Project Management",
      "Business Administration & FinTech"
    ],
    reasonsToStudy: [
      "Post-Graduation Work Permit (PGWP) up to 3 years with open employer flexibility",
      "Direct permanent residency pathways through Express Entry & Provincial Nominee Programs (PNP)",
      "Co-op academic degrees enabling paid industry internship experience while studying",
      "Consistently ranked in the world's top 5 safest countries with unmatched quality of life"
    ]
  },
  usa: {
    name: "USA",
    flag: "USA",
    image: "/destinations/usa.jpg",
    tagline: "The Pinnacle of Global Research, Innovation & Career Acceleration",
    description:
      "The United States is home to the world's most prestigious universities and tech giants. Offering unmatched academic flexibility, groundbreaking research facilities, and up to 3 years of STEM OPT work authorization, a US degree positions you at the forefront of global industry leadership.",
    topIntakes: "Fall (August/September), Spring (January)",
    workPermit: "Up to 3 Years STEM OPT (12 months + 24 months extension)",
    avgTuition: "$20,000 - $45,000 / year",
    costOfLiving: "$12,000 - $20,000 / year",
    languageReq: "IELTS 6.5+ / TOEFL 85+ / Duolingo 110+",
    topUniversities: [
      "Johns Hopkins University",
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "Northeastern University",
      "Arizona State University",
      "University of South Florida",
      "Purdue University",
      "University of North Texas"
    ],
    popularCourses: [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Cybersecurity",
      "MBA, Finance & Investment Banking",
      "Biomedical & Mechanical Engineering",
      "Pharmaceutical Sciences"
    ],
    reasonsToStudy: [
      "Top-tier STEM OPT work authorization allowing up to 3 years of career employment in the US",
      "Unmatched campus research assistantships (RA/TA) providing tuition fee remissions and monthly stipends",
      "Direct campus recruitment by Fortune 500 giants (Google, Microsoft, Apple, Amazon, Tesla)",
      "Extreme curriculum flexibility with multidisciplinary major/minor degree configurations"
    ]
  },
  uk: {
    name: "United Kingdom",
    flag: "UK",
    image: "/destinations/uk.jpg",
    tagline: "Centuries of Academic Prestige, 1-Year Master's & 2-Year Graduate Visa",
    description:
      "The United Kingdom provides world-renowned education with intensive 1-year Master's degree programs that save substantial tuition and living costs. With the Graduate Route Visa allowing 2 years of post-study employment, the UK offers an extraordinary springboard for international professionals.",
    topIntakes: "September/October & January/February",
    workPermit: "2 Years Graduate Route Visa (3 Years for PhD)",
    avgTuition: "£13,000 - £26,000 / year",
    costOfLiving: "£9,000 - £14,000 / year (Lower outside London)",
    languageReq: "IELTS 6.0 - 6.5 / PTE 58+ (MOI waivers available)",
    topUniversities: [
      "Middlesex University London",
      "University of Leeds",
      "University of Manchester",
      "Coventry University",
      "University of Birmingham",
      "University of Hertfordshire",
      "Cardiff University",
      "Queen Mary University of London"
    ],
    popularCourses: [
      "International Business & Strategic Management",
      "FinTech, Accounting & Financial Analysis",
      "Data Analytics & Cyber Intelligence",
      "Public Health & Clinical Research",
      "LLM Corporate & Commercial Law"
    ],
    reasonsToStudy: [
      "1-year master's degrees enable students to graduate and enter high-paying careers 12 months sooner",
      "No employer sponsorship or job offer required to obtain the 2-Year Graduate Route Visa",
      "Centuries-old universities recognized by employers, academic boards, and institutions worldwide",
      "London and UK cities serve as global finance, technology, legal, and creative capitals"
    ]
  },
  australia: {
    name: "Australia",
    flag: "AUS",
    image: "/destinations/australia.jpg",
    tagline: "Group of Eight Excellence, High Minimum Wages & Sunny Lifestyle",
    description:
      "Australia is renowned for its world-class Group of Eight institutions, exceptional student support frameworks, and generous post-study work rights. Boasting among the highest minimum wage rates in the world, students can comfortably offset their living expenses through permitted part-time work.",
    topIntakes: "Semester 1 (February), Semester 2 (July), Term 3 (November)",
    workPermit: "2 to 4 Years Post-Study Work Visa (Subclass 485)",
    avgTuition: "AUD $24,000 - $42,000 / year",
    costOfLiving: "AUD $21,000 - $26,000 / year",
    languageReq: "IELTS 6.5 / PTE 58+ / TOEFL iBT 79+",
    topUniversities: [
      "University of Melbourne",
      "University of Sydney",
      "University of New South Wales (UNSW)",
      "Monash University",
      "University of Queensland",
      "Deakin University",
      "RMIT University",
      "Macquarie University"
    ],
    popularCourses: [
      "Information Systems & Software Engineering",
      "Nursing, Pharmacy & Allied Healthcare",
      "Civil, Structural & Mining Engineering",
      "Professional Accounting & Financial Management",
      "Biotechnology & Environmental Science"
    ],
    reasonsToStudy: [
      "7 Australian universities consistently rank within the prestigious Global Top 100",
      "Post-study work rights ranging from 2 to 4+ years depending on qualification and regional location",
      "High minimum hourly wage providing substantial financial independence while studying",
      "Clear permanent residency pathways for qualifications on the Medium and Long-term Strategic Skills List (MLTSSL)"
    ]
  },
  germany: {
    name: "Germany",
    flag: "DE",
    image: "/destinations/germany.jpg",
    tagline: "Tuition-Free Public Universities, Automotive Hub & 18-Month Job Search Visa",
    description:
      "Germany is Europe's industrial powerhouse, offering virtually tuition-free education at world-renowned public universities. With cutting-edge research in automotive engineering, AI, robotics, and renewable energy, coupled with an 18-month stay-back visa, Germany is the premier choice for ambitious tech professionals.",
    topIntakes: "Winter Semester (September/October), Summer Semester (March/April)",
    workPermit: "18 Months Jobseeker Residence Permit",
    avgTuition: "€0 - €3,000 / year (Nominal administrative contribution)",
    costOfLiving: "€11,208 / year (Mandatory Blocked Account)",
    languageReq: "IELTS 6.5+ / PTE 60+ (English programs) or German B2/C1",
    topUniversities: [
      "Technical University of Munich (TUM)",
      "RWTH Aachen University",
      "Karlsruhe Institute of Technology (KIT)",
      "TU Berlin",
      "Constructor University Bremen",
      "University of Stuttgart",
      "Heidelberg University",
      "Frankfurt School of Finance & Management"
    ],
    popularCourses: [
      "Automotive & Mechatronics Engineering",
      "Artificial Intelligence & Autonomous Systems",
      "Renewable Energy & Power Engineering",
      "Computer Science & Distributed Networks",
      "International Management & Supply Chain"
    ],
    reasonsToStudy: [
      "Tuition-free higher education at globally top-ranked state universities",
      "Direct placement opportunities with BMW, Mercedes-Benz, Siemens, Bosch, and SAP",
      "18 months stay-back visa providing ample time to secure full-time professional employment",
      "EU Blue Card and fast-track German permanent residency within 21–33 months of working"
    ]
  },
  france: {
    name: "France",
    flag: "FR",
    image: "/destinations/france.jpg",
    tagline: "World-Class Grandes Écoles, Luxury Innovation & Affordable Living",
    description:
      "France offers an exceptional blend of prestigious academic institutions, elite Grandes Écoles, and a vibrant cultural heritage. Known for luxury management, aerospace, and cutting-edge tech research, international students also benefit from generous French government housing subsidies (CAF).",
    topIntakes: "September (Fall) & January/February (Spring)",
    workPermit: "Up to 2 Years APS / Post-Study Work Permit",
    avgTuition: "€3,000 - €14,000 / year",
    costOfLiving: "€8,000 - €12,000 / year (Subsidized by CAF up to 40%)",
    languageReq: "IELTS 6.0+ / Duolingo / English MOI accepted",
    topUniversities: [
      "HEC Paris",
      "Sorbonne University",
      "INSEAD",
      "ESSEC Business School",
      "EPITA School of Engineering",
      "Skema Business School",
      "CentraleSupélec",
      "KEDGE Business School"
    ],
    popularCourses: [
      "Luxury Brand & Fashion Management",
      "Culinary Arts & International Hospitality",
      "Aerospace & Aeronautical Engineering",
      "Artificial Intelligence & Big Data Analytics",
      "International Finance & Economics"
    ],
    reasonsToStudy: [
      "French government housing assistance (CAF) offsets up to 40% of student rental costs",
      "2-year stay back residence permit (APS) for Master's graduates from recognized institutions",
      "Hundreds of high-quality degree programs taught 100% in English",
      "Full Schengen area mobility with direct access to all 29 member countries"
    ]
  },
  ireland: {
    name: "Ireland",
    flag: "IE",
    image: "/destinations/ireland.jpg",
    tagline: "European Silicon Valley, 2-Year Stay Back & Tech Capital",
    description:
      "Ireland is the European headquarters for the world's leading technology, pharmaceutical, and financial enterprises. As the primary English-speaking nation in the European Union, Ireland offers a welcoming environment, world-class universities, and a seamless 2-year graduate stay-back visa.",
    topIntakes: "Autumn (September) & Spring (January)",
    workPermit: "2 Years Third Level Graduate Scheme (Master's graduates)",
    avgTuition: "€10,000 - €22,000 / year",
    costOfLiving: "€10,000 - €15,000 / year",
    languageReq: "IELTS 6.5 / PTE 62+ / Duolingo 110+",
    topUniversities: [
      "Trinity College Dublin (TCD)",
      "University College Dublin (UCD)",
      "National University of Ireland Galway",
      "University College Cork (UCC)",
      "Dublin City University (DCU)",
      "University of Limerick",
      "Technological University Dublin",
      "National College of Ireland (NCI)"
    ],
    popularCourses: [
      "Cloud Architecture & Software Development",
      "Biopharmaceutical Sciences & Medical Devices",
      "FinTech, Risk Analytics & Actuarial Science",
      "Cybersecurity & Distributed Systems",
      "Digital Marketing & Strategic Innovation"
    ],
    reasonsToStudy: [
      "European headquarters for Google, Apple, Meta, Pfizer, Microsoft, and LinkedIn",
      "2-year graduate stay-back visa with immediate hiring and sponsorship avenues",
      "Only native English-speaking economy within the European Union post-Brexit",
      "Consistently ranked in the world's top 10 most peaceful and friendly nations"
    ]
  },
  "new-zealand": {
    name: "New Zealand",
    flag: "NZ",
    image: "/destinations/new-zealand.jpg",
    tagline: "World-Class Universities, 3-Year Post-Study Work & Unmatched Safety",
    description:
      "100% of New Zealand's state universities rank in the top 3% globally. Offering breathtaking natural landscapes, a peaceful and welcoming society, and up to 3 years of post-study work rights, New Zealand offers a balanced, high-standard student lifestyle with strong long-term career avenues.",
    topIntakes: "Semester 1 (February) & Semester 2 (July)",
    workPermit: "Up to 3 Years Post-Study Work Visa",
    avgTuition: "NZD $22,000 - $35,000 / year",
    costOfLiving: "NZD $15,000 - $20,000 / year",
    languageReq: "IELTS 6.5+ / PTE 58+",
    topUniversities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
      "University of Waikato",
      "Lincoln University",
      "Auckland University of Technology (AUT)"
    ],
    popularCourses: [
      "Agribusiness, Viticulture & Food Technology",
      "Information Technology & Data Science",
      "Civil & Structural Engineering",
      "Environmental Science & Ecology",
      "Tourism, Event & Hospitality Leadership"
    ],
    reasonsToStudy: [
      "Every single university in the country ranks in the Global Top 3%",
      "Generous post-study work visa up to 3 years for master's and bachelor's qualifiers",
      "Ranked #2 on the Global Peace Index as one of the safest nations on earth",
      "Spouse work rights and dependent benefits available for eligible postgraduate candidates"
    ]
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const slug = resolved.country.toLowerCase();
  const c = COUNTRIES_DATA[slug] || {
    name: resolved.country.toUpperCase(),
    tagline: "Study Abroad Opportunities & Visa Guidance"
  };

  return {
    title: `Study in ${c.name} | Admissions, Visas & Scholarships | Umang Career Consultancy`,
    description: `Complete guide to study in ${c.name}. Explore top universities, admission eligibility, tuition fees, post-study work permits, and student visa processing with Umang Career Consultancy.`,
  };
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const resolved = await params;
  const slug = resolved.country.toLowerCase();

  // If slug is not found in our pre-defined dictionary, generate a graceful generic destination profile
  const country: CountryInfo = COUNTRIES_DATA[slug] || {
    name: resolved.country.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    flag: "GLOBAL",
    image: `/destinations/${slug}.jpg`,
    tagline: `Global Academic Excellence & Career Pathways in ${resolved.country.replace(/-/g, " ")}`,
    description: `Pursuing your higher education in ${resolved.country.replace(/-/g, " ")} opens doors to internationally recognized degrees, rich cultural immersion, and thriving career opportunities. Umang Career Consultancy provides end-to-end guidance from university selection to visa lodgement.`,
    topIntakes: "Fall (September/October) & Spring (January/February)",
    workPermit: "Applicable Post-Study Work & Jobseeker Permits",
    avgTuition: "€3,000 - €15,000 / year (Varies by institution)",
    costOfLiving: "€8,000 - €12,000 / year",
    languageReq: "IELTS / PTE / English MOI accepted",
    topUniversities: [
      "Top National State Universities",
      "Leading Technical & Polytechnic Institutes",
      "Accredited Business Schools & Colleges"
    ],
    popularCourses: [
      "Computer Science & Information Technology",
      "Business & International Management",
      "Engineering & Applied Sciences",
      "Healthcare, Medicine & Life Sciences"
    ],
    reasonsToStudy: [
      "Internationally recognized degrees fully compliant with global standards",
      "Affordable tuition fees compared to other Western destinations",
      "High student visa grant ratio with transparent processing",
      "Expansive European and international career networking opportunities"
    ]
  };

  return (
    <main className="w-full bg-[#f8fafc] text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full bg-[#0a1e38] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={country.image}
            alt={country.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e38] via-[#0a1e38]/90 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <Link
              href="/study-abroad"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors"
            >
              <span>← Back to All Destinations</span>
            </Link>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs sm:text-sm font-bold border border-white/20">
              <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[11px] font-black tracking-wider border border-white/30">{country.flag}</span>
              <span>Study Abroad Destination Guide</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              Study in {country.name}
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
              {country.tagline}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="px-7 py-3.5 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-500/30 transition-all hover:scale-105"
              >
                Apply for {country.name}
              </a>
              <a
                href="tel:+919173186109"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-all"
              >
                Call: +91 91731 86109
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Fact Matrix */}
      <section className="w-full bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Post-Study Work</div>
              <div className="text-sm sm:text-base font-extrabold text-[#0a1e38] mt-1">{country.workPermit}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Typical Intakes</div>
              <div className="text-sm sm:text-base font-extrabold text-[#0a1e38] mt-1">{country.topIntakes}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Average Tuition</div>
              <div className="text-sm sm:text-base font-extrabold text-emerald-600 mt-1">{country.avgTuition}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cost of Living</div>
              <div className="text-sm sm:text-base font-extrabold text-slate-700 mt-1">{country.costOfLiving}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 8 Cols: Overview, Why Study, Universities, Courses */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0a1e38] mb-4">
                  Overview of Studying in {country.name}
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {country.description}
                </p>
              </div>

              {/* Reasons to study */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] mb-6">
                  Key Benefits & Advantages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {country.reasonsToStudy.map((r, i) => (
                    <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg></span>
                      <span className="text-sm font-medium text-slate-700 leading-relaxed">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Universities */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] mb-4">
                  Top Universities & Colleges in {country.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.topUniversities.map((uni, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-xs hover:border-[#e52928] transition-colors"
                    >
                      <span className="w-8 h-8 rounded-lg bg-red-50 text-[#e52928] flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-bold text-slate-800">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Disciplines */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] mb-4">
                  High-Demand Fields of Study
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {country.popularCourses.map((c, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-sm font-bold"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Fast-Track Consultation Box */}
            <div className="lg:col-span-4" id="consultation">
              <div className="sticky top-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-red-100 text-[#e52928] text-xs font-bold uppercase tracking-wider">
                    Free Consultation
                  </span>
                  <h3 className="text-2xl font-black text-[#0a1e38] mt-2">
                    Inquire for {country.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Connect with our certified {country.name} visa and admissions counselors.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="tel:+919173186109"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#e52928] hover:bg-red-700 text-white font-bold text-center text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-all"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02A11.36 11.36 0 019 4.27c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg><span>Call +91 91731 86109</span>
                  </a>
                  <Link
                    href="/study-abroad#counselling-form"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#0a1e38] hover:bg-slate-800 text-white font-bold text-center text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg><span>Fill Application Form</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>100% Free Initial Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>SOP & Document Review Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span>Direct Fast-Track University Applications</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Call Bar */}
      <section className="w-full bg-[#e52928] py-8 text-white text-center sm:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black">Ready to begin your study in {country.name}?</h3>
            <p className="text-sm text-red-100 mt-0.5">Speak with Umang Career Consultancy&apos;s senior counselors today.</p>
          </div>
          <a
            href="tel:+919173186109"
            className="px-6 py-3 rounded-full bg-white text-[#0a1e38] hover:text-[#e52928] font-black text-base shadow-lg transition-transform hover:scale-105"
          >
            +91 91731 86109
          </a>
        </div>
      </section>
    </main>
  );
}
