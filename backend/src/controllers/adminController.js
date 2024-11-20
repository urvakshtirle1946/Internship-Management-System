const User = require("../models/User");

const getAllInterns = async (req, res) => {
  try {
    // Fetch all users with the 'Student' role
    const interns = await User.find({ role: "Student" }).select("name email");
    res.json(interns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const assignMentor = async (req, res) => {
  const { studentId, mentorId } = req.body;

  try {
    const student = await User.findById(studentId);
    const mentor = await User.findById(mentorId);

    if (!student || student.role !== "Student") {
      return res.status(404).json({ message: "Student not found" });
    }

    if (!mentor || mentor.role !== "Mentor") {
      return res.status(404).json({ message: "Mentor not found" });
    }

    // Assign the mentor to the student
    student.assignedMentor = mentorId;
    await student.save();

    res.json({ message: "Mentor assigned to intern successfully", student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteIntern = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await User.findById(id);

    if (!student || student.role !== "Student") {
      return res.status(404).json({ message: "Student not found" });
    }

    // Delete the student from the system
    await student.remove();

    res.json({ message: "Intern (student) deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllInterns, assignMentor, deleteIntern };
