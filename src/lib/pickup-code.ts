export function normalizePickupCode(value: string) {
  const trimmed = value.trim();

  if (trimmed.startsWith("upway://pickup/")) {
    const url = new URL(trimmed);
    return url.pathname.replace(/^\//, "").toUpperCase();
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    const url = new URL(trimmed);
    const lastSegment = url.pathname.split("/").filter(Boolean).at(-1);

    if (lastSegment) {
      return lastSegment.toUpperCase();
    }
  }

  return trimmed.toUpperCase();
}
