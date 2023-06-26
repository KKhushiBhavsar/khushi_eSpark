const shipment = require("../models").Shipment;

const getShipmentDetails = async (req, res) => {
  try {
    const response = await shipment.findAll();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
const addShipmentDetails = async (req, res) => {
  try {
    const response = await shipment.create({ ...req.body });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { getShipmentDetails, addShipmentDetails };
