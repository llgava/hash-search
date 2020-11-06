require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const DiscordStrategy = require('./strategies/Discord');
const { Login, Logout, Me } = require('./routes');
const { Start } = require('./util/logs')

const App = express();
const Port = process.env.EXPRESS_PORT;

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));

// Initialize user session.
App.use(session({
  secret: '1a7e72e0-e4d4-4eb7-a38f-896cfc9698a2',
  cookie: { maxAge: 60000 * 60 * 24 },
  saveUninitialized: false,
  name: 'Discord.OAuth2'
}));

App.use(passport.initialize());
App.use(passport.session());

// Routes
App.use('/login', Login);
App.use('/logout', Logout);
App.use('/me', Me);

// App start
App.listen(Port, () => Start());
