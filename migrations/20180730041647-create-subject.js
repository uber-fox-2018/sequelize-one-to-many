'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subjectName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: now()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: now()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Subjects');
  }
};