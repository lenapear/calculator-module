// helper functions

/**
 * Checks if a token is an operator.
 * @param {string} token
 * @returns {boolean}
 */
export function isOperator(token) {
  return ["+", "-", "*", "/"].includes(token)
}

/**
 * Checks if a token is a number or not.
 *
 * @param {number|string} token - The token to be checked.
 * @returns {boolean} true if the token is a number, false if not.
 */
export function isNumber(token) {
  const convert = Number(token)
  if (Number.isNaN(convert) === false ) {
    return true
  } else return false
}

/**
 * Checks if a char is a digit.
 * 
 * @param {char} char 
 * @returns {boolean}
 */
export function isDigit(char) {
  return /\d/.test(char)
}

/**
 * Checks if a char is a decimal, supports both a period or decimal.
 * 
 * @param {char} char 
 * @returns {boolean}
 */
export function isDecimal(char) {
  return char === "," || char === "."
}