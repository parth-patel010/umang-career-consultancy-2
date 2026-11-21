"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import type { SiteContent } from "@/content/cmsDefaults";

export default function PublicShell({
  children,
  site,
}: {
  children: React.ReactNode;
  site: SiteContent;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar site={site} />
      <div className="flex-1 flex flex-col overflow-x-hidden">{children}</div>
      <Footer site={site} />
      <FloatingWidgets site={site} />
    </>
  );
}
