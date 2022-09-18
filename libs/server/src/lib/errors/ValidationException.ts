import { BadRequestException } from './Exceptions';

export class ValidationException extends BadRequestException {
  private constructor(options: { message: unknown; domain?: string }) {
    super({
      message: JSON.stringify(options.message),
      code: options?.domain ? `${options.domain}-6000` : '6000',
      metadata: options.message,
    });
  }
  public static new(options: { message: unknown; domain?: string }) {
    return new ValidationException(options);
  }
}
