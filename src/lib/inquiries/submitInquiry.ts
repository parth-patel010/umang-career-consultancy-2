import { sendToWeb3Forms } from "./web3forms";

export async function submitWebsiteInquiry(input: {
  fullName: string;
  email: string;
  mobile: string;
  service: string;
  message: string;
  source: string;
}) {
  // Web3Forms is the source of truth.
  await sendToWeb3Forms(
    {
      name: input.fullName,
      email: input.email.trim(),
      phone: input.mobile,
      service: input.service || "—",
      message: input.message || "—",
    },
    input.source,
  );

  // Best-effort save to the local CMS inquiry store; never blocks the user.
  try {
    await fetch("/api/public/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
  } catch {
    /* ignore */
  }

  return { emailed: true as const };
}
