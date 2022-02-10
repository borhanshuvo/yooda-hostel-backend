// external imports
const express = require("express");
const {
  getFoodItem,
  addFoodItem,
  updateFoodItem,
  foodItemPaginationData,
} = require("../controllers/foodItemController");
const { getPaginatedResults } = require("../middlewares/pagination");

// internal imports
const router = express.Router();
const FoodItem = require("../models/FoodItem");

// get food item data
router.get("/getFoodItem", getFoodItem);

// pagination food item data
router.post("/paginationFoodItemData",getPaginatedResults(FoodItem), foodItemPaginationData);

// add food item
router.post("/addFoodItem", addFoodItem);

// update bid request
router.put("/updateFoodItem/:id", updateFoodItem);

module.exports = router;
