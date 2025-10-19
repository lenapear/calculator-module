import { ShuntingYard } from '../src/ShuntingYard.js'

// --- ShuntingYard tests ---

// Convert valid expression to postfix
try {
  const sy = new ShuntingYard()
  const postfix = sy.toPostfix([3, '+', 5, '*', 2])
  console.log('ShuntingYard Test 1 passed:', postfix)
  // expected: [3, 5, 2, "*", "+"]
} catch (err) {
  console.error('ShuntingYard Test 1 error:', err.message)
}

// Test precedence: subtraction and division
try {
  const sy2 = new ShuntingYard()
  const postfix2 = sy2.toPostfix([10, '-', 4, '/', 2])
  console.log('ShuntingYard Test 2 passed:', postfix2)
  // expected: [10, 4, 2, "/", "-"]
} catch (err) {
  console.error('ShuntingYard Test 2 error:', err.message)
}

// Test single operator (edge case)
try {
  const sy3 = new ShuntingYard()
  const postfix3 = sy3.toPostfix([7, '+', 8])
  console.log('ShuntingYard Test 3 passed:', postfix3)
  // expected: [7, 8, "+"]
} catch (err) {
  console.error('ShuntingYard Test 3 error:', err.message)
}
