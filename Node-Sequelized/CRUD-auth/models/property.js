"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {}
  }
  Property.init(
    {
      property_name: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      county: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};
