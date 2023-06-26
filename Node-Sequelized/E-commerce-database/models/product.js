"use strict";
const { Model } = require("sequelize");
const whishlist = require("./whishlist");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Cart, { foreignKey: "product_id" });
      Product.hasMany(models.Category, { foreignKey: "category_id" });
      Product.belongsTo(models.Whishlist, { foreignKey: "product_id" });
      Product.belongsTo(models.Orderitem, { foreignKey: "product_id" });
    }
  }
  Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
