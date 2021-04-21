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
import { ExtensibleFunction } from '../models';

var TimeRangeFormatter = /*#__PURE__*/function (_ExtensibleFunction) {
  _inheritsLoose(TimeRangeFormatter, _ExtensibleFunction);

  function TimeRangeFormatter(config) {
    var _this;

    _this = _ExtensibleFunction.call(this, function (value) {
      return _this.format(value);
    }) || this;
    _this.id = void 0;
    _this.label = void 0;
    _this.description = void 0;
    _this.formatFunc = void 0;
    _this.useLocalTime = void 0;
    var id = config.id,
        label = config.label,
        _config$description = config.description,
        description = _config$description === void 0 ? '' : _config$description,
        formatFunc = config.formatFunc,
        _config$useLocalTime = config.useLocalTime,
        useLocalTime = _config$useLocalTime === void 0 ? false : _config$useLocalTime;
    _this.id = id;
    _this.label = label != null ? label : id;
    _this.description = description;
    _this.formatFunc = formatFunc;
    _this.useLocalTime = useLocalTime;
    return _this;
  }

  var _proto = TimeRangeFormatter.prototype;

  _proto.format = function format(values) {
    return this.formatFunc(values);
  };

  return TimeRangeFormatter;
}(ExtensibleFunction);

export default TimeRangeFormatter;