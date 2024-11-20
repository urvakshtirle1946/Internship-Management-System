const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  mentor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
  },
  title: { type: String, required: true },
  link: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);
