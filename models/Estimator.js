const mongoose = require('mongoose');

const estimatorSchema = new mongoose.Schema({
  name: { type: String, required: false },
  userId: { type: Number, required: false },
  amount: { type: Number, required: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('estimator', estimatorSchema);
