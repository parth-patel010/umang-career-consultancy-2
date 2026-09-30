import { NextResponse } from "next/server";

export async function GET() {
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
    null;

  return NextResponse.json({
    accessKey,
    configured: Boolean(accessKey),
  });
}
