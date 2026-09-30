export type ContentFieldType = "text" | "textarea";

export interface ContentField {
  id: string;
  pageId: string;
  pageLabel: string;
  section: string;
  label: string;
  type: ContentFieldType;
  defaultValue: string;
}

export interface MediaFieldCandidate {
  id: string;
  pageId: string;
  group: string;
  label: string;
  defaultValue: string;
  type: "image";
}

const SKIP_KEYS = new Set(["id", "type", "variant", "note", "width", "height"]);
const MEDIA_KEYS = new Set([
  "image",
  "imageSrc",
  "flagSrc",
  "logo",
  "banner",
  "src",
  "backgroundImage",
  "mapImage",
]);

function humanizeKey(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[._-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
}

function isMediaValue(key: string, value: string) {
  if (MEDIA_KEYS.has(key)) return true;
  if (/^https?:\/\//.test(value) && /\.(pdf|jpg|jpeg|png|webp|gif|svg|mp4)(\?|$)/i.test(value)) return true;
  if (value.startsWith("/") && /\.(jpg|jpeg|png|webp|gif|svg|mp4|pdf)$/i.test(value)) return true;
  return false;
}

function inferFieldType(key: string, value: string): ContentFieldType {
  if (value.length >= 120 || value.includes("\n")) return "textarea";
  if (key === "description" || key === "review" || key === "message" || key === "address") {
    return value.length > 60 ? "textarea" : "text";
  }
  return value.length > 80 ? "textarea" : "text";
}

export function walkTextFields(options: {
  pageId: string;
  pageLabel: string;
  section: string;
  value: unknown;
  path?: string;
  fields?: ContentField[];
}) {
  const fields = options.fields ?? [];
  const path = options.path ?? "";

  const visit = (value: unknown, currentPath: string, section: string) => {
    if (typeof value === "string") {
      const key = currentPath.split(".").pop() ?? currentPath;
      if (SKIP_KEYS.has(key)) return;
      if (isMediaValue(key, value)) return;
      if (!value.trim()) return;

      fields.push({
        id: `${options.pageId}.${currentPath}`,
        pageId: options.pageId,
        pageLabel: options.pageLabel,
        section,
        label: humanizeKey(key || currentPath),
        type: inferFieldType(key, value),
        defaultValue: value,
      });
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const nextPath = currentPath ? `${currentPath}.${index}` : String(index);
        const titled =
          item && typeof item === "object" && "title" in item && typeof (item as { title?: string }).title === "string"
            ? (item as { title: string }).title
            : item && typeof item === "object" && "name" in item && typeof (item as { name?: string }).name === "string"
              ? (item as { name: string }).name
              : item && typeof item === "object" && "country" in item && typeof (item as { country?: string }).country === "string"
                ? (item as { country: string }).country
                : "";
        const nextSection = titled ? `${section} — ${titled}` : `${section} ${index + 1}`;
        visit(item, nextPath, nextSection);
      });
      return;
    }

    if (value && typeof value === "object") {
      Object.entries(value as Record<string, unknown>).forEach(([key, nested]) => {
        if (SKIP_KEYS.has(key)) return;
        const nextPath = currentPath ? `${currentPath}.${key}` : key;
        visit(nested, nextPath, section || humanizeKey(key));
      });
    }
  };

  visit(options.value, path, options.section);
  return fields;
}

export function walkMediaFields(options: {
  pageId: string;
  group: string;
  value: unknown;
  path?: string;
  fields?: MediaFieldCandidate[];
  seen?: Set<string>;
}) {
  const fields = options.fields ?? [];
  const seen = options.seen ?? new Set<string>();
  const path = options.path ?? "";

  const visit = (value: unknown, currentPath: string) => {
    if (typeof value === "string") {
      const key = currentPath.split(".").pop() ?? currentPath;
      if (!isMediaValue(key, value)) return;
      const id = `${options.pageId}.${currentPath}`;
      if (seen.has(id)) return;
      seen.add(id);
      fields.push({
        id,
        pageId: options.pageId,
        group: options.group,
        label: humanizeKey(currentPath || key),
        defaultValue: value,
        type: "image",
      });
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        visit(item, currentPath ? `${currentPath}.${index}` : String(index));
      });
      return;
    }

    if (value && typeof value === "object") {
      Object.entries(value as Record<string, unknown>).forEach(([key, nested]) => {
        const nextPath = currentPath ? `${currentPath}.${key}` : key;
        visit(nested, nextPath);
      });
    }
  };

  visit(options.value, path);
  return fields;
}

export function setByPath(target: Record<string, unknown>, path: string, value: string) {
  const parts = path.split(".");
  let current: Record<string, unknown> | unknown[] = target;

  for (let i = 0; i < parts.length - 1; i += 1) {
    const part = parts[i];
    const nextPart = parts[i + 1];
    const index = Number(nextPart);
    const isArrayIndex = !Number.isNaN(index) && String(index) === nextPart;

    if (Array.isArray(current)) {
      const idx = Number(part);
      if (!current[idx] || typeof current[idx] !== "object") {
        current[idx] = isArrayIndex ? [] : {};
      }
      current = current[idx] as Record<string, unknown> | unknown[];
      continue;
    }

    const record = current as Record<string, unknown>;
    if (!record[part] || typeof record[part] !== "object") {
      record[part] = isArrayIndex ? [] : {};
    }
    current = record[part] as Record<string, unknown> | unknown[];
  }

  const last = parts[parts.length - 1];
  if (Array.isArray(current)) {
    current[Number(last)] = value;
  } else {
    (current as Record<string, unknown>)[last] = value;
  }
}

export function applyContentOverrides<T extends Record<string, unknown>>(
  defaults: T,
  pageId: string,
  overrides: Record<string, string>
): T {
  const merged = structuredClone(defaults) as Record<string, unknown>;
  const prefix = `${pageId}.`;

  Object.entries(overrides).forEach(([fieldId, value]) => {
    if (!fieldId.startsWith(prefix)) return;
    const path = fieldId.slice(prefix.length);
    if (!path) return;
    setByPath(merged, path, value);
  });

  return merged as T;
}

export function applyMediaOverrides<T extends Record<string, unknown>>(
  defaults: T,
  pageId: string,
  overrides: Record<string, string>
): T {
  const merged = structuredClone(defaults) as Record<string, unknown>;
  const prefix = `${pageId}.`;

  Object.entries(overrides).forEach(([slotId, value]) => {
    if (!slotId.startsWith(prefix)) return;
    const path = slotId.slice(prefix.length);
    if (!path) return;
    setByPath(merged, path, value);
  });

  return merged as T;
}
