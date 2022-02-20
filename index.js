#!/usr/bin/env node
import meow from 'meow';
import boxen from 'boxen';
import init from './utils/init.js';
import chalk from 'chalk';

import {
  newLine,
  textSpace,
  mainTitle,
  contactTitle,
  location,
  email,
  linkedIn,
  github,
  skillsTitle,
  skillsLine1,
  skillsLine2,
  skillsLine3,
  aboutMeTitle,
  meText1,
  meText2,
  meText3,
} from './utils/data.js';

const helpText = `
  Usage
    npx daniel-resume [options]

  Options
    contact         Show contact info
    --no-contact    Don't show contact info
    skills          Show skills info
    --no-skills     Don't show skills info
`;

const options = {
  importMeta: import.meta,
  flags: {
    contact: { type: 'boolean', default: true },
    skills: { type: 'boolean', default: true },
  },
};

const cli = meow(helpText, options);

(function () {
  init();

  const log = console.log;

  log(`cli`, cli.flags);

  // Styles
  const headline = chalk.white.bold;
  const headlineBox = {
    padding: 1.5,
    margin: { top: 1, bottom: 1 },
    borderStyle: 'double',
    borderColor: 'magenta',
  };

  const heading = chalk.bold.cyan;
  const text = chalk.white;
  const link = chalk.yellow.underline;
  const bold = chalk.bold;

  // prints
  const headlineModule = boxen(headline(mainTitle), headlineBox);
  log(headlineModule);

  if (cli.flags.contact) {
    log(heading(contactTitle));
    log(text(location));
    log(text(email));
    log(link(linkedIn));
    log(link(github));

    log(newLine);
  }

  if (cli.flags.skills) {
    log(heading(skillsTitle));
    log(text(skillsLine1));
    log(text(skillsLine2));
    log(text(skillsLine3));

    log(newLine);
  }

  log(heading(aboutMeTitle));
  log(text(meText1));
  log(textSpace);

  log(text(meText2));
  log(textSpace);

  log(text(meText3));
  log(newLine);
})();
