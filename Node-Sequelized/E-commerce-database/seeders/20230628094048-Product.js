"use strict";
"use strict";

const ProdcutData = {
  description: Math.random().toString(36).substring(2, 7),
  price: Math.floor(Math.random() * 9 + 100000),
  stock: Math.floor(Math.random() * 9 + 100),
  category_id: Math.floor(Math.random() * 9 + 1),
  orderitem_id: Math.floor(Math.random() * 9 + 1),
  whishlist_id: Math.floor(Math.random() * 9 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [ProdcutData], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
