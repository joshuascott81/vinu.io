const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ShowSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    text: {
      type: String
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  live: {
    type: Boolean,
    default: false
  },
  password: {
    type: String
  },
  elements: {
    site: {
      type: String
    },
    embedUrl: {
      type: String
    }
  },
  backgroundImageUrl: {
    type: String,
    default:
      'https://images.freeimages.com/images/large-previews/c98/ferns-3-1405636.jpg'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Show = mongoose.model('show', ShowSchema);
