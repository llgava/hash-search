require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.EXPRESS_PORT || 3000;
const session = require('express-session');
const passport = require('passport');
const discordStrategy = require('./strategies/discord');

// Routes
const AuthRoute = require('./routes/auth');

app.use(session({
  secret: 'a62e2c6a-e64d-49a8-9ae1-c8809e28f83c',
  cookie: {
    maxAge: 86400000 // 1 day
  },
  
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

// Middleware Routes
app.use('/auth', AuthRoute);

// Start
app.listen(port, () => {
  console.clear();
  console.log(`Rodando na porta: ${port}`);
});
