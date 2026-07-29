export interface ErrorContext {
  [key: string]: unknown;
}

export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly context?: ErrorContext;
  public readonly timestamp: string;

  constructor(
    message: string,
    code = 'INTERNAL_APP_ERROR',
    statusCode = 500,
    context?: ErrorContext
  ) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.statusCode = statusCode;
    this.context = context;
    this.timestamp = new Date().toISOString();

    // Ensure proper prototype chain restoration for custom Error classes
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 'VALIDATION_ERROR', 400, context);
  }
}

export class RepositoryError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 'REPOSITORY_ERROR', 500, context);
  }
}

export class ConfigurationError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 'CONFIGURATION_ERROR', 500, context);
  }
}

export class NetworkError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 'NETWORK_ERROR', 503, context);
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 'AUTHENTICATION_ERROR', 401, context);
  }
}

export class InventoryError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 'INVENTORY_ERROR', 409, context);
  }
}

export class CheckoutError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 'CHECKOUT_ERROR', 422, context);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 'NOT_FOUND_ERROR', 404, context);
  }
}
