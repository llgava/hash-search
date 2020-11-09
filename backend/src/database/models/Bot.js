const Mongoose = require('mongoose');

const BotSchema = new Mongoose.Schema({
  clientId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  avatarURL: { type: String, required: false }

}, { versionKey: false });

const Bot = module.exports = Mongoose.model('Bot', BotSchema);
