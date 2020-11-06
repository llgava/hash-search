const chalk = require("chalk");

const chars = { success: '✔', error: '✖' }

function CreateUser(type, username) {
  switch (type) {
    case 'created':
      console.log(`${chalk.bold.green(chars.success)} The user ${username} was created successfully.\n`);
      break;

    case 'error':
      console.log(`${chalk.bold.red(chars.error)} Something went wrong when trying to create the user ${chalk.yellow(username)}.\n`);
      break;

    default:
      console.log(`${chalk.bold.red(chars.error)} The ${chalk.bold('type')} parameter was not set correctly, please use the ${chalk.bold('created')} or ${chalk.bold('error')} value.\n`);
      break;
  }
}

module.exports = { CreateUser };
