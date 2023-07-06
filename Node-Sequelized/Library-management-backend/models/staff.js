"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    static associate(models) {
      Staff.belongsTo(models.Borrower, {
        foreignKey: "issued_by",
      });
    }
  }
  Staff.init(
    {
      user_name: { type: DataTypes.STRING },
      is_admin: { type: DataTypes.BOOLEAN },
      designation: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Staff",
    }
  );
  return Staff;
};
