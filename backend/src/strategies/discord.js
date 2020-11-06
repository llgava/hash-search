const Passport = require("passport");
const Discord = require("passport-discord");
const User = require("../database/models/User");
const { CreateUser } = require('../util/logs');

const Config = {
  id: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET,
  redirect: process.env.CLIENT_REDIRECT,
  scopes: ['identify', 'email']
}

function DiscordStrategy() {
  Passport.use(new Discord({
    clientID: Config.id,
    clientSecret: Config.secret,
    callbackURL: Config.redirect,
    scope: Config.scopes
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const findUser = await User.findOne({ dsId: profile.id });

      // Will check if the User exists, if not, it will be created.
      if(findUser) {
        done(null, findUser, { message: "Encontrado com sucesso." });
      } else {
        const createUser = await User.create({
          dsId: profile.id,
          dsUsername: profile.username,
          dsDiscriminator: profile.discriminator,
          dsAvatar: profile.avatar,
          dsEmail: profile.email,
          wsRole: 'Member'
        });

        const saveUser = await createUser.save();
        done(null, saveUser);
      }
    } catch (err) {
      console.log(err),
      done(err, null)
    }
  }))
}
