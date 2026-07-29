import { AppError } from '../errors';

export type Success<T> = {
  readonly isSuccess: true;
  readonly isFailure: false;
  readonly value: T;
};

export type Failure<E extends Error = AppError> = {
  readonly isSuccess: false;
  readonly isFailure: true;
  readonly error: E;
};

export type Result<T, E extends Error = AppError> = Success<T> | Failure<E>;

export const success = <T>(value: T): Success<T> => ({
  isSuccess: true,
  isFailure: false,
  value,
});

export const failure = <E extends Error = AppError>(error: E): Failure<E> => ({
  isSuccess: false,
  isFailure: true,
  error,
});

export function isSuccess<T, E extends Error>(result: Result<T, E>): result is Success<T> {
  return result.isSuccess;
}

export function isFailure<T, E extends Error>(result: Result<T, E>): result is Failure<E> {
  return result.isFailure;
}

export function mapResult<T, U, E extends Error>(
  result: Result<T, E>,
  fn: (val: T) => U
): Result<U, E> {
  if (result.isFailure) {
    return result;
  }
  return success(fn(result.value));
}

export function flatMapResult<T, U, E extends Error>(
  result: Result<T, E>,
  fn: (val: T) => Result<U, E>
): Result<U, E> {
  if (result.isFailure) {
    return result;
  }
  return fn(result.value);
}

export function unwrapOr<T, E extends Error>(result: Result<T, E>, fallback: T): T {
  return result.isSuccess ? result.value : fallback;
}
