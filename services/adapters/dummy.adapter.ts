import { IDataAdapter } from './types';

export class DummyAdapter<TInput extends Record<string, unknown>, TOutput> implements IDataAdapter<TInput, TOutput> {
  constructor(private readonly mapperFn: (input: TInput) => TOutput) {}

  public toDomain(input: TInput): TOutput {
    return this.mapperFn(input);
  }

  public toDTO(domain: TOutput): TInput {
    return domain as unknown as TInput;
  }
}
