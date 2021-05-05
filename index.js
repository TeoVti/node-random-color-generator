const chalk = require('chalk');
const randomColor = require('randomcolor');

const color = randomColor();
const str = `
#############################
#############################
#############################
#####                   #####
#####     ${color}       #####
#####                   #####
#############################
#############################
#############################`;

if (process.argv[3] && process.argv[3] === 'dark') {
  console.log(chalk.keyword(process.argv[2]).dim(str));
} else if (process.argv[3] && process.argv[3] === 'light') {
  console.log(chalk.keyword(process.argv[2]).bold(str));
} else if (!process.argv[2]) {
  console.log(chalk.hex(color)(str));
} else {
  console.log(chalk.keyword(process.argv[2])(str));
}
