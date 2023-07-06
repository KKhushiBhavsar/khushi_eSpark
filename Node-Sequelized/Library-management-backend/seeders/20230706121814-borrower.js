"use strict";
const { faker } = require("@faker-js/faker");
const borrowerData = {
  borrowed_from_date: faker.date.recent(),
  borrowed_to_date: faker.date.anytime(),
  actual_return_date: faker.date.future(),
  createdAt: new Date(),
  updatedAt: new Date(),
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Borrowers", [borrowerData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Borrowers", null, {});
  },
};
