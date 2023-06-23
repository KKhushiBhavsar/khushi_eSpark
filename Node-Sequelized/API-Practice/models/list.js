"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    static associate(models) {}
  }
  List.init(
    {
      task: DataTypes.STRING,
      who: DataTypes.STRING,
      dueDate: DataTypes.DATE,
      done: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "List",
    }
  );
  return List;
};
