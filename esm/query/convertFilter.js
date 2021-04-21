import { isBinaryAdhocFilter, isUnaryAdhocFilter } from './types/Filter';
export default function convertFilter(filter) {
  var subject = filter.subject;

  if (isUnaryAdhocFilter(filter)) {
    var _operator = filter.operator;
    return {
      col: subject,
      op: _operator
    };
  }

  if (isBinaryAdhocFilter(filter)) {
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