import { IDataAdapter } from './types';

/**
 * Supabase Row Adapter Specification for future PostgreSQL access.
 */
export class SupabaseAdapter<TInput, TOutput> implements IDataAdapter<TInput, TOutput> {
  public toDomain(input: TInput): TOutput {
    return input as unknown as TOutput;
  }

  public toDTO(domain: TOutput): TInput {
    return domain as unknown as TInput;
  }
}
