"use strict";
const shelfData = {
  floor: 4,
  createdAt: new Date(),
  updatedAt: new Date(),
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Shelves", [shelfData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shelves", null, {});
  },
};
