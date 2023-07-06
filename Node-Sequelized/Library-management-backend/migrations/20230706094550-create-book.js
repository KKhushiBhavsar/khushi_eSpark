"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // ISBN: {
      //   type: Sequelize.INTEGER,
      // },
      book_title: {
        type: Sequelize.STRING,
      },
      publication_year: {
        type: Sequelize.INTEGER,
      },
      language: {
        type: Sequelize.STRING,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      no_of_copies_actual: {
        type: Sequelize.INTEGER,
      },
      no_of_copies_current: {
        type: Sequelize.INTEGER,
      },
      shelf_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Shelves",
          key: "id",
        },
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Authors",
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
    await queryInterface.dropTable("Books");
  },
};
