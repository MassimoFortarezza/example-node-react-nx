import { BaseException } from './BaseException';
import { HttpStatusCode } from './HttpStatusCode';

export class AlreadyExistsException extends BaseException {
  constructor(options: { message: string; code?: string }) {
    super({
      message: `Resource ${options.message} already exists`,
      code: options.code,
      ...HttpStatusCode.CONFLICT,
    });
  }
}

export class ForbiddenException extends BaseException {
  constructor(options: { message: string; code?: string }) {
    super({
      message: options.message,
      code: options.code,
      ...HttpStatusCode.FORBIDDEN,
    });
  }
}

export class UnauthorizedException extends BaseException {
  constructor(options: { message: string; code?: string }) {
    super({
      message: options.message,
      code: options.code,
      ...HttpStatusCode.UNAUTHORIZED,
    });
  }
}

export class BadRequestException extends BaseException {
  constructor(options: { message: string; code?: string; metadata?: unknown }) {
    super({
      message: options.message,
      code: options?.code ?? '4000',
      metadata: options?.metadata ?? null,
      ...HttpStatusCode.BAD_REQUEST,
    });
  }
}

export class NotFoundException extends BaseException {
  constructor(options: { message: string; code?: string }) {
    super({
      message: `Resource ${options.message} not found`,
      code: options?.code ?? '4001',
      ...HttpStatusCode.NOT_FOUND,
    });
  }
}

export class InternalServerErrorException extends BaseException {
  constructor(options: { message: string; code?: string; metadata?: unknown }) {
    super({
      message: options.message,
      code: options?.code ?? '5000',
      metadata: options?.metadata ?? null,
      ...HttpStatusCode.INTERNAL_SERVER_ERROR,
    });
  }
}
