import { IDataProvider, ProviderType } from './types';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class DummyDataProvider implements IDataProvider {
  public readonly name = 'Dummy Prototype Provider';
  public readonly type: ProviderType = 'dummy';

  public async healthCheck(): Promise<Result<{ status: 'ok'; latencyMs: number }, AppError>> {
    return success({ status: 'ok', latencyMs: 0 });
  }
}
