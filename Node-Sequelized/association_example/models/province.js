"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    static associate(models) {
      Province.hasMany(models.City, {
        foreignKey: "prov_code",
        sourceKey: "prov_code",
      });
    }
  }
  Province.init(
    {
      prov_code: DataTypes.STRING,
      prov_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Province",
    }
  );
  return Province;
};
