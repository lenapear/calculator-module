/**
 * Represents the Calculator class
 * Note: Orchestrates the flow
 */

import { Evaluator } from "./Evaluator.js"
import { History } from "./History.js"
import { Parser } from "./Parser.js"
import { ShuntingYard} from "./ShuntingYard.js"


export class Calculator {

  constructor() {
    this.history = new History()
  }

  calculate(expression) {
    const validatedExpression = this.validateExpression(expression)
    const convertedExpression = this.convertExpression(validatedExpression)
    const result = this.evaluateExpression(convertedExpression)

    this.updateCalcHistory(expression, result)
    return result
  }

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

  addToHistory(expression, result ) {
    this.history.add(expression, result)
  }

  removeFromHistory(expression) {
    this.history.remove(expression)
  }

  getHistory() {
    return this.history.list()
  }
}

