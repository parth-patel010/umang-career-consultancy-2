import { CONTENT_PAGE_SOURCES } from "@/lib/cms/contentSources";
import AdminContentEditClient from "./AdminContentEditClient";

export function generateStaticParams() {
  return CONTENT_PAGE_SOURCES.map((source) => ({
    pageId: source.pageId,
  }));
}

export default async function AdminContentEditPage({
  params,
}: {
  params: Promise<{ pageId: string }>;
}) {
  const resolved = await params;
  return <AdminContentEditClient pageId={resolved.pageId} />;
}
