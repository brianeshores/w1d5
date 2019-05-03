var chalk = require("chalk");

var message = chalk.green.bgBlue.bold("Hello ") + chalk.blue.bgRed.bold("World");

console.log(message);