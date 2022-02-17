import chalk from 'chalk';
import symbol from 'log-symbols';

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

export default (requiredNodeVersion, options) => {
  const defaultOptions = { fail: true };
  const finalOptions = { ...defaultOptions, ...options };

  const fail = `
${symbol.error} ${chalk.red(`Node version issue!`)}

You are running Node version: ${chalk.red(currentNodeVersion)}
Required version of Node is: ${chalk.green(requiredNodeVersion)} or higher.

${symbol.info} Please update your version of Node.js to run this program.
${symbol.info} https://nodejs.org/en/download \n`;

  if (major < Math.abs(requiredNodeVersion)) {
    console.error(fail);
    finalOptions.fail && process.exit(1);

    return fail;
  }
};
