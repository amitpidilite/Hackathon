const mongoose = require('mongoose');

const digitalProfileSchema = new mongoose.Schema({
  userId: { type: Number, required: false },
  profileName: { type: String, required: false },
  viewCount: { type: Number, required: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('digital-profile', digitalProfileSchema, 'digital-profile');
