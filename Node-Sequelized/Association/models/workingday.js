"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workingday extends Model {
    static associate(models) {}
  }
  workingday.init(
    {
      weekday: DataTypes.STRING,
      workingdate: DataTypes.DATE,
      isworking: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "workingday",
    }
  );
  workingday.associate = function (models) {
    workingday.belongsToMany(models.user, {
      through: "userworkingdays",
      foreignKey: "workingdayId",
      as: "employee",
    });
  };
  return workingday;
};
