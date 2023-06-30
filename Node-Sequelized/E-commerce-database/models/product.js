"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "category_id",
      });
      Product.belongsToMany(models.Cart, {
        through: "Cart_Product",
        as: "products",
        foreignKey: "product_id",
      });
      Product.belongsTo(models.Whishlist, {
        foreignKey: "whishlist_id",
      });
      Product.belongsTo(models.Orderitem, {
        foreignKey: "orderitem_id",
      });
    }
  }
  Product.init(
    {
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
