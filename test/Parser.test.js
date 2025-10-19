import { Parser } from '../src/Parser.js'

// --- Parser tests ---

// Test tokenize with a valid expression
try {
  const parser = new Parser('3 + 5 * 2')
  console.log('Test 1 passed:', parser.validateAndParse('3 + 5 * 2'))
  // expected: [3, "+", 5, "*", 2]
} catch (err) {
  console.error('Test 1 error:', err.message)
}

// Test tokenize with two operators in a row
try {
  const parser2 = new Parser('3 + + 2')
  console.log('Test 2 passed:', parser2.validateAndParse('3 + + 2'))
} catch (err) {
  console.error('Test 2 error:', err.message)
  // expected error: "Two operators in a row is not allowed"
}

// Test tokenize with invalid starting operator
try {
  const parser3 = new Parser('+ 5 2')
  console.log('Test 3 passed:', parser3.validateAndParse('+ 5 2'))
} catch (err) {
  console.error('Test 3 error:', err.message)
  // expected error: "Expression cannot start with an operator"
}
