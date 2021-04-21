function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import { Registry, makeSingleton, OverwritePolicy } from '../..';

var ChartTransformPropsRegistry = /*#__PURE__*/function (_Registry) {
  _inheritsLoose(ChartTransformPropsRegistry, _Registry);

  function ChartTransformPropsRegistry() {
    return _Registry.call(this, {
      name: 'ChartTransformProps',
      overwritePolicy: OverwritePolicy.WARN
    }) || this;
  }

  return ChartTransformPropsRegistry;
}(Registry);

var getInstance = makeSingleton(ChartTransformPropsRegistry);
export default getInstance;