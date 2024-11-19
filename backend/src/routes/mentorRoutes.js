const express = require("express");
const { viewAssignedStudents, gradeReport } = require("../controllers/mentorController");
const router = express.Router();

// Routes
router.get("/:id/students", viewAssignedStudents);
router.post("/report/grade", gradeReport);

module.exports = router;
