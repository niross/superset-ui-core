function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '../translation';
import { removeDuplicates } from '../utils';
import { DTTM_ALIAS } from './constants';
import getMetricLabel from './getMetricLabel';
import { QueryMode } from './types/QueryFormData';
/**
 * Extra SQL query related fields from chart form data.
 * Consolidate field values into arrays.
 *
 * @param formData - the (partial) form data obtained from chart controls.
 * @param aliases - additional field aliases that maps arbitrary field names to
 *                  query field names.
 */

export default function extractQueryFields(formData, aliases) {
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

    if (queryMode === QueryMode.aggregate && normalizedKey === 'columns') {
      return;
    } // for the same reason, ignore groupby and metrics in raw records mode


    if (queryMode === QueryMode.raw && (normalizedKey === 'groupby' || normalizedKey === 'metrics')) {
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

  if (includeTime && !columns.includes(DTTM_ALIAS)) {
    columns.unshift(DTTM_ALIAS);
  }

  return {
    columns: removeDuplicates(columns.filter(function (x) {
      return typeof x === 'string' && x;
    })),
    metrics: queryMode === QueryMode.raw ? undefined : removeDuplicates(metrics, getMetricLabel),
    orderby: orderby.length > 0 ? orderby.map(function (item) {
      // value can be in the format of `['["col1", true]', '["col2", false]'],
      // where the option strings come directly from `order_by_choices`.
      if (typeof item === 'string') {
        try {
          return JSON.parse(item);
        } catch (error) {
          throw new Error(t('Found invalid orderby options'));
        }
      }

      return item;
    }) : undefined
  };
}