const Mongoose = require('mongoose');

// Database credentials
const Config = {
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DATABASE_NAME
}

// Connection
module.exports = Mongoose.connect(`mongodb+srv://${Config.username}:${Config.password}@hashsearch.hdcwy.mongodb.net/${Config.database}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
