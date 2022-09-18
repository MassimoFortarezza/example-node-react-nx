export class NumberUtils {
  public static randomicNumber(len: number): number {
    return Math.floor(
      Number(`1${'0'.repeat(len - 1)}`) +
        Math.random() * Number(`9${'0'.repeat(len - 1)}`),
    );
  }
}
