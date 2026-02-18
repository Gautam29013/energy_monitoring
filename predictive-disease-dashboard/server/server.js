require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const predictionRoutes = require('./routes/predictionRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(helmet());
app.use(express.json());

// Static client
app.use('/', express.static(path.join(__dirname, '..', 'client')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/predictions', predictionRoutes);

io.on('connection', socket => {
    console.log('User connected');
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/predictive-dashboard')
    .then(() => {
        console.log('MongoDB Connected');
        server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        // still start server for local static preview
        server.listen(PORT, () => console.log(`Server running on port ${PORT} (no DB)`));
    });