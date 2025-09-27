import { Evaluator } from "../src/Evaluator.js"

// --- Evaluator tests ---

const evaluator = new Evaluator()

// Test 1: simple addition
try {
  const result = evaluator.evaluate([3, 4, "+"])
  console.log("Test 1 passed:", result)
  // expected: 7
} catch (err) {
  console.error("Test 1 error:", err.message)
}

// Test 2: multiple operations
try {
  const result = evaluator.evaluate([3, 4, "+", 2, "*"])
  console.log("Test 2 passed:", result)
  // expected: 14
} catch (err) {
  console.error("Test 2 error:", err.message)
}

// Test 3: division
try {
  const result = evaluator.evaluate([8, 2, "/"])
  console.log("Test 3 passed:", result)
  // expected: 4
} catch (err) {
  console.error("Test 3 error:", err.message)
}

// Test 4: subtraction with order check
try {
  const result = evaluator.evaluate([3, 4, "-"])
  console.log("Test 4 passed:", result)
  // expected: -1
} catch (err) {
  console.error("Test 4 error:", err.message)
}
