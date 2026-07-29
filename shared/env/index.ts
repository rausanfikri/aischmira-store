export * from './schema';
export * from './client';
export * from './server';

import { getClientEnv } from './client';

export const env = {
  get client() {
    return getClientEnv();
  },
} as const;
