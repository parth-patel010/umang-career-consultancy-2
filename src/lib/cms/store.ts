import fs from "fs";
import path from "path";
import { CmsData } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const CMS_FILE = path.join(DATA_DIR, "cms.json");
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

export function defaultCmsData(): CmsData {
  return {
    submissions: [],
    mediaOverrides: {},
    contentOverrides: {},
    updatedAt: new Date().toISOString(),
  };
}

function ensureDirs() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
}

export function getUploadsDir() {
  ensureDirs();
  return UPLOADS_DIR;
}

function readCmsDataLocal(): CmsData {
  ensureDirs();
  if (!fs.existsSync(CMS_FILE)) {
    const data = defaultCmsData();
    writeCmsDataLocal(data);
    return data;
  }

  try {
    const raw = fs.readFileSync(CMS_FILE, "utf-8");
    return { ...defaultCmsData(), ...JSON.parse(raw) } as CmsData;
  } catch {
    const data = defaultCmsData();
    writeCmsDataLocal(data);
    return data;
  }
}

function writeCmsDataLocal(data: CmsData) {
  ensureDirs();
  const payload: CmsData = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(CMS_FILE, JSON.stringify(payload, null, 2), "utf-8");
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
