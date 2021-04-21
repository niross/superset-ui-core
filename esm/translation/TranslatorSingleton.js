/* eslint no-console: 0 */
import Translator from './Translator';
var singleton;
var isConfigured = false;

function configure(config) {
  singleton = new Translator(config);
  isConfigured = true;
  return singleton;
}

function getInstance() {
  if (!isConfigured) {
    console.warn('You should call configure(...) before calling other methods');
  }

  if (typeof singleton === 'undefined') {
    singleton = new Translator();
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

export { configure, addTranslation, addTranslations, addLocaleData, t, tn };