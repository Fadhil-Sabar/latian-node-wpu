const validator = require('validator');
const chalk = require('chalk');
// console.log(validator.isEmail('fadiru@gmail.com'));
// console.log(validator.isMobilePhone('0812152125', 'id-ID'));
// console.log(validator.isNumeric('0812152125'));

// console.log(chalk.blue.bgRed('Hello world'));
const pesan = chalk`{bgYellow.black Test} awok awoka {bgBlue.black oawkoawkkaw} oakwoakw aowkoawk`;
console.log(chalk.yellow(pesan));