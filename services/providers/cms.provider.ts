import { IDataProvider, ProviderType } from './types';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

/**
 * CMS Data Provider Specification for future Headless CMS integration.
 */
export class CMSDataProvider implements IDataProvider {
  public readonly name = 'Headless CMS Provider';
  public readonly type: ProviderType = 'cms';

  public async healthCheck(): Promise<Result<{ status: 'ok'; latencyMs: number }, AppError>> {
    return success({ status: 'ok', latencyMs: 80 });
  }
}
