export class StringUtils {
  public static getSentence(str: string) {
    const inThisRange = (range: string[]) => {
      const [from, to] = range;
      return str.substring(
        str.lastIndexOf(from) + from.length,
        str.lastIndexOf(to),
      );
    };
    const fromInitTo = (range: string[]) => {
      const [from, to] = range;
      return str.substring(
        str.lastIndexOf(from) + from.length,
        str.indexOf(to),
      );
    };

    return { inThisRange, fromInitTo };
  }

  public static chunk(str: string, length: number) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
  }

  public static areWordsIncluded(text: string, searchWords: string[]): boolean {
    const regex = searchWords
      .map((word) => '(?=.*\\b' + word + '\\b)')
      .join('');
    const searchExp = new RegExp(regex, 'gi');
    return searchExp.test(text);
  }

  public static lowerFirstLetter(str: string) {
    return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
  }

  public static reduceTextSize(message: string): string {
    return (
      message
        .trim()
        // .replace(/  +?/g, '')
        .replace(/ +(?= )/g, '')
        .replace(/(\r\n|\r|\n){2}/g, '$1')
        .replace(/(\r\n|\r|\n){3,}/g, '$1\n')
    );
  }
  public static replaceAll(
    str: string,
    matchWorld: Record<string, string>,
  ): string {
    const re = new RegExp(Object.keys(matchWorld).join('|'), 'g');
    return str.replace(re, (matched) => matchWorld[matched]);
  }
}
