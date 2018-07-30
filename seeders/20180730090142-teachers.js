'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const arrTeachers = [];
    const fs = require('fs');
    const teachers = fs.readFileSync('./teachers.csv', 'utf8')
      .split('\n')
      .slice(1)
      .map(data => data.split(','))
      .forEach(data => arrTeachers.push({
        firstName: data[0],
        lastName: data[1],
        email: data[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }));
   
    return queryInterface.bulkInsert('Teachers', arrTeachers, {})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});

  }
};

