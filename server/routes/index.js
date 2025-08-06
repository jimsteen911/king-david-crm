const express = require('express');
const router = express.Router();

router.use('/customers', require('./customerRoutes'));
router.use('/projects', require('./projectRoutes'));
router.use('/estimates', require('./estimateRoutes'));
router.use('/invoices', require('./invoiceRoutes'));
router.use('/samgov', require('./samgovRoutes'));

module.exports = router;
