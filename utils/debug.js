import cli from './cli.js';

export default (isDebug) => {
  if (!isDebug) {
    return;
  }

  console.log(`DEBUGGING INFO`);
  console.log(`input`, cli.input);
  console.log(`flags`, cli.flags);
};
