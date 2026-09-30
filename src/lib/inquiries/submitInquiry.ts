export async function submitWebsiteInquiry(input: {
  fullName: string;
  email: string;
  mobile: string;
  service: string;
  message: string;
  source: string;
}) {
  const save = await fetch("/api/public/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const saved = (await save.json().catch(() => ({}))) as { error?: string; id?: string };
  if (!save.ok) {
    throw new Error(saved.error || "Could not save your inquiry. Please call us directly.");
  }

  const keyResponse = await fetch("/api/public/mail-config", { cache: "no-store" });
  const keyData = (await keyResponse.json().catch(() => ({}))) as { accessKey?: string | null };
  const accessKey = keyData.accessKey?.trim();
  if (!accessKey) {
    return { emailed: false as const };
  }

  const message = [
    `Source: ${input.source}`,
    `Name: ${input.fullName}`,
    `Email: ${input.email}`,
    `Phone: ${input.mobile}`,
    `Service: ${input.service || "—"}`,
    `Message: ${input.message || "—"}`,
  ].join("\n");

  const email = input.email.trim();
  const web3Body: Record<string, string> = {
    access_key: accessKey,
    subject: `New Inquiry: ${input.service || "General"} — ${input.fullName}`,
    from_name: "Umang Career Consultancy Website",
    name: input.fullName,
    phone: input.mobile,
    message,
  };
  if (/^\S+@\S+\.\S+$/.test(email)) {
    web3Body.email = email;
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(web3Body),
  });

  const result = (await response.json().catch(() => ({}))) as { success?: boolean; message?: string };
  return {
    emailed: Boolean(response.ok && result.success),
    emailError: result.message,
  };
}
