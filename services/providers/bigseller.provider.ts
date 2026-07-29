import { IDataProvider, ProviderType } from './types';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

/**
 * BigSeller OMS Provider Specification for future inventory & product sync.
 */
export class BigSellerDataProvider implements IDataProvider {
  public readonly name = 'BigSeller OMS Provider';
  public readonly type: ProviderType = 'bigseller';

  public async healthCheck(): Promise<Result<{ status: 'ok'; latencyMs: number }, AppError>> {
    return success({ status: 'ok', latencyMs: 150 });
  }
}
