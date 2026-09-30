import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, unauthorizedResponse } from "@/lib/cms/auth";
import { readCmsDataAsync, updateCmsDataAsync } from "@/lib/cms/store";

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const cms = await readCmsDataAsync();
  return NextResponse.json({ submissions: cms.submissions });
}

export async function PATCH(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const { id, read } = await request.json();
  if (!id || typeof read !== "boolean") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const cms = await updateCmsDataAsync((current) => ({
    ...current,
    submissions: current.submissions.map((item) => (item.id === id ? { ...item, read } : item)),
  }));

  return NextResponse.json({ submissions: cms.submissions });
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const cms = await updateCmsDataAsync((current) => ({
    ...current,
    submissions: current.submissions.filter((item) => item.id !== id),
  }));

  return NextResponse.json({ submissions: cms.submissions });
}
