const mongoose = require('mongoose');
module.exports = mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@hashsearch.hdcwy.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
