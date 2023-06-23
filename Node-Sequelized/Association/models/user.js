"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {}
  }
  user.init(
    {
      email: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  user.associate = function (models) {
    user.belongsTo(models.company, { foreignKey: "companyId" });
    user.belongsTo(models.workingday, {
      through: "userworkingdays",
      foreignKey: "userId",
      as: "days",
    });
  };
  return user;
};
