import getBBoxCeil from './svg/getBBoxCeil';
import { hiddenSvgFactory, textFactory } from './svg/factories';
import updateTextNode from './svg/updateTextNode';
/**
 * get dimensions of multiple texts with same style
 * @param input
 * @param defaultDimension
 */

export default function getMultipleTextDimensions(input, defaultDimension) {
  var texts = input.texts,
      className = input.className,
      style = input.style,
      container = input.container;
  var cache = new Map(); // for empty string

  cache.set('', {
    height: 0,
    width: 0
  });
  var textNode;
  var svgNode;
  var dimensions = texts.map(function (text) {
    // Check if this string has been computed already
    if (cache.has(text)) {
      return cache.get(text);
    } // Lazy creation of text and svg nodes


    if (!textNode) {
      svgNode = hiddenSvgFactory.createInContainer(container);
      textNode = textFactory.createInContainer(svgNode);
    } // Update text and get dimension


    updateTextNode(textNode, {
      className: className,
      style: style,
      text: text
    });
    var dimension = getBBoxCeil(textNode, defaultDimension); // Store result to cache

    cache.set(text, dimension);
    return dimension;
  }); // Remove svg node, if any

  if (svgNode && textNode) {
    // The nodes are added to the DOM briefly only to make getBBox works.
    // (If not added to DOM getBBox will always return 0x0.)
    // After that the svg nodes are not needed.
    // We delay its removal in case there are subsequent calls to this function
    // that can reuse the svg nodes.
    // Experiments have shown that reusing existing nodes
    // instead of deleting and adding new ones can save lot of time.
    setTimeout(function () {
      textFactory.removeFromContainer(svgNode);
      hiddenSvgFactory.removeFromContainer(container);
    }, 500);
  }

  return dimensions;
}