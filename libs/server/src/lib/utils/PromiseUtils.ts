import { BaseException } from '../errors/BaseException';
import { Nullable } from '.';

export class PromiseUtils {
  public static async useCatch<T>(
    fn: Promise<T>,
  ): Promise<[Nullable<BaseException>, Nullable<T>]> {
    try {
      const res = await fn;
      return [null, res];
    } catch (error) {
      return [error, null];
    }
  }
}
