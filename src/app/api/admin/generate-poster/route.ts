import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { requireAdmin, unauthorizedResponse } from "@/lib/cms/auth";

export const runtime = "nodejs";

const GALLERY_POSTERS = [
  "success-story-1.jpg",
  "success-story-2.jpg",
  "success-story-3.jpg",
  "success-story-4.jpg",
  "success-story-5.jpg",
  "success-story-6.jpg",
  "success-story-7.jpg",
  "success-story-8.jpg",
  "success-story-9.jpg",
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

function getPosterBase64(filename: string): string | null {
  try {
    const filePath = path.join(process.cwd(), "public", filename);
    if (!fs.existsSync(filePath)) return null;
    const fileBuffer = fs.readFileSync(filePath);
    const mime = filename.endsWith(".png") ? "image/png" : "image/jpeg";
    return `data:${mime};base64,${fileBuffer.toString("base64")}`;
  } catch {
    return null;
  }
}

export function buildPosterPrompt({
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

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  // Pre-select a random poster from gallery
  const randomIndex = Math.floor(Math.random() * GALLERY_POSTERS.length);
  const randomPoster = GALLERY_POSTERS[randomIndex];

  return NextResponse.json({
    posters: GALLERY_POSTERS,
    randomPoster,
    brandDetails: BRAND_DETAILS,
    defaultModel: process.env.AI_IMAGE_MODEL || "openai/gpt-image-2.5-sunburst",
  });
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const apiKey =
    process.env.OPENROUTER_API_KEY?.trim() ||
    process.env.AI_API_KEY?.trim();

  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENROUTER_API_KEY is not configured in .env" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const {
      candidateName,
      visaType = "Student Visa",
      country = "France",
      university = "",
      course = "",
      personPhoto, // base64 data URI or url
      templatePoster = "success-story-8.jpg", // filename or base64 data URI
      customPrompt,
      model = process.env.AI_IMAGE_MODEL || "openai/gpt-image-2.5-sunburst",
    } = body;

    if (!candidateName || !candidateName.trim()) {
      return NextResponse.json({ error: "Candidate name is required." }, { status: 400 });
    }

    if (!personPhoto || typeof personPhoto !== "string" || !personPhoto.trim()) {
      return NextResponse.json(
        { error: "Reference 1: Person photo is required." },
        { status: 400 }
      );
    }

    // Resolve Reference 2 (poster template)
    let templateDataUri = templatePoster;
    if (templatePoster.startsWith("success-story-") || !templatePoster.startsWith("data:")) {
      const b64 = getPosterBase64(templatePoster);
      if (b64) {
        templateDataUri = b64;
      }
    }

    // Build the brand-aligned prompt
    const finalPrompt = customPrompt?.trim()
      ? customPrompt.trim()
      : buildPosterPrompt({
          candidateName: candidateName.trim(),
          visaType: visaType.trim(),
          country: country.trim(),
          university: university.trim(),
          course: course.trim(),
        });

    // Prepare OpenRouter Image Generation payload with 2 input references
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

    const openRouterResponse = await fetch("https://openrouter.ai/api/v1/images", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await openRouterResponse.json();

    if (!openRouterResponse.ok || data.error) {
      const errMsg =
        data.error?.message ||
        data.error?.name ||
        `OpenRouter returned status ${openRouterResponse.status}`;
      return NextResponse.json({ error: errMsg, details: data }, { status: 500 });
    }

    const firstImage = data.data?.[0];
    if (!firstImage) {
      return NextResponse.json(
        { error: "No image was returned by the AI model." },
        { status: 500 }
      );
    }

    let publicUrl = "";
    const b64 = firstImage.b64_json;

    // Save image locally to public/uploads
    if (b64) {
      try {
        const uploadsDir = path.join(process.cwd(), "public", "uploads");
        if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir, { recursive: true });
        }
        const fileName = `generated-poster-${Date.now()}.png`;
        const filePath = path.join(uploadsDir, fileName);
        fs.writeFileSync(filePath, Buffer.from(b64, "base64"));
        publicUrl = `/uploads/${fileName}`;
      } catch (err) {
        console.error("Failed to write generated poster locally:", err);
      }
    } else if (firstImage.url) {
      publicUrl = firstImage.url;
    }

    return NextResponse.json({
      success: true,
      imageUrl: publicUrl || (b64 ? `data:image/png;base64,${b64}` : ""),
      b64_json: b64,
      prompt: finalPrompt,
      modelUsed: model,
      templateUsed: templatePoster,
    });
  } catch (error: any) {
    console.error("Error in generate-poster route:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate poster" },
      { status: 500 }
    );
  }
}
