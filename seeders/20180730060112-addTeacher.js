'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Teachers', [
      {
      firstName: 'Bambang',
      lastName: 'Suprapto',
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'bambangsuprapto@sekolah.id',
    },
    {
      firstName: 'Rukmana',
      lastName: 'Fatmawati',
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'rukmanafatmawati@sekolah.id',
    },
    {
      firstName: 'Butet',
      lastName: 'Naiborhu',
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'butetnaiborhu@sekolah.id',
    },
    {
      firstName: 'Yulius',
      lastName: 'Prawiranegara',
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'Yuliusprawiranegara@sekolah.id',
    }
    ], {});
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
