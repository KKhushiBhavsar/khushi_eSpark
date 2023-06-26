"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    static associate(models) {
      Shipment.hasMany(models.Customer, { foreignKey: "customer_id" });
      Shipment.belongsTo(models.Order, { foreignKey: "shipment_id" });
    }
  }
  Shipment.init(
    {
      shipment_id: {
        type: DataTypes.INTEGER,
      },
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
    },
    {
      sequelize,
      modelName: "Shipment",
    }
  );
  return Shipment;
};
