// external imports
const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    hallName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["inActive", "active"],
      default: "inActive",
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
