const Student = require("../models/Student");

const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const submitReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { reportData } = req.body;
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    student.internshipDetails.reports.push(reportData); // Add report
    await student.save();
    res.status(201).json({ message: "Report submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getStudent, updateDetails, submitReport };
