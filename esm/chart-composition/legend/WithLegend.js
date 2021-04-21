import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { PureComponent } from 'react';
import { ParentSize } from '@vx/responsive'; // eslint-disable-next-line import/no-unresolved

import { jsx as ___EmotionJSX } from "@emotion/react";
var defaultProps = {
  className: '',
  height: 'auto',
  position: 'top',
  width: 'auto'
};
var LEGEND_STYLE_BASE = {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  order: -1
};
var CHART_STYLE_BASE = {
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  position: 'relative'
};

var WithLegend = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(WithLegend, _PureComponent);

  function WithLegend() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = WithLegend.prototype;

  _proto.getContainerDirection = function getContainerDirection() {
    var position = this.props.position;

    if (position === 'left') {
      return 'row';
    }

    if (position === 'right') {
      return 'row-reverse';
    }

    if (position === 'bottom') {
      return 'column-reverse';
    }

    return 'column';
  };

  _proto.getLegendJustifyContent = function getLegendJustifyContent() {
    var _this$props = this.props,
        legendJustifyContent = _this$props.legendJustifyContent,
        position = _this$props.position;

    if (legendJustifyContent) {
      return legendJustifyContent;
    }

    if (position === 'left' || position === 'right') {
      return 'flex-start';
    }

    return 'flex-end';
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        debounceTime = _this$props2.debounceTime,
        width = _this$props2.width,
        height = _this$props2.height,
        position = _this$props2.position,
        renderChart = _this$props2.renderChart,
        renderLegend = _this$props2.renderLegend;
    var isHorizontal = position === 'left' || position === 'right';
    var style = {
      display: 'flex',
      flexDirection: this.getContainerDirection(),
      height: height,
      width: width
    };

    var chartStyle = _extends({}, CHART_STYLE_BASE);

    if (isHorizontal) {
      chartStyle.width = 0;
    } else {
      chartStyle.height = 0;
    }

    var legendDirection = isHorizontal ? 'column' : 'row';

    var legendStyle = _extends({}, LEGEND_STYLE_BASE, {
      flexDirection: legendDirection,
      justifyContent: this.getLegendJustifyContent()
    });

    return ___EmotionJSX("div", {
      className: "with-legend " + className,
      style: style
    }, renderLegend && ___EmotionJSX("div", {
      className: "legend-container",
      style: legendStyle
    }, renderLegend({
      // Pass flexDirection for @vx/legend to arrange legend items
      direction: legendDirection
    })), ___EmotionJSX("div", {
      className: "main-container",
      style: chartStyle
    }, ___EmotionJSX(ParentSize, {
      debounceTime: debounceTime
    }, function (parent) {
      return parent.width > 0 && parent.height > 0 ? // Only render when necessary
      renderChart(parent) : null;
    })));
  };

  return WithLegend;
}(PureComponent);

WithLegend.propTypes = {
  className: _pt.string.isRequired,
  debounceTime: _pt.number,
  width: _pt.oneOfType([_pt.number, _pt.string]).isRequired,
  height: _pt.oneOfType([_pt.number, _pt.string]).isRequired,
  legendJustifyContent: _pt.oneOf(['center', 'flex-start', 'flex-end']),
  position: _pt.oneOf(['top', 'left', 'bottom', 'right']).isRequired,
  renderChart: _pt.func.isRequired,
  renderLegend: _pt.func
};
WithLegend.defaultProps = defaultProps;
export default WithLegend;