import {
  HEADER_API_SECRET_KEY,
  JWT_EXPIRATION,
  JWT_SECRET,
  NODE_ENV,
  PORT,
} from './process-env';

export const isTesting = () =>
  NODE_ENV === 'development' || NODE_ENV === 'test';

export const APP_CONFIG = {
  /**
   * Node environment
   */
  ENVIRONMENT: NODE_ENV || 'development',
  /**
   * Api
   */
  API: {
    HEADER_API_SECRET_KEY: HEADER_API_SECRET_KEY,
  },
  /**
   * Server port
   */
  PORT: Number(PORT) || 4000,
  /**
   * Database
   */
  /**
   * Jwt configuration
   */
  JWT: {
    SECRET: JWT_SECRET,
    EXPIRATION: JWT_EXPIRATION,
  },
};
