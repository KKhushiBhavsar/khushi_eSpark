"use strict";
const { faker } = require("@faker-js/faker");
const staffData = {
  user_name: faker.person.fullName(),
  is_admin: 1,
  designation: faker.person.jobDescriptor(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Staffs", [staffData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Staffs", null, {});
  },
};
