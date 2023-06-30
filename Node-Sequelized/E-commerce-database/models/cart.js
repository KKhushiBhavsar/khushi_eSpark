"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.hasOne(models.Customer, { foreignKey: "cart_id" });
      Cart.belongsToMany(models.Product, {
        through: "Cart_Product",
        as: "cart",
        foreignKey: "cart_id",
      });
    }
  }
  Cart.init(
    {
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Customers",
          key: "id",
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
