"use strict";
const orderItemsData = {
  quantity: Math.floor(Math.random() * 9 + 100),
  price: Math.floor(Math.random() * 9 + 100000),
  product_id: Math.floor(Math.random() * 9 + 1),
  order_id: Math.floor(Math.random() * 9 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orderitems", [orderItemsData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orderitems", null, {});
  },
};
