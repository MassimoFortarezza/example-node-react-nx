import { InternalServerErrorException } from './Exceptions';

export class AxiosException extends InternalServerErrorException {
  private constructor(error) {
    super({
      message: JSON.stringify(error.response.data),
      code: '5002',
    });
  }
  public static new(error) {
    return new AxiosException(error);
  }
}
