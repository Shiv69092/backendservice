const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/users', userRoutes);

const User = require('./models/userModel');

// Connect to MongoDB
const mongoURI = 'mongodb+srv://user_0912:Shivanshu@cluster0.jcoqs.mongodb.net/userDetails?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI)
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
