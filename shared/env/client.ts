import { clientEnvSchema, ClientEnv } from './schema';

let cachedClientEnv: ClientEnv | null = null;

export function getClientEnv(): ClientEnv {
  if (cachedClientEnv) {
    return cachedClientEnv;
  }

  const clientEnvData = {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  const result = clientEnvSchema.safeParse(clientEnvData);

  if (!result.success) {
    console.warn('Fallback applied for client environment variables:', result.error.format());
  }

  cachedClientEnv = result.success
    ? result.data
    : clientEnvSchema.parse({ NEXT_PUBLIC_SITE_URL: 'https://aischmira.store' });

  return cachedClientEnv;
}
