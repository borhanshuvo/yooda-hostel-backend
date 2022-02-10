// external imports
const mongoose = require("mongoose");

const distributionSchema = mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    shift: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "served",
    },
    foodItemList: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Distribution = mongoose.model("Distribution", distributionSchema);
module.exports = Distribution;
