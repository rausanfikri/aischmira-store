import { getValidatedEnvironment } from "./env";

export interface FeatureFlags {
  enableBigSeller: boolean;
  enableSupabase: boolean;
  enableCMS: boolean;
  enableAnalytics: boolean;
}

export class FeatureFlagService {
  private readonly flags: FeatureFlags;

  constructor() {
    const env = getValidatedEnvironment();
    this.flags = {
      enableBigSeller: env.NEXT_PUBLIC_ENABLE_BIGSELLER,
      enableSupabase: env.NEXT_PUBLIC_ENABLE_SUPABASE,
      enableCMS: env.NEXT_PUBLIC_ENABLE_CMS,
      enableAnalytics: env.NEXT_PUBLIC_ENABLE_ANALYTICS,
    };
  }

  public getFlags(): FeatureFlags {
    return { ...this.flags };
  }

  public isBigSellerEnabled(): boolean {
    return this.flags.enableBigSeller;
  }

  public isSupabaseEnabled(): boolean {
    return this.flags.enableSupabase;
  }

  public isCMSEnabled(): boolean {
    return this.flags.enableCMS;
  }

  public isAnalyticsEnabled(): boolean {
    return this.flags.enableAnalytics;
  }
}

export const featureFlags = new FeatureFlagService();
