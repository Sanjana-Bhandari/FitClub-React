const User = require("../models/User");
const Newsletter = require("../models/Newsletter");
const Member = require("../models/Member");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= LOGIN =================
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= NEWSLETTER =================
const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    const existingEmail = await Newsletter.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email already subscribed",
      });
    }

    const subscriber = await Newsletter.create({
      email,
    });

    res.status(201).json({
      message: "Subscribed Successfully",
      subscriber,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET ALL SUBSCRIBERS =================
const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });

    res.status(200).json(subscribers);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= JOIN MEMBERSHIP =================
// ================= JOIN MEMBERSHIP =================
const joinMembership = async (req, res) => {
  try {

    const {
      name,
      email,
      phone,
      plan,
      duration,
      trainer,
      timing,
      goal,
      dietPlan,
    } = req.body;

    const member = await Member.create({
      name,
      email,
      phone,
      plan,
      duration,
      trainer,
      timing,
      goal,
      dietPlan,
    });

    res.status(201).json({
      success: true,
      message: "Membership Submitted Successfully",
      member,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  registerUser,
  loginUser,
  subscribeNewsletter,
  getSubscribers,
   joinMembership,
};