function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import 'whatwg-fetch';
import fetchRetry from 'fetch-retry';
import { CACHE_AVAILABLE, CACHE_KEY, HTTP_STATUS_NOT_MODIFIED, HTTP_STATUS_OK } from '../constants';

function tryParsePayload(payload) {
  try {
    return typeof payload === 'string' ? JSON.parse(payload) : payload;
  } catch (error) {
    throw new Error("Invalid payload:\n\n" + payload);
  }
}
/**
 * Try appending search params to an URL if needed.
 */


function getFullUrl(partialUrl, params) {
  if (params) {
    var url = new URL(partialUrl, window.location.href);
    var search = params instanceof URLSearchParams ? params : new URLSearchParams(params); // will completely override any existing search params

    url.search = search.toString();
    return url.href;
  }

  return partialUrl;
}
/**
 * Fetch an API response and returns the corresponding json.
 *
 * @param {Payload} postPayload payload to send as FormData in a post form
 * @param {Payload} jsonPayload json payload to post, will automatically add Content-Type header
 * @param {string} stringify whether to stringify field values when post as formData
 */


export default function callApi(_x) {
  return _callApi.apply(this, arguments);
}

function _callApi() {
  _callApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var body, _ref$cache, cache, _ref$credentials, credentials, fetchRetryOptions, headers, _ref$method, method, _ref$mode, mode, postPayload, jsonPayload, _ref$redirect, redirect, signal, _ref$stringify, stringify, url_, searchParams, fetchWithRetry, url, request, supersetCache, cachedResponse, etag, response, cachedFullResponse, payload, formData;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = _ref.body, _ref$cache = _ref.cache, cache = _ref$cache === void 0 ? 'default' : _ref$cache, _ref$credentials = _ref.credentials, credentials = _ref$credentials === void 0 ? 'same-origin' : _ref$credentials, fetchRetryOptions = _ref.fetchRetryOptions, headers = _ref.headers, _ref$method = _ref.method, method = _ref$method === void 0 ? 'GET' : _ref$method, _ref$mode = _ref.mode, mode = _ref$mode === void 0 ? 'same-origin' : _ref$mode, postPayload = _ref.postPayload, jsonPayload = _ref.jsonPayload, _ref$redirect = _ref.redirect, redirect = _ref$redirect === void 0 ? 'follow' : _ref$redirect, signal = _ref.signal, _ref$stringify = _ref.stringify, stringify = _ref$stringify === void 0 ? true : _ref$stringify, url_ = _ref.url, searchParams = _ref.searchParams;
            fetchWithRetry = fetchRetry(fetch, fetchRetryOptions);
            url = "" + getFullUrl(url_, searchParams);
            request = {
              body: body,
              cache: cache,
              credentials: credentials,
              headers: headers,
              method: method,
              mode: mode,
              redirect: redirect,
              signal: signal
            };

            if (!(method === 'GET' && cache !== 'no-store' && cache !== 'reload' && CACHE_AVAILABLE && (window.location && window.location.protocol) === 'https:')) {
              _context.next = 24;
              break;
            }

            _context.next = 7;
            return caches.open(CACHE_KEY);

          case 7:
            supersetCache = _context.sent;
            _context.next = 10;
            return supersetCache.match(url);

          case 10:
            cachedResponse = _context.sent;

            if (cachedResponse) {
              // if we have a cached response, send its ETag in the
              // `If-None-Match` header in a conditional request
              etag = cachedResponse.headers.get('Etag');
              request.headers = _extends({}, request.headers, {
                'If-None-Match': etag
              });
            }

            _context.next = 14;
            return fetchWithRetry(url, request);

          case 14:
            response = _context.sent;

            if (!(response.status === HTTP_STATUS_NOT_MODIFIED)) {
              _context.next = 22;
              break;
            }

            _context.next = 18;
            return supersetCache.match(url);

          case 18:
            cachedFullResponse = _context.sent;

            if (!cachedFullResponse) {
              _context.next = 21;
              break;
            }

            return _context.abrupt("return", cachedFullResponse.clone());

          case 21:
            throw new Error('Received 304 but no content is cached!');

          case 22:
            if (response.status === HTTP_STATUS_OK && response.headers.get('Etag')) {
              supersetCache.delete(url);
              supersetCache.put(url, response.clone());
            }

            return _context.abrupt("return", response);

          case 24:
            if (!(method === 'POST' || method === 'PATCH' || method === 'PUT')) {
              _context.next = 29;
              break;
            }

            if (!(postPayload && jsonPayload)) {
              _context.next = 27;
              break;
            }

            throw new Error('Please provide only one of jsonPayload or postPayload');

          case 27:
            if (postPayload instanceof FormData) {
              request.body = postPayload;
            } else if (postPayload) {
              payload = tryParsePayload(postPayload);

              if (payload && typeof payload === 'object') {
                // using FormData has the effect that Content-Type header is set to `multipart/form-data`,
                // not e.g., 'application/x-www-form-urlencoded'
                formData = new FormData();
                Object.keys(payload).forEach(function (key) {
                  var value = payload[key];

                  if (typeof value !== 'undefined') {
                    formData.append(key, stringify ? JSON.stringify(value) : String(value));
                  }
                });
                request.body = formData;
              }
            }

            if (jsonPayload !== undefined) {
              request.body = JSON.stringify(jsonPayload);
              request.headers = _extends({}, request.headers, {
                'Content-Type': 'application/json'
              });
            }

          case 29:
            return _context.abrupt("return", fetchWithRetry(url, request));

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callApi.apply(this, arguments);
}