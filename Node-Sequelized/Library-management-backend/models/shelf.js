"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shelf extends Model {
    static associate(models) {
      Shelf.hasMany(models.Book, {
        foreignKey: "shelf_id",
      });
    }
  }
  Shelf.init(
    {
      floor: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Shelf",
    }
  );
  return Shelf;
};
