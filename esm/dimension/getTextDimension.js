import updateTextNode from './svg/updateTextNode';
import getBBoxCeil from './svg/getBBoxCeil';
import { hiddenSvgFactory, textFactory } from './svg/factories';
export default function getTextDimension(input, defaultDimension) {
  var text = input.text,
      className = input.className,
      style = input.style,
      container = input.container; // Empty string

  if (text.length === 0) {
    return {
      height: 0,
      width: 0
    };
  }

  var svgNode = hiddenSvgFactory.createInContainer(container);
  var textNode = textFactory.createInContainer(svgNode);
  updateTextNode(textNode, {
    className: className,
    style: style,
    text: text
  });
  var dimension = getBBoxCeil(textNode, defaultDimension); // The nodes are added to the DOM briefly only to make getBBox works.
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
  return dimension;
}