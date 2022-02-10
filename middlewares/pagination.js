// pagination functionality done
function getPaginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.body.page);
    const limit = 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      const total = await model.find({});
      results.totalData = total.length;
      results.result = await model
        .find({})
        .sort({ orderDate: -1 })
        .limit(limit)
        .skip(startIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (err) {
      res.status(500).json(err);
    }
  };
}

module.exports = {
  getPaginatedResults,
};
