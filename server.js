 // NodeJS runs on server, not on a browser
 // Just by typing node in the terminal we can run the node inside the terminal, so the console is the terminal window not in the browser
 // We can also run a specific javascript file from the terminal by writing node + file name 
 // In NodeJS we have a global object that provide access to global variables and functions instead of a window object, but it's much smaller than the windows object
console.log('The current NodeJs version is ' + global.process.version); // Prints the NodeJs version
console.log('Buffer construtor: '+ global.Buffer) // Prints the buffer constructor

// CommonJS modules (Common Core Modules) instead of ES6 modules => instead of import --- from ---, we will use `require` statement 
const os = require('os');
console.log(os.type()); // Returns operating system's CPU architecture
console.log(os.version()) // Returns operating system's version
console.log(os.homedir()) // Returns home directory

console.log(__dirname); // Access current directory
console.log(__filename); // Access current directory + current file name

// 1st way of accessing math module
const math = require('./math');
console.log(math.add(11, 11));
console.log(math.subtract(84, 21));
console.log(math.multiply(56, 2));
console.log(math.divide(49, 7) + '\n');


// Second way of accessing math module (Destructuring)
const {add, subtract, multiply, divide} = require('./math');
console.log(add(3,4));
console.log(subtract(6, 5));
console.log(multiply(9, 4));
console.log(divide(6, 4) + '\n');

const path = require('path') // `path` module for working with files and directories
const directory = path.dirname(__filename);
console.log(directory); // Current directory

const fileName = path.basename(__filename)
console.log(fileName); // Only current file name

const fileExtension = path.extname(__filename);
console.log(fileExtension); // Current file externsion
















