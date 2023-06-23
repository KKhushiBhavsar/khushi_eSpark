"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.Province, {
        foreignKey: "prov_code",
        targetKey: "prov_code",
      });
    }
  }
  City.init(
    {
      prov_code: DataTypes.STRING,
      city_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
