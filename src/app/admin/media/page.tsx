"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";

interface MediaSlot {
  id: string;
  label: string;
  group: string;
  currentValue: string;
  isCustomized: boolean;
}

export default function AdminMediaPage() {
  const [groups, setGroups] = useState<{ name: string; slots: MediaSlot[] }[]>([]);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState<string | null>(null);

  async function load() {
    const response = await fetch("/api/admin/media");
    const data = await response.json();
    setGroups(data.groups ?? []);
  }

  useEffect(() => {
    load();
  }, []);

  async function upload(slot: MediaSlot, file: File) {
    setUploading(slot.id);
    setMessage("");
    const formData = new FormData();
    formData.append("file", file);
    const uploadResponse = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const uploadData = await uploadResponse.json();
    if (!uploadResponse.ok) {
      setMessage(uploadData.error || "Upload failed.");
      setUploading(null);
      return;
    }
    await fetch("/api/admin/media", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slotId: slot.id, value: uploadData.url }),
    });
    setUploading(null);
    setMessage("Image updated.");
    load();
  }

  async function reset(slotId: string) {
    await fetch("/api/admin/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slotId }),
    });
    setMessage("Image reset to the original.");
    load();
  }

  return (
    <AdminShell title="Images">
      <p className="mb-4 text-sm text-slate-600">
        Replace any photo, logo, or flag. The public page uses the new file as soon as the upload finishes.
      </p>
      {message ? <p className="mb-4 text-sm">{message}</p> : null}
      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group.name}>
            <h2 className="mb-3 text-lg font-semibold">{group.name}</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              {group.slots.map((slot) => (
                <div key={slot.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{slot.label}</h3>
                      {slot.isCustomized ? <p className="text-xs text-[#e52928]">Custom image</p> : null}
                    </div>
                    <button type="button" onClick={() => reset(slot.id)} className="text-xs text-slate-500">
                      Reset
                    </button>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={slot.currentValue} alt="" className="mb-3 h-36 w-full rounded-lg bg-slate-50 object-contain" />
                  <label className="inline-flex cursor-pointer items-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium">
                    {uploading === slot.id ? "Uploading..." : "Upload / Replace"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) upload(slot, file);
                      }}
                    />
                  </label>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AdminShell>
  );
}
