const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  amount: Number,
  dueDate: Date,
  status: { type: String, enum: ['Unpaid', 'Paid'], default: 'Unpaid' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
