import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Study in Czech Republic (Czechia) | Umang Career Consultancy",
  description: "Complete guide to studying in Czech Republic. Top universities, admissions, and visas.",
  alternates: {
    canonical: "https://umangcareer.in/study-abroad/czech-republic",
  },
};

export default function CzechiaRedirectPage() {
  redirect("/study-abroad/czech-republic");
}
