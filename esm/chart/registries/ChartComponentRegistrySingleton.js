function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import { Registry, makeSingleton, OverwritePolicy } from '../..';

var ChartComponentRegistry = /*#__PURE__*/function (_Registry) {
  _inheritsLoose(ChartComponentRegistry, _Registry);

  function ChartComponentRegistry() {
    return _Registry.call(this, {
      name: 'ChartComponent',
      overwritePolicy: OverwritePolicy.WARN
    }) || this;
  }

  return ChartComponentRegistry;
}(Registry);

var getInstance = makeSingleton(ChartComponentRegistry);
export default getInstance;