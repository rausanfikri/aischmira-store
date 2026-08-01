export interface RetryOptions {
  maxRetries: number;
  backoffMs: number;
}

export class ResiliencePolicy {
  public static async executeWithRetry<T>(
    fn: () => Promise<T>,
    options: RetryOptions = { maxRetries: 3, backoffMs: 300 }
  ): Promise<T> {
    let attempt = 0;
    while (true) {
      try {
        return await fn();
      } catch (err) {
        attempt++;
        if (attempt >= options.maxRetries) {
          throw err;
        }
        await new Promise((res) => setTimeout(res, options.backoffMs * Math.pow(2, attempt - 1)));
      }
    }
  }

  public static async executeWithTimeout<T>(fn: () => Promise<T>, timeoutMs: number = 5000): Promise<T> {
    return Promise.race([
      fn(),
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error(`Operation timed out after ${timeoutMs}ms`)), timeoutMs)
      ),
    ]);
  }
}
