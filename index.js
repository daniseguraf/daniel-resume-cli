#!/usr/bin/env node
import boxen from 'boxen';
import chalk from 'chalk';

import init from './utils/init.js';
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
import cli from './utils/cli.js';
import debug from './utils/debug.js';

(function () {
  init();
  cli.input.includes('help') && cli.showHelp(0);

  const log = console.log;

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
  debug(cli.flags.debug);

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
