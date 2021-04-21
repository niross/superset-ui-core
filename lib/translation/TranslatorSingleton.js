"use strict";

exports.__esModule = true;
exports.configure = configure;
exports.addTranslation = addTranslation;
exports.addTranslations = addTranslations;
exports.addLocaleData = addLocaleData;
exports.t = t;
exports.tn = tn;

var _Translator = _interopRequireDefault(require("./Translator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: 0 */
var singleton;
var isConfigured = false;

function configure(config) {
  singleton = new _Translator.default(config);
  isConfigured = true;
  return singleton;
}

function getInstance() {
  if (!isConfigured) {
    console.warn('You should call configure(...) before calling other methods');
  }

  if (typeof singleton === 'undefined') {
    singleton = new _Translator.default();
  }

  return singleton;
}

function addTranslation(key, translations) {
  return getInstance().addTranslation(key, translations);
}

function addTranslations(translations) {
  return getInstance().addTranslations(translations);
}

function addLocaleData(data) {
  return getInstance().addLocaleData(data);
}

function t(input) {
  var _getInstance;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (_getInstance = getInstance()).translate.apply(_getInstance, [input].concat(args));
}

function tn(key) {
  var _getInstance2;

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return (_getInstance2 = getInstance()).translateWithNumber.apply(_getInstance2, [key].concat(args));
}