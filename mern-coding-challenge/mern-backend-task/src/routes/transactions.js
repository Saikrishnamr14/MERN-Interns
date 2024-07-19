// routes/transactions.js

const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Define routes and map them to controller methods
router.get('/initialize', transactionController.initializeDatabase);
router.get('/transactions', transactionController.listTransactions);
router.get('/statistics', transactionController.getStatistics);
router.get('/bar-chart', transactionController.getBarChartData);
router.get('/pie-chart', transactionController.getPieChartData);
router.get('/combined', transactionController.getCombinedData);

module.exports = router;
