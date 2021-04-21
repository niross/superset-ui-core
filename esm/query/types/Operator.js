/** List of operators that do not require another operand */
var UNARY_OPERATORS = ['IS NOT NULL', 'IS NULL'];
/** List of operators that require another operand that is a single value */

var BINARY_OPERATORS = ['==', '!=', '>', '<', '>=', '<=', 'LIKE', 'REGEX'];
/** List of operators that require another operand that is a set */

var SET_OPERATORS = ['IN', 'NOT IN']; //---------------------------------------------------
// Derived types
//---------------------------------------------------

/** An operator that does not require another operand */

//---------------------------------------------------
// Type guards
//---------------------------------------------------
var unaryOperatorSet = new Set(UNARY_OPERATORS);
export function isUnaryOperator(operator) {
  return unaryOperatorSet.has(operator);
}
var binaryOperatorSet = new Set(BINARY_OPERATORS);
export function isBinaryOperator(operator) {
  return binaryOperatorSet.has(operator);
}
var setOperatorSet = new Set(SET_OPERATORS);
export function isSetOperator(operator) {
  return setOperatorSet.has(operator);
}