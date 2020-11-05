const chalk = require("chalk");
const database = require('./database/connection');

const db_config = {
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  name: process.env.MONGO_DBNAME
}

const chars = {
  attempt: '↺',
  success: '✔',
  lambda: 'λ'
}

function StartLog() {
  console.clear();

  // Express start log
  console.log(`${chalk.bold.green(chars.success)} Application started with success!`);
  console.log(`  Running at port: ${chalk.yellow(process.env.EXPRESS_PORT)}\n`);

  // MongoDB log
  console.log(`${chalk.bold.yellow(chars.attempt)} Trying to connect on database...`);
  database.then(() => {
    console.log(`${chalk.bold.green(`  Connected!`)} Now you are using ${chalk.yellow(db_config.name)} as database.\n`);
  }).catch(error => {
    console.log(`${chalk.bold.red(`  Attempt failed!`)} Check your configuration of MongoDB on ${chalk.bold('.env')} file.\n`);
  });
}

module.exports = { StartLog };
