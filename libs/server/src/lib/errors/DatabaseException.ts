import { BaseException } from './BaseException';
import { InternalServerErrorException } from './Exceptions';

type PostgreSQLError = {
  query: string;
  parameters: string[];
  driverError: {
    length: number;
    name: string;
    severity: string;
    code: string;
    hint: string;
    position: string;
    file: string;
    line: string;
    routine: string;
  };
  length: number;
  severity: string;
  code: string;
  hint: string;
  position: string;
  file: string;
  line: string;
  routine: string;
};

export class DatabaseException extends InternalServerErrorException {
  private constructor(error: BaseException) {
    const pe = error as any as PostgreSQLError;
    super({
      message: pe.driverError.hint ? pe.driverError.hint : JSON.stringify(pe),
      code: '5001',
      metadata: error,
    });
  }
  public static new(error: BaseException) {
    return new DatabaseException(error);
  }
}
