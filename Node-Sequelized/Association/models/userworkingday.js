"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userworkingday extends Model {
    static associate(models) {}
  }
  userworkingday.init(
    {
      userId: DataTypes.INTEGER,
      workingdayId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userworkingday",
    }
  );
  userworkingday.associate = function (models) {
    userworkingday.belongsTo(models.user, { foreignKey: "userId" });
    userworkingday.belongsTo(models.workingday, { foreignKey: "workingdayId" });
  };
  return userworkingday;
};
