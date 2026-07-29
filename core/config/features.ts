export const FEATURES = {
  journal: true,
  wishlist: false,
  checkout: true, // WhatsApp Concierge commerce
  loyalty: false,
  member: false,
  analytics: true,
  search: true,
  cms: false,
  bigseller: false,
  supabase: false,
} as const;

export type FeatureFlag = keyof typeof FEATURES;

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return FEATURES[flag] ?? false;
}
