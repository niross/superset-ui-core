"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultProps = {
  className: '',
  data: []
};
var VALUE_CELL_STYLE = {
  paddingLeft: 8,
  textAlign: 'right'
};

var TooltipTable = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(TooltipTable, _PureComponent);

  function TooltipTable() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TooltipTable.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        data = _this$props.data;
    return (0, _react2.jsx)("table", {
      className: className
    }, (0, _react2.jsx)("tbody", null, data.map(function (_ref) {
      var key = _ref.key,
          keyColumn = _ref.keyColumn,
          keyStyle = _ref.keyStyle,
          valueColumn = _ref.valueColumn,
          valueStyle = _ref.valueStyle;
      return (0, _react2.jsx)("tr", {
        key: key
      }, (0, _react2.jsx)("td", {
        style: keyStyle
      }, keyColumn != null ? keyColumn : key), (0, _react2.jsx)("td", {
        style: valueStyle ? _extends({}, VALUE_CELL_STYLE, valueStyle) : VALUE_CELL_STYLE
      }, valueColumn));
    })));
  };

  return TooltipTable;
}(_react.PureComponent);

exports.default = TooltipTable;
TooltipTable.propTypes = {
  className: _propTypes.default.string,
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
    keyColumn: _propTypes.default.node,
    valueColumn: _propTypes.default.node.isRequired
  })).isRequired
};
TooltipTable.defaultProps = defaultProps;