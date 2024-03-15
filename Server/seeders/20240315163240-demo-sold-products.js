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
    */
    await queryInterface.bulkInsert('SoldProducts', [
      {
        InvoiceId: 1,
        item: 'Bluetooth speaker',
        quantity: 3,
        totalCogs: 630000,
        totalPrice: 756000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InvoiceId: 1,
        item: 'Headphone',
        quantity: 8,
        totalCogs: 400000,
        totalPrice: 480000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InvoiceId: 2,
        item: 'Laptop charger',
        quantity: 4,
        totalCogs: 800000,
        totalPrice: 960000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InvoiceId: 3,
        item: 'LCD Monitor',
        quantity: 1,
        totalCogs: 500000,
        totalPrice: 600000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InvoiceId: 6,
        item: 'Bluetooth speaker',
        quantity: 2,
        totalCogs: 420000,
        totalPrice: 504000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InvoiceId: 4,
        item: 'Headphone',
        quantity: 1,
        totalCogs: 50000,
        totalPrice: 60000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InvoiceId: 5,
        item: 'Laptop charger',
        quantity: 3,
        totalCogs: 600000,
        totalPrice: 720000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InvoiceId: 3,
        item: 'Bluetooth speaker',
        quantity: 1,
        totalCogs: 210000,
        totalPrice: 252000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InvoiceId: 6,
        item: 'Bluetooth speaker',
        quantity: 1,
        totalCogs: 210000,
        totalPrice: 252000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        InvoiceId: 6,
        item: 'Headphone',
        quantity: 2,
        totalCogs: 50000, 
        totalPrice: 120000,
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
    await queryInterface.bulkDelete('SoldProducts', null, {});
  }
};
