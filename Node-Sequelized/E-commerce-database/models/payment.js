"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Order, { foreignKey: "payment_id" });
      Payment.hasMany(models.Customer, { foreignKey: "customer_id" });
    }
  }
  Payment.init(
    {
      payment_id: {
        type: DataTypes.INTEGER,
      },
      payment_date: {
        type: DataTypes.DATE,
      },
      payment_method: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
