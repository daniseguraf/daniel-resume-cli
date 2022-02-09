#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';

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

// Content
const newLine = '\n';
const textSpace = '\b';

const mainTitle = `Daniel Segura Fang - Frontend Developer 🚀`;

const contactTitle = 'Contact Information';
const location = 'Lima, Peru (UTC-5)';
const email = 'hello@danielsegura.dev';
const linkedIn = 'https://www.linkedin.com/in/daniel-segura-fang/';
const github = 'https://github.com/daniseguraf';

const skillsTitle = 'Tech Skills';
const skillsLine1 = chalk.white(`React - Typescript - JavaScript - Node.js`);
const skillsLine2 = chalk.white(
  `Express - Storybook - Styled-components - Jest`
);
const skillsLine3 = chalk.white(`React Testing Library - HTML - CSS - SCSS`);

const aboutMeTitle = 'About Me';

const react = bold('React.js');
const typescript = bold('TypeScript');
const javascript = bold('JavaScript');
const node = bold('Node.js');
const next = bold('Next.js');

const meText1 = `Front-end developer with +5 years of experience with a keen eye for design and high UI/UX criteria. I have built highly scalable, modular, maintainable end-to-end solutions using ${react}, ${typescript}, ${javascript}, ${node}, ${next}, among others. My goal is to contribute to building world-class software solutions with highly performant dynamic teams and, at the same time, support and contribute with my experience in the growth of the product, the team, and the company.`;

const meText2 = `If you believe that I might fit with your interests, please feel free to contact me in LinkedIn or write me to ${email},`;

const meText3 = `Thanks 🙌!`;

// prints
const headlineModule = boxen(headline(mainTitle), headlineBox);
console.log(headlineModule);

console.log(heading(contactTitle));
console.log(text(location));
console.log(text(email));
console.log(link(linkedIn));
console.log(link(github));

console.log(newLine);

console.log(heading(skillsTitle));
console.log(text(skillsLine1));
console.log(text(skillsLine2));
console.log(text(skillsLine3));

console.log(newLine);

console.log(heading(aboutMeTitle));
console.log(text(meText1));
console.log(textSpace);

console.log(text(meText2));
console.log(textSpace);

console.log(text(meText3));
console.log(newLine);
