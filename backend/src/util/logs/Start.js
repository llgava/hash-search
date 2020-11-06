const chalk = require("chalk");
const DatabaseConnection = require('../../database/connection');

const chars = { attempt: '↺', success: '✔' }

// Backend log
function Start() {
  const Port = process.env.EXPRESS_PORT;
  const DatabaseName = process.env.MONGO_DATABASE_NAME;

  console.clear();

  // Express
  console.log(`${chalk.bold.green(chars.success)} Application started with success!`);
  console.log(`  Running at port: ${chalk.yellow(Port)}\n`);

  // MongoDB
  console.log(`${chalk.bold.yellow(chars.attempt)} Trying to connect on database...`);
  DatabaseConnection.then(() => {
    console.log(`${chalk.bold.green(`  Connected!`)} Now you are using ${chalk.yellow(DatabaseName)} as database.\n`);
  }).catch(error => {
    console.log(`${chalk.bold.red(`  Attempt failed!`)} Check your configuration of MongoDB on ${chalk.bold('.env')} file.\n`);
  });

}

module.exports = { Start };
