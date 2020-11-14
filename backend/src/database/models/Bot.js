const Mongoose = require('mongoose');
const _id = Mongoose.Schema.Types.ObjectId;

const BotSchema = new Mongoose.Schema({
  _id: { type: _id, required: true, unique: true, select: false },
  owner_id: { type: String, require: true },
  client_id: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  description: { type: String, require: true },
  avatar: { type: String, require: false },
  invite_url: { type: String, require: true }
}, { versionKey: false });

const Bot = module.exports = Mongoose.model('Bot', BotSchema);
