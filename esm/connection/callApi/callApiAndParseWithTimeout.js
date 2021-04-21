function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import callApi from './callApi';
import rejectAfterTimeout from './rejectAfterTimeout';
import parseResponse from './parseResponse';
export default function callApiAndParseWithTimeout(_x) {
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
            apiPromise = callApi(rest);
            racedPromise = typeof timeout === 'number' && timeout > 0 ? Promise.race([apiPromise, rejectAfterTimeout(timeout)]) : apiPromise;
            return _context.abrupt("return", parseResponse(racedPromise, parseMethod));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callApiAndParseWithTimeout.apply(this, arguments);
}