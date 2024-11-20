const mongoose = require("mongoose");

const mentorStudentSchema = new mongoose.Schema({
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Refers to the mentor in the User collection
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Refers to the student in the User collection
    required: true,
  },
  assignedAt: {
    type: Date,
    default: Date.now, // Tracks when the assignment was created
  },
  notes: {
    type: String, // Optional notes about the relationship
  },
});

module.exports = mongoose.model("MentorStudent", mentorStudentSchema);
