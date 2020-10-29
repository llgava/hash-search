const mongoose = require('mongoose');

const BotSchema = new mongoose.Schema({
  owner: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false, maxlength: 124 },
  inviteLink: { type: String, required: true }
}, { versionKey: false });


const Bot = module.exports = mongoose.model('Bot', BotSchema)
