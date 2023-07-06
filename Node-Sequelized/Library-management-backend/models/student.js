"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.Borrower, {
        foreignKey: "borrower_id",
      });
    }
  }
  Student.init(
    {
      student_name: { type: DataTypes.STRING },
      gender: { type: DataTypes.STRING },
      date_of_birth: { type: DataTypes.STRING },
      borrower_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Borrowers",
          key: "id",
        },
      },
      department: { type: DataTypes.STRING },
      contact_no: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
