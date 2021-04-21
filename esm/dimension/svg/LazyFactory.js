var LazyFactory = /*#__PURE__*/function () {
  function LazyFactory(factoryFn) {
    this.activeNodes = new Map();
    this.factoryFn = void 0;
    this.factoryFn = factoryFn;
  }

  var _proto = LazyFactory.prototype;

  _proto.createInContainer = function createInContainer(container) {
    if (container === void 0) {
      container = document.body;
    }

    if (this.activeNodes.has(container)) {
      var entry = this.activeNodes.get(container);
      entry.counter += 1;
      return entry.node;
    }

    var node = this.factoryFn();
    container.append(node);
    this.activeNodes.set(container, {
      counter: 1,
      node: node
    });
    return node;
  };

  _proto.removeFromContainer = function removeFromContainer(container) {
    if (container === void 0) {
      container = document.body;
    }

    if (this.activeNodes.has(container)) {
      var entry = this.activeNodes.get(container);
      entry.counter -= 1;

      if (entry.counter === 0) {
        container.removeChild(entry.node);
        this.activeNodes.delete(container);
      }
    }
  };

  return LazyFactory;
}();

export { LazyFactory as default };