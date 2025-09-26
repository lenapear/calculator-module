import { Parser } from "../src/Parser.js"

// --- Parser tests ---

// Test tokenize with a valid expression
try {
  const parser = new Parser("3 + 5 * 2")
  console.log("Test 1 passed:", parser.tokenize("3 + 5 * 2")) 
  // expected: [3, "+", 5, "*", 2]
} catch (err) {
  console.error("Test 1 error:", err.message)
}

// Test tokenize with two operators in a row
try {
  const parser2 = new Parser("3 + + 2")
  console.log("Test 2 passed:", parser2.tokenize("3 + + 2"))
} catch (err) {
  console.error("Test 2 error:", err.message)
  // expected error: "Two operators in a row is not allowed"
}

// Test tokenize with invalid starting operator
try {
  const parser3 = new Parser("+ 5 2")
  console.log("Test 3 passed:", parser3.tokenize("+ 5 2"))
} catch (err) {
  console.error("Test 3 error:", err.message)
  // expected error: "Expression cannot start with an operator"
}

// --- Parser helper method tests ---

const parserHelper = new Parser("1 + 1")

// splitTokens
console.log("splitTokens('3 + 4 * 2'):", parserHelper.splitTokens("3 + 4 * 2"))
// expected: ["3", "+", "4", "*", "2"]

// validateTokens
try {
  console.log("validateTokens(['3','+','4']):", parserHelper.validateTokens(["3", "+", "4"]))
  // expected: [3, "+", 4]
} catch (err) {
  console.error("validateTokens error:", err.message)
}

// checkFirstToken
try {
  parserHelper.checkFirstToken(["+", "3"])
} catch (err) {
  console.error("checkFirstToken error:", err.message)
  // expected: "Expression cannot start with an operator"
}

// checkLastToken
try {
  parserHelper.checkLastToken(["3", "+"])
} catch (err) {
  console.error("checkLastToken error:", err.message)
  // expected: "Expression cannot end with an operator"
}

// checkSequence
try {
  parserHelper.checkSequence(["3", "4"])
} catch (err) {
  console.error("checkSequence error:", err.message)
  // expected: "Two numbers in a row is not allowed"
}

try {
  parserHelper.checkSequence(["+", "-"])
} catch (err) {
  console.error("checkSequence error:", err.message)
  // expected: "Two operators in a row is not allowed"
}
