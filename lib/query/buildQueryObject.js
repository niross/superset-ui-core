"use strict";

exports.__esModule = true;
exports.default = buildQueryObject;

var _processFilters = _interopRequireDefault(require("./processFilters"));

var _extractExtras = _interopRequireDefault(require("./extractExtras"));

var _extractQueryFields2 = _interopRequireDefault(require("./extractQueryFields"));

var _processExtraFormData = require("./processExtraFormData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Build the common segments of all query objects (e.g. the granularity field derived from
 * either sql alchemy or druid). The segments specific to each viz type is constructed in the
 * buildQuery method for each viz type (see `wordcloud/buildQuery.ts` for an example).
 * Note the type of the formData argument passed in here is the type of the formData for a
 * specific viz, which is a subtype of the generic formData shared among all viz types.
 */
function buildQueryObject(formData, queryFields) {
  var _formData$annotation_ = formData.annotation_layers,
      annotation_layers = _formData$annotation_ === void 0 ? [] : _formData$annotation_,
      extra_form_data = formData.extra_form_data,
      time_range = formData.time_range,
      since = formData.since,
      until = formData.until,
      row_limit = formData.row_limit,
      row_offset = formData.row_offset,
      order_desc = formData.order_desc,
      limit = formData.limit,
      timeseries_limit_metric = formData.timeseries_limit_metric,
      granularity = formData.granularity,
      _formData$url_params = formData.url_params,
      url_params = _formData$url_params === void 0 ? {} : _formData$url_params,
      _formData$custom_para = formData.custom_params,
      custom_params = _formData$custom_para === void 0 ? {} : _formData$custom_para,
      residualFormData = _objectWithoutPropertiesLoose(formData, ["annotation_layers", "extra_form_data", "time_range", "since", "until", "row_limit", "row_offset", "order_desc", "limit", "timeseries_limit_metric", "granularity", "url_params", "custom_params"]);

  var _ref = extra_form_data || {},
      _ref$adhoc_filters = _ref.adhoc_filters,
      appendAdhocFilters = _ref$adhoc_filters === void 0 ? [] : _ref$adhoc_filters,
      _ref$filters = _ref.filters,
      appendFilters = _ref$filters === void 0 ? [] : _ref$filters,
      _ref$custom_form_data = _ref.custom_form_data,
      custom_form_data = _ref$custom_form_data === void 0 ? {} : _ref$custom_form_data,
      overrides = _objectWithoutPropertiesLoose(_ref, ["adhoc_filters", "filters", "custom_form_data"]);

  var numericRowLimit = Number(row_limit);
  var numericRowOffset = Number(row_offset);

  var _extractQueryFields = (0, _extractQueryFields2.default)(residualFormData, queryFields),
      metrics = _extractQueryFields.metrics,
      columns = _extractQueryFields.columns,
      orderby = _extractQueryFields.orderby; // collect all filters for conversion to simple filters/freeform clauses


  var extras = (0, _extractExtras.default)(formData);
  var extraFilters = extras.filters;
  var filterFormData = {
    filters: [].concat(extraFilters, appendFilters),
    adhoc_filters: [].concat(formData.adhoc_filters || [], appendAdhocFilters)
  };
  var extrasAndfilters = (0, _processFilters.default)(_extends({}, formData, extras, filterFormData));

  var queryObject = _extends({
    // fallback `null` to `undefined` so they won't be sent to the backend
    // (JSON.strinify will ignore `undefined`.)
    time_range: time_range || undefined,
    since: since || undefined,
    until: until || undefined,
    granularity: granularity || undefined
  }, extras, extrasAndfilters, {
    columns: columns,
    metrics: metrics,
    orderby: orderby,
    annotation_layers: annotation_layers,
    row_limit: row_limit == null || Number.isNaN(numericRowLimit) ? undefined : numericRowLimit,
    row_offset: row_offset == null || Number.isNaN(numericRowOffset) ? undefined : numericRowOffset,
    timeseries_limit: limit ? Number(limit) : 0,
    timeseries_limit_metric: timeseries_limit_metric || undefined,
    order_desc: typeof order_desc === 'undefined' ? true : order_desc,
    url_params: url_params || undefined,
    custom_params: custom_params
  }); // override extra form data used by native and cross filters


  queryObject = (0, _processExtraFormData.overrideExtraFormData)(queryObject, overrides);
  return _extends({}, queryObject, {
    custom_form_data: custom_form_data
  });
}