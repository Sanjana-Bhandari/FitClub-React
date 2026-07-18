const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  subscribeNewsletter,
  getSubscribers,
  joinMembership,
} = require("../controllers/userController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Newsletter
router.post("/newsletter", subscribeNewsletter);

// Get All Subscribers
router.get("/newsletter", getSubscribers);
// Membership Form
router.post("/membership", joinMembership);

module.exports = router;