"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    static associate(models) {
      Shipment.hasMany(models.Customer, { foreignKey: "shipment_id" });
      Shipment.hasMany(models.Order, { foreignKey: "shipment_id" });
    }
  }
  Shipment.init(
    {
      shipment_date: {
        type: DataTypes.DATE,
      },
      address: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      zip_code: {
        type: DataTypes.INTEGER,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Customers",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Shipment",
    }
  );
  return Shipment;
};
