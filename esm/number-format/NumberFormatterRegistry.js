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
import createD3NumberFormatter from './factories/createD3NumberFormatter';
import createSmartNumberFormatter from './factories/createSmartNumberFormatter';
import NumberFormats from './NumberFormats';

var NumberFormatterRegistry = /*#__PURE__*/function (_RegistryWithDefaultK) {
  _inheritsLoose(NumberFormatterRegistry, _RegistryWithDefaultK);

  function NumberFormatterRegistry() {
    var _this;

    _this = _RegistryWithDefaultK.call(this, {
      name: 'NumberFormatter',
      overwritePolicy: OverwritePolicy.WARN
    }) || this;

    _this.registerValue(NumberFormats.SMART_NUMBER, createSmartNumberFormatter());

    _this.registerValue(NumberFormats.SMART_NUMBER_SIGNED, createSmartNumberFormatter({
      signed: true
    }));

    _this.setDefaultKey(NumberFormats.SMART_NUMBER);

    return _this;
  }

  var _proto = NumberFormatterRegistry.prototype;

  _proto.get = function get(formatterId) {
    var targetFormat = ("" + (formatterId === null || typeof formatterId === 'undefined' || formatterId === '' ? this.defaultKey : formatterId)).trim();

    if (this.has(targetFormat)) {
      return _RegistryWithDefaultK.prototype.get.call(this, targetFormat);
    } // Create new formatter if does not exist


    var formatter = createD3NumberFormatter({
      formatString: targetFormat
    });
    this.registerValue(targetFormat, formatter);
    return formatter;
  };

  _proto.format = function format(formatterId, value) {
    return this.get(formatterId)(value);
  };

  return NumberFormatterRegistry;
}(RegistryWithDefaultKey);

export { NumberFormatterRegistry as default };