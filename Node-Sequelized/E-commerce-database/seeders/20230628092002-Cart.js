"use strict";
const CartData = {
  product_id: Math.floor(Math.random() * 9 + 1),
  customer_id: Math.floor(Math.random() * 9 + 1),
  quantity: Math.floor(Math.random() * 100),
  createdAt: new Date(),
  updatedAt: new Date(),
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Carts", [CartData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
