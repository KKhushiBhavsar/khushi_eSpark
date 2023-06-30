"use strict";
const { faker } = require("@faker-js/faker");
const customerDetails = {
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  email: faker.internet.email(),
  password: Math.floor(Math.random() * 9 + 1000),
  address: faker.location.streetAddress(),
  phone_number: Math.floor(100000000 + Math.random() * 900000000),
  createdAt: new Date(),
  updatedAt: new Date(),
  cart_id: Math.floor(Math.random() * 9 + 1),
  whishlist_id: Math.floor(Math.random() * 9 + 1),
  payment_id: Math.floor(Math.random() * 9 + 1),
  shipment_id: Math.floor(Math.random() * 9 + 1),
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Customers", [customerDetails], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
