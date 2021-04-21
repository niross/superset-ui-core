"use strict";

exports.__esModule = true;
exports.default = makeApi;

var _rison = _interopRequireDefault(require("rison"));

var _connection = require("../../../connection");

var _handleError = _interopRequireDefault(require("./handleError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var validRequestTypes = new Set(['form', 'json', 'search', 'rison']);

function isPayloadless(method) {
  return !method || method === 'GET' || method === 'DELETE' || method === 'HEAD';
}
/**
 * Generate an API caller with predefined configs/typing and consistent
 * return values.
 */


function makeApi(_ref) {
  var endpoint = _ref.endpoint,
      method = _ref.method,
      requestType_ = _ref.requestType,
      responseType = _ref.responseType,
      processResponse = _ref.processResponse,
      requestOptions = _objectWithoutPropertiesLoose(_ref, ["endpoint", "method", "requestType", "responseType", "processResponse"]);

  // use `search` payload (searchParams) when it's a GET request
  var requestType = requestType_ || (isPayloadless(method) ? 'search' : 'json');

  if (!validRequestTypes.has(requestType)) {
    throw new Error("Invalid request payload type, choose from: " + [].concat(validRequestTypes).join(' | '));
  }

  function request(_x, _x2) {
    return _request.apply(this, arguments);
  }

  function _request() {
    _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload, _temp) {
      var _ref2, _ref2$client, client, requestConfig, _result, response, typedResult;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2 = _temp === void 0 ? {
                client: _connection.SupersetClient
              } : _temp, _ref2$client = _ref2.client, client = _ref2$client === void 0 ? _connection.SupersetClient : _ref2$client;
              _context.prev = 1;
              requestConfig = _extends({}, requestOptions, {
                method: method,
                endpoint: endpoint
              });

              if (requestType === 'search') {
                requestConfig.searchParams = payload;
              } else if (requestType === 'rison') {
                requestConfig.endpoint = endpoint + "?q=" + _rison.default.encode(payload);
              } else if (requestType === 'form') {
                requestConfig.postPayload = payload;
              } else {
                requestConfig.jsonPayload = payload;
              }

              _context.next = 6;
              return client.request(_extends({}, requestConfig, {
                parseMethod: 'raw'
              }));

            case 6:
              response = _context.sent;

              if (!(responseType === 'text')) {
                _context.next = 13;
                break;
              }

              _context.next = 10;
              return response.text();

            case 10:
              _result = _context.sent;
              _context.next = 22;
              break;

            case 13:
              if (!(responseType === 'raw' || responseType === null)) {
                _context.next = 17;
                break;
              }

              _result = response;
              _context.next = 22;
              break;

            case 17:
              _context.next = 19;
              return response.json();

            case 19:
              _result = _context.sent;

              if (!(_result && typeof _result === 'object' && 'error' in _result)) {
                _context.next = 22;
                break;
              }

              return _context.abrupt("return", (0, _handleError.default)(_result));

            case 22:
              typedResult = _result;
              return _context.abrupt("return", processResponse ? processResponse(typedResult) : typedResult);

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", (0, _handleError.default)(_context.t0));

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 26]]);
    }));
    return _request.apply(this, arguments);
  }

  request.method = method;
  request.endpoint = endpoint;
  request.requestType = requestType;
  return request;
}