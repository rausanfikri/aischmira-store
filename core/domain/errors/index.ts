export class AppError extends Error {
  public readonly code: string;
  public readonly context?: Record<string, unknown>;

  constructor(message: string, code: string, context?: Record<string, unknown>) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.context = context;
  }
}

export class ValidationError extends AppError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, 'VALIDATION_ERROR', context);
  }
}

export class RepositoryError extends AppError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, 'REPOSITORY_ERROR', context);
  }
}

export class InventoryError extends AppError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, 'INVENTORY_ERROR', context);
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, 'AUTHENTICATION_ERROR', context);
  }
}

export class CheckoutError extends AppError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, 'CHECKOUT_ERROR', context);
  }
}
