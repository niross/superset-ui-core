function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import { Registry, makeSingleton, OverwritePolicy } from '../..'; // Ideally this would be <T extends QueryFormData>

var ChartBuildQueryRegistry = /*#__PURE__*/function (_Registry) {
  _inheritsLoose(ChartBuildQueryRegistry, _Registry);

  function ChartBuildQueryRegistry() {
    return _Registry.call(this, {
      name: 'ChartBuildQuery',
      overwritePolicy: OverwritePolicy.WARN
    }) || this;
  }

  return ChartBuildQueryRegistry;
}(Registry);

var getInstance = makeSingleton(ChartBuildQueryRegistry);
export default getInstance;