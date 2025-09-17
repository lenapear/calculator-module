import {Parser} from "./Parser.js"

// represents the Calculator class
export class Calculator {
  constructor(expression) {
    return calculate(expression)
  }

  #calculate(expression) {
    const Parser = new Parser()
    // ....come back to after Parser is finished
  }

  // #chooseOperation(operation) {} - might not need, might be done inside Parser
}

