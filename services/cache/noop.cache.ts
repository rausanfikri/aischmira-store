import { ICacheStrategy } from './types';

/**
 * Default Noop Cache Strategy (Pass-through with no active caching).
 */
export class NoopCacheStrategy implements ICacheStrategy {
  public async get<T>(): Promise<T | null> {
    return null;
  }

  public async set(): Promise<void> {
    // Noop
  }

  public async delete(): Promise<void> {
    // Noop
  }

  public async clear(): Promise<void> {
    // Noop
  }
}
