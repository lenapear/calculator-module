// represents the Parser class for the string expression
export class Parser {
  validOperators = ["+", "-", "*", "/"]

  constructor(expression) {
    this.expression = expression
  }

  #tokenize(expression) {
    const expressionArray = expression.split("")
    let tokens = []
    // logic will come later
  }

  #validateExpression(expressionArray) {
    // check if tokens are not a number
    // check for invalid operators
    // check if the format is correct: invalid if two numbers or operators come in a row
  }

} // class bracket