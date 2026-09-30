"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";

interface PageSummary {
  pageId: string;
  pageLabel: string;
  href: string;
  group: string;
  fieldCount: number;
  customizedCount: number;
}

export default function AdminContentListPage() {
  const [pages, setPages] = useState<PageSummary[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/admin/content")
      .then((response) => response.json())
      .then((data) => setPages(data.pages ?? []));
  }, []);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return pages.filter(
      (page) =>
        page.pageLabel.toLowerCase().includes(query) ||
        page.pageId.toLowerCase().includes(query) ||
        page.href.toLowerCase().includes(query)
    );
  }, [pages, search]);

  return (
    <AdminShell title="Page Content">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search pages..."
        className="mb-4 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm"
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((page) => (
          <Link
            key={page.pageId}
            href={`/admin/content/${encodeURIComponent(page.pageId)}`}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#e52928]"
          >
            <p className="text-xs uppercase tracking-wide text-slate-500">{page.group}</p>
            <h2 className="mt-1 text-lg font-semibold">{page.pageLabel}</h2>
            <p className="mt-1 text-sm text-slate-500">{page.href}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span>{page.fieldCount} fields</span>
              {page.customizedCount > 0 ? (
                <span className="rounded-full bg-red-50 px-2 py-0.5 text-[#e52928]">{page.customizedCount} customized</span>
              ) : (
                <span className="text-slate-400">Default content</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
