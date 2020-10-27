const strategy = require('passport-discord').Strategy;
const passport = require('passport');

passport.use(new strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CLIENT_REDIRECT,
  scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
}));
