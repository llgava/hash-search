require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('./strategies/discord'); // Import the Discord strategy.
const { Auth, Me } = require('./routes'); // Import all routes.
const { StartLog } = require('./log');

const app = express();
const port = process.env.EXPRESS_PORT;

app.use(session({
  secret: '0801a3d6-8999-4844-8184-b65523b1ffc4',
  cookie: { maxAge: 60000 * 60 * 24 },
  saveUninitialized: false,
  name: 'Discord.OAuth2'
}));

// Passports
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', Auth);
app.use('/api/me', Me);

// Start
app.listen(port, () => StartLog());
