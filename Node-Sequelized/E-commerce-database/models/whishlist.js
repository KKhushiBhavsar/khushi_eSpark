"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Whishlist extends Model {
    static associate(models) {
      Whishlist.hasMany(models.Customer, { foreignKey: "whishlist_id" });
      Whishlist.hasMany(models.Product, {
        foreignKey: "whishlist_id",
      });
    }
  }
  Whishlist.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
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
      modelName: "Whishlist",
    }
  );
  return Whishlist;
};
