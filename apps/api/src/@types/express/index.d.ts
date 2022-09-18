/**
 * @see https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5
 */

declare namespace Express {
  interface Request {
    jwtPayload: import('../../modules/user/core/domain/models/user/user.entity').JwtPayload;
    loggedUser: import('../../modules/user/core/domain/models/user/user.entity').UserEntity;
  }
}
