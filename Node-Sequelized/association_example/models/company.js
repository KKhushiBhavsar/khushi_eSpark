"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.Branch, {
        foreignKey: "company_id",
        as: "branches",
      });
    }
  }
  Company.init(
    {
      company_name: DataTypes.STRING,
      company_address: DataTypes.STRING,
      company_city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
