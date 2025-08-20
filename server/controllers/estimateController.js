const Estimate = require('../models/Estimate');

// Create a new estimate
const createEstimate = async (req, res) => {
  try {
    const estimate = new Estimate(req.body);
    await estimate.save();
    res.status(201).json(estimate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all estimates
const getEstimates = async (req, res) => {
  try {
    const estimates = await Estimate.find().populate('project');
    res.json(estimates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single estimate by ID
const getEstimateById = async (req, res) => {
  try {
    const estimate = await Estimate.findById(req.params.id).populate('project');
    if (!estimate) return res.status(404).json({ message: 'Estimate not found' });
    res.json(estimate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an estimate
const updateEstimate = async (req, res) => {
  try {
    const estimate = await Estimate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!estimate) return res.status(404).json({ message: 'Estimate not found' });
    res.json(estimate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an estimate
const deleteEstimate = async (req, res) => {
  try {
    const estimate = await Estimate.findByIdAndDelete(req.params.id);
    if (!estimate) return res.status(404).json({ message: 'Estimate not found' });
    res.json({ message: 'Estimate deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createEstimate,
  getEstimates,
  getEstimateById,
  updateEstimate,
  deleteEstimate,
};
