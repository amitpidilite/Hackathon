const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: { type: Number, required: false},
  userId: { type: Number, required: false },
  totalAmount: { type: Number, required: false },
  orderDate: { type: Date, required: false }
});

module.exports = mongoose.model('orders', orderSchema);