"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn("users", "city");
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn("users", "city", {
      type: Sequelize.STRING,
    });
  },
};
