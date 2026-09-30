"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminDashboardPage() {
  const [inquiryCount, setInquiryCount] = useState(0);
  const [unread, setUnread] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetch("/api/admin/submissions")
      .then((response) => response.json())
      .then((data) => {
        const submissions = data.submissions ?? [];
        setInquiryCount(submissions.length);
        setUnread(submissions.filter((item: { read: boolean }) => !item.read).length);
      });
    fetch("/api/admin/content")
      .then((response) => response.json())
      .then((data) => setPageCount((data.pages ?? []).length));
  }, []);

  const cards = [
    { href: "/admin/content", title: "Page Content", detail: `${pageCount} editable areas` },
    { href: "/admin/media", title: "Images", detail: "Replace photos and logos" },
    { href: "/admin/inquiries", title: "Inquiries", detail: `${unread} unread of ${inquiryCount}` },
  ];

  return (
    <AdminShell title="Dashboard">
      <p className="mb-6 text-sm text-slate-600">
        Update homepage text, contact details, and images here. Changes appear on the public site after you save.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#e52928]"
          >
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{card.detail}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
