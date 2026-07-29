import { ProviderType } from './types';

export interface ProviderConfig {
  activeProvider: ProviderType;
  fallbackProvider?: ProviderType;
}

export const PROVIDER_CONFIG: ProviderConfig = {
  activeProvider: 'dummy',
  fallbackProvider: undefined,
};

export function getActiveProviderType(): ProviderType {
  return PROVIDER_CONFIG.activeProvider;
}
