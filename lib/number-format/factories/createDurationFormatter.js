"use strict";

exports.__esModule = true;
exports.default = createDurationFormatter;

var _prettyMs = _interopRequireDefault(require("pretty-ms"));

var _NumberFormatter = _interopRequireDefault(require("../NumberFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function createDurationFormatter(config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      description = _config.description,
      id = _config.id,
      label = _config.label,
      _config$multiplier = _config.multiplier,
      multiplier = _config$multiplier === void 0 ? 1 : _config$multiplier,
      prettyMsOptions = _objectWithoutPropertiesLoose(_config, ["description", "id", "label", "multiplier"]);

  return new _NumberFormatter.default({
    description: description,
    formatFunc: function formatFunc(value) {
      return (0, _prettyMs.default)(value * multiplier, prettyMsOptions);
    },
    id: id != null ? id : 'duration_format',
    label: label != null ? label : "Duration formatter"
  });
}