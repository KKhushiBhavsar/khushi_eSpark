"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: "order_id" });
      Order.hasMany(models.Payment, { foreignKey: "payment_id" });
      Order.hasMany(models.Shipment, { foreignKey: "shipment_id" });
      Order.belongsTo(models.Orderitem, { foreignKey: "order_id" });
    }
  }
  Order.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
      },
      order_date: {
        type: DataTypes.DATE,
      },
      total_price: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
