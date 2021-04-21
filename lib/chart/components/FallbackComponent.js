"use strict";

exports.__esModule = true;
exports.default = FallbackComponent;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CONTAINER_STYLE = {
  backgroundColor: '#000',
  color: '#fff',
  overflow: 'auto',
  padding: 32
};

function FallbackComponent(_ref) {
  var componentStack = _ref.componentStack,
      error = _ref.error,
      height = _ref.height,
      width = _ref.width;
  return (0, _react2.jsx)("div", {
    style: _extends({}, CONTAINER_STYLE, {
      height: height,
      width: width
    })
  }, (0, _react2.jsx)("div", null, (0, _react2.jsx)("div", null, (0, _react2.jsx)("b", null, "Oops! An error occured!")), (0, _react2.jsx)("code", null, error ? error.toString() : 'Unknown Error')), componentStack && (0, _react2.jsx)("div", null, (0, _react2.jsx)("b", null, "Stack Trace:"), (0, _react2.jsx)("code", null, componentStack.split('\n').map(function (row) {
    return (0, _react2.jsx)("div", {
      key: row
    }, row);
  }))));
}