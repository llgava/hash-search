const Mongoose = require('mongoose');
const UUID = require('uuid');

const BotSchema = new Mongoose.Schema({
  owner_id: { type: String, require: true },
  client_id: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  description: { type: String, require: true },
  avatar: { type: String, require: false },
  invite_url: { type: String, require: true },
  uuid: { type: String, default: () => UUID.v4(), required: true, unique: true, select: false }
}, { versionKey: false });

const Bot = module.exports = Mongoose.model('Bot', BotSchema);
