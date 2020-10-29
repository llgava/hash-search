const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // Discord User Informations
  dsID: { type: String, required: true },
  dsUsername: { type: String, required: true },
  dsAvatar: { type: String, required: true },

  // Website
  wsRole: { type: String, required: true }
}, { versionKey: false });


const User = module.exports = mongoose.model('User', UserSchema)
