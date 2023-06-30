"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: "customer_id" });
      Order.belongsTo(models.Payment, { foreignKey: "payment_id" });
      Order.belongsTo(models.Shipment, { foreignKey: "shipment_id" });
      Order.belongsTo(models.Orderitem, { foreignKey: "orderitem_id" });
    }
  }
  Order.init(
    {
      order_date: {
        type: DataTypes.DATE,
      },
      total_price: {
        type: DataTypes.INTEGER,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Customers",
          key: "id",
        },
      },
      payment_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Payments",
          key: "id",
        },
      },
      shipment_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Shipments",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
