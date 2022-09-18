import { v4 as uuidv4 } from 'uuid';

export class CommonUtils {
  public static generateUUID() {
    return uuidv4();
  }

  public static b64ToString(data) {
    return Buffer.from(data, 'base64').toString();
  }

  public static isJsonParse(item: string) {
    let ret = true;
    try {
      JSON.parse(item);
    } catch (e) {
      ret = false;
    }
    return ret;
  }

  public static isUndefined(obj: any): obj is undefined {
    return typeof obj === 'undefined';
  }

  public static isFunction(fn: any): boolean {
    return typeof fn === 'function';
  }

  public static isString(fn: any): fn is string {
    return typeof fn === 'string';
  }

  public static isConstructor(fn: any): boolean {
    return fn === 'constructor';
  }

  public static isNil(obj: any): obj is null | undefined {
    return CommonUtils.isUndefined(obj) || obj === null;
  }

  public static isEmpty(array: any): boolean {
    return !(array && array.length > 0);
  }

  public static sleep(duration: number): Promise<void> {
    return new Promise((resolve) => {
      console.log('pause.......');
      setTimeout(() => {
        console.log('resume.......');
        return resolve();
      }, duration * 1000);
    });
  }
  public static valueOrNull(value) {
    return value || null;
  }
}
