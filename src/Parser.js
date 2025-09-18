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
      let numberisedToken = Number(tokens[i])
      if (!Number.isNaN(numberisedToken)) {
        validTokens.push(tokens[i])
      } else if (this.validOperators.includes(tokens[i])) {
        validTokens.push(tokens[i])
      } else {
        throw new Error("Invalid expression input. Invalid operator or includes NaN!")
      }
    }
    // check if the format is correct: invalid if two numbers or operators come in a row
  }

}