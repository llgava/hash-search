const Mongoose = require('mongoose');

const BotSchema = new Mongoose.Schema({
  ownerId: { type: String, require: true },
  clientId: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  description: { type: String, require: true },
  avatar: { type: String, require: false },
  inviteURL: { type: String, require: true }
}, { versionKey: false });

const Bot = module.exports = Mongoose.model('Bot', BotSchema);
