import { isOperator, isNumber, isDecimal } from "./Helpers.js"

splitTokens(expression) {
  let expressionArray = expression.split("")
  let tokenizedExpression = []
  let buffer = []

  // loop through each token
  // if digit or decimal, put in buffer
  // when there's an operator, flush the buffer and add to the array and then add
  for (let char of expressionArray) {
    if (isDigit(char) || isDecimal(char)) {
      buffer.push(char)
    } else if (isOperator(char)) {
      let result = this.flushArray(buffer)
      tokenizedExpression.push(result)
      tokenizedExpression.push(char)
      buffer = []
    }
  }

  if (buffer.length > 0) {
    this.tokenizedExpression.push(this.flushArray(buffer))
  }

  return tokenizedExpression
}

flushArray(buffer) {
  return buffer.join("")
}
