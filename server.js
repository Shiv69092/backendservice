const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import CORS
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/users', userRoutes);

// Add a simple route for the root URL to avoid "Cannot GET /" errors
app.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

// Connect to MongoDB
const mongoURI = 'mongodb+srv://user_0912:Shivanshu@cluster0.jcoqs.mongodb.net/userDetails?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
