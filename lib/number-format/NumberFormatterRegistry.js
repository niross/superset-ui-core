"use strict";

exports.__esModule = true;
exports.default = void 0;

var _models = require("../models");

var _createD3NumberFormatter = _interopRequireDefault(require("./factories/createD3NumberFormatter"));

var _createSmartNumberFormatter = _interopRequireDefault(require("./factories/createSmartNumberFormatter"));

var _NumberFormats = _interopRequireDefault(require("./NumberFormats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NumberFormatterRegistry = /*#__PURE__*/function (_RegistryWithDefaultK) {
  _inheritsLoose(NumberFormatterRegistry, _RegistryWithDefaultK);

  function NumberFormatterRegistry() {
    var _this;

    _this = _RegistryWithDefaultK.call(this, {
      name: 'NumberFormatter',
      overwritePolicy: _models.OverwritePolicy.WARN
    }) || this;

    _this.registerValue(_NumberFormats.default.SMART_NUMBER, (0, _createSmartNumberFormatter.default)());

    _this.registerValue(_NumberFormats.default.SMART_NUMBER_SIGNED, (0, _createSmartNumberFormatter.default)({
      signed: true
    }));

    _this.setDefaultKey(_NumberFormats.default.SMART_NUMBER);

    return _this;
  }

  var _proto = NumberFormatterRegistry.prototype;

  _proto.get = function get(formatterId) {
    var targetFormat = ("" + (formatterId === null || typeof formatterId === 'undefined' || formatterId === '' ? this.defaultKey : formatterId)).trim();

    if (this.has(targetFormat)) {
      return _RegistryWithDefaultK.prototype.get.call(this, targetFormat);
    } // Create new formatter if does not exist


    var formatter = (0, _createD3NumberFormatter.default)({
      formatString: targetFormat
    });
    this.registerValue(targetFormat, formatter);
    return formatter;
  };

  _proto.format = function format(formatterId, value) {
    return this.get(formatterId)(value);
  };

  return NumberFormatterRegistry;
}(_models.RegistryWithDefaultKey);

exports.default = NumberFormatterRegistry;