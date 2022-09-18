import path, { PlatformPath } from 'path';
import util from 'util';
export class SystemUtils {
    /**
     *
     * @param path
     * @returns
     * @example  getRootDirectoryPath = getPath(path);
     */
    public static getPath(path: PlatformPath) {
        return function () {
            return path.basename(process.cwd());
        };
    }

    public static deepLogger(data: unknown) {
        console.log(util.inspect(data, { colors: true, depth: 10 }));
    }
}
