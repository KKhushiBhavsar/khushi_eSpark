"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    static associate(models) {
      comment.belongsTo(models.image, { foreignKey: "commentableId" });
      comment.belongsTo(models.video, { foreignKey: "commentableId" });
    }
  }
  comment.init(
    {
      commenttableType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      commenttableId: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      headline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  comment.addHook("afterFind", (findResult) => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
      if (
        instance.commentableType === "image" &&
        instance.image !== undefined
      ) {
        instance.commentable = instance.image;
      } else if (
        instance.commentableType === "video" &&
        instance.video !== undefined
      ) {
        instance.commentable = instance.video;
      }

      delete instance.image;
      delete instance.dataValues.image;
      delete instance.video;
      delete instance.dataValues.video;
    }
  });
  return comment;
};
