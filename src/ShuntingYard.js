/**
 * Represents the ShuntingYard class
 * lena's note: convert infix tokens to postfix (RPN)
 */

import { isOperator, isNumber } from "./Parser.js"

export class ShuntingYard {
  constructor(infixTokens) {
    this.postfixTokens = this.rpnConverter(infixTokens)
  }

  toPostfix(infixTokens) {
    let operatorStack = []
    let outputQueue = []

    for (let i = 0; i < infixTokens.length; i++) {
      let current = infixTokens[i]

      if (isNumber(current)) {
        outputQueue.push(current)
      } else if (isOperator(current)) {
          let prevOperator = operatorStack[operatorStack.length -1]

          while (operatorStack.length > 0 && this.hasPrecedence(prevOperator, current)){
            outputQueue.push(operatorStack.pop()) 
            prevOperator = operatorStack[operatorStack.length - 1]
          }
          operatorStack.push(current)
        }
    } // for-loop bracket

    // finished RPN
    while (operatorStack.length > 0) {
      let currentOp = operatorStack.pop()
      outputQueue.push(currentOp)
    }
    return outputQueue
  }

  /**
   * Compares the precedence of two operators.
   *
   * @param {string} op1 - the operator on top of the operatorStack.
   * @param {string} op2 - the current operator being evaluated.
   * @returns boolean
   */
  hasPrecedence(op1, op2) {
    return this.getPrecedence(op1) >= this.getPrecedence(op2)
  }

  /**
   * Checks if an operator has lower or higher precedence according to PEMDAS.
   *
   * @param {*} operator 
   * @returns 
   */
  getPrecedence(operator) {
    if (["*", "/"].includes(operator)) {
      return 2
    } else if (["+", "-"].includes(operator)) {
      return 1
    } else throw new Error(`Unknown operator: ${operator}`)
  }

} // class bracket