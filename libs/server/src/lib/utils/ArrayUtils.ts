export class ArrayUtils {
  public static getRandomElement(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  public static removeItemAll(array: any[], item: any) {
    return array.filter((i) => i !== item);
  }

  public static removeDuplicates<T>(list: T[]): T[] {
    return [...new Set(list)];
  }

  public static removeItemOnce(array: any[], item: number) {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }

  public static last<T>(element: T[]) {
    return element[element.length - 1];
  }
}
