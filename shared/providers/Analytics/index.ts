import { createContext } from 'react';

export interface AnalyticsContextValue {
  trackEvent: (eventName: string, payload?: Record<string, unknown>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextValue | undefined>(undefined);
