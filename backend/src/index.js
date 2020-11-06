require('dotenv').config();
const Express = require('express');
const BodyParser = require('body-parser');
const { Start } = require('./util/logs')

const App = Express();
const Port = process.env.EXPRESS_PORT;

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: false }));

App.get('/', (req, res) => {
  res.json({ status: true });
});

App.listen(Port, () => Start());
