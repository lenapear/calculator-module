/**
 * Represents the Parser class
 * lena's note: only validates and Parse the expression
 */

import { isOperator, isNumber } from "./Helpers.js"

export class Parser {

  /**
   * Validate and parse and expression into tokens.
   *
   * @param {string} expression - The user's expression input to be tokenized.
   * @returns {array} validTokens - The array of validated tokens.
   */
  validateAndParse(expression) { // is parseExpression better??
    const tokenizedExpression = this.splitTokens(expression)
    const validTokens = this.validateTokens(tokenizedExpression)
    this.validateFormat(validTokens)

    return validTokens
  }

  /**
   * Splits the expression into an array of tokens.
   * 
   * @param {string} expression - The user's expression input to be tokenized.
   */
  splitTokens(expression) {
    // force space format for now
    return expression.split(" ").filter(token => token !== "")
  }

  /**
   * Checks if the first token is an operator.
   * 
   * @throws {error} if it is an operator.
   */
  checkFirstToken(tokens) {
    if (isOperator(tokens[0])) {
      throw new Error("Expression cannot start with an operator")
    }
  }

  /**
   * Checks if the last token is an operator.
   * 
   * @throws {error} if it is an operator.
   */
  checkLastToken(tokens) {
    if (isOperator(tokens[tokens.length - 1])) {
      throw new Error("Expression cannot end with an operator")
    }
  }

  /**
   * Check the sequence of the expression to not have two operators or numbers in a row.
   * 
   * @throws {error} if there are two numbers in a row.
   * @throws {error}if there are two operators in a row.
   */
  checkSequence(tokens) {
    for (let i = 1; i < tokens.length; i++) {
      let previous = tokens[i-1]
      let current = tokens[i]

      if (isNumber(current) && isNumber(previous)) {
        throw new Error("Two numbers in a row is not allowed.")
      }

      if (isOperator(current) && isOperator(previous)) {
        throw new Error("Two operators in a row is not allowed.")
      }
    }
  }

  /**
   * Validate the tokens to only allow numbers and valid operators.
   *
   * @param {array} tokens - The tokens to be validated.
   */
  validateTokens(tokens) {
    const validTokens = []
    for (let i = 0; i < tokens.length; i++) {
      let currentToken = tokens[i]

      if (isNumber(currentToken)) {
        validTokens.push(Number(currentToken)) // convert it into a number first
      } else if (isOperator(currentToken)) {
        validTokens.push(currentToken)
      } else {
        throw new Error("Invalid token in expression.")
      }
    }
    return validTokens
  }

  /**
   * Validates the format of the tokens by checking the first and last token and the sequence.
   * 
   * @param {array} tokens
   */
  validateFormat(tokens) {
    this.checkFirstToken(tokens)
    this.checkLastToken(tokens)
    this.checkSequence(tokens)
  }
}