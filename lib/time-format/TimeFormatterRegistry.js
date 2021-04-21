"use strict";

exports.__esModule = true;
exports.default = void 0;

var _models = require("../models");

var _TimeFormats = _interopRequireWildcard(require("./TimeFormats"));

var _createD3TimeFormatter = _interopRequireDefault(require("./factories/createD3TimeFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TimeFormatterRegistry = /*#__PURE__*/function (_RegistryWithDefaultK) {
  _inheritsLoose(TimeFormatterRegistry, _RegistryWithDefaultK);

  function TimeFormatterRegistry() {
    return _RegistryWithDefaultK.call(this, {
      initialDefaultKey: _TimeFormats.default.DATABASE_DATETIME,
      name: 'TimeFormatter',
      overwritePolicy: _models.OverwritePolicy.WARN
    }) || this;
  }

  var _proto = TimeFormatterRegistry.prototype;

  _proto.get = function get(format) {
    var targetFormat = ("" + (format === null || typeof format === 'undefined' || format === '' ? this.defaultKey : format)).trim();

    if (this.has(targetFormat)) {
      return _RegistryWithDefaultK.prototype.get.call(this, targetFormat);
    } // Create new formatter if does not exist


    var useLocalTime = targetFormat.startsWith(_TimeFormats.LOCAL_PREFIX);
    var formatString = targetFormat.replace(_TimeFormats.LOCAL_PREFIX, '');
    var formatter = (0, _createD3TimeFormatter.default)({
      formatString: formatString,
      useLocalTime: useLocalTime
    });
    this.registerValue(targetFormat, formatter);
    return formatter;
  };

  _proto.format = function format(_format, value) {
    return this.get(_format)(value);
  };

  return TimeFormatterRegistry;
}(_models.RegistryWithDefaultKey);

exports.default = TimeFormatterRegistry;