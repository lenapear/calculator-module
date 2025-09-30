import { Parser } from "../src/Parser.js"

// --- Parser tests ---

// Test tokenize with a valid expression
try {
  const parser = new Parser("3 + 5 * 2")
  console.log("Test 1 passed:", parser.validateAndParse("3 + 5 * 2")) 
  // expected: [3, "+", 5, "*", 2]
} catch (err) {
  console.error("Test 1 error:", err.message)
}

// Test tokenize with two operators in a row
try {
  const parser2 = new Parser("3 + + 2")
  console.log("Test 2 passed:", parser2.validateAndParse("3 + + 2"))
} catch (err) {
  console.error("Test 2 error:", err.message)
  // expected error: "Two operators in a row is not allowed"
}

// Test tokenize with invalid starting operator
try {
  const parser3 = new Parser("+ 5 2")
  console.log("Test 3 passed:", parser3.validateAndParse("+ 5 2"))
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

// --- After refactoring splitTokens ---

// Test multi-digit numbers
try {
  const parser4 = new Parser("12 + 34")
  console.log("Test 4 passed:", parser4.validateAndParse("12 + 34"))
  // expected: [12, "+", 34]
} catch (err) {
  console.error("Test 4 error:", err.message)
}

// Test decimal numbers
try {
  const parser5 = new Parser("3.14 * 2")
  console.log("Test 5 passed:", parser5.validateAndParse("3.14 * 2"))
  // expected: [3.14, "*", 2]
} catch (err) {
  console.error("Test 5 error:", err.message)
}

// Test expression without spaces
try {
  const parser6 = new Parser("10+20*3")
  console.log("Test 6 passed:", parser6.validateAndParse("10+20*3"))
  // expected: [10, "+", 20, "*", 3]
} catch (err) {
  console.error("Test 6 error:", err.message)
}

// Test whitespace handling
try {
  const parser7 = new Parser("   7    -   2   ")
  console.log("Test 7 passed:", parser7.validateAndParse("   7    -   2   "))
  // expected: [7, "-", 2]
} catch (err) {
  console.error("Test 7 error:", err.message)
}

