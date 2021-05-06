const chalk = require('chalk');
const randomColor = require('randomcolor');

const hueInput = process.argv[2];
const brightness = process.argv[3];
const color = randomColor({
  luminosity: brightness,
  hue: hueInput,
});

const string = `###############################
###############################
###############################
#####                     #####
#####        ${color}      #####
#####                     #####
###############################
###############################
###############################`;

console.log(chalk.hex(color).bold(string));
