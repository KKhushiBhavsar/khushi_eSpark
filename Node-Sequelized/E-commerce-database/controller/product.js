const res = require("express/lib/response");

const Product = require("../models").Product;

const listOfProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    console.log(response);
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
const addProductToList = async (req, res) => {
  try {
    const response = await Product.create({ ...req.body });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { listOfProducts, addProductToList };
