export var DEFAULT_BASE_URL = 'http://localhost'; // HTTP status codes

export var HTTP_STATUS_OK = 200;
export var HTTP_STATUS_NOT_MODIFIED = 304; // Namespace for Cache API

export var CACHE_AVAILABLE = ('caches' in window);
export var CACHE_KEY = '@SUPERSET-UI/CONNECTION';
export var DEFAULT_FETCH_RETRY_OPTIONS = {
  retries: 3,
  retryDelay: 1000,
  retryOn: [503]
};