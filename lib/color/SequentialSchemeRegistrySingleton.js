"use strict";

exports.__esModule = true;
exports.default = void 0;

var _makeSingleton = _interopRequireDefault(require("../utils/makeSingleton"));

var _ColorSchemeRegistry2 = _interopRequireDefault(require("./ColorSchemeRegistry"));

var _d = _interopRequireDefault(require("./colorSchemes/sequential/d3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SequentialSchemeRegistry = /*#__PURE__*/function (_ColorSchemeRegistry) {
  _inheritsLoose(SequentialSchemeRegistry, _ColorSchemeRegistry);

  function SequentialSchemeRegistry() {
    var _this;

    _this = _ColorSchemeRegistry.call(this) || this;

    _this.registerValue('SUPERSET_DEFAULT', _d.default[0]);

    return _this;
  }

  return SequentialSchemeRegistry;
}(_ColorSchemeRegistry2.default);

var getInstance = (0, _makeSingleton.default)(SequentialSchemeRegistry);
var _default = getInstance;
exports.default = _default;