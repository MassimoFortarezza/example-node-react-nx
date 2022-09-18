import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import pinoHttp from 'pino-http';

import { LoggerService, pinoHttpConfig } from '../logger';
import { TerminalUtils } from '../utils';
import { Route } from './ExpressRouteDecorators';
import { hasHeaderApiSecretKey } from './middleware';
import { handleError } from './middleware/error-middleware';

export * as asyncDecorator from './ex-async-decorator';
export * from './ExpressRouteDecorators';
export * from './reply';

export class Server {
  private app: express.Application = express();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // private version = require(`${process.cwd()}/package.json`).version;

  public create() {
    this.app.use(cors());
    this.app.use(helmet());
    // app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(pinoHttp(pinoHttpConfig));

    /**
     * Routes init
     */
    this.app.get('/health/status', (_req, res, _next) => {
      LoggerService.info('Request of health');
      return res.status(200).json('OK');
    });
    this.app.use('/api', hasHeaderApiSecretKey(), Route.getRoutes());

    Route.getRoutes().all('*', (_req, res, _next) => {
      return res.status(404).json('404 Not Found');
    });

    /**
     * Error hub
     */
    this.app.use(handleError);
  }

  public registerApiController(controllers: Array<any>) {
    controllers.forEach((Controller) => {
      new Controller();
    });
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      TerminalUtils.drawTable(
        [
          // ['AppVersion', TerminalUtils.color().blueBright(this.version)],
          ['Port', TerminalUtils.color().yellow(port)],
          [
            'Environment',
            TerminalUtils.color().magentaBright(process.env.NODE_ENV),
          ],
        ],
        {
          title: TerminalUtils.color().bold('••• Server Info •••'),
        },
      );
    });
  }
}
