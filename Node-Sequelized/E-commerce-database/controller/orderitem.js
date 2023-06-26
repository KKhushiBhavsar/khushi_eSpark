const orderItems = require("../models").Orderitem;

const listOrderItems = async (req, res) => {
  try {
    const response = await orderItems.findAll();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { listOrderItems };
