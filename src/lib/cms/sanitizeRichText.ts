export function sanitizePlainText(input: string) {
  return input.replace(/<[^>]+>/g, "").trim();
}
