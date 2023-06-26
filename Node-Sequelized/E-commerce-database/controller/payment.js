const payment = require("../models").Payment;

const listPayment = async (req, res) => {
  try {
    const response = await payment.findAll();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
const addPayment = async (req, res) => {
  try {
    const response = await payment.create({ ...req.body });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { addPayment, listPayment };
