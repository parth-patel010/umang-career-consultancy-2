import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteContent, type SiteContent } from "@/content/cmsDefaults";
import { getMergedPageData } from "@/lib/cms/content";

export const dynamic = "force-dynamic";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const isAdmin = (headerList.get("x-pathname") || "").startsWith("/admin");
  const site = ((await getMergedPageData("site")) ?? siteContent) as SiteContent;

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans overflow-x-hidden">
        {isAdmin ? (
          children
        ) : (
          <>
            <Navbar site={site} />
            <div className="flex-1 flex flex-col overflow-x-hidden">{children}</div>
            <Footer site={site} />
          </>
        )}
      </body>
    </html>
  );
}
