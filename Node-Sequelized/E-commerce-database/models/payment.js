"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.hasMany(models.Order, { foreignKey: "payment_id" });
      Payment.hasMany(models.Customer, { foreignKey: "payment_id" });
    }
  }
  Payment.init(
    {
      payment_date: {
        type: DataTypes.DATE,
      },
      payment_method: {
        type: DataTypes.STRING,
      },
      amount: {
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
      modelName: "Payment",
    }
  );
  return Payment;
};
