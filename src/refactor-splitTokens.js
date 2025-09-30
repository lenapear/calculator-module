import { isOperator, isNumber, isDigit, isDecimal } from "./Helpers.js"

splitTokens(expression) {
  let expressionArray = expression.split("")
  let tokenizedExpression = []
  let buffer = []

  // loop through each token
  // if digit or decimal, put in buffer
  // when there's an operator, flush the buffer and add to the array and then add
  for (let char of expressionArray) {
    if (isDigit(char) || isDecimal(char)) {
      this.handleNumberChar(char, buffer)
    } else if (isOperator(char)) {
      this.handleOperator(char, buffer, tokenizedExpression)
    }
  }

  if (buffer.length > 0) {
    this.flushBuffer(buffer, tokenizedExpression)
  }

  return tokenizedExpression
}

handleNumberChar(char, buffer) {
  buffer.push(char)
}

handleOperator(char, buffer, tokenizedExpression) {
  if (buffer.length > 0) {
    this.flushBuffer(buffer, tokenizedExpression)
  }
  tokenizedExpression.push(char)
}

flushBuffer(buffer, tokenizedExpression) {
  tokenizedExpression.push(Number(buffer.join("")))
  buffer.length = 0
}
