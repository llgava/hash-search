const chalk = require("chalk");

const chars = { success: '✔', error: '✖', proceeding: '↪' }

function CreateUser(type, username) {
  switch (type) {
    case 'created':
      console.log(`${chalk.bold.green(chars.success)} The user ${chalk.bold(username)} was created successfully.\n`);
      break;

    case 'error':
      console.log(`${chalk.bold.red(chars.error)} Something went wrong when trying to create the user ${chalk.bold(username)}.\n`);
      break;

    case 'already':
      console.log(`${chalk.bold.yellow(chars.proceeding)} The user ${chalk.bold(username)} is already registered in the database. \n  Ignoring registration and proceeding for authentication.\n`);
      break;

    default:
      console.log(`${chalk.bold.red(chars.error)} The ${chalk.bold('type')} parameter was not set correctly, please use the ${chalk.bold('created')} or ${chalk.bold('error')} value.\n`);
      break;
  }
}

module.exports = { CreateUser };
