const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');

router.get('/generate', predictionController.generatePrediction);

module.exports = router;