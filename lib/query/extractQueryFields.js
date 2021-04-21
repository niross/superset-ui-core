"use strict";

exports.__esModule = true;
exports.default = extractQueryFields;

var _translation = require("../translation");

var _utils = require("../utils");

var _constants = require("./constants");

var _getMetricLabel = _interopRequireDefault(require("./getMetricLabel"));

var _QueryFormData = require("./types/QueryFormData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Extra SQL query related fields from chart form data.
 * Consolidate field values into arrays.
 *
 * @param formData - the (partial) form data obtained from chart controls.
 * @param aliases - additional field aliases that maps arbitrary field names to
 *                  query field names.
 */
function extractQueryFields(formData, aliases) {
  var queryFieldAliases = _extends({
    /** These are predefined for backward compatibility */
    metric: 'metrics',
    metric_2: 'metrics',
    secondary_metric: 'metrics',
    x: 'metrics',
    y: 'metrics',
    size: 'metrics',
    all_columns: 'columns',
    series: 'groupby',
    order_by_cols: 'orderby'
  }, aliases);

  var queryMode = formData.query_mode,
      includeTime = formData.include_time,
      restFormData = _objectWithoutPropertiesLoose(formData, ["query_mode", "include_time"]);

  var columns = [];
  var metrics = [];
  var orderby = [];
  Object.entries(restFormData).forEach(function (_ref) {
    var key = _ref[0],
        value = _ref[1];

    // ignore `null` or `undefined` value
    if (value == null) {
      return;
    }

    var normalizedKey = queryFieldAliases[key] || key; // ignore columns when (specifically) in aggregate mode.
    // For charts that support both aggregate and raw records mode,
    // we store both `groupby` and `columns` in `formData`, so users can
    // switch between modes while retaining the selected options for each.

    if (queryMode === _QueryFormData.QueryMode.aggregate && normalizedKey === 'columns') {
      return;
    } // for the same reason, ignore groupby and metrics in raw records mode


    if (queryMode === _QueryFormData.QueryMode.raw && (normalizedKey === 'groupby' || normalizedKey === 'metrics')) {
      return;
    } // groupby has been deprecated in QueryObject: https://github.com/apache/superset/pull/9366


    if (normalizedKey === 'groupby') {
      normalizedKey = 'columns';
    }

    if (normalizedKey === 'metrics') {
      metrics = metrics.concat(value);
    } else if (normalizedKey === 'columns') {
      // currently the columns field only accept pre-defined columns (string shortcut)
      columns = columns.concat(value);
    } else if (normalizedKey === 'orderby') {
      orderby = orderby.concat(value);
    }
  });

  if (includeTime && !columns.includes(_constants.DTTM_ALIAS)) {
    columns.unshift(_constants.DTTM_ALIAS);
  }

  return {
    columns: (0, _utils.removeDuplicates)(columns.filter(function (x) {
      return typeof x === 'string' && x;
    })),
    metrics: queryMode === _QueryFormData.QueryMode.raw ? undefined : (0, _utils.removeDuplicates)(metrics, _getMetricLabel.default),
    orderby: orderby.length > 0 ? orderby.map(function (item) {
      // value can be in the format of `['["col1", true]', '["col2", false]'],
      // where the option strings come directly from `order_by_choices`.
      if (typeof item === 'string') {
        try {
          return JSON.parse(item);
        } catch (error) {
          throw new Error((0, _translation.t)('Found invalid orderby options'));
        }
      }

      return item;
    }) : undefined
  };
}