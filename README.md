## Node.js Basics

This code demonstrates various concepts and features of Node.js, including:

### Global Objects and Functions

- `global.process.version`: Prints the current Node.js version.
- `global.Buffer`: Prints the Buffer constructor.

### Core Modules

- `os` module: Provides operating system-related utility methods and properties.
  - `os.type()`: Returns the operating system's CPU architecture.
  - `os.version()`: Returns the operating system's version.
  - `os.homedir()`: Returns the home directory of the current user.
- `__dirname`: Provides the current directory path.
- `__filename`: Provides the current file's path.

### Importing Modules

- `require('./math')`: Imports a local module named `math.js` from the same directory.
  - The `math` module exports functions for basic arithmetic operations (`add`, `subtract`, `multiply`, `divide`).
  - The module is imported in two ways:
    1. Assigning the entire module to a variable (`math`).
    2. Destructuring the required functions (`add`, `subtract`, `multiply`, `divide`).

### Path Module

- `path` module: Provides utilities for working with file and directory paths.
  - `path.dirname(__filename)`: Returns the directory path of the current script.
  - `path.basename(__filename)`: Returns the base name (file name) of the current script.
  - `path.extname(__filename)`: Returns the file extension of the current script.

### Usage

To run this code, you need to have Node.js installed on your machine. Open a terminal or command prompt, navigate to the directory containing the code files, and run the following command:

```
node <filename>
```
