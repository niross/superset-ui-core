"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _react2 = require("@emotion/react");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function checkNumber(input) {
  return (0, _utils.isDefined)(input) && typeof input === 'number';
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
      return (0, _react2.jsx)("div", {
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
}(_react.PureComponent);

exports.default = ChartFrame;
ChartFrame.propTypes = {
  contentWidth: _propTypes.default.number,
  contentHeight: _propTypes.default.number,
  height: _propTypes.default.number.isRequired,
  renderContent: _propTypes.default.func.isRequired,
  width: _propTypes.default.number.isRequired
};
ChartFrame.defaultProps = {
  renderContent: function renderContent() {}
};