const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., "pageView", "userSignup"
  data: { type: mongoose.Schema.Types.Mixed, required: true }, // Flexible schema for storing metrics
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Analytics", analyticsSchema);
