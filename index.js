#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';

// Styles
const headline = chalk.white.bold;
const headlineBox = {
  padding: 1.5,
  margin: { top: 1, bottom: 1 },
  borderStyle: 'double',
  borderColor: 'cyan',
};

const heading = chalk.bold.cyan;
const text = chalk.white;
const link = chalk.yellow.underline;

// Content
const newLine = '\n';

const mainTitle = `Daniel Segura Fang - Frontend Developer 🚀`;

const contactTitle = 'Contact Information';
const location = 'Lima, Peru (UTC-5)';
const email = 'hello@danielsegura.dev';
const linkedIn = 'https://www.linkedin.com/in/daniel-segura-fang/';
const github = 'https://github.com/daniseguraf';

const skillsTitle = 'Tech Skills';
const skillsLine1 = chalk.white(
  `React / Typescript / JavaScript / Node.js / Express`
);
const skillsLine2 = chalk.white(
  `Storybook / Styled-components / Jest / React Testing Library / HTML / CSS / SCSS.`
);

const aboutMeTitle = 'About Me';

// prints
console.log(
  '--------------------------------------------------------------------------------'
);
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

console.log(newLine);
console.log(heading(aboutMeTitle));

// console.log(techStack);
// console.log(`Hi, I’m Daniel Segura ✌️, I'm a front-end developer with 5+ years of experience with keen eye for design and high UI/UX criteria. I’m currently working with React.js, JavaScript, TypeScript, Next.js, Node, Storybook and I have knowledge of UI design concepts and principles 🚀 . I consider myself as a continuous-learning person, interested in new technologies and I enjoy work with designers 😄 . I have a Visual Arts degree 🧑‍🎨 from the Barcelona University and I fallen in love with programming ❤️ when I was studying there.

// I’m looking for challenging projects that allow me to improve my professional skills and, at the same time, support and contribute with my experience in the growth of the team, the project and company 💪 .

// If you believe that I might fit with your interests, please feel free to send me a message or write me to hello@danielsegura.dev

// Thanks! 🙌`);
