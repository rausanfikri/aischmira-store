import { Result } from "@/shared/types/Result";
import { AppError } from "@/shared/errors";

export interface AnalyticsEvent {
  name: string;
  params?: Record<string, unknown>;
  timestamp?: number;
}

export interface IAnalyticsProvider {
  trackEvent(event: AnalyticsEvent): Promise<Result<void, AppError>>;
  trackPageView(url: string): Promise<Result<void, AppError>>;
}
