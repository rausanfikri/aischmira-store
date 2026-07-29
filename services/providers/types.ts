import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export type ProviderType = 'dummy' | 'bigseller' | 'supabase' | 'cms' | 'rest' | 'graphql';

export interface IDataProvider {
  readonly name: string;
  readonly type: ProviderType;
  healthCheck(): Promise<Result<{ status: 'ok' | 'degraded' | 'down'; latencyMs: number }, AppError>>;
}
