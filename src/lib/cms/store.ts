import fs from "fs";
import os from "os";
import path from "path";
import { CmsData } from "./types";

const isVercel = Boolean(process.env.VERCEL);

// On Vercel the deploy filesystem is read-only except /tmp, and /tmp is not
// persistent across invocations — CMS writes and uploads only last for that instance.
const DATA_DIR = isVercel
  ? path.join(os.tmpdir(), "umang-cms-data")
  : path.join(process.cwd(), "data");
const CMS_FILE = path.join(DATA_DIR, "cms.json");
const UPLOADS_DIR = isVercel
  ? path.join(os.tmpdir(), "umang-cms-uploads")
  : path.join(process.cwd(), "public", "uploads");

export function defaultCmsData(): CmsData {
  return {
    submissions: [],
    mediaOverrides: {},
    contentOverrides: {},
    updatedAt: new Date().toISOString(),
  };
}

function ensureDirs() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }
  } catch (error) {
    console.error("Failed to ensure CMS directories:", error);
  }
}

export function getUploadsDir() {
  ensureDirs();
  return UPLOADS_DIR;
}

function readCmsDataLocal(): CmsData {
  // Reads must never write. Missing or unreadable cms.json → defaults.
  try {
    if (!fs.existsSync(CMS_FILE)) {
      return defaultCmsData();
    }
    const raw = fs.readFileSync(CMS_FILE, "utf-8");
    return { ...defaultCmsData(), ...JSON.parse(raw) } as CmsData;
  } catch {
    return defaultCmsData();
  }
}

function writeCmsDataLocal(data: CmsData) {
  try {
    ensureDirs();
    const payload: CmsData = {
      ...data,
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(CMS_FILE, JSON.stringify(payload, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed to write CMS data:", error);
  }
}

export async function readCmsDataAsync(): Promise<CmsData> {
  return readCmsDataLocal();
}

export async function writeCmsDataAsync(data: CmsData) {
  const payload: CmsData = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  writeCmsDataLocal(payload);
  return payload;
}

export async function updateCmsDataAsync(updater: (current: CmsData) => CmsData): Promise<CmsData> {
  const current = await readCmsDataAsync();
  const next = updater(current);
  return writeCmsDataAsync(next);
}
