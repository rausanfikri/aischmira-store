import { ICacheStrategy } from './types';

/**
 * In-Memory Cache Strategy for fast development caching.
 */
export class MemoryCacheStrategy implements ICacheStrategy {
  private cache = new Map<string, { value: unknown; expiresAt?: number }>();

  public async get<T>(key: string): Promise<T | null> {
    const item = this.cache.get(key);
    if (!item) return null;
    if (item.expiresAt && Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return item.value as T;
  }

  public async set<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    const expiresAt = ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined;
    this.cache.set(key, { value, expiresAt });
  }

  public async delete(key: string): Promise<void> {
    this.cache.delete(key);
  }

  public async clear(): Promise<void> {
    this.cache.clear();
  }
}
