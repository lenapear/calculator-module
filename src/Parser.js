/**
 * Represents the Parser class
 * lena's note: only validates
 */
export class Parser {
  validOperators = ["+", "-", "*", "/"]

  constructor(expression) {
    this.expression = expression
    this.tokenize(expression)
  }

  /**
   * Tokenize an expression and validates it.
   *
   * @param {string} expression - The user's expression input to be tokenized.
   * @returns {array} validTokens - The array of validated tokens.
   */
  tokenize(expression) {
    this.validTokens = []
    const tokenizedExpression = this.splitTokens(expression)
    this.validTokens = this.validateTokens(tokenizedExpression)

    // validate Format: / make method called validateFormat? 
    this.checkFirstToken()
    this.checkLastToken()
    this.checkSequence()

    return this.validTokens
  }

  /**
   * Splits the expression into an array of tokens.
   * 
   * @param {string} expression - The user's expression input to be tokenized.
   */
  splitTokens(expression) {
    // force space format for now
    return expression.split(" ").filter(token => token !== "")
  }

  /**
   * Validate the tokens to only allow numbers and valid operators.
   *
   * @param {array} tokens - The tokens to be validated.
   */
  validateTokens(tokens) {
    for (let i = 0; i < tokens.length; i++) {
      let currentToken = tokens[i]

      if (this.isNumber(currentToken)) {
        this.validTokens.push(Number(currentToken)) // convert it into a number first
      } else if (this.isOperator(currentToken)) {
        this.validTokens.push(currentToken)
      } else {
        throw new Error("Invalid expression input. Expression includes invalid operator or NaN!")
      }
    }
    return this.validTokens
  }

  /**
   * Checks if a token is an operator or not.
   *
   * @param {number|string} token - The token to be checked.
   * @returns {boolean} true if the token is an operator, false if not.
  */  
  isOperator(token) {
    return this.validOperators.includes(token)
  }

  /**
   * Checks if a token is a number or not.
   *
   * @param {number|string} token - The token to be checked.
   * @returns {boolean} true if the token is a number, false if not.
   */
  isNumber(token) {
    const convert = Number(token)
    if (Number.isNaN(convert) === false ) {
      return true
    } else return false
  }


  /**
   * Checks if the first token is an operator.
   * 
   * @throws {error} if it is an operator.
   */
  checkFirstToken() {
    if (this.isOperator(this.validTokens[0])) {
      throw new Error("Expression cannot start with an operator")
    }
  }

  /**
   * Checks if the last token is an operator.
   * 
   * @throws {error} if it is an operator.
   */
  checkLastToken() {
    if (this.isOperator(this.validTokens[this.validTokens.length - 1])) {
      throw new Error("Expression cannot end with an operator")
    }
  }

  /**
   * Check the sequence of the expression to not have two operators or numbers in a row.
   * 
   * @throws {error} if there are two numbers in a row.
   * @throws {error}if there are two operators in a row.
   */
  checkSequence() {
    for (let i = 1; i < this.validTokens.length; i++) {
      let previous = this.validTokens[i-1]
      let current = this.validTokens[i]

      if (this.isNumber(current) && this.isNumber(previous)) {
        throw new Error("Two numbers in a row is not allowed")
      }

      if (this.isOperator(current) && this.isOperator(previous)) {
        throw new Error("Two operators in a row is not allowed")
      }
    }
  }
}