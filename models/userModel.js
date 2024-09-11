const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true // Added the email field as required
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
