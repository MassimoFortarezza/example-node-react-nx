import fs from 'fs';
import path from 'path';

export class FileUtils {
  public static readFile(path: number | fs.PathLike) {
    return fs.readFileSync(path, { encoding: 'utf8' });
  }
  public static writeFile(fileName: string, data: unknown) {
    fs.writeFileSync(path.join(__dirname, fileName), JSON.stringify(data));
  }

  /**
   * @example directoryExists('.git') directoryExists = getFileSistem(fs);
   */
  public static getFileSistem(fs) {
    return function (filePath: string) {
      return fs.existsSync(filePath);
    };
  }
}
