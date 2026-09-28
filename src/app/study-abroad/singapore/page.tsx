import type { Metadata } from "next";
import SingaporeStudyAbroadContent from "@/components/SingaporeStudyAbroadContent";

export const metadata: Metadata = {
  title: "Study in Singapore | Top Universities (NUS, NTU, SMU), TGS & Visas | Umang Career Consultancy",
  description:
    "Comprehensive guide to studying in Singapore with Umang Career Consultancy. Explore top universities (NUS #8, NTU #15, SMU), Tuition Grant Scheme (TGS), SOLAR Student's Pass, tuition fees, monthly living costs, and post-study LTVP work options.",
  keywords: [
    "Study in Singapore",
    "Study Abroad Singapore",
    "National University of Singapore NUS",
    "Nanyang Technological University NTU",
    "Singapore Management University SMU",
    "Tuition Grant Scheme Singapore",
    "Singapore Student Pass SOLAR",
    "Singapore University Intakes",
    "Umang Career Consultancy Singapore",
  ],
};

export default function SingaporeStudyAbroadPage() {
  return <SingaporeStudyAbroadContent />;
}
