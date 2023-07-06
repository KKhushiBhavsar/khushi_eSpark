const { Book } = require("../../models");

const getBooksDetails = async (req, res) => {
  try {
    const order = [];
    const pagination = {
      count: null,
      page: 1,
      limit: 5,
      offset: 0,
    };
    var seachOn = null;
    var searchValue = null;
    if (!isNaN(req.query.page) && parseInt(req.query.page) >= 0) {
      pagination.page = parseInt(req.query.page);
    }

    if (!isNaN(req.query.limit) && req.query.limit >= 0) {
      pagination.limit = parseInt(req.query.limit);
    }

    pagination.offset = (pagination.page - 1) * pagination.limit;
    if (req.query.where) {
      var searchField = JSON.parse(req.query.where);
      const searchObject = [];
      const keys = Object.keys(searchField);
      const values = Object.values(searchField);
      seachOn = searchField[0];
      searchValue = searchField[1];
      const query = keys.forEach((i, index) => [
        searchObject.push({ [i]: { [Op.like]: `%${values[index]}%` } }),
      ]);

      var searchCondition = {
        [Op.and]: searchObject,
      };
    }
    if (req.query.sort) {
      const sortField = Object.entries(JSON.parse(req.query.sort))[0];
      order.push([[sortField[0], sortField[1]]]);
    }

    const { count, rows } = await Book.findAndCountAll({
      where: searchCondition,
      limit: pagination.limit,
      offset: pagination.offset,
      order: order,
    });

    pagination.count = count;
    return res.json({ data: rows, pagination: pagination });
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};
module.exports = { getBooksDetails };
