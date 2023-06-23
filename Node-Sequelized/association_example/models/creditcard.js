"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CreditCard extends Model {
    static associate(models) {
      CreditCard.belongsTo(models.Person, {
        foreignKey: "card_id",
      });
    }
  }
  CreditCard.init(
    {
      cardname: DataTypes.STRING,
      cardnbr: DataTypes.STRING,
      expired_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CreditCard",
    }
  );
  return CreditCard;
};
