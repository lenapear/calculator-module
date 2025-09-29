/**
 * Represents the History class
 * lena's note: handles the calculation history
 */
export class History {
  constructor() {
    this.calculationHistory = {}
  }

  add(expression, result) {
    this.calculationHistory.expression = result
  }

  get(expression) {
    return this.calculationHistory[expression]
  }

  remove(expression) {
    delete this.calculationHistory[expression]
  }

  list() {
    return this.calculationHistory
  }
}
