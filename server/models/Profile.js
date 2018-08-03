const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  handle: {
    type: String,
    required: true,
    min: 4,
    max: 20
  },
  brand: {
    type: String
  },
  websites: {
    type: String
  },
  bio: {
    type: String
  },
  live: {
    type: Boolean,
    required: true,
    default: True
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
