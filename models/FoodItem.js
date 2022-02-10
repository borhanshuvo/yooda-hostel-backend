// external imports
const mongoose = require("mongoose");

const foodItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FoodItem = mongoose.model("FoodItem", foodItemSchema);
module.exports = FoodItem;
