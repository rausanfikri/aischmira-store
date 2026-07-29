export const FEATURE_FLAGS = {
  wishlist: false,
  checkout: true, // WhatsApp Concierge purchase flow
  loyalty: false,
  member: false,
  journal: true,
  analytics: true,
  search: true,
} as const;

export type FeatureFlag = keyof typeof FEATURE_FLAGS;

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return FEATURE_FLAGS[flag] ?? false;
}

export function getAllFeatureFlags(): Record<FeatureFlag, boolean> {
  return { ...FEATURE_FLAGS };
}
