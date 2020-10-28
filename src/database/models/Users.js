const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // ds = Discord

  dsID: { type: String, required: true },
  dsUsername: { type: String, required: true }
}, { versionKey: false });


const User = module.exports = mongoose.model('User', UserSchema)
