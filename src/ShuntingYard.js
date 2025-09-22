/**
 * Represents the ShuntingYard class
 * lena's note: convert infix tokens to postfix (RPN)
 */

import { isOperator, isNumber } from "./Parser.js"

export class ShuntingYard {
  constructor(infixTokens) {}

  RPNConverter(infixTokens) {
    let stack = []
    let queue = []
    let current = infixTokens[i]

    for (let i = 0; i < infixTokens.length; i++) {
      if (isNumber(current)) {
        queue.push(current)
      } else if (isOperator(current)) {
        // if the current operator has a precedence
        }
    } // for loop bracket
  }

} // class bracket