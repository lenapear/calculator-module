# Test Report
## Summary
The calculator module was tested using manual unit tests written in JavaScript. Each class (Parser, ShuntingYard, Evaluator, Calculator) was tested separately in its own test file. The tests were run by executing each test file with Node.js via npm scripts.

The testing covered: <br>
- **Parsing and validation** of input expressions, including correct tokenization, handling of multi-digit and decimal numbers, and validation of invalid sequences.
- **Conversion** from infix notation to postfix (RPN) using the Shunting Yard algorithm.
- **Evaluation** of postfix expressions, ensuring correct operator precedence and arithmetic results.
- **Integration** via the Calculator class, which orchestrates the flow and manages history.

## How to run the tests
1. Install dependencies
```bash
npm install
```
2. Run a single test file

Parser:
```bash
npm run test:parser
```
ShuntingYard:
```bash
npm run test:shuntingyard
```
Evaluator:
```bash
npm run test:evaluator
```
Calculator:
```bash
npm run test:calculator
```

## Test results

### Parser Tests
| What was Tested | How | Expected result | Test result |
|-----------------|-----|-----------------|-------------|
| `Parser.validateAndParse` with valid expression | Input: `"3 + 5 * 2"` | `[3, "+", 5, "*", 2]` | ✅ |
| `Parser.validateAndParse` with invalid operator sequence | Input: `"3 + + 2"` | Error: `"Two operators in a row is not allowed"` | ✅ |
| `Parser.validateAndParse` with invalid starting operator | Input: `"+ 5 2"` | Error: `"Expression cannot start with an operator"` | ✅ |
| `Parser.splitTokens` handles basic tokenization | Input: `"3 + 4 * 2"` | `["3", "+", "4", "*", "2"]` | ✅ |
| `Parser.validateTokens` validates correct sequence | Input: `["3", "+", "4"]` | `[3, "+", 4]` | ✅ |
| `Parser.checkFirstToken` rejects invalid starting operator | Input: `["+", "3"]` | Error: `"Expression cannot start with an operator"` | ✅ |
| `Parser.checkLastToken` rejects invalid ending operator | Input: `["3", "+"]` | Error: `"Expression cannot end with an operator"` | ✅ |
| `Parser.checkSequence` rejects consecutive numbers | Input: `["3", "4"]` | Error: `"Two numbers in a row is not allowed"` | ✅ |
| `Parser.checkSequence` rejects consecutive operators | Input: `["+", "-"]` | Error: `"Two operators in a row is not allowed"` | ✅ |
| `Parser.validateAndParse` handles multi-digit numbers | Input: `"12 + 34"` | `[12, "+", 34]` | ✅ |
| `Parser.validateAndParse` handles decimals | Input: `"3.14 * 2"` | `[3.14, "*", 2]` | ✅ |
| `Parser.validateAndParse` handles no spaces | Input: `"10+20*3"` | `[10, "+", 20, "*", 3]` | ✅ |
| `Parser.validateAndParse` handles extra whitespace | Input: `"   7    -   2   "` | `[7, "-", 2]` | ✅ |

### ShuntingYard Tests
| What was Tested | How | Expected result | Test result |
|-----------------|-----|-----------------|-------------|
| `ShuntingYard.toPostfix` converts valid expression | Input: `[3, "+", 5, "*", 2]` | `[3, 5, 2, "*", "+"]` | ✅ |
| `ShuntingYard.toPostfix` handles precedence (subtraction & division) | Input: `[10, "-", 4, "/", 2]` | `[10, 4, 2, "/", "-"]` | ✅ |
| `ShuntingYard.toPostfix` with single operator (edge case) | Input: `[7, "+", 8]` | `[7, 8, "+"]` | ✅ |
| `ShuntingYard.getPrecedence` for `+` | Input: `"+"` | `1` | ✅ |
| `ShuntingYard.getPrecedence` for `*` | Input: `"*"` | `2` | ✅ |
| `ShuntingYard.hasPrecedence("*", "+")` | Input: `"*", "+"` | `true` | ✅ |
| `ShuntingYard.hasPrecedence("+", "*")` | Input: `"+" , "*"` | `false` | ✅ |

### Evaluator Tests
| What was Tested | How | Expected result | Test result |
|-----------------|-----|-----------------|-------------|
| `Evaluator.evaluate` with simple addition | Input: `[3, 4, "+"]` | `7` | ✅ |
| `Evaluator.evaluate` with multiple operations | Input: `[3, 4, "+", 2, "*"]` | `14` | ✅ |
| `Evaluator.evaluate` with division | Input: `[8, 2, "/"]` | `4` | ✅ |
| `Evaluator.evaluate` with subtraction (order check) | Input: `[3, 4, "-"]` | `-1` | ✅ |

### Calculator Tests
| What was Tested | How | Expected result | Test result |
|-----------------|-----|-----------------|-------------|
| `Calculator.calculate` with simple calculation | Input: `"3 + 5 * 2"` | `13` | ✅ |
| `Calculator.calculate` with division and subtraction | Input: `"10 - 6 / 2"` | `7` | ✅ |
| `Calculator.calculate` with decimals | Input: `"3.5 + 2.5"` | `6` | ✅ |
| `Calculator.calculate` with invalid expression | Input: `"3 + + 2"` | Error: `"Two operators in a row is not allowed"` | ✅ |
| `Calculator.getHistory` stores results | Calculated `"2 + 2"` and `"5 * 3"` | `{ "2 + 2": 4, "5 * 3": 15 }` | ✅ |
| `Calculator.removeFromHistory` deletes results | Added `"1 + 1"`, then removed it | `{}` | ✅ |
