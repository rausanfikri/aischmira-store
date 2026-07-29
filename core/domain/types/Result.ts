export type Success<T> = {
  isSuccess: true;
  isFailure: false;
  value: T;
};

export type Failure<E extends Error> = {
  isSuccess: false;
  isFailure: true;
  error: E;
};

export type Result<T, E extends Error = Error> = Success<T> | Failure<E>;

export const success = <T>(value: T): Success<T> => ({
  isSuccess: true,
  isFailure: false,
  value,
});

export const failure = <E extends Error>(error: E): Failure<E> => ({
  isSuccess: false,
  isFailure: true,
  error,
});
