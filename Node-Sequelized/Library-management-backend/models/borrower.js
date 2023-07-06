"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Borrower extends Model {
    static associate(models) {
      Borrower.hasMany(models.Book, {
        foreignKey: "book_id",
      });
      Borrower.hasOne(models.Staff, {
        foreignKey: "issued_by",
      });
      Borrower.hasOne(models.Student, {
        foreignKey: "borrower_id",
      });
    }
  }
  Borrower.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Books",
          key: "id",
        },
      },
      borrowed_from_date: { type: DataTypes.STRING },
      borrowed_to_date: { type: DataTypes.STRING },
      actual_return_date: { type: DataTypes.STRING },
      issued_by: {
        type: DataTypes.INTEGER,
        references: {
          model: "Staffs",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Borrower",
    }
  );
  return Borrower;
};
