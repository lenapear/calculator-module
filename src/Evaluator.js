/**
 * Represents the Evaluator class
 * lena's note: evaluates and calculate the postfix expression
 */

import { isOperator, isNumber } from "./Helpers.js"

export class Evaluator {

  evaluate(postfixExpression) {
    let stack = []
    for (let token of postfixExpression) {
      this.processToken(token, stack)
    }
    return this.getFinalResult(stack)
  } // evaluate


  processToken(token, stack) {
    if (isNumber(token)) {
      this.processNumber(token, stack)
    } else if (isOperator(token)) {
      this.processOperator(token, stack)
    }
  }
  processNumber(number, stack) {
    stack.push(number)
  }

  processOperator(operator, stack) {
    let rightOperand = stack.pop()
      let leftOperand = stack.pop()
      let calculationResult = this.calculate(leftOperand, rightOperand, operator)
      stack.push(calculationResult)
  }

  getFinalResult(stack) {
    if (stack.length === 1) {
      let finalResult = stack[0]
      return finalResult
    }
  }

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