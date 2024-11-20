const express = require("express");
const { getCourses, createCourse, getCourse, updateCourse, deleteCourse, enrollStudent } = require("../controllers/courseController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", protect, getCourses);
router.post("/", protect, adminOnly, createCourse);
router.get("/:id", protect, getCourse);
router.put("/:id", protect, adminOnly, updateCourse);
router.delete("/:id", protect, adminOnly, deleteCourse);
router.post("/:id/enroll", protect, enrollStudent);

module.exports = router;
