export function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key || url.includes("placeholder") || key.includes("placeholder")) return null;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && !(parsed.protocol === "http:" && ["localhost", "127.0.0.1"].includes(parsed.hostname))) return null;
    return { url, key };
  } catch {
    return null;
  }
}

export function getAuthSiteOrigin() {
  const fallback = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://aischmira.store";
  try { return new URL(process.env.NEXT_PUBLIC_SITE_URL || fallback).origin; }
  catch { return fallback; }
}

export function safeAccountRedirect(value: string | null | undefined) {
  if (!value || !/^\/account(?:\/|\?|$)/.test(value) || value.includes("\\")) return "/account";
  return value;
}
