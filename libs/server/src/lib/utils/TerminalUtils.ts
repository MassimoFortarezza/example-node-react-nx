import chalk from 'chalk';
import { table } from 'table';

export class TerminalUtils {
  public static drawTable(data: any, config: { title: string }) {
    const _config = {
      header: {
        alignment: 'center',
        content: config.title,
      },
      border: {
        topBody: `─`,
        topJoin: `┬`,
        topLeft: `┌`,
        topRight: `┐`,

        bottomBody: `─`,
        bottomJoin: `┴`,
        bottomLeft: `└`,
        bottomRight: `┘`,

        bodyLeft: `│`,
        bodyRight: `│`,
        bodyJoin: `│`,

        joinBody: `─`,
        joinLeft: `├`,
        joinRight: `┤`,
        joinJoin: `┼`,
      },
    };
    console.log(table(data, _config as any));
  }

  public static color() {
    return chalk;
  }
}
