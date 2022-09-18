//const { Logtail } = require('@logtail/node');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pino = require('pino');

export const logger = pino({
  name: 'Api',
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  ignore: 'pid,hostname,level,time,msg,v,hostname,req,res',
});

export const pinoHttpConfig = {
  logger,
  serializers: {
    err: pino.stdSerializers.err,
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res,
  },
  customAttributeKeys: {
    req: 'request',
    res: 'response',
    err: 'error',
    responseTime: 'timeTaken',
  },
};

interface LoggerPort {
  info(message: string, data?: unknown): void;
  warn(message: string, data?: unknown): void;
  error(data: unknown): void;
}

// }

class PinoLoggerAdapter implements LoggerPort {
  log = null;
  constructor() {
    this.log = pino({
      name: 'Api',
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      ignore: 'pid,hostname,level,time,msg,v,hostname,req,res',
    });
  }
  public info(message: string, data?: unknown) {
    this?.log?.info(message, data);
  }
  public warn(message: string, data?: unknown) {
    this?.log?.warn(message, data);
  }
  public error(data: unknown) {
    this?.log?.error(data);
  }
}

class LoggerAdapterFactoryService {
  static getLoggerAdapter(): LoggerPort {
    return new PinoLoggerAdapter();
  }
}

export const LoggerService = LoggerAdapterFactoryService.getLoggerAdapter();
