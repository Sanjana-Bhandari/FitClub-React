const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  subscribeNewsletter,
} = require("../controllers/userController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Newsletter
router.post("/newsletter", subscribeNewsletter);

module.exports = router;