/**
 * Represents the Evaluator class
 * lena's note: evaluates and calculate the postfix expression
 */

import { isOperator, isNumber } from "./Helpers.js"

export class Evaluator {

  /**
   * Evaluates the postfixExpression
   *
   * @param {array} postfixExpression 
   * @returns {number} the final evaluated result
   */
  evaluate(postfixExpression) {
    let stack = []
    for (let token of postfixExpression) {
      this.processToken(token, stack)
    }
    return this.getFinalResult(stack)
  } // evaluate

  /**
   * Processes the tokens and call the methods according to the type of token.
   * 
   * @param {string | number} token 
   * @param {array} stack 
   */
  processToken(token, stack) {
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
   * @param {array} stack 
   */
  processNumber(number, stack) {
    stack.push(number)
  }

  /**
   * Process the operator by calculating the last 2 operands in the stack.
   *
   * @param {string} operator 
   * @param {array} stack 
   */
  processOperator(operator, stack) {
    let rightOperand = stack.pop()
      let leftOperand = stack.pop()
      let calculationResult = this.calculate(leftOperand, rightOperand, operator)
      stack.push(calculationResult)
  }

  /**
   * Gets the final result.
   *
   * @param {array} stack 
   * @returns {number} finalResult
   */
  getFinalResult(stack) {
    if (stack.length === 1) {
      let finalResult = stack[0]
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
  calculate(leftOperand, rightOperand, operator) {
    switch (operator) {
      case "+": 
        return this.addition(leftOperand, rightOperand)
      case "-":
        return this.subtraction(leftOperand, rightOperand)
      case "*":
        return this.multiplication(leftOperand, rightOperand)
      case "/":
        return this.division(leftOperand, rightOperand)
    } 
  }

  addition(a, b) {
    return a + b
  }

  subtraction(a, b) {
    return a - b
  }

  multiplication(a, b) {
    return a * b
  }

  division(a, b) {
    return a / b
  }
}