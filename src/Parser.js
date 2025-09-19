// represents the Parser class for the string expression
export class Parser {
  validOperators = ["+", "-", "*", "/"]

  constructor(expression) {
    this.expression = expression
  }

  #tokenize(expression) {
    const tokens = expression.split(" ") // force space format for now
    let validTokens = []

    // bad readability
    for (let i = 0; i < tokens.length - 1; i++) {
      let numberedToken = Number(tokens[i])
      if (!Number.isNaN(numberedToken)) {
        validTokens.push(tokens[i])
      } else if (this.validOperators.includes(tokens[i])) {
        validTokens.push(tokens[i])
      } else {
        throw new Error("Invalid expression input. Expression includes invalid operator or NaN!")
      }
    }

    let validExpression = [] // valid tokens and format

    // check first token
    if (this.isOperator(validTokens[0])) {
      throw new Error("Expression cannot start with an operator")
    }
    // check last token
    if (this.isOperator(validTokens[validTokens.length - 1])) {
      throw new Error("Expression cannot end with an operator")
    }

    // check sequence of tokens, starting at index 1
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
      return false
    } else return true
  }

}