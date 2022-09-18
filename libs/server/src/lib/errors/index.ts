import { BaseException } from './BaseException';
import {
  AlreadyExistsException,
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from './Exceptions';
import { HttpStatusCode, HttpStatusCodeKeys } from './HttpStatusCode';

export { AxiosException } from './AxiosException';
export { DatabaseException } from './DatabaseException';
export * from './Exceptions';
export { ValidationException } from './ValidationException';

export class Exception {
  public static new(options: {
    status: HttpStatusCodeKeys;
    message: string;
    code?: string;
  }): BaseException {
    const { message, code } = { ...options };
    switch (HttpStatusCode[options.status]) {
      case HttpStatusCode.NOT_FOUND:
        return new NotFoundException({ message, code });
      case HttpStatusCode.BAD_REQUEST:
        return new BadRequestException({ message, code });
      case HttpStatusCode.UNAUTHORIZED:
        return new UnauthorizedException({ message, code });
      case HttpStatusCode.FORBIDDEN:
        return new ForbiddenException({ message, code });
      case HttpStatusCode.CONFLICT:
        return new AlreadyExistsException({ message, code });
      default:
        return new InternalServerErrorException({ message });
    }
  }
}
