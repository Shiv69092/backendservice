const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define route handlers
router.get('/list', userController.getUsers);         // GET all users, accessible at /users/list
router.post('/create', userController.createUser);    // POST a new user, accessible at /users/create
router.put('/update/:id', userController.updateUser); // PUT (update) a user by ID, accessible at /users/update/:id
router.delete('/delete/:id', userController.deleteUser); // DELETE a user by ID, accessible at /users/delete/:id

module.exports = router;
