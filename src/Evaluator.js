/**
 * Represents the Evaluator class
 */

import { isOperator, isNumber } from './Helpers.js'

/**
 *
 */
export class Evaluator {
  /**
   * Evaluates the postfixExpression
   *
   * @param {Array<string|number>} postfixExpression
   * @returns {number} the final evaluated result
   */
  evaluate (postfixExpression) {
    const stack = []
    for (const token of postfixExpression) {
      this.processToken(token, stack)
    }
    return this.getFinalResult(stack)
  } // evaluate

  /**
   * Processes the tokens and call the methods according to the type of token.
   *
   * @param {string | number} token
   * @param {Array<number>} stack
   */
  processToken (token, stack) {
    if (isNumber(token)) {
      this.processNumber(token, stack)
    } else if (isOperator(token)) {
      this.processOperator(token, stack)
    }
  }

  /**
   * Pushes the number token inside the stack.
   *
   * @param {number} number
   * @param {Array<number>} stack
   */
  processNumber (number, stack) {
    stack.push(number)
  }

  /**
   * Process the operator by calculating the last 2 operands in the stack.
   *
   * @param {string} operator
   * @param {Array<number>} stack
   */
  processOperator (operator, stack) {
    const rightOperand = stack.pop()
    const leftOperand = stack.pop()
    const calculationResult = this.calculate(leftOperand, rightOperand, operator)
    stack.push(calculationResult)
  }

  /**
   * Gets the final result.
   *
   * @param {Array<number>} stack
   * @returns {number} finalResult
   */
  getFinalResult (stack) {
    if (stack.length === 1) {
      const finalResult = stack[0]
      return finalResult
    }
  }

  /**
   * Calculates according to the operator.
   *
   * @param {number} leftOperand
   * @param {number} rightOperand
   * @param {string} operator
   * @returns {number}
   */
  calculate (leftOperand, rightOperand, operator) {
    switch (operator) {
      case '+':
        return this.addition(leftOperand, rightOperand)
      case '-':
        return this.subtraction(leftOperand, rightOperand)
      case '*':
        return this.multiplication(leftOperand, rightOperand)
      case '/':
        return this.division(leftOperand, rightOperand)
    }
  }

  /**
   *
   * @param a
   * @param b
   */
  addition (a, b) {
    return a + b
  }

  /**
   *
   * @param a
   * @param b
   */
  subtraction (a, b) {
    return a - b
  }

  /**
   *
   * @param a
   * @param b
   */
  multiplication (a, b) {
    return a * b
  }

  /**
   *
   * @param a
   * @param b
   */
  division (a, b) {
    return a / b
  }
}
