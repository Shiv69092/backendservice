const Users = require('../models/userModel');

// GET all users or filter by name and email
exports.getUsers = async (req, res) => {
  const { name, email } = req.query; // Query parameters for filtering
  try {
    // If no query parameters are provided, return all users
    const query = {};
    if (name) query.name = name;
    if (email) query.email = email;

    const users = await Users.find(query); // Find users based on the dynamic query
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// POST a new user
exports.createUser = async (req, res) => {
  const { name, email } = req.body; // Extract name and email from request body
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {
    // Create a new user instance and save it to the database
    const newUser = new Users({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: err.message });
  }
};

// PUT (update) a user by ID
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body; // Extract name and email from request body
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required for updating' });
  }

  try {
    // Find the user by ID and update it with new values
    const user = await Users.findByIdAndUpdate(id, { name, email }, { new: true });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: err.message });
  }
};

// DELETE a user by ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID and delete it
    const result = await Users.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
