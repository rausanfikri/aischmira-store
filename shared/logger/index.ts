export interface LogContext {
  [key: string]: unknown;
}

export interface ILogger {
  info(message: string, context?: LogContext): void;
  warn(message: string, context?: LogContext): void;
  error(message: string, error?: Error | unknown, context?: LogContext): void;
  debug(message: string, context?: LogContext): void;
}

export class ConsoleLogger implements ILogger {
  info(message: string, context?: LogContext): void {
    console.log(`[INFO] [${new Date().toISOString()}] ${message}`, context || '');
  }

  warn(message: string, context?: LogContext): void {
    console.warn(`[WARN] [${new Date().toISOString()}] ${message}`, context || '');
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    console.error(`[ERROR] [${new Date().toISOString()}] ${message}`, { error, ...context });
  }

  debug(message: string, context?: LogContext): void {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[DEBUG] [${new Date().toISOString()}] ${message}`, context || '');
    }
  }
}

/**
 * RemoteLogger Stub for future integration with Sentry, Supabase Logs, or Datadog.
 */
export class RemoteLogger implements ILogger {
  info(): void {
    // Stub for remote ingestion
  }

  warn(): void {
    // Stub for remote ingestion
  }

  error(): void {
    // Stub for remote ingestion
  }

  debug(): void {
    // Stub for remote ingestion
  }
}

/**
 * CompositeLogger forwards log calls to multiple logger implementations.
 */
export class CompositeLogger implements ILogger {
  constructor(private loggers: ILogger[]) {}

  info(message: string, context?: LogContext): void {
    this.loggers.forEach(l => l.info(message, context));
  }

  warn(message: string, context?: LogContext): void {
    this.loggers.forEach(l => l.warn(message, context));
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    this.loggers.forEach(l => l.error(message, error, context));
  }

  debug(message: string, context?: LogContext): void {
    this.loggers.forEach(l => l.debug(message, context));
  }
}

export const logger: ILogger = new ConsoleLogger();
