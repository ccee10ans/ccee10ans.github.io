const path = require('path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const messageRoutes = require('./routes/messages');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://192.168.1.71:3200', // Remplacez par votre adresse IP ou nom de domaine
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// API Routes
app.use('/api/messages', messageRoutes);

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
