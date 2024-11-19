const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  internshipDetails: {
    companyName: String,
    startDate: Date,
    endDate: Date,
    externalMentor: {
      name: String,
      contact: String,
      email: String,
    },
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
  },
  location: { lat: Number, lng: Number },
});

module.exports = mongoose.model("Student", studentSchema);
