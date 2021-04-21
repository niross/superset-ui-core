import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { PureComponent } from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";
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
    return ___EmotionJSX("table", {
      className: className
    }, ___EmotionJSX("tbody", null, data.map(function (_ref) {
      var key = _ref.key,
          keyColumn = _ref.keyColumn,
          keyStyle = _ref.keyStyle,
          valueColumn = _ref.valueColumn,
          valueStyle = _ref.valueStyle;
      return ___EmotionJSX("tr", {
        key: key
      }, ___EmotionJSX("td", {
        style: keyStyle
      }, keyColumn != null ? keyColumn : key), ___EmotionJSX("td", {
        style: valueStyle ? _extends({}, VALUE_CELL_STYLE, valueStyle) : VALUE_CELL_STYLE
      }, valueColumn));
    })));
  };

  return TooltipTable;
}(PureComponent);

TooltipTable.propTypes = {
  className: _pt.string,
  data: _pt.arrayOf(_pt.shape({
    key: _pt.oneOfType([_pt.string, _pt.number]).isRequired,
    keyColumn: _pt.node,
    valueColumn: _pt.node.isRequired
  })).isRequired
};
TooltipTable.defaultProps = defaultProps;
export { TooltipTable as default };