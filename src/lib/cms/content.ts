import { readCmsDataAsync } from "./store";
import {
  buildContentFieldsForPage,
  CONTENT_PAGE_SOURCES,
  getContentPageSource,
  getMediaSlotsForPage,
} from "./contentSources";
import { applyContentOverrides, applyMediaOverrides, type ContentField } from "./contentUtils";

export async function getContentOverrides() {
  const cms = await readCmsDataAsync();
  return cms.contentOverrides ?? {};
}

export async function getMediaOverrides() {
  const cms = await readCmsDataAsync();
  return cms.mediaOverrides ?? {};
}

export async function getMergedPageData<T extends Record<string, unknown>>(pageId: string): Promise<T | null> {
  const source = getContentPageSource(pageId);
  if (!source) return null;
  const [contentOverrides, mediaOverrides] = await Promise.all([getContentOverrides(), getMediaOverrides()]);
  let merged = applyContentOverrides(source.data as T, pageId, contentOverrides);
  merged = applyMediaOverrides(merged, pageId, mediaOverrides);
  return merged;
}

export interface ContentFieldState extends ContentField {
  currentValue: string;
  isCustomized: boolean;
}

export async function getContentAdminList() {
  const overrides = await getContentOverrides();
  const pages = CONTENT_PAGE_SOURCES.map((source) => {
    const fields = buildContentFieldsForPage(source.pageId);
    const customizedCount = fields.filter((field) => Boolean(overrides[field.id])).length;
    return {
      pageId: source.pageId,
      pageLabel: source.pageLabel,
      href: source.href,
      group: source.group,
      fieldCount: fields.length,
      customizedCount,
    };
  });

  return { pages, groups: Array.from(new Set(pages.map((page) => page.group))) };
}

export async function getContentAdminPageState(pageId: string) {
  const source = getContentPageSource(pageId);
  if (!source) return null;

  const overrides = await getContentOverrides();
  const fields: ContentFieldState[] = buildContentFieldsForPage(pageId).map((field) => ({
    ...field,
    currentValue: overrides[field.id] ?? field.defaultValue,
    isCustomized: Boolean(overrides[field.id]),
  }));

  const sections = Array.from(new Set(fields.map((field) => field.section))).map((section) => ({
    name: section,
    fields: fields.filter((field) => field.section === section),
  }));

  const mediaOverrides = await getMediaOverrides();
  const mediaSlots = getMediaSlotsForPage(pageId).map((slot) => ({
    ...slot,
    currentValue: mediaOverrides[slot.id] || slot.defaultValue,
    isCustomized: Boolean(mediaOverrides[slot.id]),
  }));

  return {
    page: {
      pageId: source.pageId,
      pageLabel: source.pageLabel,
      href: source.href,
      group: source.group,
    },
    sections,
    fields,
    mediaSlots,
  };
}
