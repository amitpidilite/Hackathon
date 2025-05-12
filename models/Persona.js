const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
  cohort_name: { type: String, required: false },
  criteria: { type: mongoose.Schema.Types.Mixed, default: {} },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('persona', personaSchema);
