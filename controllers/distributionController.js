// internal imports
const Distribution = require("../models/Distribution");

// get distribution
async function getDistribution(req, res, next) {
  try {
    const distribution = await Distribution.find({}).sort({ createdAt: -1 });
    res.status(200).json(distribution);
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// add distribution
async function addDistribution(req, res, next) {
  console.log(req.body);
  try {
    const distribution = new Distribution(req.body);
    const result = await distribution.save();
    res.status(200).json({
      success: "Distribution was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

// search distribution
async function searchDistribution(req, res, next) {
  try {
    const distribution = await Distribution.find({
      $and: [
        {
          studentId: req.body.studentId,
        },
        {
          date: req.body.date,
        },
        {
          shift: req.body.shift,
        },
      ],
    });

    if (distribution?.length > 0) {
      res.status(200).json({
        success: true,
        message: "Already Served",
      });
    } else {
      res.status(200).json({
        success: false,
        studentId: req.body.studentId,
        date: req.body.date,
        shift: req.body.shift,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "Internal server error!",
    });
  }
}

module.exports = {
  getDistribution,
  addDistribution,
  searchDistribution,
};
