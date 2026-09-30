import { randomUUID } from "crypto";
import path from "path";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, unauthorizedResponse } from "@/lib/cms/auth";
import { getUploadsDir } from "@/lib/cms/store";

export const runtime = "nodejs";

const MAX_BYTES = 8 * 1024 * 1024;

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
  "image/gif",
  "image/svg+xml",
]);

const EXT_MIME: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

function resolveType(file: File) {
  if (file.type && ALLOWED_TYPES.has(file.type)) return file.type;
  const ext = path.extname(file.name).toLowerCase();
  return EXT_MIME[ext] ?? "";
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "Image must be 8MB or smaller." }, { status: 413 });
    }

    const contentType = resolveType(file);
    if (!contentType) {
      return NextResponse.json(
        { error: "Use a JPG, PNG, WEBP, GIF, or SVG image." },
        { status: 400 }
      );
    }

    const extension = path.extname(file.name).toLowerCase() || ".jpg";
    const filename = `${Date.now()}-${randomUUID().slice(0, 8)}${extension}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadsDir = getUploadsDir();
    await writeFile(path.join(uploadsDir, filename), buffer);
    return NextResponse.json({ url: `/uploads/${filename}`, filename });
  } catch (error) {
    console.error("Admin upload failed:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed." },
      { status: 500 }
    );
  }
}
