"use strict";

const { faker } = require("@faker-js/faker");

const shipmentData = {
  shipment_date: new Date(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  country: faker.location.country(),
  zip_code: Math.floor(100000000 + Math.random() * 900000),
  customer_id: Math.floor(Math.random() * 9 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Shipments", [shipmentData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shipments", null, {});
  },
};
