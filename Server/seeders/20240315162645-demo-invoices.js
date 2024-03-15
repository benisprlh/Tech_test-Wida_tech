'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
    await queryInterface.bulkInsert('Invoices', [
      {
        dateOfInvoice: '2021-01-01',
        customerName: 'John',
        salesPersonName: 'Doe',
        paymentType: 'CASH',
        note: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dateOfInvoice: '2021-01-01',
        customerName: 'John',
        salesPersonName: 'Doe',
        paymentType: 'CASH',
        note: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dateOfInvoice: '2021-01-03',
        customerName: 'Jane',
        salesPersonName: 'Doe',
        paymentType: 'CREDIT',
        note: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dateOfInvoice: '2021-01-04',
        customerName: 'Rock',
        salesPersonName: 'Pete',
        paymentType: 'NOTCASHORCREDIT',
        note: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dateOfInvoice: '2021-01-04',
        customerName: 'Frank',
        salesPersonName: '',
        paymentType: 'CASH',
        note: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dateOfInvoice: '2021-01-05',
        customerName: 'Jeff',
        salesPersonName: 'Pete',
        paymentType: 'CREDIT',
        note: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Invoices', null, {});
  }
};
