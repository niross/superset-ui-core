import { format as d3Format } from 'd3-format';
import NumberFormatter from '../NumberFormatter';
import NumberFormats from '../NumberFormats';
var siFormatter = d3Format(".3~s");
var float2PointFormatter = d3Format(".2~f");
var float4PointFormatter = d3Format(".4~f");

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

export default function createSmartNumberFormatter(config) {
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
  return new NumberFormatter({
    description: description,
    formatFunc: function formatFunc(value) {
      return "" + getSign(value) + formatValue(value);
    },
    id: id || signed ? NumberFormats.SMART_NUMBER_SIGNED : NumberFormats.SMART_NUMBER,
    label: label != null ? label : 'Adaptive formatter'
  });
}