# Calculator Module

A simple calculator module implemented in JavaScript using the **Shunting Yard algorithm** for infix-to-postfix conversion and a stack-based evaluator.  
The module also includes input parsing, validation, and a calculation history feature.  

## Features
- Parse and validate arithmetic expressions
- Convert infix expressions to postfix (RPN) using Shunting Yard
- Evaluate postfix expressions
- Maintain a calculation history
- **Currently supports:** addition, subtraction, multiplication, division
- **Limitations:** parentheses `()` are not yet supported
- Designed with **Clean Code** principles for readability and testability 

## Installation
Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd <your-repo-name>
npm install
```

## Usage
At the moment, this module is not yet published on npm.  
To use it in your own project, simply copy the `src/` folder (or the specific class files you need) into your codebase and import them.

### Example with the Calculator class:

```js
import { Calculator } from "./src/Calculator.js"

const calc = new Calculator()
console.log(calc.calculate("3 + 5 * 2")) // → 13
## Project Structure
```

### Example with the Parser class:
```
import { Parser } from "./src/Parser.js"

const parser = new Parser()
console.log(parser.validateAndParse("12 * 5 - 3"))
// → [12, "*", 5, "-", 3]
```

## Testing
Tests are included for development and validation purposes.
You **do not need to run the tests** to use the module — they are for contributors and maintainers. <br>
Inside the docs/ folder, you will also find a **test report** that summarizes how the module was tested and how you can replicate the tests.
> **Note**: All methods are currently public for testing purposes. In a future release, helper methods will be made private to improve encapsulation. Users should only rely on the documented public API.
## Project Structure
```
.
├── src/
│   ├── Calculator.js
│   ├── Parser.js
│   ├── ShuntingYard.js
│   ├── Evaluator.js
│   ├── History.js
│   └── Helpers.js
├── test/
│   ├── Calculator.test.js
│   ├── Parser.test.js
│   ├── ShuntingYard.test.js
│   └── Evaluator.test.js
├── docs/
│   ├── developer.md
│   ├── reflection.md
│   └── testreport.md
└── README.md
```

## Limitations / Future work
* No parentheses support yet: Currently, the parser and shunting yard algorithm do not handle ( or ). This is planned for a future update by extending validation rules and precedence handling.

* Converters: In the future, the module will include converters for different input/output formats (e.g., converting between infix, postfix, and possibly prefix notation).

* Publish as an npm package for easier installation

## LICENSE
**This project is licensed under the terms of the MIT license. <br>
Feel free to use, modify, and contribute.**
