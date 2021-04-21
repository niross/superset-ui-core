"use strict";

exports.__esModule = true;
exports.default = handleError;

var _types = require("./types");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Handle API request errors, convert to consistent Superset API error.
 * @param error the catched error from SupersetClient.request(...)
 */
function handleError(_x) {
  return _handleError.apply(this, arguments);
}

function _handleError() {
  _handleError = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error) {
    var errorJson, originalError, errorMessage, status, statusText, responseStatus, responseStatusText, err, _errorJson$errors;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(error instanceof _types.SupersetApiError)) {
              _context.next = 2;
              break;
            }

            throw error;

          case 2:
            if (!(typeof error === 'string')) {
              _context.next = 4;
              break;
            }

            throw new _types.SupersetApiError({
              message: error
            });

          case 4:
            if (!(error instanceof Error)) {
              _context.next = 6;
              break;
            }

            throw new _types.SupersetApiError({
              message: error.message || 'Unknown Error',
              originalError: error
            });

          case 6:
            errorMessage = 'Unknown Error';

            if (!(error instanceof Response)) {
              _context.next = 24;
              break;
            }

            responseStatus = error.status, responseStatusText = error.statusText;
            status = responseStatus;
            statusText = responseStatusText;
            errorMessage = status + " " + statusText;
            _context.prev = 12;
            _context.next = 15;
            return error.json();

          case 15:
            errorJson = _context.sent;
            originalError = errorJson;
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](12);
            originalError = error;

          case 22:
            _context.next = 25;
            break;

          case 24:
            if (error) {
              errorJson = error;
            }

          case 25:
            if (!(errorJson && ('error' in errorJson || 'message' in errorJson || 'errors' in errorJson))) {
              _context.next = 29;
              break;
            }

            if ('errors' in errorJson) {
              err = ((_errorJson$errors = errorJson.errors) == null ? void 0 : _errorJson$errors[0]) || {};
            } else if (typeof errorJson.error === 'object') {
              err = errorJson.error;
            } else {
              err = errorJson;
            }

            errorMessage = err.message || err.error || err.error_type || errorMessage;
            throw new _types.SupersetApiError(_extends({
              status: status,
              statusText: statusText,
              message: errorMessage,
              originalError: originalError
            }, err));

          case 29:
            throw new _types.SupersetApiError({
              status: status,
              statusText: statusText,
              message: errorMessage,
              originalError: error
            });

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[12, 19]]);
  }));
  return _handleError.apply(this, arguments);
}