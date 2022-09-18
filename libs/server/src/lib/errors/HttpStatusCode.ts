export const HttpStatusCode = {
  ACCEPTED: {
    statusCode: 202,
    statusReason: 'Accepted.',
  },

  BAD_GATEWAY: {
    statusCode: 502,
    statusReason: 'Bad Gateway.',
  },

  BAD_REQUEST: {
    statusCode: 400,
    statusReason: 'Bad Request.',
  },

  CONFLICT: {
    statusCode: 409,
    statusReason: 'Conflict.',
  },

  CONTINUE: {
    statusCode: 100,
    statusReason: 'Continue.',
  },

  CREATED: {
    statusCode: 201,
    statusReason: 'Created.',
  },

  EXPECTATION_FAILED: {
    statusCode: 417,
    statusReason: 'Expectation Failed.',
  },

  FAILED_DEPENDENCY: {
    statusCode: 424,
    statusReason: 'Failed Dependency.',
  },

  FORBIDDEN: {
    statusCode: 403,
    statusReason: 'Forbidden.',
  },

  GATEWAY_TIMEOUT: {
    statusCode: 504,
    statusReason: 'Gateway Timeout.',
  },

  GONE: {
    statusCode: 410,
    statusReason: 'Gone.',
  },

  HTTP_VERSION_NOT_SUPPORTED: {
    statusCode: 505,
    statusReason: 'HTTP Version Not Supported.',
  },

  IM_A_TEAPOT: {
    statusCode: 418,
    statusReason: "I'm a teapot.",
  },

  INSUFFICIENT_SPACE_ON_RESOURCE: {
    statusCode: 419,
    statusReason: 'Insufficient Space on Resource.',
  },

  INSUFFICIENT_STORAGE: {
    statusCode: 507,
    statusReason: 'Insufficient Storage.',
  },

  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    statusReason: 'Internal Server Error.',
  },

  LENGHT_REQUIRED: {
    statusCode: 411,
    statusReason: 'Length Required.',
  },

  LOCKED: {
    statusCode: 423,
    statusReason: 'Locked.',
  },

  MOTHOD_FAILURE: {
    statusCode: 420,
    statusReason: 'Method Failure.',
  },

  MOTHOD_NOT_ALLOWED: {
    statusCode: 405,
    statusReason: 'Method Not Allowed.',
  },

  MOVED_PERMANENTLY: {
    statusCode: 301,
    statusReason: 'Moved Permanently.',
  },

  MOVED_TEMPORARILY: {
    statusCode: 302,
    statusReason: 'Moved Temporarily.',
  },

  MULTI_STATUS: {
    statusCode: 207,
    statusReason: 'Multi-Status.',
  },

  MULTIPLE_CHOICES: {
    statusCode: 300,
    statusReason: 'Multiple Choices.',
  },

  NETWORK_AUTHENTICATION_REQUIRED: {
    statusCode: 511,
    statusReason: 'Network Authentication Required.',
  },

  NO_CONTENT: {
    statusCode: 204,
    statusReason: 'No Content.',
  },

  NON_AUTHORITATIVE_INFORMATION: {
    statusCode: 203,
    statusReason: 'Non Authoritative Information.',
  },

  NOT_ACCEPTABLE: {
    statusCode: 406,
    statusReason: 'Not Acceptable.',
  },

  NOT_FOUND: {
    statusCode: 404,
    statusReason: 'Not Found.',
  },

  NOT_IMPLEMENTED: {
    statusCode: 501,
    statusReason: 'Not Implemented.',
  },

  NOT_MODIFIED: {
    statusCode: 304,
    statusReason: 'Not Modified.',
  },

  OK: {
    statusCode: 200,
    statusReason: 'OK.',
  },

  PARTIAL_CONTENT: {
    statusCode: 206,
    statusReason: 'Partial Content.',
  },

  PAYMENT_REQUIRED: {
    statusCode: 402,
    statusReason: 'Payment Required.',
  },

  PERMANENT_REDIRECT: {
    statusCode: 308,
    statusReason: 'Permanent Redirect.',
  },

  PRECONDITION_FAILED: {
    statusCode: 412,
    statusReason: 'Precondition Failed.',
  },

  PRECONDITION_REQUIRED: {
    statusCode: 428,
    statusReason: 'Precondition Required.',
  },

  PROCESSING: {
    statusCode: 102,
    statusReason: 'Processing.',
  },

  PROXY_AUTHENTICATION_REQUIRED: {
    statusCode: 407,
    statusReason: 'Proxy Authentication Required.',
  },

  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    statusCode: 431,
    statusReason: 'Request Header Fields Too Large.',
  },

  REQUEST_TIMEOUT: {
    statusCode: 408,
    statusReason: 'Request Timeout.',
  },

  REQUEST_ENTITY_TOO_LARGE: {
    statusCode: 413,
    statusReason: 'Request Entity Too Large.',
  },

  REQUEST_URI_TOO_LONG: {
    statusCode: 414,
    statusReason: 'Request-URI Too Long.',
  },

  REQUESTED_RANGE_NOT_SATISFIABLE: {
    statusCode: 416,
    statusReason: 'Requested Range Not Satisfiable.',
  },

  RESET_CONTENT: {
    statusCode: 205,
    statusReason: 'Reset Content.',
  },

  SEE_OTHER: {
    statusCode: 303,
    statusReason: 'See Other.',
  },

  SERVICE_UNAVAILABLE: {
    statusCode: 503,
    statusReason: 'Service Unavailable.',
  },

  SWITCHING_PROTOCOLS: {
    statusCode: 101,
    statusReason: 'Switching Protocols.',
  },

  TEMPORARY_REDIRECT: {
    statusCode: 307,
    statusReason: 'Temporary Redirect.',
  },

  TOO_MANY_REQUESTS: {
    statusCode: 429,
    statusReason: 'Too Many Requests.',
  },

  UNAUTHORIZED: {
    statusCode: 401,
    statusReason: 'Unauthorized.',
  },

  UNAVAILABLE_FOR_LEGAL_REASONS: {
    statusCode: 451,
    statusReason: 'Unavailable For Legal Reasons.',
  },

  UNPROCESSABLE_ENTITY: {
    statusCode: 422,
    statusReason: 'Unprocessable Entity.',
  },

  UNSUPPORTED_MEDIA_TYPE: {
    statusCode: 415,
    statusReason: 'Unsupported Media Type.',
  },

  USE_PROXY: {
    statusCode: 305,
    statusReason: 'Use Proxy.',
  },

  MISDIRECTED_REQUEST: {
    statusCode: 421,
    statusReason: 'Misdirected Request.',
  },
};

export type HttpStatusCodeKeys = keyof typeof HttpStatusCode;
