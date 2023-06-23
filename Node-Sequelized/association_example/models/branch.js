"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    static associate(models) {
      Branch.belongsTo(models.Company, {
        foreignKey: "company_id",
      });
    }
  }
  Branch.init(
    {
      company_id: DataTypes.INTEGER,
      branch_name: DataTypes.STRING,
      branch_address: DataTypes.STRING,
      branch_city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Branch",
    }
  );
  return Branch;
};
