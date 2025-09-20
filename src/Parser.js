// represents the Parser class for the string expression
export class Parser {
  validOperators = ["+", "-", "*", "/"]

  constructor(expression) {
    this.expression = expression
  }

  #tokenize(expression) {
    const tokens = expression.split(" ") // force space format for now
    let validTokens = []

    for (let i = 0; i < tokens.length; i++) {
      let currentToken = tokens[i]

      if (this.isNumber(currentToken)) {
        validTokens.push(Number(currentToken)) // convert it into a number first
      } else if (this.isOperator(currentToken)) {
        validTokens.push(currentToken)
      } else {
        throw new Error("Invalid expression input. Expression includes invalid operator or NaN!")
      }
    }

    let validExpression = [] // valid tokens and format
  }

  /**
   * Checks if a token is an operator
   * @param the token to be checked
   * @returns boolean
  */  
  isOperator(token) {
    return this.validOperators.includes(token)
  }

  /**
   * Checks if a token is a number
   * @param the token to be checked
   * @returns boolean
   */
  isNumber(token) {
    const convert = Number(token)
    if (Number.isNaN(convert) === false ) {
      return true
    } else return false
  }


  /**
   * Checks the first token of an expression
   */
  checkFirstToken() { // good understandability
    if (this.isOperator(validTokens[0])) {
      throw new Error("Expression cannot start with an operator")
    }
  }

  /**
   * Check the last token of an expression
   */
  checkLastToken() {
    if (this.isOperator(validTokens[validTokens.length - 1])) {
      throw new Error("Expression cannot end with an operator")
    }
  }

  /**
   * Check the sequence of the expression to not have two operators or numbers in a row
   */
  checkSequence() {
    for (let i = 1; i < validTokens.length; i++) {
      let previous = validTokens[i-1]
      let current = validTokens[i]

      if (this.isNumber(current) && this.isNumber(previous)) {
        throw new Error("Two numbers in a row is not allowed")
      }

      if (this.isOperator(current) && this.isOperator(previous)) {
        throw new Error("Two operators in a row is not allowed")
      }
    }
  }
}