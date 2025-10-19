import { Calculator } from '../src/Calculator.js'

// --- Calculator tests ---

// Test 1: Simple calculation
try {
  const calculator = new Calculator()
  const result = calculator.calculate('3 + 5 * 2')
  console.log('Test 1 passed:', result)
  // expected: 13
} catch (err) {
  console.error('Test 1 error:', err.message)
}

// Test 2: Division and subtraction
try {
  const calculator = new Calculator()
  const result = calculator.calculate('10 - 6 / 2')
  console.log('Test 2 passed:', result)
  // expected: 7
} catch (err) {
  console.error('Test 2 error:', err.message)
}

// Test 3: Handle decimals
try {
  const calculator = new Calculator()
  const result = calculator.calculate('3.5 + 2.5')
  console.log('Test 3 passed:', result)
  // expected: 6
} catch (err) {
  console.error('Test 3 error:', err.message)
}

// Test 4: Invalid expression (should throw error)
try {
  const calculator = new Calculator()
  calculator.calculate('3 + + 2')
  console.error('Test 4 failed: expected error not thrown')
} catch (err) {
  console.log('Test 4 passed:', err.message)
  // expected error: "Two operators in a row is not allowed"
}

// Test 5: History should store results
try {
  const calculator = new Calculator()
  calculator.calculate('2 + 2')
  calculator.calculate('5 * 3')
  console.log('Test 5 passed:', calculator.getHistory())
  // expected: { "2 + 2": 4, "5 * 3": 15 }
} catch (err) {
  console.error('Test 5 error:', err.message)
}

// Test 6: Remove from history
try {
  const calculator = new Calculator()
  calculator.calculate('1 + 1')
  calculator.removeFromHistory('1 + 1')
  console.log('Test 6 passed:', calculator.getHistory())
  // expected: {}
} catch (err) {
  console.error('Test 6 error:', err.message)
}
