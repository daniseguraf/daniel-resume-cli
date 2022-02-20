import meow from 'meow';

const helpText = `
  Usage
    npx daniel-resume [options]

  Options
    contact         Show contact info
    --no-contact    Don't show contact info
    skills          Show skills info
    --no-skills     Don't show skills info
    --debug, -d     Print debug information

  Examples
    npx daniel-resume --no-contact
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
