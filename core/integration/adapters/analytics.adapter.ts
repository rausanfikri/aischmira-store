import { IAnalyticsProvider, AnalyticsEvent } from "../contracts/analytics.provider";
import { Result, success } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export class AnalyticsAdapter implements IAnalyticsProvider {
  public async trackEvent(event: AnalyticsEvent): Promise<Result<void, AppError>> {
    if (process.env.NODE_ENV === "development") {
      console.log(`[AnalyticsAdapter] Event: ${event.name}`, event.params);
    }
    return success(undefined);
  }

  public async trackPageView(url: string): Promise<Result<void, AppError>> {
    if (process.env.NODE_ENV === "development") {
      console.log(`[AnalyticsAdapter] PageView: ${url}`);
    }
    return success(undefined);
  }
}

export const analyticsAdapter = new AnalyticsAdapter();
