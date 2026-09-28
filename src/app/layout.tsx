import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umang Career Consultancy",
  description: "Premier career consultancy and educational advisory services for study abroad, admissions, and visa guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans overflow-x-hidden">
        <Navbar />
        <div className="flex-1 flex flex-col overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
