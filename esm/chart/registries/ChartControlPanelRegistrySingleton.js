function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import { Registry, makeSingleton } from '../..';

var ChartControlPanelRegistry = /*#__PURE__*/function (_Registry) {
  _inheritsLoose(ChartControlPanelRegistry, _Registry);

  function ChartControlPanelRegistry() {
    return _Registry.call(this, {
      name: 'ChartControlPanel'
    }) || this;
  }

  return ChartControlPanelRegistry;
}(Registry);

var getInstance = makeSingleton(ChartControlPanelRegistry);
export default getInstance;