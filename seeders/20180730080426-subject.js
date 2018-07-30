'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Subjects', [{
      subjectName: 'biologi',
      teacherId: 14,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      subjectName: 'kimia',
      teacherId: 15,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      subjectName: 'matematika',
      teacherId: 16,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      subjectName: 'sosiologi',
      createdAt : new Date(),
      updatedAt : new Date()
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {})
  }
};