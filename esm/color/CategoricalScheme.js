function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import ColorScheme from './ColorScheme';

var CategoricalScheme = /*#__PURE__*/function (_ColorScheme) {
  _inheritsLoose(CategoricalScheme, _ColorScheme);

  function CategoricalScheme() {
    return _ColorScheme.apply(this, arguments) || this;
  }

  return CategoricalScheme;
}(ColorScheme);

export { CategoricalScheme as default };