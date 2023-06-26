const cart = require("../models").Cart;

const addToCart = async (req, res) => {
  try {
    const response = await cart.create({ ...req.body });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const listAllCartItems = async (req, res) => {
  try {
    const response = await cart.findAll();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { addToCart, listAllCartItems };
