// internal imports
const FoodItem = require("../models/FoodItem");

// get food item data
async function getFoodItem(req, res, next) {
  try {
    const foodItem = await FoodItem.find({}).sort({ createdAt: -1 });
    res.status(200).json(foodItem);
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// add food item data
async function addFoodItem(req, res, next) {
  try {
    const foodItem = new FoodItem(req.body);
    const result = await foodItem.save();
    res.status(200).json({
      success: "Food Item was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// update food item data
async function updateFoodItem(req, res, next) {
  try {
    const id = req.params.id;
    const foodItem = await FoodItem.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ foodItem });
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// food item pagination data
async function foodItemPaginationData(req, res, next) {
  try {
    res.status(200).json(res.paginatedResults);
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// delete food item data
async function deleteFoodItem(req, res, next) {
  try {
    const id = req.params.id;
    const foodItem = await FoodItem.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      success: "Food Item was deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error!",
    });
  }
}

module.exports = {
  getFoodItem,
  addFoodItem,
  updateFoodItem,
  foodItemPaginationData,
  deleteFoodItem,
};
