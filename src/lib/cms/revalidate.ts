import { revalidatePath } from "next/cache";

export function revalidateSite(paths: string[] = []) {
  revalidatePath("/", "layout");
  revalidatePath("/");

  for (const path of paths) {
    if (!path || path === "/") continue;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    revalidatePath(normalized);
  }
}
