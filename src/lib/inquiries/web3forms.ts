export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || "b42d24cb-9740-4e2b-96c5-a2efbd4c6e73";

export async function sendToWeb3Forms(fields: Record<string, string>, source: string) {
  const body: Record<string, string> = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: `New inquiry from Umang Career website (${source})`,
    from_name: "Umang Career Consultancy Website",
    source,
    ...fields,
  };
  if (body.email && !/^\S+@\S+\.\S+$/.test(body.email)) delete body.email;
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const result = (await response.json().catch(() => ({}))) as { success?: boolean; message?: string };
  if (!response.ok || !result.success) {
    throw new Error(result.message || "Could not send your inquiry. Please try again or call us directly.");
  }
  return result;
}

function fieldKey(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, i: number) {
  if (el.name) return el.name;
  const label = el.closest("div")?.querySelector("label")?.textContent || el.getAttribute("aria-label") || el.getAttribute("placeholder");
  const raw = (label || `${el.type || "field"}_${i}`).replace(/\*/g, "").trim().toLowerCase();
  if (el.type === "email" || /e-?mail/.test(raw)) return "email";
  if (el.type === "tel" || /phone|mobile|whatsapp/.test(raw)) return "phone";
  if (/name/.test(raw) && !/university|college|company/.test(raw)) return "name";
  if (el.tagName === "TEXTAREA" || /message/.test(raw)) return "message";
  return raw.replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || `field_${i}`;
}

/** Collects all fields of a form element (controlled or uncontrolled) and sends them to Web3Forms. */
export async function sendFormInquiry(form: HTMLFormElement, source: string): Promise<boolean> {
  const fields: Record<string, string> = {};
  Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea")).forEach((el, i) => {
    if (el instanceof HTMLInputElement && ["submit", "button", "hidden"].includes(el.type)) return;
    if (el instanceof HTMLInputElement && (el.type === "checkbox" || el.type === "radio") && !el.checked) return;
    const value = el.value?.trim();
    if (!value) return;
    let key = fieldKey(el, i);
    while (key in fields) key = `${key}_${i}`;
    fields[key] = value;
  });
  try {
    await sendToWeb3Forms(fields, source);
    return true;
  } catch (error) {
    if (typeof window !== "undefined") {
      window.alert(error instanceof Error ? error.message : "Could not send your inquiry. Please call us directly.");
    }
    return false;
  }
}
