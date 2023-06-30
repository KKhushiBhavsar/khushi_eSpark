"use strict";
const OrderData = {
  order_date: new Date(),
  total_price: Math.floor(Math.random() * 9 + 100000),
  customer_id: Math.floor(Math.random() * 9 + 1),
  payment_id: Math.floor(Math.random() * 9 + 1),
  shipment_id: Math.floor(Math.random() * 9 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
  orderitem_id: Math.floor(Math.random() * 9 + 100000),
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orders", [OrderData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
