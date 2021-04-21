"use strict";

exports.__esModule = true;
exports.default = void 0;

var _models = require("../models");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ColorSchemeRegistry = /*#__PURE__*/function (_RegistryWithDefaultK) {
  _inheritsLoose(ColorSchemeRegistry, _RegistryWithDefaultK);

  function ColorSchemeRegistry() {
    return _RegistryWithDefaultK.call(this, {
      name: 'ColorScheme',
      overwritePolicy: _models.OverwritePolicy.WARN,
      setFirstItemAsDefault: true
    }) || this;
  }

  var _proto = ColorSchemeRegistry.prototype;

  _proto.get = function get(key) {
    return _RegistryWithDefaultK.prototype.get.call(this, key);
  };

  return ColorSchemeRegistry;
}(_models.RegistryWithDefaultKey);

exports.default = ColorSchemeRegistry;