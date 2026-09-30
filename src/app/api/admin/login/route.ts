import { NextRequest, NextResponse } from "next/server";
import {
  clearAdminSessionCookie,
  requireAdmin,
  setAdminSessionCookie,
  unauthorizedResponse,
  verifyAdminPassword,
} from "@/lib/cms/auth";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    if (!verifyAdminPassword(password)) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    await setAdminSessionCookie(response);
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const response = NextResponse.json({ success: true });
  clearAdminSessionCookie(response);
  return response;
}
