"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orderitem extends Model {
    static associate(models) {
      Orderitem.hasMany(models.Product, { foreignKey: "orderitem_id" });
      Orderitem.hasMany(models.Order, { foreignKey: "orderitem_id" });
    }
  }
  Orderitem.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Orderitem",
    }
  );
  return Orderitem;
};
