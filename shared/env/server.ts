import { serverEnvSchema, ServerEnv } from './schema';
import { ConfigurationError } from '../errors';

let cachedServerEnv: ServerEnv | null = null;

export function getServerEnv(): ServerEnv {
  if (cachedServerEnv) {
    return cachedServerEnv;
  }

  const result = serverEnvSchema.safeParse(process.env);

  if (!result.success) {
    console.error('Invalid server environment variables:', result.error.format());
    throw new ConfigurationError('Failed to parse server environment variables', {
      errors: result.error.issues,
    });
  }

  cachedServerEnv = result.data;
  return cachedServerEnv;
}
