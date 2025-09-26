/**
 * Represents the ShuntingYard class
 * lena's note: convert infix tokens to postfix (RPN)
 */

import { isOperator, isNumber } from "./Helpers.js"

export class ShuntingYard {
  /**
   * Converts the infixTokens to postfix in the RPN format.
   * 
   * @param {array} infixTokens 
   * @returns {array} outputQueue
   */
  toPostfix(infixTokens) {
    let operatorStack = []
    let outputQueue = []

    for (let i = 0; i < infixTokens.length; i++) {
      let current = infixTokens[i]

      if (isNumber(current)) {
        this.handleNumber(current, outputQueue)
      } else if (isOperator(current)) {
          while (operatorStack.length > 0 && this.hasPrecedence(operatorStack[operatorStack.length -1], current)){
            this.handleOperator(outputQueue, operatorStack)
          }
          operatorStack.push(current)
        }
    }

    this.flushStack(operatorStack, outputQueue)
    return outputQueue
  }

  /**
   * Handles a number token by adding it to the output queue.
   *
   * @param {number} number - The number token.
   * @param {Array} outputQueue - The output queue being built.
   */
  handleNumber(number, outputQueue) {
    outputQueue.push(number)
  }

  /**
   * Handles the top operator in the operatorStack by adding it to outputQueue.
   * @param {array} outputQueue 
   * @param {array} operatorStack 
   */
  handleOperator(outputQueue, operatorStack) {
    outputQueue.push(operatorStack.pop())
  }

  /**
   * Empties all remaining operators from the stack into the output queue.
   *
   * @param {Array} operatorStack
   * @param {Array} outputQueue
   */
  flushStack(operatorStack, outputQueue) {
    while (operatorStack.length > 0) {
      let currentOp = operatorStack.pop()
      outputQueue.push(currentOp)
    }
  }

  /**
   * Compares the precedence of two operators.
   *
   * @param {string} op1 - The operator on top of the operatorStack.
   * @param {string} op2 - The current operator being evaluated.
   * @returns {boolean}
   */
  hasPrecedence(op1, op2) {
    return this.getPrecedence(op1) >= this.getPrecedence(op2)
  }

  /**
   * Checks if an operator has lower or higher precedence according to PEMDAS.
   *
   * @param {string} operator - The operator
   * @returns {number} - Precedence level (2 = high, 1 = low).
   * @throws {error} If the operator is unknown
   */
  getPrecedence(operator) {
    if (["*", "/"].includes(operator)) {
      return 2
    } else if (["+", "-"].includes(operator)) {
      return 1
    } else throw new Error(`Unknown operator: ${operator}`)
  }
}
