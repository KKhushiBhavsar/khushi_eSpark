const category = require("../models").Category;

const listCategory = async (req, res) => {
  try {
    const response = await category.findAll();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
const addCategory = async (req, res) => {
  try {
    const response = await category.create({ ...req.body });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { listCategory, addCategory };
