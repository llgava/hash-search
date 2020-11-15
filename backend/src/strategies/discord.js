const passport = require("passport");
const Discord = require("passport-discord");
const User = require("../database/models/User");
const { CreateUser } = require("../util/logs");

const Config = {
  id: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET,
  redirect: process.env.CLIENT_REDIRECT,
  scopes: ['identify', 'email']
}

// Save user informations on the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const  findUserByID = await User.findById(id);
  if(id) done(null, findUserByID);
});

// Check if the user already exists or create him.
passport.use(new Discord({
  clientID: Config.id,
  clientSecret: Config.secret,
  callbackURL: Config.redirect,
  scope: Config.scopes
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const findUser = await User.findOne({ discord_id: profile.id });

    // Will check if the User exists, if not, it will be created.
    if(findUser) {
      const updateUser = await User.findOneAndUpdate({ discord_id: profile.id }, {
        discord_id: profile.id,
        discord_username: profile.username,
        discord_discrimator: profile.discriminator,
        discord_avatar: profile.avatar,
        discord_email: profile.email
      });

      done(null, updateUser, CreateUser('already', profile.username, false));

    } else {
      const createUser = await User.create({
        discord_id: profile.id,
        discord_username: profile.username,
        discord_discrimator: profile.discriminator,
        discord_avatar: profile.avatar,
        discord_email: profile.email
      });

      const saveUser = await createUser.save();
      done(null, saveUser, CreateUser('created', profile.username, false));
    }

  } catch (err) {
    done(err, null);
  }
}));

