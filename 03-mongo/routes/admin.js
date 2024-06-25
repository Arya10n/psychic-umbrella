const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  // check if a user with this name already exists
  Admin.create({
    username: username,
    password: password,
  });
  res.json({
    message: 'Admin created successfully',
  });
});

router.post('/courses', adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;