const mongoose = require('mongoose');

exports.generatePrediction = async(req, res) => {
    // Simulated ML anomaly detection logic (stateless)
    const hospitalSpike = Math.random() * 100;
    const waterContamination = Math.random() * 100;
    let risk = 'Low';
    let probability = (hospitalSpike + waterContamination) / 2;
    if (probability > 70) risk = 'High';
    else if (probability > 40) risk = 'Medium';
    res.json({ probability: Number(probability.toFixed(2)), risk, forecastHours: 48 });
};