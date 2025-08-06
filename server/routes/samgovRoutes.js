const express = require('express');
const router = express.Router();
const { getOpportunities } = require('../controllers/samgovController');

router.get('/opportunities', getOpportunities);

module.exports = router;
