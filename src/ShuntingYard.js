/**
 * Represents the ShuntingYard class
 * lena's note: convert infix tokens to postfix (RPN)
 */

import { isOperator, isNumber } from "./Parser.js"

export class ShuntingYard {
  constructor(infixTokens) {
    this.postfixTokens = this.RPNConverter(infixTokens)
  }

  RPNConverter(infixTokens) {
    let operatorStack = []
    let outputQueue = []

    for (let i = 0; i < infixTokens.length; i++) {
      let current = infixTokens[i]

      if (isNumber(current)) {
        outputQueue.push(current)
      } else if (isOperator(current)) {
          let prevOperator = operatorStack[operatorStack.length -1]

          while (operatorStack.length > 0 && this.hasPrecedence(prevOperator, current)){
            outputQueue.push(prevOperator) 
            operatorStack.pop()
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
   * Checks if the given operator has precedence over others.
   *
   * @param {string} op1 -
   * @param {string} op2 -
   * @returns boolean
   */
  hasPrecedence(op1, op2) {
    return (op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-")

  }

} // class bracket