import meow from 'meow';
import chalk from 'chalk';

const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;

const helpText = `
  Usage
    ${green(`npx daniel-resume`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}

  Options
    ${yellow(`--contact`)}        Print contact info
    ${yellow(`--no-contact`)}     Don't print contact info
    ${yellow(`--skills`)}         Print skills info
    ${yellow(`--no-skills`)}      Don't print skills info
    ${yellow(`-d`)}, ${yellow(`--debug`)}      Print debug information
    ${yellow(`-v`)}, ${yellow(`--version`)}    Print CLI version

  Commands
    ${cyan(`help`)}             Print CLI help information

  Examples
    ${green('npx daniel-resume')} ${yellow(`--no-contact`)}
`;

const options = {
  importMeta: import.meta,
  flags: {
    contact: { type: 'boolean', default: true },
    skills: { type: 'boolean', default: true },
    debug: { type: 'boolean', default: false, alias: 'd' },
    version: { type: 'boolean', default: false, alias: 'v' },
  },
};

export default meow(helpText, options);
