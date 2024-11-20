const express = require("express");
const { viewAssignedStudents, gradeReport } = require("../controllers/mentorController");
const { assignStudent, viewAssignedStudents } = require("../controllers/mentorStudentController");
const { protect, mentorOnly } = require("../middleware/authMiddleware");
const router = express.Router();

// Routes
router.get("/:id/students", viewAssignedStudents);
router.post("/report/grade", gradeReport);

// Assign a student to a mentor
router.post("/assign", protect, mentorOnly, assignStudent);
// View students assigned to a mentor
router.get("/:mentorId/students", protect, mentorOnly, viewAssignedStudents);

module.exports = router;
