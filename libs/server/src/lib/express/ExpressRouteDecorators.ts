import { Router } from 'express';

import asyncDecorator from './ex-async-decorator';

interface IRouteOptions {
  middlewares?: any[];
}

class ExpressRouteDecorators {
  public _router: Router = Router();
  public router: Router;

  private handler(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    path: string,
    options?: IRouteOptions,
  ) {
    return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
    ) => {
      if (options?.middlewares) {
        this._router[method](
          path,
          options?.middlewares,
          asyncDecorator(target[propertyKey]),
        );
      } else {
        this._router[method](path, asyncDecorator(target[propertyKey]));
      }
      this.router = this._router;
    };
  }
  public getRoutes() {
    return this.router;
  }
  public Get(path: string, options?: IRouteOptions) {
    return this.handler('get', path, options);
  }

  public Post(path: string, options?: IRouteOptions) {
    return this.handler('post', path, options);
  }

  public Put(path: string, options?: IRouteOptions) {
    return this.handler('put', path, options);
  }

  public Patch(path: string, options?: IRouteOptions) {
    return this.handler('patch', path, options);
  }

  public Delete(path: string, options?: IRouteOptions) {
    return this.handler('delete', path, options);
  }
}

export const Route = new ExpressRouteDecorators();
