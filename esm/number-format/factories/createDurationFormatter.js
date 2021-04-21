function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import prettyMsFormatter from 'pretty-ms';
import NumberFormatter from '../NumberFormatter';
export default function createDurationFormatter(config) {
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

  return new NumberFormatter({
    description: description,
    formatFunc: function formatFunc(value) {
      return prettyMsFormatter(value * multiplier, prettyMsOptions);
    },
    id: id != null ? id : 'duration_format',
    label: label != null ? label : "Duration formatter"
  });
}