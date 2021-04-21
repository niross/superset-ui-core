"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ColorScheme2 = _interopRequireDefault(require("./ColorScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CategoricalScheme = /*#__PURE__*/function (_ColorScheme) {
  _inheritsLoose(CategoricalScheme, _ColorScheme);

  function CategoricalScheme() {
    return _ColorScheme.apply(this, arguments) || this;
  }

  return CategoricalScheme;
}(_ColorScheme2.default);

exports.default = CategoricalScheme;