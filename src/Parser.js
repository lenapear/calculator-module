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
    for (let i = 0; i < tokens.length; i++) {
      let numberedToken = Number(tokens[i])
      if (!Number.isNaN(numberedToken)) {
        validTokens.push(tokens[i])
      } else if (this.validOperators.includes(tokens[i])) {
        validTokens.push(tokens[i])
      } else {
        throw new Error("Invalid expression input. Invalid operator or includes NaN!")
      }
    }

    let validExpression = [] // valid tokens and format

    // validate format: invalid if two numbers or operators come in a row
    // 1. must start and end with a number
    // 2. if current token is a number the previous has to be an operator and vice versa
  }

  /**
   * Checks if a token is an operator
   * 
  */  
  isOperator(token) {
    return this.validOperators.includes(token)
  }

  /**
   * Checks if a token is a number
   * @param 
   * @returns 
   */
  isNumber(token) {
    const convert = Number(token)
    if (Number.isNaN(convert) === false ) {
      return false
    } else return true
  }

}