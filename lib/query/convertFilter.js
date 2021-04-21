"use strict";

exports.__esModule = true;
exports.default = convertFilter;

var _Filter = require("./types/Filter");

function convertFilter(filter) {
  var subject = filter.subject;

  if ((0, _Filter.isUnaryAdhocFilter)(filter)) {
    var _operator = filter.operator;
    return {
      col: subject,
      op: _operator
    };
  }

  if ((0, _Filter.isBinaryAdhocFilter)(filter)) {
    var _operator2 = filter.operator;
    return {
      col: subject,
      op: _operator2,
      val: filter.comparator
    };
  }

  var operator = filter.operator;
  return {
    col: subject,
    op: operator,
    val: filter.comparator
  };
}