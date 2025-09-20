import { Parser } from "./Parser.js"

/**
 * Represents the Calculator class
 * lena's notes: orchestrates the flow
 */
export class Calculator {
  constructor(expression) {
    this.expression = expression // can this have the same name as in Parser.js?? double check
  }

  /**
   * Validates the input expression
   * @param {*} expression 
   */
  validateExpression(expression) {
    const Parser = new Parser()
    Parser.tokenize(expression)
  }
}

