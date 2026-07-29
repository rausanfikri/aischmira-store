export interface IDataAdapter<TInput, TOutput> {
  toDomain(input: TInput): TOutput;
  toDTO(domain: TOutput): TInput;
}
