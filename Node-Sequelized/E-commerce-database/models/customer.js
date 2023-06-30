"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Order, { foreignKey: "customer_id" });
      Customer.belongsTo(models.Cart, { foreignKey: "cart_id" });
      Customer.belongsTo(models.Whishlist, { foreignKey: "whishlist_id" });
      Customer.belongsTo(models.Payment, { foreignKey: "payment_id" });
      Customer.belongsTo(models.Shipment, { foreignKey: "shipment_id" });
    }
  }
  Customer.init(
    {
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
