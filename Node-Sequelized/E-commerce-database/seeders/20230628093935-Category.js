"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        { name: "Image & Sound", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Computer & Tablets",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HouseHold & Living",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Kitchen", createdAt: new Date(), updatedAt: new Date() },
        { name: "Sports & Care", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
