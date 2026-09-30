import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { updateCmsDataAsync } from "@/lib/cms/store";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const fullName = String(body.fullName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const mobile = String(body.mobile ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();
    const source = String(body.source ?? "Website").trim();

    if (fullName.length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (mobile.replace(/\D/g, "").length < 8) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    const id = randomUUID();
    await updateCmsDataAsync((current) => ({
      ...current,
      submissions: [
        {
          id,
          fullName,
          email,
          mobile,
          service,
          message,
          source,
          createdAt: new Date().toISOString(),
          read: false,
          emailed: false,
        },
        ...current.submissions,
      ].slice(0, 500),
    }));

    return NextResponse.json({ success: true, id });
  } catch {
    return NextResponse.json({ error: "Could not save inquiry." }, { status: 400 });
  }
}
