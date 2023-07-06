"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsToMany(models.Author, {
        through: "author_book",
        as: "book",
        foreignKey: "author_id",
      });
      Book.belongsTo(models.Category, { foreignKey: "category_id" });
      Book.belongsTo(models.Shelf, { foreignKey: "shelf_id" });
    }
  }
  Book.init(
    {
      // ISBN: { type: DataTypes.INTEGER },
      book_title: { type: DataTypes.STRING },
      publication_year: { type: DataTypes.INTEGER },
      language: { type: DataTypes.STRING },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      no_of_copies_actual: { type: DataTypes.INTEGER },
      no_of_copies_current: { type: DataTypes.INTEGER },
      shelf_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Shelves",
          key: "id",
        },
      },
      author_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Authors",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
