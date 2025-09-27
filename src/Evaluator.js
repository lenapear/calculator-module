/**
 * Represents the Evaluator class
 * lena's note: evaluates and calculate the postfix expression
 */

import { isOperator, isNumber } from "./Helpers.js"

export class Evaluator {

  evaluate(postfixExpression) {
    // loop through each token
    // if number, push to stack
    // if operator, pop the last 2 tokens and put it back in the stack
    // continue until stack.length is 1
    let stack = []

    for (let i = 0; i < postfixExpression.length; i++) {
      current = postfixExpression[i]

      while (stack.length > 1) {
        if (isNumber(current)) {
          stack.push(current)
        } else if (isOperator(current)) {
          let nr1 = stack.pop()
          let nr2 = stack.pop()
          calculate(nr1, nr2, current)
        }
      } // while
    } // for-loop
    
    if (stack.length === 1) {
      result = stack[0]
    }
    return result
  } // evaluate

  calculate(nr1, nr2, operator) {
    switch (operator) {
      case "+": 
        return this.addition(nr1, nr2)
      case "-":
        return this.subtraction(nr1, nr2)
      case "*":
        return this.multiplication(nr1, nr2)
      case "/":
        return this.division(nr1, nr2)
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
} // class