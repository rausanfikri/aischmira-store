import { featureFlags } from "../config/feature-flags";
import { IInventoryProvider, IPriceProvider } from "./contracts/inventory.provider";
import { ICustomerProvider } from "./contracts/customer.provider";
import { IOrderProvider } from "./contracts/order.provider";
import { IContentProvider } from "./contracts/content.provider";
import { IAnalyticsProvider } from "./contracts/analytics.provider";
import { bigSellerAdapter } from "./adapters/bigseller.adapter";
import { supabaseAdapter } from "./adapters/supabase.adapter";
import { cmsAdapter } from "./adapters/cms.adapter";
import { analyticsAdapter } from "./adapters/analytics.adapter";

export class IntegrationContainer {
  public getInventoryProvider(): IInventoryProvider {
    // If BigSeller is enabled via feature flag, return BigSellerAdapter
    if (featureFlags.isBigSellerEnabled()) {
      return bigSellerAdapter;
    }
    return bigSellerAdapter; // Fallback mock adapter
  }

  public getPriceProvider(): IPriceProvider {
    return bigSellerAdapter;
  }

  public getCustomerProvider(): ICustomerProvider {
    if (featureFlags.isSupabaseEnabled()) {
      return supabaseAdapter;
    }
    return supabaseAdapter;
  }

  public getOrderProvider(): IOrderProvider {
    if (featureFlags.isBigSellerEnabled()) {
      return bigSellerAdapter;
    }
    return bigSellerAdapter;
  }

  public getContentProvider(): IContentProvider {
    if (featureFlags.isCMSEnabled()) {
      return cmsAdapter;
    }
    return cmsAdapter;
  }

  public getAnalyticsProvider(): IAnalyticsProvider {
    if (featureFlags.isAnalyticsEnabled()) {
      return analyticsAdapter;
    }
    return analyticsAdapter;
  }
}

export const container = new IntegrationContainer();
