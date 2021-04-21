import _pt from "prop-types";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { PureComponent } from 'react';
import { isDefined } from '../utils';
import { jsx as ___EmotionJSX } from "@emotion/react";

function checkNumber(input) {
  return isDefined(input) && typeof input === 'number';
}

var ChartFrame = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(ChartFrame, _PureComponent);

  function ChartFrame() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ChartFrame.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        contentWidth = _this$props.contentWidth,
        contentHeight = _this$props.contentHeight,
        width = _this$props.width,
        height = _this$props.height,
        renderContent = _this$props.renderContent;
    var overflowX = checkNumber(contentWidth) && contentWidth > width;
    var overflowY = checkNumber(contentHeight) && contentHeight > height;

    if (overflowX || overflowY) {
      return ___EmotionJSX("div", {
        style: {
          height: height,
          overflowX: overflowX ? 'auto' : 'hidden',
          overflowY: overflowY ? 'auto' : 'hidden',
          width: width
        }
      }, renderContent({
        height: Math.max(contentHeight != null ? contentHeight : 0, height),
        width: Math.max(contentWidth != null ? contentWidth : 0, width)
      }));
    }

    return renderContent({
      height: height,
      width: width
    });
  };

  return ChartFrame;
}(PureComponent);

ChartFrame.propTypes = {
  contentWidth: _pt.number,
  contentHeight: _pt.number,
  height: _pt.number.isRequired,
  renderContent: _pt.func.isRequired,
  width: _pt.number.isRequired
};
ChartFrame.defaultProps = {
  renderContent: function renderContent() {}
};
export { ChartFrame as default };