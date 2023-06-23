"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {}
  }
  Profile.init(
    {
      user_id: DataTypes.INTEGER,
      fullname: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      gender: DataTypes.STRING,
      position: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
