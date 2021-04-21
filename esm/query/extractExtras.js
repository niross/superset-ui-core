/* eslint-disable camelcase */
import { isDruidFormData } from './types';
export default function extractExtras(formData) {
  var applied_time_extras = {};
  var filters = [];
  var extras = {};
  var extract = {
    filters: filters,
    extras: extras,
    applied_time_extras: applied_time_extras
  };
  var reservedColumnsToQueryField = {
    __time_range: 'time_range',
    __time_col: 'granularity_sqla',
    __time_grain: 'time_grain_sqla',
    __time_origin: 'druid_time_origin',
    __granularity: 'granularity'
  };
  (formData.extra_filters || []).forEach(function (filter) {
    if (filter.col in reservedColumnsToQueryField) {
      var key = filter.col;
      var queryField = reservedColumnsToQueryField[key];
      extract[queryField] = filter.val;
      applied_time_extras[key] = filter.val;
    } else {
      filters.push(filter);
    }
  }); // map to undeprecated names and remove deprecated fields

  if (isDruidFormData(formData) && !extract.druid_time_origin) {
    extras.druid_time_origin = formData.druid_time_origin;
    delete extract.druid_time_origin;
  } else {
    // SQL
    extras.time_grain_sqla = extract.time_grain_sqla || formData.time_grain_sqla;
    extract.granularity = extract.granularity_sqla || formData.granularity || formData.granularity_sqla;
    delete extract.granularity_sqla;
    delete extract.time_grain_sqla;
  } // map time range endpoints:


  if (formData.time_range_endpoints) extras.time_range_endpoints = formData.time_range_endpoints;
  return extract;
}