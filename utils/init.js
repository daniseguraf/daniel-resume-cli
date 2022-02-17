import clearConsole from 'clear-any-console';
import ckeckNode from './../checkNodeVersion.js';

export default () => {
  // checking Node version
  ckeckNode(12);
  clearConsole();

  process.on('unhandledRejection', (err) => {
    console.log(`unhandledRejection`, err);
  });
};
