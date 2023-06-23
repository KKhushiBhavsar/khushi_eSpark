"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    static associate(models) {}
  }
  company.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "company",
    }
  );
  company.associate = function (models) {
    company.hasOne(models.user);
  };
  return company;
};
