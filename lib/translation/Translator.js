"use strict";

exports.__esModule = true;
exports.default = void 0;

var _jed = _interopRequireDefault(require("jed"));

var _logging = _interopRequireDefault(require("../utils/logging"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var DEFAULT_LANGUAGE_PACK = {
  domain: 'superset',
  locale_data: {
    superset: {
      '': {
        domain: 'superset',
        lang: 'en',
        plural_forms: 'nplurals=2; plural=(n != 1)'
      }
    }
  }
};

var Translator = /*#__PURE__*/function () {
  function Translator(config) {
    if (config === void 0) {
      config = {};
    }

    this.i18n = void 0;
    this.locale = void 0;
    var _config = config,
        _config$languagePack = _config.languagePack,
        languagePack = _config$languagePack === void 0 ? DEFAULT_LANGUAGE_PACK : _config$languagePack;
    this.i18n = new _jed.default(languagePack);
    this.locale = this.i18n.options.locale_data.superset[''].lang;
  }
  /**
   * Add additional translations on the fly, used by plugins.
   */


  var _proto = Translator.prototype;

  _proto.addTranslation = function addTranslation(key, texts) {
    var translations = this.i18n.options.locale_data.superset;

    if (key in translations) {
      _logging.default.warn("Duplicate translation key \"" + key + "\", will override.");
    }

    translations[key] = texts;
  }
  /**
   * Add a series of translations.
   */
  ;

  _proto.addTranslations = function addTranslations(translations) {
    var _this = this;

    if (translations && !Array.isArray(translations)) {
      Object.entries(translations).forEach(function (_ref) {
        var key = _ref[0],
            vals = _ref[1];
        return _this.addTranslation(key, vals);
      });
    } else {
      _logging.default.warn('Invalid translations');
    }
  };

  _proto.addLocaleData = function addLocaleData(data) {
    // always fallback to English
    var translations = (data == null ? void 0 : data[this.locale]) || (data == null ? void 0 : data.en);

    if (translations) {
      this.addTranslations(translations);
    } else {
      _logging.default.warn('Invalid locale data');
    }
  };

  _proto.translate = function translate(input) {
    var _this$i18n$translate;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_this$i18n$translate = this.i18n.translate(input)).fetch.apply(_this$i18n$translate, args);
  };

  _proto.translateWithNumber = function translateWithNumber(key) {
    var _this$i18n$translate$2;

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var plural = args[0],
        num = args[1],
        rest = args.slice(2);

    if (typeof plural === 'number') {
      var _this$i18n$translate$;

      return (_this$i18n$translate$ = this.i18n.translate(key).ifPlural(plural, key)).fetch.apply(_this$i18n$translate$, [plural, num].concat(args));
    }

    return (_this$i18n$translate$2 = this.i18n.translate(key).ifPlural(num, plural)).fetch.apply(_this$i18n$translate$2, rest);
  };

  return Translator;
}();

exports.default = Translator;