"use strict";

exports.__esModule = true;
exports.default = callApiAndParseWithTimeout;

var _callApi = _interopRequireDefault(require("./callApi"));

var _rejectAfterTimeout = _interopRequireDefault(require("./rejectAfterTimeout"));

var _parseResponse = _interopRequireDefault(require("./parseResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function callApiAndParseWithTimeout(_x) {
  return _callApiAndParseWithTimeout.apply(this, arguments);
}

function _callApiAndParseWithTimeout() {
  _callApiAndParseWithTimeout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var timeout, parseMethod, rest, apiPromise, racedPromise;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            timeout = _ref.timeout, parseMethod = _ref.parseMethod, rest = _objectWithoutPropertiesLoose(_ref, ["timeout", "parseMethod"]);
            apiPromise = (0, _callApi.default)(rest);
            racedPromise = typeof timeout === 'number' && timeout > 0 ? Promise.race([apiPromise, (0, _rejectAfterTimeout.default)(timeout)]) : apiPromise;
            return _context.abrupt("return", (0, _parseResponse.default)(racedPromise, parseMethod));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callApiAndParseWithTimeout.apply(this, arguments);
}