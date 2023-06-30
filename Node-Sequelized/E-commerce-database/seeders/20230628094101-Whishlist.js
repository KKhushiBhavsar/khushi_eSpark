"use strict";
const whishlistData = {
  product_id: Math.floor(Math.random() * 9 + 1),
  customer_id: Math.floor(Math.random() * 9 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Whishlists", [whishlistData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Whishlists", null, {});
  },
};
