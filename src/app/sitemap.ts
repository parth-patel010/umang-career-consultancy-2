import type { MetadataRoute } from "next";

const BASE_URL = "https://umangcareer.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Tier 1: Core Landing Pages (Highest Priority)
  const coreRoutes = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${BASE_URL}/student-visa`, priority: 0.95, changeFrequency: "daily" as const },
    { url: `${BASE_URL}/study-abroad`, priority: 0.95, changeFrequency: "daily" as const },
    { url: `${BASE_URL}/australia-student-visa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/canada-student-visa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/usa-student-visa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/uk-student-visa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/europe-student-visa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/dubai-student-visa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/singapore-student-visa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/new-zealand-student-visa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/flight-ticket-booking`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/tours-and-travels`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/visitor-visa`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/pr-immigration`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact-us`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about-us`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/founder-message`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/vision-mission`, priority: 0.85, changeFrequency: "weekly" as const },
  ];

  // Tier 2: Study Abroad Country Destination Portals
  const countryDestinations = [
    "australia",
    "canada",
    "usa",
    "uk",
    "new-zealand",
    "europe",
    "dubai",
    "singapore",
    "germany",
    "france",
    "ireland",
    "italy",
    "poland",
    "switzerland",
    "denmark",
    "czech-republic",
    "czechia",
    "latvia",
    "lithuania",
    "hungary",
    "malaysia",
    "malta",
    "uae",
    "united-arab-emirates",
  ].map((country) => ({
    url: `${BASE_URL}/study-abroad/${country}`,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  }));

  // Tier 3: Specialized Support & Student Services
  const serviceRoutes = [
    "/career-counselling",
    "/university-selection",
    "/statement-of-purpose",
    "/sop",
    "/visa-documents",
    "/visa-document",
    "/spouse-visa",
    "/education-loan",
    "/accommodation",
    "/forex-services",
    "/forex",
    "/travel-insurance",
    "/pre-departure-guidance",
    "/pre-departure",
    "/air-ticket-travel-insurance",
    "/flight-tickets",
    "/tours",
    "/contact",
    "/about",
    "/services",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  // Tier 4: Explicit /services/* sub-routes for canonical URL equity
  const servicesSubRoutes = [
    "/services/australia-student-visa",
    "/services/canada-student-visa",
    "/services/usa-student-visa",
    "/services/us-student-visa",
    "/services/uk-student-visa",
    "/services/europe-student-visa",
    "/services/dubai-student-visa",
    "/services/uae-student-visa",
    "/services/singapore-student-visa",
    "/services/new-zealand-student-visa",
    "/services/flight-ticket-booking",
    "/services/tours-and-travels",
    "/services/visitor-visa",
    "/services/pr-immigration",
    "/services/immigration-pr",
    "/services/spouse-visa",
    "/services/career-counselling",
    "/services/career-counseling",
    "/services/university-selection",
    "/services/statement-of-purpose",
    "/services/sop",
    "/services/sop-resume",
    "/services/visa-documents",
    "/services/visa-document",
    "/services/education-loan",
    "/services/accommodation",
    "/services/forex-services",
    "/services/forex",
    "/services/travel-insurance",
    "/services/pre-departure-guidance",
    "/services/pre-departure",
    "/services/air-ticket-travel-insurance",
    "/services/student-visa",
    "/about-us/founder-message",
    "/about-us/vision-mission",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  // Combine and deduplicate
  const allRoutesMap = new Map<string, { url: string; lastModified: Date; changeFrequency: "daily" | "weekly" | "monthly"; priority: number }>();

  [...coreRoutes, ...countryDestinations, ...serviceRoutes, ...servicesSubRoutes].forEach((item) => {
    if (!allRoutesMap.has(item.url)) {
      allRoutesMap.set(item.url, {
        url: item.url,
        lastModified: now,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
      });
    }
  });

  return Array.from(allRoutesMap.values());
}
