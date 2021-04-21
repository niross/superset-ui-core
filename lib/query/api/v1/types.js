"use strict";

exports.__esModule = true;
exports.SupersetApiError = exports.SupersetApiErrorType = void 0;

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable camelcase */

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

/**
 * Runtime options when calling a Superset API. Currently only allow overriding
 * SupersetClient instance.
 */

/**
 * Superset API error types.
 * Ref: https://github.com/apache/incubator-superset/blob/318e5347bc6f88119725775baa4ab9a398a6f0b0/superset/errors.py#L24
 *
 * TODO: migrate superset-frontend/src/components/ErrorMessage/types.ts over
 */
var SupersetApiErrorType;
/**
 * API Error json response from the backend (or fetch API in the frontend).
 * See SIP-40 and SIP-41: https://github.com/apache/incubator-superset/issues/9298
 */

exports.SupersetApiErrorType = SupersetApiErrorType;

(function (SupersetApiErrorType) {
  SupersetApiErrorType["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
  SupersetApiErrorType["FRONTEND_CSRF_ERROR"] = "FRONTEND_CSRF_ERROR";
  SupersetApiErrorType["FRONTEND_NETWORK_ERROR"] = "FRONTEND_NETWORK_ERROR";
  SupersetApiErrorType["FRONTEND_TIMEOUT_ERROR"] = "FRONTEND_TIMEOUT_ERROR";
  SupersetApiErrorType["GENERIC_DB_ENGINE_ERROR"] = "GENERIC_DB_ENGINE_ERROR";
  SupersetApiErrorType["VIZ_GET_DF_ERROR"] = "VIZ_GET_DF_ERROR";
  SupersetApiErrorType["UNKNOWN_DATASOURCE_TYPE_ERROR"] = "UNKNOWN_DATASOURCE_TYPE_ERROR";
  SupersetApiErrorType["FAILED_FETCHING_DATASOURCE_INFO_ERROR"] = "FAILED_FETCHING_DATASOURCE_INFO_ERROR";
  SupersetApiErrorType["TABLE_SECURITY_ACCESS_ERROR"] = "TABLE_SECURITY_ACCESS_ERROR";
  SupersetApiErrorType["DATASOURCE_SECURITY_ACCESS_ERROR"] = "DATASOURCE_SECURITY_ACCESS_ERROR";
  SupersetApiErrorType["MISSING_OWNERSHIP_ERROR"] = "MISSING_OWNERSHIP_ERROR";
})(SupersetApiErrorType || (exports.SupersetApiErrorType = SupersetApiErrorType = {}));

var SupersetApiError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(SupersetApiError, _Error);

  function SupersetApiError(_ref) {
    var _this;

    var status = _ref.status,
        statusText = _ref.statusText,
        message = _ref.message,
        link = _ref.link,
        extra = _ref.extra,
        stack = _ref.stack,
        errorType = _ref.error_type,
        originalError = _ref.originalError;
    _this = _Error.call(this, message) || this;
    _this.status = void 0;
    _this.statusText = void 0;
    _this.errorType = void 0;
    _this.extra = void 0;
    _this.originalError = void 0;
    var originalErrorStack = stack || (originalError instanceof Error ? originalError.stack : undefined);
    _this.stack = originalErrorStack && _this.stack ? [_this.stack.split('\n')[0]].concat(originalErrorStack.split('\n').slice(1)).join('\n') : _this.stack;
    _this.name = 'SupersetApiError';
    _this.errorType = errorType || SupersetApiErrorType.UNKNOWN_ERROR;
    _this.extra = extra || {};

    if (link) {
      _this.extra.link = link;
    }

    _this.status = status;
    _this.statusText = statusText;
    _this.originalError = originalError;
    return _this;
  }

  return SupersetApiError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.SupersetApiError = SupersetApiError;