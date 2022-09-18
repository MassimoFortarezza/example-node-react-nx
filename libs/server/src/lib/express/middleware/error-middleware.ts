import { NextFunction, Request, Response } from 'express';

import { Exception } from '../../errors';
import { BaseException } from '../../errors/BaseException';
import { LoggerService } from '../../logger';

export function handleError(
  err: BaseException,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  let error: BaseException;

  if (!err.getStatusCode?.()) {
    error = Exception.new({
      status: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  } else {
    error = err;
  }

  LoggerService.error({
    url_request: _req.url,
    method_request: _req.method,
    params_request: _req?.params,
    query_request: _req?.query,
    body_request: _req?.body,
    data: error.serialize(),
  });

  return res.status(error.getStatusCode()).json(error.serialize());
}
