"use strict";

const bookData = {
  no_of_copies_actual: Math.floor(Math.random() * 9 + 100),
  no_of_copies_current: Math.floor(Math.random() * 9 + 10),
  createdAt: new Date(),
  updatedAt: new Date(),
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Books", [bookData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
