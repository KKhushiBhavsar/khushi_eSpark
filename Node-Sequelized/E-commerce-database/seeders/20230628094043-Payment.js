"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Payments",
      [
        {
          payment_date: new Date(),
          payment_method: "Online",
          amount: Math.floor(Math.random() * 9 + 100000),
          customer_id: Math.floor(Math.random() * 9 + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_date: new Date(),
          payment_method: "COD",
          amount: Math.floor(Math.random() * 9 + 100000),
          customer_id: Math.floor(Math.random() * 9 + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Payments", null, {});
  },
};
