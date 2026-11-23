"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";

const GALLERY_POSTERS = [
  { id: "success-story-1.jpg", name: "Srayan Talukdar (France)" },
  { id: "success-story-2.jpg", name: "Mukeshbhai Soni (Australia)" },
  { id: "success-story-3.jpg", name: "Mohammad Islam (France)" },
  { id: "success-story-4.jpg", name: "Kunal Tayade (France)" },
  { id: "success-story-5.jpg", name: "Chandresh & Bharti Kansara (Canada)" },
  { id: "success-story-6.jpg", name: "Jay Pinakin Vyas (Canada)" },
  { id: "success-story-7.jpg", name: "Premkumar Suthar (UK)" },
  { id: "success-story-8.jpg", name: "Mrunal Patel (UK)" },
  { id: "success-story-9.jpg", name: "Devika Shah (France)" },
];

const PRESET_COUNTRIES = [
  { name: "France", flag: "🇫🇷", defaultLandmark: "Eiffel Tower" },
  { name: "United Kingdom", flag: "🇬🇧", defaultLandmark: "Big Ben & London Tower Bridge" },
  { name: "Canada", flag: "🇨🇦", defaultLandmark: "Toronto CN Tower skyline" },
  { name: "USA", flag: "🇺🇸", defaultLandmark: "Statue of Liberty" },
  { name: "Australia", flag: "🇦🇺", defaultLandmark: "Sydney Opera House" },
  { name: "Germany", flag: "🇩🇪", defaultLandmark: "Brandenburg Gate Berlin" },
  { name: "New Zealand", flag: "🇳🇿", defaultLandmark: "Auckland Sky Tower" },
  { name: "Dubai (UAE)", flag: "🇦🇪", defaultLandmark: "Burj Khalifa" },
  { name: "Singapore", flag: "🇸🇬", defaultLandmark: "Marina Bay Sands" },
];

const BRAND_DETAILS = {
  companyName: "Umang Career Consultancy",
  taglineBelowLogo: "Your Dream • Our Guidance • Global Opportunity",
  bottomTagline: "Your Journey, Our Expertise.",
  phoneNumbers: "+91 9173186109 | +91 9712610086",
  address: "First Floor 25, Siddheshwar Plaza, near Super Bakery, New VIP Road, Vadodara, Gujarat 390019, India",
  email: "umangcareer2022@gmail.com",
  website: "www.umangcareer.in",
  features: [
    "Expert Guidance",
    "Hassle-Free Process",
    "100% Support",
    "Global Opportunities",
  ],
};

const DEFAULT_API_KEY =
  typeof atob === "function"
    ? atob("c2stb3ItdjEtMTlmYjVmNTkyZWJlMWQ5YTYzN2YxZGE5ZmE2YWI2NzRkY2YxM2UwMzA1ZDEyNjYzYTU3NDA3N2M0ZWUzYjQyNQ==")
    : "";

function buildPosterPrompt({
  candidateName,
  visaType,
  country,
  university,
  course,
  customInstructions,
}: {
  candidateName: string;
  visaType: string;
  country: string;
  university?: string;
  course?: string;
  customInstructions?: string;
}): string {
  return `Create a high-impact, professional square 1:1 celebratory visa achievement marketing poster for "Umang Career Consultancy" following the exact graphic design layout, colors, typography, and structure shown in Reference 2 (the poster style template), integrating the candidate from Reference 1 (person photo).

CRITICAL BRANDING RULES (SUPER IMPORTANT - DO NOT CHANGE OR REDESIGN THE LOGO):
1. TOP LOGO & HEADER:
   - Keep the exact official "UMANG CAREER CONSULTANCY" logo from the reference poster untouched at top-left.
   - Directly underneath the logo, include the official brand tagline: "${BRAND_DETAILS.taglineBelowLogo}".
2. CELEBRATION HEADLINE:
   - Bold decorative red cursive/serif headline: "Congratulations!" with celebration sparks and confetti.
   - Text directly below: "on getting".
   - Prominent stylized red/blue ribbon banner: "${country.toUpperCase()} ${visaType.toUpperCase()}".
3. CANDIDATE PROFILE:
   - Feature the candidate from Reference 1 with authentic facial likeness, framed in a circular gold border or standing proudly holding their passport/visa.
   - Candidate Name Ribbon: "${candidateName}" in a rich navy and gold ribbon badge.
   ${university || course ? `- Institution & Major: "${university ? `for ${university}` : ""}${course ? ` in ${course}` : ""}".` : ""}
   - Five gold review stars: ★★★★★ with cursive quote: "Wishing you a bright future in ${country}!".
4. BACKGROUND SCENERY:
   - Iconic landmark of ${country} (e.g. Eiffel Tower for France, Big Ben for UK, CN Tower for Canada, Statue of Liberty for USA, Sydney Opera House for Australia).
   - Sunny blue sky with light clouds, commercial jetliner ascending with white vapor trails, and the national flag of ${country}.
5. COMPLETE FOOTER SECTION (EXACT CONTACT & ADDRESS DETAILS):
   - Solid navy blue bottom bar (#0a1e38) with gold borders.
   - 4 Icon Highlights: "Expert Guidance", "Hassle-Free Process", "100% Support", "Global Opportunities".
   - Official Contact Info:
     * Call Us: ${BRAND_DETAILS.phoneNumbers}
     * Address: ${BRAND_DETAILS.address}
     * Email: ${BRAND_DETAILS.email}
     * Website: ${BRAND_DETAILS.website}
   - Bottom cursive gold slogan: "${BRAND_DETAILS.bottomTagline}" with small airplane icon.
${customInstructions ? `\nADDITIONAL INSTRUCTIONS:\n${customInstructions}` : ""}`;
}

async function urlToDataUri(url: string): Promise<string> {
  const res = await fetch(url);
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export default function PosterGeneratorPage() {
  // Form State
  const [candidateName, setCandidateName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("France");
  const [visaType, setVisaType] = useState("Student Visa");
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");

  // References
  const [personPhoto, setPersonPhoto] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("success-story-8.jpg");

  // Prompt & Options
  const [customPrompt, setCustomPrompt] = useState("");
  const [showPromptEditor, setShowPromptEditor] = useState(false);
  const [apiKey, setApiKey] = useState(DEFAULT_API_KEY);
  const [showApiSettings, setShowApiSettings] = useState(false);
  const [model] = useState("openai/gpt-image-2.5-sunburst");

  // Generation State
  const [loading, setLoading] = useState(false);
  const [generationTime, setGenerationTime] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Randomize Reference 2 on first load
  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * GALLERY_POSTERS.length);
    setSelectedTemplate(GALLERY_POSTERS[randomIdx].id);
    const storedKey = typeof window !== "undefined" ? localStorage.getItem("umang_openrouter_key") : null;
    if (storedKey) {
      setApiKey(storedKey);
    } else if (DEFAULT_API_KEY) {
      setApiKey(DEFAULT_API_KEY);
    }
  }, []);

  // Timer while loading
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      setGenerationTime(0);
      interval = setInterval(() => {
        setGenerationTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Handle Person Photo Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setError("Person photo must be under 10MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setPersonPhoto(event.target?.result as string);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleRandomizeTemplate = () => {
    const others = GALLERY_POSTERS.filter((p) => p.id !== selectedTemplate);
    const randomIdx = Math.floor(Math.random() * others.length);
    setSelectedTemplate(others[randomIdx].id);
  };

  const handleGenerate = async () => {
    if (!candidateName.trim()) {
      setError("Please enter the candidate's name.");
      return;
    }

    if (!personPhoto) {
      setError("Please upload Reference 1 (the person's photo).");
      return;
    }

    const activeApiKey = apiKey.trim() || DEFAULT_API_KEY;
    if (!activeApiKey) {
      setError("Please enter your OpenRouter API key.");
      return;
    }

    setError(null);
    setLoading(true);
    setGeneratedImage(null);

    try {
      // 1. Prepare Reference 2 (template poster as base64 data URI)
      let templateDataUri = personPhoto;
      try {
        templateDataUri = await urlToDataUri("/" + selectedTemplate);
      } catch {
        // Fallback: use template URL
        templateDataUri = window.location.origin + "/" + selectedTemplate;
      }

      // 2. Build final prompt
      const finalPrompt = customPrompt.trim()
        ? customPrompt.trim()
        : buildPosterPrompt({
            candidateName: candidateName.trim(),
            visaType,
            country: selectedCountry,
            university: university.trim(),
            course: course.trim(),
          });

      // 3. Try server API first if running on Node.js runtime, otherwise fallback to direct OpenRouter CORS
      let generatedUrl = "";
      let directCallNeeded = false;

      try {
        const response = await fetch("/api/admin/generate-poster", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            candidateName: candidateName.trim(),
            visaType,
            country: selectedCountry,
            university: university.trim(),
            course: course.trim(),
            personPhoto,
            templatePoster: selectedTemplate,
            customPrompt: customPrompt.trim() || undefined,
            model,
          }),
        });

        const contentType = response.headers.get("content-type") || "";
        if (response.ok && contentType.includes("application/json")) {
          const data = await response.json();
          if (data.imageUrl) {
            generatedUrl = data.imageUrl;
          }
        } else {
          // Response is 404 HTML (Cloudflare Pages static export) or non-JSON
          directCallNeeded = true;
        }
      } catch {
        directCallNeeded = true;
      }

      // 4. Client-side direct call to OpenRouter (100% works on Cloudflare Pages static site)
      if (directCallNeeded || !generatedUrl) {
        const payload = {
          model,
          prompt: finalPrompt,
          input_references: [
            {
              type: "image_url",
              image_url: { url: personPhoto },
            },
            {
              type: "image_url",
              image_url: { url: templateDataUri },
            },
          ],
          n: 1,
          aspect_ratio: "1:1",
        };

        const orResponse = await fetch("https://openrouter.ai/api/v1/images", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${activeApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const orText = await orResponse.text();
        let orData: any;
        try {
          orData = JSON.parse(orText);
        } catch {
          throw new Error(`OpenRouter returned unexpected response: ${orText.slice(0, 150)}`);
        }

        if (!orResponse.ok || orData.error) {
          throw new Error(orData.error?.message || orData.error || "Failed to generate poster with OpenRouter");
        }

        const first = orData.data?.[0];
        if (first?.b64_json) {
          generatedUrl = `data:image/png;base64,${first.b64_json}`;
        } else if (first?.url) {
          generatedUrl = first.url;
        } else {
          throw new Error("No image was returned by the model.");
        }
      }

      setGeneratedImage(generatedUrl);
    } catch (err: any) {
      setError(err.message || "An error occurred while generating the poster.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    const a = document.createElement("a");
    a.href = generatedImage;
    a.download = `UmangCareer-${candidateName.replace(/\s+/g, "-") || "Student"}-${selectedCountry}-Visa.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <AdminShell title="AI Poster Generator">
      <div className="space-y-6">
        
        {/* Banner Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e52928] text-xs font-semibold mb-2">
                <span>Model: {model}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Visa Success Poster Generator
              </h2>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                Automatically blends <strong>Reference 1 (Candidate Photo)</strong> with{" "}
                <strong>Reference 2 (Gallery Template)</strong> while strictly preserving the official logo, tagline, contact numbers, address, and marketing branding.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowApiSettings(!showApiSettings)}
                className="text-xs text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                ⚙️ API Key
              </button>
              <Link
                href="/gallery"
                target="_blank"
                className="text-xs font-semibold text-[#e52928] hover:underline"
              >
                View Live Gallery →
              </Link>
            </div>
          </div>

          {/* API Key Drawer */}
          {showApiSettings && (
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <label className="text-xs font-semibold text-slate-700">OpenRouter API Key:</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                  localStorage.setItem("umang_openrouter_key", e.target.value);
                }}
                className="flex-1 max-w-md rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-mono"
                placeholder="sk-or-v1-..."
              />
              <span className="text-[11px] text-slate-500">Auto-saved to browser</span>
            </div>
          )}
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
            {error}
          </div>
        )}

        {/* 2-Column Interface: Controls on Left, Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN: Input Form & Dual References */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* References Section */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0a1e38] text-white flex items-center justify-center text-xs">1</span>
                <span>Select 2 Input References</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* REFERENCE 1: Person Photo */}
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Reference 1: Person Photo
                      </span>
                      {personPhoto && (
                        <button
                          type="button"
                          onClick={() => setPersonPhoto(null)}
                          className="text-xs text-red-600 hover:underline"
                        >
                          Change
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mb-3">
                      Upload photo of the candidate (headshot or holding visa).
                    </p>
                  </div>

                  {personPhoto ? (
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-slate-300 bg-white shadow-xs">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={personPhoto}
                        alt="Candidate reference"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square w-full rounded-lg border-2 border-dashed border-slate-300 hover:border-[#e52928] bg-white flex flex-col items-center justify-center p-4 transition-colors cursor-pointer group"
                    >
                      <svg
                        className="w-8 h-8 text-slate-400 group-hover:text-[#e52928] mb-2 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="text-xs font-semibold text-slate-700 group-hover:text-[#e52928]">
                        Upload Person Photo
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">PNG, JPG up to 10MB</span>
                    </button>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>

                {/* REFERENCE 2: Gallery Template Reference */}
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Reference 2: Style Template
                      </span>
                      <button
                        type="button"
                        onClick={handleRandomizeTemplate}
                        className="text-xs text-[#e52928] font-medium hover:underline flex items-center gap-1"
                      >
                        <span>🎲 Randomize</span>
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">
                      Selected from your existing Success Story posters.
                    </p>
                  </div>

                  <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-slate-300 bg-white shadow-xs">
                    <Image
                      src={`/${selectedTemplate}`}
                      alt="Style reference template"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-2 text-center">
                    <span className="text-[11px] font-medium text-slate-600 truncate block">
                      {GALLERY_POSTERS.find((p) => p.id === selectedTemplate)?.name}
                    </span>
                  </div>
                </div>

              </div>

              {/* Thumbnail Strip to Pick Any Gallery Reference */}
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-2">
                  Or pick any specific poster reference from gallery:
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {GALLERY_POSTERS.map((poster) => (
                    <button
                      key={poster.id}
                      type="button"
                      onClick={() => setSelectedTemplate(poster.id)}
                      className={`relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        selectedTemplate === poster.id
                          ? "border-[#e52928] ring-2 ring-red-200 scale-105"
                          : "border-slate-200 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={`/${poster.id}`}
                        alt={poster.name}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Candidate & Visa Details */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0a1e38] text-white flex items-center justify-center text-xs">2</span>
                <span>Candidate & Visa Details</span>
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Candidate Name *
                </label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm focus:border-[#e52928] focus:outline-none"
                />
              </div>

              {/* Country Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Destination Country *
                </label>
                <div className="flex flex-wrap gap-2">
                  {PRESET_COUNTRIES.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedCountry(c.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                        selectedCountry === c.name
                          ? "bg-[#0a1e38] text-white border-[#0a1e38]"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Visa Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Visa Category
                  </label>
                  <select
                    value={visaType}
                    onChange={(e) => setVisaType(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm bg-white focus:border-[#e52928] focus:outline-none"
                  >
                    <option value="Student Visa">Student Visa</option>
                    <option value="Student Visa Approved">Student Visa Approved</option>
                    <option value="Visitor Visa">Visitor Visa</option>
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Spouse Visa">Spouse Visa</option>
                    <option value="Permanent Residency (PR)">Permanent Residency (PR)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    University / College (Optional)
                  </label>
                  <input
                    type="text"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    placeholder="e.g. IPSA University"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[#e52928] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Major / Degree Course (Optional)
                </label>
                <input
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="e.g. Aerospace Engineering"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[#e52928] focus:outline-none"
                />
              </div>

            </div>

            {/* Brand Locks & Prompt Customizer */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0a1e38] text-white flex items-center justify-center text-xs">3</span>
                  <span>Brand Locks & Prompt Customizer</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setShowPromptEditor(!showPromptEditor)}
                  className="text-xs font-semibold text-[#e52928] hover:underline"
                >
                  {showPromptEditor ? "Hide Prompt Details ▲" : "Customize Prompt ▼"}
                </button>
              </div>

              {/* Automatic Brand Badges */}
              <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <span>🔒 Locked Brand Assets (Included Automatically):</span>
                </p>
                <ul className="list-disc pl-4 space-y-0.5 text-emerald-900/80">
                  <li><strong>Logo Protection:</strong> Official Umang Career Consultancy logo strictly preserved.</li>
                  <li><strong>Tagline Below Logo:</strong> &quot;Your Dream • Our Guidance • Global Opportunity&quot;.</li>
                  <li><strong>Contact Details:</strong> +91 9173186109 | +91 9712610086.</li>
                  <li><strong>Address:</strong> First Floor 25, Siddheshwar Plaza, near Super Bakery, New VIP Road, Vadodara.</li>
                  <li><strong>Website:</strong> www.umangcareer.in | <strong>Email:</strong> umangcareer2022@gmail.com.</li>
                  <li><strong>Bottom Bar Slogan:</strong> &quot;Your Journey, Our Expertise.&quot;</li>
                </ul>
              </div>

              {showPromptEditor && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="block text-xs font-semibold text-slate-700">
                    Custom Prompt Override / Additions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Add special instructions, e.g.: 'Place candidate in an elegant circular gold medallion, wearing navy suit, with sunset reflection behind Eiffel Tower.'"
                    className="w-full rounded-lg border border-slate-200 p-3 text-xs font-mono focus:border-[#e52928] focus:outline-none"
                  />
                </div>
              )}

              {/* Action Button */}
              <button
                type="button"
                onClick={handleGenerate}
                disabled={loading || !candidateName.trim() || !personPhoto}
                className="w-full bg-[#e52928] hover:bg-[#c91e1d] disabled:bg-slate-300 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-base cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Generating with {model}... ({generationTime}s)</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.5-6.2-4.5-6.2 4.5 2.4-7.5-6.2-4.5h7.6z" />
                    </svg>
                    <span>Generate Visa Poster</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Output & Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">Generated Poster Preview</h3>

              {loading ? (
                <div className="aspect-square w-full rounded-xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-[#e52928] animate-spin" />
                  <p className="text-sm font-semibold text-slate-800">
                    AI is designing your poster...
                  </p>
                  <p className="text-xs text-slate-500 max-w-xs">
                    Processing 2 image references, preserving logo & rendering {selectedCountry} landmarks.
                  </p>
                  <span className="text-xs font-mono bg-slate-200 px-2.5 py-1 rounded-md text-slate-700">
                    Elapsed: {generationTime} seconds
                  </span>
                </div>
              ) : generatedImage ? (
                <div className="space-y-4">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-slate-300 shadow-md bg-slate-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={generatedImage}
                      alt="Generated Visa Success Poster"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="py-2.5 px-4 rounded-lg bg-[#0a1e38] hover:bg-[#0f2a4a] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Download Poster</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        window.open(generatedImage, "_blank");
                      }}
                      className="py-2.5 px-4 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Open Full Size</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="aspect-square w-full rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-6 text-center text-slate-400">
                  <svg className="w-16 h-16 stroke-slate-300 stroke-1 mb-2" fill="none" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <p className="text-sm font-medium text-slate-600">No poster generated yet</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Upload a candidate photo, review the template reference, and click Generate.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Tips Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-800">Tips for Best Results:</h4>
              <ul className="list-disc pl-4 space-y-1 text-slate-500">
                <li>Use high-resolution photos of the candidate facing the camera.</li>
                <li>Photos of the student holding their passport/visa yield authentic results.</li>
                <li>Reference 2 sets the color scheme, badge geometry, and banner style.</li>
                <li>Works directly from both local development and live Cloudflare deployment.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
