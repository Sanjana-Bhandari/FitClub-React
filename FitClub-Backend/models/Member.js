const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    plan: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      default: "",
    },

    trainer: {
      type: String,
      default: "",
    },

    timing: {
      type: String,
      default: "",
    },

    goal: {
      type: String,
      default: "",
    },

    dietPlan: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Member", memberSchema);