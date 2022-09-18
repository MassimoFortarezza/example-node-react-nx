import 'reflect-metadata';

import { LoggerService, Server } from '@mf-cos/server';

import { APP_CONFIG } from './infrastructure/configurations';
import { ConstructionCompaniesModule } from './modules/construction-companies/core';

async function bootstrap() {
  const server = new Server();

  server.create();
  server.registerApiController([
    ...ConstructionCompaniesModule.httpControllers,
  ]);
  server.listen(APP_CONFIG.PORT);
}
bootstrap().catch((err) => {
  LoggerService.error(`[error run app]:${JSON.stringify(err)}`);
});
