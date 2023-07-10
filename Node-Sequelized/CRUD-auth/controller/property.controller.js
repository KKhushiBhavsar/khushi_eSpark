const { Property } = require("../models");

exports.addProperty = async (req, res) => {
  try {
    const response = Property.create({ ...req.body });
    if (!response) {
      res.status(400).send("Failed");
    }
    res.status(200).send("PROPERTY ADDED");
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.showAllProperties = async (req, res) => {
  try {
    const response = await Property.findAll();
    if (!response) {
      res.status(400).send("Failed!");
    }
    res.json(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.showPropertyOfUser = async (req, res) => {
  try {
    const PropertyId = req.params.PropertyId;
    if (isNaN(PropertyId)) {
      res.status(404).send("WRONG PROPERTY ID");
    }
    const response = await Property.findByPk(PropertyId);
    if (!response) {
      res.status(400).send("Failed!");
    }
    res.json(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.deleteProperty = async (req, res) => {
  try {
    const PropertyId = req.params.PropertyId;
    if (isNaN(PropertyId)) return res.status(404).send("WRONG PROPERTY ID");
    const response = await Property.destroy({ where: { id: PropertyId } });
    if (!response) {
      res.status(400).send("!!Failed!!");
    }
    res.status(200).send("Property Deleted!");
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.updateProperty = async (req, res) => {
  try {
    const PropertyId = req.params.PropertyId;
    if (isNaN(PropertyId)) return res.status(404).send("WRONG PROPERTY ID");
    const response = Property.update(
      { ...req.body },
      { where: { id: PropertyId } }
    );
    if (!response) {
      res.status(400).send("!Failed!");
    }
    res.status(200).send("Property Updated!");
  } catch (error) {
    res.status(400).send(error);
  }
};
