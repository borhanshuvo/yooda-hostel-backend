// internal imports
const Student = require("../models/Student");

// get student data
async function getStudent(req, res, next) {
  try {
    const student = await Student.find({}).sort({ createdAt: -1 });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// add student data
async function addStudent(req, res, next) {
  try {
    const student = new Student(req.body);
    const result = await student.save();
    res.status(200).json({
      success: "Student was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// update student data
async function updateStudent(req, res, next) {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ student });
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// pagination data
async function paginationData(req, res, next) {
  try {
    res.status(200).json(res.paginatedResults);
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// delete student data
async function deleteStudent(req, res, next) {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      success: "Student was deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error!",
    });
  }
}

module.exports = {
  getStudent,
  addStudent,
  updateStudent,
  paginationData,
  deleteStudent,
};
