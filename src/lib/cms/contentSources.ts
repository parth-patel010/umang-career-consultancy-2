import { contactContent, homepageContent, siteContent } from "@/content/cmsDefaults";
import { ContentField, walkMediaFields, walkTextFields, type MediaFieldCandidate } from "./contentUtils";

export interface ContentPageSource {
  pageId: string;
  pageLabel: string;
  href: string;
  group: string;
  data: Record<string, unknown>;
}

export const CONTENT_PAGE_SOURCES: ContentPageSource[] = [
  {
    pageId: "homepage",
    pageLabel: "Homepage",
    href: "/",
    group: "Homepage",
    data: homepageContent as unknown as Record<string, unknown>,
  },
  {
    pageId: "site",
    pageLabel: "Site Details",
    href: "/",
    group: "Site",
    data: siteContent as unknown as Record<string, unknown>,
  },
  {
    pageId: "contact",
    pageLabel: "Contact Page",
    href: "/contact-us",
    group: "Contact",
    data: contactContent as unknown as Record<string, unknown>,
  },
];

const PAGE_MAP = new Map(CONTENT_PAGE_SOURCES.map((source) => [source.pageId, source]));

export function getContentPageSource(pageId: string) {
  return PAGE_MAP.get(pageId) ?? null;
}

function humanize(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[._-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
}

export function buildContentFieldsForPage(pageId: string) {
  const source = getContentPageSource(pageId);
  if (!source) return [];
  const fields: ContentField[] = [];
  Object.entries(source.data).forEach(([key, value]) => {
    walkTextFields({
      pageId: source.pageId,
      pageLabel: source.pageLabel,
      section: humanize(key),
      value,
      path: key,
      fields,
    });
  });
  return fields;
}

const FIELD_MAP = new Map<string, ContentField>();
for (const source of CONTENT_PAGE_SOURCES) {
  for (const field of buildContentFieldsForPage(source.pageId)) {
    FIELD_MAP.set(field.id, field);
  }
}

export function getContentField(fieldId: string) {
  return FIELD_MAP.get(fieldId) ?? null;
}

export function getMediaSlotsForPage(pageId: string): MediaFieldCandidate[] {
  const source = getContentPageSource(pageId);
  if (!source) return [];
  return walkMediaFields({
    pageId: source.pageId,
    group: source.pageLabel,
    value: source.data,
  });
}

export function getMediaSlot(slotId: string) {
  for (const source of CONTENT_PAGE_SOURCES) {
    const slot = getMediaSlotsForPage(source.pageId).find((item) => item.id === slotId);
    if (slot) return slot;
  }
  return null;
}

export function getAllMediaSlots() {
  return CONTENT_PAGE_SOURCES.flatMap((source) => getMediaSlotsForPage(source.pageId));
}
