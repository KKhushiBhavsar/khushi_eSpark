"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    static associate(models) {
      image.hasMany(models.comment, {
        foreignKey: "commenttableId",
        scope: {
          commenttableType: "images",
        },
      });
    }
  }
  image.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
