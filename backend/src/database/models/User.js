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

  token: { type: String, required: true }
}, { versionKey: false });

const User = module.exports = Mongoose.model('User', UserSchema);
