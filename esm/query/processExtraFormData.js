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
import { EXTRA_FORM_DATA_OVERRIDE_EXTRA_KEYS, EXTRA_FORM_DATA_OVERRIDE_REGULAR_MAPPINGS } from './constants';
export function overrideExtraFormData(queryObject, overrideFormData) {
  var overriddenFormData = _extends({}, queryObject);

  var _overriddenFormData$e = overriddenFormData.extras,
      overriddenExtras = _overriddenFormData$e === void 0 ? {} : _overriddenFormData$e;
  Object.entries(EXTRA_FORM_DATA_OVERRIDE_REGULAR_MAPPINGS).forEach(function (_ref) {
    var key = _ref[0],
        target = _ref[1];
    var value = overrideFormData[key];

    if (value !== undefined) {
      overriddenFormData[target] = value;
    }
  });
  EXTRA_FORM_DATA_OVERRIDE_EXTRA_KEYS.forEach(function (key) {
    if (key in overrideFormData) {
      // @ts-ignore
      overriddenExtras[key] = overrideFormData[key];
    }
  });

  if (Object.keys(overriddenExtras).length > 0) {
    overriddenFormData.extras = overriddenExtras;
  }

  return overriddenFormData;
}