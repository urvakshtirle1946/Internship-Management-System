const Student = require("../models/Student");
const Mentor = require("../models/Mentor");

const getAllInterns = async (req, res) => {
  try {
    const interns = await Student.find().populate("internshipDetails.reports");
    res.json(interns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const assignMentor = async (req, res) => {
  const { studentId, mentorId } = req.body;
  try {
    const student = await Student.findById(studentId);
    const mentor = await Mentor.findById(mentorId);
    if (!student || !mentor) {
      return res.status(404).json({ message: "Student or Mentor not found" });
    }
    student.mentor = mentor._id;
    await student.save();
    res.json({ message: "Mentor assigned successfully", student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteIntern = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Intern deleted successfully", deletedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllInterns, assignMentor, deleteIntern };
