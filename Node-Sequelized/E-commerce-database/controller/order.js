const order = require("../models").Order;

const listAllOrders = async (req, res) => {
  try {
    const response = await order.findAll();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
const addOrder = async (req, res) => {
  try {
    const response = await order.create({ ...req.body });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { listAllOrders, addOrder };
