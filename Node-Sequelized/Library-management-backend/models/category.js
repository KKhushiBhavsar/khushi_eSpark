"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Book, { foreignKey: "category_id" });
    }
  }
  Category.init(
    {
      category_name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
