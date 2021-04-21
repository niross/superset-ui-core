"use strict";

exports.__esModule = true;
exports.default = createSmartNumberFormatter;

var _d3Format = require("d3-format");

var _NumberFormatter = _interopRequireDefault(require("../NumberFormatter"));

var _NumberFormats = _interopRequireDefault(require("../NumberFormats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var siFormatter = (0, _d3Format.format)(".3~s");
var float2PointFormatter = (0, _d3Format.format)(".2~f");
var float4PointFormatter = (0, _d3Format.format)(".4~f");

function formatValue(value) {
  if (value === 0) {
    return '0';
  }

  var absoluteValue = Math.abs(value);

  if (absoluteValue >= 1000) {
    // Normal human being are more familiar
    // with billion (B) that giga (G)
    return siFormatter(value).replace('G', 'B');
  }

  if (absoluteValue >= 1) {
    return float2PointFormatter(value);
  }

  if (absoluteValue >= 0.001) {
    return float4PointFormatter(value);
  }

  if (absoluteValue > 0.000001) {
    return siFormatter(value * 1000000) + "\xB5";
  }

  return siFormatter(value);
}

function createSmartNumberFormatter(config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      description = _config.description,
      _config$signed = _config.signed,
      signed = _config$signed === void 0 ? false : _config$signed,
      id = _config.id,
      label = _config.label;
  var getSign = signed ? function (value) {
    return value > 0 ? '+' : '';
  } : function () {
    return '';
  };
  return new _NumberFormatter.default({
    description: description,
    formatFunc: function formatFunc(value) {
      return "" + getSign(value) + formatValue(value);
    },
    id: id || signed ? _NumberFormats.default.SMART_NUMBER_SIGNED : _NumberFormats.default.SMART_NUMBER,
    label: label != null ? label : 'Adaptive formatter'
  });
}