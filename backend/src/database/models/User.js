const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
  // Discord
  dsId: { type: String, require: true },
  dsUsername: { type: String, require: true },
  dsDiscriminator: { type: String, require: true },
  dsAvatar: { type: String, require: true },
  dsEmail: { type: String, required: true },

  // Website
  wsRole: { type: String, required: true },

  bots: [
    {
      clientId: { type: String, require: true, unique: true },
      name: { type: String, require: true },
      description: { type: String, require: true },
      inviteURL: { type: String, require: true },
      avatarURL: { type: String, require: false },
    }
  ]

}, { versionKey: false });

const User = module.exports = Mongoose.model('User', UserSchema);
