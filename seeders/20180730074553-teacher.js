'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Teachers', [{
      firstName: 'joni',
      lastName: 'muharam',
      email: 'muharam@mail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      firstName: 'mumun',
      lastName: 'liam',
      email: 'liam@mail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      firstName: 'lee',
      lastName: 'rock',
      email: 'rock@mail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      firstName: 'budi',
      lastName: 'johan',
      email: 'johan@mail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      firstName: 'samm',
      lastName: 'ling',
      email: 'ling@mail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {})
  }
};