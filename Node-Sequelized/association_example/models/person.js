"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {}
  }
  Person.init(
    {
      fullname: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      card_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Person",
    }
  );
  return Person;
};
