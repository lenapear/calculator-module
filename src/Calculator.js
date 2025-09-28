/**
 * Represents the Calculator class
 * lena's notes: orchestrates the flow
 */

import { Evaluator } from "./Evaluator.js"
import { Parser } from "./Parser.js"
import { ShuntingYard} from "./ShuntingYard.js"


export class Calculator {

  calculate(expression) {
    const validatedExpression = this.validateExpression(expression)
    const convertedExpression = this.convertExpression(validatedExpression)
    return this.evaluateExpression(convertedExpression)
  }

  /**
   * Validates the input expression
   * @param {*} expression 
   */
  parseExpression(expression) {
    const parser = new Parser()
    const infixTokens = parser.validateAndParse(expression)
    return infixTokens
  }

  convertExpression(infixExpression) {
    const shuntingYard = new ShuntingYard()
    const postfixTokens = shuntingYard.toPostfix(infixExpression)
    return postfixTokens
  }

  evaluateExpression(postfixExpression) {
    const evaluator = new Evaluator()
    const result = evaluator.evaluate(postfixExpression)
    return result
  }
}

