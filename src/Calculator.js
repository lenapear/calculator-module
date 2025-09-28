/**
 * Represents the Calculator class
 * lena's notes: orchestrates the flow
 */

import { Evaluator } from "./Evaluator.js"
import { Parser } from "./Parser.js"
import { ShuntingYard} from "./ShuntingYard.js"


export class Calculator {
  constructor(expression) {
    this.expression = expression
    this.calculate(expression)
  }

  calculate(expression) {
    const validatedExpression = this.validateExpression(expression)
    const convertedExpression = this.convertExpression(validatedExpression)
    return this.evaluateExpression(convertedExpression)
  }

  /**
   * Validates the input expression
   * @param {*} expression 
   */
  validateExpression(expression) {
    const parser = new Parser()
    const infixExpression = parser.tokenize(expression)
    return infixExpression
  }

  convertExpression(infixExpression) {
    const shuntingYard = new ShuntingYard()
    const postfixExpression = shuntingYard.toPostfix(infixExpression)
    return postfixExpression
  }

  evaluateExpression(postfixExpression) {
    const evaluator = new Evaluator()
    const evaluatedExpression = evaluator.evaluate(postfixExpression)
    return evaluatedExpression
  }
}

