export class CommonUtils {
  public static isUndefined(obj: any): obj is undefined {
    return typeof obj === 'undefined';
  }
  public static isNil(obj: any): obj is null | undefined {
    return CommonUtils.isUndefined(obj) || obj === null || obj === 'null';
  }
}
