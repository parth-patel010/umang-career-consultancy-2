"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";

interface Submission {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  service: string;
  message: string;
  source: string;
  createdAt: string;
  read: boolean;
  emailed: boolean;
}

export default function AdminInquiriesPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [mailConfigured, setMailConfigured] = useState<boolean | null>(null);

  async function load() {
    const response = await fetch("/api/admin/submissions");
    const data = await response.json();
    setSubmissions(data.submissions ?? []);
  }

  useEffect(() => {
    load();
    fetch("/api/public/mail-config")
      .then((response) => response.json())
      .then((data) => setMailConfigured(Boolean(data.configured)));
  }, []);

  async function markRead(id: string, read: boolean) {
    const response = await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read }),
    });
    const data = await response.json();
    setSubmissions(data.submissions ?? []);
  }

  async function remove(id: string) {
    const response = await fetch("/api/admin/submissions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    setSubmissions(data.submissions ?? []);
  }

  return (
    <AdminShell title="Inquiries">
      <p className="mb-4 text-sm text-slate-600">
        Forms on the homepage and contact page are saved here
        {mailConfigured
          ? " and emailed through Web3Forms."
          : ". Add WEB3FORMS_ACCESS_KEY to also email each inquiry."}
      </p>
      {submissions.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">No inquiries yet.</div>
      ) : (
        <div className="space-y-4">
          {submissions.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{item.fullName}</h2>
                  <p className="text-sm text-slate-500">
                    {item.email} · {item.mobile}
                  </p>
                </div>
                <p className="text-xs text-slate-400">{new Date(item.createdAt).toLocaleString()}</p>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-medium">{item.service || "General"}</span>
                <span className="text-slate-400"> · {item.source}</span>
              </p>
              {item.message ? <p className="mt-2 text-sm text-slate-700">{item.message}</p> : null}
              <div className="mt-4 flex gap-3 text-sm">
                <button type="button" onClick={() => markRead(item.id, !item.read)} className="text-[#e52928]">
                  {item.read ? "Mark unread" : "Mark read"}
                </button>
                <button type="button" onClick={() => remove(item.id)} className="text-slate-500">
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
