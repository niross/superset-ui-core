import { format as d3Format } from 'd3-format';
import NumberFormatter from '../NumberFormatter';
export default function createSiAtMostNDigitFormatter(config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      description = _config.description,
      _config$n = _config.n,
      n = _config$n === void 0 ? 3 : _config$n,
      id = _config.id,
      label = _config.label;
  var siFormatter = d3Format("." + n + "s");
  return new NumberFormatter({
    description: description,
    formatFunc: function formatFunc(value) {
      var si = siFormatter(value);
      /* Removing trailing `.00` if any */

      return si.slice(-1) < 'A' ? parseFloat(si).toString() : si;
    },
    id: id != null ? id : "si_at_most_" + n + "_digit",
    label: label != null ? label : "SI with at most " + n + " significant digits"
  });
}