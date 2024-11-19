const express = require("express");
const router = express.Router();
const { getStudent, updateDetails, submitReport } = require("../controllers/studentController");

// Define routes
router.get("/:id", getStudent);
router.put("/:id", updateDetails);
router.post("/:id/report", submitReport);

module.exports = router;
