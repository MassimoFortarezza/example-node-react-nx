import { BaseError } from './BaseError';

export class BaseException extends BaseError {
  protected statusReason: string;
  protected statusCode: number;
  protected code?: string;
  protected metadata?: unknown;
  private isDevelopment: boolean;

  constructor(options: {
    message: string;
    statusCode: number;
    statusReason: string;
    code?: string;
    metadata?: unknown;
  }) {
    const { message, statusCode, statusReason, code, metadata } = {
      ...options,
    };
    super(message);
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.statusCode = statusCode;
    this.statusReason = statusReason;
    this.code = code;
    this.metadata = metadata ?? null;

    if (this.isDevelopment) {
      Error.captureStackTrace(this, BaseException);
    }
  }
  public getStatusCode() {
    return this.statusCode;
  }

  public serialize() {
    const serializeResponse = {
      status: `${this.statusCode} ${this.statusReason}`,
      code: this.code,
      message: this.message,
    };
    return this.isDevelopment
      ? {
          ...serializeResponse,
          metadata: this.metadata,
        }
      : serializeResponse;
  }
}
