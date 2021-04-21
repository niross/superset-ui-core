function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { SupersetClient } from '../../../connection';
export default function fetchExploreJson(_x) {
  return _fetchExploreJson.apply(this, arguments);
}

function _fetchExploreJson() {
  _fetchExploreJson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var _ref$client, client, _ref$method, method, requestConfig, _ref$endpoint, endpoint, formData, _yield$client$request, json;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$client = _ref.client, client = _ref$client === void 0 ? SupersetClient : _ref$client, _ref$method = _ref.method, method = _ref$method === void 0 ? 'POST' : _ref$method, requestConfig = _ref.requestConfig, _ref$endpoint = _ref.endpoint, endpoint = _ref$endpoint === void 0 ? '/superset/explore_json/' : _ref$endpoint, formData = _ref.formData;
            _context.next = 3;
            return client.request(_extends({}, requestConfig, {
              method: method,
              endpoint: endpoint,
              searchParams: method === 'GET' ? new URLSearchParams({
                form_data: JSON.stringify(formData)
              }) : undefined,
              postPayload: method === 'POST' ? {
                form_data: formData
              } : undefined
            }));

          case 3:
            _yield$client$request = _context.sent;
            json = _yield$client$request.json;
            return _context.abrupt("return", json);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchExploreJson.apply(this, arguments);
}