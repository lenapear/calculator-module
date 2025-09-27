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
      let current = postfixExpression[i]

      if (isNumber(current)) {
        stack.push(current)
      } else if (isOperator(current)) {
        let rightOperand = stack.pop()
        let leftOperand = stack.pop()
        let result = this.calculate(leftOperand, rightOperand, current)
        stack.push(result)
      }    
    } // for-loop
    
    if (stack.length === 1) {
      let result = stack[0]
      return result
    }
  } // evaluate

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
} // class