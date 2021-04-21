"use strict";

exports.__esModule = true;
exports.default = exports.OverwritePolicy = void 0;

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
var OverwritePolicy;
exports.OverwritePolicy = OverwritePolicy;

(function (OverwritePolicy) {
  OverwritePolicy["ALLOW"] = "ALLOW";
  OverwritePolicy["PROHIBIT"] = "PROHIBIT";
  OverwritePolicy["WARN"] = "WARN";
})(OverwritePolicy || (exports.OverwritePolicy = OverwritePolicy = {}));

/**
 * Registry class
 *
 * Can use generic to specify type of item in the registry
 * @type V Type of value
 * @type W Type of value returned from loader function when using registerLoader().
 * W can be either V, Promise<V> or V | Promise<V>
 * Set W=V when does not support asynchronous loader.
 * By default W is set to V | Promise<V> to support
 * both synchronous and asynchronous loaders.
 */
var Registry = /*#__PURE__*/function () {
  function Registry(config) {
    if (config === void 0) {
      config = {};
    }

    this.name = void 0;
    this.overwritePolicy = void 0;
    this.items = void 0;
    this.promises = void 0;
    var _config = config,
        _config$name = _config.name,
        name = _config$name === void 0 ? '' : _config$name,
        _config$overwritePoli = _config.overwritePolicy,
        overwritePolicy = _config$overwritePoli === void 0 ? OverwritePolicy.ALLOW : _config$overwritePoli;
    this.name = name;
    this.overwritePolicy = overwritePolicy;
    this.items = {};
    this.promises = {};
  }

  var _proto = Registry.prototype;

  _proto.clear = function clear() {
    this.items = {};
    this.promises = {};
    return this;
  };

  _proto.has = function has(key) {
    var item = this.items[key];
    return item !== null && item !== undefined;
  };

  _proto.registerValue = function registerValue(key, value) {
    var item = this.items[key];
    var willOverwrite = this.has(key) && ('value' in item && item.value !== value || 'loader' in item);

    if (willOverwrite) {
      if (this.overwritePolicy === OverwritePolicy.WARN) {
        // eslint-disable-next-line no-console
        console.warn("Item with key \"" + key + "\" already exists. You are assigning a new value.");
      } else if (this.overwritePolicy === OverwritePolicy.PROHIBIT) {
        throw new Error("Item with key \"" + key + "\" already exists. Cannot overwrite.");
      }
    }

    if (!item || willOverwrite) {
      this.items[key] = {
        value: value
      };
      delete this.promises[key];
    }

    return this;
  };

  _proto.registerLoader = function registerLoader(key, loader) {
    var item = this.items[key];
    var willOverwrite = this.has(key) && ('loader' in item && item.loader !== loader || 'value' in item);

    if (willOverwrite) {
      if (this.overwritePolicy === OverwritePolicy.WARN) {
        // eslint-disable-next-line no-console
        console.warn("Item with key \"" + key + "\" already exists. You are assigning a new value.");
      } else if (this.overwritePolicy === OverwritePolicy.PROHIBIT) {
        throw new Error("Item with key \"" + key + "\" already exists. Cannot overwrite.");
      }
    }

    if (!item || willOverwrite) {
      this.items[key] = {
        loader: loader
      };
      delete this.promises[key];
    }

    return this;
  };

  _proto.get = function get(key) {
    var item = this.items[key];

    if (item !== undefined) {
      if ('loader' in item) {
        return item.loader && item.loader();
      }

      return item.value;
    }

    return undefined;
  };

  _proto.getAsPromise = function getAsPromise(key) {
    var promise = this.promises[key];

    if (typeof promise !== 'undefined') {
      return promise;
    }

    var item = this.get(key);

    if (item !== undefined) {
      var newPromise = Promise.resolve(item);
      this.promises[key] = newPromise;
      return newPromise;
    }

    return Promise.reject(new Error("Item with key \"" + key + "\" is not registered."));
  };

  _proto.getMap = function getMap() {
    var _this = this;

    return this.keys().reduce(function (prev, key) {
      var map = prev;
      map[key] = _this.get(key);
      return map;
    }, {});
  };

  _proto.getMapAsPromise = function getMapAsPromise() {
    var _this2 = this;

    var keys = this.keys();
    return Promise.all(keys.map(function (key) {
      return _this2.getAsPromise(key);
    })).then(function (values) {
      return values.reduce(function (prev, value, i) {
        var map = prev;
        map[keys[i]] = value;
        return map;
      }, {});
    });
  };

  _proto.keys = function keys() {
    return Object.keys(this.items);
  };

  _proto.values = function values() {
    var _this3 = this;

    return this.keys().map(function (key) {
      return _this3.get(key);
    });
  };

  _proto.valuesAsPromise = function valuesAsPromise() {
    var _this4 = this;

    return Promise.all(this.keys().map(function (key) {
      return _this4.getAsPromise(key);
    }));
  };

  _proto.entries = function entries() {
    var _this5 = this;

    return this.keys().map(function (key) {
      return {
        key: key,
        value: _this5.get(key)
      };
    });
  };

  _proto.entriesAsPromise = function entriesAsPromise() {
    var _this6 = this;

    var keys = this.keys();
    return Promise.all(keys.map(function (key) {
      return _this6.getAsPromise(key);
    })).then(function (values) {
      return values.map(function (value, i) {
        return {
          key: keys[i],
          value: value
        };
      });
    });
  };

  _proto.remove = function remove(key) {
    delete this.items[key];
    delete this.promises[key];
    return this;
  };

  return Registry;
}();

exports.default = Registry;