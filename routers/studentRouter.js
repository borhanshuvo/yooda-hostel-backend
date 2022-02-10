// external imports
const express = require("express");

// internal imports
const router = express.Router();
const Student = require("../models/Student");
const {
  getStudent,
  addStudent,
  updateStudent,
  paginationData,
} = require("../controllers/studentController");
const { getPaginatedResults } = require("../middlewares/pagination");

// get student data
router.get("/getStudent", getStudent);

// add student data
router.post("/addStudent", addStudent);

// pagination student data
router.post("/paginationStudentData",getPaginatedResults(Student), paginationData);

// update student data
router.put("/updateStudent/:id", updateStudent);

module.exports = router;
