import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, unauthorizedResponse } from "@/lib/cms/auth";
import { getMediaSlot } from "@/lib/cms/contentSources";
import { getMediaAdminState } from "@/lib/cms/media";
import { revalidateSite } from "@/lib/cms/revalidate";
import { updateCmsDataAsync } from "@/lib/cms/store";

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  return NextResponse.json(await getMediaAdminState());
}

export async function PUT(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const { slotId, value } = await request.json();
  if (!slotId || typeof value !== "string" || !value.trim()) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const slot = getMediaSlot(slotId);
  if (!slot) {
    return NextResponse.json({ error: "Unknown media slot" }, { status: 400 });
  }

  await updateCmsDataAsync((current) => ({
    ...current,
    mediaOverrides: {
      ...current.mediaOverrides,
      [slotId]: value.trim(),
    },
  }));

  revalidateSite();
  return NextResponse.json({ success: true, ...(await getMediaAdminState()) });
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const { slotId } = await request.json();
  if (!slotId) {
    return NextResponse.json({ error: "Missing slotId" }, { status: 400 });
  }

  await updateCmsDataAsync((current) => {
    const nextOverrides = { ...current.mediaOverrides };
    delete nextOverrides[slotId];
    return { ...current, mediaOverrides: nextOverrides };
  });

  revalidateSite();
  return NextResponse.json({ success: true, ...(await getMediaAdminState()) });
}
