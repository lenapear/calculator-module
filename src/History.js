/**
 * Represents the History class
 */
export class History {
  /**
   *
   */
  constructor () {
    this.calculationHistory = {}
  }

  /**
   *
   * @param expression
   * @param result
   */
  add (expression, result) {
    this.calculationHistory[expression] = result
  }

  /**
   *
   * @param expression
   */
  get (expression) {
    return this.calculationHistory[expression]
  }

  /**
   *
   * @param expression
   */
  remove (expression) {
    delete this.calculationHistory[expression]
  }

  /**
   *
   */
  list () {
    return this.calculationHistory
  }
}
