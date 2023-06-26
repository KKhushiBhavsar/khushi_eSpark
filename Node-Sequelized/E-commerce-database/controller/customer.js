const customer = require("../models").Customer;

const listAllCustomer = async (req, res) => {
  try {
    const response = await customer.findAll();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const addCustomer = async (req, res) => {
  try {
    const response = await customer.create({ ...req.body });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { listAllCustomer, addCustomer };
