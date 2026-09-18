import { mediaManifest } from "@/data/catalog-registry";
import type { MediaMapping } from "@/types/catalog-registry";
import type { ProductMedia } from "@/types/catalog";

/** Legacy shape adapter. All editorial associations live in product-media.json. */
const toLegacy = (m: MediaMapping): ProductMedia => ({ src: m.reference, alt: m.alt, width: m.width, height: m.height });

export function getProductMedia(productId: string, COLOR: string, PATTERN: string | null): ProductMedia[] {
  return mediaManifest.media
    .filter((m) => m.productId === productId && m.COLOR === COLOR && m.PATTERN === PATTERN)
    .sort((a, b) => a.sortOrder - b.sortOrder).map(toLegacy);
}

export function getEditorialMedia(id: string): ProductMedia {
  const media = mediaManifest.media.find((m) => m.id === id);
  if (!media) throw new Error("Unknown editorial media ID: " + id);
  return toLegacy(media);
}

/** Deprecated color-only view: omit ambiguous multi-pattern groups, never merge them. */
export const productMedia: Record<string, Record<string, ProductMedia[]>> = {};
for (const m of mediaManifest.media) {
  const siblings = mediaManifest.media.filter((n) => n.productId === m.productId && n.COLOR === m.COLOR);
  if (new Set(siblings.map((n) => n.PATTERN)).size !== 1) continue;
  productMedia[m.productId] ??= {};
  productMedia[m.productId][m.COLOR] = getProductMedia(m.productId, m.COLOR, m.PATTERN);
}
