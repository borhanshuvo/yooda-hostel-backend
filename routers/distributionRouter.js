// external imports
const express = require("express");
const {
  getDistribution,
  addDistribution,
  searchDistribution,
} = require("../controllers/distributionController");

// internal imports
const router = express.Router();

// get food item data
router.get("/getDistribution", getDistribution);

// add food item
router.post("/addDistribution", addDistribution);

// search distribution data
router.post("/searchDistribution", searchDistribution);

module.exports = router;
