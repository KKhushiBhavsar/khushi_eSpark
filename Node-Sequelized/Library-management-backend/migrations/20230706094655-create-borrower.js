"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Borrowers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Books",
          key: "id",
        },
      },
      borrowed_from_date: {
        type: Sequelize.STRING,
      },
      borrowed_to_date: {
        type: Sequelize.STRING,
      },
      actual_return_date: {
        type: Sequelize.STRING,
      },
      issued_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Staffs",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Borrowers");
  },
};
