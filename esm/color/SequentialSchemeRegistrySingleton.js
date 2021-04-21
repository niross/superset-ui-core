function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import makeSingleton from '../utils/makeSingleton';
import ColorSchemeRegistry from './ColorSchemeRegistry';
import schemes from './colorSchemes/sequential/d3';

var SequentialSchemeRegistry = /*#__PURE__*/function (_ColorSchemeRegistry) {
  _inheritsLoose(SequentialSchemeRegistry, _ColorSchemeRegistry);

  function SequentialSchemeRegistry() {
    var _this;

    _this = _ColorSchemeRegistry.call(this) || this;

    _this.registerValue('SUPERSET_DEFAULT', schemes[0]);

    return _this;
  }

  return SequentialSchemeRegistry;
}(ColorSchemeRegistry);

var getInstance = makeSingleton(SequentialSchemeRegistry);
export default getInstance;