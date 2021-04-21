function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

export default function createTime(mode, year, month, date, hours, minutes, seconds, milliseconds) {
  if (month === void 0) {
    month = 0;
  }

  if (date === void 0) {
    date = 1;
  }

  if (hours === void 0) {
    hours = 0;
  }

  if (minutes === void 0) {
    minutes = 0;
  }

  if (seconds === void 0) {
    seconds = 0;
  }

  if (milliseconds === void 0) {
    milliseconds = 0;
  }

  var args = [year, month, date, hours, minutes, seconds, milliseconds];
  return mode === 'local' ? _construct(Date, args) : new Date(Date.UTC.apply(Date, args));
}