"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orderitem extends Model {
    static associate(models) {
      Orderitem.hasMany(models.Product, { foreignKey: "product_id" });
      Orderitem.hasMany(models.Order, { foreignKey: "order_id" });
    }
  }
  Orderitem.init(
    {
      order_item_id: {
        type: DataTypes.INTEGER,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Orderitem",
    }
  );
  return Orderitem;
};
