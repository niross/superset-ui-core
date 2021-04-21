"use strict";

exports.__esModule = true;
exports.default = mergeMargin;

function mergeOneSide(operation, a, b) {
  if (a === void 0) {
    a = 0;
  }

  if (b === void 0) {
    b = 0;
  }

  if (Number.isNaN(a) || a === null) return b;
  if (Number.isNaN(b) || b === null) return a;
  return operation(a, b);
}

function mergeMargin(margin1, margin2, mode) {
  if (margin1 === void 0) {
    margin1 = {};
  }

  if (margin2 === void 0) {
    margin2 = {};
  }

  if (mode === void 0) {
    mode = 'expand';
  }

  var _margin = margin1,
      top = _margin.top,
      left = _margin.left,
      bottom = _margin.bottom,
      right = _margin.right;
  var operation = mode === 'expand' ? Math.max : Math.min;
  return {
    bottom: mergeOneSide(operation, bottom, margin2.bottom),
    left: mergeOneSide(operation, left, margin2.left),
    right: mergeOneSide(operation, right, margin2.right),
    top: mergeOneSide(operation, top, margin2.top)
  };
}