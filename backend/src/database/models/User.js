const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
  // Discord
  discord_id: { type: String, require: true },
  discord_username: { type: String, require: true },
  discord_discrimator: { type: String, require: true },
  discord_avatar: { type: String, require: true },
  discord_email: { type: String, required: true },

  // Website
  website_role: { type: String, default: 'Member', required: true }
}, { versionKey: false });

const User = module.exports = Mongoose.model('User', UserSchema);
