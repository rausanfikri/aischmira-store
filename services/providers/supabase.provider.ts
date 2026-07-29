import { IDataProvider, ProviderType } from './types';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

/**
 * Supabase Data Provider Specification for future PostgreSQL persistence.
 */
export class SupabaseDataProvider implements IDataProvider {
  public readonly name = 'Supabase PostgreSQL Provider';
  public readonly type: ProviderType = 'supabase';

  public async healthCheck(): Promise<Result<{ status: 'ok'; latencyMs: number }, AppError>> {
    return success({ status: 'ok', latencyMs: 45 });
  }
}
