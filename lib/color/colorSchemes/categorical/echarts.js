"use strict";

exports.__esModule = true;
exports.default = void 0;

var _CategoricalScheme = _interopRequireDefault(require("../../CategoricalScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schemes = [{
  id: 'echarts4Colors',
  label: 'ECharts v4.x Colors',
  colors: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
}, {
  id: 'echarts5Colors',
  label: 'ECharts v5.x Colors',
  colors: ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC']
}].map(function (s) {
  return new _CategoricalScheme.default(s);
});
var _default = schemes;
exports.default = _default;