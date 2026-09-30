"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";

interface ContentFieldState {
  id: string;
  label: string;
  section: string;
  type: string;
  currentValue: string;
  isCustomized: boolean;
}

interface ContentSection {
  name: string;
  fields: ContentFieldState[];
}

interface MediaSlotState {
  id: string;
  label: string;
  currentValue: string;
  isCustomized: boolean;
}

interface PageState {
  page: { pageId: string; pageLabel: string; href: string; group: string };
  sections: ContentSection[];
  fields: ContentFieldState[];
  mediaSlots: MediaSlotState[];
}

export default function AdminContentEditPage() {
  const params = useParams();
  const pageId = decodeURIComponent(String(params.pageId ?? ""));
  const [state, setState] = useState<PageState | null>(null);
  const [activeTab, setActiveTab] = useState<"content" | "images">("content");
  const [message, setMessage] = useState("");
  const [savingField, setSavingField] = useState<string | null>(null);
  const [uploadingSlot, setUploadingSlot] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  async function loadPage() {
    const response = await fetch(`/api/admin/content?pageId=${encodeURIComponent(pageId)}`);
    const data = await response.json();
    setState(data);
    const nextDrafts: Record<string, string> = {};
    (data.fields ?? []).forEach((field: ContentFieldState) => {
      nextDrafts[field.id] = field.currentValue;
    });
    setDrafts(nextDrafts);
  }

  useEffect(() => {
    if (pageId) loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId]);

  async function saveField(fieldId: string, value: string) {
    setSavingField(fieldId);
    setMessage("");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fieldId, value }),
    });
    setSavingField(null);
    if (!response.ok) {
      setMessage("Failed to save content.");
      return;
    }
    setMessage("Content saved.");
    loadPage();
  }

  async function resetField(fieldId: string) {
    setSavingField(fieldId);
    await fetch("/api/admin/content", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fieldId }),
    });
    setSavingField(null);
    setMessage("Reset to default.");
    loadPage();
  }

  async function saveSection(section: ContentSection) {
    const fields = Object.fromEntries(section.fields.map((field) => [field.id, drafts[field.id] ?? field.currentValue]));
    setSavingField(section.name);
    await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageId, fields }),
    });
    setSavingField(null);
    setMessage(`${section.name} saved.`);
    loadPage();
  }

  async function uploadMedia(slot: MediaSlotState, file: File) {
    setUploadingSlot(slot.id);
    setMessage("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const uploadResponse = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const uploadData = await uploadResponse.json();
      if (!uploadResponse.ok) {
        setMessage(uploadData.error || "Upload failed.");
        return;
      }
      const saveResponse = await fetch("/api/admin/media", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slotId: slot.id, value: uploadData.url }),
      });
      if (!saveResponse.ok) {
        setMessage("Image uploaded, but it could not be applied.");
        return;
      }
      setMessage("Image updated.");
      loadPage();
    } finally {
      setUploadingSlot(null);
    }
  }

  async function resetMedia(slotId: string) {
    await fetch("/api/admin/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slotId }),
    });
    setMessage("Image reset.");
    loadPage();
  }

  if (!state?.page) {
    return (
      <AdminShell title="Page Content">
        <p className="text-sm text-slate-500">Loading...</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell title={`Edit: ${state.page.pageLabel}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/admin/content" className="text-sm text-[#e52928] hover:underline">
            ← All pages
          </Link>
          <p className="mt-1 text-sm text-slate-500">
            {state.page.group} · {state.page.href}
          </p>
        </div>
        <a
          href={state.page.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium"
        >
          View live page
        </a>
      </div>

      <div className="mb-4 flex gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("content")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            activeTab === "content" ? "bg-[#e52928] text-white" : "border border-slate-200 bg-white"
          }`}
        >
          Text
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("images")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            activeTab === "images" ? "bg-[#e52928] text-white" : "border border-slate-200 bg-white"
          }`}
        >
          Images ({state.mediaSlots.length})
        </button>
      </div>

      {message ? <p className="mb-4 text-sm">{message}</p> : null}

      {activeTab === "content" ? (
        <div className="space-y-6">
          {state.sections.map((section) => (
            <section key={section.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">{section.name}</h2>
                <button
                  type="button"
                  onClick={() => saveSection(section)}
                  disabled={savingField === section.name}
                  className="rounded-lg bg-[#e52928] px-3 py-1.5 text-sm font-medium text-white"
                >
                  Save section
                </button>
              </div>
              <div className="space-y-4">
                {section.fields.map((field) => (
                  <div key={field.id}>
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <label className="text-sm font-medium">{field.label}</label>
                      <button type="button" onClick={() => resetField(field.id)} className="text-xs text-slate-500">
                        Reset
                      </button>
                    </div>
                    {field.type === "textarea" ? (
                      <textarea
                        value={drafts[field.id] ?? field.currentValue}
                        onChange={(event) => setDrafts((current) => ({ ...current, [field.id]: event.target.value }))}
                        rows={4}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                      />
                    ) : (
                      <input
                        value={drafts[field.id] ?? field.currentValue}
                        onChange={(event) => setDrafts((current) => ({ ...current, [field.id]: event.target.value }))}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {state.mediaSlots.map((slot) => (
            <div key={slot.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="font-semibold">{slot.label}</h3>
                <button type="button" onClick={() => resetMedia(slot.id)} className="text-xs text-slate-500">
                  Reset
                </button>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slot.currentValue} alt={slot.label} className="mb-3 h-40 w-full rounded-lg object-contain bg-slate-50" />
              <label className="inline-flex cursor-pointer items-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium">
                {uploadingSlot === slot.id ? "Uploading..." : "Upload / Replace"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) uploadMedia(slot, file);
                  }}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
