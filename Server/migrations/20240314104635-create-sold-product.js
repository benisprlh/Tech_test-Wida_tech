'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SoldProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false

      },
      totalCogs: {
        type: Sequelize.INTEGER,
        allowNull: false

      },
      totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false

      },
      InvoiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Invoices",
          key: "id"
        },
        allowNull: false

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SoldProducts');
  }
};