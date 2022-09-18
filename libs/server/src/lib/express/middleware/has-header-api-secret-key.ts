import { NextFunction, Request, Response } from 'express';

import { Exception } from '../../errors';

export function hasHeaderApiSecretKey(paramsTextInput = 'app-key') {
  const key =
    '8c0a7008a27a26eccb2dbc95276e21a98a791a80b78ff6a129d834be95346b6a';
  return function (req: Request, _res: Response, next: NextFunction) {
    const appKey = req.get(paramsTextInput) as string;
    if (!appKey || key !== appKey) {
      return next(
        Exception.new({
          status: 'BAD_REQUEST',
          message: 'Header secret key not correct',
          code: '7000',
        }),
      );
    }
    return next();
  };
}
