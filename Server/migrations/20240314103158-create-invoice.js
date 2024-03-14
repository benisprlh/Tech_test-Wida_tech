'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateOfInvoice: {
        type: Sequelize.DATE,
        allowNull: false

      },
      customerName: {
        type: Sequelize.STRING,
        allowNull: false

      },
      salesPersonName: {
        type: Sequelize.STRING,
        allowNull: false

      },
      paymentType: {
        type: Sequelize.STRING,
        allowNull: false

      },
      note: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Invoices');
  }
};