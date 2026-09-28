import { Metadata } from "next";
import EducationLoanContent from "@/components/EducationLoanContent";

export const metadata: Metadata = {
  title: "Education Loans for Study Abroad | Umang Career Consultancy",
  description:
    "Fast and affordable education loans for overseas study at Umang Career Consultancy. Collateral & non-collateral loans up to ₹75 Lakhs, competitive interest rates, flexible moratorium, and tie-ups with SBI, HDFC Credila, Axis Bank, and ICICI.",
  keywords: [
    "education loan",
    "study abroad loan",
    "non-collateral education loan",
    "unsecured education loan",
    "SBI education loan",
    "HDFC Credila",
    "Axis Bank education loan",
    "Umang Career Consultancy",
  ],
};

export default function EducationLoanPage() {
  return <EducationLoanContent />;
}
