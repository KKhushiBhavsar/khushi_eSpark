"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.belongsToMany(models.Book, {
        through: "author_book",
        as: "author",
        foreignKey: "author_id",
      });
    }
  }
  Author.init(
    {
      name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Author",
    }
  );
  return Author;
};
