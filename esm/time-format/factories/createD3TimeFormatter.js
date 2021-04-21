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
import { utcFormat, timeFormat, timeFormatLocale } from 'd3-time-format';
import { isRequired } from '../../utils';
import TimeFormatter from '../TimeFormatter';
import { LOCAL_PREFIX } from '../TimeFormats';
export default function createD3TimeFormatter(config) {
  var description = config.description,
      _config$formatString = config.formatString,
      formatString = _config$formatString === void 0 ? isRequired('formatString') : _config$formatString,
      label = config.label,
      locale = config.locale,
      _config$useLocalTime = config.useLocalTime,
      useLocalTime = _config$useLocalTime === void 0 ? false : _config$useLocalTime;
  var id = useLocalTime ? "" + LOCAL_PREFIX + formatString : formatString;
  var formatFunc;

  if (typeof locale === 'undefined') {
    var format = useLocalTime ? timeFormat : utcFormat;
    formatFunc = format(formatString);
  } else {
    var localeObject = timeFormatLocale(locale);
    formatFunc = useLocalTime ? localeObject.format(formatString) : localeObject.utcFormat(formatString);
  }

  return new TimeFormatter({
    description: description,
    formatFunc: formatFunc,
    id: id,
    label: label,
    useLocalTime: useLocalTime
  });
}