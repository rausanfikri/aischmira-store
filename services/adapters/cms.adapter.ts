import { IDataAdapter } from './types';

/**
 * Headless CMS Content Adapter Specification for future CMS payload mapping.
 */
export class CMSAdapter<TInput, TOutput> implements IDataAdapter<TInput, TOutput> {
  public toDomain(input: TInput): TOutput {
    return input as unknown as TOutput;
  }

  public toDTO(domain: TOutput): TInput {
    return domain as unknown as TInput;
  }
}
