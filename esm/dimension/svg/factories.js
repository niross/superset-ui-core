import LazyFactory from './LazyFactory';
import createHiddenSvgNode from './createHiddenSvgNode';
import createTextNode from './createTextNode';
export var hiddenSvgFactory = new LazyFactory(createHiddenSvgNode);
export var textFactory = new LazyFactory(createTextNode);