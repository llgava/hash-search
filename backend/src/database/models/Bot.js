const Mongoose = require('mongoose');

const BotSchema = new Mongoose.Schema({
  ownerId: { type: String, require: true },
  clientId: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  description: { type: String, require: true },
  inviteURL: { type: String, require: true },
  avatarURL: { type: String, require: false }
}, { versionKey: false });

const Bot = module.exports = Mongoose.model('Bot', BotSchema);
