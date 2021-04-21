function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
import { RegistryWithDefaultKey, OverwritePolicy } from '../models';
import TimeFormats, { LOCAL_PREFIX } from './TimeFormats';
import createD3TimeFormatter from './factories/createD3TimeFormatter';

var TimeFormatterRegistry = /*#__PURE__*/function (_RegistryWithDefaultK) {
  _inheritsLoose(TimeFormatterRegistry, _RegistryWithDefaultK);

  function TimeFormatterRegistry() {
    return _RegistryWithDefaultK.call(this, {
      initialDefaultKey: TimeFormats.DATABASE_DATETIME,
      name: 'TimeFormatter',
      overwritePolicy: OverwritePolicy.WARN
    }) || this;
  }

  var _proto = TimeFormatterRegistry.prototype;

  _proto.get = function get(format) {
    var targetFormat = ("" + (format === null || typeof format === 'undefined' || format === '' ? this.defaultKey : format)).trim();

    if (this.has(targetFormat)) {
      return _RegistryWithDefaultK.prototype.get.call(this, targetFormat);
    } // Create new formatter if does not exist


    var useLocalTime = targetFormat.startsWith(LOCAL_PREFIX);
    var formatString = targetFormat.replace(LOCAL_PREFIX, '');
    var formatter = createD3TimeFormatter({
      formatString: formatString,
      useLocalTime: useLocalTime
    });
    this.registerValue(targetFormat, formatter);
    return formatter;
  };

  _proto.format = function format(_format, value) {
    return this.get(_format)(value);
  };

  return TimeFormatterRegistry;
}(RegistryWithDefaultKey);

export { TimeFormatterRegistry as default };