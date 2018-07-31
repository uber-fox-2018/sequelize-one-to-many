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
    return queryInterface.bulkInsert('Teachers', [
      {
        first_name: 'Ari',
        last_name: 'Supriatna',
        email: 'arisupriatna703@gmail.com'
      },
      {
        first_name: 'Bambang',
        last_name: 'Suprapto',
        email: 'bambangsuprapto@gmail.com'
      },
      {
        first_name: 'Rukmana',
        last_name: 'Fatmawati',
        email: 'rukmanafatmawati@gmail.com'
      },
      {
        first_name: 'Butet',
        last_name: 'Naiborhu',
        email: 'butetnaiborhu@gmail.com'
      },
      {
        first_name: 'Yulius',
        last_name: 'Prawiranegara',
        email: 'yuliusprawiranegara@gmail.com'
      }
    ])
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
