"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Whishlist extends Model {
    static associate(models) {
      Whishlist.belongsTo(models.Customer, { foreignKey: "whishlist_id" });
      Whishlist.hasMany(models.Product, { foreignKey: "product_id" });
    }
  }
  Whishlist.init(
    {
      whishlist_id: {
        type: DataTypes.INTEGER,
      },
      whishlist_product_id: {
        type: DataTypes.INTEGER,
      },
      whishlist_product: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Whishlist",
    }
  );
  return Whishlist;
};
