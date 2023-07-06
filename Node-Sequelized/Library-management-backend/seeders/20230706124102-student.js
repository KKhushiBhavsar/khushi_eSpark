"use strict";
const { faker } = require("@faker-js/faker");
const studentData = {
  student_name: faker.person.fullName(),
  gender: faker.person.gender(),
  date_of_birth: faker.date.past(),
  department: "Computer",
  contact_no: Math.floor(100000000 + Math.random() * 900000000),
  createdAt: new Date(),
  updatedAt: new Date(),
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Students", [studentData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Students", null, {});
  },
};
