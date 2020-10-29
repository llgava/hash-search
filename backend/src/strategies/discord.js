const passport = require('passport');
const DiscordStrategy = require('passport-discord');
const User = require('../database/models/Users');

// Check the user informations on database.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Check if the user already exists on database.
passport.deserializeUser(async (id, done) => {
  const  findUserByID = await User.findById(id);
  if(id) done(null, findUserByID);
});

// Create Discord Strategy
passport.use(new DiscordStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CLIENT_REDIRECT,
  scope: ['identify', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const findUser = await User.findOne({ dsID: profile.id });

    if (findUser) {
      done(null, findUser)
    } else {
      const createUser = await User.create({
        dsID: profile.id,
        dsUsername: profile.username,
        wsRole: 'Member'
      });

      const saveUser = await createUser.save();
      done(null, saveUser);
    }
  } catch (error) {
    console.log(error);
    done(error, null);
  }
}));
