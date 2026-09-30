import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, unauthorizedResponse } from "@/lib/cms/auth";
import { getContentAdminList, getContentAdminPageState } from "@/lib/cms/content";
import { getContentField, getContentPageSource } from "@/lib/cms/contentSources";
import { revalidateSite } from "@/lib/cms/revalidate";
import { sanitizePlainText } from "@/lib/cms/sanitizeRichText";
import { updateCmsDataAsync } from "@/lib/cms/store";

function prepareFieldValue(value: string) {
  return sanitizePlainText(value);
}

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const pageId = request.nextUrl.searchParams.get("pageId");
  if (pageId) {
    const state = await getContentAdminPageState(pageId);
    if (!state) {
      return NextResponse.json({ error: "Unknown page" }, { status: 404 });
    }
    return NextResponse.json(state);
  }

  return NextResponse.json(await getContentAdminList());
}

export async function PUT(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const body = await request.json();
  const { fieldId, value, pageId, fields } = body;

  if (pageId && fields && typeof fields === "object") {
    const entries = Object.entries(fields as Record<string, string>);
    for (const [id, fieldValue] of entries) {
      if (!getContentField(id)) {
        return NextResponse.json({ error: `Unknown field: ${id}` }, { status: 400 });
      }
      if (typeof fieldValue !== "string") {
        return NextResponse.json({ error: "Invalid field value" }, { status: 400 });
      }
    }

    await updateCmsDataAsync((current) => ({
      ...current,
      contentOverrides: {
        ...current.contentOverrides,
        ...Object.fromEntries(entries.map(([id, fieldValue]) => [id, prepareFieldValue(fieldValue)])),
      },
    }));

    const state = await getContentAdminPageState(pageId);
    revalidateSite([state?.page.href ?? "/"]);
    return NextResponse.json({ success: true, ...state });
  }

  if (!fieldId || typeof value !== "string") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const field = getContentField(fieldId);
  if (!field) {
    return NextResponse.json({ error: "Unknown content field" }, { status: 400 });
  }

  await updateCmsDataAsync((current) => ({
    ...current,
    contentOverrides: {
      ...current.contentOverrides,
      [fieldId]: prepareFieldValue(value),
    },
  }));

  const source = getContentPageSource(field.pageId);
  revalidateSite([source?.href ?? "/"]);
  const state = await getContentAdminPageState(field.pageId);
  return NextResponse.json({ success: true, ...state });
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return unauthorizedResponse();
  }

  const { fieldId } = await request.json();
  if (!fieldId) {
    return NextResponse.json({ error: "Missing fieldId" }, { status: 400 });
  }

  const field = getContentField(fieldId);
  if (!field) {
    return NextResponse.json({ error: "Unknown content field" }, { status: 400 });
  }

  await updateCmsDataAsync((current) => {
    const nextOverrides = { ...current.contentOverrides };
    delete nextOverrides[fieldId];
    return { ...current, contentOverrides: nextOverrides };
  });

  const source = getContentPageSource(field.pageId);
  revalidateSite([source?.href ?? "/"]);
  const state = await getContentAdminPageState(field.pageId);
  return NextResponse.json({ success: true, ...state });
}
