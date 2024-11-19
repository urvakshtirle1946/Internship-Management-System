const Mentor = require("../models/Mentor");
const Student = require("../models/Student");

const viewAssignedStudents = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id).populate("assignedStudents");
    res.json(mentor.assignedStudents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const gradeReport = async (req, res) => {
  const { studentId, reportId, grade } = req.body;
  try {
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const report = student.internshipDetails.reports.id(reportId);
    if (!report) return res.status(404).json({ message: "Report not found" });

    report.grade = grade;
    await student.save();
    res.json({ message: "Report graded successfully", report });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { viewAssignedStudents, gradeReport };
