// external imports
const express = require("express");
const {
  getDistribution,
  addDistribution,
  searchDistribution,
} = require("../controllers/distributionController");

// internal imports
const router = express.Router();

// get distribution data
router.get("/getDistribution", getDistribution);

// add distribution data
router.post("/addDistribution", addDistribution);

// search distribution data
router.post("/searchDistribution", searchDistribution);

module.exports = router;
