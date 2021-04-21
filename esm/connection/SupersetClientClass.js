function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import callApiAndParseWithTimeout from './callApi/callApiAndParseWithTimeout';
import { DEFAULT_FETCH_RETRY_OPTIONS, DEFAULT_BASE_URL } from './constants';

var SupersetClientClass = /*#__PURE__*/function () {
  function SupersetClientClass(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$baseUrl = _ref.baseUrl,
        baseUrl = _ref$baseUrl === void 0 ? DEFAULT_BASE_URL : _ref$baseUrl,
        host = _ref.host,
        protocol = _ref.protocol,
        _ref$headers = _ref.headers,
        headers = _ref$headers === void 0 ? {} : _ref$headers,
        _ref$fetchRetryOption = _ref.fetchRetryOptions,
        fetchRetryOptions = _ref$fetchRetryOption === void 0 ? {} : _ref$fetchRetryOption,
        _ref$mode = _ref.mode,
        mode = _ref$mode === void 0 ? 'same-origin' : _ref$mode,
        timeout = _ref.timeout,
        _ref$credentials = _ref.credentials,
        credentials = _ref$credentials === void 0 ? undefined : _ref$credentials,
        _ref$csrfToken = _ref.csrfToken,
        csrfToken = _ref$csrfToken === void 0 ? undefined : _ref$csrfToken;

    this.credentials = void 0;
    this.csrfToken = void 0;
    this.csrfPromise = void 0;
    this.fetchRetryOptions = void 0;
    this.baseUrl = void 0;
    this.protocol = void 0;
    this.host = void 0;
    this.headers = void 0;
    this.mode = void 0;
    this.timeout = void 0;
    var url = new URL(host || protocol ? (protocol || 'https:') + "//" + (host || 'localhost') : baseUrl, // baseUrl for API could also be relative, so we provide current location.href
    // as the base of baseUrl
    window.location.href);
    this.baseUrl = url.href.replace(/\/+$/, ''); // always strip trailing slash

    this.host = url.host;
    this.protocol = url.protocol;
    this.headers = _extends({}, headers);
    this.mode = mode;
    this.timeout = timeout;
    this.credentials = credentials;
    this.csrfToken = csrfToken;
    this.fetchRetryOptions = _extends({}, DEFAULT_FETCH_RETRY_OPTIONS, fetchRetryOptions);

    if (typeof this.csrfToken === 'string') {
      this.headers = _extends({}, this.headers, {
        'X-CSRFToken': this.csrfToken
      });
      this.csrfPromise = Promise.resolve(this.csrfToken);
    }
  }

  var _proto = SupersetClientClass.prototype;

  _proto.init = /*#__PURE__*/function () {
    var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(force) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (force === void 0) {
                force = false;
              }

              if (!(this.isAuthenticated() && !force)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", this.csrfPromise);

            case 3:
              return _context.abrupt("return", this.getCSRFToken());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function init(_x) {
      return _init.apply(this, arguments);
    }

    return init;
  }();

  _proto.reAuthenticate = /*#__PURE__*/function () {
    var _reAuthenticate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.init(true));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function reAuthenticate() {
      return _reAuthenticate.apply(this, arguments);
    }

    return reAuthenticate;
  }();

  _proto.isAuthenticated = function isAuthenticated() {
    // if CSRF protection is disabled in the Superset app, the token may be an empty string
    return this.csrfToken !== null && this.csrfToken !== undefined;
  };

  _proto.get = /*#__PURE__*/function () {
    var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(requestConfig) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request(_extends({}, requestConfig, {
                method: 'GET'
              })));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function get(_x2) {
      return _get.apply(this, arguments);
    }

    return get;
  }();

  _proto.delete = /*#__PURE__*/function () {
    var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(requestConfig) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request(_extends({}, requestConfig, {
                method: 'DELETE'
              })));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function _delete(_x3) {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }();

  _proto.put = /*#__PURE__*/function () {
    var _put = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(requestConfig) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.request(_extends({}, requestConfig, {
                method: 'PUT'
              })));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function put(_x4) {
      return _put.apply(this, arguments);
    }

    return put;
  }();

  _proto.post = /*#__PURE__*/function () {
    var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(requestConfig) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.request(_extends({}, requestConfig, {
                method: 'POST'
              })));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function post(_x5) {
      return _post.apply(this, arguments);
    }

    return post;
  }();

  _proto.request = /*#__PURE__*/function () {
    var _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref2) {
      var credentials, mode, endpoint, host, url, headers, timeout, fetchRetryOptions, rest;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              credentials = _ref2.credentials, mode = _ref2.mode, endpoint = _ref2.endpoint, host = _ref2.host, url = _ref2.url, headers = _ref2.headers, timeout = _ref2.timeout, fetchRetryOptions = _ref2.fetchRetryOptions, rest = _objectWithoutPropertiesLoose(_ref2, ["credentials", "mode", "endpoint", "host", "url", "headers", "timeout", "fetchRetryOptions"]);
              _context7.next = 3;
              return this.ensureAuth();

            case 3:
              return _context7.abrupt("return", callApiAndParseWithTimeout(_extends({}, rest, {
                credentials: credentials != null ? credentials : this.credentials,
                mode: mode != null ? mode : this.mode,
                url: this.getUrl({
                  endpoint: endpoint,
                  host: host,
                  url: url
                }),
                headers: _extends({}, this.headers, headers),
                timeout: timeout != null ? timeout : this.timeout,
                fetchRetryOptions: fetchRetryOptions != null ? fetchRetryOptions : this.fetchRetryOptions
              })));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function request(_x6) {
      return _request.apply(this, arguments);
    }

    return request;
  }();

  _proto.ensureAuth = /*#__PURE__*/function () {
    var _ensureAuth = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var _this$csrfPromise;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", (_this$csrfPromise = this.csrfPromise) != null ? _this$csrfPromise : // eslint-disable-next-line prefer-promise-reject-errors
              Promise.reject({
                error: "SupersetClient has not been provided a CSRF token, ensure it is\n        initialized with `client.getCSRFToken()` or try logging in at\n        " + this.getUrl({
                  endpoint: '/login'
                })
              }));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function ensureAuth() {
      return _ensureAuth.apply(this, arguments);
    }

    return ensureAuth;
  }();

  _proto.getCSRFToken = /*#__PURE__*/function () {
    var _getCSRFToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              this.csrfToken = undefined; // If we can request this resource successfully, it means that the user has
              // authenticated. If not we throw an error prompting to authenticate.

              this.csrfPromise = callApiAndParseWithTimeout({
                credentials: this.credentials,
                headers: _extends({}, this.headers),
                method: 'GET',
                mode: this.mode,
                timeout: this.timeout,
                url: this.getUrl({
                  endpoint: 'api/v1/security/csrf_token/'
                }),
                parseMethod: 'json'
              }).then(function (_ref3) {
                var json = _ref3.json;

                if (typeof json === 'object') {
                  _this.csrfToken = json.result;

                  if (typeof _this.csrfToken === 'string') {
                    _this.headers = _extends({}, _this.headers, {
                      'X-CSRFToken': _this.csrfToken
                    });
                  }
                }

                if (_this.isAuthenticated()) {
                  return _this.csrfToken;
                } // eslint-disable-next-line prefer-promise-reject-errors


                return Promise.reject({
                  error: 'Failed to fetch CSRF token'
                });
              });
              return _context9.abrupt("return", this.csrfPromise);

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function getCSRFToken() {
      return _getCSRFToken.apply(this, arguments);
    }

    return getCSRFToken;
  }();

  _proto.getUrl = function getUrl(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        inputHost = _ref4.host,
        _ref4$endpoint = _ref4.endpoint,
        endpoint = _ref4$endpoint === void 0 ? '' : _ref4$endpoint,
        url = _ref4.url;

    if (typeof url === 'string') return url;
    var host = inputHost != null ? inputHost : this.host;
    var cleanHost = host.slice(-1) === '/' ? host.slice(0, -1) : host; // no backslash

    return this.protocol + "//" + cleanHost + "/" + (endpoint[0] === '/' ? endpoint.slice(1) : endpoint);
  };

  return SupersetClientClass;
}();

export { SupersetClientClass as default };