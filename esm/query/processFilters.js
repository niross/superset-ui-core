/* eslint-disable camelcase */
import { isSimpleAdhocFilter } from './types/Filter';
import convertFilter from './convertFilter';
/** Logic formerly in viz.py's process_query_filters */

export default function processFilters(formData) {
  // Split adhoc_filters into four fields according to
  // (1) clause (WHERE or HAVING)
  // (2) expressionType
  //     2.1 SIMPLE (subject + operator + comparator)
  //     2.2 SQL (freeform SQL expression))
  var adhoc_filters = formData.adhoc_filters,
      _formData$extras = formData.extras,
      extras = _formData$extras === void 0 ? {} : _formData$extras,
      _formData$filters = formData.filters,
      filters = _formData$filters === void 0 ? [] : _formData$filters,
      where = formData.where;
  var simpleWhere = filters;
  var simpleHaving = [];
  var freeformWhere = [];
  if (where) freeformWhere.push(where);
  var freeformHaving = [];
  (adhoc_filters || []).forEach(function (filter) {
    var clause = filter.clause;

    if (isSimpleAdhocFilter(filter)) {
      var filterClause = convertFilter(filter);

      if (clause === 'WHERE') {
        simpleWhere.push(filterClause);
      } else {
        simpleHaving.push(filterClause);
      }
    } else {
      var sqlExpression = filter.sqlExpression;

      if (clause === 'WHERE') {
        freeformWhere.push(sqlExpression);
      } else {
        freeformHaving.push(sqlExpression);
      }
    }
  }); // some filter-related fields need to go in `extras`

  extras.having = freeformHaving.map(function (exp) {
    return "(" + exp + ")";
  }).join(' AND ');
  extras.having_druid = simpleHaving;
  extras.where = freeformWhere.map(function (exp) {
    return "(" + exp + ")";
  }).join(' AND ');
  return {
    filters: simpleWhere,
    extras: extras
  };
}