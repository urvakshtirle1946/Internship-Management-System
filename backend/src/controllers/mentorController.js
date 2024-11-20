const Mentor = require("../models/Mentor");
const Student = require("../models/Student");

// Grade a student's report
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

// Assign a student to a mentor
const assignStudent = async (req, res) => {
  const { mentorId, studentId, notes } = req.body;

  try {
    const mentor = await User.findById(mentorId);
    const student = await User.findById(studentId);

    if (!mentor || mentor.role !== "Mentor") {
      return res.status(404).json({ message: "Mentor not found" });
    }

    if (!student || student.role !== "Student") {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if the relationship already exists
    const existingRelation = await MentorStudent.findOne({ mentor: mentorId, student: studentId });
    if (existingRelation) {
      return res.status(400).json({ message: "Student is already assigned to this mentor." });
    }

    // Create the relationship
    const relation = new MentorStudent({ mentor: mentorId, student: studentId, notes });
    await relation.save();

    res.status(201).json({ message: "Student assigned to mentor successfully", relation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// View students assigned to a mentor
const viewAssignedStudents = async (req, res) => {
  try {
    const { mentorId } = req.params;

    const mentor = await User.findById(mentorId);
    if (!mentor || mentor.role !== "Mentor") {
      return res.status(404).json({ message: "Mentor not found" });
    }

    const relations = await MentorStudent.find({ mentor: mentorId }).populate("student", "name email");
    res.json(relations.map((relation) => relation.student));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {assignStudent, viewAssignedStudents, gradeReport };
