const express = require("express");
const { getAllInterns, assignMentor, deleteIntern } = require("../controllers/adminController");
const router = express.Router();

// Routes
router.get("/interns", getAllInterns);
router.post("/assign-mentor", assignMentor);
router.delete("/intern/:id", deleteIntern);

module.exports = router;
