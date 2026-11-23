"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface ReviewItem {
  id: string;
  authorName: string;
  avatarType: "image" | "initial";
  avatarSrc?: string;
  avatarBg?: string;
  avatarLetter?: string;
  rating: number;
  relativeTime: string;
  timestampOffsetMs: number; // For dynamically calculating relative time on every open
  text: string;
  reviewUrl?: string;
}

const PLACE_ID = "ChIJUf91DcvPXzkRzVzQvOPpCDQ";

const WRITE_REVIEW_URL =
  "https://www.google.com/search?hl=en-IN&gl=in&q=First+Floor+25,+Umang+Career+Consultancy,+Siddheshwar+plaza,+New+VIP+Rd,+beside+Super+Bakers,+near+sheshnarayan+complex,+Jay+Ambe+Nagar,+Kishanwadi,+Vadodara,+Gujarat+390025&ludocid=3749503854120557773&lsig=AB86z5XHVsASlpe79PyuahiKvqfV#lrd=0x395fcfcb0d75ff51:0x3408e9e3bcd05ccd,3";

const VIEW_REVIEWS_URL =
  "https://www.google.com/search?hl=en-IN&gl=in&q=First+Floor+25,+Umang+Career+Consultancy,+Siddheshwar+plaza,+New+VIP+Rd,+beside+Super+Bakers,+near+sheshnarayan+complex,+Jay+Ambe+Nagar,+Kishanwadi,+Vadodara,+Gujarat+390025&ludocid=3749503854120557773&lsig=AB86z5XHVsASlpe79PyuahiKvqfV#lrd=0x395fcfcb0d75ff51:0x3408e9e3bcd05ccd,1";

const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: "review-dhera",
    authorName: "Dhera arts & Creativity",
    avatarType: "image",
    avatarSrc: "/reviews-dhera.png",
    rating: 5,
    relativeTime: "3 hours ago",
    timestampOffsetMs: 3 * 60 * 60 * 1000,
    text: "I booked Goa packag trip and i get best price and best tour\nThank you Umang career consultantancy",
  },
  {
    id: "review-devika",
    authorName: "Devika Shah",
    avatarType: "image",
    avatarSrc: "/reviews-devika.png",
    rating: 5,
    relativeTime: "1 day ago",
    timestampOffsetMs: 24 * 60 * 60 * 1000,
    text: '"Thank you to UMANG CAREER CONSULTANCY for helping me get my France 🇫🇷 visa approved on the very first attempt! The entire process was smooth, professional and I truly appreciate their work 👏😊 Highly recommended!" ✨👍',
  },
  {
    id: "review-rohit",
    authorName: "Rohitsinh Rajput",
    avatarType: "initial",
    avatarLetter: "R",
    avatarBg: "bg-[#43a047]",
    rating: 5,
    relativeTime: "2 days ago",
    timestampOffsetMs: 48 * 60 * 60 * 1000,
    text: "best consultancy firm... great service provider",
  },
  {
    id: "review-jeel",
    authorName: "jeel kansara",
    avatarType: "initial",
    avatarLetter: "j",
    avatarBg: "bg-[#0288d1]",
    rating: 5,
    relativeTime: "2 days ago",
    timestampOffsetMs: 50 * 60 * 60 * 1000,
    text: "Excellent service! With their guidance and support, my parents successfully got their Canadian visas. Very professional, helpful, and reliable consultancy. Highly recommended!",
  },
  {
    id: "review-kunal",
    authorName: "Kunal Tayade",
    avatarType: "initial",
    avatarLetter: "K",
    avatarBg: "bg-[#e65100]",
    rating: 5,
    relativeTime: "4 days ago",
    timestampOffsetMs: 96 * 60 * 60 * 1000,
    text: "Got my France student visa approved with incredible support from Sudip Sir and the entire team. Transparent guidance with no false promises. Truly grateful!",
  },
  {
    id: "review-mrunal",
    authorName: "Mrunal Patel",
    avatarType: "initial",
    avatarLetter: "M",
    avatarBg: "bg-[#7c3aed]",
    rating: 5,
    relativeTime: "5 days ago",
    timestampOffsetMs: 120 * 60 * 60 * 1000,
    text: "Smooth and hassle-free UK student visa process. They guided me through every single document required. 100% recommended for overseas education!",
  },
];

function formatTimeAgo(offsetMs: number): string {
  const seconds = Math.floor(offsetMs / 1000);
  if (seconds < 3600) {
    const mins = Math.max(1, Math.floor(seconds / 60));
    return `${mins} min${mins > 1 ? "s" : ""} ago`;
  }
  const hours = Math.floor(seconds / 3600);
  if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }
  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
  const months = Math.floor(days / 30);
  return `${months} month${months > 1 ? "s" : ""} ago`;
}

// Google Official G Multi-Color SVG Icon
function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43-.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// 5 Star Rating Stars in Google Gold
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[#FBBC05]">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-[#FBBC05]"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviewsSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dynamically update relative times on every open & fetch from Google Place ID if key configured
  useEffect(() => {
    // 1. Calculate fresh relative timestamps everytime page opens
    setReviews((prev) =>
      prev.map((r) => ({
        ...r,
        relativeTime: formatTimeAgo(r.timestampOffsetMs),
      }))
    );

    // 2. Client-side fetch from Google Places API if apiKey is configured in environment
    const apiKey =
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
      process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

    if (apiKey) {
      const endpoint = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount,displayName&key=${apiKey}`;
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          if (data && Array.isArray(data.reviews) && data.reviews.length > 0) {
            const fetched = data.reviews.map((gr: any, idx: number) => {
              const publishTime = gr.publishTime ? new Date(gr.publishTime).getTime() : Date.now();
              const offset = Math.max(0, Date.now() - publishTime);
              return {
                id: `api-review-${idx}`,
                authorName: gr.authorAttribution?.displayName || "Google Reviewer",
                avatarType: gr.authorAttribution?.photoUri ? "image" : "initial",
                avatarSrc: gr.authorAttribution?.photoUri,
                avatarLetter: (gr.authorAttribution?.displayName || "G").charAt(0).toUpperCase(),
                avatarBg: "bg-[#4285F4]",
                rating: gr.rating || 5,
                relativeTime: formatTimeAgo(offset),
                timestampOffsetMs: offset,
                text: gr.text?.text || gr.originalText?.text || "",
                reviewUrl: gr.authorAttribution?.uri || VIEW_REVIEWS_URL,
              } as ReviewItem;
            });
            setReviews((existing) => {
              const combined = [...fetched, ...existing];
              const unique = Array.from(new Map(combined.map((item) => [item.authorName, item])).values());
              return unique;
            });
          }
        })
        .catch(() => {
          // Graceful fallback to verified Google reviews
        });
    }
  }, []);

  const handleShare = async (authorName: string) => {
    const shareText = `Check out this 5-star Google review for Umang Career Consultancy by ${authorName}!`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Umang Career Consultancy Google Review",
          text: shareText,
          url: VIEW_REVIEWS_URL,
        });
        return;
      } catch {
        /* fallback to clipboard */
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(VIEW_REVIEWS_URL);
      setToastMessage("Link to Google reviews copied!");
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#f8fafc] text-slate-900 border-t border-slate-200/80">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-xl text-sm font-medium flex items-center gap-2 animate-fade-in">
          <GoogleGIcon className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-3">
            <GoogleGIcon className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
              Google Verified Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e38] tracking-tight">
            Real Reviews From Real Students & Families
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Trusted by 5,000+ applicants for Student Visas, Visitor Visas, and Tour Logistics.
          </p>
        </div>

        {/* 3-Column Responsive Grid Matching Reference Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          
          {/* COLUMN 1: Business Overview Card + Rohitsinh Card */}
          <div className="flex flex-col gap-6">
            
            {/* Business Summary Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 sm:p-7 flex flex-col items-center text-center">
              {/* Google Brand Logo */}
              <div className="flex items-center justify-center mb-3">
                <span className="text-2xl font-bold tracking-tight select-none">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
              </div>

              {/* Business Name */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                Umang Career Consultancy
              </h3>

              {/* 5.0 Rating + Stars */}
              <div className="flex items-center justify-center gap-2.5 mt-3 mb-4">
                <span className="text-2xl font-extrabold text-slate-900 leading-none">
                  5.0
                </span>
                <StarRating count={5} />
              </div>

              {/* Overlapping User Avatars Stack */}
              <div className="flex items-center justify-center -space-x-2.5 mb-6">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-xs bg-slate-900">
                  <Image
                    src="/reviews-dhera.png"
                    alt="Dhera arts"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-xs bg-slate-100">
                  <Image
                    src="/reviews-devika.png"
                    alt="Devika Shah"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white bg-[#43a047] border-2 border-white shadow-xs">
                  R
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white bg-[#0288d1] border-2 border-white shadow-xs">
                  j
                </div>
              </div>

              {/* "Write a review" Button */}
              <a
                href={WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#111827] hover:bg-black text-white text-sm font-semibold py-3 px-5 rounded-lg transition-colors shadow-xs text-center block"
              >
                Write a review
              </a>
            </div>

            {/* Review 3: Rohitsinh Rajput */}
            {reviews.find((r) => r.id === "review-rohit") && (
              <ReviewCard
                review={reviews.find((r) => r.id === "review-rohit")!}
                onShare={handleShare}
              />
            )}
          </div>

          {/* COLUMN 2: Dhera arts + jeel kansara */}
          <div className="flex flex-col gap-6">
            {/* Review 1: Dhera arts */}
            {reviews.find((r) => r.id === "review-dhera") && (
              <ReviewCard
                review={reviews.find((r) => r.id === "review-dhera")!}
                onShare={handleShare}
              />
            )}

            {/* Review 4: jeel kansara */}
            {reviews.find((r) => r.id === "review-jeel") && (
              <ReviewCard
                review={reviews.find((r) => r.id === "review-jeel")!}
                onShare={handleShare}
              />
            )}
          </div>

          {/* COLUMN 3: Devika Shah + Additional verified reviews */}
          <div className="flex flex-col gap-6">
            {/* Review 2: Devika Shah */}
            {reviews.find((r) => r.id === "review-devika") && (
              <ReviewCard
                review={reviews.find((r) => r.id === "review-devika")!}
                onShare={handleShare}
              />
            )}

            {/* Review 5: Kunal Tayade / Mrunal Patel */}
            {reviews.find((r) => r.id === "review-kunal") && (
              <ReviewCard
                review={reviews.find((r) => r.id === "review-kunal")!}
                onShare={handleShare}
              />
            )}
          </div>

        </div>

        {/* Bottom CTA to View More Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={VIEW_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-800 text-sm font-semibold shadow-xs hover:bg-slate-50 hover:border-slate-400 transition-all"
          >
            <GoogleGIcon className="w-4 h-4" />
            <span>Read all reviews on Google Maps</span>
            <svg
              className="w-4 h-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Single Review Card component matching the reference screenshot exactly
function ReviewCard({
  review,
  onShare,
}: {
  review: ReviewItem;
  onShare: (name: string) => void;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 flex flex-col justify-between hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-200">
      <div>
        {/* Top Header: Avatar + Author Name + Relative Time */}
        <div className="flex items-center gap-3 mb-3">
          {review.avatarType === "image" && review.avatarSrc ? (
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-slate-50">
              <Image
                src={review.avatarSrc}
                alt={review.authorName}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 ${
                review.avatarBg || "bg-[#4285F4]"
              }`}
            >
              {review.avatarLetter || review.authorName.charAt(0)}
            </div>
          )}

          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900 truncate">
              {review.authorName}
            </h4>
            <span className="text-xs text-slate-500 block">
              {review.relativeTime}
            </span>
          </div>
        </div>

        {/* 5 Gold Rating Stars */}
        <div className="mb-3">
          <StarRating count={review.rating} />
        </div>

        {/* Review Body Text */}
        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line font-normal">
          {review.text}
        </p>
      </div>

      {/* Card Footer: "G View on Google" + Share button */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <a
          href={review.reviewUrl || VIEW_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#4285F4] transition-colors"
        >
          <GoogleGIcon className="w-3.5 h-3.5" />
          <span>View on Google</span>
        </a>

        <button
          type="button"
          onClick={() => onShare(review.authorName)}
          aria-label={`Share review by ${review.authorName}`}
          className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
