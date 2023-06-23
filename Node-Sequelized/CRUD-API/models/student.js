"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    static associate(models) {}
  }
  student.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      department: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "student",
    }
  );
  return student;
};
