function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

export default function parseResponse(_x, _x2) {
  return _parseResponse.apply(this, arguments);
}

function _parseResponse() {
  _parseResponse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(apiPromise, parseMethod) {
    var response, text, result, json, _result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return apiPromise;

          case 2:
            response = _context.sent;

            if (response.ok) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", Promise.reject(response));

          case 5:
            if (!(parseMethod === null || parseMethod === 'raw')) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", response);

          case 7:
            if (!(parseMethod === 'text')) {
              _context.next = 13;
              break;
            }

            _context.next = 10;
            return response.text();

          case 10:
            text = _context.sent;
            result = {
              response: response,
              text: text
            };
            return _context.abrupt("return", result);

          case 13:
            if (!(parseMethod === undefined || parseMethod === 'json')) {
              _context.next = 19;
              break;
            }

            _context.next = 16;
            return response.json();

          case 16:
            json = _context.sent;
            _result = {
              json: json,
              response: response
            };
            return _context.abrupt("return", _result);

          case 19:
            throw new Error("Expected parseResponse=json|text|raw|null, got '" + parseMethod + "'.");

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _parseResponse.apply(this, arguments);
}