const express = require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");
const { protect, mentorOnly } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", protect, getTasks);
router.post("/", protect, mentorOnly, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

module.exports = router;
