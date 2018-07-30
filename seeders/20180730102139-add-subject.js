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

    const subject = [];
    ['Fisika', 'Ekonomi'].forEach(data => {
      subject.push({
        subjectName: data,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    });
    return queryInterface.bulkInsert('Subjects', subject, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Subjects', null, {});
  }
};