export type LogLevel = "debug" | "info" | "warn" | "error";

export interface ILogger {
  debug(message: string, meta?: Record<string, unknown>): void;
  info(message: string, meta?: Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  error(message: string, error?: Error, meta?: Record<string, unknown>): void;
}

export class AppLogger implements ILogger {
  constructor(private readonly prefix: string = "AISCHMIRA") {}

  public debug(message: string, meta?: Record<string, unknown>): void {
    if (process.env.NODE_ENV === "development") {
      console.debug(`[DEBUG] [${this.prefix}] ${message}`, meta || "");
    }
  }

  public info(message: string, meta?: Record<string, unknown>): void {
    console.info(`[INFO] [${this.prefix}] ${message}`, meta || "");
  }

  public warn(message: string, meta?: Record<string, unknown>): void {
    console.warn(`[WARN] [${this.prefix}] ${message}`, meta || "");
  }

  public error(message: string, error?: Error, meta?: Record<string, unknown>): void {
    console.error(`[ERROR] [${this.prefix}] ${message}`, error || "", meta || "");
  }
}

export const logger = new AppLogger();
