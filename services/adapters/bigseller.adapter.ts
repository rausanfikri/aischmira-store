import { IDataAdapter } from './types';

/**
 * BigSeller Payload Adapter Specification for future sync.
 */
export class BigSellerAdapter<TInput, TOutput> implements IDataAdapter<TInput, TOutput> {
  public toDomain(input: TInput): TOutput {
    return input as unknown as TOutput;
  }

  public toDTO(domain: TOutput): TInput {
    return domain as unknown as TInput;
  }
}
