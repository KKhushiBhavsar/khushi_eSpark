"use strict";
const { Model } = require("sequelize");
const comment = require("./comment");
module.exports = (sequelize, DataTypes) => {
  class video extends Model {
    static associate(models) {
      video.hasMany(models.comment, {
        foreignKey: "commenttableId",
        scope: {
          commenttableType: "videos",
        },
      });
    }
  }
  video.init(
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
      modelName: "video",
    }
  );
  return video;
};
