"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: "category_id",
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
