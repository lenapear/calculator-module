# Developer Guide

This document is intended for developers who want to contribute to or maintain the calculator module.

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
2. **Install dependencies**
  This project does not use heavy dependencies, but make sure you have Node.js installed.
    ```bash
    npm install
    ```

## Project Structure
  ```
  src/
    ├── Calculator.js     # Main orchestrator
    ├── Evaluator.js      # Evaluates postfix expressions
    ├── History.js        # Stores calculation history
    ├── Parser.js         # Parses and validates input
    ├── ShuntingYard.js   # Converts infix → postfix
    └── Helpers.js        # Shared helper methods
  test/
    ├── Calculator.test.js
    ├── Evaluator.test.js
    ├── Parser.test.js
    └── ShuntingYard.test.js
  docs/
    └── testreport.md     # Manual test report
  ```

## Development Guidelines
* Code Style

  * Follow Clean Code
    principles where possible.

  * Use meaningful names for methods and variables.

  * Keep functions small and focused on one     responsibility.

  * Prefer helper functions when code is repeated or logic is unclear.

* Comments & JSDoc

  * Use JSDoc comments to document public methods and classes.

  * Avoid redundant comments — good names should reduce the need for over-explaining.

* Testing

  * Every new feature or bugfix should include a test.

  * Use the existing *.test.js files as examples.

  * Tests should log expected results and error cases clearly.

### running specific tests
```
npm run test:parser
npm run test:shuntingyard
npm run test:evaluator
npm run test:calculator
```

## Future development
- Add support for parentheses () in parsing and evaluation.

- Introduce more operators (exponentiation, modulo).

- Add converters (currency, fahrenheit/celsius, etc.).

- Prepare for npm publishing.

## Contribution
* Fork the repo and create a feature branch
* commit using clear messages:
```
git commit -m "feat(parser): add support for multi-digit numbers"
````
* Push and create a pull request.

### Public vs Private Methods

At the moment, all methods are public.  
This is intentional to make unit testing of helper functions easier during development.  

**In the future:**
- Only core API methods (e.g., `Calculator.calculate`, `Parser.validateAndParse`, `ShuntingYard.toPostfix`, `Evaluator.evaluate`, `History.add/list/remove`) will remain public.
- Internal helper methods (e.g., `flushBuffer`, `handleOperator`, `getPrecedence`) will be made private (using `#` or `_` convention).
- Tests will then focus only on the public API.



