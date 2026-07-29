// Feature flags to control visibility and execution of modules
export const FEATURES = {
  WISHLIST_ENABLED: false,
  LOYALTY_ENABLED: false,
  MEMBER_ENABLED: false,
  CHECKOUT_ENABLED: true, // Dummy checkout redirect to WhatsApp
} as const;

export type FeatureFlag = keyof typeof FEATURES;

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  // In the future, this might read from an environment variable or LaunchDarkly
  return FEATURES[flag];
}
